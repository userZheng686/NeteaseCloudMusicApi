module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    top: '50',
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/privilege`,
    data,
    {
      crypto: 'eapi',
      url: '/api/artist/privilege',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
