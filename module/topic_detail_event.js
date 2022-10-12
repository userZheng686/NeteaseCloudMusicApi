//话题动态

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    actid: query.actid,
    total: true,
    limit: query.limit || 20,
    lasttime: query.lasttime || -1,
    pagesize: query.pagesize || 20,
    getcounts: true,
    useoffset: false,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/act/event`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/act/event',
    },
  )
}
