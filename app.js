//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  // 用来改变主页事件的状态
  changeEvent: function(e,t){
    var list = t.data.listEvent
    if (list[e.currentTarget.dataset.index].hasdone === false) {
      var i = list.length - 1
      var tmp = list[e.currentTarget.dataset.index]
      list[e.currentTarget.dataset.index].hasdone = !list[e.currentTarget.dataset.index].hasdone
      if(e.currentTarget.dataset.index !== list.length - 1)
      if (list[e.currentTarget.dataset.index + 1].hasdone === false ) {
        for (; i >= 0 && list[i].hasdone === true; i--) {}
        for (var j = e.currentTarget.dataset.index; j < i; j++) {
          list[j] = list[j + 1]
          list[j].index = list[j].index - 1
        }
        list[i] = tmp
        list[i].index = i
      }
    }
    else{
      var i = e.currentTarget.dataset.index
      var tmp = list[e.currentTarget.dataset.index]
      console.log (tmp)
      list[e.currentTarget.dataset.index].hasdone = !list[e.currentTarget.dataset.index].hasdone
      for(var j = e.currentTarget.dataset.index;j>0;j--){
        list[j] = list[j - 1]
          list[j].index = list[j].index + 1
      }
      list[0] =tmp;
      list[0].index = 0 
    }
    console.log(list)
    t.setData({
      listEvent: list
    })
  }
})