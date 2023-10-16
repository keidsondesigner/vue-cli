import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './views/HomePage.vue';
import CursosPage from './views/CursosPage.vue';
import AcoesPage from './views/AcoesPage.vue';
import AcoesDadosPage from './views/AcoesDadosPage.vue';

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
  {
    path: '/acoes',
    name: 'acoes',
    component: AcoesPage,
    children: [
      {
        path: ':simbolo',
        component: AcoesDadosPage,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
