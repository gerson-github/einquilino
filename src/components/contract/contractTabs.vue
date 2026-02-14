<script setup>
import { ref } from "vue";
import ContractForm from "./ContractForm.vue";
import ContractFiles from "./contractFiles.vue";
import ContractNotes from "./ContractNotes.vue";

const activeTab = ref("contract");

// you probably already have this data coming from API
const contract = ref(null);

const tabClass = (tab) => {
  const base = "inline-block p-4 border-b-4 rounded-t-base transition-colors border-blue-600";

  const active = "text-purple border-purple";

  const inactive =
    "border-transparent text-body hover:text-fg-brand hover:border-brand";

  return `${base} ${activeTab.value === tab ? active : inactive}`;
};
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Tabs -->
    <div class="mb-4 border-default ">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        role="tablist"
      >
        <li class="me-2" role="presentation">
          <button
            type="button"
            role="tab"
            @click="activeTab = 'contract'"
            :class="tabClass('contract')"
          >
            Contract
          </button>
        </li>

        <li class="me-2" role="presentation">
          <button
            type="button"
            role="tab"
            @click="activeTab = 'files'"
            :class="tabClass('files')"
          >
            Files Uploaded
          </button>
        </li>

        <li role="presentation">
          <button
            type="button"
            role="tab"
            @click="activeTab = 'notes'"
            :class="tabClass('notes')"
          >
            Notes
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab content -->
    <ContractForm v-if="activeTab === 'contract'" :contract="contract" />

    <ContractFiles v-if="activeTab === 'files'" :contract="contract" />

    <ContractNotes v-if="activeTab === 'notes'" :contract="contract" />
  </div>
</template>

<script>
export default {
  methods: {
    tabClass(tab) {
      return [
        "pb-3 text-sm font-medium transition ",
        this.activeTab === tab
          ? "border-b-4 border-blue-600 text-blue-600"
          : "text-blue-500 hover:text-gray-700",
      ];
    },
  },
};
</script>
