// 获取动态评论

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    total: true,
    e_r: true,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/resource/comments/A_EV_2_${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/v1/resource/comments/A_EV_2_${query.id}`,
    },
  )
}
