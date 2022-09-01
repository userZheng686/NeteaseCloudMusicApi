module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    songId: query.songId,
    count: 1,
    soundQuality: 128,
    download: false,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/resniche/position/pc/play/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/resniche/position/pc/play/get',
    },
  )
}
