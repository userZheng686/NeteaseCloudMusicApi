// 歌手介绍

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    offset: query.offset,
    total: true,
    limit: query.limit || 10,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/introduction`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/artist/introduction',
    },
  )
}
