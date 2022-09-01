// 播客 批量请求 播客分类和分类下的列表数据

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    '/api/djradio/hot': `${query.hot}`,
    '/api/dj/radio/category/second/get': `${query.second}`,
    batchOrder:
      '["/api/djradio/hot","/api/dj/radio/category/second/get","e_r"]',
    e_r: true,
  }
  return request('POST', `https://interface.music.163.com/eapi/batch`, data, {
    crypto: 'eapi',
    proxy: query.proxy,
    url: '/api/batch',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
