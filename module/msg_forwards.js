// @我

module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    time: query.time || -1,
    total: query.total || true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/forwards/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/forwards/get',
    },
  )
}
