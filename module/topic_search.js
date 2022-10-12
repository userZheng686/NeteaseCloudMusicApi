//话题搜索

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    s: query.search || '',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/search/topic/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/v1/search/topic/get',
    },
  )
}
