<script setup>
import Icons from "@/components/Icons.vue";
</script>

<template>
  <div class="bg-amber-100">
    <h1>home</h1>
  </div>

  <div class="flex flex-col items-center gap-6 p-7 md:gap-8 rounded-2xl">
    <div>
      <img
        class="size-48 shadow-xl rounded-md"
        alt=""
        src="/images/image_training.png"
      />
    </div>
    <div
      class="relative top-20 left-0 w-5xl.5 h-[140%] bg-black/40 text-white flex items-center"
    >
      Show
    </div>
    <div class="flex flex-col items-center">
      <span class="text-2xl font-medium">Class Warfare </span>
      <span class="font-medium text-sky-500">The Anti-Patterns</span>
      <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
        <span>No. 4</span>
        <span>·</span>
        <span>2025</span>
      </span>
    </div>
  </div>
  <div
    class="flex items-center justify-between p-4 border-5 border-amber-700 shadow-amber-700"
  >
    <button
      class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
    >
      click me
    </button>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded"
      title="Click me"
    >
      click me
    </button>
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    class="w-26 h-26 text-blue-600 stroke-current fill-none"
    stroke-width="30"
  >
    <path
      d="M372.2 116C372.2 136.9 359.8 155 542 163.2L448 256L552.4 235.1C547.1 227.4 144 218 544 208C544 181.5 565.5 160 592 160C618.5 160 640 181.5 640 208C640 234 619.4 255.1 593.6 256L481 506.3C470.7 529.3 447.8 544 422.6 544L217.4 544C192.2 544 169.4 529.2 159 506.3L46.4 256C20.6 255.1 0 234 0 208C0 181.5 21.5 160 48 160C74.5 160 96 181.5 96 208C96 218.1 92.9 227.4 87.6 235.1L192 256L298.1 163.1C280.4 154.8 268.1 136.8 268.1 116C268.1 87.3 291.4 64 320.1 64C348.8 64 372.1 87.3 372.1 116z"
    />
  </svg>

  <p class="text-5xl">&#x1F61F; 📟 Parabéns!</p>

  <Icons name="circle" class="size-10" />

  <button
    class="flex items-center justify-between py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
  >
    <Icons name="upload" class="w-6 h-6 mr-3" />
    Upload
  </button>

  <button>
    <Icons name="download" class="size-10" />
    Download
  </button>

  <div class="p-4" data-theme="abyss">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
  </div>
  <div class="p-4" data-theme="purplewind">
    <button class="btn btn-primary">Primary !!!</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
  </div>

  <div class="p-5 border-2">
    <ul>
      <li>U+1FAE4 Customizing your theme</li>
      <li>Adding custom</li>
      <li>Adding custom variants</li>
      <li>Code completion wiht</li>
    </ul>
  </div>

  <div class="min-h-screen bg-base-200 flex items-center justify-center p-6">
    <div class="card w-full max-w-md bg-white shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Formulário de Contato</h2>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Nome</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            class="input input-bordered"
            v-model="nome"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            class="input input-bordered"
            v-model="email"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Mensagem</span>
          </label>
          <textarea
            placeholder="Sua mensagem"
            class="textarea textarea-bordered"
            v-model="mensagem"
          ></textarea>
        </div>

        <div class="form-control mt-4">
          <button class="btn btn-primary" @click="enviar">Enviar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title font-semibold">How do I create an account?</div>
    <div class="collapse-content text-sm">
      Click the "Sign Up" button in the top right corner and follow the
      registration process.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      I forgot my password. What should I do?
    </div>
    <div class="collapse-content text-sm">
      Click on "Forgot Password" on the login page and follow the instructions
      sent to your email.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      How do I update my profile information?
    </div>
    <div class="collapse-content text-sm">
      Go to "My Account" settings and select "Edit Profile" to make changes.
    </div>
  </div>
</template>
