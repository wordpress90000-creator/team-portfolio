<template>
  <footer class="bg-[#111827]/50 backdrop-blur-xl border-t border-white/5 pt-16 pb-8 px-6 lg:px-12 mt-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <router-link to="/" class="flex items-center gap-2 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-xl flex items-center justify-center">
              <span class="font-bold text-xl text-white">N</span>
            </div>
            <span class="text-xl font-bold tracking-tight text-white">NEXUS<span class="text-[#06B6D4]">TECH</span></span>
          </router-link>
          <p class="text-[#94A3B8] text-sm leading-relaxed mb-6">
            Architecting the digital future with high-performance Web Apps, AI-driven automation, and premium SaaS products.
          </p>
        </div>
        
        <!-- Links -->
        <div>
          <h4 class="text-white font-bold mb-6">Company</h4>
          <ul class="space-y-3 text-sm text-[#94A3B8]">
            <li><router-link to="/about" class="hover:text-white transition-colors">About Us</router-link></li>
            <li><router-link to="/team" class="hover:text-white transition-colors">Our Team</router-link></li>
            <li><router-link to="/careers" class="hover:text-white transition-colors">Careers</router-link></li>
            <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-6">Services</h4>
          <ul class="space-y-3 text-sm text-[#94A3B8]">
            <li><router-link to="/services/web" class="hover:text-white transition-colors">Web Development</router-link></li>
            <li><router-link to="/services/saas" class="hover:text-white transition-colors">SaaS Platforms</router-link></li>
            <li><router-link to="/services/ai" class="hover:text-white transition-colors">AI Automation</router-link></li>
            <li><router-link to="/services/design" class="hover:text-white transition-colors">UI/UX Design</router-link></li>
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-bold mb-6">Subscribe</h4>
          <p class="text-[#94A3B8] text-sm mb-4">Get the latest insights on AI and web development.</p>
          <div class="flex">
            <input type="email" placeholder="Enter your email" class="bg-[#0B1120] border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-[#7C3AED]" />
            <button class="bg-[#7C3AED] px-4 rounded-r-lg text-white font-bold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-[#94A3B8] text-sm">© {{ new Date().getFullYear() }} NexusTech. All rights reserved.</p>
        <div class="flex gap-4 text-sm text-[#94A3B8]">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
