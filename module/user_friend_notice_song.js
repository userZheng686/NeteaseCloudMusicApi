//歌曲通知

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    time: query.time || new Date().getTime(),
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/friend/new/song/notice/web/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/friend/new/song/notice/web/get`,
    },
  )
}
