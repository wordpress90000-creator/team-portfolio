<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <!-- Cinematic Background -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 70%);"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Premium Hero section -->
      <section class="text-center max-w-4xl mx-auto mb-32">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Our Story</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          Pioneering the <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Future</span> of Digital.
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          We are a collective of visionaries, engineers, and designers committed to transforming ambitious ideas into world-class digital realities.
        </p>
      </section>

      <!-- Company Growth Graph / Image -->
      <section class="mb-32 relative group">
        <div class="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(6,182,212,0.4) 100%);"></div>
        <div class="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#111827]">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0" alt="Team meeting" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
          
          <!-- Animated overlay stats -->
          <div class="absolute bottom-0 left-0 w-full p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div class="flex flex-col">
               <span class="text-4xl md:text-5xl font-bold text-white mb-2">2014</span>
               <span class="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">Founded</span>
             </div>
             <div class="flex flex-col border-l border-white/10 pl-8">
               <span class="text-4xl md:text-5xl font-bold text-[#06B6D4]">120+</span>
               <span class="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">Global Experts</span>
             </div>
             <div class="flex flex-col border-l border-white/10 pl-8 hidden md:flex">
               <span class="text-4xl md:text-5xl font-bold text-[#7C3AED]">500+</span>
               <span class="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">Projects Launched</span>
             </div>
             <div class="flex flex-col border-l border-white/10 pl-8 hidden md:flex">
               <span class="text-4xl md:text-5xl font-bold text-white">99%</span>
               <span class="text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">Client Retention</span>
             </div>
          </div>
        </div>
      </section>

      <!-- Grid Sections: Mission/Vision -->
      <section class="grid md:grid-cols-2 gap-8 mb-32">
        <div class="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
          <div class="w-14 h-14 bg-[#7C3AED]/20 rounded-2xl flex items-center justify-center mb-8">
            <svg class="w-7 h-7 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 class="text-3xl font-bold mb-4 text-white">Our Mission</h3>
          <p class="text-[#94A3B8] leading-relaxed text-lg">
            To accelerate human potential through intelligent software. We build the tools and platforms that enable modern enterprises to scale, automate, and excel in a digital-first economy.
          </p>
        </div>
        <div class="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
          <div class="w-14 h-14 bg-[#06B6D4]/20 rounded-2xl flex items-center justify-center mb-8">
            <svg class="w-7 h-7 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <h3 class="text-3xl font-bold mb-4 text-white">Our Vision</h3>
          <p class="text-[#94A3B8] leading-relaxed text-lg">
            A future where complex technology feels invisible and effortless. We foresee a world where bespoke AI and cloud architecture is accessible to visionaries across all industries.
          </p>
        </div>
      </section>

      <!-- Founder Section -->
      <section class="max-w-5xl mx-auto mb-32 bg-[#111827]/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
        <div class="grid md:grid-cols-2">
          <div class="p-12 flex flex-col justify-center">
            <svg class="w-10 h-10 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p class="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              "We don't just write code. We architect solutions to business problems. True engineering is understanding the user deeply before writing a single line."
            </p>
            <div>
              <div class="font-bold text-white text-lg">Sarah Jenkins</div>
              <div class="text-[#06B6D4] text-sm font-semibold uppercase tracking-wider">CEO & Founder</div>
            </div>
          </div>
          <div class="h-[400px] md:h-auto">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Founder" />
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="relative bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-[#0B1120] border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Shape the Future?</h2>
          <p class="text-lg text-[#94A3B8] mb-10 leading-relaxed">
            Join the ranks of leading enterprises that trust NexusTech to build and maintain their most critical software operations.
          </p>
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1120] font-bold rounded-xl gap-2 hover:scale-105 transition-transform duration-300">
            Start a Conversation
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
