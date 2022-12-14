// 歌单评论

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
    total: true,
    e_r: true,
    beforeTime: query.before || 0,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/resource/comments/A_PL_0_${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/v1/resource/comments/A_PL_0_${query.id}`,
    },
  )
}
