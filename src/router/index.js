import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('../views/favor/index.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/index.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/message/index.vue')
    },
  ]
})

export default router
