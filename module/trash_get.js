//垃圾桶列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    pagesize: '100',
    from: 1,
    to: 1,
    offset: query.offset || 0,
    total: true,
    limit: 100,
    currsize: 1,
    addTime: query.addTime,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v3/radio/trash/get`,
    data,
    {
      crypto: 'eapi',
      url: '/api/v3/radio/trash/get',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
