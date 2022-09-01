// 资源配置

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
    resourceId: query.resourceId,
    resourcePosition: 'playlist',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/resource-exposure/config`,
    data,
    {
      crypto: 'eapi',
      url: '/api/resource-exposure/config',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
