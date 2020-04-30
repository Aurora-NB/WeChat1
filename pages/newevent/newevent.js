// pages/newevent/newevent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listEvent: {
      dimension: '',
      index: 0,
      hasdone: false,
      time: "",
      tag: ['', '', ''],
      detail: '',
      header: ''
    },
    tags: [],
    imgPath: "../../image/download1.png",
    tagsindex: 0,
    baioqianvalue: '',
    tapexist: [false, false, false],
    tagscolor: ['rgb(39,106,132)', 'rgb(55,131,161)', 'rgb(119,119,119)', 'rgb(34,167,242)', 'rgb(0,178,106)'],
    tagsmirrorcolor: [],
    colorindex: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index);
    var listEvent = this.data.listEvent;
    listEvent.index = options.index - 0 + 1;
    this.setData({
      listEvent: listEvent,
      baioqianvalue: ''
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
  // 页面数据提交的函数
  formSubmit: function (e) {
    console.log(e);
    var n = 1;
    if (this.data.listEvent.dimension === '' || this.data.listEvent.header === '') {
      n = 0;
    }
    if (n === 1) {
      wx.showToast({
        icon: 'none',
        title: '提交成功',
        duration: 2000
      });
      var tags0 = this.data.tags[0]
      var tags1 = this.data.tags[1]
      var tags2 = this.data.tags[2]
      var index = this.data.listEvent.index - 0
      var dimension = this.data.listEvent.dimension
      var header = this.data.listEvent.header
      var imgPath = this.data.listEvent.imgPath
      setTimeout(function () {
        //要延时执行的代码
        wx.reLaunch({
          url: '../theFirstPage/theFirstPage?tags0=' + tags0 + '&tags1=' + tags1 + '&tags2=' + tags2 + '&index=' + index + '&dimension=' + dimension + '&header=' + header + '&imgPath=' + imgPath,
        })
      }, 500)
    } else {
      wx.showToast({
        icon: 'none',
        title: '未添加标题或事件请重新添加',
        duration: 2000
      });
    }
  },
  // 当输入事件的事件的光标消失时的事件
  whenblur(e) {
    var listEvent = this.data.listEvent
    listEvent.dimension = e.detail.value
    this.setData({
      listEvent: listEvent
    });

  },
  //标签光标消失的事件
  biaoqian(e) {
    console.log(e)
    var tags = this.data.tags
    var tagscolor = this.data.tagscolor
    tagscolor.sort(function () {
      return Math.random() - 0.5;
    });
    if (tags.length < 3) {
      tags.push(e.detail.value);
      this.setData({
        tags: tags,
        baioqianvalue: '',
        tagscolor: tagscolor
      })
    }
  },
  //图片简单的上传操作
  photoload(e) {
    var that = this
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
  },
  //输入得到标签的样式
  biaoqianblur(e) {
    var tags = this.data.tags
    var value = e.detail.value
    tags[e.target.dataset.index] = value;
    this.setData({
      tags: tags
    });
  },
  headerblur(e) {
    var listEvent = this.data.listEvent;
    listEvent.header = e.detail.value;
    this.setData({
      listEvent: listEvent
    })
  },
  // 当标签提交的样式
  biaoqianconfim(e) {
    console.log(e)
    var tags = this.data.tags
    var tagscolor = this.data.tagscolor
    var tagsmirrorcolor = this.data.tagsmirrorcolor
    tagscolor.sort(function () {
      return Math.random() - 0.5;
    });
    if (tags.length < 3) {
      tagsmirrorcolor.push(tagscolor[tags.length])
      tags.push(e.detail.value)
      this.setData({
        tags: tags,
        baioqianvalue: '',
        tagscolor: tagscolor,
        tagsmirrorcolor: tagsmirrorcolor
      })
    }

  },
  // 删除标签的函数
  deletetap(e) {
    console.log(e)
    var tags = this.data.tags
    var tagsmirrorcolor = this.data.tagsmirrorcolor
    tagsmirrorcolor.splice(e.target.dataset.index, 1)
    tags.splice(e.target.dataset.index, 1)
    this.setData({
      tags: tags,
      tagsmirrorcolor: tagsmirrorcolor
    })
  }
})