<template>
  <section id="gallery" class="bg-neutral-900 text-white py-24 px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold text-pink-500/90">Galeria</h2>
      <div class="mt-2 w-20 h-1 bg-pink-500/90 mx-auto rounded-full"></div>
    </div>

    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="40"
      :loop="true"
      :speed="5000"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      class="mx-auto mb-16 relative overflow-hidden shadow-2xl"
    >
      <SwiperSlide
        v-for="(art, index) in featuredArtworks"
        :key="index"
        class="flex flex-col items-center"
      >
        <div class="relative w-full overflow-hidden group">
          <img
            :src="art.image"
            :alt="art.title"
            loading="lazy"
            class="w-full h-[400px] lg:h-[620px] object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          />
          <div
            class="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/100 to-transparent"
          ></div>
          <button
            @click="openModal(art)"
            class="absolute bottom-4 right-4 bg-pink-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-md hover:bg-pink-600 transition-all duration-300"
          >
            Expandir
          </button>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(art, index) in artworks"
        :key="index"
        class="bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
      >
        <div class="w-full h-90 overflow-hidden">
          <img
            :src="art.image"
            :alt="art.title"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div class="p-4 text-center">
          <h3 class="text-lg font-semibold text-white mb-1">{{ art.title }}</h3>
          <p class="text-gray-400 text-sm mb-3">{{ art.description }}</p>
          <button
            @click="openModal(art)"
            class="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition"
          >
            Expandir
          </button>
        </div>
      </div>
      <div
        v-if="modalArt"
        class="fixed inset-0 bg-black flex items-center justify-center z-50 px-4 py-6"
      >
        <div
          class="relative max-w-3xl w-full h-full flex flex-col items-center justify-center bg-black rounded-lg shadow-2xl overflow-hidden"
        >
          <div class="flex items-center justify-center w-full h-full bg-black">
            <img
              :src="modalArt.image"
              :alt="modalArt.title"
              class="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          <button
            @click="modalArt = null"
            class="absolute bottom-6 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 text-sm sm:text-base"
          >
            Voltar para a galeria
          </button>
        </div>
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
import tecnica from '../assets/images/tecnica.jpg'
import sombra from '../assets/images/sombra.jpg'
import mentira from '../assets/images/mentira.jpg'

interface Artwork {
  title: string
  description: string
  image: string
}

const featuredArtworks: Artwork[] = [
  {
    title: 'Sandman - O Sonhador',
    description:
      'Estudo de personagem inspirado em Sandman. O contraste do grafite reflete a dualidade do personagem, encarando o mundo dos sonhos e a realidade.',
    image: sandman,
  },
  {
    title: 'Dragão ou Fênix? Arte',
    description:
      'Desenho conceitual de dragão místico inspirado nos traços de uma Fênix. O Desenho foi feito no grafite e preenchido por tinta, enfantizando a ideia de cores quentes com um fundo escuro. Resurgir das cinzas é arte.',
    image: dragao,
  },
]

const artworks: Artwork[] = [
  ...featuredArtworks,
  {
    title: 'Apenas Eu',
    description:
      'Estudo de desenho adicionado a uma foto. O objetivo foi desenhar um olho e posicioná-lo no espelho de maneira que fizesse parte do meu rosto em um ângulo bom para a captura da imagem.',
    image: eu,
  },
  {
    title: 'Face e Linhas ou Linhas e Face?',
    description:
      'Exploração de expressões faciais por meio de linhas. O uso do grafite nessa obra permite que a imaginação flua de tal modo a indagar o público: é uma face feita por linhas ou apenas linhas que se parecem com uma face?',
    image: face,
  },
  {
    title: 'Fantasma Cafeinado',
    description: 'Arte com atmosfera sobrenatural e um tanto simpática. Fantasma também bebe café!',
    image: fantasma,
  },
  {
    title: 'Lua',
    description:
      'Ilustração com temática lunática na qual remete a ideia de "cabeça na lua". O desenho foi inspirado na música "Dias da Juventude" - Terno Rei.',
    image: lua,
  },
  {
    title: 'Edvin Ryding',
    description:
      'Estudo de desenho realistico. A respectiva arte retrata o ator Edvin Ryding. Uso apenas de grafite com uso de técnicas.',
    image: realismo,
  },
  {
    title: 'Sonho Maluco',
    description:
      'Criação surreal e imaginativa. Para algumas pessoas, os sonhos podem ter um significado por trás. Ou talvez não... ou talvez é apenas um dinossauro correndo atrás de você. Obra com dois pontos de fuga além do uso de sombreamento.',
    image: sonhomaluco,
  },
  {
    title: 'Borboletas',
    description:
      'Apenas uma garota que se sente caindo, mas não tem chão onde cair. Logo, de tanto estar em queda livre, a mesma se sente como uma borboleta. Essa obra não é sobre borboletas.',
    image: borboleta,
  },
  {
    title: 'Técnica',
    description:
      'Uma representação de uma pessoa que está submersa em um turbilhão de fórmulas matemáticas e símbolos abstratos, sugerindo a busca incessante por soluções, a pressão do conhecimento ou a própria natureza lógica do universo que a arte tenta decifrar. Nem sempre o que calculamos chega no resultado que esperamos.',
    image: tecnica,
  },
  {
    title: 'A Sombra Daquele Artista',
    description:
      'Uma obra de forte atmosfera e profundo uso de luz e sombra. O vulto humano, emergindo de uma névoa densa, evoca sentimentos de isolamento, medo ou uma tentativa de conexão. A textura granulada e o alto contraste criam um efeito quase fantasmagórico, transformando a figura em uma sombra, um reflexo do subconsciente ou uma metáfora para a ansiedade.',
    image: sombra,
  },
  {
    title: 'A Máscara da Mentira',
    description:
      'Utilizando um estilo que transita entre o anime e o realismo, a obra explora a tensão entre o que é mostrado e o que é sentido, convidando o observador a questionar a verdade por trás da fachada.',
    image: mentira,
  },
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
  transition:
    opacity 0.3s,
    transform 0.3s;
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
