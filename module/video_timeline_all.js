// 全部视频列表

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
  console.log('data', data)
  //   /api/videotimeline/otherclient/get
  return request(
    'POST',
    `https://interface.music.163.com/eapi/videotimeline/otherclient/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      url: '/api/videotimeline/otherclient/get',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
