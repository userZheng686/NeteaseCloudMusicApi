//歌手详情
// module.exports = (query, request) => {
//   return request(
//     'POST',
//     `https://music.163.com/api/artist/head/info/get`,
//     {
//       id: query.id,
//     },
//     {
//       crypto: 'weapi',
//       cookie: query.cookie,
//       proxy: query.proxy,
//       realIP: query.realIP,
//     },
//   )
// }
const crypto = require('crypto')
const qs = require('querystring')
/**
 * @param {Record<string, any>} params
 */
function getCacheKey(params) {
  const keys = Object.keys(params).sort(
    (a, b) => a.codePointAt(0) - b.codePointAt(0),
  )
  /** @type {Record<string, string>} */
  const record = {}
  for (const k of keys) {
    record[k] = params[k]
  }
  const text = qs.stringify(record)
  const cipher = crypto.createCipheriv('aes-128-ecb', ')(13daqP@ssw0rd~', null)
  const key = cipher.update(text, 'utf8', 'base64') + cipher.final('base64')
  return key
}

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    top: '50',
    id: query.id,
    e_r: true,
    cache_key: getCacheKey({
      top: '50',
      id: `${query.id}`,
      e_r: true,
    }),
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/v3/detail`,
    data,
    {
      crypto: 'eapi',
      url: '/api/artist/v3/detail',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
