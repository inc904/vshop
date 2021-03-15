import Vue from 'vue'
import vant from 'vant'
import { Lazyload } from "vant";

import App from './App.vue'
import router from '@/router'

import 'vant/lib/index.css';

Vue.use(vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
