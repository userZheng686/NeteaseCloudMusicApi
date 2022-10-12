// 私信内容

module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    nickname: query.nickname,
    offset: query.offset || 0,
    limit: query.limit || 30,
    time: query.before || 0,
    total: 'true',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/private/history`,
    data,
    {
      crypto: 'eapi',
      url: '/api/msg/private/history',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
