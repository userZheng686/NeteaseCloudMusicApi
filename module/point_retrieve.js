//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/eapi/point/retrieve`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/point/retrieve',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
