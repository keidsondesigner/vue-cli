import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './views/HomePage.vue';
import CursosPage from './views/CursosPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CursosPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
