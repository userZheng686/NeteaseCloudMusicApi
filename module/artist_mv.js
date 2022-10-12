// 歌手相关MV

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    artistId: query.id,
    limit: query.limit,
    offset: query.offset,
    total: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/mvs`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/artist/mvs',
      realIP: query.realIP,
    },
  )
}
