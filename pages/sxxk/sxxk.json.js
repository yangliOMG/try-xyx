export default

{
    "normal":{
        "g":{
            "2":[],
            "1":["一般","格斗","飞行","毒","地面","虫","火","水","草","电","超能","冰","龙","恶","妖精"],
            "0.5":["岩石","钢"],
            "0":["幽灵"]
        },
        "s":{
            "一般":1,"火":1,"格斗":2,"水":1,"飞行":1,"草":1,"毒":1,"电":1,"地面":1,
            "超能":1,"岩石":1,"冰":1,"虫":1,"龙":1,"幽灵":0,"恶":1,"钢":1,"妖精":1
        },
        "text":"一般",
        "id":"normal",
        "jxll":[]
    },
    "fighting":{
        "g":{
            "2":["一般","岩石","钢","冰","恶"],
            "1":["格斗","飞行","地面","火","水","草","电","冰","龙","恶"],
            "0.5":["飞行","毒","虫","超能","妖精"],
            "0":["幽灵"]
        },
        "s":{
            "一般":1,"火":1,"格斗":1,"水":1,"飞行":2,"草":1,"毒":1,"电":1,"地面":1,
            "超能":2,"岩石":0.5,"冰":1,"虫":0.5,"龙":1,"幽灵":1,"恶":0.5,"钢":1,"妖精":2
        },
        "text":"格斗",
        "id":"fighting",
        "jxll":[ [1,1,0,0,0,0], [1,0,0,0,0,0], [0,1,0,0,0,0], [0,0,1,0,0,0], [0,0,0,0,0,0]]
    },
    "flying":{
        "g":{
            "2":["格斗","虫","草"],
            "1":["一般","飞行","毒","地面","幽灵","火","水","超能","冰","龙","恶","妖精"],
            "0.5":["岩石","钢","电"],
            "0":[]
        },
        "s":{
            "一般":1,"火":1,"格斗":0.5,"水":1,"飞行":1,"草":0.5,"毒":1,"电":2,"地面":0,
            "超能":1,"岩石":2,"冰":2,"虫":0.5,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":1
        },
        "text":"飞行",
        "id":"flying",
        "jxll":[ [1,1,1,0,0,0], [1,0,1,0,0,0], [0,1,1,0,0,0], [0,0,0,1,0,0] ]
    },
    "poison":{
        "g":{
            "2":["草","妖精"],
            "1":["一般","格斗","飞行","虫","火","水","电","超能","冰","龙","恶",],
            "0.5":["毒","地面","岩石","幽灵",],
            "0":["钢",]
        },
        "s":{
            "一般":1,"火":1,"格斗":0.5,"水":1,"飞行":1,"草":0.5,"毒":0.5,"电":1,"地面":2,
            "超能":2,"岩石":1,"冰":1,"虫":0.5,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":0.5
        },
        "text":"毒",
        "id":"poison",
        "jxll":[ [1,1,0,1,0,0], [1,0,0,1,0,0], [0,1,0,1,0,0], [0,0,1,1,0,0] ]
    },
    "ground":{
        "g":{
            "2":["毒","岩石","钢","火","电",],
            "1":["一般","格斗","地面","幽灵","水","超能","冰","龙","恶","妖精"],
            "0.5":["虫","草",],
            "0":["飞行",]
        },
        "s":{
            "一般":1,"火":1,"格斗":1,"水":2,"飞行":1,"草":2,"毒":0.5,"电":0,"地面":1,
            "超能":1,"岩石":0.5,"冰":2,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":1
        },
        "text":"地面",
        "id":"ground",
        "jxll":[ [1,1,1,1,0,0], [1,0,1,1,0,0], [0,1,1,1,0,0], [0,0,0,1,0,0] ]
    },
    "rock":{
        "g":{
            "2":["飞行","虫","火","冰",],
            "1":["一般","毒","岩石","幽灵","水","草","电","超能","龙","恶","妖精"],
            "0.5":["格斗","地面","钢",],
            "0":[]
        },
        "s":{
            "一般":0.5,"火":0.5,"格斗":2,"水":2,"飞行":0.5,"草":2,"毒":0.5,"电":1,"地面":2,
            "超能":1,"岩石":1,"冰":1,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":2,"妖精":1
        },
        "text":"岩石",
        "id":"rock",
        "jxll":[ [1,1,0,0,1,0], [1,0,0,0,1,0], [0,1,0,0,1,0], [0,0,1,0,1,0] ]
    },
    "bug":{
        "g":{
            "2":["草","超能","恶",],
            "1":["一般","地面","岩石","虫","水","电","冰","龙",],
            "0.5":["格斗","飞行","毒","幽灵","钢","火","妖精"],
            "0":[]
        },
        "s":{
            "一般":1,"火":2,"格斗":0.5,"水":1,"飞行":2,"草":0.5,"毒":1,"电":1,"地面":0.5,
            "超能":1,"岩石":2,"冰":1,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":1
        },
        "text":"虫",
        "id":"bug",
        "jxll":[ [1,1,1,0,1,0], [1,0,1,0,1,0], [1,0,0,1,1,0], [0,1,1,0,1,0], [0,0,0,1,1,0]]
    },
    "ghost":{
        "g":{
            "2":["幽灵","超能",],
            "1":["格斗","飞行","毒","地面","岩石","钢","虫","火","水","草","电","冰","龙","妖精"],
            "0.5":["恶",],
            "0":["一般",]
        },
        "s":{
            "一般":0,"火":1,"格斗":0,"水":1,"飞行":1,"草":1,"毒":0.5,"电":1,"地面":1,
            "超能":1,"岩石":1,"冰":1,"虫":0.5,"龙":1,"幽灵":2,"恶":2,"钢":1,"妖精":1
        },
        "text":"幽灵",
        "id":"ghost",
        "jxll":[ [1,1,0,1,1,0], [1,0,1,1,1,0], [0,1,0,1,1,0], [0,0,1,1,1,0] ]
    },
    "steel":{
        "g":{
            "2":["岩石","冰","妖精"],
            "1":["一般","格斗","飞行","毒","地面","虫","幽灵","草","超能","龙","恶",],
            "0.5":["钢","火","水","电",],
            "0":[]
        },
        "s":{
            "一般":0.5,"火":2,"格斗":2,"水":1,"飞行":0.5,"草":0.5,"毒":0,"电":1,"地面":2,
            "超能":0.5,"岩石":0.5,"冰":0.5,"虫":0.5,"龙":0.5,"幽灵":1,"恶":1,"钢":0.5,"妖精":0.5
        },
        "text":"钢",
        "id":"steel",
        "jxll":[ [1,1,1,1,1,0], [1,0,0,0,0,1], [0,1,1,1,1,0], [0,0,0,0,0,1] ]
    },
    "fire":{
        "g":{
            "2":["虫","钢","草","冰",],
            "1":["一般","格斗","飞行","毒","地面","幽灵","电","超能","恶","妖精"],
            "0.5":["岩石","火","水","龙",],
            "0":[]
        },
        "s":{
            "一般":1,"火":0.5,"格斗":1,"水":2,"飞行":1,"草":0.5,"毒":1,"电":1,"地面":2,
            "超能":1,"岩石":2,"冰":0.5,"虫":0.5,"龙":1,"幽灵":1,"恶":1,"钢":0.5,"妖精":1
        },
        "text":"火",
        "id":"fire",
        "jxll":[ [1,1,0,0,0,1], [1,0,1,0,0,1], [0,1,0,0,0,1], [0,0,1,0,0,1] ]
    },
    "water":{
        "g":{
            "2":["地面","岩石","火",],
            "1":["一般","格斗","飞行","毒","钢","虫","幽灵","电","超能","冰","恶","妖精"],
            "0.5":["水","草","龙",],
            "0":[]
        },
        "s":{
            "一般":1,"火":0.5,"格斗":1,"水":0.5,"飞行":1,"草":2,"毒":1,"电":2,"地面":1,
            "超能":1,"岩石":1,"冰":0.5,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":0.5,"妖精":1
        },
        "text":"水",
        "id":"water",
        "jxll":[ [1,1,1,0,0,1], [1,0,0,1,0,1], [0,1,1,0,0,1], [0,0,0,1,0,1] ]
    },
    "grass":{
        "g":{
            "2":["地面","岩石","水",],
            "1":["一般","格斗","幽灵","电","超能","冰","恶","妖精"],
            "0.5":["飞行","毒","虫","钢","火","草","龙",],
            "0":[]
        },
        "s":{
            "一般":1,"火":2,"格斗":1,"水":0.5,"飞行":2,"草":0.5,"毒":2,"电":0.5,"地面":0.5,
            "超能":1,"岩石":1,"冰":2,"虫":2,"龙":1,"幽灵":1,"恶":1,"钢":1,"妖精":1
        },
        "text":"草",
        "id":"grass",
        "jxll":[ [1,1,0,1,0,1], [1,0,1,1,0,1], [0,1,1,1,0,1], [0,1,0,1,0,1], [0,0,1,1,0,1]]
    },
    "electric":{
        "g":{
            "2":["飞行","水",],
            "1":["一般","格斗","毒","岩石","钢","虫","幽灵","火","超能","冰","恶","妖精"],
            "0.5":["草","电","龙",],
            "0":["地面",]
        },
        "s":{
            "一般":1,"火":1,"格斗":1,"水":1,"飞行":0.5,"草":1,"毒":1,"电":0.5,"地面":2,
            "超能":1,"岩石":1,"冰":1,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":0.5,"妖精":1
        },
        "text":"电",
        "id":"electric",
        "jxll":[ [1,1,1,1,0,1], [1,0,0,0,1,1], [0,1,0,0,1,1], [0,0,0,0,1,1] ]
    },
    "psychic":{
        "g":{
            "2":["格斗","毒",],
            "1":["一般","飞行","地面","岩石","虫","幽灵","火","水","草","电","冰","龙","妖精"],
            "0.5":["钢","超能",],
            "0":["恶",]
        },
        "s":{
            "一般":1,"火":1,"格斗":0.5,"水":1,"飞行":1,"草":1,"毒":1,"电":1,"地面":1,
            "超能":0.5,"岩石":1,"冰":1,"虫":2,"龙":1,"幽灵":2,"恶":2,"钢":1,"妖精":1
        },
        "text":"超能",
        "id":"psychic",
        "jxll":[ [1,1,0,0,1,1], [1,0,1,0,1,1], [0,1,1,0,1,1], [0,0,1,0,1,1] ]
    },
    "ice":{
        "g":{
            "2":["飞行","地面","草","龙",],
            "1":["一般","格斗","毒","岩石","虫","幽灵","电","超能","恶","妖精"],
            "0.5":["钢","火","水","冰",],
            "0":[]
        },
        "s":{
            "一般":1,"火":2,"格斗":2,"水":1,"飞行":1,"草":1,"毒":1,"电":1,"地面":1,
            "超能":1,"岩石":2,"冰":0.5,"虫":1,"龙":1,"幽灵":1,"恶":1,"钢":2,"妖精":1
        },
        "text":"冰",
        "id":"ice",
        "jxll":[ [1,1,1,0,1,1], [1,0,0,1,1,1], [0,1,0,1,1,1], [0,0,0,1,1,1] ]
    },
    "dragon":{
        "g":{
            "2":["龙",],
            "1":["一般","格斗","飞行","毒","地面","岩石","虫","幽灵","火","水","草","电","超能","冰","恶",],
            "0.5":["钢",],
            "0":["妖精"]
        },
        "s":{
            "一般":1,"火":0.5,"格斗":1,"水":0.5,"飞行":1,"草":0.5,"毒":1,"电":0.5,"地面":1,
            "超能":1,"岩石":1,"冰":2,"虫":1,"龙":2,"幽灵":1,"恶":1,"钢":1,"妖精":2
        },
        "text":"龙",
        "id":"dragon",
        "jxll":[ [1,1,0,1,1,1], [1,0,1,1,1,1], [0,1,1,1,1,1], [0,0,1,1,1,1] ]
    },
    "dark":{
        "g":{
            "2":["幽灵","超能",],
            "1":["一般","飞行","毒","地面","岩石","钢","虫","火","水","草","电","冰","龙",],
            "0.5":["格斗","恶","妖精"],
            "0":[]
        },
        "s":{
            "一般":1,"火":1,"格斗":2,"水":1,"飞行":1,"草":1,"毒":1,"电":1,"地面":1,
            "超能":0,"岩石":1,"冰":1,"虫":2,"龙":1,"幽灵":0.5,"恶":0.5,"钢":1,"妖精":2
        },
        "text":"恶",
        "id":"dark",
        "jxll":[ [1,1,1,1,1,1]]
    },
    "fairy":{
        "g":{
            "2":["格斗","龙","恶"],
            "1":["一般","飞行","地面","岩石","虫","幽灵","水","草","电","超能","冰",,"妖精"],
            "0.5":["毒","钢","火",],
            "0":[]
        },
        "s":{
            "一般":1,"火":1,"格斗":0.5,"水":1,"飞行":1,"草":1,"毒":2,"电":1,"地面":1,
            "超能":1,"岩石":1,"冰":1,"虫":0.5,"龙":0,"幽灵":1,"恶":0.5,"钢":2,"妖精":1
        },
        "text":"妖精",
        "id":"fairy",
        "jxll":[]
    }
}