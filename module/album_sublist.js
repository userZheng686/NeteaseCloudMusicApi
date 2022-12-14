// 已收藏专辑列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    limit: query.limit || 25,
    offset: query.offset || 0,
    total: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/album/sublist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/album/sublist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
