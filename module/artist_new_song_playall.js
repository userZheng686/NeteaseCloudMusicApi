//新歌发布（播放全部）

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/sub/artist/new/works/song/playall`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/sub/artist/new/works/song/playall',
    },
  )
}
