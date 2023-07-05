import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import { pagesLinks } from '@/utils/pagesLinks';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: pagesLinks.home,
      name: 'home',
      component: HomePage
    }
  ]
});

export default router;
