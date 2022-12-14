// 用户详情

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/w/user/detail/${query.uid}`,
    {
      userId: query.uid,
      all: true,
      e_r: true,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/w/v1/user/detail/${query.uid}`,
    },
  )
}
