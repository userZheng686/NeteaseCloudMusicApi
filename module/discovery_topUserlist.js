// 用户周榜

// type 1 明星
// type 2 音乐达人
// type 3 DJ
// type 6 网易音乐人

module.exports = (query, request) => {
  return request(
    'POST',
    `https://interface.music.163.com/eapi/discovery/topUserList`,
    {
      type: query.type || 1,
      offset: query.offset || 0,
      total: true,
      limit: query.limit || 100,
      cursor: query.cursor || '-1',
      e_r: true,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/discovery/topUserList`,
    },
  )
}
