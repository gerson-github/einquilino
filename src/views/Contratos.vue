<template>
  <div class="max-w-5xl mx-auto p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-800">
      {{ template.templateName }}
    </h1>

    <!-- Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div 
        class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
        :style="{ width: `${((currentStep + 1) / template.groups.length) * 100}%` }"
      ></div>
    </div>

    <form @submit.prevent="submitForm" class="space-y-10">
      <div v-if="template.groups && template.groups.length > 0">
        <!-- Step Container -->
        <section
          v-for="(group, index) in template.groups"
          :key="group.id"
          v-show="currentStep === index"
          class="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8"
        >
          <!-- Left Side: Group Label/Info -->
          <div class="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-8">
            <h2 class="text-xl font-bold text-gray-800 mb-2">
              {{ group.name }}
            </h2>
            <p class="text-sm text-gray-500">
              Step {{ index + 1 }} of {{ template.groups.length }}
            </p>
          </div>

          <!-- Right Side: Fields -->
          <div class="md:w-2/3">
            <div class="grid grid-cols-1 gap-6">
              <FieldRenderer
                v-for="field in group.fields"
                :key="field.id"
                :field="field"
                v-model="formData[field.key]"
              />
            </div>
          </div>
        </section>

        <!-- Navigation Buttons -->
        <div class="flex justify-between items-center mt-8">
          <button
            type="button"
            @click="prevStep"
            
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import FieldRenderer from "@/components/fieldRenderer.vue";

const template = ref({ groups: [] });
const formData = ref({});
const currentStep = ref(0);

onMounted(() => {
  template.value = {
    templateName: "Test Rental Contract 2",
    groups: [
      // Group 1: Payment Terms
      {
        id: "group-1",
        name: "Payment Terms",
        fields: [
          {
            id: "field-1",
            key: "rent_amount",
            label: "Rent Amount",
            type: "number",
            required: true,
            options: [
              { label: "Monthly", value: "monthly" },
              { label: "Weekly", value: "weekly" },
            ],
            settings: {
              placeholder: "0.00",
              min: 0,
            },
          },
          {
            id: "field-2",
            key: "due_date",
            label: "Due Date",
            type: "date",
            required: true,
            settings: {
              placeholder: "Select a date",
            },
          },
          {
            id: "field-3",
            key: "tenant_name",
            label: "Name",
            type: "text",
            required: true,
            settings: {
              placeholder: "Enter tenant name",
            },
          },
        ],
      },

      // Group 2: Address
      {
        id: "group-2",
        name: "Address",
        fields: [
          {
            id: "field-4",
            key: "street",
            label: "Street",
            type: "text",
            required: true,
            settings: {
              placeholder: "Enter street",
            },
          },
          {
            id: "field-5",
            key: "city",
            label: "City",
            type: "text",
            required: true,
            settings: {
              placeholder: "Enter city",
            },
          },
          {
            id: "field-6",
            key: "zip_code",
            label: "ZIP Code",
            type: "text",
            required: false,
            settings: {
              placeholder: "Enter ZIP code",
            },
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
