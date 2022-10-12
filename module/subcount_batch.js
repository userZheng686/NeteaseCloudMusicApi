//订阅更新
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    '/api/subcount/v1': {},
    '/api/cloudvideo/v1/video/count': {},
    batchOrder: `['/api/subcount/v1','/api/cloudvideo/v1/video/count']`,
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
