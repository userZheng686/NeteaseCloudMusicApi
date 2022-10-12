// 订阅电台列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
    time: query.time || 0,
    targetUserId: query.uid,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/djradio/get/subed`,
    data,
    {
      crypto: 'eapi',
      url: '/api/djradio/get/subed',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
