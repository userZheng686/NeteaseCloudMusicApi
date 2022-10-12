// 可能感兴趣

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/eapi/api/search/bestmatch/get`,
    {
      keyword: query.keyword,
      scene: 'normal',
      e_r: true,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/search/bestmatch/get',
      realIP: query.realIP,
    },
  )
}
