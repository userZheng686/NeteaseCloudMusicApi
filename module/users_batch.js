//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    '/api/authentication/identity/user/all': '{"userId":389185719}',
    '/api/music-vip-membership/client/vip/info': '{}',
    '/api/w/v1/user/detail/389185719': '{"userId":389185719,"all":true}',
    batchOrder:
      '["/api/w/v1/user/detail/389185719","/api/music-vip-membership/client/vip/info","/api/authentication/identity/user/all","e_r"]',
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
