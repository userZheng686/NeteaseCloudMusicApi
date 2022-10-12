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

// 歌单详情

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  /**
   * id 歌单id
   n 返回的数量
   s 收藏者
   */
  const data = {
    id: query.id,
    n: 10,
    s: 0,
    e_r: true,
    cache_key: getCacheKey({
      id: `${query.id}`,
      n: '10',
      s: '0',
      e_r: true,
    }),
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/playlist/v4/detail`,
    data,
    {
      crypto: 'eapi',
      url: '/api/playlist/v4/detail',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
