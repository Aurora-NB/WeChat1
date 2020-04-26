// pages/thefirstpage/demo01.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listEvent: [{
      dimension: '事件1',
      index: 0,
      hasdone: false,
      time: "2000-08-11"
    }, {
      dimension: "事件2",
      index: 1,
      hasdone: false,
      time: "2000-08-11"
    }, {
      dimension: "事件3",
      index: 2,
      hasdone: false,
      time: "2000-08-11"
    }, {
      dimension: "事件4",
      index: 3,
      hasdone: false,
      time: "2000-08-11"
    }, {
      dimension: "事件5",
      index: 4,
      hasdone: false,
      time: "2000-08-11"
    }]
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

  circleTap: function (e) {
    app.changeEvent(e,this)
  }
})