// 删除私信(单条记录)

module.exports = (query, request) => {
  const data = {
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/private/delete/single`,
    data,
    {
      crypto: 'eapi',
      url: '/api/msg/private/delete/single',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
