module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/v2/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/djradio/v2/get',
    },
  )
}
