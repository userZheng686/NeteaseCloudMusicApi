//
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/abtest/group/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/abtest/group/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
