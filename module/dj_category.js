// 播客分类(客户端)

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: 'frgmt_radio_category',
    e_r: true,
    // blockCode: 'VOICE_HOMEPAGE_BLOCK_BANNER',
    // id: 'block_content',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/category/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/djradio/category/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
