// 直播推荐

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 20,
    liveType: 1,
    channel: 2,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/livestream/dragonball/recommend/v1`,
    data,
    {
      crypto: 'eapi',
      url: '/api/livestream/dragonball/recommend/v1',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
