import Vue from 'vue'
const http = Vue.axios.create({
  baseURL: '/api/routine/',
  timeout: 5000,
})
export default http
