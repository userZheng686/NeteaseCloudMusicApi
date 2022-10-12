//话题详情 推荐话题

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 10,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/act/rcmd/list`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/act/rcmd/list',
    },
  )
}
