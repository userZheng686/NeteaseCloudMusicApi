//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    type_ids: '["110_0","111_0"]',
  }
  return request('POST', `https://interface.music.163.com/eapi/ad/get`, data, {
    crypto: 'eapi',
    proxy: query.proxy,
    url: '/api/ad/get',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
