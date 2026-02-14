<script setup>
import { ref } from 'vue'

const notes = ref('')

function saveNotes() {
  console.log('notes:', notes.value)
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border p-6">
    <h2 class="text-xl font-bold mb-4">Notes</h2>

    <textarea
      v-model="notes"
      rows="6"
      class="w-full border rounded-xl p-3"
      placeholder="Write notes about this contract..."
    />

    <button
      class="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      @click="saveNotes"
    >
      Save Notes
    </button>
  </div>
</template>
