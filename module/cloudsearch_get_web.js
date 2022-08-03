// 私人雷达歌单

module.exports = (query, request) => {
  const data = {}
  Object.assign(data, query)
  return request(
    'POST',
    `https://music.163.com/weapi/cloudsearch/get/web`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
