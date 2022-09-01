// 收藏视频列表

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    limit: query.limit || 25,
    offset: query.offset || 0,
    total: 'true',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/cloudvideo/allvideo/sublist`,
    data,
    {
      crypto: 'eapi',
      url: '/api/cloudvideo/allvideo/sublist',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
