<script setup>
import { ref } from 'vue'

const uploadedFiles = ref([])

function handleFilesUpload(event) {
  const files = Array.from(event.target.files)

  uploadedFiles.value.push(
    ...files.map(f => ({
      id: crypto.randomUUID(),
      name: f.name,
      file: f
    }))
  )
}

function removeFile(id) {
  uploadedFiles.value = uploadedFiles.value.filter(f => f.id !== id)
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border p-6">
    <h2 class="text-xl font-bold mb-4">Uploaded Files</h2>

    <input type="file" multiple class="mb-4" @change="handleFilesUpload" />

    <ul class="space-y-2">
      <li
        v-for="file in uploadedFiles"
        :key="file.id"
        class="flex justify-between items-center border rounded-lg p-3"
      >
        <span>{{ file.name }}</span>

        <button
          class="text-red-600 text-sm"
          @click="removeFile(file.id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
