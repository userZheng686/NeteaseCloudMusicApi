//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request('POST', `https://interface.music.163.com/eapi/cdns`, data, {
    crypto: 'eapi',
    proxy: query.proxy,
    url: '/api/cdns',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
