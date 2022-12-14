// 歌单详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  /**
   * id 歌单id
   n 返回的数量
   s 收藏者
   */
  const data = {
    id: query.id,
    n: 50,
    s: query.s || 8,
    t: -1,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v6/playlist/detail`,
    data,
    {
      crypto: 'eapi',
      url: '/api/v6/playlist/detail',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
