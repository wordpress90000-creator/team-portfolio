<template>
  <nav class="flex items-center justify-between px-6 lg:px-12 py-6 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md fixed top-0 w-full transition-all duration-300">
    <a href="#home" class="flex items-center gap-2">
      <div class="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#0ea5e9] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
        <span class="font-bold text-xl text-white">J</span>
      </div>
      <span class="text-xl font-bold tracking-tight text-gray-900">JOHN<span class="text-[#3B82F6]">.DEV</span></span>
    </a>

    <div class="hidden lg:flex gap-8 text-sm font-semibold text-gray-600">
      <a href="#home" class="hover:text-blue-600 transition-colors">Home</a>
      <a href="#about" class="hover:text-blue-600 transition-colors">About</a>
      <a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a>
      <a href="#services" class="hover:text-blue-600 transition-colors">Services</a>
      <a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a>
      <a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a>
    </div>

    <a href="#contact" class="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all">
      Hire Me
    </a>
    
    <!-- Mobile Menu Button -->
    <button class="lg:hidden text-gray-900" @click="mobileMenuOpen = !mobileMenuOpen">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
    </button>
    
    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
        <a v-for="link in ['home', 'about', 'skills', 'services', 'projects', 'contact']" :key="link" :href="'#' + link" class="text-gray-700 font-medium capitalize text-lg border-b border-gray-50 pb-2 last:border-0" @click="mobileMenuOpen = false">
          {{ link }}
        </a>
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
