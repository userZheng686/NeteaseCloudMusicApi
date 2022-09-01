//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    scenes: '["PC_FRIEND"]',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/listen/together/emoticon/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/listen/together/emoticon/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
