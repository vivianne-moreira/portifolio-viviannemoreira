<template>
  <footer class="bg-black py-10 mt-12">
    <div class="container mx-auto px-6 text-center">
      <h4 class="text-2xl font-bold mb-4 text-white">Entre em Contato</h4>
      <p class="text-gray-400 mb-6">Fale comigo para encomendas ou colaborações!</p>

      <div class="flex justify-center flex-wrap gap-6 text-gray-400">
        <a
          href="mailto:viviane.moreira63@aluno.ifce.edu.br"
          class="hover:text-purple-400 transition duration-300 flex items-center"
        >
          <Mail class="w-5 h-5 mr-2" /> E-mail
        </a>
        <a
          href="https://www.instagram.com/vivianne_moreiramoreira"
          target="_blank"
          class="hover:text-purple-400 transition duration-300 flex items-center"
        >
          <Instagram class="w-5 h-5 mr-2" /> Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/vivianne-dos-santos-moreira-sarmento-a30450287"
          target="_blank"
          class="hover:text-purple-400 transition duration-300 flex items-center"
        >
          <Linkedin class="w-5 h-5 mr-2" /> LinkedIn
        </a>
      </div>

      <p class="mt-8 text-sm text-gray-600">
        © 2025. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Instagram, Linkedin } from "lucide-vue-next";
</script>

