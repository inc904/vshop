import http from '@/util/http.js'

export async function getHomeData() {
  let url = '/auth_api/index'
  return http.post(url)
}
