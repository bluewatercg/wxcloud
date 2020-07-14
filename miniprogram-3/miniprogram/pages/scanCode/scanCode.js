// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
    /**
   * 通过ScanCode 读取条码
   */
  scanCode: function (event) {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ["barCode"],
      success: res => {
        console.log(res.result)
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: res => {
            var bookString = res.result;
            // console.log(JSON.parse(bookString));
            // 1. 获取数据库引用
            const db = wx.cloud.database();
            // 2. 构造查询语句
            // collection 方法获取一个集合的引用
            // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
            // get 方法会触发网络请求，往数据库取数据
            const book = db.collection('mybook')
            db.collection('mybook').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookString)
            })
              .then(res => {
                console.log(res)
              })
          },
          fail: err => {
            console.log(err);
          },
          complete: () => { }
        })
      },
      fail: err => {

        console.log(err);
      }
    })
  }
})