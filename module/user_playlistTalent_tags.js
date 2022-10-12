// 音乐达人标签

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/playlistTalent/tags`,
    {
      offset: query.offset || 0,
      total: true,
      limit: query.limit || 50,
      e_r: true,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/playlistTalent/tags`,
    },
  )
}
