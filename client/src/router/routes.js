
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'main', component: () => import('pages/Index.vue') },
      { path: '/loading', name: 'loading', component: () => import('pages/Loading.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/earnings', component: () => import('pages/Earnings.vue') },
      { path: '/leaderboard', component: () => import('pages/Leaderboard.vue') },
      { path: '/certificate/:certificateLevel', component: () => import('pages/Certificate.vue') },
      { path: '/completed/:certificateLevel', component: () => import('pages/Completed.vue') }
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
    component: () => import('layouts/Signup.vue')
  },
  {
    path: '/mobile',
    component: () => import('pages/Mobile.vue')
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
