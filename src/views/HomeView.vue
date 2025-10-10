<template>
  <div id="hero" class="flex flex-col items-center justify-center min-h-screen text-center bg-neutral-900 text-white px-6">
    <h1 class="text-5xl md:text-6xl font-extrabold text-blue-400 mb-6 tracking-wide drop-shadow-lg">
      Bem-vindo ao meu mundo artístico 🌙
    </h1>

    <p class="text-gray-300 max-w-2xl leading-relaxed text-lg">
      Onde o grafite encontra a imaginação — um espaço onde a cor, a rua e a inspiração
      se misturam para dar vida às minhas criações.
    </p>

    <button
      @click="scrollTo('gallery')"
      class="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
    >
      Ver Galeria
    </button>
  </div>
</template>

<script setup lang="ts">
function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
