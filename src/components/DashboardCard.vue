<script setup>

import { Bell } from "lucide-vue-next";

const props = defineProps({
  icon: { type: Object, default: Bell },
  strTitle: { type: String, default: "" },
  strValue: { type: String, default: "" },
  bgIconClass: { type: String, default: "bg-blue-200" },
});
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div class="flex items-center">
      <div :class="['p-3 rounded-lg', bgIconClass]">
        <component :is="icon" class="w-8 h-8 text-blue-600" />
      </div>

      <div class="ml-4">
        <p class="text-sm font-medium text-gray-600">{{ strTitle }}</p>
        <p class="text-2xl font-bold text-gray-900">{{ strValue }}</p>
      </div>
    </div>
  </div>
</template>

<!-- <script  >
// import { ref, onMounted} from "vue";
//import { defineProps } from "vue";

defineProps({
  strTitle: String,
  strValue: String,
  bgIconClass: { type: String, default: 'bg-blue-100' } // dynamic icon bg
})
</script> 

fdf
onMounted(async () => {
  try {
    const res = await fetch("/api/statbox");

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const data = await res.json();

    if (data?.title) {
      title.value = data.title;
    }

    if (data?.value) {
      value.value = data.value;
    }

  } catch (err) {
    console.error("Cannot find InfoCard:", err);
  }
});

-->
