// 获取pc缓存

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    clienttype: 3,
    domain: 'music.163.com',
    env: 2,
  }
  console.log('data', data)
  //   /api/videotimeline/otherclient/get
  return request(
    'POST',
    `https://interface.music.163.com/eapi/pccache/patch/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      url: '/api/pccache/patch/get',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
