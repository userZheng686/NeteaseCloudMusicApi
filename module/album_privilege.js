// 专辑歌曲

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  /**
   * id 歌单id
   n 返回的数量
   s 收藏者
   */
  const data = {
    id: query.id,
    offset: query.offset,
    total: true,
    limit: query.limit || 100,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/album/privilege`,
    data,
    {
      crypto: 'eapi',
      url: '/api/album/privilege',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
