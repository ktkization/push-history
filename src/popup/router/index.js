import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './routes'

Vue.use(VueRouter);

Vue.prototype.$http = axios;
Vue.prototype.$storage = chrome.storage.local;

export default new VueRouter({
  routes
})
