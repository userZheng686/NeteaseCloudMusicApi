// 收藏的专栏

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/topic/sublist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/topic/sublist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
