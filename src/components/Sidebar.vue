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
  User,
} from "lucide-vue-next";
</script>

<template>
  <aside class="sidebar">
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
        <LayoutDashboard class="icon" />
        <span>{{ $t("dashboard") }}</span>
      </router-link>

      <router-link
        to="/cadastroImoveis"
        class="router-link"
        active-class="router-link-active"
      >
        <Building class="icon" />
        <span>{{ $t("properties") }}</span>
      </router-link>

      <router-link
        to="/locadores"
        class="router-link"
        active-class="router-link-active"
      >
        <UserCheck class="icon" />
        <span>{{ $t("landlords") }}</span>
      </router-link>

      <router-link
        to="/locatarios"
        class="router-link"
        active-class="router-link-active"
      >
        <Users class="icon" />
        <span>{{ $t("tenants") }}</span>
      </router-link>

      <router-link
        to="/contracts"
        class="router-link"
        active-class="router-link-active"
      >
        <FileText class="icon" />
        <span>{{ $t("contracts") }}</span>
      </router-link>

      <router-link
        to="/pagamentos"
        class="router-link"
        active-class="router-link-active"
      >
        <CreditCard class="icon" />
        <span>{{ $t("payments") }}</span>
      </router-link>

      <router-link
        to="/notificacoes"
        class="router-link"
        active-class="router-link-active"
      >
        <Bell class="icon" />
        <span>{{ $t("notifications") }}</span>
      </router-link>

      <router-link to="/relatorios" class="router-link">
        <BarChart3 class="icon" />
        <span>{{ $t("reports") }}</span>
      </router-link>
    </nav>

    <div class="mt-auto">
      <hr class="sidebar-divider" />

      <router-link
        to="/usuarios"
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
