// 专栏详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    e_r: true,
  }
  return request('POST', `https://interface.music.163.com/eapi/topic`, data, {
    crypto: 'eapi',
    url: '/api/topic',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
