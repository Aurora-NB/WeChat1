// pages/newevent/newevent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listEvent:[{
      dimension: '1321632',
      index: 0,
      hasdone: false,
      time: "",
      tag: [''],
      detail: '',
    }],
    tags:[''],
    imgPath:"../../image/download2.png"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index);
    var listEvent=this.data.listEvent;
    listEvent[0].index=options.index-0+1;
    this.setData(
      {
        listEvent:listEvent
      }
    )
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
  formSubmit: function (e) {
    wx.reLaunch({
     url: '../theFirstPage/theFirstPage',
   })
  },
  whenblur(e){
    var listEvent=this.data.listEvent;
    listEvent[0].dimension=e.detail.value;
    this.setData({
      listEvent:listEvent
    });

  },
  biaoqian(e){
    var tags=this.data.tags;
    console.log(tags.length); 
    if(tags.length!=3)
    tags[tags.length]='';
    this.setData({
      tags:tags
    })
  },
  photoload(e){
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album'],
      success: function (res) {
        //res.tempFilePaths 返回图片本地文件路径列表
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          imgPath: tempFilePaths[0]
        })

      }
    });
  }
})