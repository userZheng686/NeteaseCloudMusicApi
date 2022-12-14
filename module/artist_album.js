// 歌手专辑列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    offset: query.offset || 0,
    total: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/albums/${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/artist/albums/${query.id}`,
    },
  )
}
