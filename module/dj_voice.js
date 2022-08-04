// 播客(客户端)

module.exports = (query, request) => {
  const data = {
    cursor: 'null',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/voice/homepage/block/page`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/voice/homepage/block/page',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
