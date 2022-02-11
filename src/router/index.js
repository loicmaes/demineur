import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/game',
    component: () => import('../views/Game')
  }
  // {
  //   path: '/auth/',
  //   component: undefined,
  //   children: [
  //     {
  //       path: 'login',
  //       component: undefined
  //     },
  //     {
  //       path: 'signup',
  //       component: undefined
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
