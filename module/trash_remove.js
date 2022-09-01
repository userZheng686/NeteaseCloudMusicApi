//垃圾桶列表还原

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    songIds: query.songIds,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/radio/trash/del/batch`,
    data,
    {
      crypto: 'eapi',
      url: '/api/radio/trash/del/batch',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
