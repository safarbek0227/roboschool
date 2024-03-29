import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Main views 
  {
    path: '/',
    component: () => import('../components/MainNavbar.vue'),
    meta: {
      title: 'Roboschool- Online kurslar',
      metaTags: [
        {
          name: 'author',
          content: 'Solijonov Safarbek'
        },
        {
          property: 'description',
          content: "Roboschool online robotextnikani O'rganish uchun en yaxshi tanlov"
        },
        {
          property: 'og:image',
          content: "/logo.png"
        }
      ]
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/main/HomeView.vue')
      },
      {
        path: 'about/',
        name: 'about',
        component: () => import('../views/main/AboutView.vue')
      },
      {
        path:'shop/',
        name: 'shop-advert',
        meta: {
          title: 'Roboschool- Online dokoni',
          metaTags: [
            {
              name: 'author',
              content: 'Solijonov Safarbek'
            },
            {
              property: 'description',
              content: "Roboschool online robotextnikani O'rganish uchun eng yaxshi tanlov"
            },
            {
              property: 'og:image',
              content: "/logo.png"
            }
          ]
        },
        component: () => import('../views/shop/shopView.vue')
      },
    ]
  },


  // Learn views 
  {
    path: '/learn',
    component: () => import('../components/DashNavbar.vue'),
    name: 'learn',
    meta: {
      title: 'Roboschool- Online kurslar',
      metaTags: [
        {
          name: 'author',
          content: 'Solijonov Safarbek'
        },
        {
          property: 'description',
          content: "Roboschool online robotextnikani O'rganish uchun en yaxshi tanlov"
        },
        {
          property: 'og:image',
          content: "/logo.png"
        }
      ]
    },

    children: [
      {
        path:'',
        name: 'intro',
        component: () => import('../views/dashboard/intro-page.vue')
      },
      {
        path: ':slug/',
        name: 'docs',
        component: () => import('../views/dashboard/doc-page.vue'),
      }
    ]
  },
  {path:'/:pathMatches(.*)*', component: () => import('../components/404-componet.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active", // active class for *exact* links.

  scrollBehavior(to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({el: to.hash, top: 100, behavior: "smooth", })
      }, 500)
    })
  },

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

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
