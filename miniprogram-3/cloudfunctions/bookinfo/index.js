var rq = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {
   // var res = rq('https://api.douban.com/v2/book/isbin/' + event.isbn+'?apikey=0b2bdeda43b5688921839c8ecb20399b').then(html => {
   //    return html
   // }).catch(err => { console.log(err) })

   var res = rq('https://api.douban.com/v2/book/isbn/'+event.isbn+'?apikey=0b2bdeda43b5688921839c8ecb20399b').then(html => {
      return html
   }).catch(err => { console.log(err) })
   return res
}