<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[10%] right-[30%] w-[500px] h-[500px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Premium Hero section -->
      <section class="text-center max-w-4xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Pricing</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          Simple, <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#06B6D4]">Transparent</span> Pricing
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          Choose the plan that fits your vision. No hidden fees, no complicated tiers.
        </p>
      </section>

      <!-- Toggle -->
      <div class="flex justify-center mb-16 relative z-20">
        <div class="bg-white/5 border border-white/10 rounded-full p-1 flex">
          <button 
            @click="isAnnual = false" 
            :class="['px-8 py-3 rounded-full text-sm font-bold transition-all duration-300', !isAnnual ? 'bg-[#06B6D4] text-white shadow-lg' : 'text-[#94A3B8] hover:text-white']"
          >
            Monthly
          </button>
          <button 
            @click="isAnnual = true" 
            :class="['px-8 py-3 rounded-full text-sm font-bold transition-all duration-300', isAnnual ? 'bg-[#06B6D4] text-white shadow-lg' : 'text-[#94A3B8] hover:text-white']"
          >
            Annually <span :class="['ml-2 text-[10px] px-2 py-0.5 rounded-full', isAnnual ? 'bg-white/20 text-white' : 'bg-[#06B6D4]/20 text-[#06B6D4]']">-20%</span>
          </button>
        </div>
      </div>

      <!-- Pricing Plans -->
      <section class="mb-32">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          
          <div 
            v-for="(plan, index) in pricing" 
            :key="index"
            :class="[
              'relative rounded-3xl p-8 transition-transform duration-500',
              index === 1 ? 'bg-gradient-to-b from-[#111827] to-[#1e293b] border-2 border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20 hover:-translate-y-4 md:scale-105 z-10' : 'bg-[#111827] border border-white/10 hover:-translate-y-2'
            ]"
          >
            <div v-if="index === 1" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7C3AED] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
              Most Popular
            </div>

            <h3 class="text-2xl font-bold text-white mb-2">{{ plan.name }}</h3>
            <p class="text-[#94A3B8] text-sm mb-8 h-10">{{ plan.description }}</p>

            <div class="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
              <span class="text-5xl font-bold text-white">${{ isAnnual ? Math.floor(parseInt(plan.price.replace('+', '')) * 0.8) : plan.price }}</span>
              <span class="text-[#94A3B8] font-medium" v-if="plan.price !== 'Custom'">/mo</span>
              <span v-if="plan.price === 'Custom'" class="text-[#94A3B8] font-medium">starting</span>
            </div>

            <ul class="space-y-4 mb-10 min-h-[250px]">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-[#cbd5e1] text-sm leading-relaxed">{{ feature }}</span>
              </li>
            </ul>

            <button :class="['w-full py-4 rounded-xl font-bold transition-all duration-300', index === 1 ? 'bg-[#06B6D4] text-white hover:bg-white hover:text-[#0B1120]' : 'bg-white/5 text-white border border-white/10 hover:bg-white text-white hover:text-black']">
              Get Started
            </button>
          </div>
          
        </div>
      </section>

      <!-- Enterprise Strip -->
      <section class="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
         <div>
           <h3 class="text-2xl font-bold text-white mb-2">Need a custom enterprise solution?</h3>
           <p class="text-[#94A3B8]">Dedicated clusters, strict SLAs, custom compliance, and 24/7 dedicated support.</p>
         </div>
         <router-link to="/contact" class="shrink-0 px-8 py-4 bg-white text-[#0B1120] font-bold rounded-xl hover:scale-105 transition-transform duration-300">
           Contact Sales
         </router-link>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { pricing } from '@/data'

const isAnnual = ref(false)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
