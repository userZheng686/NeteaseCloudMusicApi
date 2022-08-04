// 播客(客户端)

module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 'null',
    e_r: true,
    // blockCode: 'VOICE_HOMEPAGE_BLOCK_BANNER',
    // id: 'block_content',
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
