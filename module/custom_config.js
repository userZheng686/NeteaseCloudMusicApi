//客户端设置
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    clientType: 'pc',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/appcustomconfig/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/appcustomconfig/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
