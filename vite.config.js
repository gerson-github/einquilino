import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,  
      },
    },
  },  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});
