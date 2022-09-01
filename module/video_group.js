// 视频标签/分类下的视频

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    groupId: query.groupId || '0',
    offset: query.offset || '0',
    need_preview_url: 'true',
    limit: query.limit || '48',
    total: 'true',
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/videotimeline/videogroup/otherclient/get`,
    data,
    {
      crypto: 'eapi',
      url: '/api/videotimeline/videogroup/otherclient/get',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
