// 播客 批量请求 播客分类下的二级分类

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    categoryId: query.categoryId,
    limit: query.limit,
    offset: query.offset,
    total: query.total,
    e_r: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/dj/radio/hot/secondcategory/get`,
    data,
    {
      crypto: 'eapi',
      proxy: query.proxy,
      url: '/api/dj/radio/hot/secondcategory/get',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
