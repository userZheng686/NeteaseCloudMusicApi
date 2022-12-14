// 关注歌手列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    limit: query.limit || 25,
    offset: query.offset || 0,
    total: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/sublist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/artist/sublist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
