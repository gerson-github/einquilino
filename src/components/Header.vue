<script setup>
import { Search, Settings, Bell } from "lucide-vue-next";
</script>

<template>


  <header class=" shadow-sm border-b border-gray-200 p-4 h-[93px]">
    <!-- <header class=" text-black shadow-sm border-b border-gray-200 p-4"></header> -->
    <div class="flex items-center justify-between">
      <div>
        <!-- <h2 class="text-2xl font-bold text-gray-900">Dashboard</h2> -->
        <h2 class="text-2xl font-bold ">Dashboard</h2>
        <p class="text-gray-600">Bem-vindo ao seu painel de controle</p>
      </div>

      <div class="flex items-center space-x-4">
        <!-- Search -->
        <div class="relative">
          <input
            type="search"
            placeholder="Buscar contratos..."
            class="w-90 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>



  <div class="flex items-center gap-2">
    <!-- <label for="lang" class="">Language</label> -->
    <select
      id="lang"
      v-model="currentLang"
      @change="changeLang(currentLang)"
          class="border border-gray-300 rounded-md px-3 py-2 font-semibold bg-white text-gray-800
           focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      aria-label="Choose language"
    >
      <option selected value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </select>
  </div> 

  <!-- rounded-md border px-2 py-1 bg-white text-sm bg-gray-700 dark:bg-gray-200 text-gray-700 dark:text-gray-300-->





        <!-- Notifications -->
        <button class="relative p-2 text-gray-600 hover:text-gray-900">
          <bell class="icon" />
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >3</span
          >
        </button>

        <!-- settings -->
        <button class="relative p-2 text-gray-600 hover:text-gray-900">
          <settings class="icon" />
        </button>

      </div>
    </div>

    <!-- <div style="border: 3px solid green">
 <label class="relative mb-5 cursor-pointer">
      <input type="checkbox" value="" class="peer sr-only" />
      <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
</label>
      
      <button @click="changeLang('en')">English</button>
      <button @click="changeLang('pt')">Português</button>




    </div> -->
  </header>

</template>



<!-- <script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script> -->

<script>
export default {
  data() {
    return {
      currentLang: this.$i18n.locale, // pega o idioma atual
    };
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;        // altera o idioma
      localStorage.setItem('app-lang', lang); // opcional: persiste a escolha
    },
  },
  mounted() {
    // carregar idioma salvo, se existir
    const saved = localStorage.getItem('app-lang');
    if (saved) {
      this.currentLang = saved;
      this.$i18n.locale = saved;
    }
  },
};

</script>