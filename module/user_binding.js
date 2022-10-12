module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 10,
    userId: query.uid,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/w/v1/user/bindings/${query.uid}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/w/v1/user/bindings/${query.uid}`,
    },
  )
}
