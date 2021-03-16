import Vue from 'vue'
import vant from 'vant'
import { Lazyload } from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from '@/router'

import 'vant/lib/index.css'
import '@/assets/normalize.css'
import '@/assets/reset.css'
import '@/assets/common.css'
import '@/assets/rem.js'
import 'amfe-flexible'

Vue.use(vant)
Vue.use(Lazyload)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
