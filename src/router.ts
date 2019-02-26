import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home-welcome',
          component: () => import('./views/home/Welcome.vue'),
        },
        {
          path: '/back-end',
          name: 'home_back-end',
          component: () => import(/* webpackChunkName: "back-end" */ './views/home/BackEnd.vue'),
          children: [
            {
              path: '/back-end',
              redirect: '/back-end/dashboard',
            },
            {
              path: '/back-end/dashboard',
              name: 'home_back-end_dashboard',
              component: () => import('./views/home/back-end/Dashboard.vue'),
            },
            {
              path: '/back-end/items',
              name: 'home_back-end_dashboard',
              component: () => import('./views/home/back-end/Dashboard.vue'),
            },
            {
              path: '/back-end/inventory',
              name: 'home_back-end_dashboard',
              component: () => import('./views/home/back-end/Dashboard.vue'),
            },
          ],
        },
        {
          path: '/empresa',
          name: 'empresa',
          component: () => import('./modulos/empresa/Empresa.vue'),
          children: [
            {
              path: '/empresa',
              redirect: '/empresa/dashboard',
            },
            {
              path: '/empresa/dashboard',
              name: 'empresa-dashboard',
              component: () => import(
                /* webpackChunkName: "page-empresa-dashboard" */  './modulos/empresa/_Dashboard.vue'),
            },
            {
              path: '/empresa/datos',
              name: 'empresa-datos',
              component: () => import(
                /* webpackChunkName: "page-empresa-datos" */  './modulos/empresa/_Datos.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/inicializando',
      name: 'inicializando',
      component: () => import('./views/Inicializando.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'inicializando') {
    store.state.navegacion.a = to.path;
    if (store.state.navegacion.operativa) {
      next();
    } else {
      next('inicializando');
    }
  } else {
    next();
  }
  next();
});

export default router;
