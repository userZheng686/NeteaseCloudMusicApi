// 删除通知

module.exports = (query, request) => {
  const data = {
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/notice/delete`,
    data,
    {
      crypto: 'eapi',
      url: '/api/msg/notice/delete',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
