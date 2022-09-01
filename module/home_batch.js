// 首页 批量请求

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    '/api/mlivestream/entrance/audio': '{"positionType":"home","limit":6}',
    '/api/personalized/djradio': '{"limit":6}',
    '/api/personalized/mv': '{"limit":4}',
    '/api/personalized/newsong': '{"limit":12,"areaId":0}',
    '/api/personalized/playlist': '{"limit":9}',
    '/api/personalized/privatecontent': '{"limit":3}',
    '/api/personalized/taste': '{}',
    '/api/recommend/live/get': '{"limit":6,"filterLiveIds":""}',
    '/api/v2/banner/get': '{"clientType":"pc"}',
    e_r: true,
    batchOrder:
      '["/api/v2/banner/get","/api/personalized/playlist","/api/personalized/privatecontent","/api/personalized/newsong","/api/personalized/mv","/api/personalized/djradio","/api/recommend/live/get","/api/mlivestream/entrance/audio","/api/personalized/taste","e_r"]',
  }
  return request('POST', `https://interface.music.163.com/eapi/batch`, data, {
    crypto: 'eapi',
    proxy: query.proxy,
    url: '/api/batch',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
