
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('pages/Level.vue') },
      { path: '/loading', name: 'loading', component: () => import('pages/Loading.vue') },
      { path: '/start', name: 'start', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/level',
    component: () => import('layouts/LevelLayout.vue'),
    children: [
      { path: '/level/:level([0-9]+)', component: () => import('pages/Level.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/signup', component: () => import('pages/Signup.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
