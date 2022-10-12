//话题飙升榜

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    soaringlimit: query.limit || 10,
    //1 24小时 7 一周
    time: query.time || 1,
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 10,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/act/soaring`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/act/soaring',
    },
  )
}
