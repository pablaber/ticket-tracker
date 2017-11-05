import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import Info from './Info.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
