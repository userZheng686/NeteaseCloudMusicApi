// 转发动态

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    forwards: query.forwards || '',
    id: query.id,
    eventUserId: query.eventUserId,
    e_r: true,
  }

  return request(
    'POST',
    `https://interface.music.163.com/eapi/event/forward`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      url: '/api/event/forward',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
