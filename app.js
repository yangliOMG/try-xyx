//app.js
App({
  globalData: {
    serverUrl: 'https://yanggongcundong.natappvip.cc',    //http://192.168.20.199:9093       https://yanggongcundong.natappvip.cc
    userInfo: {},
    openid:''
  },
  onLaunch: function () {
    let _this = this
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res.code)
          wx.request({
            url: _this.globalData.serverUrl + '/user/wxMiniLogin.do',
            data: { code: res.code, },
            success: function (res) {
              let arr = (res.header["Set-Cookie"] || res.header["set-cookie"]).split('session_key')
              _this.globalData.openid = res.data.data.openid
              if (arr[1]) {
                wx.setStorageSync("session_key", arr[1])
              } else {
                console.log('没有session_key')
              }
            }
          })
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            withCredentials:true,
            lang:'zh_CN',
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = {...this.globalData.userInfo, ...res.userInfo}

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
  }
})

//app.
// App({
//   data: {
//     serverUrl: 'https://www.fuyoufayuan.com',    //http://10.9.5.136:8080       https://www.fuyoufayuan.com
//     position: [],
//     user: {}
//   },
//   onLaunch: function () {
//     let _this = this
//     // wx.showLoading({ title: '加载中...', mask: true })

//     new Promise((resolve, reject) => {
//       // 登录
//       wx.login({
//         success: res => {
//           if (res.code) {
//             console.log(res.code)
//             // wx.request({
//             //   url: this.data.serverUrl + '/login/wxMiniLogin.do',
//             //   data: { code: res.code, },
//             //   success: function (res) {
//             //     wx.hideLoading()
//             //     let arr = (res.header["Set-Cookie"] || res.header["set-cookie"]).split('JSESSIONID')
//             //     if (arr[1]) {
//             //       wx.setStorageSync("sessionid", 'JSESSIONID' + arr[1])
//             //     } else {
//             //       console.log('没有JSESSIONID')
//             //     }
//             //     resolve()
//             //   }
//             // })
//           }
//         }
//       })
//     }).then(() => {
//       // 获取用户信息
//       wx.getSetting({
//         success: res => {
//           if (res.authSetting['scope.userInfo']) {
//             wx.getUserInfo({
//               withCredentials: true,
//               lang: 'zh_CN',
//               success: res => {
//                 _this.data.user = {
//                   nick: res.userInfo.nickName,
//                   encryptedData: res.encryptedData,        //???
//                   iv: res.iv,                              //???
//                 }
//                 if (_this.userInfoReadyCallback) {
//                   _this.userInfoReadyCallback(_this.data.user)
//                 }
//               }
//             })
//           } else {
//             if (_this.loginCallback) {
//               _this.loginCallback()
//             }
//           }
//         }
//       })
//     })
//   },
// })