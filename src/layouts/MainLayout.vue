<template>
  <div class="layout">
    <!-- Sidebar -->
    <Sidebar class="h-full" />

    <!-- Main area: header + content + footer -->
    <div class="flex flex-col flex-1">
      <Header />

      <main class="flex-1 overflow-y-auto p-4">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Sidebar, Footer },
};
</script>

<style scoped>
.layout {
  @apply h-[100vb] flex h-screen ;
}

/* Optional: make Sidebar fill full height */
.sidebar {
  height: 100%;
}

.main-content {
  display: flex;
  flex: 1;
}

.page-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
