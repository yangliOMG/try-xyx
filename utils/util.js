/**
 * 获取url参数 
 */
export function getQueryString (url,name){
  var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
  var r = decodeURIComponent(url).substr(1).match(reg) 
  if (r != null) {
      return r[2]
  }
  return null;
}

const formatTime = (date, mode) => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const week = date.getDay()
  const map = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
  if(mode==2){
    return `${year}-${month}-${day}`
  }else if(mode==3){
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
  return `${month}月${day}日  ${map[week]}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
