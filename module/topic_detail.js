//话题详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    actid: query.actid,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/act/detail`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/act/detail',
    },
  )
}
