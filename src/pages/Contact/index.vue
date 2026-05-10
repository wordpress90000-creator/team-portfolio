<template>
  <div class="min-h-screen pt-32 pb-24 overflow-hidden relative">
    
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 transform-gpu" style="background: radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <div class="grid lg:grid-cols-2 gap-16 mb-32">
        
        <!-- Contact Info -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8">
            <span class="text-xs font-semibold text-[#06B6D4] uppercase tracking-widest">Connect</span>
          </div>
          <h1 class="text-5xl md:text-[64px] leading-[1.1] font-bold tracking-tight mb-8">
            Let's Build the <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Impossible</span>
          </h1>
          <p class="text-xl text-[#94A3B8] leading-relaxed mb-12">
            Whether you need a complete digital transformation or a custom AI solution, our experts are ready to collaborate.
          </p>

          <div class="space-y-8">
             <div class="flex items-start gap-4">
               <div class="w-12 h-12 rounded-full bg-[#06B6D4]/10 flex items-center justify-center shrink-0">
                 <svg class="w-6 h-6 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <div>
                 <h4 class="text-lg font-bold text-white mb-1">Email Us</h4>
                 <p class="text-[#94A3B8]">hello@nexustech.agency</p>
               </div>
             </div>
             <div class="flex items-start gap-4">
               <div class="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                 <svg class="w-6 h-6 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <div>
                 <h4 class="text-lg font-bold text-white mb-1">HQ Location</h4>
                 <p class="text-[#94A3B8]">120 Innovation Way, Suite 400<br/>San Francisco, CA 94105</p>
               </div>
             </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem]">
           <h3 class="text-2xl font-bold text-white mb-8">Send us a message</h3>
           <form @submit.prevent class="space-y-6">
              <div class="grid grid-cols-2 gap-6">
                 <div>
                   <label class="block text-sm font-medium text-[#94A3B8] mb-2">First Name</label>
                   <input type="text" class="w-full bg-[#0B1120]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" placeholder="John" />
                 </div>
                 <div>
                   <label class="block text-sm font-medium text-[#94A3B8] mb-2">Last Name</label>
                   <input type="text" class="w-full bg-[#0B1120]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" placeholder="Doe" />
                 </div>
              </div>
              <div>
                 <label class="block text-sm font-medium text-[#94A3B8] mb-2">Work Email</label>
                 <input type="email" class="w-full bg-[#0B1120]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                 <label class="block text-sm font-medium text-[#94A3B8] mb-2">Project Type</label>
                 <select class="w-full bg-[#0B1120]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06B6D4] transition-colors appearance-none">
                    <option>Web Application Development</option>
                    <option>AI Automation & Integration</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                 </select>
              </div>
              <div>
                 <label class="block text-sm font-medium text-[#94A3B8] mb-2">Project Details</label>
                 <textarea rows="4" class="w-full bg-[#0B1120]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06B6D4] transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button class="w-full py-4 bg-white text-[#0B1120] font-bold rounded-xl hover:bg-[#06B6D4] hover:text-white transition-colors duration-300">
                Submit Request
              </button>
           </form>
        </div>
      </div>

      <!-- FAQs -->
      <section class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <p class="text-[#94A3B8] text-lg">Everything you need to know about working with us.</p>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
          >
             <button 
                @click="toggleFaq(index)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
             >
                <span class="font-bold text-lg text-white pr-4">{{ faq.question }}</span>
                <svg 
                  :class="['w-5 h-5 text-[#06B6D4] shrink-0 transition-transform duration-300', activeFaq === index ? 'rotate-180' : '']" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
             </button>
             <div 
               v-show="activeFaq === index"
               class="px-8 pb-6 text-[#94A3B8] leading-relaxed border-t border-white/5"
             >
                {{ faq.answer }}
             </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { faqs } from '@/data'

const activeFaq = ref(0) // Open the first one by default

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
