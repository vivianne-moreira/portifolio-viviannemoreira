<template>
  <nav class="bg-black backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
      <h1 class="text-xl lg:text-2xl font-bold text-blue-700 tracking-wide">Arte & Grafite</h1>
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="text-gray-400 focus:outline-none md:hidden transition-transform duration-300"
        :class="{ isMenuOpen }"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Menu desktop -->
      <ul class="hidden md:flex space-x-6 text-gray-400 font-medium">
        <li><button @click="scrollTo('hero')" class="hover:text-blue-600 transition-colors">Home</button></li>
        <li><button @click="scrollTo('about')" class="hover:text-blue-600 transition-colors">Sobre</button></li>
        <li><button @click="scrollTo('gallery')" class="hover:text-blue-600 transition-colors">Galeria</button></li>
        <li><button @click="scrollTo('contact')" class="hover:text-blue-600 transition-colors">Contato</button></li>
      </ul>
    </div>

    <!-- Menu mobile (com transição artística) -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-500 ease-in"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden text-gray-300 shadow-lg overflow-hidden"
      >
        <ul class="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
          <li>
            <button @click="handleClick('hero')" class="transition-all duration-300">Home</button>
          </li>
          <li>
            <button @click="handleClick('about')" class="transition-all duration-300">Sobre mim</button>
          </li>
          <li>
            <button @click="handleClick('gallery')" class="transition-all duration-300">Galeria</button>
          </li>
          <li>
            <button @click="handleClick('contact')" class="transition-all duration-300">Contato</button>
          </li>
        </ul>

        <div class="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function scrollTo(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleClick(sectionId: string) {
  scrollTo(sectionId)
  isMenuOpen.value = false
}
</script>

