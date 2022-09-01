// 电台节目详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/dj/program/detail`,
    data,
    {
      crypto: 'eapi',
      url: '/api/dj/program/detail',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
