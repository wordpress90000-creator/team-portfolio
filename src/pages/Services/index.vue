<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 70%);"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Premium Hero section -->
      <section class="text-center max-w-4xl mx-auto mb-24">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest">Our Expertise</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          Enterprise-Grade <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#7C3AED]">Solutions</span>
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          We architect, design, and develop scalable digital products that drive revenue, reduce costs, and elevate brands.
        </p>
      </section>

      <!-- Services Grid -->
      <section class="mb-32">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="group relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <!-- Glowing hover effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div :class="`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.bg} ${service.color}`">
              <svg v-if="service.id === 'web-dev'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              <svg v-else-if="service.id === 'web-apps'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <svg v-else-if="service.id === 'mobile-apps'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <svg v-else-if="service.id === 'ui-ux'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              <svg v-else-if="service.id === 'ai-automation'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <svg v-else class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 relative z-10">{{ service.title }}</h3>
            <p class="text-[#94A3B8] leading-relaxed relative z-10">
              {{ service.description }}
            </p>
            
            <div class="mt-8 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10">
              <span :class="`${service.color} mr-2`">Learn More</span>
              <svg :class="`w-4 h-4 ${service.color} group-hover:translate-x-1 transition-transform`" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology Stack -->
      <section class="mb-32">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Modern Tech Stack</h2>
          <p class="text-[#94A3B8] text-lg max-w-2xl mx-auto">We use robust, scalable, and cutting-edge technologies to ensure your product is built for the future.</p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="tech in ['Vue.js 3', 'TypeScript', 'Node.js', 'Tailwind CSS', 'AWS', 'Python', 'Docker', 'PostgreSQL', 'GraphQL', 'OpenAI']" :key="tech" class="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[#94A3B8] font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
            {{ tech }}
          </div>
        </div>
      </section>

      <!-- Workflow Timeline -->
      <section class="max-w-4xl mx-auto mb-32">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p class="text-[#94A3B8] text-lg">A transparent, agile workflow designed for speed and quality.</p>
        </div>
        
        <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          <div v-for="(step, index) in steps" :key="index" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0B1120] bg-[#06B6D4] text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {{ index + 1 }}
            </div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 class="font-bold text-xl text-white mb-2">{{ step.title }}</h3>
              <p class="text-[#94A3B8]">{{ step.desc }}</p>
            </div>
          </div>
          
        </div>
      </section>

      <!-- CTA -->
      <section class="relative bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-[#0B1120] border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Build Something Great</h2>
          <p class="text-lg text-[#94A3B8] mb-10 leading-relaxed">
            Need a custom solution that isn't listed here? We'd love to hear about your unique challenges.
          </p>
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1120] font-bold rounded-xl gap-2 hover:scale-105 transition-transform duration-300">
            Request a Quote
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { services } from '@/data'

const steps = [
  { title: "Discovery & Strategy", desc: "We align on your business goals, target audience, and technical requirements to create a robust roadmap." },
  { title: "UI/UX Design", desc: "Our designers craft intuitive, high-converting interfaces tailored to your brand identity." },
  { title: "Development", desc: "Our engineers build scalable, secure, and blazing-fast applications using modern frameworks." },
  { title: "Testing & QA", desc: "Rigorous automated and manual testing to ensure a bug-free, premium experience." },
  { title: "Launch & Iterate", desc: "We deploy to production and provide ongoing support, adapting to user feedback." }
]

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
