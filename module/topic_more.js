// 专栏 往期回顾

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    seriesId: query.seriesId,
    limit: query.limit || 6,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/topic/more`,
    data,
    {
      crypto: 'eapi',
      url: '/api/topic/more',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
