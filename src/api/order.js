import request from '@/utils/request'

export function getOrders(data) {
  return request({
    url: '/order/querylist',
    method: 'post',
    data: data
  })
}

export function addShop(data) {
  return request({
    url: '/order/save',
    method: 'post',
    data: data
  })
}
