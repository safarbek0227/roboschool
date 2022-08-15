import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base: 'Roboschool',

  routes: [
    {
      path: '/',
      component: () => import('../components/MainNavbar.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/main/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/main/AboutView.vue')
        }

      ]
    },
    {
      path: '/learn',
      name:'learn',
      component: () => import('../components/DashNavbar.vue')
    },
    {path:'/:pathMatches(.*)*', component: () => import('../components/404.vue')}
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = 'Roboschool'
  next()
})



export default router
