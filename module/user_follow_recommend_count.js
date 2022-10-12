//添加关注

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
    checkToken:
      '9ca17ae2e6ffcda170e2e6ee93f27d8fb38dd4d56df6a88bb3c54e839e9e82d149b5adff8feb6a9490a092b52af0feaec3b92af18f8aa9c57e9c8e96b8c15f879a8fb7d15b898a9d8dee7bfba8bed5c280ad90ee9e',
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/follow/recommend/count`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/follow/recommend/count`,
    },
  )
}
