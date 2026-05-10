<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Hero -->
      <section class="text-center max-w-4xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 mx-auto">
          <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Insights</span>
        </div>
        <h1 class="text-5xl md:text-[72px] leading-[1.1] font-bold tracking-tight mb-8">
          The Future of <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#06B6D4]">Technology</span>
        </h1>
        <p class="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
          Deep dives, engineering chronicles, and thoughts on AI, automation, and the modern web.
        </p>
      </section>

      <!-- Featured Article -->
      <section class="mb-24">
        <div class="group relative rounded-[2.5rem] bg-[#111827] border border-white/10 overflow-hidden hover:border-[#06B6D4]/30 transition-colors duration-500">
           <div class="flex flex-col lg:flex-row">
             <div class="lg:w-3/5 h-[300px] lg:h-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="AI Feature" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#111827] lg:bg-gradient-to-l lg:from-[#111827] to-transparent"></div>
             </div>
             <div class="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center relative z-10">
                <div class="flex items-center gap-4 mb-6">
                  <span class="text-xs font-bold px-3 py-1 bg-[#06B6D4]/20 text-[#06B6D4] rounded-md">Artificial Intelligence</span>
                  <span class="text-[#94A3B8] text-sm">Oct 24, 2023</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-[#06B6D4] transition-colors">
                  The Dawn of Autonomous Coding Agents
                </h2>
                <p class="text-[#94A3B8] text-lg mb-8 leading-relaxed">
                  How large language models are transitioning from simple code completion to autonomous problem-solving agents capable of full project architectures.
                </p>
                <div class="flex items-center gap-4 mt-auto">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" class="w-10 h-10 rounded-full border border-white/20" alt="Sarah Jenkins" />
                  <div class="text-sm">
                    <div class="font-bold text-white">Sarah Jenkins</div>
                    <div class="text-[#94A3B8]">CEO & Founder</div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      <!-- Blog Grid -->
      <section class="mb-32">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div 
            v-for="post in blogPosts" 
            :key="post.id"
            class="group bg-[#111827] rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:border-white/20"
          >
             <div class="h-60 relative overflow-hidden">
               <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
             </div>
             <div class="p-8">
                <div class="flex justify-between items-center mb-6">
                  <span class="text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 text-white rounded-md">{{ post.category }}</span>
                  <span class="text-[#94A3B8] text-xs font-medium">{{ post.date }}</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-[#7C3AED] transition-colors">
                  {{ post.title }}
                </h3>
                <p class="text-[#94A3B8] line-clamp-3 mb-8">
                  {{ post.excerpt }}
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xs">
                      {{ post.author.charAt(0) }}
                    </div>
                    <span class="text-sm font-semibold text-white">{{ post.author }}</span>
                  </div>
                  <span class="text-xs text-[#94A3B8] font-medium">{{ post.readTime }} read</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      <!-- Load More / Subscribe -->
      <section class="text-center">
        <button class="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white hover:text-black transition-colors duration-300">
           Load More Articles
        </button>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { blogPosts } from '@/data'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
