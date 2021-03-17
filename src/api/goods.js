import http from '@/util/http.js'

export async function goodsDetailData(id) {
  let url = '/details'
  const {
    data: { data }
  } = await http.post(url, id)
  const res = await http.post(url, id)

  return {
    all: res,
    data
  }
}
