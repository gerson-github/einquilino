import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import CadastroImoveis from "@/views/CadastroImoveis.vue";
import Locadores from "@/views/Locadores.vue";
import Locatarios from "@/views/Locatarios.vue";
import Contratos from "@/views/Contratos.vue";
import Pagamentos from "@/views/Pagamentos.vue";
import Notificacoes from "@/views/Notificacoes.vue";
import Relatorios from "@/views/Relatorios.vue";
import Usuarios from "@/views/Usuarios.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "Dashboard", component: Dashboard },
      {
        path: "cadastroImoveis",
        name: "CadastroImoveis",
        component: CadastroImoveis,
      },
      { path: "locadores", name: "Locadores", component: Locadores },
      { path: "locatarios", name: "Locatarios", component: Locatarios },
      { path: "contratos", name: "Contratos", component: Contratos },
      { path: "pagamentos", name: "Pagamentos", component: Pagamentos },
      { path: "notificacoes", name: "Notificacoes", component: Notificacoes },
      { path: "Relatorios", name: "Relatorios", component: Relatorios },
      { path: "Usuarios", name: "Usuarios", component: Usuarios },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
