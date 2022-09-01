//获取歌单添加标签

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/playlist/tags`,
    data,
    {
      crypto: 'eapi',
      url: '/api/playlist/tags',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
