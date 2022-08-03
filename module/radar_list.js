// 雷达歌单

module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/eapi/pc/customize/block/page`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/pc/customize/block/page',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
