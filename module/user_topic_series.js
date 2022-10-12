//用户创建的专栏
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.userId,
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 1000,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/topic/series/byuser`,
    data,
    {
      crypto: 'eapi',
      url: '/api/topic/series/byuser',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
