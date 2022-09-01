// 不感兴趣
//"dislikeId":"5467788302","resType":"1","alg":"byplaylist_cart_ol_swing","filterIds":"[463226712,4894218883,313756468,7341131285,2829896389,89667295,87875242,2883145616]","userPlaySongs":"[518894020,1970559943,854041,4937375,1904248671,1810310463,473403170,1826139261,548145623,590252,1873855825,1874298270,534064299,536624722,536622719]"
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    dislikeId: query.dislikeId,
    resType: query.resType,
    alg: query.alg,
    filterIds: query.filterIds,
    userPlaySongs: query.userPlaySongs,
    e_r: true,
  }
  console.log('data', data.resources)
  return request(
    'POST',
    `https://interface.music.163.com/eapi/personalized/dislike`,
    data,
    {
      crypto: 'eapi',
      url: '/api/personalized/dislike',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
