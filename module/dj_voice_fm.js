// 播客(客户端)(FM)

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    blockCode: 'VOICE_HOMEPAGE_BLOCK_SCENE_FM',
    id: 'block_content',
    e_r: true,
    // blockCode: 'VOICE_HOMEPAGE_BLOCK_BANNER',
    // id: 'block_content',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/voice/homepage/block/content`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/voice/homepage/block/content',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
