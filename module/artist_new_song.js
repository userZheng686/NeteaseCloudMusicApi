//新歌发布

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    startTimestamp: query.startTimestamp || new Date().getTime(),
    sourceType: query.sourceType || 1,
    limit: query.limit || 10,
    firstRequest: query.firstRequest || true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/sub/artist/new/works/song-mv/list/v2`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/sub/artist/new/works/song-mv/list/v2',
    },
  )
}
