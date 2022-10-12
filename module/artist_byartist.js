//歌手演出

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    offset: query.offset,
    artistId: query.artistId,
    limit: query.limit || 20,
    total: 'true',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/concert/list/byartist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/concert/list/byartist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
