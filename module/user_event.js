// 用户动态

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.uid,
    offset: query.offset || 0,
    getcounts: true,
    time: query.lasttime || -1,
    limit: query.limit || 30,
    total: false,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/event/get/${query.uid}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/event/get/${query.uid}`,
    },
  )
}
