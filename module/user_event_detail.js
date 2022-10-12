// 用户动态详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    userId: query.uid,
    id: query.id,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/event/${query.uid}/${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/v1/event/${query.uid}/${query.id}`,
    },
  )
}
