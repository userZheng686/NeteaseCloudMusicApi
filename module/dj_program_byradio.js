module.exports = (query, request) => {
  query.cookie.os = 'pc'

  const data = {
    keyword: '',
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 20,
    radioId: query.radioId,
    asc: query.asc || false,
    updateOrder: 'true',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v6/dj/program/byradio`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/v6/dj/program/byradio',
    },
  )
}
