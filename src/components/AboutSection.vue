<template>
  <section id="about" class="bg-neutral-900 text-white py-24 px-6">
    <div class="text-center mb-12">
      <h2
        class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
      >
        Sobre mim
      </h2>
      <div
        class="mt-2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
      ></div>
    </div>

    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      <div class="relative group w-full md:w-1/2 flex justify-center md:justify-start">
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-purple-600/20 to-transparent blur-2xl rounded-2xl opacity-50 group-hover:opacity-80 transition duration-700"
        ></div>
        <img
          src="@/assets/images/foto.jpg"
          alt="Vivianne dos Santos Moreira Sarmento"
          class="relative w-60 sm:w-72 md:w-80 object-cover rounded-2xl shadow-2xl border border-indigo-500/30 group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 rounded-2xl pointer-events-none">
          <div
            class="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-purple-500 to-transparent animate-scan-x opacity-60"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-px h-1/3 bg-gradient-to-t from-blue-500 to-transparent animate-scan-y opacity-60"
          ></div>
        </div>
      </div>

      <div class="md:w-1/2 text-center md:text-left space-y-6">
        <p class="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
          Oi! Sou
          <strong class="text-blue-400 bg-clip-text"
            >Vivianne dos Santos Moreira Sarmento</strong
          >, estudante de
          <strong>Engenharia de Telecomunicações e artista apaixonada
          por unir arte e tecnologia.</strong> 
          Acredito que criar é transformar emoção e raciocínio em algo que
          inspire com propósito e imaginação.
        </p>

        <p class="text-gray-400 leading-relaxed text-base sm:text-lg md:text-lg">
          Gosto de desenvolver projetos que unem estética, inovação e impacto
          social, explorando as fronteiras entre o humano e o digital.
        </p>

        <div>
          <a
            href="#gallery"
            class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition duration-500"
          >
            Ver minha galeria
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan-x {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
@keyframes scan-y {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
.animate-scan-x {
  animation: scan-x 5s linear infinite;
}
.animate-scan-y {
  animation: scan-y 6s linear infinite;
}
</style>
