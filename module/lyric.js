// 歌词

module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    id: query.id,
    tv: -1,
    lv: -1,
    yv: 1,
    rv: -1,
    kv: -1,
    cp: true,
    showRole: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/song/lyric`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/song/lyric',
    },
  )
}
