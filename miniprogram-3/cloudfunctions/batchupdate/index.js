// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({

})
const db = cloud.database()
const _ =db.command


// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "oVP7V5R3JRTR0BzT7yBr0pQTlwDk"
    }).update({
      data: {
        price: "189元"
      }
    })
  } catch (error) {
    console.error(error)
  }
}