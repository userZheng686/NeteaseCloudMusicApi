// 搜索

module.exports = (query, request) => {
  let data = {
    '/api/search/suggest/keyword/get': JSON.stringify({
      keyword: query.keyword,
    }),
    '/api/search/suggest/web': JSON.stringify({
      s: query.keyword,
      limit: query.limit || 6,
    }),
    batchOrder:
      '["/api/search/suggest/web","/api/search/suggest/keyword/get","e_r"]',
    e_r: true,
  }

  return request('POST', `https://interface.music.163.com/eapi/batch`, data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/batch',
    realIP: query.realIP,
  })
}
