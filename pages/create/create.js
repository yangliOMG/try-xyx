const app = getApp()
const util = require('../../utils/util.js')
const _server = require('../../utils/server')


Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dateArr: [],
    dateArrFormat:[],
    index: 0,
    timeArr: [[], []],
    index2: [34, 3],
    end_time:0,
    endtimeFormat:'',
    mobileLocation: {
      address: '',
      name: ''
    }
  },
  onLoad: function () {
    let dateArr = [],dateArrFormat=[], time = [], hour = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5].map(i => i + '小时')
    for (let i = 0; i < 30; i++) {
      dateArr.push(util.formatTime(new Date().getTime() + 24 * 60 * 60 * 1000 * i))
      dateArrFormat.push(new Date().getTime() + 24 * 60 * 60 * 1000 * i)
    }
    for (let i = 0; i < 24; i++) {
      time.push(("" + i).padStart(2, "0") + ":00")
      time.push(("" + i).padStart(2, "0") + ":30")
    }
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          hasUserInfo: true
        })
      }
    }
    this.setData({ dateArr, dateArrFormat, timeArr: [time, hour] })
    this.timeCount()
  },
  timeCount: function(){
    var  {index2, timeArr, dateArrFormat, index} = this.data
    var end_time = new Date(util.formatTime(dateArrFormat[index], 2)+" "+timeArr[0][index2[0]]).getTime() + parseFloat(timeArr[1][index2[1]])*60*60*1000
    var endtimeFormat = (new Date(end_time).getHours()+'').padStart(2,'0')+":"+(new Date(end_time).getMinutes()+'').padStart(2,'0')
    this.setData({ end_time, endtimeFormat })
  },
  bindPickerChange: function (e) {
    this.setData({ index: e.detail.value })
  },
  bindMultiPickerChange: function (e) {
    this.setData({ index2:e.detail.value })
    this.timeCount()
  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        let mobileLocation = { address: res.address, name: res.name}
        that.setData({ mobileLocation })
      },
      fail: function (err) {
        if(err.errMsg.includes("deny")||err.errMsg.includes("denied")){
          wx.showModal({
            title: '用户未授权',
            content: '如需正常使用小程序功能，【我的】->【设置】->勾选位置信息',
            showCancel: false
          })
        }
      }
    });
  },
  formSubmit: function (e) {
    var obj = e.detail.value, data = this.data, 
      {nickName, avatarUrl} = app.globalData.userInfo
    obj.date = data.dateArr[data.index]
    obj.time = data.timeArr[0][data.index2[0]] 
    obj.timelong = data.timeArr[1][data.index2[1]]
    obj.end_time = data.end_time
    obj.locaname = data.mobileLocation.name
    obj.locaaddr = data.mobileLocation.address
    obj.nickName = nickName
    obj.avatarUrl = avatarUrl
    obj.openid = app.globalData.openid
    if(!obj.explain){
      return wx.showToast({
        title: '请填写比赛说明',
        icon: 'none',
        duration: 2000
      })
    }
    if(obj.locaname==""){
      return wx.showToast({
        title: '请选择地址',
        icon: 'none',
        duration: 2000
      })
    }
    if(!obj.openid){
      return wx.showToast({
        title: 'openid为空',
        icon: 'none',
        duration: 2000
      })
    }
    _server.createOrder(obj).then(res=>{
      if(res.code==0){
        wx.showToast({
          title: '发起成功',
          duration: 2000
        })
        wx.switchTab({
          url: '../lastMatch/lastMatch'
        })
      }
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      hasUserInfo: true
    })
  }
})