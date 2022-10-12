//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/pl/count`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/pl/count',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
