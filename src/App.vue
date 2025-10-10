<template>
  <div class="bg-neutral-900 text-gray-900 scroll-smooth">
    <Navbar />
    <main>
      <section id="hero">
        <HomeView />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>
    </main>
    <section id="contact">
         <Footer />
      </section>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomeView from '@/views/HomeView.vue'
import AboutSection from '@/components/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
