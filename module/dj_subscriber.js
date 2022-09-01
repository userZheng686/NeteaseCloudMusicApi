// 电台详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    offset: query.offset,
    total: 'false',
    limit: query.limit,
    time: query.time,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/subscriber`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      url: '/api/djradio/subscriber',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
