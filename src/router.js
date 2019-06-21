import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Orders from './views/Orders.vue';
import Recipe from './views/Recipe.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: Recipe,
      props: true,
    },
  ],
});
