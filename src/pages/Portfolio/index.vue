<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Premium Hero section -->
      <section class="text-center max-w-4xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Our Work</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7C3AED]">Projects</span>
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          Explore our latest collaborations where we turned complex challenges into seamless, award-winning digital experiences.
        </p>
      </section>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button 
          v-for="cat in ['All', 'Web Application', 'AI Tools', 'E-commerce', 'Mobile Apps']" 
          :key="cat"
          @click="activeCategory = cat"
          :class="['px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300', activeCategory === cat ? 'bg-white text-[#0B1120]' : 'bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white border border-white/10']"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <section class="mb-32">
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="project in filteredPortfolio" 
            :key="project.id"
            class="group relative rounded-[2rem] overflow-hidden bg-[#111827] border border-white/10"
          >
             <div class="relative h-[300px] md:h-[400px] overflow-hidden">
               <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
               <div class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>
               
               <!-- Hover Overlay Content -->
               <div class="absolute inset-0 p-8 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0B1120]/60 backdrop-blur-sm transition-all duration-500">
                  <button class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </button>
               </div>
             </div>

             <div class="p-8 relative">
               <div class="absolute top-0 right-8 -translate-y-1/2 bg-[#7C3AED] px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg shadow-purple-500/20">
                 {{ project.category }}
               </div>
               <h3 class="text-3xl font-bold text-white mb-4">{{ project.title }}</h3>
               <div class="flex flex-wrap gap-2">
                 <span v-for="tag in project.tags" :key="tag" class="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[#94A3B8]">
                   {{ tag }}
                 </span>
               </div>
             </div>
          </div>
        </div>
      </section>

      <!-- Metrics -->
      <section class="max-w-5xl mx-auto mb-32 bg-[#111827]/50 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <div class="text-center px-4">
             <div class="text-4xl font-bold text-white mb-2">350%</div>
             <div class="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Average ROI</div>
          </div>
          <div class="text-center px-4">
             <div class="text-4xl font-bold text-[#06B6D4]">0.8s</div>
             <div class="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Avg. Load Time</div>
          </div>
          <div class="text-center px-4">
             <div class="text-4xl font-bold text-[#7C3AED]">50M+</div>
             <div class="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Users Reached</div>
          </div>
          <div class="text-center px-4">
             <div class="text-4xl font-bold text-white">15+</div>
             <div class="text-[11px] text-[#94A3B8] uppercase tracking-wider font-semibold">Industry Awards</div>
          </div>
        </div>
      </section>
      
      <!-- CTA -->
      <section class="relative bg-gradient-to-r from-purple-900/40 via-cyan-900/40 to-[#0B1120] border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Your Project Could Be Next</h2>
          <p class="text-lg text-[#94A3B8] mb-10 leading-relaxed">
            Partner with us to transform your vision into a scalable, high-performance reality.
          </p>
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1120] font-bold rounded-xl gap-2 hover:scale-105 transition-transform duration-300">
            Start Your Project
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { portfolio } from '@/data'

const activeCategory = ref('All')

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'All') return portfolio
  return portfolio.filter(p => p.category === activeCategory.value)
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
