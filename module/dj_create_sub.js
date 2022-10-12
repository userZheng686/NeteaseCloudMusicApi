module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.userId,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/get/create/sub/count`,
    data,
    {
      crypto: 'eapi',
      url: '/api/djradio/get/create/sub/count',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
