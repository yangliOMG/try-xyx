//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.dialog = this.selectComponent("#dialog"); 
  },
  showDialog() {
      this.dialog.showDialog();
  },
  //取消事件 
  _cancelEvent() {
      console.log('你点击了取消');
      this.dialog.hideDialog();
  }, 
  //确认事件 
  _confirmEvent() {
      console.log('你点击了确定');
      this.dialog.hideDialog();
  },
  
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
