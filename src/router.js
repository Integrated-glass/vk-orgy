import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home.vue';
// import store from '@/store/index';

// const authBeforeEnter = (to, from, next) => {
//   next(store.state.auth.token ? undefined : {name: 'login'});
// };
// const goWithoutAuth = (to, from, next) => {
//   next(store.state.auth.token ? {name: 'profile'} : undefined);
// };

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // beforeEnter: (to, from, next) => {next({name: 'login'});},
    },
    {
      path: '/signup',
      name: 'signup',
      // beforeEnter: goWithoutAuth,
      component: () => import(/* webpackChunkName: "signup" */ './pages/signup.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // beforeEnter: goWithoutAuth,
      component: () => import(/* webpackChunkName: "login" */ './pages/login.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      // beforeEnter: authBeforeEnter,
      component: () => import(/* webpackChunkName: "profile" */ './pages/profile.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      // beforeEnter: authBeforeEnter,
      component: () => import(/* webpackChunkName: "analytics" */ './pages/analytics.vue'),
    },
    {
      path: '/new-event',
      name: 'new-event',
      // beforeEnter: authBeforeEnter,
      component: () => import(/* webpackChunkName: "new-event" */ './pages/new-event.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './pages/404.vue'),
    }, {
      path: '*',
      redirect: '/404'
    }
  ],
});
