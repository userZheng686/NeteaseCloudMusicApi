//下载歌曲（客户端）

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    songId: query.songId,
    download: true,
    deviceId: '65AC1E9A444D4B987F4F3ABCF9A4A350F0B79D0EC85B7668FB44',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/song/download/limit`,
    data,
    {
      crypto: 'eapi',
      url: '/api/song/download/limit',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
