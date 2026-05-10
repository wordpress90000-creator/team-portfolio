<template>
  <nav class="flex items-center justify-between px-6 lg:px-12 py-6 z-50 border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-sm fixed top-0 w-full">
    <router-link to="/" class="flex items-center gap-2">
      <div class="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-xl flex items-center justify-center">
        <span class="font-bold text-xl text-white">N</span>
      </div>
      <span class="text-xl font-bold tracking-tight text-white">NEXUS<span class="text-[#06B6D4]">TECH</span></span>
    </router-link>

    <div class="hidden lg:flex gap-8 text-sm font-medium text-[#94A3B8]">
      <router-link to="/services" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Services</router-link>
      <router-link to="/portfolio" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Portfolio</router-link>
      <router-link to="/about" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">About</router-link>
      <router-link to="/team" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Team</router-link>
      <router-link to="/pricing" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Pricing</router-link>
      <router-link to="/blog" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Blog</router-link>
      <router-link to="/contact" class="hover:text-white transition-colors" active-class="text-white border-b border-[#7C3AED]">Contact</router-link>
    </div>

    <button class="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] rounded-full text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
      Start a Project
    </button>
    
    <!-- Mobile Menu Button -->
    <button class="lg:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
    </button>
    
    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="absolute top-full left-0 w-full bg-[#0B1120] border-b border-white/5 p-6 flex flex-col gap-4 shadow-xl">
        <router-link v-for="link in ['services', 'portfolio', 'about', 'team', 'pricing', 'blog', 'contact']" :key="link" :to="'/' + link" class="text-white capitalize" @click="mobileMenuOpen = false">
          {{ link }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
