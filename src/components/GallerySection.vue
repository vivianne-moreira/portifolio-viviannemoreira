<template>
  <section id="gallery" class="bg-neutral-900 text-white py-24 px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold text-pink-500/90">
        Galeria
      </h2>
      <div class="mt-2 w-20 h-1 bg-pink-500/90 mx-auto rounded-full"></div>
    </div>

    <!-- Carrossel de Destaques -->
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="40"
      :loop="true"
      :speed="5000"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      class="max-w-5xl mx-auto mb-16 relative rounded-3xl overflow-hidden shadow-2xl"
    >
      <SwiperSlide
        v-for="(art, index) in featuredArtworks"
        :key="index"
        class="flex flex-col items-center"
      >
        <div class="relative w-full rounded-3xl overflow-hidden group">
          <img
            :src="art.image"
            :alt="art.title"
            loading="lazy"
            class="w-full h-[420px] object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          />

          <!-- Gradiente de base -->
          <div class="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>

          <button
            @click="openModal(art)"
            class="absolute bottom-4 right-4 bg-pink-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            Expandir
          </button>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Grid da Galeria Completa -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(art, index) in artworks"
        :key="index"
        class="rounded-2xl overflow-hidden shadow-lg group relative"
      >
        <img
          :src="art.image"
          :alt="art.title"
          loading="lazy"
          class="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4"
        >
          <div>
            <h3 class="text-lg font-bold text-white">{{ art.title }}</h3>
            <p class="text-gray-300">{{ art.description }}</p>
            <button
              @click="openModal(art)"
              class="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Expandir
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalArt"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="relative max-w-3xl w-full">
        <img
          :src="modalArt.image"
          :alt="modalArt.title"
          class="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <button
          @click="modalArt = null"
          class="absolute top-2 right-2 text-white text-3xl font-bold hover:text-pink-500 transition"
        >
          ×
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import sandman from '../assets/images/sandman.jpg'
import dragao from '../assets/images/dragao.jpg'
import eu from '../assets/images/eu.jpg'
import face from '../assets/images/face.jpg'
import fantasma from '../assets/images/fantasma.jpg'
import lua from '../assets/images/lua.jpg'
import realismo from '../assets/images/realismo.jpg'
import sonhomaluco from '../assets/images/sonhomaluco.jpg'
import borboleta from '../assets/images/borboleta.jpg'

interface Artwork {
  title: string
  description: string
  image: string
}

const featuredArtworks: Artwork[] = [
  { title: 'O Sonhador', description: 'Estudo de personagem inspirado em Sandman.', image: sandman },
  { title: 'O Guardião', description: 'Desenho conceitual de dragão místico.', image: dragao },
]

const artworks: Artwork[] = [
  ...featuredArtworks,
  { title: 'Apenas Eu', description: 'Estudo de desenho adicionado a uma foto.', image: eu },
  { title: 'Face Sombria', description: 'Exploração de expressões faciais.', image: face },
  { title: 'Fantasma', description: 'Arte com atmosfera sobrenatural.', image: fantasma },
  { title: 'Lua', description: 'Ilustração com temática noturna.', image: lua },
  { title: 'Realismo', description: 'Estudo detalhado de figura humana.', image: realismo },
  { title: 'Sonho Maluco', description: 'Criação surreal e imaginativa.', image: sonhomaluco },
  { title: 'Borboleta', description: 'Desenho inspirado na natureza e delicadeza.', image: borboleta },
]

const modalArt = ref<Artwork | null>(null)
function openModal(art: Artwork) {
  modalArt.value = art
}
</script>

<style>
.swiper {
  transition: transform 1.5s ease-in-out;
}

.swiper-button-prev,
.swiper-button-next {
  color: #ec4899;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0.9;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: 1;
  transform: scale(1.15);
}

.swiper-pagination {
  bottom: 10px !important;
}

.swiper-pagination-bullet {
  background-color: #ec4899 !important;
  opacity: 0.5;
  width: 10px;
  height: 10px;
  margin: 0 6px !important;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(1.3);
  box-shadow: 0 0 10px #ec4899;
}

.animate-fadeIn {
  animation: fadeIn 1.2s ease forwards;
}
</style>
