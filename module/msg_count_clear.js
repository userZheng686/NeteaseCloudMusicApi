// 清空全部消息提醒

module.exports = (query, request) => {
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/count/clear`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/msg/count/clear',
    },
  )
}
