import { ref } from 'vue';

export function useContracts() {
  const contracts = ref([]);
  const totals = ref({ totalContracts: 0, activeContracts: 0, monthlyRevenue: 0 });

  async function load() {
    // aqui você chamaria a API
    // exemplo fake:
    contracts.value = [
      { id: 1, number: 'C-001', client: 'Saulo', amount: 1000, status: 'Ativo' },
      { id: 2, number: 'C-002', client: 'Laura', amount: 750, status: 'Inativo' },
    ];
    totals.value = {
      totalContracts: contracts.value.length,
      activeContracts: contracts.value.filter(c => c.status === 'Ativo').length,
      monthlyRevenue: contracts.value.reduce((s, c) => s + c.amount, 0)
    };
  }

  return { contracts, totals, load };
}


// No componente (DashboardCard.vue ou Dashboard.vue):

// import { onMounted, ref } from "vue";
// import { getStatbox } from "@/api/apiClient";

// const title = ref("");
// const value = ref(null);
// onMounted(async () => {
//   try {
//     const data = await getStatbox();
//     title.value = data.title;
//     value.value = data.value;
//   } catch (err) {
//     console.error(err);
//   }
// });


// src/composables/useContracts.js
// import { ref, computed } from 'vue';

// // 🌐 Estado compartilhado entre todas as páginas/componentes
// const contracts = ref([]);
// const loading = ref(false);
// const error = ref(null);

// // 🧮 Totais calculados automaticamente
// const totals = computed(() => {
//   const totalContracts = contracts.value.length;

//   const activeContracts = contracts.value.filter(c => c.status === 'Ativo').length;

//   const monthlyRevenue = contracts.value.reduce((sum, c) => {
//     const amount = Number(c.amount) || 0;
//     return sum + amount;
//   }, 0);

//   return {
//     totalContracts,
//     activeContracts,
//     monthlyRevenue
//   };
// });

// //  Função principal: carregar contratos da API
// async function load() {
//   loading.value = true;
//   error.value = null;

//   try {
//     // ➜ Troque pela sua API real
//     // const data = await fetch('/api/contracts').then(r => r.json());

//     // 🔹 MOCK TEMPORÁRIO (para testes)
//     const data = [
//       { id: 1, number: 'C-001', client: 'Saulo', amount: 1000, status: 'Ativo' },
//       { id: 2, number: 'C-002', client: 'Laura', amount: 750, status: 'Inativo' },
//       { id: 3, number: 'C-003', client: 'André', amount: 900, status: 'Ativo' }
//     ];

//     contracts.value = data;
//   } catch (err) {
//     error.value = 'Erro ao carregar contratos';
//     console.error(err);
//   } finally {
//     loading.value = false;
//   }
// }

// //  Exporta o composable
// export function useContracts() {
//   return {
//     // state
//     contracts,
//     loading,
//     error,
//     totals,

//     // actions
//     load
//   };
// }
