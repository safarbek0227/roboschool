import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base: 'Roboschool',

  routes: [
    {
      path: '/',
      component: () => import('../components/MainNavbar.vue'),
      // meta: {
      //   title: 'Roboschool- Online kurslar',
      //   metaTags: [
      //     {
      //       name: 'author',
      //       content: 'Solijonov Safarbek'
      //     },
      //     {
      //       property: 'description',
      //       content: "Roboschool online robotextnikani O'rganish uchun en yaxshi tanlov"
      //     },
      //     {
      //       property: 'og:description',
      //       content: "Roboschool online robotextnikani O'rganish uchun en yaxshi tanlov"
      //     },
      //   ]
      // },
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
      component: () => import('../components/DashNavbar.vue'),
      children: [
        {
          path:'/',
          name: 'intro',
          component: () => import('../views/dashboard/intro.vue')
        },
        {
          path: ':name',
          name: 'arduino docs',
          component: () => import('../views/dashboard/doc.vue')
        }
      ]
    },
    {path:'/:pathMatches(.*)*', component: () => import('../components/404.vue')}
  ]
})


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});




export default router
