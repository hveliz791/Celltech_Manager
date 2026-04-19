import { createRouter, createWebHistory } from 'vue-router';

import NuevoIngreso from '../Views/NuevoIngresoView.vue';
import Reparaciones from '../Views/ReparacionesView.vue';
import Entregas from '../Views/EntregasView.vue';

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