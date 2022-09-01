//续费弹窗
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    positionId: '11',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/delivery/deliver`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/delivery/deliver',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
