// 电台收听次数更新

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/dj/program/listen`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/dj/program/listen',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
