<template>
  <div class="space-y-32 pb-32">
    <!-- Main Hero Area -->
    <main id="home" class="min-h-screen pt-32 flex flex-col md:flex-row px-6 lg:px-12 items-center relative z-10 max-w-7xl mx-auto">
      <!-- Hero Text Content -->
      <div class="w-full md:w-1/2 flex flex-col gap-6 mb-12 md:mb-0">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
          <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span class="text-xs font-semibold text-blue-600 tracking-widest">AVAILABLE FOR WORK</span>
        </div>
        <h1 class="text-5xl md:text-[64px] leading-[1.1] font-bold tracking-tight text-gray-900">
          Hi, I'm John<br/>
          Premium <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Web Developer</span> <br/>& UI Designer.
        </h1>
        <p class="text-gray-600 text-lg max-w-lg leading-relaxed">
          I create premium business websites that help brands grow online with modern design, sophisticated aesthetics, and smooth user experiences.
        </p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
          <a href="#contact" class="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 hover:-translate-y-1 transition-all text-center">
            Hire Me
          </a>
          <a href="#projects" class="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all focus:outline-none text-center">
            View Projects
          </a>
        </div>
      </div>

      <!-- Hero Graphic / Avatar -->
      <div class="w-full md:w-1/2 h-full relative flex items-center justify-center min-h-[400px]">
         <div class="relative w-72 h-[380px] md:w-[350px] md:h-[450px] rounded-3xl bg-gradient-to-tr from-blue-100 to-white shadow-2xl p-2 animate-float">
            <!-- Replace the src below with your uploaded image filename, e.g. /my-pic.jpg -->
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="John - Web Developer" class="w-full h-full object-cover rounded-2xl" />
            
            <!-- Floating badge -->
            <div class="absolute bottom-10 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-delayed">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <div class="text-sm font-bold text-gray-900">100% Quality</div>
                <div class="text-[10px] text-gray-500 uppercase">Premium Builds</div>
              </div>
            </div>
         </div>
      </div>
    </main>

    <!-- Bottom Feature Strip -->
    <section class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-wrap justify-between items-center gap-8">
        <div class="flex flex-col">
          <span class="text-3xl font-bold text-gray-900">5+</span>
          <span class="text-sm text-gray-500 font-medium mt-1">Years Experience</span>
        </div>
        <div class="flex flex-col">
          <span class="text-3xl font-bold text-blue-600">50+</span>
          <span class="text-sm text-gray-500 font-medium mt-1">Projects Completed</span>
        </div>
        <div class="flex flex-col">
          <span class="text-3xl font-bold text-gray-900">24/7</span>
          <span class="text-sm text-gray-500 font-medium mt-1">Dedicated Support</span>
        </div>
        <div class="flex flex-col">
          <span class="text-3xl font-bold text-blue-600">100%</span>
          <span class="text-sm text-gray-500 font-medium mt-1">Client Satisfaction</span>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative group">
            <div class="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div class="relative rounded-3xl border border-gray-100 w-full h-[500px] overflow-hidden bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" 
                alt="Workspace" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div>
            <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">ABOUT ME</div>
            <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Crafting Digital Experiences That <span class="text-blue-600">Convert.</span>
            </h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              I am a passionate Frontend Developer and UI/UX Designer dedicated to building high-end digital products. My mission is to translate complex business goals into elegant, user-centric web applications that stand out in the modern digital landscape.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 shadow-sm">✓</div>
                Clean, Maintainable Code
              </li>
              <li class="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 shadow-sm">✓</div>
                Pixel-Perfect UI/UX Design
              </li>
              <li class="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 shadow-sm">✓</div>
                Performance & SEO Optimized
              </li>
            </ul>
          </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-16">
        <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">EXPERTISE</div>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Technical Skills</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="skill in ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Vue & React', 'Tailwind CSS', 'Firebase DB', 'Responsive UI', 'UI/UX Design', 'Web Animations']" :key="skill" 
             class="bg-white border border-gray-100 hover:border-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center group cursor-default">
          <div class="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all text-blue-500 font-bold text-xl shadow-sm">
             ⚡
          </div>
          <span class="font-semibold text-gray-800">{{ skill }}</span>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-16">
        <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">WHAT I DO</div>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Premium Services</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(service, idx) in servicesList" :key="idx" class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
          <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
            <span class="text-2xl font-bold">{{ idx + 1 }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">PORTFOLIO</div>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Selected Works</h2>
        </div>
        <a href="#contact" class="px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold flex items-center gap-2 group shadow-sm">
          Start a project <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
      <div class="grid md:grid-cols-2 gap-10">
        <div v-for="(proj, idx) in projectsList" :key="idx" class="group block overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div class="relative h-64 md:h-80 overflow-hidden bg-gray-100">
            <img :src="proj.img" :alt="proj.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
          </div>
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in proj.tags" :key="tag" class="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">{{ tag }}</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ proj.title }}</h3>
            <p class="text-gray-500 mb-6">{{ proj.desc }}</p>
            <div class="flex gap-4">
              <button class="flex-1 bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-md">Live Preview</button>
              <button class="flex-1 border border-gray-200 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="bg-gradient-to-br from-blue-600 to-[#0ea5e9] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <div class="text-blue-100 font-semibold tracking-wider text-sm mb-6">CLIENT VOICES</div>
          <h2 class="text-3xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">"John completely transformed our online presence. His attention to detail and premium design skills are unmatched in the industry."</h2>
          <div class="flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" class="w-16 h-16 rounded-full border-2 border-white object-cover mb-4 shadow-lg" alt="Client"/>
            <div class="font-bold text-lg">Mark Davidson</div>
            <div class="text-blue-100 text-sm font-medium">CEO, StartupInc</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">GET IN TOUCH</div>
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Let's build something amazing together.</h2>
          <p class="text-gray-600 text-lg mb-8">
            Ready to take your digital presence to the next level? Contact me today to discuss your project requirements and get a free quote.
          </p>
          <div class="flex flex-col gap-5">
            <div class="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl shadow-inner">✉</div>
              <div>
                <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Email Me</div>
                <div class="text-gray-900 font-bold text-lg">hello@johndev.com</div>
              </div>
            </div>
            <div class="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center font-bold text-2xl shadow-inner">✆</div>
              <div>
                <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">WhatsApp</div>
                <div class="text-gray-900 font-bold text-lg">+1 (555) 123-4567</div>
              </div>
            </div>
            <div class="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center font-bold text-2xl shadow-inner">@</div>
              <div>
                <div class="text-xs text-gray-500 font-semibold uppercase tracking-wide">Instagram</div>
                <div class="text-gray-900 font-bold text-lg">@john.dev</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
          <form class="flex flex-col gap-6" @submit.prevent>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-gray-700">Name</label>
                <input type="text" placeholder="John Doe" class="px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-gray-700">Email</label>
                <input type="email" placeholder="john@example.com" class="px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white" />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold text-gray-700">Budget</label>
              <select class="px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white appearance-none text-gray-700">
                <option selected disabled>Select your budget range</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold text-gray-700">Project Details</label>
              <textarea rows="4" placeholder="Tell me about your project..." class="px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none bg-gray-50 focus:bg-white"></textarea>
            </div>
            <button class="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <!-- FAQs -->
      <div class="max-w-4xl mx-auto mt-24">
        <div class="text-center mb-12">
          <div class="text-blue-600 font-semibold tracking-wider text-sm mb-3">FAQ</div>
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
          >
             <button 
                @click="toggleFaq(index)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
             >
                <span class="font-bold text-lg text-gray-900 pr-4">{{ faq.question }}</span>
                <svg 
                  :class="['w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300', activeFaq === index ? 'rotate-180' : '']" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
             </button>
             <div 
               v-show="activeFaq === index"
               class="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50 pt-4"
             >
                {{ faq.answer }}
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { faqs } from '@/data'

const activeFaq = ref(0)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const servicesList = [
  { title: "Business Website", desc: "Premium conversion-optimized websites built for brands targeting growth." },
  { title: "Portfolio Website", desc: "Stunning personal branding sites tailored for creators and freelancers." },
  { title: "Furniture Website", desc: "Elegant product showcases using premium eCommerce layouts and aesthetics." },
  { title: "Gym Website", desc: "Dynamic platforms for fitness businesses with scheduling and member features." },
  { title: "Landing Page Design", desc: "High-converting layouts optimized for ad campaigns and product launches." },
  { title: "WhatsApp Integration", desc: "Seamless chat integrations designed to boost direct leads instantly." }
];

const projectsList = [
  {
    title: "Luxe Real Estate",
    tags: ["React", "Tailwind", "GSAP"],
    desc: "A high-end property listing site with immersive scroll animations and premium aesthetics.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Aura Creative Studio",
    tags: ["Next.js", "Framer Motion"],
    desc: "An award-winning agency website pushing the boundaries of web UI interactions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Evo Furniture eCommerce",
    tags: ["Shopify", "Tailwind"],
    desc: "A blazing fast, conversion-optimized headless commerce experience for premium furniture.",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3a11ec72b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "FitLife Plus",
    tags: ["Vue", "Firebase"],
    desc: "A highly-converting gym website managing memberships and schedules.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
  }
];
</script>
