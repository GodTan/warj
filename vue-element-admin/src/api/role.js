import request from '@/utils/request'

export function addRole(data) {
  return request({
    url: '/pc/system/roleSave',
    method: 'post',
    data
  })
}

export function getRolesList(data) {
  return request({
    url: '/pc/system/roleList',
    method: 'post',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: '/pc/system/roleDelete',
    method: 'post',
    data
  })
}

