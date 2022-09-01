//私信发送

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    id: query.id,
    type: query.type,
    userIds: query.userIds,
    msg: query.msg,
    time: new Date().getTime(),
    offset: 0,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/msg/private/send`,
    data,
    {
      crypto: 'eapi',
      url: '/api/msg/private/send',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
