import http from '@/util/http.js'

export async function homeData() {
  let url = '/index'
  const {
    data: { data },
  } = await http.post(url)
  const res = await http.post(url)
  // return data
  // console.log(data)
  // return res
  return {
    all: res,
    data,
  }
}
