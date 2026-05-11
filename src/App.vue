<template>
  <div class="app-container min-h-screen flex flex-col bg-[#FAFAFA] text-[#334155] relative overflow-hidden selection:bg-[#3B82F6]/20 selection:text-[#0F172A]">
    <CustomCursor />
    
    <!-- Background Glows -->
    <div class="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none z-0 transform-gpu blur-[100px]" style="background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%);"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none z-0 transform-gpu blur-[100px]" style="background: radial-gradient(circle, rgba(14,165,233,0.2) 0%, rgba(14,165,233,0) 70%);"></div>
    
    <!-- Light mode subtle pattern -->
    <div class="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none z-0"></div>

    <!-- Floating UI Grids -->
    <div class="fixed inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.05] pointer-events-none z-0">
      <div v-for="i in 36" :key="i" :class="[
        'border-gray-200',
        ((i - 1) % 6 !== 5) ? 'border-r' : '',
        (Math.floor((i - 1) / 6) !== 5) ? 'border-b' : ''
      ]"></div>
    </div>

    <!-- Layout -->
    <div class="relative z-50">
      <Navbar />
    </div>
    <main class="flex-1 relative z-10 w-full overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <div class="relative z-20">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/global/Navbar.vue';
import Footer from '@/components/global/Footer.vue';
import CustomCursor from '@/components/global/CustomCursor.vue';
import Lenis from 'lenis';

let lenis;

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<style>
/* Base global overrides */
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
  will-change: opacity, transform;
}

.fade-enter-from {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
}

.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
</style>
