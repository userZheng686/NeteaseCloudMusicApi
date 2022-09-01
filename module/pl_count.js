//通知（收到了多少条消息 包括私信 通知 评论）
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/eapi/pl/count`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/pl/count',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
