//用户创建的播客
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.userId,
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 20,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/get/byuser/v1`,
    data,
    {
      crypto: 'eapi',
      url: '/api/djradio/get/byuser/v1',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
