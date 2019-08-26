import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import axios from 'axios';
import 'chota'

import router from './router'

Vue.prototype.$http = axios;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
