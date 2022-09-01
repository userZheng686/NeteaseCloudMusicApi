// 私人FM

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    alg: 'alg_fm_sub_art_new',
    songId: query.songId,
    time: '0',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/v1/radio/get`,
    data,
    {
      crypto: 'eapi',
      url: '/api/v1/radio/get',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
