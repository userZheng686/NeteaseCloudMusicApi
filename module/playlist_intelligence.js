// 更新播放量

module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    playlistId: query.playlistId,
    songId: query.songId,
    type: 'fromPlayAll',
    startMusicId: query.startMusicId,
    count: query.count,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/playmode/intelligence/list`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/playmode/intelligence/list',
    },
  )
}
