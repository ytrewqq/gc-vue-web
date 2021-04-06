import request from '@/utils/request'

export function getComments(data) {
  return request({
    url: '/comment/list',
    method: 'post',
    data: data
  })
}

export function addComment(data) {
  return request({
    url: '/comment/save',
    method: 'post',
    data: data
  })
}
