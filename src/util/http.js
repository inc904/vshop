import Vue from 'vue'
const http = Vue.axios.create({
  baseURL: 'api/routine/auth_api',
  // baseURL: '/api',
  timeout: 5000
})
export default http
