// 匹配音乐

module.exports = (query, request) => {
  // const data = `{"songs":"[{\"titl818e8ae\":\"オレンジ (Orange)\",\"album\":\"オレンジ (Oranfbb200ge)\",\"artist\":\"7!! (Seven Oops)\",\"duration\":3e4c}-351.866667,\"persistId\":\"89887913025AB6400E7DA027EB79b9288F3E3EF90B4?%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8%20(Orange)-7!!%20(Seven%20Oops)-351.866667\"},{\"title\":\"Fish In The Pool·花屋敷\",\"album\":\"Fish In The Pool\",\"artist\":\"SakuraNohana-\",\"duration\":276,\"persistId\":\"EE18C9B53F90F8B725199C1A037DE5D896DC3DEE?Fish%20In%20The%20Pool%C2%B7%E8%8A%B1%E5%B1%8B%E6%95%B7-SakuraNohana--276\"}]","e_r":true,"header":"{\"os\":\"pc\",\"appver\":\"2.9.5.199424\",\"deviceId\":\"65AC1E9A444D4B987F4F3ABCF9A4A350F0B79D0EC85B7668FB44\",\"requestId\":\"80549340\",\"clientSign\":\"C8:5B:76:68:FB:44@@@2149E5ED7822@@@@@@b999e9bf-737d-41f9-830d-175c41b6142951d8688c8d2c4f4b9e5731804ef58520\",\"osver\":\"Microsoft-Windows-10-Professional-build-18363-64bit\",\"Nm-GCore-Status\":\"1\",\"MUSIC_U\":\"74ea7a8181f4b38decc868f65ab800913cec8844e8765c02e8a789b92cc9cfbb993166e004087dd302504d676b83b35740f9069613200f080513e4c0e9950eff5dff17da8c0ab308a89fe7c55eac81f3\"}"}`
  // const data = {
  //   songs:
  //     '[{"title":"オレンジ (Orange)","album":"オレンジ (Orange)","artist":"7!! (Seven Oops)","duration":351.866667,"persistId":"89887913025AB6400E7DA027EB9288F3E3EF90B4?%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8%20(Orange)-7!!%20(Seven%20Oops)-351.866667"},{"title":"Fish In The Pool·花屋敷","album":"Fish In The Pool","artist":"SakuraNohana-","duration":276,"persistId":"EE18C9B53F90F8B725199C1A037DE5D896DC3DEE?Fish%20In%20The%20Pool%C2%B7%E8%8A%B1%E5%B1%8B%E6%95%B7-SakuraNohana--276"}]',
  //   e_r: true,
  //   header:
  //     '{"os":"pc","appver":"2.9.5.199424","deviceId":"65AC1E9A444D4B987F4F3ABCF9A4A350F0B79D0EC85B7668FB44","requestId":"80549340","clientSign":"C8:5B:76:68:FB:44@@@2149E5ED7822@@@@@@b999e9bf-737d-41f9-830d-175c41b6142951d8688c8d2c4f4b9e5731804ef58520","osver":"Microsoft-Windows-10-Professional-build-18363-64bit","Nm-GCore-Status":"1","MUSIC_U":"74ea7a8181f4b38decc868f65ab800913cec8844e8765c02e8a789b92cc9cfbb993166e004087dd302504d676b83b35740f9069613200f080513e4c0e9950eff5dff17da8c0ab308a89fe7c55eac81f3"}',
  // }
  const data = {
    // album: '\u30AA\u30EC\u30F3\u30B8 (Orange)',
    // algorithmCode: 'shazam_v2',
    // artist: '7!! (Seven Oops)',
    decrypt: 1,
    duration: 351867,
    rawdatas:
      '[{"base64Fp":"Hiy2G35ndvi2+9Xvaw6Yn8tS6BBvkqyPrRLqOSJ1enqWbun4/W4bv4b1jEQm/W6TPvFygSKHRykZrZFYHDATaYNSqZWJMRu1f+ZD53wXspMmP6l2QISzl/Y4OVrUkT/PPDytH+mytcrdWPasPHhHG0mk8+j/Yn5tZ8QBBAVsj3ziOah8vKCpwDjA3aWdd3oowtZev2am4StFWIEQpZl+z3c6HsrY7cHJInZepPCHlfdyZ7qT46rX9O8ChWtuMB2pfpkJY/70SOJxacwBe3XYD/Ms1FnizfYvSW5S9LRGZj5/w+/yzvr3BAzgQzq89+RVtmiytzXo4CjuvbMnS4jnFsiwKp1oajicdY/7wpgp44C2YG2G5VvEaRAryHqo9qRoA27VSWneRnLif5eif0gMIQhYGNlMc9/yg98/cp601ivHNYjH/BgTxC/mEYCswFGIbWx7lF9Wd4OS9SFJ/x21OV92yaAussJX6/z6Zp18z1rTaC812hNSeQMdowus12mawVmsLt4AeDB/rOjc3uBtPJ0BFSEPCOrdVNt6wC5cFCvHG2dWLzE70KCp3m22248vrNeZcchGKsyIf9YIhYxiFKTR1utidchxqib24e8uruT2jMtPsvRxyeyYNpXI1pzE5b46rw7ZDTdGlLKizTVXFrwhb5PfHlDZdTGRVHo4MQApSc4+JQOjNH1TH9x2hpTStAJ7SkXKoEkcxYm3buS0RXxmfhRq59MpcrdBJv2UfLIZjYxyhd/Il8b4Z1LDAXfT2T0QovDktH/Ujp7eu7MaNpHCbTn3TqF7FJQpoJhpAYSnJGfUoPiEUL2N0RNwnF7n7EoP8Cji9zDZEduMhaFp7tXEe+vbl1upXMTMXNhI/ZY3KmefcH6dJqKmf4aHxsLYgxj1yBEGpbUpEG2AgPaIJLbVkYflcGlco1Dd6+Eu1nbNnmvoumPVrXslgG8hKiXErRc4ZCrxM9A0uHlQYxyf5imejRbHGwdqDOAHT9VJymfDMqFeIIyOKvlhW02rTMgyrJJnUQQAxSABJIOqVjOveu4Qb8yKkG7pJiQMiE0E8BRFlfFcUr9l2CCYOQ3Rn3ft0LO85xUUaNgltz7J+LOu53F79nNvt4OgGxoCGwdt4i0Wt2mnXrTHroI5s/edOwISTlHZfvKlx3rywmKEauiF3SbCHhbY8uTLJd6nX3hTT/MTmfZvrgqbDTUr1fIIi5fHgFw0GdUnNZCDzEUdK32ealbRGylrRwiFomb7sSHRppoyVeSgFO2ItGKGPTM0j+Vlqm8VeBibedi3oAgg8rJJ9TYaFHKw1XyEmbWu7GNMM9ZhNfdVPibu9+hH7Dnasu7DjgdMsfxecW4aRLAvN0IviIA7osgK48BfH7Xpko1i5ICPsdzVyxmImAyWQwE4easI7RmimgJu+NOMYRujxuI4KcBgR1bU6emvTkRXhuHcRaLIVnypvzmfDWCJQooycA9s9l4aDRCq9i8QdmPDl2BAxiBo2Ygj+bflSYnz2tRXHb6sSY/ubNBbntKwCF5ZAkRhr2ZfIi64VgU1TAcHa83Jtz52f1IGmczYIZUq7vUZ3vQ94gfUKUYbq6ddr5NL31oZNRrvVqGlI6hmyyuXXjj52SorN1MyhUdVgKfKFhhj/cc=","begin":175.9333335,"duration":5.0}]',
    scene: 'fileMatch',
    sessionId: '06B297D7-7542-49EC-AF40-1B71D8351503',
    // song: '\u30AA\u30EC\u30F3\u30B8 (Orange)',
  }
  return request('POST', `http://music.163.com/eapi/music/file/match`, data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/music/file/match',
    realIP: query.realIP,
  })
}
