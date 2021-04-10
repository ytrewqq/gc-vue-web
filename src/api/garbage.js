import request from '@/utils/request'

export function getCommonList(data) {
  return request({
    url: '/garbage/commonlist',
    method: 'get'
  })
}

export function getKeyword(data) {
  return request({
    url: '/garbage/keyword',
    method: 'post',
    data: data
  })
}

export function getHots(data) {
  return request({
    url: '/garbage/queryhot',
    method: 'get'
  })
}
