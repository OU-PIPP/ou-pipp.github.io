// import ImprintPage from '@/views/ImprintPage.vue';
// import GdprPage from '@/views/GdprPage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // {
  //   path: '/imprint',
  //   name: 'Imprint',
  //   component: ImprintPage
  // },
  // {
  //   path: '/gdpr',
  //   name: 'Privacy Policy',
  //   component: GdprPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
