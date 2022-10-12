// 清除电台通知

module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/newcount/clear`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/djradio/newcount/clear',
    },
  )
}
