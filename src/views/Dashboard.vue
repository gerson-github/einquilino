<template>
  <main class="flex-1 p-6 overflow-auto">
    <!-- Stats Cards -->

    <!-- Total Contratos -->

    <!-- <pre>{{ indicators }}</pre> -->

    <div v-if="loading">Loading...</div>

    <div v-else-if="indicators">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <infoCard
          :icon="FileText"
          strTitle="Pgto Pendentes"
          :strValue="indicators.pending_payments_value"
        />

        <infoCard
          :icon="CheckCircle"
          strTitle="Receita Prevista"
          :strValue="indicators.expected_revenue"
        />

        <infoCard
          :icon="Clock"
          strTitle="Receita Recebida"
          :strValue="indicators.received_revenue"
        />

        <infoCard
          :icon="DollarSign"
          strTitle="Receita Mensal"
          :strValue="indicators.monthly_revenue"
        />
      </div>
    </div>

    <div v-else-if="error">
      <p>Error while loading data: {{ error }}</p>
    </div>

    <!-- Recent Contracts Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">
            Contratos Recentes
          </h3>
          <div class="flex space-x-3">
            <button
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="plus"
                class="lucide lucide-plus w-4 h-4 mr-2 inline"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Novo Contrato
            </button>
            <button
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="download"
                class="lucide lucide-download w-4 h-4 mr-2 inline"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Exportar
            </button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Imóvel
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Locatário
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Valor
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vencimento
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">
                  Rua das Flores, 123
                </div>
                <div class="text-sm text-gray-500">Apartamento 2 quartos</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Maria Silva</div>
                <div class="text-sm text-gray-500">maria@email.com</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                R$ 2.500,00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                10/06/2025
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >Ativo</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="eye"
                      class="lucide lucide-eye w-4 h-4"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button class="text-green-600 hover:text-green-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="edit"
                      class="lucide lucide-edit w-4 h-4"
                    >
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path>
                    </svg>
                  </button>
                  <button class="text-red-600 hover:text-red-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="trash-2"
                      class="lucide lucide-trash-2 w-4 h-4"
                    >
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">
                  Av. Central, 456
                </div>
                <div class="text-sm text-gray-500">Casa 3 quartos</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">João Santos</div>
                <div class="text-sm text-gray-500">joao@email.com</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                R$ 3.200,00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                15/06/2025
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                  >Pendente</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="eye"
                      class="lucide lucide-eye w-4 h-4"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button class="text-green-600 hover:text-green-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="edit"
                      class="lucide lucide-edit w-4 h-4"
                    >
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      ></path>
                    </svg>
                  </button>
                  <button class="text-red-600 hover:text-red-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="trash-2"
                      class="lucide lucide-trash-2 w-4 h-4"
                    >
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <!-- <div v-if="loading">Loading...</div>

  <div v-else-if="indicators">
    <p>Monthly revenue: {{ indicators.monthly_revenue }}</p>
    <p>Pending payments: {{ indicators.pending_payments_qty }}</p>
  </div>

  <div v-else-if="error">{{ error }}</div>

  <pre>{{ { indicators, loading, error } }}</pre> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import InfoCard from "@/components/DashboardCard.vue";
import {
  CheckCircle,
  FileText,
  Users,
  Clock,
  DollarSign,
} from "lucide-vue-next";
// import ContractTable from "./views/components/ContractTable.vue";
import { useIndicators } from "@/composables/useIndicators.js";

const { indicators, loading, error, loadIndicators } = useIndicators();

onMounted(() => {
  loadIndicators();
});

function formatCurrency(v) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(v);
}
</script>

<!-- 
//propriedade
// const props = defineProps ({
// icon: {type:Object, default:Bell },
// strTitle: {type:String, default:""},
// strValue: {type:String, default:""},
// bgIconClass: {type:String, default:"bg-blue-500"}
// }); 
-->
