// TA关注的人(关注)

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.uid,
    offset: query.offset || 0,
    limit: query.limit || 30,
    order: true,
    total: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/getfollows/${query.uid}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/getfollows/${query.uid}`,
    },
  )
}
