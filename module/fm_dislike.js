// 不敢兴趣
//'[{"resourceId":1493976323,"resourceType":4,"targetUrl":"","encId":"1493976323"}]'
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    page: 'userfm',
    resources: query.resources,
    scene: '',
    e_r: true,
  }
  console.log('data', data.resources)
  return request(
    'POST',
    `https://interface.music.163.com/eapi/personalized/dislike/reason`,
    data,
    {
      crypto: 'eapi',
      url: '/api/personalized/dislike/reason',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
