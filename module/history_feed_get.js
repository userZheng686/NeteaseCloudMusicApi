// 动态历史记录

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/eapi/event/pc/history/feed/get`,
    {
      cursor: query.cursor || '-1',
      e_r: true,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/event/pc/history/feed/get`,
    },
  )
}
