import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
  ],
});

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     next('login');
//   } else if (!requiresAuth && currentUser) {
//     next('home');
//   } else {
//     next();
//   }
// });

export default router;
