<template>
  <nav class="bg-white backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
      <h1 class="text-xl font-bold text-blue-700 tracking-wide">Arte & Grafite</h1>

      <ul class="flex space-x-6 text-gray-800 font-medium">
        <li>
          <button @click="scrollTo('hero')" class="hover:text-blue-600 transition-colors">Home</button>
        </li>
        <li>
          <button @click="scrollTo('about')" class="hover:text-blue-600 transition-colors">Sobre</button>
        </li>
        <li>
          <button @click="scrollTo('gallery')" class="hover:text-blue-600 transition-colors">Galeria</button>
        </li>
        <li>
          <button @click="scrollTo('contact')" class="hover:text-blue-600 transition-colors">Contato</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
