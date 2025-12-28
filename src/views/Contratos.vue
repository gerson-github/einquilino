<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-800">
      {{ template.templateName }}
    </h1>

    <!-- Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
        :style="{
          width: `${((currentStep + 1) / template.groups.length) * 100}%`,
        }"
      ></div>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Left Side: Persistent Groups List -->
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
          <div v-if="template.groups && template.groups.length > 0">
            <!-- Step Container -->
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import FieldRenderer from "@/components/fieldRenderer.vue";

const template = ref({ groups: [] });
const formData = ref({});
const currentStep = ref(0);

onMounted(() => {
  template.value = {
    templateName: "Residential Lease Agreement",
    groups: [
      {
        id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        name: "Template de Teste",
        fields: [
          {
            id: "11111111-1111-1111-1111-111111111111",
            key: "tenant_name",
            label: "Tenant Name",
            type: "text",
            required: true,
            position: 1,
            options: null,
            settings: {
              placeholder: "Full legal name",
            },
          },
          {
            id: "22222222-2222-2222-2222-222222222222",
            key: "start_date",
            label: "Start Date",
            type: "date",
            required: true,
            position: 2,
            options: null,
            settings: null,
          },
          {
            id: "33333333-3333-3333-3333-333333333333",
            key: "end_date",
            label: "End Date",
            type: "date",
            required: false,
            position: 3,
            options: null,
            settings: {
              visible_if: {
                field: "start_date",
                not_null: true,
              },
            },
          },
          {
            id: "44444444-4444-4444-4444-444444444444",
            key: "rent_amount",
            label: "Monthly Rent Amount",
            type: "number",
            required: true,
            position: 4,
            options: {
              min: 0,
              currency: "USD",
            },
            settings: {
              format: "currency",
            },
          },
          {
            id: "55555555-5555-5555-5555-555555555555",
            key: "payment_frequency",
            label: "Payment Frequency",
            type: "select",
            required: true,
            position: 5,
            options: {
              options: ["monthly", "bi-weekly"],
            },
            settings: null,
          },
        ],
      },
    ],
  };

  // initialize formData
  template.value.groups.forEach((group) => {
    group.fields.forEach((field) => {
      formData.value[field.key] = "";
    });
  });
});

const nextStep = () => {
  if (currentStep.value < template.value.groups.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const submitForm = () => {
  console.log("Payload:", formData.value);
  alert("Form submitted successfully!");
};
</script>

live
