<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Hero -->
      <section class="text-center max-w-4xl mx-auto mb-24">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Our People</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          Meet the <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#06B6D4]">Innovators</span>
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          We are a diverse team of engineers, designers, and strategists united by a passion for building extraordinary digital products.
        </p>
      </section>

      <!-- Founder Spotlight -->
      <section class="mb-32">
        <div class="bg-gradient-to-r from-[#111827] to-[#1e293b] rounded-[3rem] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          
          <div class="w-full md:w-1/2 relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 w-fit mb-6">
              <span class="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest">Founder Spotlight</span>
            </div>
            <h2 class="text-4xl font-bold text-white mb-6">Sarah Jenkins</h2>
            <p class="text-lg text-[#94A3B8] leading-relaxed mb-6">
              "Building great software isn't just about code; it's about deeply understanding the human experience on the other side of the screen. At NexusTech, we put empathy at the core of our engineering."
            </p>
            <div class="flex items-center gap-4 mt-8">
               <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 relative z-10">
             <div class="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/20">
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sarah Jenkins" />
             </div>
          </div>
        </div>
      </section>

      <!-- Team Members -->
      <section class="mb-32">
        <h2 class="text-3xl md:text-5xl font-bold mb-16 text-center">Core Leadership</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in team.slice(1)" 
            :key="member.id"
            class="group relative bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:border-[#06B6D4]/50 transition-colors duration-500"
          >
             <div class="relative h-80 overflow-hidden">
               <img :src="member.image" :alt="member.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
               <div class="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
             </div>
             <div class="p-8 relative -mt-16 z-10 bg-gradient-to-t from-[#111827] to-transparent">
                <h3 class="text-2xl font-bold text-white mb-1">{{ member.name }}</h3>
                <div class="text-[#06B6D4] text-sm font-semibold mb-6">{{ member.role }}</div>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="skill in member.skills" :key="skill" class="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[#94A3B8]">
                    {{ skill }}
                  </span>
                </div>
                
                <div class="flex items-center gap-3">
                  <a href="#" class="text-[#94A3B8] hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- Hiring Section CTA -->
      <section class="relative bg-white border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-[#0B1120]">Join the Resistance.</h2>
          <p class="text-lg text-[#0B1120]/70 mb-10 leading-relaxed font-medium">
            We are always looking for brilliant minds who want to build the future. If you are passionate about AI, engineering, or design, we want to talk.
          </p>
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-[#0B1120] text-white font-bold rounded-xl gap-2 hover:bg-[#7C3AED] transition-colors duration-300">
            View Open Roles
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { team } from '@/data'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
