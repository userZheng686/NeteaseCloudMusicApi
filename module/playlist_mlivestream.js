// 直播

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  /**
   * id 歌单id
   n 返回的数量
   s 收藏者
   */
  const data = {
    params: '[{"songId":41416576,"artistIds":[1002089]}]',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/mlivestream/entrance/playlist/get`,
    data,
    {
      crypto: 'eapi',
      url: '/api/mlivestream/entrance/playlist/get',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
