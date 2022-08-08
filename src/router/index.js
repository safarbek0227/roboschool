import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/learn',
      component: () => import('../components/DashNavbar.vue'),
      children: [
        {
          path:'',
          name: 'intro',
          component: () => import('../views/dashboard/intro.vue')
          
        }
      ]
    },
    {
      path: '/',
      component: () => import('../components/MainNavbar.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/main/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/main/AboutView.vue')
        }

      ]
    }
  ]
})

export default router
