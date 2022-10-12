//微博 认识的人

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    starNum: query.starNum || 0,
    snsNum: query.snsNum || 8,
    random: false,
    filterUserIds: query.filterUserIds || '',

    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/follow/recommend`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/follow/recommend`,
    },
  )
}
