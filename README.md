# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

:: para executar esse projeto que foi criado pelo Vue

> npm run dev

npm run build → Gera a versão otimizada para produção.
npm run preview → Simula como ficará o projeto já compilado (após o build).

# eInquilino

meu projeto de gestao de contrato de aluguel

# visao geral do uso do Vue executando as paginas

    executa       executa   executa     executa

Vite => index.html => main.js => App.vue => page.vue (components)
** main.js e a porta de entrada

1. npm run dev
2. Vite lê config + .env
3. Navegador pede index.html
4. Vite processa index.html
5. Vite serve main.js → importa App.vue → importa componentes/css...
6. Vite transforma tudo com esbuild
7. Navegador renderiza a página


# documento de requisitos e plano de trabalho
https://docs.google.com/document/d/1-0T_OL9FeiJ9x3c9ImgHBmrxFGv6SznkJXLEWfrYD4I/edit?tab=t.0#heading=h.rmrujbph06ak

# website deployed on render
https://einquilino.onrender.com/
