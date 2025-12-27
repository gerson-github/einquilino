<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-800">
      {{ template.templateName }}
    </h1>

    <form @submit.prevent="submitForm" class="space-y-10">
      <section
        v-for="group in template.groups"
        :key="group.id"
        class="bg-white rounded-2xl shadow p-6 space-y-6"
      >
        <h2 class="text-lg font-semibold text-gray-700 border-b pb-2">
          {{ group.name }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FieldRenderer
            v-for="field in group.fields"
            :key="field.id"
            :field="field"
            v-model="formData[field.key]"
          />
        </div>
      </section>

      <div class="flex justify-end">
        <button
          type="submit"
          class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Save Contract
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import FieldRenderer from "@/components/fieldRenderer.vue";

const template = ref({}); // hardcoded test data
const formData = ref({});

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

const submitForm = () => {
  console.log("Payload:", formData.value);
};
</script>
