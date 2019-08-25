import Vue from 'vue'
import App from './App'

import axios from 'axios';
import 'chota'

import router from './router'

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
