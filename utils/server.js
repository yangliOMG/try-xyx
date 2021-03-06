const app = getApp();

export function getImageInfo(src){
    wx.getImageInfo({src})
}

function ajaxPromise(url,dataObj, method='GET'){
    wx.showLoading({ title: '加载中...', mask: true })
    return new Promise((resolve,reject)=>{
        wx.request({
            url: app.globalData.serverUrl+url,
            data: dataObj,
            method,
            header:{'cookie':wx.getStorageSync("session_key")},
            success: function(res){
                wx.hideLoading()
                if(res.data.code===1){
                    return wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                        duration: 2000
                    })
                }
                resolve(res.data);
            }
        })
    })
}

export function saveUserInfo(encryptedData,iv){
    return ajaxPromise("/login/getWxMiniUser.do",{encryptedData,iv})
}

export function createOrder(params){
    return ajaxPromise("/match/create.do",params,'POST')
}
export function joinOrder(params){
    return ajaxPromise("/match/join.do",params,'POST')
}
export function notjoinOrder(params){
    return ajaxPromise("/match/notjoin.do",params,'POST')
}
export function deleteOrder(params){
    return ajaxPromise("/match/delete.do",params,'POST')
}
export function getOrder(openid){
    return ajaxPromise("/match/get.do",{openid})
}
export function getOrderById(id){
    return ajaxPromise("/match/getbyid.do",{id})
}
export function getNotice(){
    return ajaxPromise("/match/getNotice.do")
}
export function getTest(){
    return ajaxPromise("/match/test.do",)
}