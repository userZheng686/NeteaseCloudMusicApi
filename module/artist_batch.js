// 用户歌手收藏页 歌手列表 是否是歌手

module.exports = (query, request) => {
  const data = {
    '/api/artist/sublist': '{"limit":20,"offset":0}',
    '/api/discovery/recommend/artist/hasdata': '{}',
    batchOrder:
      '["/api/artist/sublist","/api/discovery/recommend/artist/hasdata","e_r"]',
    e_r: true,
  }
  return request('POST', `https://interface.music.163.com/eapi/batch`, data, {
    crypto: 'eapi',
    url: '/api/batch',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
