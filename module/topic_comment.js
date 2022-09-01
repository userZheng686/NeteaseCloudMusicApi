// 专栏评论

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    rid: 'A_TO_6_' + query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
    beforeTime: query.before || 0,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/cloudvideo/allvideo/sublist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/cloudvideo/allvideo/sublist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
