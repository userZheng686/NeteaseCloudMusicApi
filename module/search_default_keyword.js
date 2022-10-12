//默认搜索关键词
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/search/default/keyword/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/search/default/keyword/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
