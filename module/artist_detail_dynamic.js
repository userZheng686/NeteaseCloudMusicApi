//歌手动态消息 是否关注 演出
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    top: '50',
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/detail/dynamic`,
    data,
    {
      crypto: 'eapi',
      url: '/api/artist/detail/dynamic',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
