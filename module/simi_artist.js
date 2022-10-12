// 相似歌手
const config = require('../util/config.json')
module.exports = (query, request) => {
  const data = {
    artistid: query.id,
    username: query.username,
    offset: query.offset,
    total: 'true',
    limit: query.limit || 20,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/discovery/simiArtist`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/discovery/simiArtist',
    },
  )
}
