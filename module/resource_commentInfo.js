// 资源评论

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  /**
   * id 歌单id
   n 返回的数量
   s 收藏者
   */
  const data = {
    resourceType: query.type,
    resourceIds: query.resourceIds,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/resource/commentInfo/list`,
    data,
    {
      crypto: 'eapi',
      url: '/api/resource/commentInfo/list',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
