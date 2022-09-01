// 获取客户端歌曲下载链接

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    level: 'lossless',
    e_r: true,
    // br: parseInt(query.br || 999000),
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/song/enhance/download/url/v1`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/song/enhance/download/url/v1',
    },
  )
}
