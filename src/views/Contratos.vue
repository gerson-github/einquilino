<template>
  <!-- Protege todo o conteúdo que depende do template -->
  <div
    v-if="template && template.groups"
    class="max-w-6xl mx-auto p-6 space-y-8"
  >
    <h1 class="text-2xl font-bold text-gray-800">
      {{ template.templateName }}
    </h1>

    <!-- Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        :style="{ width: progressWidth }"
      ></div>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Left Side: Groups List -->
      <aside class="md:w-1/4 space-y-4">
        <h2 class="text-lg font-semibold text-gray-700 px-2">Groups</h2>
        <nav class="flex flex-col gap-2">
          <button
            v-for="(group, index) in template.groups"
            :key="group.id"
            type="button"
            @click="currentStep = index"
            :class="[
              'text-left px-4 py-3 rounded-xl transition-all duration-200 border',
              currentStep === index
                ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium shadow-sm'
                : 'bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-200',
            ]"
          >
            <div class="flex items-center gap-3">
              <span
                :class="[
                  'w-6 h-6 flex items-center justify-center rounded-full text-xs',
                  currentStep === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-500',
                ]"
              >
                {{ index + 1 }}
              </span>
              {{ group.name }}
            </div>
          </button>
        </nav>
      </aside>

      <!-- Right Side: Form Content -->
      <div class="md:w-3/4">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div v-if="template.groups.length > 0">
            <section
              v-for="(group, index) in template.groups"
              :key="group.id"
              v-show="currentStep === index"
              class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <div class="mb-6 border-b border-gray-50 pb-4">
                <h2 class="text-xl font-bold text-gray-800">
                  {{ group.name }}
                </h2>
                <p class="text-sm text-gray-500 mt-1">
                  Step {{ index + 1 }} of {{ template.groups.length }}
                </p>
              </div>

              <div class="grid grid-cols-1 gap-6">
                <FieldRenderer
                  v-for="field in group.fields"
                  :key="field.id"
                  :field="field"
                  v-model="formData[field.key]"
                />
              </div>
            </section>

            <!-- Navigation Buttons -->
            <div class="flex justify-between items-center mt-8">
              <button
                type="button"
                @click="prevStep"
                :disabled="currentStep === 0"
                class="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Return
              </button>

              <div class="flex gap-4">
                <button
                  v-if="currentStep < template.groups.length - 1"
                  type="button"
                  @click="nextStep"
                  class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Advance
                </button>

                <button
                  v-else
                  type="submit"
                  class="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                >
                  Save Contract
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Loading / Error -->
  <div v-else-if="loading" class="p-8 text-gray-500">Loading template...</div>
  <div v-else-if="error" class="p-8 text-red-600">{{ error }}</div>
</template>

<script setup>
import { ref, onMounted, watch, computed, version } from "vue";
import FieldRenderer from "@/components/fieldRenderer.vue";
import { useTemplate } from "@/composables/useTemplate";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api";

const formData = ref({});
const currentStep = ref(0);

const { template, loading, error, loadTemplate } = useTemplate();

watch(template, (val) => {
  console.log("TEMPLATE RECEBIDO:", val);
});

// Carrega template ao montar
onMounted(() => {
  //loadTemplate("a1b2c3d4-e5f6-7890-1234-567890abcdef");
  loadTemplate("c1111111-1111-1111-1111-111111111111");
});

// Inicializa formData **quando o template chega**
watch(template, (newTemplate) => {
  if (!newTemplate?.groups) return;
  formData.value = {};
  newTemplate.groups.forEach((group) => {
    group.fields.forEach((field) => {
      formData.value[field.key] = field.value ?? "";
    });
  });
});




// Navegação steps
const nextStep = () => {
  if (currentStep.value < template.value.groups.length - 1) currentStep.value++;
};
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--;
};

// Submit
const submitForm = () => {
  //console.log("Payload:", formData.value);
  //alert("Form submitted successfully!");

  try {

    axios.post(`${API_URL}/contract-data`, {
      templateId: template.value.id,
      version: template.value.version,
      submittedAt: new Date().toISOString(),
      data: formData.value,
    });

    alert("Contract saved successfully!");

  } catch (error) {
    console.error("Error saving contract:", error);
    alert("Failed to save contract. Please try again.");
  }

};

// Computed para progress bar
const progressWidth = computed(() => {
  if (!template.value?.groups?.length) return "0%";
  return `${((currentStep.value + 1) / template.value.groups.length) * 100}%`;
});
</script>
