const app = getApp()
const _util = require('../../utils/util.js')
const _server = require('../../utils/server')

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasMatchFlag:true,
    id:'',
    statusMap:['','比赛结束','比赛删除'],
    notice:[],
    ntidx:0
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
    _server.getNotice().then(res => {
      if (res.code == 0 && res.data.length>0) {
        setInterval(() => {
          var ntidx = this.data.ntidx == res.data.length - 1 ? 0:this.data.ntidx+1
          this.setData({ ntidx })
        }, 2000)
        this.setData({ notice: res.data })
      }
    })
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
        create_time = _util.formatTime(create_time,3)
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
    var { _id } = this.data, {avatarUrl, nickName} = app.globalData.userInfo
    this.dialog.hideDialog()
    _server.joinOrder({ openid: app.globalData.openid, _id, avatarUrl, nickName }).then(res => {
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
  //不参赛  按钮
  _cancelEvent () {
    var { date } = this.data, {avatarUrl, nickName} = app.globalData.userInfo
    this.dialog.hideDialog()
    _server.notjoinOrder({ date, avatarUrl, nickName }).then()
  },
  onShareAppMessage: function () {
    let that =this;
      return {
        title: '@所有人 进来参赛，不来的都是臭弟弟', // 转发后 所显示的title
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