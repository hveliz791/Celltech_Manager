import { createRouter, createWebHistory } from 'vue-router';

import NuevoIngreso from '../views/NuevoIngresoView.vue';
import Reparaciones from '../views/ReparacionesView.vue';
import Entregas from '../views/EntregasView.vue';

const routes = [
  { path: '/', component: NuevoIngreso },
  { path: '/reparaciones', component: Reparaciones },
  { path: '/entregas', component: Entregas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;