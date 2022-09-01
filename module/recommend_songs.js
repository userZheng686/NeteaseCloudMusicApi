// 每日推荐歌曲

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: '20',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/discovery/recommend/songs`,
    data,
    {
      crypto: 'eapi',
      url: '/api/v1/discovery/recommend/songs',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
