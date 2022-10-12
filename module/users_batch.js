//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  let userVal = {
    userId: query.userId,
  }
  let personVal = {
    id: query.userId,
    type: 1,
  }
  let detailKey = `/api/w/v1/user/detail/${query.userId}`
  let detailVal = {
    userId: query.userId,
    all: true,
  }
  let batchOrder = [
    '/api/mlivestream/entrance/personalpage/get',
    detailKey,
    '/api/music-vip-membership/front/vip/info',
    '/api/authentication/identity/user/all',
    'e_r',
  ]
  const data = {
    '/api/mlivestream/entrance/personalpage/get': JSON.stringify(personVal),
    '/api/authentication/identity/user/all': JSON.stringify(userVal),
    '/api/music-vip-membership/front/vip/info': JSON.stringify(userVal),
    detailKey: JSON.stringify(detailVal),
    batchOrder: JSON.stringify(batchOrder),
    e_r: true,
  }
  return request('POST', `https://interface.music.163.com/eapi/batch`, data, {
    crypto: 'eapi',
    proxy: query.proxy,
    url: '/api/batch',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
