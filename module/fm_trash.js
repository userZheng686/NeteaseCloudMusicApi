// 垃圾桶
//alg_fm_sdm_v1 alg_fm_sdm_v3_sub 推荐重复
//alg_fm_red_i2i 不敢兴趣 屏蔽歌手
//alg_fm_sub_profile 屏蔽歌手
//alg_fm_rt_bysong 不敢兴趣
// 'alg_fm_sdm_v1' 'alg_fm_sub_profile' 'alg_fm_red_i2i' 'alg_fm_rt_skip_end' 'alg_fm_sdm_v3_sub' 'alg_fm_rt_bysong
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    songId: query.id,
    alg: query.alg,
    time: query.time || 0,
    e_r: true,
  }
  console.log('data', data.songId)
  return request(
    'POST',
    `https://interface.music.163.com/eapi/radio/trash/add`,
    data,
    {
      crypto: 'eapi',
      url: '/api/radio/trash/add',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
