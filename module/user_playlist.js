// 用户歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    uid: query.uid,
    limit: query.limit || 30,
    offset: query.offset || 0,
    includeVideo: true,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/api/user/playlist/`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      url: '/api/user/playlist/',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
