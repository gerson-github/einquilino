<template>
  <div class="flex flex-col space-y-1">

    <label class="text-sm font-medium text-gray-600">
      {{ field.label }}
      <span v-if="field.required" class="text-red-500">*</span>
    </label>

    <!-- TEXT -->
    <input
      v-if="field.type === 'text'"
      v-model="model"
      type="text"
      class="input"
      :required="field.required"
    />

    <!-- NUMBER -->
    <input
      v-else-if="field.type === 'number'"
      v-model="model"
      type="number"
      class="input"
    />

    <!-- DATE -->
    <input
      v-else-if="field.type === 'date'"
      v-model="model"
      type="date"
      class="input"
    />

    <!-- SELECT -->
    <select
      v-else-if="field.type === 'select'"
      v-model="model"
      class="input"
    >
      <option value="">Select</option>
      <option
        v-for="opt in field.options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>

  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  field: Object,
  modelValue: [String, Number, Date]
})

const emit = defineEmits(["update:modelValue"])

const model = computed({
  get: () => props.modelValue,
  set: val => emit("update:modelValue", val)
})
</script>

