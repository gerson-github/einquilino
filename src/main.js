import "./style.css"; // importa os estilos globais da aplicacao
import { createApp } from "vue"; // Importa a função para criar a instância principal do Vue.
import App from "./App.vue"; // Importa o componente raiz (App.vue).
import i18n from "./i18n";
import router from "../router"; // mporta o roteador (configurações de navegação).

createApp(App)
  .use(router) // aqui Adiciona o sistema de rotas (Vue Router) à aplicação.
  .use(i18n)
  .mount("#app"); // nesta linha ele monta o aplicativo na Div id=app
