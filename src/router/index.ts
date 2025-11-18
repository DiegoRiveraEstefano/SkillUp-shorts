import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../pages/CoursesView.vue'),
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import('../pages/BadgesView.vue'),
    },
  ],
})

export default router
