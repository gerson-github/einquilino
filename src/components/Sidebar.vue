<script setup>
import {
  LayoutDashboard,
  Building,
  UserCheck,
  Users,
  FileText,
  CreditCard,
  Bell,
  BarChart3,
  Settings,
  User,
  UserCheck2,
  BarChart2,
} from "lucide-vue-next";
</script>

<template>
  <aside class="sidebar ">
    <div>
      <h1 class="text-xl font-bold text-white">{{ $t("appName") }}</h1>
      <p class="text-sm text-gray-300 mt-1">{{ $t("appSubtitle") }}</p>
    </div>

    <hr class="sidebar-divider" />

    <!-- active-class="router-link-active" -->
    <nav class="flex flex-col gap-2 text-white">
      <router-link
        to="/"
        class="router-link"
        exact-active-class="router-link-active"
      >
        <span>
          <LayoutDashboard class="icon" />
        </span>
        <span>{{ $t("dashboard") }}</span>
      </router-link>

      <router-link
        to="/cadastroImoveis"
        class="router-link"
        active-class="router-link-active"
      >
        <span><Building class="icon" /></span>
        <span>{{ $t("properties") }}</span>
      </router-link>

      <router-link
        to="/Locadores"
        class="router-link"
        active-class="router-link-active"
      >
        <span><UserCheck class="icon" /></span>
        <span>{{ $t("landlords") }}</span>
      </router-link>

      <router-link
        to="/Locatarios"
        class="router-link"
        active-class="router-link-active"
      >
        <span><Users class="icon" /></span>
        <span>{{ $t("tenants") }}</span>
      </router-link>

      <router-link
        to="/Contratos"
        class="router-link"
        active-class="router-link-active"
      >
        <span><FileText class="icon" /></span>
        <span>{{ $t("contracts") }}</span>
      </router-link>

      <router-link
        to="/Pagamentos"
        class="router-link"
        active-class="router-link-active"
      >
        <span><CreditCard class="icon" /></span>
        <span>{{ $t("payments") }}</span>
      </router-link>

      <router-link
        to="/Notificacoes"
        class="router-link"
        active-class="router-link-active"
      >
        <span><Bell class="icon" /></span>
        <span>{{ $t("notifications") }}</span>
      </router-link>

      <router-link to="/Relatorios" class="router-link">
        <span><BarChart3 class="icon" /></span>
        <span>{{ $t("reports") }}</span>
      </router-link>
    </nav>

    <div class="mt-auto">
      <hr class="sidebar-divider" />

      <router-link
        to="/Usuarios"
        class="router-link flex flex-col gap-1 mt-auto"
      >
        <!-- Container principal: ícone + nome + subtítulo -->
        <div class="flex items-center gap-2 -ml-[3rem]">
          <div
            class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center"
          >
            <User class="w-5 h-5 text-white" />
          </div>
          <!-- <User class="icon" /> -->
          <div class="flex flex-col">
            <span>Gerson Oliveira</span>
            <span class="text-sm text-gray-500">Administrador</span>
          </div>
        </div>
      </router-link>
    </div>
  </aside>
</template>
