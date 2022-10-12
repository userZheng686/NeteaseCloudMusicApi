// 独家放送列表

module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 60,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v2/privatecontent/list`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/v2/privatecontent/list',
    },
  )
}
