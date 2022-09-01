//更新电台节目播放次数

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    isListened: query.isListened || false,
    listenLocation: query.listenLocation,
    programId: query.programId,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/dj/playrecord/upload`,
    data,
    {
      crypto: 'eapi',
      url: '/api/dj/playrecord/upload',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
