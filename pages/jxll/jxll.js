import _json from '../sxxk/sxxk.json'

Page({
    data: {
        inpList: [
            { id: 'hp', text: 'HP' },
            { id: 'wg', text: '物攻' },
            { id: 'wf', text: '物防' },
            { id: 'sd', text: '速度' },
            { id: 'tg', text: '特攻' },
            { id: 'tf', text: '特防' }
        ],
        value:'',
        arr: {},
        jxList:[],
        jxtext:''
    },
    onLoad: function () {
        this.setData({arr:_json})
    },
    count: function () {
        let { ss } = this.data
        if (ss && ss.split('/').length == 6) {
            let value = 0
            ss.split('/').forEach((v, i) => {
                value += v % 2 ? Math.pow(2, i) : 0
            })
            this.setData({
                value:['格斗', '飞行', '毒', '地面', '岩石', '虫', '鬼', '钢',
                '炎', '水', '草', '电', '超能', '冰', '龙', '恶'][parseInt(value * 15 / 63)]
            }) 
        } else {
            this.setData({ value:'' }) 
             wx.showToast({
                title: '输入有误',
                icon: 'none',
                duration: 2000
            })
        }
    },
    bindKeyInput: function (e) {
        let key = e.target.id, value = e.detail.value
        this.setData({ [key]: value })
    },
    addAttr: function (e) {
        let id = e.target.id
        let data = _json[id]
        this.setData({jxList: data.jxll, value:data.text})
    }
})