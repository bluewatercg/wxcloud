const db = wx.cloud.database();
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
    db.collection('mybook').doc(options.id).get({
      success:res=>{
        console.log(res.data)
        this.setData({
          book:res.data,
          id:options.id
        })
      },
      fail:err=>{
        console.error(err)
      }
    })
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
  update:function(event)
  {
    console.log(this.data.id)
    db.collection('mybook').doc(this.data.id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
      title:"局部测试2"
      },
      success: function(res) {
        console.log(res)
      },
      success: function(res) {
        console.log(res)
      }
    })
  },
  delete:function(event)
  {
    db.collection('mybook').doc(this.data.id).remove({
      success: function(res) {
        console.log(res)
      }
    })
 
  }
})