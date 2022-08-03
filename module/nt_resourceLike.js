// 点赞与取消点赞资源

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.t = query.t == 1 ? 'like' : 'unlike'
  query.type = {
    1: 'R_MV_5_', //  MV
    4: 'A_DJ_1_', //  电台
    5: 'R_VI_62_', //  视频
    6: 'A_EV_2_',
  }[query.type]
  const data = {
    threadId: query.type + query.id,
    checkToken:
      '9ca17ae2e6ffcda170e2e6ee97cb3efb9c898ac65b91928fa2d55e929e9f83d56081b498d7dc6193b2a191ee2af0feaec3b92afceeafb1d779b8abbd85c85b969b8fa6d55fa68f8db5e65391aea08aca478287ee9e',
    e_r: true,
  }
  if (query.type === 'A_EV_2_') {
    data.threadId = query.threadId
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/resource/${query.t}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: `/api/resource/${query.t}`,
    },
  )
}
