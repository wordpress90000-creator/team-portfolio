<template>
  <div>
    <!-- Main Hero Area -->
    <main class="min-h-screen pt-32 flex flex-col md:flex-row px-6 lg:px-12 items-center relative z-10 max-w-7xl mx-auto">
      <!-- Hero Text Content -->
      <div class="w-full md:w-1/2 flex flex-col gap-6 mb-12 md:mb-0">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
          <span class="w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse"></span>
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Agency of the Year 2026</span>
        </div>
        <h1 class="text-5xl md:text-[64px] leading-[1.1] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#94A3B8]">
          Architecting the <br/>Digital <span class="text-[#7C3AED]">Future</span>
        </h1>
        <p class="text-[#94A3B8] text-lg max-w-lg leading-relaxed">
          We build high-performance Web Apps, AI-driven automation, and premium SaaS products for forward-thinking enterprises globally.
        </p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
          <button class="px-8 py-4 bg-[#F8FAFC] text-[#0B1120] font-bold rounded-xl flex items-center gap-2 hover:bg-white transition-colors">
            View Showcase
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" class="w-10 h-10 rounded-full border-2 border-[#0B1120] object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" class="w-10 h-10 rounded-full border-2 border-[#0B1120] object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" class="w-10 h-10 rounded-full border-2 border-[#0B1120] object-cover" />
              <div class="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-purple-600 flex items-center justify-center text-[10px] font-bold z-10">+50</div>
            </div>
            <span class="text-sm text-[#94A3B8] font-medium">Trusted by 500+ Innovators</span>
          </div>
        </div>
      </div>

      <!-- Hero Graphic / UI Visual -->
      <div class="w-full md:w-1/2 h-full relative flex items-center justify-center min-h-[400px]">
        <!-- Glass Dashboard Mock -->
        <div class="relative w-full max-w-[500px] h-auto md:h-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
          <div class="flex items-center justify-between mb-6">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div class="text-[10px] text-white/30 font-mono tracking-widest uppercase">SYSTEM_CORE_V4.0</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="h-32 bg-[#7C3AED]/10 rounded-2xl border border-[#7C3AED]/20 p-4 flex flex-col justify-end">
              <div class="text-[#7C3AED] font-bold text-2xl">99.8%</div>
              <div class="text-[10px] text-[#94A3B8] uppercase">Uptime Performance</div>
            </div>
            <div class="h-32 bg-[#06B6D4]/10 rounded-2xl border border-[#06B6D4]/20 p-4 flex flex-col justify-end">
              <div class="text-[#06B6D4] font-bold text-2xl">2.4ms</div>
              <div class="text-[10px] text-[#94A3B8] uppercase">API Response Latency</div>
            </div>
          </div>
          <div class="mt-4 h-32 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center p-4">
             <div class="w-full flex items-end gap-1 h-20">
                <div class="flex-1 bg-[#7C3AED]/40 h-[40%] rounded-sm"></div>
                <div class="flex-1 bg-[#7C3AED]/40 h-[65%] rounded-sm"></div>
                <div class="flex-1 bg-[#06B6D4]/40 h-[90%] rounded-sm"></div>
                <div class="flex-1 bg-[#7C3AED]/40 h-[55%] rounded-sm"></div>
                <div class="flex-1 bg-[#7C3AED]/40 h-[75%] rounded-sm"></div>
                <div class="flex-1 bg-[#06B6D4]/40 h-[45%] rounded-sm"></div>
             </div>
          </div>
        </div>
        
        <!-- Floating Action Cards -->
        <div class="hidden lg:block absolute top-[60px] -right-[30px] w-48 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-xl animate-float">
          <div class="w-10 h-10 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="text-sm font-bold">AI Engine Active</div>
          <div class="text-[10px] text-[#94A3B8]">Processing 1.2M events/s</div>
        </div>

        <div class="hidden lg:flex absolute bottom-10 -left-12 w-56 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-xl items-center gap-3 animate-float-delayed">
             <div class="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center text-white">★</div>
             <div>
               <div class="text-xs font-bold">Premium Quality</div>
               <div class="text-[9px] text-[#94A3B8]">Certified ISO 27001</div>
             </div>
        </div>
      </div>
    </main>

    <!-- Bottom Feature Strip -->
    <section class="h-auto md:h-32 bg-[#111827]/50 backdrop-blur-xl border-y border-white/5 flex items-center px-6 lg:px-12 mt-12 py-8 md:py-0">
      <div class="grid grid-cols-2 md:grid-cols-4 w-full divide-x divide-white/10 gap-y-8 md:gap-y-0">
        <div class="flex flex-col px-4 md:px-6">
          <span class="text-2xl font-bold text-white">12+</span>
          <span class="text-[11px] text-[#94A3B8] uppercase tracking-tighter">Years in Tech Innovation</span>
        </div>
        <div class="flex flex-col px-4 md:px-6">
          <span class="text-2xl font-bold text-[#06B6D4]">450+</span>
          <span class="text-[11px] text-[#94A3B8] uppercase tracking-tighter">Global Projects Delivered</span>
        </div>
        <div class="flex flex-col px-4 md:px-6">
          <span class="text-2xl font-bold text-white">24/7</span>
          <span class="text-[11px] text-[#94A3B8] uppercase tracking-tighter">Cloud Infrastructure Support</span>
        </div>
        <div class="flex flex-col px-4 md:px-6">
          <span class="text-2xl font-bold text-[#7C3AED]">98%</span>
          <span class="text-[11px] text-[#94A3B8] uppercase tracking-tighter">Client Success Rate</span>
        </div>
      </div>
    </section>
    
    <!-- About Preview Section -->
    <section class="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Redefining the <br/> Digital <span class="text-[#06B6D4]">Frontier.</span>
            </h2>
            <p class="text-[#94A3B8] text-lg mb-6 leading-relaxed">
              At NexusTech, we believe in building products that don't just look incredible, but perform exceptionally. Our team of veteran engineers and designers craft bespoke solutions for modern enterprises.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="item in ['Award-winning UI/UX Design', 'Modern Tech Stack (Vue/Node/AWS)', 'Enterprise-grade Security']" :key="item" class="flex items-center text-[#94A3B8]">
                <svg class="w-5 h-5 text-[#06B6D4] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                {{ item }}
              </li>
            </ul>
            <router-link to="/about" class="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-semibold inline-block">
              More About Us
            </router-link>
          </div>
          <div class="relative group animate-float-delayed">
            <div class="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/40 to-[#06B6D4]/40 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 transform-gpu"></div>
            <!-- Edited Image to match theme with animation -->
            <div class="relative rounded-3xl border border-white/10 w-full h-[400px] md:h-[500px] overflow-hidden bg-[#111827]">
              <img 
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=2000" 
                alt="Diverse professionals meeting" 
                class="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script setup>
// Home Component Logic
</script>
