//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/eapi/usertool/sound/mobile/whalecloudnewadd`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/usertool/sound/mobile/whalecloudnewadd',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
