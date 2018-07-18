import _json from './sxxk.json'

Page({
    data: {
        arr: {},
        s:{
            "一般":1,"火":1,"格斗":1,"水":1,"飞行":1,"草":1,"毒":1,"电":1,"地面":1,
            "超能":1,"岩石":1,"冰":1,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":1
        },
        def:{},
        btnList:[],
        expand:false
    },
    onLoad: function () {
        this.setData({arr:_json,def:this.data.s})
    },
    expandBlock: function(){
        this.setData({expand:!this.data.expand})
    },
    countDef: function(list){
        const def = Object.assign({},this.data.s) , arr = this.data.arr
        for (let i in arr) {
            arr[i].hide = false
        }
        list.forEach(v=>{
            for(let [k,val] of Object.entries(v.s)){
                def[k] *= val
            }
            arr[v.id].hide = true
        })
        this.setData({btnList:list,def,arr})
    },
    removeAttr: function(e){
        let id = e.target.id
        let list = this.data.btnList, idx = list.findIndex(v=>v.id===id)
        list.splice(idx,1)
        this.countDef(list)
    },
    addAttr: function (e) {
        let id = e.target.id
        let data = _json[id]
        let list = this.data.btnList, len = list.length
        if(list.findIndex(v=>v.id===id)>=0){
            return true
        }
        if(len==2){
            list[1] = data
        }else{
            list.push(data)
        }
        this.countDef(list)
    }
})