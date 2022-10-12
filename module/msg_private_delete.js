// 删除私信

module.exports = (query, request) => {
  const data = {
    userId: query.userId,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/private/delete`,
    data,
    {
      crypto: 'eapi',
      url: '/api/msg/private/delete',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
