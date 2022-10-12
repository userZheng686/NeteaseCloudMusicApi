// 搜索

module.exports = (query, request) => {
  let type = query.type
  if (type !== '2000') {
    const data = {
      hlpretag: '<span class="s-fc2">',
      hlposttag: '</span>',
      s: query.keywords,
      type: query.type || 1, // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
      limit: query.limit || 30,
      offset: query.offset || 0,
      total: true,
      e_r: true,
    }
    return request(
      'POST',
      `https://interface.music.163.com/eapi/cloudsearch/pc`,
      data,
      {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
        url: '/api/cloudsearch/pc',
      },
    )
  } else if (type === '2000') {
    const data = {
      keyword: query.keywords,
      limit: query.limit || 30,
      offset: query.offset || 0,
      scene: 'normal',
      total: true,
      e_r: true,
    }
    return request(
      'POST',
      `https://interface.music.163.com/eapi/search/voice/get`,
      data,
      {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
        url: '/api/search/voice/get',
      },
    )
  }
}
