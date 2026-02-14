<template>


  <div class="p-4 max-w-sm">
    <label class="block mb-2 font-semibold">Select Name:</label>
    
    <select
      v-model="selectedName"
      class="w-full p-2 border rounded"
    >
      <option value="" disabled>Select a name</option>
      <option
        v-for="name in names"
        :key="name"
        :value="name"
      >
        {{ name }}
      </option>
    </select>

    <p class="mt-2 text-gray-600">Selected: {{ selectedName }}</p>

    <div v-if="loading" class="mt-2 text-blue-600">Loading...</div>
    <div v-if="error" class="mt-2 text-red-600">{{ error }}</div>
  </div>



</template>

<script setup>

import { ref, onMounted } from "vue";
import { useNames } from "@/composables/useNames";

const selectedName = ref("");

const { names, loading, error, loadNames } = useNames();

onMounted(() => {
  loadNames();
});


// import { ref, onMounted } from "vue";
// import FieldRenderer from "@/components/fieldRenderer.vue";

// import { useTemplates } from "../composables/useTemplates";

// const { templates, loading, error, loadTemplates } = useTemplates();

// onMounted(() => {

//   console.log("step1 contratos VUE");

//   loadTemplates();

//   console.log("step2 loadTemplate executed !!");

// });


// const template = ref({ groups: [] });
// const formData = ref({});
// const currentStep = ref(0);

// onMounted(() => {
//   template.value = {
//     templateName: "Residential Lease Agreement",
//     groups: [
//       {
//         id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
//         name: "Template de Teste",
//         fields: [
//           {
//             id: "11111111-1111-1111-1111-111111111111",
//             key: "tenant_name",
//             label: "Tenant Name",
//             type: "text",
//             required: true,
//             position: 1,
//             options: null,
//             settings: {
//               placeholder: "Full legal name",
//             },
//           },
//           {
//             id: "22222222-2222-2222-2222-222222222222",
//             key: "start_date",
//             label: "Start Date",
//             type: "date",
//             required: true,
//             position: 2,
//             options: null,
//             settings: null,
//           },
//           {
//             id: "33333333-3333-3333-3333-333333333333",
//             key: "end_date",
//             label: "End Date",
//             type: "date",
//             required: false,
//             position: 3,
//             options: null,
//             settings: {
//               visible_if: {
//                 field: "start_date",
//                 not_null: true,
//               },
//             },
//           },
//           {
//             id: "44444444-4444-4444-4444-444444444444",
//             key: "rent_amount",
//             label: "Monthly Rent Amount",
//             type: "number",
//             required: true,
//             position: 4,
//             options: {
//               min: 0,
//               currency: "USD",
//             },
//             settings: {
//               format: "currency",
//             },
//           },
//           {
//             id: "55555555-5555-5555-5555-555555555555",
//             key: "payment_frequency",
//             label: "Payment Frequency",
//             type: "select",
//             required: true,
//             position: 5,
//             options: {
//               options: ["monthly", "bi-weekly"],
//             },
//             settings: null,
//           },
//         ],
//       },
//     ],
//   };

//   // initialize formData
//   template.value.groups.forEach((group) => {
//     group.fields.forEach((field) => {
//       formData.value[field.key] = "";
//     });
//   });


// });

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
