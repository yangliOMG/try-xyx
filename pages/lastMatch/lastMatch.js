const app = getApp()
const _util = require('../../utils/util.js')
const _server = require('../../utils/server')

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasMatchFlag:true,
    id:'',
    statusMap:['','比赛结束','比赛删除']
  },
  onReady: function () {
    this.dialog = this.selectComponent("#dialog")
  },
  onLoad: function (options) {
    if(options.id){
        this.data.id = options.id
    }
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          hasUserInfo: true
        })
      }
    }
  },
  onShow: function () {
    setTimeout(() => {
      this.init()
    }, 2000)
  },
  init: function () {
    var openid = app.globalData.openid, id = this.data.id, promise
    if(id){
      promise = _server.getOrderById(id)
    }else{
      if (!openid) return console.log("openid空")
      promise = _server.getOrder(openid)
    }
    promise.then(res => {
      if (res.code == 0) {
        var { avatarUrl, create_time, date, end_time, explain, locaaddr, locaname,
          nickName, number, openid, status, time, timelong, groupArr, _id } = res.data
        create_time = new Date(create_time).toLocaleString()
        this.setData({
          avatarUrl, create_time, date, end_time, explain, locaaddr, locaname,
          nickName, number, openid, status, time, timelong, groupArr, _id
        })
      }else{
        this.data.hasMatchFlag = false
      }
    })
    // _server.getTest().then()
  },
  //是否登录参赛 按钮
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      hasUserInfo: true
    })
  },
  //是否参赛 按钮
  openModal: function () {
    this.dialog.showDialog()
  },
  //参赛 确认 按钮
  _confirmEvent () {
    var { _id } = this.data
    this.dialog.hideDialog()
    _server.joinOrder({ openid: app.globalData.openid, _id }).then(res => {
      if (res.code == 0) {
        wx.showToast({
          title: res.msg,
          duration: 2000
        })
        setTimeout(() => {
          this.init()
        }, 2000)
      }
    })
  },
  onShareAppMessage: function () {
    let that =this;
      return {
        title: '@所有人 进来参赛', // 转发后 所显示的title
        path: '/pages/lastMatch/lastMatch?id='+that.data._id, // 相对的路径
      }
  },
  //试一试按钮
  trynewClick: function () {
    wx.switchTab({
      url: '../create/create'
    })
  },
  //删除按钮
  deleteClick: function () {
    var { _id } = this.data
    _server.deleteOrder({ _id }).then(res => {
      if (res.code == 0) {
        wx.showToast({
          title: res.msg,
          duration: 2000
        })
        setTimeout(() => {
          this.init()
        }, 2000)
      }
    })
  },
})