import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About/index.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/pages/Services/index.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/pages/Portfolio/index.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/pages/Team/index.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/pages/Pricing/index.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/pages/Blog/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/Contact/index.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
