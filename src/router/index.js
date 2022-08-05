import { createRouter, createWebHistory } from 'vue-router'
import MainNavbar from '../components/MainNavbar.vue'

const routes = [
  {
    path: '/',
    component: MainNavbar,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView')
      },
      {
        path: 'about',
        name: 'contact',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/AboutView.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
