//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/eapi/privacy/info/get/v2`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/privacy/info/get/v2',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
