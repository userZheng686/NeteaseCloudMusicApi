/**
  用户推荐
 * type为1的时候 就是dj用户 
 * type为2的时候 就是明星用户
   type为4的时候 就是网易音乐人
 */

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    e_r: true,
    offset: query.offset || 0,
    total: true,
    limit: query.limit || 60,
    type: query.type || 2,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/user/recommend/celebrities`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/user/recommend/celebrities`,
    },
  )
}
