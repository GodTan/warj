import request from '@/utils/request'

export function login(data) {
  console.log(data)
  return request({
    url: '/pc/home/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/pc/system/roleList',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getUserList(data) {
  console.log(data)
  return request({
    url: '/pc/system/userList',
    method: 'post',
    data
  })
}
export function addUser(data) {
  return request({
    url: '/pc/system/userSave',
    method: 'post',
    data
  })
}
export function deleteUser(data) {
  console.log(data)
  return request({
    url: '/pc/system/userDelete',
    method: 'post',
    data
  })
}
