<template>
  <section id="hero" class="flex flex-col items-center bg-neutral-900">
    <div class="relative w-full flex justify-center mt-10 bg-white">
      <img
        src="@/assets/images/home.jpeg"
        alt="Arte de Vivianne"
        class="max-h-[90vh] object-contain mt-8"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900"></div>
    </div>
    <div class="text-center text-white px-6 py-12 max-w-3xl drop-shadow-lg">
      <h1
        class="text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-wide bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
      >
        Bem-vindo ao meu mundo artístico
      </h1>
      <p class="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
        Onde o grafite encontra a imaginação. Um espaço onde a arte, a rua e a inspiração se
        misturam para dar vida às minhas criações.
      </p>
      <div class="pt-2">
        <a
          href="#gallery"
          class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:opacity-90 hover:scale-105 transition duration-500"
        >
          Ver minha galeria
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
