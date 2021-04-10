import request from '@/utils/request'

export function getOrders(data) {
  return request({
    url: '/order/userOrder',
    method: 'post',
    data: data
  })
}

export function addOrder(data) {
  return request({
    url: '/order/save',
    method: 'post',
    data: data
  })
}

export function updateOrder(data) {
  return request({
    url: '/order/updatestatus',
    method: 'post',
    data: data
  })
}
