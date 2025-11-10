<script setup>
import { icons } from "./Icons.jsx";

//import CircleIcon from "./CircleIcon.jsx";

const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: "w-5 h-5" },
});

// const icons = {
//   circle: CircleIcon,
// };
</script>

<template>
  <component :is="icons[name]" :class="class" />
</template>
