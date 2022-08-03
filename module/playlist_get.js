// 歌单列表(客户端)

module.exports = (query, request) => {
  const data = {
    ids: query.ids.split(',').map((item) => Number(item)),
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/playlist/list/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/playlist/list/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
