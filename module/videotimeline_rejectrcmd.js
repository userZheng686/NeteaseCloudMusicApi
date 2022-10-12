// 减少视频推荐

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    type: query.type || 1,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/videotimeline/rejectrcmd`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/videotimeline/rejectrcmd',
    },
  )
}
