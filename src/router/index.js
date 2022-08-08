import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/MainNavbar.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/MainNavbar/HomeView')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/MainNavbar/AboutView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/MainNavbar/AboutView.vue')
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/MainNavbar/AboutView.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/MainNavbar/AboutView.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/MainNavbar/AboutView.vue')
      },
    ]
  },
  {
    path: '/learn',
    component: () => import('../components/DashNavbar.vue'),
    children: [
      {
        path: '',
        name: 'intro',
        component: () => import('../views/DashNavbar/IntroPage.vue')
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
