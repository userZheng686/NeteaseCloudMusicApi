// 播客客户端FM

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    sceneCode: 'SCENE_FM',
    sceneId: query.sceneId,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/content/scene/fm/play/list`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/content/scene/fm/play/list',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
