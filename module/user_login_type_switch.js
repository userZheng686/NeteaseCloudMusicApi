//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/w/user/login/type/switch`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/w/user/login/type/switch',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
