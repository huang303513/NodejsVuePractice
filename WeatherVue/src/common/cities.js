/*
 * @Author: huangchengdu
 * @Date:   2016-11-23 12:07:32
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2016-11-23 12:14:53
 */

export let cities = {
    "中国": {
        "直辖市": {
            "北京": {
                "北京": { "id": "CHBJ000000", "en": "Beijing" },
                "海淀": { "id": "CHBJ000100", "en": "Haidian" },
                "朝阳": { "id": "CHBJ000200", "en": "Chaoyang" },
                "顺义": { "id": "CHBJ000300", "en": "Shunyi" },
                "怀柔": { "id": "CHBJ000400", "en": "Huairou" },
                "通州": { "id": "CHBJ000500", "en": "Tongzhou" },
                "昌平": { "id": "CHBJ000600", "en": "Changping" },
                "延庆": { "id": "CHBJ000700", "en": "Yanqing" },
                "丰台": { "id": "CHBJ000800", "en": "Fengtai" },
                "石景山": { "id": "CHBJ000900", "en": "Shijingshan" },
                "大兴": { "id": "CHBJ001000", "en": "Daxing" },
                "房山": { "id": "CHBJ001100", "en": "Fangshan" },
                "密云": { "id": "CHBJ001200", "en": "Miyun" },
                "门头沟": { "id": "CHBJ001300", "en": "Mentougou" },
                "平谷": { "id": "CHBJ001400", "en": "Pinggu" }
            },
            "上海": {
                "上海": { "id": "CHSH000000", "en": "Shanghai" },
                "闵行": { "id": "CHSH000100", "en": "Minhang" },
                "宝山": { "id": "CHSH000200", "en": "Baoshan" },
                "嘉定": { "id": "CHSH000300", "en": "Jiading" },
                "浦东南汇": { "id": "CHSH000400", "en": "Pudongnanhui" },
                "金山": { "id": "CHSH000500", "en": "Jinshan" },
                "青浦": { "id": "CHSH000600", "en": "Qingpu" },
                "松江": { "id": "CHSH000700", "en": "Songjiang" },
                "奉贤": { "id": "CHSH000800", "en": "Fengxian" },
                "崇明": { "id": "CHSH000900", "en": "Chongming" },
                "徐家汇": { "id": "CHSH001000", "en": "Xujiahui" },
                "浦东": { "id": "CHSH001100", "en": "Pudong" }
            },
            "天津": {
                "天津": { "id": "CHTJ000000", "en": "Tianjin" },
                "武清": { "id": "CHTJ000100", "en": "Wuqing" },
                "宝坻": { "id": "CHTJ000200", "en": "Baodi" },
                "东丽": { "id": "CHTJ000300", "en": "Dongli" },
                "西青": { "id": "CHTJ000400", "en": "Xiqing" },
                "北辰": { "id": "CHTJ000500", "en": "Beichen" },
                "宁河": { "id": "CHTJ000600", "en": "Ninghe" },
                "汉沽": { "id": "CHTJ000700", "en": "Hangu" },
                "静海": { "id": "CHTJ000800", "en": "Jinghai" },
                "津南": { "id": "CHTJ000900", "en": "Jinnan" },
                "塘沽": { "id": "CHTJ001000", "en": "Tanggu" },
                "大港": { "id": "CHTJ001100", "en": "Dagang" },
                "蓟县": { "id": "CHTJ001200", "en": "Jixian" }
            },
            "重庆": {
                "重庆": { "id": "CHCQ000000", "en": "Chongqing" },
                "永川": { "id": "CHCQ000100", "en": "Yongchuan" },
                "合川": { "id": "CHCQ000200", "en": "Hechuan" },
                "南川": { "id": "CHCQ000300", "en": "Nanchuan" },
                "江津": { "id": "CHCQ000400", "en": "Jiangjin" },
                "万盛": { "id": "CHCQ000500", "en": "Wansheng" },
                "渝北": { "id": "CHCQ000600", "en": "Yubei" },
                "北碚": { "id": "CHCQ000700", "en": "Beibei" },
                "巴南": { "id": "CHCQ000800", "en": "Banan" },
                "长寿": { "id": "CHCQ000900", "en": "Changshou" },
                "黔江": { "id": "CHCQ001000", "en": "Qianjiang" },
                "万州": { "id": "CHCQ001100", "en": "Wanzhou" },
                "涪陵": { "id": "CHCQ001200", "en": "Fuling" },
                "开县": { "id": "CHCQ001300", "en": "Kaixian" },
                "城口": { "id": "CHCQ001400", "en": "Chengkou" },
                "云阳": { "id": "CHCQ001500", "en": "Yunyang" },
                "巫溪": { "id": "CHCQ001600", "en": "Wuxi" },
                "奉节": { "id": "CHCQ001700", "en": "Fengjie" },
                "巫山": { "id": "CHCQ001800", "en": "Wushan" },
                "潼南": { "id": "CHCQ001900", "en": "Tongnan" },
                "垫江": { "id": "CHCQ002000", "en": "Dianjiang" },
                "梁平": { "id": "CHCQ002100", "en": "Liangping" },
                "忠县": { "id": "CHCQ002200", "en": "Zhongxian" },
                "石柱": { "id": "CHCQ002300", "en": "Shizhu" },
                "大足": { "id": "CHCQ002400", "en": "Dazu" },
                "荣昌": { "id": "CHCQ002500", "en": "Rongchang" },
                "铜梁": { "id": "CHCQ002600", "en": "Tongliang" },
                "璧山": { "id": "CHCQ002700", "en": "Bishan" },
                "丰都": { "id": "CHCQ002800", "en": "Fengdu" },
                "武隆": { "id": "CHCQ002900", "en": "Wulong" },
                "彭水": { "id": "CHCQ003000", "en": "Pengshui" },
                "綦江": { "id": "CHCQ003100", "en": "Qijiang" },
                "酉阳": { "id": "CHCQ003200", "en": "Youyang" },
                "秀山": { "id": "CHCQ003300", "en": "Xiushan" }
            }
        },
        "特别行政区": {
            "香港": {
                "香港": { "id": "CHHK000000", "en": "Hong Kong" },
                "九龙": { "id": "CHHK000100", "en": "Kowloon" },
                "新界": { "id": "CHHK000200", "en": "New Territories" }
            },
            "澳门": {
                "澳门": { "id": "CHMO000000", "en": "Macao" },
                "氹仔岛": { "id": "CHMO000100", "en": "Taipa Island" },
                "路环岛": { "id": "CHMO000200", "en": "Coloane" }
            }
        },
        "台湾": {
            "台北": {
                "台北": { "id": "CHTW000000", "en": "Taipei" },
                "桃园": { "id": "CHTW000100", "en": "Taoyuan" },
                "新竹": { "id": "CHTW000200", "en": "Xinzhu" },
                "宜兰": { "id": "CHTW000300", "en": "Yilan" }
            },
            "高雄": {
                "高雄": { "id": "CHTW010000", "en": "Gaoxiong" },
                "嘉义": { "id": "CHTW010100", "en": "Jiayi" },
                "台南": { "id": "CHTW010200", "en": "Tainan" },
                "台东": { "id": "CHTW010300", "en": "Taidong" },
                "屏东": { "id": "CHTW010400", "en": "Pingdong" }
            },
            "台中": {
                "台中": { "id": "CHTW020000", "en": "Taizhong" },
                "苗栗": { "id": "CHTW020100", "en": "Miaoli" },
                "彰化": { "id": "CHTW020200", "en": "Zhanghua" },
                "南投": { "id": "CHTW020300", "en": "Nantou" },
                "花莲": { "id": "CHTW020400", "en": "Hualian" },
                "云林": { "id": "CHTW020500", "en": "Yunlin" }
            }
        },
        "黑龙江": {
            "哈尔滨": {
                "哈尔滨": { "id": "CHHL000000", "en": "Haerbin" },
                "双城": { "id": "CHHL000100", "en": "Shuangcheng" },
                "呼兰": { "id": "CHHL000200", "en": "Hulan" },
                "阿城": { "id": "CHHL000300", "en": "Acheng" },
                "宾县": { "id": "CHHL000400", "en": "Binxian" },
                "依兰": { "id": "CHHL000500", "en": "Yilan" },
                "巴彦": { "id": "CHHL000600", "en": "Bayan" },
                "通河": { "id": "CHHL000700", "en": "Tonghe" },
                "方正": { "id": "CHHL000800", "en": "Fangzheng" },
                "延寿": { "id": "CHHL000900", "en": "Yanshou" },
                "尚志": { "id": "CHHL001000", "en": "Shangzhi" },
                "五常": { "id": "CHHL001100", "en": "Wuchang" },
                "木兰": { "id": "CHHL001200", "en": "Mulan" }
            },
            "齐齐哈尔": {
                "齐齐哈尔": { "id": "CHHL010000", "en": "Qiqihaer" },
                "讷河": { "id": "CHHL010100", "en": "Nehe" },
                "龙江": { "id": "CHHL010200", "en": "Longjiang" },
                "甘南": { "id": "CHHL010300", "en": "Gannan" },
                "富裕": { "id": "CHHL010400", "en": "Fuyu" },
                "依安": { "id": "CHHL010500", "en": "Yian" },
                "拜泉": { "id": "CHHL010600", "en": "Baiquan" },
                "克山": { "id": "CHHL010700", "en": "Keshan" },
                "克东": { "id": "CHHL010800", "en": "Kedong" },
                "泰来": { "id": "CHHL010900", "en": "Tailai" }
            },
            "牡丹江": {
                "牡丹江": { "id": "CHHL020000", "en": "Mudanjiang" },
                "海林": { "id": "CHHL020100", "en": "Hailin" },
                "穆棱": { "id": "CHHL020200", "en": "Muling" },
                "林口": { "id": "CHHL020300", "en": "Linkou" },
                "绥芬河": { "id": "CHHL020400", "en": "Suifenhe" },
                "宁安": { "id": "CHHL020500", "en": "Ningan" },
                "东宁": { "id": "CHHL020600", "en": "Dongning" }
            },
            "佳木斯": {
                "佳木斯": { "id": "CHHL030000", "en": "Jiamusi" },
                "汤原": { "id": "CHHL030100", "en": "Tangyuan" },
                "抚远": { "id": "CHHL030200", "en": "Fuyuan" },
                "桦川": { "id": "CHHL030300", "en": "Huachuan" },
                "桦南": { "id": "CHHL030400", "en": "Huanan" },
                "同江": { "id": "CHHL030500", "en": "Tongjiang" },
                "富锦": { "id": "CHHL030600", "en": "Fujin" }
            },
            "绥化": {
                "绥化": { "id": "CHHL040000", "en": "Suihua" },
                "肇东": { "id": "CHHL040100", "en": "Zhaodong" },
                "安达": { "id": "CHHL040200", "en": "Anda" },
                "海伦": { "id": "CHHL040300", "en": "Hailun" },
                "明水": { "id": "CHHL040400", "en": "Mingshui" },
                "望奎": { "id": "CHHL040500", "en": "Wangkui" },
                "兰西": { "id": "CHHL040600", "en": "Lanxi" },
                "青冈": { "id": "CHHL040700", "en": "Qinggang" },
                "庆安": { "id": "CHHL040800", "en": "Qingan" },
                "绥棱": { "id": "CHHL040900", "en": "Suiling" }
            },
            "黑河": {
                "黑河": { "id": "CHHL050000", "en": "Heihe" },
                "嫩江": { "id": "CHHL050100", "en": "Nenjiang" },
                "孙吴": { "id": "CHHL050200", "en": "Sunwu" },
                "逊克": { "id": "CHHL050300", "en": "Xunke" },
                "五大连池": { "id": "CHHL050400", "en": "Wudalianchi" },
                "北安": { "id": "CHHL050500", "en": "Beian" }
            },
            "大兴安岭": {
                "大兴安岭": { "id": "CHHL060000", "en": "Daxinganling" },
                "塔河": { "id": "CHHL060100", "en": "Tahe" },
                "漠河": { "id": "CHHL060200", "en": "Mohe" },
                "呼玛": { "id": "CHHL060300", "en": "Huma" },
                "呼中": { "id": "CHHL060400", "en": "Huzhong" },
                "新林": { "id": "CHHL060500", "en": "Xinlin" },
                "加格达奇": { "id": "CHHL060600", "en": "Jiagedaqi" }
            },
            "伊春": {
                "伊春": { "id": "CHHL070000", "en": "Yichun" },
                "乌伊岭": { "id": "CHHL070100", "en": "Wuyiling" },
                "五营": { "id": "CHHL070200", "en": "Wuying" },
                "铁力": { "id": "CHHL070300", "en": "Tieli" },
                "嘉荫": { "id": "CHHL070400", "en": "Jiayin" }
            },
            "大庆": {
                "大庆": { "id": "CHHL080000", "en": "Daqing" },
                "林甸": { "id": "CHHL080100", "en": "Lindian" },
                "肇州": { "id": "CHHL080200", "en": "Zhaozhou" },
                "肇源": { "id": "CHHL080300", "en": "Zhaoyuan" },
                "杜尔伯特": { "id": "CHHL080400", "en": "Duerbote" }
            },
            "七台河": {
                "七台河": { "id": "CHHL090000", "en": "Qitaihe" },
                "勃利": { "id": "CHHL090100", "en": "Boli" }
            },
            "鸡西": {
                "鸡西": { "id": "CHHL100000", "en": "Jixi" },
                "虎林": { "id": "CHHL100100", "en": "Hulin" },
                "密山": { "id": "CHHL100200", "en": "Mishan" },
                "鸡东": { "id": "CHHL100300", "en": "Jidong" }
            },
            "鹤岗": {
                "鹤岗": { "id": "CHHL110000", "en": "Hegang" },
                "绥滨": { "id": "CHHL110100", "en": "Suibin" },
                "萝北": { "id": "CHHL110200", "en": "Luobei" }
            },
            "双鸭山": {
                "双鸭山": { "id": "CHHL120000", "en": "Shuangyashan" },
                "集贤": { "id": "CHHL120100", "en": "Jixian" },
                "宝清": { "id": "CHHL120200", "en": "Baoqing" },
                "饶河": { "id": "CHHL120300", "en": "Raohe" },
                "友谊": { "id": "CHHL120400", "en": "Youyi" }
            }
        },
        "吉林": {
            "长春": {
                "长春": { "id": "CHJL000000", "en": "Changchun" },
                "农安": { "id": "CHJL000100", "en": "Nongan" },
                "德惠": { "id": "CHJL000200", "en": "Dehui" },
                "九台": { "id": "CHJL000300", "en": "Jiutai" },
                "榆树": { "id": "CHJL000400", "en": "Yushu" },
                "双阳": { "id": "CHJL000500", "en": "Shuangyang" }
            },
            "吉林": {
                "吉林": { "id": "CHJL010000", "en": "Jilin" },
                "舒兰": { "id": "CHJL010100", "en": "Shulan" },
                "永吉": { "id": "CHJL010200", "en": "Yongji" },
                "蛟河": { "id": "CHJL010300", "en": "Jiaohe" },
                "磐石": { "id": "CHJL010400", "en": "Panshi" },
                "桦甸": { "id": "CHJL010500", "en": "Huadian" }
            },
            "延边": {
                "延吉": { "id": "CHJL020000", "en": "Yanji" },
                "敦化": { "id": "CHJL020100", "en": "Dunhua" },
                "安图": { "id": "CHJL020200", "en": "Antu" },
                "汪清": { "id": "CHJL020300", "en": "Wangqing" },
                "和龙": { "id": "CHJL020400", "en": "Helong" },
                "龙井": { "id": "CHJL020500", "en": "Longjing" },
                "珲春": { "id": "CHJL020600", "en": "Hunchun" },
                "图们": { "id": "CHJL020700", "en": "Tumen" }
            },
            "四平": {
                "四平": { "id": "CHJL030000", "en": "Siping" },
                "双辽": { "id": "CHJL030100", "en": "Shuangliao" },
                "梨树": { "id": "CHJL030200", "en": "Lishu" },
                "公主岭": { "id": "CHJL030300", "en": "Gongzhuling" },
                "伊通": { "id": "CHJL030400", "en": "Yitong" }
            },
            "通化": {
                "通化": { "id": "CHJL040000", "en": "Tonghua" },
                "梅河口": { "id": "CHJL040100", "en": "Meihekou" },
                "柳河": { "id": "CHJL040200", "en": "Liuhe" },
                "辉南": { "id": "CHJL040300", "en": "Huinan" },
                "集安": { "id": "CHJL040400", "en": "Jian" },
                "通化县": { "id": "CHJL040500", "en": "Tonghuaxian" }
            },
            "白城": {
                "白城": { "id": "CHJL050000", "en": "Baicheng" },
                "洮南": { "id": "CHJL050100", "en": "Taonan" },
                "大安": { "id": "CHJL050200", "en": "Daan" },
                "镇赉": { "id": "CHJL050300", "en": "Zhenlai" },
                "通榆": { "id": "CHJL050400", "en": "Tongyu" }
            },
            "辽源": {
                "辽源": { "id": "CHJL060000", "en": "Liaoyuan" },
                "东丰": { "id": "CHJL060100", "en": "Dongfeng" },
                "东辽": { "id": "CHJL060200", "en": "Dongliao" }
            },
            "松原": {
                "松原": { "id": "CHJL070000", "en": "Songyuan" },
                "乾安": { "id": "CHJL070100", "en": "Qianan" },
                "前郭": { "id": "CHJL070200", "en": "Qianguo" },
                "长岭": { "id": "CHJL070300", "en": "Changling" },
                "扶余": { "id": "CHJL070400", "en": "Fuyu" }
            },
            "白山": {
                "白山": { "id": "CHJL080000", "en": "Baishan" },
                "靖宇": { "id": "CHJL080100", "en": "Jingyu" },
                "临江": { "id": "CHJL080200", "en": "Linjiang" },
                "东岗": { "id": "CHJL080300", "en": "Donggang" },
                "长白": { "id": "CHJL080400", "en": "Changbai" },
                "抚松": { "id": "CHJL080500", "en": "Fusong" },
                "江源": { "id": "CHJL080600", "en": "Jiangyuan" }
            }
        },
        "辽宁": {
            "沈阳": {
                "沈阳": { "id": "CHLN000000", "en": "Shenyang" },
                "辽中": { "id": "CHLN000100", "en": "Liaozhong" },
                "康平": { "id": "CHLN000200", "en": "Kangping" },
                "法库": { "id": "CHLN000300", "en": "Faku" },
                "新民": { "id": "CHLN000400", "en": "Xinmin" }
            },
            "大连": {
                "大连": { "id": "CHLN010000", "en": "Dalian" },
                "瓦房店": { "id": "CHLN010100", "en": "Wafangdian" },
                "金州": { "id": "CHLN010200", "en": "Jinzhou" },
                "普兰店": { "id": "CHLN010300", "en": "Pulandian" },
                "旅顺": { "id": "CHLN010400", "en": "Lvshun" },
                "长海": { "id": "CHLN010500", "en": "Changhai" },
                "庄河": { "id": "CHLN010600", "en": "Zhuanghe" }
            },
            "鞍山": {
                "鞍山": { "id": "CHLN020000", "en": "Anshan" },
                "台安": { "id": "CHLN020100", "en": "Taian" },
                "岫岩": { "id": "CHLN020200", "en": "Xiuyan" },
                "海城": { "id": "CHLN020300", "en": "Haicheng" }
            },
            "抚顺": {
                "抚顺": { "id": "CHLN030000", "en": "Fushun" },
                "新宾": { "id": "CHLN030100", "en": "Xinbin" },
                "清原": { "id": "CHLN030200", "en": "Qingyuan" },
                "章党": { "id": "CHLN030300", "en": "Zhangdang" }
            },
            "本溪": {
                "本溪": { "id": "CHLN040000", "en": "Benxi" },
                "本溪县": { "id": "CHLN040100", "en": "Benxixian" },
                "桓仁": { "id": "CHLN040200", "en": "Huanren" }
            },
            "丹东": {
                "丹东": { "id": "CHLN050000", "en": "Dandong" },
                "凤城": { "id": "CHLN050100", "en": "Fengcheng" },
                "宽甸": { "id": "CHLN050200", "en": "Kuandian" },
                "东港": { "id": "CHLN050300", "en": "Donggang" }
            },
            "锦州": {
                "锦州": { "id": "CHLN060000", "en": "Jinzhou" },
                "凌海": { "id": "CHLN060100", "en": "Linghai" },
                "义县": { "id": "CHLN060200", "en": "Yixian" },
                "黑山": { "id": "CHLN060300", "en": "Heishan" },
                "北镇": { "id": "CHLN060400", "en": "Beizhen" }
            },
            "营口": {
                "营口": { "id": "CHLN070000", "en": "Yingkou" },
                "大石桥": { "id": "CHLN070100", "en": "Dashiqiao" },
                "盖州": { "id": "CHLN070200", "en": "Gaizhou" }
            },
            "阜新": {
                "阜新": { "id": "CHLN080000", "en": "Fuxin" },
                "彰武": { "id": "CHLN080100", "en": "Zhangwu" }
            },
            "辽阳": {
                "辽阳": { "id": "CHLN090000", "en": "Liaoyang" },
                "辽阳县": { "id": "CHLN090100", "en": "Liaoyangxian" },
                "灯塔": { "id": "CHLN090200", "en": "Dengta" },
                "弓长岭": { "id": "CHLN090300", "en": "Gongchangling" }
            },
            "铁岭": {
                "铁岭": { "id": "CHLN100000", "en": "Tieling" },
                "开原": { "id": "CHLN100100", "en": "Kaiyuan" },
                "昌图": { "id": "CHLN100200", "en": "Changtu" },
                "西丰": { "id": "CHLN100300", "en": "Xifeng" },
                "调兵山": { "id": "CHLN100400", "en": "Diaobingshan" }
            },
            "朝阳": {
                "朝阳": { "id": "CHLN110000", "en": "Chaoyang" },
                "凌源": { "id": "CHLN110100", "en": "Lingyuan" },
                "喀左": { "id": "CHLN110200", "en": "Kazuo" },
                "北票": { "id": "CHLN110300", "en": "Beipiao" },
                "建平县": { "id": "CHLN110400", "en": "Jianpingxian" }
            },
            "盘锦": {
                "盘锦": { "id": "CHLN120000", "en": "Panjin" },
                "大洼": { "id": "CHLN120100", "en": "Dawa" },
                "盘山": { "id": "CHLN120200", "en": "Panshan" }
            },
            "葫芦岛": {
                "葫芦岛": { "id": "CHLN130000", "en": "Huludao" },
                "建昌": { "id": "CHLN130100", "en": "Jianchang" },
                "绥中": { "id": "CHLN130200", "en": "Suizhong" },
                "兴城": { "id": "CHLN130300", "en": "Xingcheng" }
            }
        },
        "内蒙古": {
            "呼和浩特": {
                "呼和浩特": { "id": "CHNM000000", "en": "Huhehaote" },
                "土左旗": { "id": "CHNM000100", "en": "Tuzuoqi" },
                "托县": { "id": "CHNM000200", "en": "Tuoxian" },
                "和林": { "id": "CHNM000300", "en": "Helin" },
                "清水河": { "id": "CHNM000400", "en": "Qingshuihe" },
                "呼市郊区": { "id": "CHNM000500", "en": "Hushijiaoqu" },
                "武川": { "id": "CHNM000600", "en": "Wuchuan" }
            },
            "包头": {
                "包头": { "id": "CHNM010000", "en": "Baotou" },
                "白云鄂博": { "id": "CHNM010100", "en": "Baiyunebo" },
                "满都拉": { "id": "CHNM010200", "en": "Mandula" },
                "土右旗": { "id": "CHNM010300", "en": "Tuyouqi" },
                "固阳": { "id": "CHNM010400", "en": "Guyang" },
                "达茂旗": { "id": "CHNM010500", "en": "Damaoqi" },
                "希拉穆仁": { "id": "CHNM010600", "en": "Xilamuren" }
            },
            "乌海": { "乌海": { "id": "CHNM020000", "en": "Wuhai" } },
            "乌兰察布": {
                "集宁": { "id": "CHNM030000", "en": "Jining" },
                "卓资": { "id": "CHNM030100", "en": "Zhuozi" },
                "化德": { "id": "CHNM030200", "en": "Huade" },
                "商都": { "id": "CHNM030300", "en": "Shangdu" },
                "兴和": { "id": "CHNM030400", "en": "Xinghe" },
                "凉城": { "id": "CHNM030500", "en": "Liangcheng" },
                "察右前旗": { "id": "CHNM030600", "en": "Chayouqianqi" },
                "察右中旗": { "id": "CHNM030700", "en": "Chayouzhongqi" },
                "察右后旗": { "id": "CHNM030800", "en": "Chayouhouqi" },
                "四子王旗": { "id": "CHNM030900", "en": "Siziwangqi" },
                "丰镇": { "id": "CHNM031000", "en": "Fengzhen" }
            },
            "通辽": {
                "通辽": { "id": "CHNM040000", "en": "Tongliao" },
                "舍伯吐": { "id": "CHNM040100", "en": "Shebotu" },
                "科左中旗": { "id": "CHNM040200", "en": "Kezuozhongqi" },
                "科左后旗": { "id": "CHNM040300", "en": "Kezuohouqi" },
                "青龙山": { "id": "CHNM040400", "en": "Qinglongshan" },
                "开鲁": { "id": "CHNM040500", "en": "Kailu" },
                "库伦": { "id": "CHNM040600", "en": "Kulun" },
                "奈曼": { "id": "CHNM040700", "en": "Naiman" },
                "扎鲁特": { "id": "CHNM040800", "en": "Zhalute" },
                "巴雅尔吐胡硕": { "id": "CHNM040900", "en": "Bayaertuhushuo" },
                "霍林郭勒": { "id": "CHNM041000", "en": "Huolinguole" }
            },
            "赤峰": {
                "赤峰": { "id": "CHNM050000", "en": "Chifeng" },
                "阿鲁旗": { "id": "CHNM050100", "en": "Aluqi" },
                "浩尔吐": { "id": "CHNM050200", "en": "Haoertu" },
                "巴林左旗": { "id": "CHNM050300", "en": "Balinzuoqi" },
                "巴林右旗": { "id": "CHNM050400", "en": "Balinyouqi" },
                "林西": { "id": "CHNM050500", "en": "Linxi" },
                "克什克腾": { "id": "CHNM050600", "en": "Keshiketeng" },
                "翁牛特": { "id": "CHNM050700", "en": "Wengniute" },
                "岗子": { "id": "CHNM050800", "en": "Gangzi" },
                "喀喇沁": { "id": "CHNM050900", "en": "Kalaqin" },
                "八里罕": { "id": "CHNM051000", "en": "Balihan" },
                "宁城": { "id": "CHNM051100", "en": "Ningcheng" },
                "敖汉": { "id": "CHNM051200", "en": "Aohan" },
                "宝国吐": { "id": "CHNM051300", "en": "Baoguotu" }
            },
            "鄂尔多斯": {
                "鄂尔多斯": { "id": "CHNM060000", "en": "Eerduosi" },
                "达拉特": { "id": "CHNM060100", "en": "Dalate" },
                "准格尔": { "id": "CHNM060200", "en": "Zhungeer" },
                "鄂前旗": { "id": "CHNM060300", "en": "Eqianqi" },
                "河南": { "id": "CHNM060400", "en": "Henan" },
                "伊克乌素": { "id": "CHNM060500", "en": "Yikewusu" },
                "鄂托克": { "id": "CHNM060600", "en": "Etuoke" },
                "杭锦旗": { "id": "CHNM060700", "en": "Hangjinqi" },
                "乌审旗": { "id": "CHNM060800", "en": "Wushenqi" },
                "伊金霍洛": { "id": "CHNM060900", "en": "Yijinhuoluo" },
                "乌审召": { "id": "CHNM061000", "en": "Wushenzhao" },
                "东胜": { "id": "CHNM061100", "en": "Dongsheng" }
            },
            "巴彦淖尔": {
                "临河": { "id": "CHNM070000", "en": "Linhe" },
                "五原": { "id": "CHNM070100", "en": "Wuyuan" },
                "磴口": { "id": "CHNM070200", "en": "Dengkou" },
                "乌前旗": { "id": "CHNM070300", "en": "Wuqianqi" },
                "大佘太": { "id": "CHNM070400", "en": "Dashetai" },
                "乌中旗": { "id": "CHNM070500", "en": "Wuzhongqi" },
                "乌后旗": { "id": "CHNM070600", "en": "Wuhouqi" },
                "海力素": { "id": "CHNM070700", "en": "Hailisu" },
                "那仁宝力格": { "id": "CHNM070800", "en": "Narenbaolige" },
                "杭锦后旗": { "id": "CHNM070900", "en": "Hangjinhouqi" }
            },
            "锡林郭勒": {
                "锡林浩特": { "id": "CHNM080000", "en": "Xilinhaote" },
                "二连浩特": { "id": "CHNM080100", "en": "Erlianhaote" },
                "阿巴嘎": { "id": "CHNM080200", "en": "Abaga" },
                "苏左旗": { "id": "CHNM080300", "en": "Suzuoqi" },
                "苏右旗": { "id": "CHNM080400", "en": "Suyouqi" },
                "朱日和": { "id": "CHNM080500", "en": "Zhurihe" },
                "东乌旗": { "id": "CHNM080600", "en": "Dongwuqi" },
                "西乌旗": { "id": "CHNM080700", "en": "Xiwuqi" },
                "太仆寺": { "id": "CHNM080800", "en": "Taibusiqi" },
                "镶黄旗": { "id": "CHNM080900", "en": "Xianghuang" },
                "正镶白旗": { "id": "CHNM081000", "en": "Zhengxiangbaiqi" },
                "正蓝旗": { "id": "CHNM081100", "en": "Zhenglanqi" },
                "多伦": { "id": "CHNM081200", "en": "Duolun" },
                "乌拉盖": { "id": "CHNM081400", "en": "Wulagai" }
            },
            "呼伦贝尔": {
                "海拉尔": { "id": "CHNM090000", "en": "Hailaer" },
                "小二沟": { "id": "CHNM090100", "en": "Xiaoergou" },
                "阿荣旗": { "id": "CHNM090200", "en": "Arongqi" },
                "莫力达瓦": { "id": "CHNM090300", "en": "Molidawa" },
                "鄂伦春旗": { "id": "CHNM090400", "en": "Elunchunqi" },
                "鄂温克旗": { "id": "CHNM090500", "en": "Ewenkeqi" },
                "陈旗": { "id": "CHNM090600", "en": "Chenqi" },
                "新左旗": { "id": "CHNM090700", "en": "Xinzuoqi" },
                "新右旗": { "id": "CHNM090800", "en": "Xinyouqi" },
                "满洲里": { "id": "CHNM090900", "en": "Manzhouli" },
                "牙克石": { "id": "CHNM091000", "en": "Yakeshi" },
                "扎兰屯": { "id": "CHNM091100", "en": "Zhalantun" },
                "额尔古纳": { "id": "CHNM091200", "en": "Eerguna" },
                "根河": { "id": "CHNM091300", "en": "Genhe" },
                "图里河": { "id": "CHNM091400", "en": "Tulihe" },
                "博克图": { "id": "CHNM081300", "en": "Boketu" }
            },
            "乌兰浩特": {
                "乌兰浩特": { "id": "CHNM100000", "en": "Wulanhaote" },
                "高力板": { "id": "CHNM100100", "en": "Gaoliban" },
                "阿尔山": { "id": "CHNM100200", "en": "Aershan" },
                "科右中旗": { "id": "CHNM100300", "en": "Keyouzhongqi" },
                "胡尔勒": { "id": "CHNM100400", "en": "Huerle" },
                "扎赉特": { "id": "CHNM100500", "en": "Zhalaite" },
                "索伦": { "id": "CHNM100600", "en": "Suolun" },
                "突泉": { "id": "CHNM100700", "en": "Tuquan" },
                "科右前旗": { "id": "CHNM100800", "en": "Keyouqianqi" }
            },
            "阿拉善盟": {
                "阿左旗": { "id": "CHNM110000", "en": "Azuoqi" },
                "阿右旗": { "id": "CHNM110100", "en": "Ayouqi" },
                "额济纳": { "id": "CHNM110200", "en": "Ejina" },
                "拐子湖": { "id": "CHNM110300", "en": "Guaizihu" },
                "吉兰太": { "id": "CHNM110400", "en": "Jilantai" },
                "锡林高勒": { "id": "CHNM110500", "en": "Xilingaole" },
                "头道湖": { "id": "CHNM110600", "en": "Toudaohu" },
                "中泉子": { "id": "CHNM110700", "en": "Zhongquanzi" },
                "诺尔公": { "id": "CHNM110800", "en": "Nuoergong" },
                "雅布赖": { "id": "CHNM110900", "en": "Yabulai" },
                "乌斯泰": { "id": "CHNM111000", "en": "Wusitai" },
                "孪井滩": { "id": "CHNM111100", "en": "Luanjingtan" }
            }
        },
        "河北": {
            "石家庄": {
                "石家庄": { "id": "CHHE000000", "en": "Shijiazhuang" },
                "井陉": { "id": "CHHE000100", "en": "Jingxing" },
                "正定": { "id": "CHHE000200", "en": "Zhengding" },
                "栾城": { "id": "CHHE000300", "en": "Luancheng" },
                "行唐": { "id": "CHHE000400", "en": "Xingtang" },
                "灵寿": { "id": "CHHE000500", "en": "Lingshou" },
                "高邑": { "id": "CHHE000600", "en": "Gaoyi" },
                "深泽": { "id": "CHHE000700", "en": "Shenze" },
                "赞皇": { "id": "CHHE000800", "en": "Zanhuang" },
                "无极": { "id": "CHHE000900", "en": "Wuji" },
                "平山": { "id": "CHHE001000", "en": "Pingshan" },
                "元氏": { "id": "CHHE001100", "en": "Yuanshi" },
                "赵县": { "id": "CHHE001200", "en": "Zhaoxian" },
                "辛集": { "id": "CHHE001300", "en": "Xinji" },
                "藁城": { "id": "CHHE001400", "en": "Gaocheng" },
                "晋州": { "id": "CHHE001500", "en": "Jinzhou" },
                "新乐": { "id": "CHHE001600", "en": "Xinle" },
                "鹿泉": { "id": "CHHE001700", "en": "Luquan" }
            },
            "保定": {
                "保定": { "id": "CHHE010000", "en": "Baoding" },
                "满城": { "id": "CHHE010100", "en": "Mancheng" },
                "阜平": { "id": "CHHE010200", "en": "Fuping" },
                "徐水": { "id": "CHHE010300", "en": "Xushui" },
                "唐县": { "id": "CHHE010400", "en": "Tangxian" },
                "高阳": { "id": "CHHE010500", "en": "Gaoyang" },
                "容城": { "id": "CHHE010600", "en": "Rongcheng" },
                "涞源": { "id": "CHHE010700", "en": "Laiyuan" },
                "望都": { "id": "CHHE010800", "en": "Wangdu" },
                "安新": { "id": "CHHE010900", "en": "Anxin" },
                "易县": { "id": "CHHE011000", "en": "Yixian" },
                "曲阳": { "id": "CHHE011100", "en": "Quyang" },
                "蠡县": { "id": "CHHE011200", "en": "Lixian" },
                "顺平": { "id": "CHHE011300", "en": "Shunping" },
                "雄县": { "id": "CHHE011400", "en": "Xiongxian" },
                "涿州": { "id": "CHHE011500", "en": "Zhuozhou" },
                "定州": { "id": "CHHE011600", "en": "Dingzhou" },
                "安国": { "id": "CHHE011700", "en": "Anguo" },
                "高碑店": { "id": "CHHE011800", "en": "Gaobeidian" },
                "涞水": { "id": "CHHE011900", "en": "Laishui" },
                "定兴": { "id": "CHHE012000", "en": "Dingxing" },
                "清苑": { "id": "CHHE012100", "en": "Qingyuan" },
                "博野": { "id": "CHHE012200", "en": "Boye" }
            },
            "张家口": {
                "张家口": { "id": "CHHE020000", "en": "Zhangjiakou" },
                "宣化": { "id": "CHHE020100", "en": "Xuanhua" },
                "张北": { "id": "CHHE020200", "en": "Zhangbei" },
                "康保": { "id": "CHHE020300", "en": "Kangbao" },
                "沽源": { "id": "CHHE020400", "en": "Guyuan" },
                "尚义": { "id": "CHHE020500", "en": "Shangyi" },
                "蔚县": { "id": "CHHE020600", "en": "Yuxian" },
                "阳原": { "id": "CHHE020700", "en": "Yangyuan" },
                "怀安": { "id": "CHHE020800", "en": "Huaian" },
                "万全": { "id": "CHHE020900", "en": "Wanquan" },
                "怀来": { "id": "CHHE021000", "en": "Huailai" },
                "涿鹿": { "id": "CHHE021100", "en": "Zhuolu" },
                "赤城": { "id": "CHHE021200", "en": "Chicheng" },
                "崇礼": { "id": "CHHE021300", "en": "Chongli" }
            },
            "承德": {
                "承德": { "id": "CHHE030000", "en": "Chengde" },
                "承德县": { "id": "CHHE030100", "en": "Chengdexian" },
                "兴隆": { "id": "CHHE030200", "en": "Xinglong" },
                "平泉": { "id": "CHHE030300", "en": "Pingquan" },
                "滦平": { "id": "CHHE030400", "en": "Luanping" },
                "隆化": { "id": "CHHE030500", "en": "Longhua" },
                "丰宁": { "id": "CHHE030600", "en": "Fengning" },
                "宽城": { "id": "CHHE030700", "en": "Kuancheng" },
                "围场": { "id": "CHHE030800", "en": "Weichang" }
            },
            "唐山": {
                "唐山": { "id": "CHHE040000", "en": "Tangshan" },
                "丰南": { "id": "CHHE040100", "en": "Fengnan" },
                "丰润": { "id": "CHHE040200", "en": "Fengrun" },
                "滦县": { "id": "CHHE040300", "en": "Luanxian" },
                "滦南": { "id": "CHHE040400", "en": "Luannan" },
                "乐亭": { "id": "CHHE040500", "en": "Leting" },
                "迁西": { "id": "CHHE040600", "en": "Qianxi" },
                "玉田": { "id": "CHHE040700", "en": "Yutian" },
                "唐海": { "id": "CHHE040800", "en": "Tanghai" },
                "遵化": { "id": "CHHE040900", "en": "Zunhua" },
                "迁安": { "id": "CHHE041000", "en": "Qianan" },
                "曹妃甸": { "id": "CHHE041100", "en": "Caofeidian" }
            },
            "廊坊": {
                "廊坊": { "id": "CHHE050000", "en": "Langfang" },
                "固安": { "id": "CHHE050100", "en": "Guan" },
                "永清": { "id": "CHHE050200", "en": "Yongqing" },
                "香河": { "id": "CHHE050300", "en": "Xianghe" },
                "大城": { "id": "CHHE050400", "en": "Dacheng" },
                "文安": { "id": "CHHE050500", "en": "Wenan" },
                "大厂": { "id": "CHHE050600", "en": "Dachang" },
                "霸州": { "id": "CHHE050700", "en": "Bazhou" },
                "三河": { "id": "CHHE050800", "en": "Sanhe" }
            },
            "沧州": {
                "沧州": { "id": "CHHE060000", "en": "Cangzhou" },
                "青县": { "id": "CHHE060100", "en": "Qingxian" },
                "东光": { "id": "CHHE060200", "en": "Dongguang" },
                "海兴": { "id": "CHHE060300", "en": "Haixing" },
                "盐山": { "id": "CHHE060400", "en": "Yanshan" },
                "肃宁": { "id": "CHHE060500", "en": "Suning" },
                "南皮": { "id": "CHHE060600", "en": "Nanpi" },
                "吴桥": { "id": "CHHE060700", "en": "Wuqiao" },
                "献县": { "id": "CHHE060800", "en": "Xianxian" },
                "孟村": { "id": "CHHE060900", "en": "Mengcun" },
                "泊头": { "id": "CHHE061000", "en": "Botou" },
                "任丘": { "id": "CHHE061100", "en": "Renqiu" },
                "黄骅": { "id": "CHHE061200", "en": "Huanghua" },
                "河间": { "id": "CHHE061300", "en": "Hejian" },
                "沧县": { "id": "CHHE061400", "en": "Cangxian" }
            },
            "衡水": {
                "衡水": { "id": "CHHE070000", "en": "Hengshui" },
                "枣强": { "id": "CHHE070100", "en": "Zaoqiang" },
                "武邑": { "id": "CHHE070200", "en": "Wuyi" },
                "武强": { "id": "CHHE070300", "en": "Wuqiang" },
                "饶阳": { "id": "CHHE070400", "en": "Raoyang" },
                "安平": { "id": "CHHE070500", "en": "Anping" },
                "故城": { "id": "CHHE070600", "en": "Gucheng" },
                "景县": { "id": "CHHE070700", "en": "Jingxian" },
                "阜城": { "id": "CHHE070800", "en": "Fucheng" },
                "冀州": { "id": "CHHE070900", "en": "Jizhou" },
                "深州": { "id": "CHHE071000", "en": "Shenzhou" }
            },
            "邢台": {
                "邢台": { "id": "CHHE080000", "en": "Xingtai" },
                "临城": { "id": "CHHE080100", "en": "Lincheng" },
                "内丘": { "id": "CHHE080200", "en": "Neiqiu" },
                "柏乡": { "id": "CHHE080300", "en": "Baixiang" },
                "隆尧": { "id": "CHHE080400", "en": "Longyao" },
                "南和": { "id": "CHHE080500", "en": "Nanhe" },
                "宁晋": { "id": "CHHE080600", "en": "Ningjin" },
                "巨鹿": { "id": "CHHE080700", "en": "Julu" },
                "新河": { "id": "CHHE080800", "en": "Xinhe" },
                "广宗": { "id": "CHHE080900", "en": "Guangzong" },
                "平乡": { "id": "CHHE081000", "en": "Pingxiang" },
                "威县": { "id": "CHHE081100", "en": "Weixian" },
                "清河": { "id": "CHHE081200", "en": "Qinghe" },
                "临西": { "id": "CHHE081300", "en": "Linxi" },
                "南宫": { "id": "CHHE081400", "en": "Nangong" },
                "沙河": { "id": "CHHE081500", "en": "Shahe" },
                "任县": { "id": "CHHE081600", "en": "Renxian" }
            },
            "邯郸": {
                "邯郸": { "id": "CHHE090000", "en": "Handan" },
                "峰峰": { "id": "CHHE090100", "en": "Fengfeng" },
                "临漳": { "id": "CHHE090200", "en": "Linzhang" },
                "成安": { "id": "CHHE090300", "en": "Chengan" },
                "大名": { "id": "CHHE090400", "en": "Daming" },
                "涉县": { "id": "CHHE090500", "en": "Shexian" },
                "磁县": { "id": "CHHE090600", "en": "Cixian" },
                "肥乡": { "id": "CHHE090700", "en": "Feixiang" },
                "永年": { "id": "CHHE090800", "en": "Yongnian" },
                "邱县": { "id": "CHHE090900", "en": "Qiuxian" },
                "鸡泽": { "id": "CHHE091000", "en": "Jize" },
                "广平": { "id": "CHHE091100", "en": "Guangping" },
                "馆陶": { "id": "CHHE091200", "en": "Guantao" },
                "魏县": { "id": "CHHE091300", "en": "Weixian" },
                "曲周": { "id": "CHHE091400", "en": "Quzhou" },
                "武安": { "id": "CHHE091500", "en": "Wuan" }
            },
            "秦皇岛": {
                "秦皇岛": { "id": "CHHE100000", "en": "Qinhuangdao" },
                "青龙": { "id": "CHHE100100", "en": "Qinglong" },
                "昌黎": { "id": "CHHE100200", "en": "Changli" },
                "抚宁": { "id": "CHHE100300", "en": "Funing" },
                "卢龙": { "id": "CHHE100400", "en": "Lulong" },
                "北戴河": { "id": "CHHE100500", "en": "Beidaihe" }
            }
        },
        "河南": {
            "郑州": {
                "郑州": { "id": "CHHA000000", "en": "Zhengzhou" },
                "巩义": { "id": "CHHA000100", "en": "Gongyi" },
                "荥阳": { "id": "CHHA000200", "en": "Xingyang" },
                "登封": { "id": "CHHA000300", "en": "Dengfeng" },
                "新密": { "id": "CHHA000400", "en": "Xinmi" },
                "新郑": { "id": "CHHA000500", "en": "Xinzheng" },
                "中牟": { "id": "CHHA000600", "en": "Zhongmou" },
                "上街": { "id": "CHHA000700", "en": "Shangjie" }
            },
            "安阳": {
                "安阳": { "id": "CHHA010000", "en": "Anyang" },
                "汤阴": { "id": "CHHA010100", "en": "Tangyin" },
                "滑县": { "id": "CHHA010200", "en": "Huaxian" },
                "内黄": { "id": "CHHA010300", "en": "Neihuang" },
                "林州": { "id": "CHHA010400", "en": "Linzhou" }
            },
            "新乡": {
                "新乡": { "id": "CHHA020000", "en": "Xinxiang" },
                "获嘉": { "id": "CHHA020100", "en": "Huojia" },
                "原阳": { "id": "CHHA020200", "en": "Yuanyang" },
                "辉县": { "id": "CHHA020300", "en": "Huixian" },
                "卫辉": { "id": "CHHA020400", "en": "Weihui" },
                "延津": { "id": "CHHA020500", "en": "Yanjin" },
                "封丘": { "id": "CHHA020600", "en": "Fengqiu" },
                "长垣": { "id": "CHHA020700", "en": "Changyuan" }
            },
            "许昌": {
                "许昌": { "id": "CHHA030000", "en": "Xuchang" },
                "鄢陵": { "id": "CHHA030100", "en": "Yanling" },
                "襄城": { "id": "CHHA030200", "en": "Xiangcheng" },
                "长葛": { "id": "CHHA030300", "en": "Changge" },
                "禹州": { "id": "CHHA030400", "en": "Yuzhou" }
            },
            "平顶山": {
                "平顶山": { "id": "CHHA040000", "en": "Pingdingshan" },
                "郏县": { "id": "CHHA040100", "en": "Jiaxian" },
                "宝丰": { "id": "CHHA040200", "en": "Baofeng" },
                "汝州": { "id": "CHHA040300", "en": "Ruzhou" },
                "叶县": { "id": "CHHA040400", "en": "Yexian" },
                "舞钢": { "id": "CHHA040500", "en": "Wugang" },
                "鲁山": { "id": "CHHA040600", "en": "Lushan" },
                "石龙": { "id": "CHHA040700", "en": "Shilong" }
            },
            "信阳": {
                "信阳": { "id": "CHHA050000", "en": "Xinyang" },
                "息县": { "id": "CHHA050100", "en": "Xixian" },
                "罗山": { "id": "CHHA050200", "en": "Luoshan" },
                "光山": { "id": "CHHA050300", "en": "Guangshan" },
                "新县": { "id": "CHHA050400", "en": "Xinxian" },
                "淮滨": { "id": "CHHA050500", "en": "Huaibin" },
                "潢川": { "id": "CHHA050600", "en": "Huangchuan" },
                "固始": { "id": "CHHA050700", "en": "Gushi" },
                "商城": { "id": "CHHA050800", "en": "Shangcheng" }
            },
            "南阳": {
                "南阳": { "id": "CHHA060000", "en": "Nanyang" },
                "南召": { "id": "CHHA060100", "en": "Nanzhao" },
                "方城": { "id": "CHHA060200", "en": "Fangcheng" },
                "社旗": { "id": "CHHA060300", "en": "Sheqi" },
                "西峡": { "id": "CHHA060400", "en": "Xixia" },
                "内乡": { "id": "CHHA060500", "en": "Neixiang" },
                "镇平": { "id": "CHHA060600", "en": "Zhenping" },
                "淅川": { "id": "CHHA060700", "en": "Xichuan" },
                "新野": { "id": "CHHA060800", "en": "Xinye" },
                "唐河": { "id": "CHHA060900", "en": "Tanghe" },
                "邓州": { "id": "CHHA061000", "en": "Dengzhou" },
                "桐柏": { "id": "CHHA061100", "en": "Tongbai" }
            },
            "开封": {
                "开封": { "id": "CHHA070000", "en": "Kaifeng" },
                "杞县": { "id": "CHHA070100", "en": "Qixian" },
                "尉氏": { "id": "CHHA070200", "en": "Weishi" },
                "通许": { "id": "CHHA070300", "en": "Tongxu" },
                "兰考": { "id": "CHHA070400", "en": "Lankao" }
            },
            "洛阳": {
                "洛阳": { "id": "CHHA080000", "en": "Luoyang" },
                "新安": { "id": "CHHA080100", "en": "Xinan" },
                "孟津": { "id": "CHHA080200", "en": "Mengjin" },
                "宜阳": { "id": "CHHA080300", "en": "Yiyang" },
                "洛宁": { "id": "CHHA080400", "en": "Luoning" },
                "伊川": { "id": "CHHA080500", "en": "Yichuan" },
                "嵩县": { "id": "CHHA080600", "en": "Songxian" },
                "偃师": { "id": "CHHA080700", "en": "Yanshi" },
                "栾川": { "id": "CHHA080800", "en": "Luanchuan" },
                "汝阳": { "id": "CHHA080900", "en": "Ruyang" },
                "吉利": { "id": "CHHA081000", "en": "Jili" }
            },
            "商丘": {
                "商丘": { "id": "CHHA090000", "en": "Shangqiu" },
                "睢县": { "id": "CHHA090100", "en": "Suixian" },
                "民权": { "id": "CHHA090200", "en": "Minquan" },
                "虞城": { "id": "CHHA090300", "en": "Yucheng" },
                "柘城": { "id": "CHHA090400", "en": "Zhecheng" },
                "宁陵": { "id": "CHHA090500", "en": "Ningling" },
                "夏邑": { "id": "CHHA090600", "en": "Xiayi" },
                "永城": { "id": "CHHA090700", "en": "Yongcheng" }
            },
            "焦作": {
                "焦作": { "id": "CHHA100000", "en": "Jiaozuo" },
                "修武": { "id": "CHHA100100", "en": "Xiuwu" },
                "武陟": { "id": "CHHA100200", "en": "Wuzhi" },
                "沁阳": { "id": "CHHA100300", "en": "Qinyang" },
                "博爱": { "id": "CHHA100400", "en": "Boai" },
                "温县": { "id": "CHHA100500", "en": "Wenxian" },
                "孟州": { "id": "CHHA100600", "en": "Mengzhou" }
            },
            "鹤壁": {
                "鹤壁": { "id": "CHHA110000", "en": "Hebi" },
                "浚县": { "id": "CHHA110100", "en": "Xunxian" },
                "淇县": { "id": "CHHA110200", "en": "Qixian" }
            },
            "濮阳": {
                "濮阳": { "id": "CHHA120000", "en": "Puyang" },
                "台前": { "id": "CHHA120100", "en": "Taiqian" },
                "南乐": { "id": "CHHA120200", "en": "Nanle" },
                "清丰": { "id": "CHHA120300", "en": "Qingfeng" },
                "范县": { "id": "CHHA120400", "en": "Fanxian" }
            },
            "周口": {
                "周口": { "id": "CHHA130000", "en": "Zhoukou" },
                "扶沟": { "id": "CHHA130100", "en": "Fugou" },
                "太康": { "id": "CHHA130200", "en": "Taikang" },
                "淮阳": { "id": "CHHA130300", "en": "Huaiyang" },
                "西华": { "id": "CHHA130400", "en": "Xihua" },
                "商水": { "id": "CHHA130500", "en": "Shangshui" },
                "项城": { "id": "CHHA130600", "en": "Xiangcheng" },
                "郸城": { "id": "CHHA130700", "en": "Dancheng" },
                "鹿邑": { "id": "CHHA130800", "en": "Luyi" },
                "沈丘": { "id": "CHHA130900", "en": "Shenqiu" }
            },
            "漯河": {
                "漯河": { "id": "CHHA140000", "en": "Luohe" },
                "临颍": { "id": "CHHA140100", "en": "Linying" },
                "舞阳": { "id": "CHHA140200", "en": "Wuyang" }
            },
            "驻马店": {
                "驻马店": { "id": "CHHA150000", "en": "Zhumadian" },
                "西平": { "id": "CHHA150100", "en": "Xiping" },
                "遂平": { "id": "CHHA150200", "en": "Suiping" },
                "上蔡": { "id": "CHHA150300", "en": "Shangcai" },
                "汝南": { "id": "CHHA150400", "en": "Runan" },
                "泌阳": { "id": "CHHA150500", "en": "Biyang" },
                "平舆": { "id": "CHHA150600", "en": "Pingyu" },
                "新蔡": { "id": "CHHA150700", "en": "Xincai" },
                "确山": { "id": "CHHA150800", "en": "Queshan" },
                "正阳": { "id": "CHHA150900", "en": "Zhengyang" }
            },
            "三门峡": {
                "三门峡": { "id": "CHHA160000", "en": "Sanmenxia" },
                "灵宝": { "id": "CHHA160100", "en": "Lingbao" },
                "渑池": { "id": "CHHA160200", "en": "Mianchi" },
                "卢氏": { "id": "CHHA160300", "en": "Lushi" },
                "义马": { "id": "CHHA160400", "en": "Yima" },
                "陕县": { "id": "CHHA160500", "en": "Shanxian" }
            },
            "济源": { "济源": { "id": "CHHA170000", "en": "Jiyuan" } }
        },
        "山西": {
            "太原": {
                "太原": { "id": "CHSX000000", "en": "Taiyuan" },
                "清徐": { "id": "CHSX000100", "en": "Qingxu" },
                "阳曲": { "id": "CHSX000200", "en": "Yangqu" },
                "娄烦": { "id": "CHSX000300", "en": "Loufan" },
                "古交": { "id": "CHSX000400", "en": "Gujiao" },
                "尖草坪区": { "id": "CHSX000500", "en": "Jiancaopingqu" },
                "小店区": { "id": "CHSX000600", "en": "Xiaodianqu" }
            },
            "大同": {
                "大同": { "id": "CHSX010000", "en": "Datong" },
                "阳高": { "id": "CHSX010100", "en": "Yanggao" },
                "大同县": { "id": "CHSX010200", "en": "Datongxian" },
                "天镇": { "id": "CHSX010300", "en": "Tianzhen" },
                "广灵": { "id": "CHSX010400", "en": "Guangling" },
                "灵丘": { "id": "CHSX010500", "en": "Lingqiu" },
                "浑源": { "id": "CHSX010600", "en": "Hunyuan" },
                "左云": { "id": "CHSX010700", "en": "Zuoyun" }
            },
            "阳泉": {
                "阳泉": { "id": "CHSX020000", "en": "Yangquan" },
                "盂县": { "id": "CHSX020100", "en": "Yuxian" },
                "平定": { "id": "CHSX020200", "en": "Pingding" }
            },
            "晋中": {
                "晋中": { "id": "CHSX030000", "en": "Jinzhong" },
                "榆次": { "id": "CHSX030100", "en": "Yuci" },
                "榆社": { "id": "CHSX030200", "en": "Yushe" },
                "左权": { "id": "CHSX030300", "en": "Zuoquan" },
                "和顺": { "id": "CHSX030400", "en": "Heshun" },
                "昔阳": { "id": "CHSX030500", "en": "Xiyang" },
                "寿阳": { "id": "CHSX030600", "en": "Shouyang" },
                "太谷": { "id": "CHSX030700", "en": "Taigu" },
                "祁县": { "id": "CHSX030800", "en": "Qixian" },
                "平遥": { "id": "CHSX030900", "en": "Pingyao" },
                "灵石": { "id": "CHSX031000", "en": "Lingshi" },
                "介休": { "id": "CHSX031100", "en": "Jiexiu" }
            },
            "长治": {
                "长治": { "id": "CHSX040000", "en": "Changzhi" },
                "黎城": { "id": "CHSX040100", "en": "Licheng" },
                "屯留": { "id": "CHSX040200", "en": "Tunliu" },
                "潞城": { "id": "CHSX040300", "en": "Lucheng" },
                "襄垣": { "id": "CHSX040400", "en": "Xiangyuan" },
                "平顺": { "id": "CHSX040500", "en": "Pingshun" },
                "武乡": { "id": "CHSX040600", "en": "Wuxiang" },
                "沁县": { "id": "CHSX040700", "en": "Qinxian" },
                "长子": { "id": "CHSX040800", "en": "Zhangzi" },
                "沁源": { "id": "CHSX040900", "en": "Qinyuan" },
                "壶关": { "id": "CHSX041000", "en": "Huguan" }
            },
            "晋城": {
                "晋城": { "id": "CHSX050000", "en": "Jincheng" },
                "沁水": { "id": "CHSX050100", "en": "Qinshui" },
                "阳城": { "id": "CHSX050200", "en": "Yangcheng" },
                "陵川": { "id": "CHSX050300", "en": "Lingchuan" },
                "高平": { "id": "CHSX050400", "en": "Gaoping" },
                "泽州": { "id": "CHSX050500", "en": "Zezhou" }
            },
            "临汾": {
                "临汾": { "id": "CHSX060000", "en": "Linfen" },
                "曲沃": { "id": "CHSX060100", "en": "Quwo" },
                "永和": { "id": "CHSX060200", "en": "Yonghe" },
                "隰县": { "id": "CHSX060300", "en": "Xixian" },
                "大宁": { "id": "CHSX060400", "en": "Daning" },
                "吉县": { "id": "CHSX060500", "en": "Jixian" },
                "襄汾": { "id": "CHSX060600", "en": "Xiangfen" },
                "蒲县": { "id": "CHSX060700", "en": "Puxian" },
                "汾西": { "id": "CHSX060800", "en": "Fenxi" },
                "洪洞": { "id": "CHSX060900", "en": "Hongtong" },
                "霍州": { "id": "CHSX061000", "en": "Huozhou" },
                "乡宁": { "id": "CHSX061100", "en": "Xiangning" },
                "翼城": { "id": "CHSX061200", "en": "Yicheng" },
                "侯马": { "id": "CHSX061300", "en": "Houma" },
                "浮山": { "id": "CHSX061400", "en": "Fushan" },
                "安泽": { "id": "CHSX061500", "en": "Anze" },
                "古县": { "id": "CHSX061600", "en": "Guxian" }
            },
            "运城": {
                "运城": { "id": "CHSX070000", "en": "Yuncheng" },
                "临猗": { "id": "CHSX070100", "en": "Linyi" },
                "稷山": { "id": "CHSX070200", "en": "Jishan" },
                "万荣": { "id": "CHSX070300", "en": "Wanrong" },
                "河津": { "id": "CHSX070400", "en": "Hejin" },
                "新绛": { "id": "CHSX070500", "en": "Xinjiang" },
                "绛县": { "id": "CHSX070600", "en": "Jiangxian" },
                "闻喜": { "id": "CHSX070700", "en": "Wenxi" },
                "垣曲": { "id": "CHSX070800", "en": "Yuanqu" },
                "永济": { "id": "CHSX070900", "en": "Yongji" },
                "芮城": { "id": "CHSX071000", "en": "Ruicheng" },
                "夏县": { "id": "CHSX071100", "en": "Xiaxian" },
                "平陆": { "id": "CHSX071200", "en": "Pinglu" }
            },
            "朔州": {
                "朔州": { "id": "CHSX080000", "en": "Shuozhou" },
                "平鲁": { "id": "CHSX080100", "en": "Pinglu" },
                "山阴": { "id": "CHSX080200", "en": "Shanyin" },
                "右玉": { "id": "CHSX080300", "en": "Youyu" },
                "应县": { "id": "CHSX080400", "en": "Yingxian" },
                "怀仁": { "id": "CHSX080500", "en": "Huairen" }
            },
            "忻州": {
                "忻州": { "id": "CHSX090000", "en": "Xinzhou" },
                "定襄": { "id": "CHSX090100", "en": "Dingxiang" },
                "五台县": { "id": "CHSX090200", "en": "Wutaixian" },
                "河曲": { "id": "CHSX090300", "en": "Hequ" },
                "偏关": { "id": "CHSX090400", "en": "Pianguan" },
                "神池": { "id": "CHSX090500", "en": "Shenchi" },
                "宁武": { "id": "CHSX090600", "en": "Ningwu" },
                "代县": { "id": "CHSX090700", "en": "Daixian" },
                "繁峙": { "id": "CHSX090800", "en": "Fanshi" },
                "五台山": { "id": "CHSX090900", "en": "Wutaishan" },
                "保德": { "id": "CHSX091000", "en": "Baode" },
                "静乐": { "id": "CHSX091100", "en": "Jingle" },
                "岢岚": { "id": "CHSX091200", "en": "Kelan" },
                "五寨": { "id": "CHSX091300", "en": "Wuzhai" },
                "原平": { "id": "CHSX091400", "en": "Yuanping" }
            },
            "吕梁": {
                "吕梁": { "id": "CHSX100000", "en": "Lvliang" },
                "离石": { "id": "CHSX100100", "en": "Lishi" },
                "临县": { "id": "CHSX100200", "en": "Linxian" },
                "兴县": { "id": "CHSX100300", "en": "Xingxian" },
                "岚县": { "id": "CHSX100400", "en": "Lanxian" },
                "柳林": { "id": "CHSX100500", "en": "Liulin" },
                "石楼": { "id": "CHSX100600", "en": "Shilou" },
                "方山": { "id": "CHSX100700", "en": "Fangshan" },
                "交口": { "id": "CHSX100800", "en": "Jiaokou" },
                "中阳": { "id": "CHSX100900", "en": "Zhongyang" },
                "孝义": { "id": "CHSX101000", "en": "Xiaoyi" },
                "汾阳": { "id": "CHSX101100", "en": "Fenyang" },
                "文水": { "id": "CHSX101200", "en": "Wenshui" },
                "交城": { "id": "CHSX101300", "en": "Jiaocheng" }
            }
        },
        "山东": {
            "济南": {
                "济南": { "id": "CHSD000000", "en": "Jinan" },
                "长清": { "id": "CHSD000100", "en": "Changqing" },
                "商河": { "id": "CHSD000200", "en": "Shanghe" },
                "章丘": { "id": "CHSD000300", "en": "Zhangqiu" },
                "平阴": { "id": "CHSD000400", "en": "Pingyin" },
                "济阳": { "id": "CHSD000500", "en": "Jiyang" }
            },
            "青岛": {
                "青岛": { "id": "CHSD010000", "en": "Qingdao" },
                "崂山": { "id": "CHSD010100", "en": "Laoshan" },
                "即墨": { "id": "CHSD010200", "en": "Jimo" },
                "胶州": { "id": "CHSD010300", "en": "Jiaozhou" },
                "黄岛": { "id": "CHSD010400", "en": "Huangdao" },
                "莱西": { "id": "CHSD010500", "en": "Laixi" },
                "平度": { "id": "CHSD010600", "en": "Pingdu" }
            },
            "淄博": {
                "淄博": { "id": "CHSD020000", "en": "Zibo" },
                "淄川": { "id": "CHSD020100", "en": "Zichuan" },
                "博山": { "id": "CHSD020200", "en": "Boshan" },
                "高青": { "id": "CHSD020300", "en": "Gaoqing" },
                "周村": { "id": "CHSD020400", "en": "Zhoucun" },
                "沂源": { "id": "CHSD020500", "en": "Yiyuan" },
                "桓台": { "id": "CHSD020600", "en": "Huantai" },
                "临淄": { "id": "CHSD020700", "en": "Linzi" }
            },
            "德州": {
                "德州": { "id": "CHSD030000", "en": "Dezhou" },
                "武城": { "id": "CHSD030100", "en": "Wucheng" },
                "临邑": { "id": "CHSD030200", "en": "Linyi" },
                "陵县": { "id": "CHSD030300", "en": "Lingxian" },
                "齐河": { "id": "CHSD030400", "en": "Qihe" },
                "乐陵": { "id": "CHSD030500", "en": "Leling" },
                "庆云": { "id": "CHSD030600", "en": "Qingyun" },
                "平原": { "id": "CHSD030700", "en": "Pingyuan" },
                "宁津": { "id": "CHSD030800", "en": "Ningjin" },
                "夏津": { "id": "CHSD030900", "en": "Xiajin" },
                "禹城": { "id": "CHSD031000", "en": "Yucheng" }
            },
            "烟台": {
                "烟台": { "id": "CHSD040000", "en": "Yantai" },
                "莱州": { "id": "CHSD040100", "en": "Laizhou" },
                "长岛": { "id": "CHSD040200", "en": "Changdao" },
                "蓬莱": { "id": "CHSD040300", "en": "Penglai" },
                "龙口": { "id": "CHSD040400", "en": "Longkou" },
                "招远": { "id": "CHSD040500", "en": "Zhaoyuan" },
                "栖霞": { "id": "CHSD040600", "en": "Qixia" },
                "福山": { "id": "CHSD040700", "en": "Fushan" },
                "牟平": { "id": "CHSD040800", "en": "Mouping" },
                "莱阳": { "id": "CHSD040900", "en": "Laiyang" },
                "海阳": { "id": "CHSD041000", "en": "Haiyang" }
            },
            "潍坊": {
                "潍坊": { "id": "CHSD050000", "en": "Weifang" },
                "青州": { "id": "CHSD050100", "en": "Qingzhou" },
                "寿光": { "id": "CHSD050200", "en": "Shouguang" },
                "临朐": { "id": "CHSD050300", "en": "Linqu" },
                "昌乐": { "id": "CHSD050400", "en": "Changle" },
                "昌邑": { "id": "CHSD050500", "en": "Changyi" },
                "安丘": { "id": "CHSD050600", "en": "Anqiu" },
                "高密": { "id": "CHSD050700", "en": "Gaomi" },
                "诸城": { "id": "CHSD050800", "en": "Zhucheng" }
            },
            "济宁": {
                "济宁": { "id": "CHSD060000", "en": "Jining" },
                "嘉祥": { "id": "CHSD060100", "en": "Jiaxiang" },
                "微山": { "id": "CHSD060200", "en": "Weishan" },
                "鱼台": { "id": "CHSD060300", "en": "Yutai" },
                "兖州": { "id": "CHSD060400", "en": "Yanzhou" },
                "金乡": { "id": "CHSD060500", "en": "Jinxiang" },
                "汶上": { "id": "CHSD060600", "en": "Wenshang" },
                "泗水": { "id": "CHSD060700", "en": "Sishui" },
                "梁山": { "id": "CHSD060800", "en": "Liangshan" },
                "曲阜": { "id": "CHSD060900", "en": "Qufu" },
                "邹城": { "id": "CHSD061000", "en": "Zoucheng" }
            },
            "泰安": {
                "泰安": { "id": "CHSD070000", "en": "Taian" },
                "新泰": { "id": "CHSD070100", "en": "Xintai" },
                "肥城": { "id": "CHSD070200", "en": "Feicheng" },
                "东平": { "id": "CHSD070300", "en": "Dongping" },
                "宁阳": { "id": "CHSD070400", "en": "Ningyang" }
            },
            "临沂": {
                "临沂": { "id": "CHSD080000", "en": "Linyi" },
                "莒南": { "id": "CHSD080100", "en": "Junan" },
                "沂南": { "id": "CHSD080200", "en": "Yinan" },
                "兰陵": { "id": "CHSD080300", "en": "Lanling" },
                "临沭": { "id": "CHSD080400", "en": "Linshu" },
                "郯城": { "id": "CHSD080500", "en": "Tancheng" },
                "蒙阴": { "id": "CHSD080600", "en": "Mengyin" },
                "平邑": { "id": "CHSD080700", "en": "Pingyi" },
                "费县": { "id": "CHSD080800", "en": "Feixian" },
                "沂水": { "id": "CHSD080900", "en": "Yishui" }
            },
            "菏泽": {
                "菏泽": { "id": "CHSD090000", "en": "Heze" },
                "鄄城": { "id": "CHSD090100", "en": "Juancheng" },
                "郓城": { "id": "CHSD090200", "en": "Yuncheng" },
                "东明": { "id": "CHSD090300", "en": "Dongming" },
                "定陶": { "id": "CHSD090400", "en": "Dingtao" },
                "巨野": { "id": "CHSD090500", "en": "Juye" },
                "曹县": { "id": "CHSD090600", "en": "Caoxian" },
                "成武": { "id": "CHSD090700", "en": "Chengwu" },
                "单县": { "id": "CHSD090800", "en": "Shanxian" }
            },
            "滨州": {
                "滨州": { "id": "CHSD100000", "en": "Binzhou" },
                "博兴": { "id": "CHSD100100", "en": "Boxing" },
                "无棣": { "id": "CHSD100200", "en": "Wudi" },
                "阳信": { "id": "CHSD100300", "en": "Yangxin" },
                "惠民": { "id": "CHSD100400", "en": "Huimin" },
                "沾化": { "id": "CHSD100500", "en": "Zhanhua" },
                "邹平": { "id": "CHSD100600", "en": "Zouping" }
            },
            "东营": {
                "东营": { "id": "CHSD110000", "en": "Dongying" },
                "河口": { "id": "CHSD110100", "en": "Hekou" },
                "垦利": { "id": "CHSD110200", "en": "Kenli" },
                "利津": { "id": "CHSD110300", "en": "Lijin" },
                "广饶": { "id": "CHSD110400", "en": "Guangrao" }
            },
            "威海": {
                "威海": { "id": "CHSD120000", "en": "Weihai" },
                "文登": { "id": "CHSD120100", "en": "Wendeng" },
                "荣成": { "id": "CHSD120200", "en": "Rongcheng" },
                "乳山": { "id": "CHSD120300", "en": "Rushan" },
                "成山头": { "id": "CHSD120400", "en": "Chengshantou" },
                "石岛": { "id": "CHSD120500", "en": "Shidao" }
            },
            "枣庄": {
                "枣庄": { "id": "CHSD130000", "en": "Zaozhuang" },
                "薛城": { "id": "CHSD130100", "en": "Xuecheng" },
                "峄城": { "id": "CHSD130200", "en": "Yicheng" },
                "台儿庄": { "id": "CHSD130300", "en": "Taierzhuang" },
                "滕州": { "id": "CHSD130400", "en": "Tengzhou" }
            },
            "日照": {
                "日照": { "id": "CHSD140000", "en": "Rizhao" },
                "五莲": { "id": "CHSD140100", "en": "Wulian" },
                "莒县": { "id": "CHSD140200", "en": "Juxian" }
            },
            "莱芜": { "莱芜": { "id": "CHSD150000", "en": "Laiwu" } },
            "聊城": {
                "聊城": { "id": "CHSD160000", "en": "Liaocheng" },
                "冠县": { "id": "CHSD160100", "en": "Guanxian" },
                "阳谷": { "id": "CHSD160200", "en": "Yanggu" },
                "高唐": { "id": "CHSD160300", "en": "Gaotang" },
                "茌平": { "id": "CHSD160400", "en": "Chiping" },
                "东阿": { "id": "CHSD160500", "en": "Donge" },
                "临清": { "id": "CHSD160600", "en": "Linqing" },
                "莘县": { "id": "CHSD160700", "en": "Shenxian" }
            }
        },
        "江苏": {
            "南京": {
                "南京": { "id": "CHJS000000", "en": "Nanjing" },
                "溧水": { "id": "CHJS000100", "en": "Lishui" },
                "高淳": { "id": "CHJS000200", "en": "Gaochun" },
                "江宁": { "id": "CHJS000300", "en": "Jiangning" },
                "六合": { "id": "CHJS000400", "en": "Luhe" },
                "江浦": { "id": "CHJS000500", "en": "Jiangpu" },
                "浦口": { "id": "CHJS000600", "en": "Pukou" }
            },
            "无锡": {
                "无锡": { "id": "CHJS010000", "en": "Wuxi" },
                "江阴": { "id": "CHJS010100", "en": "Jiangyin" },
                "宜兴": { "id": "CHJS010200", "en": "Yixing" },
                "锡山": { "id": "CHJS010300", "en": "Xishan" }
            },
            "镇江": {
                "镇江": { "id": "CHJS020000", "en": "Zhenjiang" },
                "丹阳": { "id": "CHJS020100", "en": "Danyang" },
                "扬中": { "id": "CHJS020200", "en": "Yangzhong" },
                "句容": { "id": "CHJS020300", "en": "Jurong" },
                "丹徒": { "id": "CHJS020400", "en": "Dantu" }
            },
            "苏州": {
                "苏州": { "id": "CHJS030000", "en": "Suzhou" },
                "常熟": { "id": "CHJS030100", "en": "Changshu" },
                "张家港": { "id": "CHJS030200", "en": "Zhangjiagang" },
                "昆山": { "id": "CHJS030300", "en": "Kunshan" },
                "吴中": { "id": "CHJS030400", "en": "Wuzhong" },
                "吴江": { "id": "CHJS030500", "en": "Wujiang" },
                "太仓": { "id": "CHJS030600", "en": "Taicang" }
            },
            "南通": {
                "南通": { "id": "CHJS040000", "en": "Nantong" },
                "海安": { "id": "CHJS040100", "en": "Haian" },
                "如皋": { "id": "CHJS040200", "en": "Rugao" },
                "如东": { "id": "CHJS040300", "en": "Rudong" },
                "启东": { "id": "CHJS040400", "en": "Qidong" },
                "海门": { "id": "CHJS040500", "en": "Haimen" },
                "通州": { "id": "CHJS040600", "en": "Tongzhou" }
            },
            "扬州": {
                "扬州": { "id": "CHJS050000", "en": "Yangzhou" },
                "宝应": { "id": "CHJS050100", "en": "Baoying" },
                "仪征": { "id": "CHJS050200", "en": "Yizheng" },
                "高邮": { "id": "CHJS050300", "en": "Gaoyou" },
                "江都": { "id": "CHJS050400", "en": "Jiangdu" },
                "邗江": { "id": "CHJS050500", "en": "Hanjiang" }
            },
            "盐城": {
                "盐城": { "id": "CHJS060000", "en": "Yancheng" },
                "响水": { "id": "CHJS060100", "en": "Xiangshui" },
                "滨海": { "id": "CHJS060200", "en": "Binhai" },
                "阜宁": { "id": "CHJS060300", "en": "Funing" },
                "射阳": { "id": "CHJS060400", "en": "Sheyang" },
                "建湖": { "id": "CHJS060500", "en": "Jianhu" },
                "东台": { "id": "CHJS060600", "en": "Dongtai" },
                "大丰": { "id": "CHJS060700", "en": "Dafeng" },
                "盐都": { "id": "CHJS060800", "en": "Yandu" }
            },
            "徐州": {
                "徐州": { "id": "CHJS070000", "en": "Xuzhou" },
                "铜山": { "id": "CHJS070100", "en": "Tongshan" },
                "丰县": { "id": "CHJS070200", "en": "Fengxian" },
                "沛县": { "id": "CHJS070300", "en": "Peixian" },
                "邳州": { "id": "CHJS070400", "en": "Pizhou" },
                "睢宁": { "id": "CHJS070500", "en": "Suining" },
                "新沂": { "id": "CHJS070600", "en": "Xinyi" }
            },
            "淮安": {
                "淮安": { "id": "CHJS080000", "en": "Huaian" },
                "金湖": { "id": "CHJS080100", "en": "Jinhu" },
                "盱眙": { "id": "CHJS080200", "en": "Xuyi" },
                "洪泽": { "id": "CHJS080300", "en": "Hongze" },
                "涟水": { "id": "CHJS080400", "en": "Lianshui" },
                "淮阴区": { "id": "CHJS080500", "en": "Huaiyinqu" },
                "淮安区": { "id": "CHJS080600", "en": "Huaianqu" }
            },
            "连云港": {
                "连云港": { "id": "CHJS090000", "en": "Lianyungang" },
                "东海": { "id": "CHJS090100", "en": "Donghai" },
                "赣榆": { "id": "CHJS090200", "en": "Ganyu" },
                "灌云": { "id": "CHJS090300", "en": "Guanyun" },
                "灌南": { "id": "CHJS090400", "en": "Guannan" }
            },
            "常州": {
                "常州": { "id": "CHJS100000", "en": "Changzhou" },
                "溧阳": { "id": "CHJS100100", "en": "Liyang" },
                "金坛": { "id": "CHJS100200", "en": "Jintan" },
                "武进": { "id": "CHJS100300", "en": "Wujin" }
            },
            "泰州": {
                "泰州": { "id": "CHJS110000", "en": "Taizhou" },
                "兴化": { "id": "CHJS110100", "en": "Xinghua" },
                "泰兴": { "id": "CHJS110200", "en": "Taixing" },
                "姜堰": { "id": "CHJS110300", "en": "Jiangyan" },
                "靖江": { "id": "CHJS110400", "en": "Jingjiang" }
            },
            "宿迁": {
                "宿迁": { "id": "CHJS120000", "en": "Suqian" },
                "沭阳": { "id": "CHJS120100", "en": "Shuyang" },
                "泗阳": { "id": "CHJS120200", "en": "Siyang" },
                "泗洪": { "id": "CHJS120300", "en": "Sihong" },
                "宿豫": { "id": "CHJS120400", "en": "Suyu" }
            }
        },
        "浙江": {
            "杭州": {
                "杭州": { "id": "CHZJ000000", "en": "Hangzhou" },
                "萧山": { "id": "CHZJ000100", "en": "Xiaoshan" },
                "桐庐": { "id": "CHZJ000200", "en": "Tonglu" },
                "淳安": { "id": "CHZJ000300", "en": "Chunan" },
                "建德": { "id": "CHZJ000400", "en": "Jiande" },
                "余杭": { "id": "CHZJ000500", "en": "Yuhang" },
                "临安": { "id": "CHZJ000600", "en": "Linan" },
                "富阳": { "id": "CHZJ000700", "en": "Fuyang" }
            },
            "湖州": {
                "湖州": { "id": "CHZJ010000", "en": "Huzhou" },
                "长兴": { "id": "CHZJ010100", "en": "Changxing" },
                "安吉": { "id": "CHZJ010200", "en": "Anji" },
                "德清": { "id": "CHZJ010300", "en": "Deqing" }
            },
            "嘉兴": {
                "嘉兴": { "id": "CHZJ020000", "en": "Jiaxing" },
                "嘉善": { "id": "CHZJ020100", "en": "Jiashan" },
                "海宁": { "id": "CHZJ020200", "en": "Haining" },
                "桐乡": { "id": "CHZJ020300", "en": "Tongxiang" },
                "平湖": { "id": "CHZJ020400", "en": "Pinghu" },
                "海盐": { "id": "CHZJ020500", "en": "Haiyan" }
            },
            "宁波": {
                "宁波": { "id": "CHZJ030000", "en": "Ningbo" },
                "慈溪": { "id": "CHZJ030100", "en": "Cixi" },
                "余姚": { "id": "CHZJ030200", "en": "Yuyao" },
                "奉化": { "id": "CHZJ030300", "en": "Fenghua" },
                "象山": { "id": "CHZJ030400", "en": "Xiangshan" },
                "宁海": { "id": "CHZJ030500", "en": "Ninghai" },
                "北仑": { "id": "CHZJ030600", "en": "Beilun" },
                "鄞州": { "id": "CHZJ030700", "en": "Yinzhou" },
                "镇海": { "id": "CHZJ030800", "en": "Zhenhai" }
            },
            "绍兴": {
                "绍兴": { "id": "CHZJ040000", "en": "Shaoxing" },
                "诸暨": { "id": "CHZJ040100", "en": "Zhuji" },
                "上虞": { "id": "CHZJ040200", "en": "Shangyu" },
                "新昌": { "id": "CHZJ040300", "en": "Xinchang" },
                "嵊州": { "id": "CHZJ040400", "en": "Shengzhou" }
            },
            "台州": {
                "台州": { "id": "CHZJ050000", "en": "Taizhou" },
                "玉环": { "id": "CHZJ050100", "en": "Yuhuan" },
                "三门": { "id": "CHZJ050200", "en": "Sanmen" },
                "天台": { "id": "CHZJ050300", "en": "Tiantai" },
                "仙居": { "id": "CHZJ050400", "en": "Xianju" },
                "温岭": { "id": "CHZJ050500", "en": "Wenling" },
                "洪家": { "id": "CHZJ050600", "en": "Hongjia" },
                "临海": { "id": "CHZJ050700", "en": "Linhai" },
                "椒江": { "id": "CHZJ050800", "en": "Jiaojiang" },
                "黄岩": { "id": "CHZJ050900", "en": "Huangyan" },
                "路桥": { "id": "CHZJ051000", "en": "Luqiao" }
            },
            "温州": {
                "温州": { "id": "CHZJ060000", "en": "Wenzhou" },
                "泰顺": { "id": "CHZJ060100", "en": "Taishun" },
                "文成": { "id": "CHZJ060200", "en": "Wencheng" },
                "平阳": { "id": "CHZJ060300", "en": "Pingyang" },
                "瑞安": { "id": "CHZJ060400", "en": "Ruian" },
                "洞头": { "id": "CHZJ060500", "en": "Dongtou" },
                "乐清": { "id": "CHZJ060600", "en": "Yueqing" },
                "永嘉": { "id": "CHZJ060700", "en": "Yongjia" },
                "苍南": { "id": "CHZJ060800", "en": "Cangnan" }
            },
            "丽水": {
                "丽水": { "id": "CHZJ070000", "en": "Lishui" },
                "遂昌": { "id": "CHZJ070100", "en": "Suichang" },
                "龙泉": { "id": "CHZJ070200", "en": "Longquan" },
                "缙云": { "id": "CHZJ070300", "en": "Jinyun" },
                "青田": { "id": "CHZJ070400", "en": "Qingtian" },
                "云和": { "id": "CHZJ070500", "en": "Yunhe" },
                "庆元": { "id": "CHZJ070600", "en": "Qingyuan" },
                "松阳": { "id": "CHZJ070700", "en": "Songyang" },
                "景宁": { "id": "CHZJ070800", "en": "Jingning" }
            },
            "金华": {
                "金华": { "id": "CHZJ080000", "en": "Jinhua" },
                "浦江": { "id": "CHZJ080100", "en": "Pujiang" },
                "兰溪": { "id": "CHZJ080200", "en": "Lanxi" },
                "义乌": { "id": "CHZJ080300", "en": "Yiwu" },
                "东阳": { "id": "CHZJ080400", "en": "Dongyang" },
                "武义": { "id": "CHZJ080500", "en": "Wuyi" },
                "永康": { "id": "CHZJ080600", "en": "Yongkang" },
                "磐安": { "id": "CHZJ080700", "en": "Panan" }
            },
            "衢州": {
                "衢州": { "id": "CHZJ090000", "en": "Quzhou" },
                "常山": { "id": "CHZJ090100", "en": "Changshan" },
                "开化": { "id": "CHZJ090200", "en": "Kaihua" },
                "龙游": { "id": "CHZJ090300", "en": "Longyou" },
                "江山": { "id": "CHZJ090400", "en": "Jiangshan" },
                "衢江": { "id": "CHZJ090500", "en": "Qujiang" }
            },
            "舟山": {
                "舟山": { "id": "CHZJ100000", "en": "Zhoushan" },
                "嵊泗": { "id": "CHZJ100100", "en": "Shengsi" },
                "岱山": { "id": "CHZJ100200", "en": "Daishan" },
                "普陀": { "id": "CHZJ100300", "en": "Putuo" },
                "定海": { "id": "CHZJ100400", "en": "Dinghai" }
            }
        },
        "福建": {
            "福州": {
                "福州": { "id": "CHFJ000000", "en": "Fuzhou" },
                "闽清": { "id": "CHFJ000100", "en": "Minqing" },
                "闽侯": { "id": "CHFJ000200", "en": "Minhou" },
                "罗源": { "id": "CHFJ000300", "en": "Luoyuan" },
                "连江": { "id": "CHFJ000400", "en": "Lianjiang" },
                "永泰": { "id": "CHFJ000500", "en": "Yongtai" },
                "平潭": { "id": "CHFJ000600", "en": "Pingtan" },
                "长乐": { "id": "CHFJ000700", "en": "Changle" },
                "福清": { "id": "CHFJ000800", "en": "Fuqing" },
                "钓鱼岛": { "id": "CHFJ000900", "en": "Diaoyudao" }
            },
            "厦门": {
                "厦门": { "id": "CHFJ010000", "en": "Xiamen" },
                "同安": { "id": "CHFJ010100", "en": "Tongan" }
            },
            "宁德": {
                "宁德": { "id": "CHFJ020000", "en": "Ningde" },
                "古田": { "id": "CHFJ020100", "en": "Gutian" },
                "霞浦": { "id": "CHFJ020200", "en": "Xiapu" },
                "寿宁": { "id": "CHFJ020300", "en": "Shouning" },
                "周宁": { "id": "CHFJ020400", "en": "Zhouning" },
                "福安": { "id": "CHFJ020500", "en": "Fuan" },
                "柘荣": { "id": "CHFJ020600", "en": "Zherong" },
                "福鼎": { "id": "CHFJ020700", "en": "Fuding" },
                "屏南": { "id": "CHFJ020800", "en": "Pingnan" }
            },
            "莆田": {
                "莆田": { "id": "CHFJ030000", "en": "Putian" },
                "仙游": { "id": "CHFJ030100", "en": "Xianyou" },
                "秀屿港": { "id": "CHFJ030200", "en": "Xiuyugang" },
                "涵江": { "id": "CHFJ030300", "en": "Hanjiang" },
                "秀屿": { "id": "CHFJ030400", "en": "Xiuyu" },
                "荔城": { "id": "CHFJ030500", "en": "Licheng" },
                "城厢": { "id": "CHFJ030600", "en": "Chengxiang" }
            },
            "泉州": {
                "泉州": { "id": "CHFJ040000", "en": "Quanzhou" },
                "安溪": { "id": "CHFJ040100", "en": "Anxi" },
                "永春": { "id": "CHFJ040200", "en": "Yongchun" },
                "德化": { "id": "CHFJ040300", "en": "Dehua" },
                "南安": { "id": "CHFJ040400", "en": "Nanan" },
                "崇武": { "id": "CHFJ040500", "en": "Chongwu" },
                "惠安": { "id": "CHFJ040600", "en": "Huian" },
                "晋江": { "id": "CHFJ040700", "en": "Jinjiang" },
                "石狮": { "id": "CHFJ040800", "en": "Shishi" }
            },
            "漳州": {
                "漳州": { "id": "CHFJ050000", "en": "Zhangzhou" },
                "长泰": { "id": "CHFJ050100", "en": "Changtai" },
                "南靖": { "id": "CHFJ050200", "en": "Nanjing" },
                "平和": { "id": "CHFJ050300", "en": "Pinghe" },
                "龙海": { "id": "CHFJ050400", "en": "Longhai" },
                "漳浦": { "id": "CHFJ050500", "en": "Zhangpu" },
                "诏安": { "id": "CHFJ050600", "en": "Zhaoan" },
                "东山": { "id": "CHFJ050700", "en": "Dongshan" },
                "云霄": { "id": "CHFJ050800", "en": "Yunxiao" },
                "华安": { "id": "CHFJ050900", "en": "Huaan" }
            },
            "龙岩": {
                "龙岩": { "id": "CHFJ060000", "en": "Longyan" },
                "长汀": { "id": "CHFJ060100", "en": "Changting" },
                "连城": { "id": "CHFJ060200", "en": "Liancheng" },
                "武平": { "id": "CHFJ060300", "en": "Wuping" },
                "上杭": { "id": "CHFJ060400", "en": "Shanghang" },
                "永定": { "id": "CHFJ060500", "en": "Yongding" },
                "漳平": { "id": "CHFJ060600", "en": "Zhangping" }
            },
            "三明": {
                "三明": { "id": "CHFJ070000", "en": "Sanming" },
                "宁化": { "id": "CHFJ070100", "en": "Ninghua" },
                "清流": { "id": "CHFJ070200", "en": "Qingliu" },
                "泰宁": { "id": "CHFJ070300", "en": "Taining" },
                "将乐": { "id": "CHFJ070400", "en": "Jiangle" },
                "建宁": { "id": "CHFJ070500", "en": "Jianning" },
                "明溪": { "id": "CHFJ070600", "en": "Mingxi" },
                "沙县": { "id": "CHFJ070700", "en": "Shaxian" },
                "尤溪": { "id": "CHFJ070800", "en": "Youxi" },
                "永安": { "id": "CHFJ070900", "en": "Yongan" },
                "大田": { "id": "CHFJ071000", "en": "Datian" }
            },
            "南平": {
                "南平": { "id": "CHFJ080000", "en": "Nanping" },
                "顺昌": { "id": "CHFJ080100", "en": "Shunchang" },
                "光泽": { "id": "CHFJ080200", "en": "Guangze" },
                "邵武": { "id": "CHFJ080300", "en": "Shaowu" },
                "武夷山": { "id": "CHFJ080400", "en": "Wuyishan" },
                "浦城": { "id": "CHFJ080500", "en": "Pucheng" },
                "建阳": { "id": "CHFJ080600", "en": "Jianyang" },
                "松溪": { "id": "CHFJ080700", "en": "Songxi" },
                "政和": { "id": "CHFJ080800", "en": "Zhenghe" },
                "建瓯": { "id": "CHFJ080900", "en": "Jianou" }
            }
        },
        "江西": {
            "南昌": {
                "南昌": { "id": "CHJX000000", "en": "Nanchang" },
                "新建": { "id": "CHJX000100", "en": "Xinjian" },
                "南昌县": { "id": "CHJX000200", "en": "Nanchangxian" },
                "安义": { "id": "CHJX000300", "en": "Anyi" },
                "进贤": { "id": "CHJX000400", "en": "Jinxian" }
            },
            "九江": {
                "九江": { "id": "CHJX010000", "en": "Jiujiang" },
                "瑞昌": { "id": "CHJX010100", "en": "Ruichang" },
                "庐山": { "id": "CHJX010200", "en": "Lushan" },
                "武宁": { "id": "CHJX010300", "en": "Wuning" },
                "德安": { "id": "CHJX010400", "en": "Dean" },
                "永修": { "id": "CHJX010500", "en": "Yongxiu" },
                "湖口": { "id": "CHJX010600", "en": "Hukou" },
                "彭泽": { "id": "CHJX010700", "en": "Pengze" },
                "星子": { "id": "CHJX010800", "en": "Xingzi" },
                "都昌": { "id": "CHJX010900", "en": "Duchang" },
                "修水": { "id": "CHJX011000", "en": "Xiushui" }
            },
            "上饶": {
                "上饶": { "id": "CHJX020000", "en": "Shangrao" },
                "鄱阳": { "id": "CHJX020100", "en": "Poyang" },
                "婺源": { "id": "CHJX020200", "en": "Wuyuan" },
                "余干": { "id": "CHJX020300", "en": "Yugan" },
                "万年": { "id": "CHJX020400", "en": "Wannian" },
                "德兴": { "id": "CHJX020500", "en": "Dexing" },
                "上饶县": { "id": "CHJX020600", "en": "Shangraoxian" },
                "弋阳": { "id": "CHJX020700", "en": "Yiyang" },
                "横峰": { "id": "CHJX020800", "en": "Hengfeng" },
                "铅山": { "id": "CHJX020900", "en": "Yanshan" },
                "玉山": { "id": "CHJX021000", "en": "Yushan" },
                "广丰": { "id": "CHJX021100", "en": "Guangfeng" }
            },
            "抚州": {
                "抚州": { "id": "CHJX030000", "en": "Fuzhou" },
                "广昌": { "id": "CHJX030100", "en": "Guangchang" },
                "乐安": { "id": "CHJX030200", "en": "Anle" },
                "崇仁": { "id": "CHJX030300", "en": "Chongren" },
                "金溪": { "id": "CHJX030400", "en": "Jinxi" },
                "资溪": { "id": "CHJX030500", "en": "Zixi" },
                "宜黄": { "id": "CHJX030600", "en": "Yihuang" },
                "南城": { "id": "CHJX030700", "en": "Nancheng" },
                "南丰": { "id": "CHJX030800", "en": "Nanfeng" },
                "黎川": { "id": "CHJX030900", "en": "Lichuan" },
                "东乡": { "id": "CHJX031000", "en": "Dongxiang" }
            },
            "宜春": {
                "宜春": { "id": "CHJX040000", "en": "Yichun" },
                "铜鼓": { "id": "CHJX040100", "en": "Tonggu" },
                "宜丰": { "id": "CHJX040200", "en": "Yifeng" },
                "万载": { "id": "CHJX040300", "en": "Wanzai" },
                "上高": { "id": "CHJX040400", "en": "Shanggao" },
                "靖安": { "id": "CHJX040500", "en": "Jingan" },
                "奉新": { "id": "CHJX040600", "en": "Fengxin" },
                "高安": { "id": "CHJX040700", "en": "Gaoan" },
                "樟树": { "id": "CHJX040800", "en": "Zhangshu" },
                "丰城": { "id": "CHJX040900", "en": "Fengcheng" }
            },
            "吉安": {
                "吉安": { "id": "CHJX050000", "en": "Jian" },
                "吉安县": { "id": "CHJX050100", "en": "Jianxian" },
                "吉水": { "id": "CHJX050200", "en": "Jishui" },
                "新干": { "id": "CHJX050300", "en": "Xingan" },
                "峡江": { "id": "CHJX050400", "en": "Xiajiang" },
                "永丰": { "id": "CHJX050500", "en": "Yongfeng" },
                "永新": { "id": "CHJX050600", "en": "Yongxin" },
                "井冈山": { "id": "CHJX050700", "en": "Jinggangshan" },
                "万安": { "id": "CHJX050800", "en": "Wanan" },
                "遂川": { "id": "CHJX050900", "en": "Suichuan" },
                "泰和": { "id": "CHJX051000", "en": "Taihe" },
                "安福": { "id": "CHJX051100", "en": "Anfu" },
                "宁冈": { "id": "CHJX051200", "en": "Ninggang" }
            },
            "赣州": {
                "赣州": { "id": "CHJX060000", "en": "Ganzhou" },
                "崇义": { "id": "CHJX060100", "en": "Chongyi" },
                "上犹": { "id": "CHJX060200", "en": "Shangyou" },
                "南康": { "id": "CHJX060300", "en": "Nankang" },
                "大余": { "id": "CHJX060400", "en": "Dayu" },
                "信丰": { "id": "CHJX060500", "en": "Xinfeng" },
                "宁都": { "id": "CHJX060600", "en": "Ningdu" },
                "石城": { "id": "CHJX060700", "en": "Shicheng" },
                "瑞金": { "id": "CHJX060800", "en": "Ruijin" },
                "于都": { "id": "CHJX060900", "en": "Yudu" },
                "会昌": { "id": "CHJX061000", "en": "Huichang" },
                "安远": { "id": "CHJX061100", "en": "Anyuan" },
                "全南": { "id": "CHJX061200", "en": "Quannan" },
                "龙南": { "id": "CHJX061300", "en": "Longnan" },
                "定南": { "id": "CHJX061400", "en": "Dingnan" },
                "寻乌": { "id": "CHJX061500", "en": "Xunwu" },
                "兴国": { "id": "CHJX061600", "en": "Xingguo" },
                "赣县": { "id": "CHJX061700", "en": "Ganxian" }
            },
            "景德镇": {
                "景德镇": { "id": "CHJX070000", "en": "Jingdezhen" },
                "乐平": { "id": "CHJX070100", "en": "Leping" },
                "浮梁": { "id": "CHJX070200", "en": "Fuliang" }
            },
            "萍乡": {
                "萍乡": { "id": "CHJX080000", "en": "Pingxiang" },
                "莲花": { "id": "CHJX080100", "en": "Lianhua" },
                "上栗": { "id": "CHJX080200", "en": "Shangli" },
                "安源": { "id": "CHJX080300", "en": "Anyuan" },
                "芦溪": { "id": "CHJX080400", "en": "Luxi" },
                "湘东": { "id": "CHJX080500", "en": "Xiangdong" }
            },
            "新余": { "新余": { "id": "CHJX090000", "en": "Xinyu" }, "分宜": { "id": "CHJX090100", "en": "Fenyi" } },
            "鹰潭": {
                "鹰潭": { "id": "CHJX100000", "en": "Yingtan" },
                "余江": { "id": "CHJX100100", "en": "Yujiang" },
                "贵溪": { "id": "CHJX100200", "en": "Guixi" }
            }
        },
        "安徽": {
            "合肥": {
                "合肥": { "id": "CHAH000000", "en": "Hefei" },
                "长丰": { "id": "CHAH000100", "en": "Changfeng" },
                "肥东": { "id": "CHAH000200", "en": "Feidong" },
                "肥西": { "id": "CHAH000300", "en": "Feixi" },
                "巢湖": { "id": "CHAH150000", "en": "Chaohu" },
                "庐江": { "id": "CHAH150100", "en": "Lujiang" }
            },
            "蚌埠": {
                "蚌埠": { "id": "CHAH010000", "en": "Bengbu" },
                "怀远": { "id": "CHAH010100", "en": "Huaiyuan" },
                "固镇": { "id": "CHAH010200", "en": "Guzhen" },
                "五河": { "id": "CHAH010300", "en": "Wuhe" }
            },
            "芜湖": {
                "芜湖": { "id": "CHAH020000", "en": "Wuhu" },
                "繁昌": { "id": "CHAH020100", "en": "Fanchang" },
                "芜湖县": { "id": "CHAH020200", "en": "Wuhuxian" },
                "南陵": { "id": "CHAH020300", "en": "Nanling" },
                "无为": { "id": "CHAH150200", "en": "Wuwei" }
            },
            "淮南": {
                "淮南": { "id": "CHAH030000", "en": "Huainan" },
                "凤台": { "id": "CHAH030100", "en": "Fengtai" },
                "潘集": { "id": "CHAH030200", "en": "Panji" }
            },
            "马鞍山": {
                "马鞍山": { "id": "CHAH040000", "en": "Maanshan" },
                "当涂": { "id": "CHAH040100", "en": "Dangtu" },
                "含山": { "id": "CHAH150300", "en": "Hanshan" },
                "和县": { "id": "CHAH150400", "en": "Hexian" }
            },
            "安庆": {
                "安庆": { "id": "CHAH050000", "en": "Anqing" },
                "枞阳": { "id": "CHAH050100", "en": "Zongyang" },
                "太湖": { "id": "CHAH050200", "en": "Taihu" },
                "潜山": { "id": "CHAH050300", "en": "Qianshan" },
                "怀宁": { "id": "CHAH050400", "en": "Huaining" },
                "宿松": { "id": "CHAH050500", "en": "Susong" },
                "望江": { "id": "CHAH050600", "en": "Wangjiang" },
                "岳西": { "id": "CHAH050700", "en": "Yuexi" },
                "桐城": { "id": "CHAH050800", "en": "Tongcheng" }
            },
            "宿州": {
                "宿州": { "id": "CHAH060000", "en": "Suzhou" },
                "砀山": { "id": "CHAH060100", "en": "Dangshan" },
                "灵璧": { "id": "CHAH060200", "en": "Lingbi" },
                "泗县": { "id": "CHAH060300", "en": "Sixian" },
                "萧县": { "id": "CHAH060400", "en": "Xiaoxian" }
            },
            "阜阳": {
                "阜阳": { "id": "CHAH070000", "en": "Fuyang" },
                "阜南": { "id": "CHAH070100", "en": "Funan" },
                "颍上": { "id": "CHAH070200", "en": "Yingshang" },
                "临泉": { "id": "CHAH070300", "en": "Linquan" },
                "界首": { "id": "CHAH070400", "en": "Jieshou" },
                "太和": { "id": "CHAH070500", "en": "Taihe" }
            },
            "亳州": {
                "亳州": { "id": "CHAH080000", "en": "Bozhou" },
                "涡阳": { "id": "CHAH080100", "en": "Guoyang" },
                "利辛": { "id": "CHAH080200", "en": "Lixin" },
                "蒙城": { "id": "CHAH080300", "en": "Mengcheng" }
            },
            "黄山": {
                "黄山": { "id": "CHAH090000", "en": "Huangshan" },
                "黄山区": { "id": "CHAH090100", "en": "Huangshanqu" },
                "屯溪": { "id": "CHAH090200", "en": "Tunxi" },
                "祁门": { "id": "CHAH090300", "en": "Qimen" },
                "黟县": { "id": "CHAH090400", "en": "Yixian" },
                "歙县": { "id": "CHAH090500", "en": "Shexian" },
                "休宁": { "id": "CHAH090600", "en": "Xiuning" },
                "黄山风景区": { "id": "CHAH090700", "en": "Huangshanfengjingqu" }
            },
            "滁州": {
                "滁州": { "id": "CHAH100000", "en": "Chuzhou" },
                "凤阳": { "id": "CHAH100100", "en": "Fengyang" },
                "明光": { "id": "CHAH100200", "en": "Mingguang" },
                "定远": { "id": "CHAH100300", "en": "Dingyuan" },
                "全椒": { "id": "CHAH100400", "en": "Quanjiao" },
                "来安": { "id": "CHAH100500", "en": "Laian" },
                "天长": { "id": "CHAH100600", "en": "Tianchang" }
            },
            "淮北": {
                "淮北": { "id": "CHAH110000", "en": "Huaibei" },
                "濉溪": { "id": "CHAH110100", "en": "Suixi" }
            },
            "铜陵": { "铜陵": { "id": "CHAH120000", "en": "Tongling" } },
            "宣城": {
                "宣城": { "id": "CHAH130000", "en": "Xuancheng" },
                "泾县": { "id": "CHAH130100", "en": "Jingxian" },
                "旌德": { "id": "CHAH130200", "en": "Jingde" },
                "宁国": { "id": "CHAH130300", "en": "Ningguo" },
                "绩溪": { "id": "CHAH130400", "en": "Jixi" },
                "广德": { "id": "CHAH130500", "en": "Guangde" },
                "郎溪": { "id": "CHAH130600", "en": "Langxi" }
            },
            "六安": {
                "六安": { "id": "CHAH140000", "en": "Luan" },
                "霍邱": { "id": "CHAH140100", "en": "Huoqiu" },
                "寿县": { "id": "CHAH140200", "en": "Shouxian" },
                "金寨": { "id": "CHAH140300", "en": "Jinzhai" },
                "霍山": { "id": "CHAH140400", "en": "Huoshan" },
                "舒城": { "id": "CHAH140500", "en": "Shucheng" }
            },
            "池州": {
                "池州": { "id": "CHAH160000", "en": "Chizhou" },
                "东至": { "id": "CHAH160100", "en": "Dongzhi" },
                "青阳": { "id": "CHAH160200", "en": "Qingyang" },
                "九华山": { "id": "CHAH160300", "en": "Jiuhuashan" },
                "石台": { "id": "CHAH160400", "en": "Shitai" }
            }
        },
        "湖北": {
            "武汉": {
                "武汉": { "id": "CHHB000000", "en": "Wuhan" },
                "蔡甸": { "id": "CHHB000100", "en": "Caidian" },
                "黄陂": { "id": "CHHB000200", "en": "Huangpi" },
                "新洲": { "id": "CHHB000300", "en": "Xinzhou" },
                "江夏": { "id": "CHHB000400", "en": "Jiangxia" },
                "东西湖": { "id": "CHHB000500", "en": "Dongxihu" }
            },
            "襄阳": {
                "襄阳": { "id": "CHHB010000", "en": "Xiangyang" },
                "襄州": { "id": "CHHB010100", "en": "Xiangzhou" },
                "保康": { "id": "CHHB010200", "en": "Baokang" },
                "南漳": { "id": "CHHB010300", "en": "Nanzhang" },
                "宜城": { "id": "CHHB010400", "en": "Yicheng" },
                "老河口": { "id": "CHHB010500", "en": "Laohekou" },
                "谷城": { "id": "CHHB010600", "en": "Gucheng" },
                "枣阳": { "id": "CHHB010700", "en": "Zaoyang" }
            },
            "鄂州": {
                "鄂州": { "id": "CHHB020000", "en": "Ezhou" },
                "梁子湖": { "id": "CHHB020100", "en": "Liangzihu" }
            },
            "孝感": {
                "孝感": { "id": "CHHB030000", "en": "Xiaogan" },
                "安陆": { "id": "CHHB030100", "en": "Anlu" },
                "云梦": { "id": "CHHB030200", "en": "Yunmeng" },
                "大悟": { "id": "CHHB030300", "en": "Dawu" },
                "应城": { "id": "CHHB030400", "en": "Yingcheng" },
                "汉川": { "id": "CHHB030500", "en": "Hanchuan" },
                "孝昌": { "id": "CHHB030600", "en": "Xiaochang" }
            },
            "黄冈": {
                "黄冈": { "id": "CHHB040000", "en": "Huanggang" },
                "红安": { "id": "CHHB040100", "en": "Hongan" },
                "麻城": { "id": "CHHB040200", "en": "Macheng" },
                "罗田": { "id": "CHHB040300", "en": "Luotian" },
                "英山": { "id": "CHHB040400", "en": "Yingshan" },
                "浠水": { "id": "CHHB040500", "en": "Xishui" },
                "蕲春": { "id": "CHHB040600", "en": "Qichun" },
                "黄梅": { "id": "CHHB040700", "en": "Huangmei" },
                "武穴": { "id": "CHHB040800", "en": "Wuxue" },
                "团风": { "id": "CHHB040900", "en": "Tuanfeng" }
            },
            "黄石": {
                "黄石": { "id": "CHHB050000", "en": "Huangshi" },
                "大冶": { "id": "CHHB050100", "en": "Daye" },
                "阳新": { "id": "CHHB050200", "en": "Yangxin" },
                "铁山": { "id": "CHHB050300", "en": "Tieshan" },
                "下陆": { "id": "CHHB050400", "en": "Xialu" },
                "西塞山": { "id": "CHHB050500", "en": "Xisaishan" }
            },
            "咸宁": {
                "咸宁": { "id": "CHHB060000", "en": "Xianning" },
                "赤壁": { "id": "CHHB060100", "en": "Chibi" },
                "嘉鱼": { "id": "CHHB060200", "en": "Jiayu" },
                "崇阳": { "id": "CHHB060300", "en": "Chongyang" },
                "通城": { "id": "CHHB060400", "en": "Tongcheng" },
                "通山": { "id": "CHHB060500", "en": "Tongshan" }
            },
            "荆州": {
                "荆州": { "id": "CHHB070000", "en": "Jingzhou" },
                "江陵": { "id": "CHHB070100", "en": "Jiangling" },
                "公安": { "id": "CHHB070200", "en": "Gongan" },
                "石首": { "id": "CHHB070300", "en": "Shishou" },
                "监利": { "id": "CHHB070400", "en": "Jianli" },
                "洪湖": { "id": "CHHB070500", "en": "Honghu" },
                "松滋": { "id": "CHHB070600", "en": "Songzi" },
                "沙市": { "id": "CHHB070700", "en": "Shashi" }
            },
            "宜昌": {
                "宜昌": { "id": "CHHB080000", "en": "Yichang" },
                "远安": { "id": "CHHB080100", "en": "Yuanan" },
                "秭归": { "id": "CHHB080200", "en": "Zigui" },
                "兴山": { "id": "CHHB080300", "en": "Xingshan" },
                "五峰": { "id": "CHHB080400", "en": "Wufeng" },
                "当阳": { "id": "CHHB080500", "en": "Dangyang" },
                "长阳": { "id": "CHHB080600", "en": "Changyang" },
                "宜都": { "id": "CHHB080700", "en": "Yidu" },
                "枝江": { "id": "CHHB080800", "en": "Zhijiang" },
                "三峡": { "id": "CHHB080900", "en": "Sanxia" },
                "夷陵": { "id": "CHHB081000", "en": "Yiling" }
            },
            "恩施": {
                "恩施": { "id": "CHHB090000", "en": "Enshi" },
                "利川": { "id": "CHHB090100", "en": "Lichuan" },
                "建始": { "id": "CHHB090200", "en": "Jianshi" },
                "咸丰": { "id": "CHHB090300", "en": "Xianfeng" },
                "宣恩": { "id": "CHHB090400", "en": "Xuanen" },
                "鹤峰": { "id": "CHHB090500", "en": "Hefeng" },
                "来凤": { "id": "CHHB090600", "en": "Laifeng" },
                "巴东": { "id": "CHHB090700", "en": "Badong" }
            },
            "十堰": {
                "十堰": { "id": "CHHB100000", "en": "Shiyan" },
                "竹溪": { "id": "CHHB100100", "en": "Zhuxi" },
                "郧西": { "id": "CHHB100200", "en": "Yunxi" },
                "郧县": { "id": "CHHB100300", "en": "Yunxian" },
                "竹山": { "id": "CHHB100400", "en": "Zhushan" },
                "房县": { "id": "CHHB100500", "en": "Fangxian" },
                "丹江口": { "id": "CHHB100600", "en": "Danjiangkou" },
                "茅箭": { "id": "CHHB100700", "en": "Maojian" },
                "张湾": { "id": "CHHB100800", "en": "Zhangwan" }
            },
            "神农架": { "神农架": { "id": "CHHB110000", "en": "Shennongjia" } },
            "随州": {
                "随州": { "id": "CHHB120000", "en": "Suizhou" },
                "广水": { "id": "CHHB120100", "en": "Guangshui" }
            },
            "荆门": {
                "荆门": { "id": "CHHB130000", "en": "Jingmen" },
                "钟祥": { "id": "CHHB130100", "en": "Zhongxiang" },
                "京山": { "id": "CHHB130200", "en": "Jingshan" },
                "掇刀": { "id": "CHHB130300", "en": "Duodao" },
                "沙洋": { "id": "CHHB130400", "en": "Shayang" }
            },
            "天门": { "天门": { "id": "CHHB140000", "en": "Tianmen" } },
            "仙桃": { "仙桃": { "id": "CHHB150000", "en": "Xiantao" } },
            "潜江": { "潜江": { "id": "CHHB160000", "en": "Qianjiang" } }
        },
        "湖南": {
            "长沙": {
                "长沙": { "id": "CHHN000000", "en": "Changsha" },
                "宁乡": { "id": "CHHN000100", "en": "Ningxiang" },
                "浏阳": { "id": "CHHN000200", "en": "Liuyang" },
                "马坡岭": { "id": "CHHN000300", "en": "Mapoling" },
                "望城": { "id": "CHHN000400", "en": "Wangcheng" }
            },
            "湘潭": {
                "湘潭": { "id": "CHHN010000", "en": "Xiangtan" },
                "韶山": { "id": "CHHN010100", "en": "Shaoshan" },
                "湘乡": { "id": "CHHN010200", "en": "Xiangxiang" }
            },
            "株洲": {
                "株洲": { "id": "CHHN020000", "en": "Zhuzhou" },
                "攸县": { "id": "CHHN020100", "en": "Youxian" },
                "醴陵": { "id": "CHHN020200", "en": "Liling" },
                "茶陵": { "id": "CHHN020300", "en": "Chaling" },
                "炎陵": { "id": "CHHN020400", "en": "Yanling" }
            },
            "衡阳": {
                "衡阳": { "id": "CHHN030000", "en": "Hengyang" },
                "衡山": { "id": "CHHN030100", "en": "Hengshan" },
                "衡东": { "id": "CHHN030200", "en": "Hengdong" },
                "祁东": { "id": "CHHN030300", "en": "Qidong" },
                "衡阳县": { "id": "CHHN030400", "en": "Hengyangxian" },
                "常宁": { "id": "CHHN030500", "en": "Changning" },
                "衡南": { "id": "CHHN030600", "en": "Hengnan" },
                "耒阳": { "id": "CHHN030700", "en": "Leiyang" },
                "南岳": { "id": "CHHN030800", "en": "Nanyue" }
            },
            "郴州": {
                "郴州": { "id": "CHHN040000", "en": "Chenzhou" },
                "桂阳": { "id": "CHHN040100", "en": "Guiyang" },
                "嘉禾": { "id": "CHHN040200", "en": "Jiahe" },
                "宜章": { "id": "CHHN040300", "en": "Yizhang" },
                "临武": { "id": "CHHN040400", "en": "Linwu" },
                "资兴": { "id": "CHHN040500", "en": "Zixing" },
                "汝城": { "id": "CHHN040600", "en": "Rucheng" },
                "安仁": { "id": "CHHN040700", "en": "Anren" },
                "永兴": { "id": "CHHN040800", "en": "Yongxing" },
                "桂东": { "id": "CHHN040900", "en": "Guidong" },
                "苏仙": { "id": "CHHN041000", "en": "Suxian" }
            },
            "常德": {
                "常德": { "id": "CHHN050000", "en": "Changde" },
                "安乡": { "id": "CHHN050100", "en": "Anxiang" },
                "桃源": { "id": "CHHN050200", "en": "Taoyuan" },
                "汉寿": { "id": "CHHN050300", "en": "Hanshou" },
                "澧县": { "id": "CHHN050400", "en": "Lixian" },
                "临澧": { "id": "CHHN050500", "en": "Linli" },
                "石门": { "id": "CHHN050600", "en": "Shimen" },
                "津市": { "id": "CHHN050700", "en": "Jinshi" }
            },
            "益阳": {
                "益阳": { "id": "CHHN060000", "en": "Yiyang" },
                "赫山区": { "id": "CHHN060100", "en": "Heshanqu" },
                "南县": { "id": "CHHN060200", "en": "Nanxian" },
                "桃江": { "id": "CHHN060300", "en": "Taojiang" },
                "安化": { "id": "CHHN060400", "en": "Anhua" },
                "沅江": { "id": "CHHN060500", "en": "Yuanjiang" }
            },
            "娄底": {
                "娄底": { "id": "CHHN070000", "en": "Loudi" },
                "双峰": { "id": "CHHN070100", "en": "Shuangfeng" },
                "冷水江": { "id": "CHHN070200", "en": "Lengshuijiang" },
                "新化": { "id": "CHHN070300", "en": "Xinhua" },
                "涟源": { "id": "CHHN070400", "en": "Lianyuan" }
            },
            "邵阳": {
                "邵阳": { "id": "CHHN080000", "en": "Shaoyang" },
                "隆回": { "id": "CHHN080100", "en": "Longhui" },
                "洞口": { "id": "CHHN080200", "en": "Dongkou" },
                "新邵": { "id": "CHHN080300", "en": "Xinshao" },
                "邵东": { "id": "CHHN080400", "en": "Shaodong" },
                "绥宁": { "id": "CHHN080500", "en": "Suining" },
                "新宁": { "id": "CHHN080600", "en": "Xinning" },
                "武冈": { "id": "CHHN080700", "en": "Wugang" },
                "城步": { "id": "CHHN080800", "en": "Chengbu" },
                "邵阳县": { "id": "CHHN080900", "en": "Shaoyangxian" }
            },
            "岳阳": {
                "岳阳": { "id": "CHHN090000", "en": "Yueyang" },
                "华容": { "id": "CHHN090100", "en": "Huarong" },
                "湘阴": { "id": "CHHN090200", "en": "Xiangyin" },
                "汨罗": { "id": "CHHN090300", "en": "Miluo" },
                "平江": { "id": "CHHN090400", "en": "Pingjiang" },
                "临湘": { "id": "CHHN090500", "en": "Linxiang" }
            },
            "张家界": {
                "张家界": { "id": "CHHN100000", "en": "Zhangjiajie" },
                "桑植": { "id": "CHHN100100", "en": "Sangzhi" },
                "慈利": { "id": "CHHN100200", "en": "Cili" },
                "武陵源": { "id": "CHHN100300", "en": "Wulingyuan" }
            },
            "怀化": {
                "怀化": { "id": "CHHN110000", "en": "Huaihua" },
                "沅陵": { "id": "CHHN110100", "en": "Yuanling" },
                "辰溪": { "id": "CHHN110200", "en": "Chenxi" },
                "靖州": { "id": "CHHN110300", "en": "Jingzhou" },
                "会同": { "id": "CHHN110400", "en": "Huitong" },
                "通道": { "id": "CHHN110500", "en": "Tongdao" },
                "麻阳": { "id": "CHHN110600", "en": "Mayang" },
                "新晃": { "id": "CHHN110700", "en": "Xinhuang" },
                "芷江": { "id": "CHHN110800", "en": "Zhijiang" },
                "溆浦": { "id": "CHHN110900", "en": "Xupu" },
                "中方": { "id": "CHHN111000", "en": "Zhongfang" },
                "洪江": { "id": "CHHN111100", "en": "Hongjiang" }
            },
            "永州": {
                "永州": { "id": "CHHN120000", "en": "Yongzhou" },
                "祁阳": { "id": "CHHN120100", "en": "Qiyang" },
                "东安": { "id": "CHHN120200", "en": "Dongan" },
                "双牌": { "id": "CHHN120300", "en": "Shuangpai" },
                "道县": { "id": "CHHN120400", "en": "Daoxian" },
                "宁远": { "id": "CHHN120500", "en": "Ningyuan" },
                "江永": { "id": "CHHN120600", "en": "Jiangyong" },
                "蓝山": { "id": "CHHN120700", "en": "Lanshan" },
                "新田": { "id": "CHHN120800", "en": "Xintian" },
                "江华": { "id": "CHHN120900", "en": "Jianghua" },
                "冷水滩": { "id": "CHHN121000", "en": "Lengshuitan" }
            },
            "湘西": {
                "吉首": { "id": "CHHN130000", "en": "Jishou" },
                "保靖": { "id": "CHHN130100", "en": "Baojing" },
                "永顺": { "id": "CHHN130200", "en": "Yongshun" },
                "古丈": { "id": "CHHN130300", "en": "Guzhang" },
                "凤凰": { "id": "CHHN130400", "en": "Fenghuang" },
                "泸溪": { "id": "CHHN130500", "en": "Luxi" },
                "龙山": { "id": "CHHN130600", "en": "Longshan" },
                "花垣": { "id": "CHHN130700", "en": "Huayuan" }
            }
        },
        "广东": {
            "广州": {
                "广州": { "id": "CHGD000000", "en": "Guangzhou" },
                "番禺": { "id": "CHGD000100", "en": "Panyu" },
                "从化": { "id": "CHGD000200", "en": "Conghua" },
                "增城": { "id": "CHGD000300", "en": "Zengcheng" },
                "花都": { "id": "CHGD000400", "en": "Huadu" }
            },
            "韶关": {
                "韶关": { "id": "CHGD010000", "en": "Shaoguan" },
                "乳源": { "id": "CHGD010100", "en": "Ruyuan" },
                "始兴": { "id": "CHGD010200", "en": "Shixing" },
                "翁源": { "id": "CHGD010300", "en": "Wengyuan" },
                "乐昌": { "id": "CHGD010400", "en": "Lechang" },
                "仁化": { "id": "CHGD010500", "en": "Renhua" },
                "南雄": { "id": "CHGD010600", "en": "Nanxiong" },
                "新丰": { "id": "CHGD010700", "en": "Xinfeng" },
                "曲江": { "id": "CHGD010800", "en": "Qujiang" },
                "浈江": { "id": "CHGD010900", "en": "Zhenjiang" },
                "武江": { "id": "CHGD011000", "en": "Wujiang" }
            },
            "惠州": {
                "惠州": { "id": "CHGD020000", "en": "Huizhou" },
                "博罗": { "id": "CHGD020100", "en": "Boluo" },
                "惠阳": { "id": "CHGD020200", "en": "Huiyang" },
                "惠东": { "id": "CHGD020300", "en": "Huidong" },
                "龙门": { "id": "CHGD020400", "en": "Longmen" }
            },
            "梅州": {
                "梅州": { "id": "CHGD030000", "en": "Meizhou" },
                "兴宁": { "id": "CHGD030100", "en": "Xingning" },
                "蕉岭": { "id": "CHGD030200", "en": "Jiaoling" },
                "大埔": { "id": "CHGD030300", "en": "Dabu" },
                "丰顺": { "id": "CHGD030400", "en": "Fengshun" },
                "平远": { "id": "CHGD030500", "en": "Pingyuan" },
                "五华": { "id": "CHGD030600", "en": "Wuhua" },
                "梅县": { "id": "CHGD030700", "en": "Meixian" }
            },
            "汕头": {
                "汕头": { "id": "CHGD040000", "en": "Shantou" },
                "潮阳": { "id": "CHGD040100", "en": "Chaoyang" },
                "澄海": { "id": "CHGD040200", "en": "Chenghai" },
                "南澳": { "id": "CHGD040300", "en": "Nanao" }
            },
            "深圳": { "深圳": { "id": "CHGD050000", "en": "Shenzhen" } },
            "珠海": {
                "珠海": { "id": "CHGD060000", "en": "Zhuhai" },
                "斗门": { "id": "CHGD060100", "en": "Doumen" },
                "金湾": { "id": "CHGD060200", "en": "Jinwan" }
            },
            "佛山": {
                "佛山": { "id": "CHGD070000", "en": "Foshan" },
                "顺德": { "id": "CHGD070100", "en": "Shunde" },
                "三水": { "id": "CHGD070200", "en": "Sanshui" },
                "南海": { "id": "CHGD070300", "en": "Nanhai" },
                "高明": { "id": "CHGD070400", "en": "Gaoming" }
            },
            "肇庆": {
                "肇庆": { "id": "CHGD080000", "en": "Zhaoqing" },
                "广宁": { "id": "CHGD080100", "en": "Guangning" },
                "四会": { "id": "CHGD080200", "en": "Sihui" },
                "德庆": { "id": "CHGD080300", "en": "Deqing" },
                "怀集": { "id": "CHGD080400", "en": "Huaiji" },
                "封开": { "id": "CHGD080500", "en": "Fengkai" },
                "高要": { "id": "CHGD080600", "en": "Gaoyao" }
            },
            "湛江": {
                "湛江": { "id": "CHGD090000", "en": "Zhanjiang" },
                "吴川": { "id": "CHGD090100", "en": "Wuchuan" },
                "雷州": { "id": "CHGD090200", "en": "Leizhou" },
                "徐闻": { "id": "CHGD090300", "en": "Xuwen" },
                "廉江": { "id": "CHGD090400", "en": "Lianjiang" },
                "赤坎": { "id": "CHGD090500", "en": "Chikan" },
                "遂溪": { "id": "CHGD090600", "en": "Suixi" },
                "坡头": { "id": "CHGD090700", "en": "Potou" },
                "霞山": { "id": "CHGD090800", "en": "Xiashan" },
                "麻章": { "id": "CHGD090900", "en": "Mazhang" }
            },
            "江门": {
                "江门": { "id": "CHGD100000", "en": "Jiangmen" },
                "开平": { "id": "CHGD100100", "en": "Kaiping" },
                "新会": { "id": "CHGD100200", "en": "Xinhui" },
                "恩平": { "id": "CHGD100300", "en": "Enping" },
                "台山": { "id": "CHGD100400", "en": "Taishan" },
                "蓬江": { "id": "CHGD100500", "en": "Pengjiang" },
                "鹤山": { "id": "CHGD100600", "en": "Heshan" },
                "江海": { "id": "CHGD100700", "en": "Jianghai" }
            },
            "河源": {
                "河源": { "id": "CHGD110000", "en": "Heyuan" },
                "紫金": { "id": "CHGD110100", "en": "Zijin" },
                "连平": { "id": "CHGD110200", "en": "Lianping" },
                "和平": { "id": "CHGD110300", "en": "Heping" },
                "龙川": { "id": "CHGD110400", "en": "Longchuan" },
                "东源": { "id": "CHGD110500", "en": "Dongyuan" }
            },
            "清远": {
                "清远": { "id": "CHGD120000", "en": "Qingyuan" },
                "连南": { "id": "CHGD120100", "en": "Liannan" },
                "连州": { "id": "CHGD120200", "en": "Lianzhou" },
                "连山": { "id": "CHGD120300", "en": "Lianshan" },
                "阳山": { "id": "CHGD120400", "en": "Yangshan" },
                "佛冈": { "id": "CHGD120500", "en": "Fogang" },
                "英德": { "id": "CHGD120600", "en": "Yingde" },
                "清新": { "id": "CHGD120700", "en": "Qingxin" }
            },
            "云浮": {
                "云浮": { "id": "CHGD130000", "en": "Yunfu" },
                "罗定": { "id": "CHGD130100", "en": "Luoding" },
                "新兴": { "id": "CHGD130200", "en": "Xinxing" },
                "郁南": { "id": "CHGD130300", "en": "Yunan" },
                "云安": { "id": "CHGD130400", "en": "Yunan" }
            },
            "潮州": {
                "潮州": { "id": "CHGD140000", "en": "Chaozhou" },
                "饶平": { "id": "CHGD140100", "en": "Raoping" },
                "潮安": { "id": "CHGD140200", "en": "Chaoan" }
            },
            "东莞": { "东莞": { "id": "CHGD150000", "en": "Dongguan" } },
            "中山": { "中山": { "id": "CHGD160000", "en": "Zhongshan" } },
            "阳江": {
                "阳江": { "id": "CHGD170000", "en": "Yangjiang" },
                "阳春": { "id": "CHGD170100", "en": "Yangchun" },
                "阳东": { "id": "CHGD170200", "en": "Yangdong" },
                "阳西": { "id": "CHGD170300", "en": "Yangxi" }
            },
            "揭阳": {
                "揭阳": { "id": "CHGD180000", "en": "Jieyang" },
                "揭西": { "id": "CHGD180100", "en": "Jiexi" },
                "普宁": { "id": "CHGD180200", "en": "Puning" },
                "惠来": { "id": "CHGD180300", "en": "Huilai" },
                "揭东": { "id": "CHGD180400", "en": "Jiedong" }
            },
            "茂名": {
                "茂名": { "id": "CHGD190000", "en": "Maoming" },
                "高州": { "id": "CHGD190100", "en": "Gaozhou" },
                "化州": { "id": "CHGD190200", "en": "Huazhou" },
                "电白": { "id": "CHGD190300", "en": "Dianbai" },
                "信宜": { "id": "CHGD190400", "en": "Xinyi" },
                "茂港": { "id": "CHGD190500", "en": "Maogang" }
            },
            "汕尾": {
                "汕尾": { "id": "CHGD200000", "en": "Shanwei" },
                "海丰": { "id": "CHGD200100", "en": "Haifeng" },
                "陆丰": { "id": "CHGD200200", "en": "Lufeng" },
                "陆河": { "id": "CHGD200300", "en": "Luhe" }
            }
        },
        "广西": {
            "南宁": {
                "南宁": { "id": "CHGX000000", "en": "Nanning" },
                "邕宁": { "id": "CHGX000100", "en": "Yongning" },
                "横县": { "id": "CHGX000200", "en": "Hengxian" },
                "隆安": { "id": "CHGX000300", "en": "Longan" },
                "马山": { "id": "CHGX000400", "en": "Mashan" },
                "上林": { "id": "CHGX000500", "en": "Shanglin" },
                "武鸣": { "id": "CHGX000600", "en": "Wuming" },
                "宾阳": { "id": "CHGX000700", "en": "Binyang" }
            },
            "崇左": {
                "崇左": { "id": "CHGX010000", "en": "Chongzuo" },
                "天等": { "id": "CHGX010100", "en": "Tiandeng" },
                "龙州": { "id": "CHGX010200", "en": "Longzhou" },
                "凭祥": { "id": "CHGX010300", "en": "Pingxiang" },
                "大新": { "id": "CHGX010400", "en": "Daxin" },
                "扶绥": { "id": "CHGX010500", "en": "Fusui" },
                "宁明": { "id": "CHGX010600", "en": "Ningming" }
            },
            "柳州": {
                "柳州": { "id": "CHGX020000", "en": "Liuzhou" },
                "柳城": { "id": "CHGX020100", "en": "Liucheng" },
                "鹿寨": { "id": "CHGX020200", "en": "Luzhai" },
                "柳江": { "id": "CHGX020300", "en": "Liujiang" },
                "融安": { "id": "CHGX020400", "en": "Rongan" },
                "融水": { "id": "CHGX020500", "en": "Rongshui" },
                "三江": { "id": "CHGX020600", "en": "Sanjiang" }
            },
            "来宾": {
                "来宾": { "id": "CHGX030000", "en": "Laibin" },
                "忻城": { "id": "CHGX030100", "en": "Xincheng" },
                "金秀": { "id": "CHGX030200", "en": "Jinxiu" },
                "象州": { "id": "CHGX030300", "en": "Xiangzhou" },
                "武宣": { "id": "CHGX030400", "en": "Wuxuan" },
                "合山": { "id": "CHGX030500", "en": "Heshan" }
            },
            "桂林": {
                "桂林": { "id": "CHGX040000", "en": "Guilin" },
                "龙胜": { "id": "CHGX040100", "en": "Longsheng" },
                "永福": { "id": "CHGX040200", "en": "Yongfu" },
                "临桂": { "id": "CHGX040300", "en": "Lingui" },
                "兴安": { "id": "CHGX040400", "en": "Xingan" },
                "灵川": { "id": "CHGX040500", "en": "Lingchuan" },
                "全州": { "id": "CHGX040600", "en": "Quanzhou" },
                "灌阳": { "id": "CHGX040700", "en": "Guanyang" },
                "阳朔": { "id": "CHGX040800", "en": "Yangshuo" },
                "恭城": { "id": "CHGX040900", "en": "Gongcheng" },
                "平乐": { "id": "CHGX041000", "en": "Pingle" },
                "荔浦": { "id": "CHGX041100", "en": "Lipu" },
                "资源": { "id": "CHGX041200", "en": "Ziyuan" }
            },
            "梧州": {
                "梧州": { "id": "CHGX050000", "en": "Wuzhou" },
                "藤县": { "id": "CHGX050100", "en": "Tengxian" },
                "苍梧": { "id": "CHGX050200", "en": "Cangwu" },
                "蒙山": { "id": "CHGX050300", "en": "Mengshan" },
                "岑溪": { "id": "CHGX050400", "en": "Cenxi" }
            },
            "贺州": {
                "贺州": { "id": "CHGX060000", "en": "Hezhou" },
                "昭平": { "id": "CHGX060100", "en": "Zhaoping" },
                "富川": { "id": "CHGX060200", "en": "Fuchuan" },
                "钟山": { "id": "CHGX060300", "en": "Zhongshan" }
            },
            "贵港": {
                "贵港": { "id": "CHGX070000", "en": "Guigang" },
                "桂平": { "id": "CHGX070100", "en": "Guiping" },
                "平南": { "id": "CHGX070200", "en": "Pingnan" }
            },
            "玉林": {
                "玉林": { "id": "CHGX080000", "en": "Yulin" },
                "博白": { "id": "CHGX080100", "en": "Bobai" },
                "北流": { "id": "CHGX080200", "en": "Beiliu" },
                "容县": { "id": "CHGX080300", "en": "Rongxian" },
                "陆川": { "id": "CHGX080400", "en": "Luchuan" },
                "兴业": { "id": "CHGX080500", "en": "Xingye" }
            },
            "百色": {
                "百色": { "id": "CHGX090000", "en": "Baise" },
                "那坡": { "id": "CHGX090100", "en": "Napo" },
                "田阳": { "id": "CHGX090200", "en": "Tianyang" },
                "德保": { "id": "CHGX090300", "en": "Debao" },
                "靖西": { "id": "CHGX090400", "en": "Jingxi" },
                "田东": { "id": "CHGX090500", "en": "Tiandong" },
                "平果": { "id": "CHGX090600", "en": "Pingguo" },
                "隆林": { "id": "CHGX090700", "en": "Longlin" },
                "西林": { "id": "CHGX090800", "en": "Xilin" },
                "乐业": { "id": "CHGX090900", "en": "Leye" },
                "凌云": { "id": "CHGX091000", "en": "Lingyun" },
                "田林": { "id": "CHGX091100", "en": "Tianlin" }
            },
            "钦州": {
                "钦州": { "id": "CHGX100000", "en": "Qinzhou" },
                "浦北": { "id": "CHGX100100", "en": "Pubei" },
                "灵山": { "id": "CHGX100200", "en": "Lingshan" }
            },
            "河池": {
                "河池": { "id": "CHGX110000", "en": "Hechi" },
                "天峨": { "id": "CHGX110100", "en": "Tiane" },
                "东兰": { "id": "CHGX110200", "en": "Donglan" },
                "巴马": { "id": "CHGX110300", "en": "Bama" },
                "环江": { "id": "CHGX110400", "en": "Huanjiang" },
                "罗城": { "id": "CHGX110500", "en": "Luocheng" },
                "宜州": { "id": "CHGX110600", "en": "Yizhou" },
                "凤山": { "id": "CHGX110700", "en": "Fengshan" },
                "南丹": { "id": "CHGX110800", "en": "Nandan" },
                "都安": { "id": "CHGX110900", "en": "Duan" },
                "大化": { "id": "CHGX111000", "en": "Dahua" }
            },
            "北海": {
                "北海": { "id": "CHGX120000", "en": "Beihai" },
                "合浦": { "id": "CHGX120100", "en": "Hepu" },
                "涠洲岛": { "id": "CHGX120200", "en": "Weizhoudao" }
            },
            "防城港": {
                "防城港": { "id": "CHGX130000", "en": "Fangchenggang" },
                "上思": { "id": "CHGX130100", "en": "Shangsi" },
                "东兴": { "id": "CHGX130200", "en": "Dongxing" },
                "防城": { "id": "CHGX130300", "en": "Fangcheng" }
            }
        },
        "海南": {
            "海口": { "海口": { "id": "CHHI000000", "en": "Haikou" } },
            "三亚": { "三亚": { "id": "CHHI010000", "en": "Sanya" } },
            "东方": { "东方": { "id": "CHHI020000", "en": "Dongfang" } },
            "临高": { "临高": { "id": "CHHI030000", "en": "Lingao" } },
            "澄迈": { "澄迈": { "id": "CHHI040000", "en": "Chengmai" } },
            "儋州": { "儋州": { "id": "CHHI050000", "en": "Danzhou" } },
            "昌江": { "昌江": { "id": "CHHI060000", "en": "Changjiang" } },
            "白沙": { "白沙": { "id": "CHHI070000", "en": "Baisha" } },
            "琼中": { "琼中": { "id": "CHHI080000", "en": "Qiongzhong" } },
            "定安": { "定安": { "id": "CHHI090000", "en": "Dingan" } },
            "屯昌": { "屯昌": { "id": "CHHI100000", "en": "Tunchang" } },
            "琼海": { "琼海": { "id": "CHHI110000", "en": "Qionghai" } },
            "文昌": { "文昌": { "id": "CHHI120000", "en": "Wenchang" } },
            "保亭": { "保亭": { "id": "CHHI130000", "en": "Baoting" } },
            "万宁": { "万宁": { "id": "CHHI140000", "en": "Wanning" } },
            "陵水": { "陵水": { "id": "CHHI150000", "en": "Lingshui" } },
            "西沙": { "西沙": { "id": "CHHI160000", "en": "Xisha" } },
            "南沙": { "南沙": { "id": "CHHI170000", "en": "Nansha" } },
            "乐东": { "乐东": { "id": "CHHI180000", "en": "Ledong" } },
            "五指山": { "五指山": { "id": "CHHI190000", "en": "Wuzhishan" } },
            "中沙": { "中沙": { "id": "CHHI200000", "en": "Zhongsha" } }
        },
        "贵州": {
            "贵阳": {
                "贵阳": { "id": "CHGZ000000", "en": "Guiyang" },
                "白云": { "id": "CHGZ000100", "en": "Baiyun" },
                "花溪": { "id": "CHGZ000200", "en": "Huaxi" },
                "乌当": { "id": "CHGZ000300", "en": "Wudang" },
                "息烽": { "id": "CHGZ000400", "en": "Xifeng" },
                "开阳": { "id": "CHGZ000500", "en": "Kaiyang" },
                "修文": { "id": "CHGZ000600", "en": "Xiuwen" },
                "清镇": { "id": "CHGZ000700", "en": "Qingzhen" },
                "小河": { "id": "CHGZ000800", "en": "Xiaohe" },
                "云岩": { "id": "CHGZ000900", "en": "Yunyan" },
                "南明": { "id": "CHGZ001000", "en": "Nanming" }
            },
            "遵义": {
                "遵义": { "id": "CHGZ010000", "en": "Zunyi" },
                "遵义县": { "id": "CHGZ010100", "en": "Zunyixian" },
                "仁怀": { "id": "CHGZ010200", "en": "Renhuai" },
                "绥阳": { "id": "CHGZ010300", "en": "Suiyang" },
                "湄潭": { "id": "CHGZ010400", "en": "Meitan" },
                "凤冈": { "id": "CHGZ010500", "en": "Fenggang" },
                "桐梓": { "id": "CHGZ010600", "en": "Tongzi" },
                "赤水": { "id": "CHGZ010700", "en": "Chishui" },
                "习水": { "id": "CHGZ010800", "en": "Xishui" },
                "道真": { "id": "CHGZ010900", "en": "Daozhen" },
                "正安": { "id": "CHGZ011000", "en": "Zhengan" },
                "务川": { "id": "CHGZ011100", "en": "Wuchuan" },
                "余庆": { "id": "CHGZ011200", "en": "Yuqing" },
                "汇川": { "id": "CHGZ011300", "en": "Huichuan" },
                "红花岗": { "id": "CHGZ011400", "en": "Honghuagang" }
            },
            "安顺": {
                "安顺": { "id": "CHGZ020000", "en": "Anshun" },
                "普定": { "id": "CHGZ020100", "en": "Puding" },
                "镇宁": { "id": "CHGZ020200", "en": "Zhenning" },
                "平坝": { "id": "CHGZ020300", "en": "Pingba" },
                "紫云": { "id": "CHGZ020400", "en": "Ziyun" },
                "关岭": { "id": "CHGZ020500", "en": "Guanling" }
            },
            "黔南": {
                "都匀": { "id": "CHGZ030000", "en": "Duyun" },
                "贵定": { "id": "CHGZ030100", "en": "Guiding" },
                "瓮安": { "id": "CHGZ030200", "en": "Wengan" },
                "长顺": { "id": "CHGZ030300", "en": "Changshun" },
                "福泉": { "id": "CHGZ030400", "en": "Fuquan" },
                "惠水": { "id": "CHGZ030500", "en": "Huishui" },
                "龙里": { "id": "CHGZ030600", "en": "Longli" },
                "罗甸": { "id": "CHGZ030700", "en": "Luodian" },
                "平塘": { "id": "CHGZ030800", "en": "Pingtang" },
                "独山": { "id": "CHGZ030900", "en": "Dushan" },
                "三都": { "id": "CHGZ031000", "en": "Sandu" },
                "荔波": { "id": "CHGZ031100", "en": "Libo" }
            },
            "黔东南": {
                "凯里": { "id": "CHGZ040000", "en": "Kaili" },
                "岑巩": { "id": "CHGZ040100", "en": "Cengong" },
                "施秉": { "id": "CHGZ040200", "en": "Shibing" },
                "镇远": { "id": "CHGZ040300", "en": "Zhenyuan" },
                "黄平": { "id": "CHGZ040400", "en": "Huangping" },
                "麻江": { "id": "CHGZ040500", "en": "Majiang" },
                "丹寨": { "id": "CHGZ040600", "en": "Danzhai" },
                "三穗": { "id": "CHGZ040700", "en": "Sansui" },
                "台江": { "id": "CHGZ040800", "en": "Taijiang" },
                "剑河": { "id": "CHGZ040900", "en": "Jianhe" },
                "雷山": { "id": "CHGZ041000", "en": "Leishan" },
                "黎平": { "id": "CHGZ041100", "en": "Liping" },
                "天柱": { "id": "CHGZ041200", "en": "Tianzhu" },
                "锦屏": { "id": "CHGZ041300", "en": "Jinping" },
                "榕江": { "id": "CHGZ041400", "en": "Rongjiang" },
                "从江": { "id": "CHGZ041500", "en": "Congjiang" }
            },
            "铜仁": {
                "铜仁": { "id": "CHGZ050000", "en": "Tongren" },
                "江口": { "id": "CHGZ050100", "en": "Jiangkou" },
                "玉屏": { "id": "CHGZ050200", "en": "Yuping" },
                "万山": { "id": "CHGZ050300", "en": "Wanshan" },
                "思南": { "id": "CHGZ050400", "en": "Sinan" },
                "印江": { "id": "CHGZ050500", "en": "Yinjiang" },
                "石阡": { "id": "CHGZ050600", "en": "Shiqian" },
                "沿河": { "id": "CHGZ050700", "en": "Yanhe" },
                "德江": { "id": "CHGZ050800", "en": "Dejiang" },
                "松桃": { "id": "CHGZ050900", "en": "Songtao" }
            },
            "毕节": {
                "毕节": { "id": "CHGZ060000", "en": "Bijie" },
                "赫章": { "id": "CHGZ060100", "en": "Hezhang" },
                "金沙": { "id": "CHGZ060200", "en": "Jinsha" },
                "威宁": { "id": "CHGZ060300", "en": "Weining" },
                "大方": { "id": "CHGZ060400", "en": "Dafang" },
                "纳雍": { "id": "CHGZ060500", "en": "Nayong" },
                "织金": { "id": "CHGZ060600", "en": "Zhijin" },
                "黔西": { "id": "CHGZ060700", "en": "Qianxi" }
            },
            "六盘水": {
                "水城": { "id": "CHGZ070000", "en": "Shuicheng" },
                "六枝": { "id": "CHGZ070100", "en": "Liuzhi" },
                "盘县": { "id": "CHGZ070200", "en": "Panxian" }
            },
            "黔西南": {
                "兴义": { "id": "CHGZ080000", "en": "Xingyi" },
                "晴隆": { "id": "CHGZ080100", "en": "Qinglong" },
                "兴仁": { "id": "CHGZ080200", "en": "Xingren" },
                "贞丰": { "id": "CHGZ080300", "en": "Zhenfeng" },
                "望谟": { "id": "CHGZ080400", "en": "Wangmo" },
                "安龙": { "id": "CHGZ080500", "en": "Anlong" },
                "册亨": { "id": "CHGZ080600", "en": "Ceheng" },
                "普安": { "id": "CHGZ080700", "en": "Puan" }
            }
        },
        "云南": {
            "昆明": {
                "昆明": { "id": "CHYN000000", "en": "Kunming" },
                "东川": { "id": "CHYN000100", "en": "Dongchuan" },
                "寻甸": { "id": "CHYN000200", "en": "Xundian" },
                "晋宁": { "id": "CHYN000300", "en": "Jinning" },
                "宜良": { "id": "CHYN000400", "en": "Yiliang" },
                "石林": { "id": "CHYN000500", "en": "Shilin" },
                "呈贡": { "id": "CHYN000600", "en": "Chenggong" },
                "富民": { "id": "CHYN000700", "en": "Fumin" },
                "嵩明": { "id": "CHYN000800", "en": "Songming" },
                "禄劝": { "id": "CHYN000900", "en": "Luquan" },
                "安宁": { "id": "CHYN001000", "en": "Anning" },
                "太华山": { "id": "CHYN001100", "en": "Taihuashan" }
            },
            "大理": {
                "大理": { "id": "CHYN010000", "en": "Dali" },
                "云龙": { "id": "CHYN010100", "en": "Yunlong" },
                "漾濞": { "id": "CHYN010200", "en": "Yangbi" },
                "永平": { "id": "CHYN010300", "en": "Yongping" },
                "宾川": { "id": "CHYN010400", "en": "Binchuan" },
                "弥渡": { "id": "CHYN010500", "en": "Midu" },
                "祥云": { "id": "CHYN010600", "en": "Xiangyun" },
                "巍山": { "id": "CHYN010700", "en": "Weishan" },
                "剑川": { "id": "CHYN010800", "en": "Jianchuan" },
                "洱源": { "id": "CHYN010900", "en": "Eryuan" },
                "鹤庆": { "id": "CHYN011000", "en": "Heqing" },
                "南涧": { "id": "CHYN011100", "en": "Nanjian" }
            },
            "红河": {
                "红河": { "id": "CHYN020000", "en": "Honghe" },
                "石屏": { "id": "CHYN020100", "en": "Shiping" },
                "建水": { "id": "CHYN020200", "en": "Jianshui" },
                "弥勒": { "id": "CHYN020300", "en": "Mile" },
                "元阳": { "id": "CHYN020400", "en": "Yuanyang" },
                "绿春": { "id": "CHYN020500", "en": "Lvchun" },
                "开远": { "id": "CHYN020600", "en": "Kaiyuan" },
                "个旧": { "id": "CHYN020700", "en": "Gejiu" },
                "蒙自": { "id": "CHYN020800", "en": "Mengzi" },
                "屏边": { "id": "CHYN020900", "en": "Pingbian" },
                "泸西": { "id": "CHYN021000", "en": "Luxi" },
                "金平": { "id": "CHYN021100", "en": "Jinping" },
                "河口": { "id": "CHYN021200", "en": "Hekou" }
            },
            "曲靖": {
                "曲靖": { "id": "CHYN030000", "en": "Qujing" },
                "沾益": { "id": "CHYN030100", "en": "Zhanyi" },
                "陆良": { "id": "CHYN030200", "en": "Luliang" },
                "富源": { "id": "CHYN030300", "en": "Fuyuan" },
                "马龙": { "id": "CHYN030400", "en": "Malong" },
                "师宗": { "id": "CHYN030500", "en": "Shizong" },
                "罗平": { "id": "CHYN030600", "en": "Luoping" },
                "会泽": { "id": "CHYN030700", "en": "Huize" },
                "宣威": { "id": "CHYN030800", "en": "Xuanwei" }
            },
            "保山": {
                "保山": { "id": "CHYN040000", "en": "Baoshan" },
                "龙陵": { "id": "CHYN040100", "en": "Longling" },
                "施甸": { "id": "CHYN040200", "en": "Shidian" },
                "昌宁": { "id": "CHYN040300", "en": "Changning" },
                "腾冲": { "id": "CHYN040400", "en": "Tengchong" }
            },
            "文山": {
                "文山": { "id": "CHYN050000", "en": "Wenshan" },
                "西畴": { "id": "CHYN050100", "en": "Xichou" },
                "马关": { "id": "CHYN050200", "en": "Maguan" },
                "麻栗坡": { "id": "CHYN050300", "en": "Malipo" },
                "砚山": { "id": "CHYN050400", "en": "Yanshan" },
                "丘北": { "id": "CHYN050500", "en": "Qiubei" },
                "广南": { "id": "CHYN050600", "en": "Guangnan" },
                "富宁": { "id": "CHYN050700", "en": "Funing" }
            },
            "玉溪": {
                "玉溪": { "id": "CHYN060000", "en": "Yuxi" },
                "澄江": { "id": "CHYN060100", "en": "Chengjiang" },
                "江川": { "id": "CHYN060200", "en": "Jiangchuan" },
                "通海": { "id": "CHYN060300", "en": "Tonghai" },
                "华宁": { "id": "CHYN060400", "en": "Huaning" },
                "新平": { "id": "CHYN060500", "en": "Xinping" },
                "易门": { "id": "CHYN060600", "en": "Yimen" },
                "峨山": { "id": "CHYN060700", "en": "Eshan" },
                "元江": { "id": "CHYN060800", "en": "Yuanjiang" }
            },
            "楚雄": {
                "楚雄": { "id": "CHYN070000", "en": "Chuxiong" },
                "大姚": { "id": "CHYN070100", "en": "Dayao" },
                "元谋": { "id": "CHYN070200", "en": "Yuanmou" },
                "姚安": { "id": "CHYN070300", "en": "Yaoan" },
                "牟定": { "id": "CHYN070400", "en": "Mouding" },
                "南华": { "id": "CHYN070500", "en": "Nanhua" },
                "武定": { "id": "CHYN070600", "en": "Wuding" },
                "禄丰": { "id": "CHYN070700", "en": "Lufeng" },
                "双柏": { "id": "CHYN070800", "en": "Shuangbai" },
                "永仁": { "id": "CHYN070900", "en": "Yongren" }
            },
            "普洱": {
                "普洱": { "id": "CHYN080000", "en": "Puer" },
                "景谷": { "id": "CHYN080100", "en": "Jinggu" },
                "景东": { "id": "CHYN080200", "en": "Jingdong" },
                "澜沧": { "id": "CHYN080300", "en": "Lancang" },
                "墨江": { "id": "CHYN080400", "en": "Mojiang" },
                "江城": { "id": "CHYN080500", "en": "Jiangcheng" },
                "孟连": { "id": "CHYN080600", "en": "Menglian" },
                "西盟": { "id": "CHYN080700", "en": "Ximeng" },
                "镇沅": { "id": "CHYN080800", "en": "Zhenyuan" },
                "宁洱": { "id": "CHYN080900", "en": "Ninger" }
            },
            "昭通": {
                "昭通": { "id": "CHYN090000", "en": "Zhaotong" },
                "鲁甸": { "id": "CHYN090100", "en": "Ludian" },
                "彝良": { "id": "CHYN090200", "en": "Yiliang" },
                "镇雄": { "id": "CHYN090300", "en": "Zhenxiong" },
                "威信": { "id": "CHYN090400", "en": "Weixin" },
                "巧家": { "id": "CHYN090500", "en": "Qiaojia" },
                "绥江": { "id": "CHYN090600", "en": "Suijiang" },
                "永善": { "id": "CHYN090700", "en": "Yongshan" },
                "盐津": { "id": "CHYN090800", "en": "Yanjin" },
                "大关": { "id": "CHYN090900", "en": "Daguan" },
                "水富": { "id": "CHYN091000", "en": "Shuifu" }
            },
            "临沧": {
                "临沧": { "id": "CHYN100000", "en": "Lincang" },
                "沧源": { "id": "CHYN100100", "en": "Cangyuan" },
                "耿马": { "id": "CHYN100200", "en": "Gengma" },
                "双江": { "id": "CHYN100300", "en": "Shuangjiang" },
                "凤庆": { "id": "CHYN100400", "en": "Fengqing" },
                "永德": { "id": "CHYN100500", "en": "Yongde" },
                "云县": { "id": "CHYN100600", "en": "Yunxian" },
                "镇康": { "id": "CHYN100700", "en": "Zhenkang" }
            },
            "怒江": {
                "怒江": { "id": "CHYN110000", "en": "Nujiang" },
                "福贡": { "id": "CHYN110100", "en": "Fugong" },
                "兰坪": { "id": "CHYN110200", "en": "Lanping" },
                "泸水": { "id": "CHYN110300", "en": "Lushui" },
                "六库": { "id": "CHYN110400", "en": "Liuku" },
                "贡山": { "id": "CHYN110500", "en": "Gongshan" }
            },
            "迪庆": {
                "香格里拉": { "id": "CHYN120000", "en": "Xianggelila" },
                "德钦": { "id": "CHYN120100", "en": "Deqin" },
                "维西": { "id": "CHYN120200", "en": "Weixi" },
                "中甸": { "id": "CHYN120300", "en": "Zhongdian" }
            },
            "丽江": {
                "丽江": { "id": "CHYN130000", "en": "Lijiang" },
                "永胜": { "id": "CHYN130100", "en": "Yongsheng" },
                "华坪": { "id": "CHYN130200", "en": "Huaping" },
                "宁蒗": { "id": "CHYN130300", "en": "Ninglang" }
            },
            "德宏": {
                "德宏": { "id": "CHYN140000", "en": "Dehong" },
                "陇川": { "id": "CHYN140100", "en": "Longchuan" },
                "盈江": { "id": "CHYN140200", "en": "Yingjiang" },
                "瑞丽": { "id": "CHYN140300", "en": "Ruili" },
                "梁河": { "id": "CHYN140400", "en": "Lianghe" },
                "芒市": { "id": "CHYN140500", "en": "Mangshi" }
            },
            "西双版纳": {
                "景洪": { "id": "CHYN150000", "en": "Jinghong" },
                "勐海": { "id": "CHYN150100", "en": "Menghai" },
                "勐腊": { "id": "CHYN150200", "en": "Mengla" }
            }
        },
        "四川": {
            "成都": {
                "成都": { "id": "CHSC000000", "en": "Chengdu" },
                "龙泉驿": { "id": "CHSC000100", "en": "Longquanyi" },
                "新都": { "id": "CHSC000200", "en": "Xindu" },
                "温江": { "id": "CHSC000300", "en": "Wenjiang" },
                "金堂": { "id": "CHSC000400", "en": "Jintang" },
                "双流": { "id": "CHSC000500", "en": "Shuangliu" },
                "郫县": { "id": "CHSC000600", "en": "Pixian" },
                "大邑": { "id": "CHSC000700", "en": "Dayi" },
                "蒲江": { "id": "CHSC000800", "en": "Pujiang" },
                "新津": { "id": "CHSC000900", "en": "Xinjin" },
                "都江堰": { "id": "CHSC001000", "en": "Dujiangyan" },
                "彭州": { "id": "CHSC001100", "en": "Pengzhou" },
                "邛崃": { "id": "CHSC001200", "en": "Qionglai" },
                "崇州": { "id": "CHSC001300", "en": "Chongzhou" },
                "青白江区": { "id": "CHSC001400", "en": "Qibaijiang" }
            },
            "攀枝花": {
                "攀枝花": { "id": "CHSC010000", "en": "Panzhihua" },
                "仁和": { "id": "CHSC010100", "en": "Renhe" },
                "米易": { "id": "CHSC010200", "en": "Miyi" },
                "盐边": { "id": "CHSC010300", "en": "Yanbian" }
            },
            "自贡": {
                "自贡": { "id": "CHSC020000", "en": "Zigong" },
                "富顺": { "id": "CHSC020100", "en": "Fushun" },
                "荣县": { "id": "CHSC020200", "en": "Rongxian" }
            },
            "绵阳": {
                "绵阳": { "id": "CHSC030000", "en": "Mianyang" },
                "三台": { "id": "CHSC030100", "en": "Santai" },
                "盐亭": { "id": "CHSC030200", "en": "Yanting" },
                "安县": { "id": "CHSC030300", "en": "Anxian" },
                "梓潼": { "id": "CHSC030400", "en": "Zitong" },
                "北川": { "id": "CHSC030500", "en": "Beichuan" },
                "平武": { "id": "CHSC030600", "en": "Pingwu" },
                "江油": { "id": "CHSC030700", "en": "Jiangyou" }
            },
            "南充": {
                "南充": { "id": "CHSC040000", "en": "Nanchong" },
                "南部": { "id": "CHSC040100", "en": "Nanbu" },
                "营山": { "id": "CHSC040200", "en": "Yingshan" },
                "蓬安": { "id": "CHSC040300", "en": "Pengan" },
                "仪陇": { "id": "CHSC040400", "en": "Yilong" },
                "西充": { "id": "CHSC040500", "en": "Xichong" },
                "阆中": { "id": "CHSC040600", "en": "Langzhong" }
            },
            "达州": {
                "达州": { "id": "CHSC050000", "en": "Dazhou" },
                "宣汉": { "id": "CHSC050100", "en": "Xuanhan" },
                "开江": { "id": "CHSC050200", "en": "Kaijiang" },
                "大竹": { "id": "CHSC050300", "en": "Dazhu" },
                "渠县": { "id": "CHSC050400", "en": "Quxian" },
                "万源": { "id": "CHSC050500", "en": "Wanyuan" },
                "通川": { "id": "CHSC050600", "en": "Tongchuan" },
                "达县": { "id": "CHSC050700", "en": "Daxian" }
            },
            "遂宁": {
                "遂宁": { "id": "CHSC060000", "en": "Suining" },
                "蓬溪": { "id": "CHSC060100", "en": "Pengxi" },
                "射洪": { "id": "CHSC060200", "en": "Shehong" }
            },
            "广安": {
                "广安": { "id": "CHSC070000", "en": "Guangan" },
                "岳池": { "id": "CHSC070100", "en": "Yuechi" },
                "武胜": { "id": "CHSC070200", "en": "Wusheng" },
                "邻水": { "id": "CHSC070300", "en": "Linshui" },
                "华蓥": { "id": "CHSC070400", "en": "Huaying" }
            },
            "巴中": {
                "巴中": { "id": "CHSC080000", "en": "Bazhong" },
                "通江": { "id": "CHSC080100", "en": "Tongjiang" },
                "南江": { "id": "CHSC080200", "en": "Nanjiang" },
                "平昌": { "id": "CHSC080300", "en": "Pingchang" }
            },
            "泸州": {
                "泸州": { "id": "CHSC090000", "en": "Luzhou" },
                "泸县": { "id": "CHSC090100", "en": "Luxian" },
                "合江": { "id": "CHSC090200", "en": "Hejiang" },
                "叙永": { "id": "CHSC090300", "en": "Xuyong" },
                "古蔺": { "id": "CHSC090400", "en": "Gulin" },
                "纳溪": { "id": "CHSC090500", "en": "Naxi" }
            },
            "宜宾": {
                "宜宾": { "id": "CHSC100000", "en": "Yibin" },
                "宜宾县": { "id": "CHSC100100", "en": "Yibinxian" },
                "南溪": { "id": "CHSC100200", "en": "Nanxi" },
                "江安": { "id": "CHSC100300", "en": "Jiangan" },
                "长宁": { "id": "CHSC100400", "en": "Changning" },
                "高县": { "id": "CHSC100500", "en": "Gaoxian" },
                "珙县": { "id": "CHSC100600", "en": "Gongxian" },
                "筠连": { "id": "CHSC100700", "en": "Junlian" },
                "兴文": { "id": "CHSC100800", "en": "Xingwen" },
                "屏山": { "id": "CHSC100900", "en": "Pingshan" }
            },
            "内江": {
                "内江": { "id": "CHSC110000", "en": "Neijiang" },
                "东兴": { "id": "CHSC110100", "en": "Dongxing" },
                "威远": { "id": "CHSC110200", "en": "Weiyuan" },
                "资中": { "id": "CHSC110300", "en": "Zizhong" },
                "隆昌": { "id": "CHSC110400", "en": "Longchang" }
            },
            "资阳": {
                "资阳": { "id": "CHSC120000", "en": "Ziyang" },
                "安岳": { "id": "CHSC120100", "en": "Anyue" },
                "乐至": { "id": "CHSC120200", "en": "Lezhi" },
                "简阳": { "id": "CHSC120300", "en": "Jianyang" }
            },
            "乐山": {
                "乐山": { "id": "CHSC130000", "en": "Leshan" },
                "犍为": { "id": "CHSC130100", "en": "Qianwei" },
                "井研": { "id": "CHSC130200", "en": "Jingyan" },
                "夹江": { "id": "CHSC130300", "en": "Jiajiang" },
                "沐川": { "id": "CHSC130400", "en": "Muchuan" },
                "峨边": { "id": "CHSC130500", "en": "Ebian" },
                "马边": { "id": "CHSC130600", "en": "Mabian" },
                "峨眉": { "id": "CHSC130700", "en": "Emei" },
                "峨眉山": { "id": "CHSC130800", "en": "Emeishan" }
            },
            "眉山": {
                "眉山": { "id": "CHSC140000", "en": "Meishan" },
                "仁寿": { "id": "CHSC140100", "en": "Renshou" },
                "彭山": { "id": "CHSC140200", "en": "Pengshan" },
                "洪雅": { "id": "CHSC140300", "en": "Hongya" },
                "丹棱": { "id": "CHSC140400", "en": "Danleng" },
                "青神": { "id": "CHSC140500", "en": "Qingshen" }
            },
            "凉山": {
                "凉山": { "id": "CHSC150000", "en": "Liangshan" },
                "木里": { "id": "CHSC150100", "en": "Muli" },
                "盐源": { "id": "CHSC150200", "en": "Yanyuan" },
                "德昌": { "id": "CHSC150300", "en": "Dechang" },
                "会理": { "id": "CHSC150400", "en": "Huili" },
                "会东": { "id": "CHSC150500", "en": "Huidong" },
                "宁南": { "id": "CHSC150600", "en": "Ningnan" },
                "普格": { "id": "CHSC150700", "en": "Puge" },
                "西昌": { "id": "CHSC150800", "en": "Xichang" },
                "金阳": { "id": "CHSC150900", "en": "Jinyang" },
                "昭觉": { "id": "CHSC151000", "en": "Zhaojue" },
                "喜德": { "id": "CHSC151100", "en": "Xide" },
                "冕宁": { "id": "CHSC151200", "en": "Mianning" },
                "越西": { "id": "CHSC151300", "en": "Yuexi" },
                "甘洛": { "id": "CHSC151400", "en": "Ganluo" },
                "雷波": { "id": "CHSC151500", "en": "Leibo" },
                "美姑": { "id": "CHSC151600", "en": "Meigu" },
                "布拖": { "id": "CHSC151700", "en": "Butuo" }
            },
            "雅安": {
                "雅安": { "id": "CHSC160000", "en": "Yaan" },
                "名山": { "id": "CHSC160100", "en": "Mingshan" },
                "荥经": { "id": "CHSC160200", "en": "Yingjing" },
                "汉源": { "id": "CHSC160300", "en": "Hanyuan" },
                "石棉": { "id": "CHSC160400", "en": "Shimian" },
                "天全": { "id": "CHSC160500", "en": "Tianquan" },
                "芦山": { "id": "CHSC160600", "en": "Lushan" },
                "宝兴": { "id": "CHSC160700", "en": "Baoxing" }
            },
            "甘孜": {
                "甘孜": { "id": "CHSC170000", "en": "Ganzi" },
                "康定": { "id": "CHSC170100", "en": "Kangding" },
                "泸定": { "id": "CHSC170200", "en": "Luding" },
                "丹巴": { "id": "CHSC170300", "en": "Danba" },
                "九龙": { "id": "CHSC170400", "en": "Jiulong" },
                "雅江": { "id": "CHSC170500", "en": "Yajiang" },
                "道孚": { "id": "CHSC170600", "en": "Daofu" },
                "炉霍": { "id": "CHSC170700", "en": "Luhuo" },
                "新龙": { "id": "CHSC170800", "en": "Xinlong" },
                "德格": { "id": "CHSC170900", "en": "Dege" },
                "白玉": { "id": "CHSC171000", "en": "Baiyu" },
                "石渠": { "id": "CHSC171100", "en": "Shiqu" },
                "色达": { "id": "CHSC171200", "en": "Seda" },
                "理塘": { "id": "CHSC171300", "en": "Litang" },
                "巴塘": { "id": "CHSC171400", "en": "Batang" },
                "乡城": { "id": "CHSC171500", "en": "Xiangcheng" },
                "稻城": { "id": "CHSC171600", "en": "Daocheng" },
                "得荣": { "id": "CHSC171700", "en": "Derong" }
            },
            "阿坝": {
                "阿坝": { "id": "CHSC180000", "en": "Aba" },
                "汶川": { "id": "CHSC180100", "en": "Wenchuan" },
                "理县": { "id": "CHSC180200", "en": "Lixian" },
                "茂县": { "id": "CHSC180300", "en": "Maoxian" },
                "松潘": { "id": "CHSC180400", "en": "Songfan" },
                "九寨沟": { "id": "CHSC180500", "en": "Jiuzhaigou" },
                "金川": { "id": "CHSC180600", "en": "Jinchuan" },
                "小金": { "id": "CHSC180700", "en": "Xiaojin" },
                "黑水": { "id": "CHSC180800", "en": "Heishui" },
                "马尔康": { "id": "CHSC180900", "en": "Maerkang" },
                "壤塘": { "id": "CHSC181000", "en": "Rangtang" },
                "若尔盖": { "id": "CHSC181100", "en": "Nuoergai" },
                "红原": { "id": "CHSC181200", "en": "Hongyuan" }
            },
            "德阳": {
                "德阳": { "id": "CHSC190000", "en": "Deyang" },
                "中江": { "id": "CHSC190100", "en": "Zhongjiang" },
                "广汉": { "id": "CHSC190200", "en": "Guanghan" },
                "什邡": { "id": "CHSC190300", "en": "Shifang" },
                "绵竹": { "id": "CHSC190400", "en": "Mianzhu" },
                "罗江": { "id": "CHSC190500", "en": "Luojiang" }
            },
            "广元": {
                "广元": { "id": "CHSC200000", "en": "Guangyuan" },
                "旺苍": { "id": "CHSC200100", "en": "Wangcang" },
                "青川": { "id": "CHSC200200", "en": "Qingchuan" },
                "剑阁": { "id": "CHSC200300", "en": "Jiange" },
                "苍溪": { "id": "CHSC200400", "en": "Cangxi" }
            }
        },
        "西藏": {
            "拉萨": {
                "拉萨": { "id": "CHXZ000000", "en": "Lasa" },
                "当雄": { "id": "CHXZ000100", "en": "Dangxiong" },
                "尼木": { "id": "CHXZ000200", "en": "Nimu" },
                "林周": { "id": "CHXZ000300", "en": "Linzhou" },
                "堆龙德庆": { "id": "CHXZ000400", "en": "Duilongdeqing" },
                "曲水": { "id": "CHXZ000500", "en": "Qushui" },
                "达孜": { "id": "CHXZ000600", "en": "Dazi" },
                "墨竹工卡": { "id": "CHXZ000700", "en": "Mozhugongka" }
            },
            "日喀则": {
                "日喀则": { "id": "CHXZ010000", "en": "Rikaze" },
                "拉孜": { "id": "CHXZ010100", "en": "Lazi" },
                "南木林": { "id": "CHXZ010200", "en": "Nanmulin" },
                "聂拉木": { "id": "CHXZ010300", "en": "Nielamu" },
                "定日": { "id": "CHXZ010400", "en": "Dingri" },
                "江孜": { "id": "CHXZ010500", "en": "Jiangzi" },
                "帕里": { "id": "CHXZ010600", "en": "Pali" },
                "仲巴": { "id": "CHXZ010700", "en": "Zhongba" },
                "萨嘎": { "id": "CHXZ010800", "en": "Saga" },
                "吉隆": { "id": "CHXZ010900", "en": "Jilong" },
                "昂仁": { "id": "CHXZ011000", "en": "Angren" },
                "定结": { "id": "CHXZ011100", "en": "Dingjie" },
                "萨迦": { "id": "CHXZ011200", "en": "Sajia" },
                "谢通门": { "id": "CHXZ011300", "en": "Xietongmen" },
                "岗巴": { "id": "CHXZ011400", "en": "Gangba" },
                "白朗": { "id": "CHXZ011500", "en": "Bailang" },
                "亚东": { "id": "CHXZ011600", "en": "Yadong" },
                "康马": { "id": "CHXZ011700", "en": "Kangma" },
                "仁布": { "id": "CHXZ011800", "en": "Renbu" }
            },
            "山南": {
                "山南": { "id": "CHXZ020000", "en": "Shannan" },
                "贡嘎": { "id": "CHXZ020100", "en": "Gongga" },
                "札囊": { "id": "CHXZ020200", "en": "Zhanang" },
                "加查": { "id": "CHXZ020300", "en": "Jiacha" },
                "浪卡子": { "id": "CHXZ020400", "en": "Langkazi" },
                "错那": { "id": "CHXZ020500", "en": "Cuona" },
                "隆子": { "id": "CHXZ020600", "en": "Longzi" },
                "泽当": { "id": "CHXZ020700", "en": "Zedang" },
                "乃东": { "id": "CHXZ020800", "en": "Naidong" },
                "桑日": { "id": "CHXZ020900", "en": "Sangri" },
                "洛扎": { "id": "CHXZ021000", "en": "Luozha" },
                "措美": { "id": "CHXZ021100", "en": "Cuomei" },
                "琼结": { "id": "CHXZ021200", "en": "Qiongjie" },
                "曲松": { "id": "CHXZ021300", "en": "Qusong" }
            },
            "林芝": {
                "林芝": { "id": "CHXZ030000", "en": "Linzhi" },
                "波密": { "id": "CHXZ030100", "en": "Bomi" },
                "米林": { "id": "CHXZ030200", "en": "Milin" },
                "察隅": { "id": "CHXZ030300", "en": "Chayu" },
                "工布江达": { "id": "CHXZ030400", "en": "Gongbujiangda" },
                "朗县": { "id": "CHXZ030500", "en": "Langxian" },
                "墨脱": { "id": "CHXZ030600", "en": "Motuo" }
            },
            "昌都": {
                "昌都": { "id": "CHXZ040000", "en": "Changdu" },
                "丁青": { "id": "CHXZ040100", "en": "Dingqing" },
                "边坝": { "id": "CHXZ040200", "en": "Bianba" },
                "洛隆": { "id": "CHXZ040300", "en": "Luolong" },
                "左贡": { "id": "CHXZ040400", "en": "Zuogong" },
                "芒康": { "id": "CHXZ040500", "en": "Mangkang" },
                "类乌齐": { "id": "CHXZ040600", "en": "Leiwuqi" },
                "八宿": { "id": "CHXZ040700", "en": "Basu" },
                "江达": { "id": "CHXZ040800", "en": "Jiangda" },
                "察雅": { "id": "CHXZ040900", "en": "Chaya" },
                "贡觉": { "id": "CHXZ041000", "en": "Gongjue" }
            },
            "那曲": {
                "那曲": { "id": "CHXZ050000", "en": "Naqu" },
                "尼玛": { "id": "CHXZ050100", "en": "Nima" },
                "嘉黎": { "id": "CHXZ050200", "en": "Jiali" },
                "班戈": { "id": "CHXZ050300", "en": "Bange" },
                "安多": { "id": "CHXZ050400", "en": "Anduo" },
                "索县": { "id": "CHXZ050500", "en": "Suoxian" },
                "聂荣": { "id": "CHXZ050600", "en": "Nierong" },
                "巴青": { "id": "CHXZ050700", "en": "Baqing" },
                "比如": { "id": "CHXZ050800", "en": "Biru" },
                "双湖": { "id": "CHXZ050900", "en": "Shuanghu" }
            },
            "阿里": {
                "阿里": { "id": "CHXZ060000", "en": "Ali" },
                "改则": { "id": "CHXZ060100", "en": "Gaize" },
                "申扎": { "id": "CHXZ060200", "en": "Shenzha" },
                "狮泉河": { "id": "CHXZ060300", "en": "Shiquanhe" },
                "普兰": { "id": "CHXZ060400", "en": "Pulan" },
                "札达": { "id": "CHXZ060500", "en": "Zhada" },
                "噶尔": { "id": "CHXZ060600", "en": "Gaer" },
                "日土": { "id": "CHXZ060700", "en": "Ritu" },
                "革吉": { "id": "CHXZ060800", "en": "Geji" },
                "措勤": { "id": "CHXZ060900", "en": "Cuoqin" }
            }
        },
        "陕西": {
            "西安": {
                "西安": { "id": "CHSN000000", "en": "Xian" },
                "长安": { "id": "CHSN000100", "en": "Changan" },
                "临潼": { "id": "CHSN000200", "en": "Lintong" },
                "蓝田": { "id": "CHSN000300", "en": "Lantian" },
                "周至": { "id": "CHSN000400", "en": "Zhouzhi" },
                "户县": { "id": "CHSN000500", "en": "Huxian" },
                "高陵": { "id": "CHSN000600", "en": "Gaoling" }
            },
            "咸阳": {
                "咸阳": { "id": "CHSN010000", "en": "Xianyang" },
                "三原": { "id": "CHSN010100", "en": "Sanyuan" },
                "礼泉": { "id": "CHSN010200", "en": "Liquan" },
                "永寿": { "id": "CHSN010300", "en": "Yongshou" },
                "淳化": { "id": "CHSN010400", "en": "Chunhua" },
                "泾阳": { "id": "CHSN010500", "en": "Jingyang" },
                "武功": { "id": "CHSN010600", "en": "Wugong" },
                "乾县": { "id": "CHSN010700", "en": "Qianxian" },
                "彬县": { "id": "CHSN010800", "en": "Binxian" },
                "长武": { "id": "CHSN010900", "en": "Changwu" },
                "旬邑": { "id": "CHSN011000", "en": "Xunyi" },
                "兴平": { "id": "CHSN011100", "en": "Xingping" }
            },
            "延安": {
                "延安": { "id": "CHSN020000", "en": "Yanan" },
                "延长": { "id": "CHSN020100", "en": "Yanchang" },
                "延川": { "id": "CHSN020200", "en": "Yanchuan" },
                "子长": { "id": "CHSN020300", "en": "Zichang" },
                "宜川": { "id": "CHSN020400", "en": "Yichuan" },
                "富县": { "id": "CHSN020500", "en": "Fuxian" },
                "志丹": { "id": "CHSN020600", "en": "Zhidan" },
                "安塞": { "id": "CHSN020700", "en": "Ansai" },
                "甘泉": { "id": "CHSN020800", "en": "Ganquan" },
                "洛川": { "id": "CHSN020900", "en": "Luochuan" },
                "黄陵": { "id": "CHSN021000", "en": "Huangling" },
                "黄龙": { "id": "CHSN021100", "en": "Huanglong" },
                "吴起": { "id": "CHSN021200", "en": "Wuqi" }
            },
            "榆林": {
                "榆林": { "id": "CHSN030000", "en": "Yulin" },
                "府谷": { "id": "CHSN030100", "en": "Fugu" },
                "神木": { "id": "CHSN030200", "en": "Shenmu" },
                "佳县": { "id": "CHSN030300", "en": "Jiaxian" },
                "定边": { "id": "CHSN030400", "en": "Dingbian" },
                "靖边": { "id": "CHSN030500", "en": "Jingbian" },
                "横山": { "id": "CHSN030600", "en": "Hengshan" },
                "米脂": { "id": "CHSN030700", "en": "Mizhi" },
                "子洲": { "id": "CHSN030800", "en": "Zizhou" },
                "绥德": { "id": "CHSN030900", "en": "Suide" },
                "吴堡": { "id": "CHSN031000", "en": "Wubu" },
                "清涧": { "id": "CHSN031100", "en": "Qingjian" },
                "榆阳": { "id": "CHSN031200", "en": "Yuyang" }
            },
            "渭南": {
                "渭南": { "id": "CHSN040000", "en": "Weinan" },
                "华县": { "id": "CHSN040100", "en": "Huaxian" },
                "潼关": { "id": "CHSN040200", "en": "Tongguan" },
                "大荔": { "id": "CHSN040300", "en": "Dali" },
                "白水": { "id": "CHSN040400", "en": "Baishui" },
                "富平": { "id": "CHSN040500", "en": "Fuping" },
                "蒲城": { "id": "CHSN040600", "en": "Pucheng" },
                "澄城": { "id": "CHSN040700", "en": "Chengcheng" },
                "合阳": { "id": "CHSN040800", "en": "Heyang" },
                "韩城": { "id": "CHSN040900", "en": "Hancheng" },
                "华阴": { "id": "CHSN041000", "en": "Huayin" }
            },
            "商洛": {
                "商洛": { "id": "CHSN050000", "en": "Shangluo" },
                "洛南": { "id": "CHSN050100", "en": "Luonan" },
                "柞水": { "id": "CHSN050200", "en": "Zhashui" },
                "商州": { "id": "CHSN050300", "en": "Shangzhou" },
                "镇安": { "id": "CHSN050400", "en": "Zhenan" },
                "丹凤": { "id": "CHSN050500", "en": "Danfeng" },
                "商南": { "id": "CHSN050600", "en": "Shangnan" },
                "山阳": { "id": "CHSN050700", "en": "Shanyang" }
            },
            "安康": {
                "安康": { "id": "CHSN060000", "en": "Ankang" },
                "紫阳": { "id": "CHSN060100", "en": "Ziyang" },
                "石泉": { "id": "CHSN060200", "en": "Shiquan" },
                "汉阴": { "id": "CHSN060300", "en": "Hanyin" },
                "旬阳": { "id": "CHSN060400", "en": "Xunyang" },
                "岚皋": { "id": "CHSN060500", "en": "Langao" },
                "平利": { "id": "CHSN060600", "en": "Pingli" },
                "白河": { "id": "CHSN060700", "en": "Baihe" },
                "镇坪": { "id": "CHSN060800", "en": "Zhenping" },
                "宁陕": { "id": "CHSN060900", "en": "Ningshan" }
            },
            "汉中": {
                "汉中": { "id": "CHSN070000", "en": "Hanzhong" },
                "略阳": { "id": "CHSN070100", "en": "Lueyang" },
                "勉县": { "id": "CHSN070200", "en": "Mianxian" },
                "留坝": { "id": "CHSN070300", "en": "Liuba" },
                "洋县": { "id": "CHSN070400", "en": "Yangxian" },
                "城固": { "id": "CHSN070500", "en": "Chenggu" },
                "西乡": { "id": "CHSN070600", "en": "Xixiang" },
                "佛坪": { "id": "CHSN070700", "en": "Fuoping" },
                "宁强": { "id": "CHSN070800", "en": "Ningqiang" },
                "南郑": { "id": "CHSN070900", "en": "Nanzheng" },
                "镇巴": { "id": "CHSN071000", "en": "Zhenba" }
            },
            "宝鸡": {
                "宝鸡": { "id": "CHSN080000", "en": "Baoji" },
                "千阳": { "id": "CHSN080100", "en": "Qianyang" },
                "麟游": { "id": "CHSN080200", "en": "Linyou" },
                "岐山": { "id": "CHSN080300", "en": "Qishan" },
                "凤翔": { "id": "CHSN080400", "en": "Fengxiang" },
                "扶风": { "id": "CHSN080500", "en": "Fufeng" },
                "眉县": { "id": "CHSN080600", "en": "Meixian" },
                "太白": { "id": "CHSN080700", "en": "Taibai" },
                "凤县": { "id": "CHSN080800", "en": "Fengxian" },
                "陇县": { "id": "CHSN080900", "en": "Longxian" },
                "陈仓": { "id": "CHSN081000", "en": "Chencang" }
            },
            "铜川": {
                "铜川": { "id": "CHSN090000", "en": "Tongchuan" },
                "耀县": { "id": "CHSN090100", "en": "Yaoxian" },
                "宜君": { "id": "CHSN090200", "en": "Yijun" },
                "耀州": { "id": "CHSN090300", "en": "Yaozhou" }
            },
            "杨凌": { "杨凌": { "id": "CHSN100000", "en": "Yangling" } }
        },
        "宁夏": {
            "银川": {
                "银川": { "id": "CHNX000000", "en": "Yinchuan" },
                "永宁": { "id": "CHNX000100", "en": "Yongning" },
                "灵武": { "id": "CHNX000200", "en": "Lingwu" },
                "贺兰": { "id": "CHNX000300", "en": "Helan" }
            },
            "石嘴山": {
                "石嘴山": { "id": "CHNX010000", "en": "Shizuishan" },
                "惠农": { "id": "CHNX010100", "en": "Huinong" },
                "平罗": { "id": "CHNX010200", "en": "Pingluo" },
                "陶乐": { "id": "CHNX010300", "en": "Taole" }
            },
            "吴忠": {
                "吴忠": { "id": "CHNX020000", "en": "Wuzhong" },
                "同心": { "id": "CHNX020100", "en": "Tongxin" },
                "盐池": { "id": "CHNX020200", "en": "Yanchi" },
                "青铜峡": { "id": "CHNX020300", "en": "Qingtongxia" }
            },
            "固原": {
                "固原": { "id": "CHNX030000", "en": "Guyuan" },
                "西吉": { "id": "CHNX030100", "en": "Xiji" },
                "隆德": { "id": "CHNX030200", "en": "Longde" },
                "泾源": { "id": "CHNX030300", "en": "Jingyuan" },
                "彭阳": { "id": "CHNX030400", "en": "Pengyang" }
            },
            "中卫": {
                "中卫": { "id": "CHNX040000", "en": "Zhongwei" },
                "中宁": { "id": "CHNX040100", "en": "Zhongning" },
                "海原": { "id": "CHNX040200", "en": "Haiyuan" }
            }
        },
        "甘肃": {
            "兰州": {
                "兰州": { "id": "CHGS000000", "en": "Lanzhou" },
                "皋兰": { "id": "CHGS000100", "en": "Gaolan" },
                "永登": { "id": "CHGS000200", "en": "Yongdeng" },
                "榆中": { "id": "CHGS000300", "en": "Yuzhong" }
            },
            "定西": {
                "定西": { "id": "CHGS010000", "en": "Dingxi" },
                "通渭": { "id": "CHGS010100", "en": "Tongwei" },
                "陇西": { "id": "CHGS010200", "en": "Longxi" },
                "渭源": { "id": "CHGS010300", "en": "Weiyuan" },
                "临洮": { "id": "CHGS010400", "en": "Lintao" },
                "漳县": { "id": "CHGS010500", "en": "Zhangxian" },
                "岷县": { "id": "CHGS010600", "en": "Minxian" },
                "安定": { "id": "CHGS010700", "en": "Anding" }
            },
            "平凉": {
                "平凉": { "id": "CHGS020000", "en": "Pingliang" },
                "泾川": { "id": "CHGS020100", "en": "Jingchuan" },
                "灵台": { "id": "CHGS020200", "en": "Lingtai" },
                "崇信": { "id": "CHGS020300", "en": "Chongxin" },
                "华亭": { "id": "CHGS020400", "en": "Huating" },
                "庄浪": { "id": "CHGS020500", "en": "Zhuanglang" },
                "静宁": { "id": "CHGS020600", "en": "Jingning" },
                "崆峒": { "id": "CHGS020700", "en": "Kongtong" }
            },
            "庆阳": {
                "庆阳": { "id": "CHGS030000", "en": "Qingyang" },
                "西峰": { "id": "CHGS030800", "en": "Xifeng" },
                "环县": { "id": "CHGS030100", "en": "Huanxian" },
                "华池": { "id": "CHGS030200", "en": "Huachi" },
                "合水": { "id": "CHGS030300", "en": "Heshui" },
                "正宁": { "id": "CHGS030400", "en": "Zhengning" },
                "宁县": { "id": "CHGS030500", "en": "Ningxian" },
                "镇原": { "id": "CHGS030600", "en": "Zhenyuan" },
                "庆城": { "id": "CHGS030700", "en": "Qingcheng" }
            },
            "武威": {
                "武威": { "id": "CHGS040000", "en": "Wuwei" },
                "民勤": { "id": "CHGS040100", "en": "Minqin" },
                "古浪": { "id": "CHGS040200", "en": "Gulang" },
                "天祝": { "id": "CHGS040300", "en": "Tianzhu" }
            },
            "金昌": {
                "金昌": { "id": "CHGS050000", "en": "Jinchang" },
                "永昌": { "id": "CHGS050100", "en": "Yongchang" }
            },
            "张掖": {
                "张掖": { "id": "CHGS060000", "en": "Zhangye" },
                "肃南": { "id": "CHGS060100", "en": "Sunan" },
                "民乐": { "id": "CHGS060200", "en": "Minle" },
                "临泽": { "id": "CHGS060300", "en": "Linze" },
                "高台": { "id": "CHGS060400", "en": "Gaotai" },
                "山丹": { "id": "CHGS060500", "en": "Shandan" }
            },
            "酒泉": {
                "酒泉": { "id": "CHGS070000", "en": "Jiuquan" },
                "金塔": { "id": "CHGS070100", "en": "Jinta" },
                "阿克塞": { "id": "CHGS070200", "en": "Akesai" },
                "瓜州": { "id": "CHGS070300", "en": "Guazhou" },
                "肃北": { "id": "CHGS070400", "en": "Subei" },
                "玉门": { "id": "CHGS070500", "en": "Yumen" },
                "敦煌": { "id": "CHGS070600", "en": "Dunhuang" }
            },
            "天水": {
                "天水": { "id": "CHGS080000", "en": "Tianshui" },
                "清水": { "id": "CHGS080100", "en": "Qingshui" },
                "秦安": { "id": "CHGS080200", "en": "Qinan" },
                "甘谷": { "id": "CHGS080300", "en": "Gangu" },
                "武山": { "id": "CHGS080400", "en": "Wushan" },
                "张家川": { "id": "CHGS080500", "en": "Zhangjiachuan" },
                "麦积": { "id": "CHGS080600", "en": "Maiji" }
            },
            "陇南": {
                "武都": { "id": "CHGS090000", "en": "Wudu" },
                "成县": { "id": "CHGS090100", "en": "Chengxian" },
                "文县": { "id": "CHGS090200", "en": "Wenxian" },
                "宕昌": { "id": "CHGS090300", "en": "Dangchang" },
                "康县": { "id": "CHGS090400", "en": "Kangxian" },
                "西和": { "id": "CHGS090500", "en": "Xihe" },
                "礼县": { "id": "CHGS090600", "en": "Lixian" },
                "徽县": { "id": "CHGS090700", "en": "Huixian" },
                "两当": { "id": "CHGS090800", "en": "Liangdang" }
            },
            "临夏": {
                "临夏": { "id": "CHGS100000", "en": "Linxia" },
                "康乐": { "id": "CHGS100100", "en": "Kangle" },
                "永靖": { "id": "CHGS100200", "en": "Yongjing" },
                "广河": { "id": "CHGS100300", "en": "Guanghe" },
                "和政": { "id": "CHGS100400", "en": "Hezheng" },
                "东乡": { "id": "CHGS100500", "en": "Dongxiang" },
                "积石山": { "id": "CHGS100600", "en": "Jishishan" }
            },
            "甘南": {
                "合作": { "id": "CHGS110000", "en": "Hezuo" },
                "临潭": { "id": "CHGS110100", "en": "Lintan" },
                "卓尼": { "id": "CHGS110200", "en": "Zhuoni" },
                "舟曲": { "id": "CHGS110300", "en": "Zhouqu" },
                "迭部": { "id": "CHGS110400", "en": "Diebu" },
                "玛曲": { "id": "CHGS110500", "en": "Maqu" },
                "碌曲": { "id": "CHGS110600", "en": "Luqu" },
                "夏河": { "id": "CHGS110700", "en": "Xiahe" }
            },
            "白银": {
                "白银": { "id": "CHGS120000", "en": "Baiyin" },
                "靖远": { "id": "CHGS120100", "en": "Jingyuan" },
                "会宁": { "id": "CHGS120200", "en": "Huining" },
                "平川": { "id": "CHGS120300", "en": "Pingchuan" },
                "景泰": { "id": "CHGS120400", "en": "Jingtai" }
            },
            "嘉峪关": { "嘉峪关": { "id": "CHGS130000", "en": "Jiayuguan" } }
        },
        "青海": {
            "西宁": {
                "西宁": { "id": "CHQH000000", "en": "Xining" },
                "大通": { "id": "CHQH000100", "en": "Datong" },
                "湟源": { "id": "CHQH000200", "en": "Huangyuan" },
                "湟中": { "id": "CHQH000300", "en": "Huangzhong" }
            },
            "海东": {
                "海东": { "id": "CHQH010000", "en": "Haidong" },
                "乐都": { "id": "CHQH010100", "en": "Ledu" },
                "民和": { "id": "CHQH010200", "en": "Minhe" },
                "互助": { "id": "CHQH010300", "en": "Huzhu" },
                "化隆": { "id": "CHQH010400", "en": "Hualong" },
                "循化": { "id": "CHQH010500", "en": "Xunhua" },
                "平安": { "id": "CHQH010700", "en": "Pingan" }
            },
            "黄南": {
                "黄南": { "id": "CHQH020000", "en": "Huangnan" },
                "尖扎": { "id": "CHQH020100", "en": "Jianzha" },
                "泽库": { "id": "CHQH020200", "en": "Zeku" },
                "河南": { "id": "CHQH020300", "en": "Henan" },
                "同仁": { "id": "CHQH020400", "en": "Tongren" }
            },
            "海南": {
                "海南": { "id": "CHQH030000", "en": "Hainan" },
                "贵德": { "id": "CHQH030100", "en": "Guide" },
                "兴海": { "id": "CHQH030200", "en": "Xinghai" },
                "贵南": { "id": "CHQH030300", "en": "Guinan" },
                "同德": { "id": "CHQH030400", "en": "Tongde" },
                "共和": { "id": "CHQH030500", "en": "Gonghe" }
            },
            "果洛": {
                "果洛": { "id": "CHQH040000", "en": "Guoluo" },
                "班玛": { "id": "CHQH040100", "en": "Banma" },
                "甘德": { "id": "CHQH040200", "en": "Gande" },
                "达日": { "id": "CHQH040300", "en": "Dari" },
                "久治": { "id": "CHQH040400", "en": "Jiuzhi" },
                "玛多": { "id": "CHQH040500", "en": "Madu" },
                "多县": { "id": "CHQH040600", "en": "Duoxian" },
                "玛沁": { "id": "CHQH040700", "en": "Maqin" }
            },
            "玉树": {
                "玉树": { "id": "CHQH050000", "en": "Yushu" },
                "称多": { "id": "CHQH050100", "en": "Chenduo" },
                "治多": { "id": "CHQH050200", "en": "Zhiduo" },
                "杂多": { "id": "CHQH050300", "en": "Zaduo" },
                "囊谦": { "id": "CHQH050400", "en": "Nangqian" },
                "曲麻莱": { "id": "CHQH050500", "en": "Qumacai" }
            },
            "海西": {
                "海西": { "id": "CHQH060000", "en": "Haixi" },
                "天峻": { "id": "CHQH060100", "en": "Tianjun" },
                "乌兰": { "id": "CHQH060200", "en": "Wulan" },
                "茫崖": { "id": "CHQH060300", "en": "Mangai" },
                "大柴旦": { "id": "CHQH060400", "en": "Dachaidan" },
                "德令哈": { "id": "CHQH060500", "en": "Delingha" },
                "冷湖": { "id": "CHQH010600", "en": "Lenghu" }
            },
            "海北": {
                "海北": { "id": "CHQH070000", "en": "Haibei" },
                "门源": { "id": "CHQH070100", "en": "Menyuan" },
                "祁连": { "id": "CHQH070200", "en": "Qilian" },
                "海晏": { "id": "CHQH070300", "en": "Haiyan" },
                "刚察": { "id": "CHQH070400", "en": "Gangcha" }
            },
            "格尔木": {
                "格尔木": { "id": "CHQH080000", "en": "Geermu" },
                "都兰": { "id": "CHQH080100", "en": "Dulan" }
            }
        },
        "新疆": {
            "乌鲁木齐": {
                "乌鲁木齐": { "id": "CHXJ000000", "en": "Wulumuqi" },
                "小渠子": { "id": "CHXJ000100", "en": "Xiaoquzi" },
                "达坂城": { "id": "CHXJ000200", "en": "Dabancheng" },
                "乌鲁木齐牧试站": { "id": "CHXJ000300", "en": "Wulumuqimushizhan" },
                "天池": { "id": "CHXJ000400", "en": "Tianchi" },
                "白杨沟": { "id": "CHXJ000500", "en": "Baiyanggou" }
            },
            "克拉玛依": {
                "克拉玛依": { "id": "CHXJ010000", "en": "Kelamayi" },
                "乌尔禾": { "id": "CHXJ010100", "en": "Wuerhe" },
                "白碱滩": { "id": "CHXJ010200", "en": "Baijiantan" }
            },
            "石河子": {
                "石河子": { "id": "CHXJ020000", "en": "Shihezi" },
                "炮台": { "id": "CHXJ020100", "en": "Paotai" },
                "莫索湾": { "id": "CHXJ020200", "en": "Mosuowan" }
            },
            "昌吉": {
                "昌吉": { "id": "CHXJ030000", "en": "Changji" },
                "呼图壁": { "id": "CHXJ030100", "en": "Hutubi" },
                "米泉": { "id": "CHXJ030200", "en": "Miquan" },
                "阜康": { "id": "CHXJ030300", "en": "Fukang" },
                "吉木萨尔": { "id": "CHXJ030400", "en": "Jimusaer" },
                "奇台": { "id": "CHXJ030500", "en": "Qitai" },
                "玛纳斯": { "id": "CHXJ030600", "en": "Manasi" },
                "木垒": { "id": "CHXJ030700", "en": "Mulei" },
                "蔡家湖": { "id": "CHXJ030800", "en": "Caijiahu" }
            },
            "吐鲁番": {
                "吐鲁番": { "id": "CHXJ040000", "en": "Tulufan" },
                "托克逊": { "id": "CHXJ040100", "en": "Tuokexun" },
                "鄯善": { "id": "CHXJ040200", "en": "Shanshan" }
            },
            "巴音郭楞": {
                "库尔勒": { "id": "CHXJ050000", "en": "Kuerle" },
                "轮台": { "id": "CHXJ050100", "en": "Luntai" },
                "尉犁": { "id": "CHXJ050200", "en": "Weili" },
                "若羌": { "id": "CHXJ050300", "en": "Ruoqiang" },
                "且末": { "id": "CHXJ050400", "en": "Qiemo" },
                "和静": { "id": "CHXJ050500", "en": "Hejing" },
                "焉耆": { "id": "CHXJ050600", "en": "Yanqi" },
                "和硕": { "id": "CHXJ050700", "en": "Shuo" },
                "巴音布鲁克": { "id": "CHXJ050800", "en": "Bayinbuluke" },
                "铁干里克": { "id": "CHXJ050900", "en": "Tieganlike" },
                "博湖": { "id": "CHXJ051000", "en": "Bohu" },
                "塔中": { "id": "CHXJ051100", "en": "Tazhong" },
                "巴仑台": { "id": "CHXJ051200", "en": "Baluntai" }
            },
            "阿拉尔": { "阿拉尔": { "id": "CHXJ060000", "en": "Alaer" } },
            "阿克苏": {
                "阿克苏": { "id": "CHXJ070000", "en": "Akesu" },
                "乌什": { "id": "CHXJ070100", "en": "Wushi" },
                "温宿": { "id": "CHXJ070200", "en": "Wensu" },
                "拜城": { "id": "CHXJ070300", "en": "Baicheng" },
                "新和": { "id": "CHXJ070400", "en": "Xinhe" },
                "沙雅": { "id": "CHXJ070500", "en": "Shaya" },
                "库车": { "id": "CHXJ070600", "en": "Kuche" },
                "柯坪": { "id": "CHXJ070700", "en": "Keping" },
                "阿瓦提": { "id": "CHXJ070800", "en": "Awati" }
            },
            "喀什": {
                "喀什": { "id": "CHXJ080000", "en": "Kashi" },
                "英吉沙": { "id": "CHXJ080100", "en": "Yingjisha" },
                "塔什库尔干": { "id": "CHXJ080200", "en": "Tashikuergan" },
                "麦盖提": { "id": "CHXJ080300", "en": "Maigaiti" },
                "莎车": { "id": "CHXJ080400", "en": "Shache" },
                "叶城": { "id": "CHXJ080500", "en": "Yecheng" },
                "泽普": { "id": "CHXJ080600", "en": "Zepu" },
                "巴楚": { "id": "CHXJ080700", "en": "Bachu" },
                "岳普湖": { "id": "CHXJ080800", "en": "Yuepuhu" },
                "伽师": { "id": "CHXJ080900", "en": "Jiashi" },
                "疏附": { "id": "CHXJ081000", "en": "Shufu" },
                "疏勒": { "id": "CHXJ081100", "en": "Shule" }
            },
            "伊犁": {
                "伊宁": { "id": "CHXJ090000", "en": "Yining" },
                "察布查尔": { "id": "CHXJ090100", "en": "Chabuchaer" },
                "尼勒克": { "id": "CHXJ090200", "en": "Nileke" },
                "伊宁县": { "id": "CHXJ090300", "en": "Yiningxian" },
                "巩留": { "id": "CHXJ090400", "en": "Gongliu" },
                "新源": { "id": "CHXJ090500", "en": "Xinyuan" },
                "昭苏": { "id": "CHXJ090600", "en": "Zhaosu" },
                "特克斯": { "id": "CHXJ090700", "en": "Tekesi" },
                "霍城": { "id": "CHXJ090800", "en": "Huocheng" },
                "霍尔果斯": { "id": "CHXJ090900", "en": "Huoerguosi" },
                "奎屯": { "id": "CHXJ091000", "en": "Kuitunshi" }
            },
            "塔城": {
                "塔城": { "id": "CHXJ100000", "en": "Tacheng" },
                "裕民": { "id": "CHXJ100100", "en": "Yumin" },
                "额敏": { "id": "CHXJ100200", "en": "Emin" },
                "和布克赛尔": { "id": "CHXJ100300", "en": "Hebukesaier" },
                "托里": { "id": "CHXJ100400", "en": "Tuoli" },
                "乌苏": { "id": "CHXJ100500", "en": "Wusu" },
                "沙湾": { "id": "CHXJ100600", "en": "Shawan" }
            },
            "哈密": {
                "哈密": { "id": "CHXJ110000", "en": "Hami" },
                "巴里坤": { "id": "CHXJ110100", "en": "Balikun" },
                "伊吾": { "id": "CHXJ110200", "en": "Yiwu" }
            },
            "和田": {
                "和田": { "id": "CHXJ120000", "en": "Hetian" },
                "皮山": { "id": "CHXJ120100", "en": "Pishan" },
                "策勒": { "id": "CHXJ120200", "en": "Cele" },
                "墨玉": { "id": "CHXJ120300", "en": "Moyu" },
                "洛浦": { "id": "CHXJ120400", "en": "Luopu" },
                "民丰": { "id": "CHXJ120500", "en": "Minfeng" },
                "于田": { "id": "CHXJ120600", "en": "Yutian" }
            },
            "阿勒泰": {
                "阿勒泰": { "id": "CHXJ130000", "en": "Aletai" },
                "哈巴河": { "id": "CHXJ130100", "en": "Habahe" },
                "吉木乃": { "id": "CHXJ130200", "en": "Jimunai" },
                "布尔津": { "id": "CHXJ130300", "en": "Buerjin" },
                "福海": { "id": "CHXJ130400", "en": "Fuhai" },
                "富蕴": { "id": "CHXJ130500", "en": "Fuyun" },
                "青河": { "id": "CHXJ130600", "en": "Qinghe" }
            },
            "克州": {
                "阿图什": { "id": "CHXJ140000", "en": "Atushi" },
                "乌恰": { "id": "CHXJ140100", "en": "Wuqia" },
                "阿克陶": { "id": "CHXJ140200", "en": "Aketao" },
                "阿合奇": { "id": "CHXJ140300", "en": "Aheqi" }
            },
            "博尔塔拉": {
                "博乐": { "id": "CHXJ150000", "en": "Bole" },
                "温泉": { "id": "CHXJ150100", "en": "Wenquan" },
                "精河": { "id": "CHXJ150200", "en": "Jinghe" },
                "阿拉山口": { "id": "CHXJ150300", "en": "Alashankou" }
            }
        }
    },
    "全球": {
        "亚洲": {
            "日本": {
                "东京": { "id": "JAXX000000", "en": "Tokyo" },
                "横滨": { "id": "JAXX010000", "en": "Yokohama" },
                "名古屋": { "id": "JAXX020000", "en": "Nagoya" },
                "大阪": { "id": "JAXX030000", "en": "Osaka" },
                "京都": { "id": "JAXX040000", "en": "Kyoto" },
                "奈良": { "id": "JAXX050000", "en": "Nara" },
                "神户": { "id": "JAXX060000", "en": "Kobe" },
                "高知": { "id": "JAXX070000", "en": "Kochi" },
                "广岛": { "id": "JAXX080000", "en": "Hiroshima" },
                "福冈": { "id": "JAXX090000", "en": "Fukuoka" },
                "北九州": { "id": "JAXX100000", "en": "Kitakyushu" },
                "长崎": { "id": "JAXX110000", "en": "Nagasaki" },
                "仙台": { "id": "JAXX120000", "en": "Sendai" },
                "长野": { "id": "JAXX130000", "en": "Nagano" },
                "新泻": { "id": "JAXX140000", "en": "Niigata" },
                "青森": { "id": "JAXX150000", "en": "Aomori" },
                "札幌": { "id": "JAXX160000", "en": "Sapporo" },
                "鹿儿岛": { "id": "JAXX170000", "en": "Kagoshima" },
                "那霸": { "id": "JAXX180000", "en": "Naha" }
            },
            "印度": {
                "新德里": { "id": "INXX000000", "en": "Delhi" },
                "孟买": { "id": "INXX010000", "en": "Mumbai" },
                "加尔各答": { "id": "INXX020000", "en": "Kolkata" },
                "布巴内斯瓦尔": { "id": "INXX030000", "en": "Bhubaneswar" },
                "维萨卡帕特南": { "id": "INXX040000", "en": "Visakhapatnam" },
                "金奈": { "id": "INXX050000", "en": "Chennai" },
                "马杜赖": { "id": "INXX060000", "en": "Madurai" },
                "班加罗尔": { "id": "INXX070000", "en": "Bangalore" },
                "海德拉巴": { "id": "INXX080000", "en": "Hyderabad" },
                "那格浦尔": { "id": "INXX090000", "en": "Nagpur" },
                "浦那": { "id": "INXX100000", "en": "Pune" },
                "苏拉特": { "id": "INXX110000", "en": "Surat" },
                "艾哈迈达巴德": { "id": "INXX120000", "en": "Ahmedabad" },
                "比卡内尔": { "id": "INXX130000", "en": "Bikaner" },
                "卢迪亚纳": { "id": "INXX140000", "en": "Ludhiana" },
                "斯利那加": { "id": "INXX150000", "en": "Srinagar" },
                "斋浦尔": { "id": "INXX160000", "en": "Jaipur" },
                "阿格拉 (泰姬陵)": { "id": "INXX170000", "en": "Agra (Taj Mahal)" },
                "坎普尔": { "id": "INXX180000", "en": "Kanpur" },
                "勒克瑙": { "id": "INXX190000", "en": "Lucknow" },
                "巴特那": { "id": "INXX200000", "en": "Patna" },
                "英帕尔": { "id": "INXX210000", "en": "Imphal" },
                "布莱尔港 (安达曼岛)": { "id": "INXX220000", "en": "Port Blair (Andaman)" }
            },
            "印度尼西亚": {
                "雅加达": { "id": "IDXX000000", "en": "Jakarta" },
                "万隆": { "id": "IDXX010000", "en": "Bandung" },
                "棉兰": { "id": "IDXX020000", "en": "Medan" },
                "巴东": { "id": "IDXX030000", "en": "Padang" },
                "巨港": { "id": "IDXX040000", "en": "Palembang" },
                "三口洋市": { "id": "IDXX050000", "en": "Singkawang" },
                "马塔普拉": { "id": "IDXX060000", "en": "Martapura" },
                "巴厘巴板": { "id": "IDXX070000", "en": "Balikpapan" },
                "望加锡": { "id": "IDXX080000", "en": "Makassar" },
                "帕卢": { "id": "IDXX090000", "en": "Palu" },
                "哥伦打洛": { "id": "IDXX100000", "en": "Gorontalo" },
                "万鸦老": { "id": "IDXX110000", "en": "Manado" },
                "曼诺瓦里": { "id": "IDXX120000", "en": "Manokwari" },
                "安汶": { "id": "IDXX130000", "en": "Ambon" },
                "古邦": { "id": "IDXX140000", "en": "Kupang" },
                "丹帕沙 (巴厘岛)": { "id": "IDXX150000", "en": "Denpasar (Bali)" },
                "泗水": { "id": "IDXX160000", "en": "Surabaya" },
                "三宝珑": { "id": "IDXX170000", "en": "Semarang" },
                "日惹 (婆罗浮屠)": { "id": "IDXX180000", "en": "Yogyakarta" }
            },
            "马来西亚": {
                "吉隆坡": { "id": "MYXX000000", "en": "Kuala Lumpur" },
                "马六甲": { "id": "MYXX010000", "en": "Melaka" },
                "槟城": { "id": "MYXX020000", "en": "Penang" },
                "怡保": { "id": "MYXX030000", "en": "Ipoh" },
                "哥打巴鲁": { "id": "MYXX040000", "en": "Kota Bharu" },
                "关丹": { "id": "MYXX050000", "en": "Kuantan" },
                "新山": { "id": "MYXX060000", "en": "Johor Bahru" },
                "古晋": { "id": "MYXX070000", "en": "Kuching" },
                "诗巫 (泗务)": { "id": "MYXX080000", "en": "Sibu" },
                "民都鲁": { "id": "MYXX090000", "en": "Bintulu" },
                "亚庇": { "id": "MYXX100000", "en": "Kota Kinabalu" },
                "三打根": { "id": "MYXX110000", "en": "Sandakan" }
            },
            "哈萨克斯坦": {
                "阿斯塔纳": { "id": "KZXX000000", "en": "Astana" },
                "卡拉干达": { "id": "KZXX010000", "en": "Karaganda" },
                "巴甫洛打尔": { "id": "KZXX020000", "en": "Pavlodar" },
                "厄斯克门": { "id": "KZXX030000", "en": "Oskemen" },
                "巴尔喀什": { "id": "KZXX040000", "en": "Balkhash" },
                "阿拉木图": { "id": "KZXX050000", "en": "Almaty" },
                "塔拉兹": { "id": "KZXX060000", "en": "Taraz" },
                "克孜勒奥尔达": { "id": "KZXX070000", "en": "Kyzylorda" },
                "阿克套": { "id": "KZXX080000", "en": "Aktau" },
                "阿特劳": { "id": "KZXX090000", "en": "Atyrau" },
                "乌拉尔斯克": { "id": "KZXX100000", "en": "Uralsk" },
                "库斯塔奈": { "id": "KZXX110000", "en": "Kostanay" },
                "彼得罗巴甫尔": { "id": "KZXX120000", "en": "Petropavlovsk" }
            },
            "沙特阿拉伯": {
                "利雅得": { "id": "SAXX000000", "en": "Riyadh" },
                "麦加": { "id": "SAXX010000", "en": "Mecca" },
                "吉达": { "id": "SAXX020000", "en": "Jeddah" },
                "麦地那": { "id": "SAXX030000", "en": "Medina" },
                "塞卡凯": { "id": "SAXX040000", "en": "Sakakah" },
                "哈伊勒": { "id": "SAXX050000", "en": "Hail" },
                "布赖代": { "id": "SAXX060000", "en": "Buraydah" },
                "达曼": { "id": "SAXX070000", "en": "Dammam" },
                "胡富夫": { "id": "SAXX080000", "en": "Hofuf" },
                "海米斯穆谢特": { "id": "SAXX090000", "en": "Kharnis Mushayt" }
            },
            "土耳其": {
                "安卡拉": { "id": "TUXX000000", "en": "Ankara" },
                "伊斯坦布尔": { "id": "TUXX010000", "en": "Istanbul" },
                "萨姆松": { "id": "TUXX020000", "en": "Samsun" },
                "埃尔祖鲁姆": { "id": "TUXX030000", "en": "Erzurum" },
                "迪亚巴克尔": { "id": "TUXX040000", "en": "Diyarbakir" },
                "阿达纳": { "id": "TUXX050000", "en": "Adana" },
                "科尼亚": { "id": "TUXX060000", "en": "Konya" },
                "安塔利亚": { "id": "TUXX070000", "en": "Antalya" },
                "伊兹密尔": { "id": "TUXX080000", "en": "Izmir" },
                "布尔萨": { "id": "TUXX090000", "en": "Brusa" }
            },
            "伊朗": {
                "德黑兰": { "id": "IRXX000000", "en": "Tehran" },
                "马什哈德": { "id": "IRXX010000", "en": "Mashhad" },
                "克尔曼": { "id": "IRXX020000", "en": "Kerman" },
                "阿巴斯港": { "id": "IRXX030000", "en": "Bandar Abbas" },
                "设拉子": { "id": "IRXX040000", "en": "Shiraz" },
                "伊斯法罕": { "id": "IRXX050000", "en": "Esfahan" },
                "阿巴丹": { "id": "IRXX060000", "en": "Abadan" },
                "大不里士": { "id": "IRXX070000", "en": "Tabriz" }
            },
            "巴基斯坦": {
                "伊斯兰堡": { "id": "PKXX000000", "en": "Islamabad" },
                "卡拉奇": { "id": "PKXX010000", "en": "Karachi" },
                "拉合尔": { "id": "PKXX020000", "en": "Lahore" },
                "费萨拉巴德": { "id": "PKXX030000", "en": "Faisalabad" },
                "木尔坦": { "id": "PKXX040000", "en": "Multan" },
                "海德拉巴": { "id": "PKXX050000", "en": "Hyderabad" },
                "奎达": { "id": "PKXX060000", "en": "Quetta" },
                "白沙瓦": { "id": "PKXX070000", "en": "Peshawar" }
            },
            "孟加拉": {
                "达卡": { "id": "BGXX000000", "en": "Dhaka" },
                "吉大港": { "id": "BGXX010000", "en": "Chittagong" },
                "库尔纳市": { "id": "BGXX020000", "en": "Khulna" },
                "博格拉": { "id": "BGXX030000", "en": "Bogra" },
                "锡尔赫特市": { "id": "BGXX040000", "en": "Sylhet" }
            },
            "缅甸": {
                "内比都": { "id": "BMXX000000", "en": "Naypyidaw" },
                "仰光": { "id": "BMXX010000", "en": "Yangon" },
                "勃生": { "id": "BMXX020000", "en": "Pathein" },
                "曼德勒": { "id": "BMXX030000", "en": "Mandalay" },
                "密支那": { "id": "BMXX040000", "en": "Myitkyina" },
                "腊戌": { "id": "BMXX050000", "en": "Lashio" },
                "勃固": { "id": "BMXX060000", "en": "Bago" },
                "毛淡棉": { "id": "BMXX070000", "en": "Mawlamyine" },
                "丹老": { "id": "BMXX080000", "en": "Myeik" }
            },
            "泰国": {
                "曼谷": { "id": "THXX000000", "en": "Bangkok" },
                "清迈": { "id": "THXX010000", "en": "Chiang Mai" },
                "乌隆他尼": { "id": "THXX020000", "en": "Udon Thani" },
                "呵叻": { "id": "THXX030000", "en": "Nakhon Ratchasima" },
                "芭堤雅": { "id": "THXX040000", "en": "Pattaya" },
                "普吉": { "id": "THXX050000", "en": "Phuket" },
                "苏梅岛": { "id": "THXX060000", "en": "Koh Samui" },
                "宋卡": { "id": "THXX070000", "en": "Songkhla" }
            },
            "柬埔寨": {
                "金边": { "id": "CBXX000000", "en": "Phnom Penh" },
                "西哈努克港": { "id": "CBXX010000", "en": "Sihanoukville" },
                "马德望": { "id": "CBXX020000", "en": "Batdambang" },
                "暹粒市 (吴哥窟)": { "id": "CBXX030000", "en": "Siemreab" },
                "隆发": { "id": "CBXX040000", "en": "Lumphat" }
            },
            "越南": {
                "河内": { "id": "VMXX000000", "en": "Hanoi" },
                "海防": { "id": "VMXX010000", "en": "Haiphong" },
                "顺化": { "id": "VMXX020000", "en": "Hue" },
                "岘港": { "id": "VMXX030000", "en": "Da Nang" },
                "芽庄": { "id": "VMXX040000", "en": "Nha Trang" },
                "胡志明市": { "id": "VMXX050000", "en": "Ho Chi Minh" }
            },
            "菲律宾": {
                "马尼拉": { "id": "RPXX000000", "en": "Manila" },
                "宿务": { "id": "RPXX010000", "en": "Cebu" },
                "达沃市": { "id": "RPXX020000", "en": "Davao City" },
                "三宝颜": { "id": "RPXX030000", "en": "Zamboanga" },
                "普林塞萨港 (公主港)": { "id": "RPXX040000", "en": "Puerto Princesa" },
                "拉瓦格": { "id": "RPXX050000", "en": "Laoag" }
            },
            "韩国": {
                "首尔": { "id": "KSXX000000", "en": "Seoul" },
                "大邱": { "id": "KSXX010000", "en": "Daegu" },
                "釜山": { "id": "KSXX020000", "en": "Pusan" },
                "济州": { "id": "KSXX030000", "en": "Cheju" },
                "光州": { "id": "KSXX040000", "en": "Kwangju" },
                "仁川": { "id": "KSXX050000", "en": "Incheon" }
            },
            "朝鲜": {
                "平壤": { "id": "KNXX000000", "en": "Pyongyang" },
                "清津": { "id": "KNXX010000", "en": "Ch'ongjin" },
                "咸兴": { "id": "KNXX020000", "en": "Hamhung" },
                "元山": { "id": "KNXX030000", "en": "Wonsan" },
                "开城": { "id": "KNXX040000", "en": "Kaesong" }
            },
            "蒙古": {
                "乌兰巴托": { "id": "MGXX000000", "en": "Ulan Bator" },
                "乌里雅苏台": { "id": "MGXX010000", "en": "Uliastai" },
                "额尔登特": { "id": "MGXX020000", "en": "Erdenet" },
                "达尔汗": { "id": "MGXX030000", "en": "Darhan" },
                "乔巴山": { "id": "MGXX040000", "en": "Choybalsan" }
            },
            "阿联酋": {
                "阿布扎比": { "id": "AEXX000000", "en": "Abu Dhabi" },
                "迪拜": { "id": "AEXX010000", "en": "Dubai" }
            },
            "新加坡": { "新加坡": { "id": "SNXX000000", "en": "Singapore" } },
            "马尔代夫": { "马累": { "id": "MVXX000000", "en": "Male" } },
            "亚洲东部": {
                "斯里巴加湾市 (文莱)": { "id": "BXXX000000", "en": "Bandar Seri Begawan (Brunei)" },
                "帝力 (东帝汶)": { "id": "TTXX000000", "en": "Dili (East Timor)" },
                "万象 (老挝)": { "id": "LAXX000000", "en": "Vientiane (Laos)" },
                "琅勃拉邦 (老挝)": { "id": "LAXX010000", "en": "Luang Prabang (Laos)" },
                "沙湾拿吉 (老挝)": { "id": "LAXX020000", "en": "Savannakhet (Laos)" },
                "科伦坡 (斯里兰卡)": { "id": "CEXX000000", "en": "Colombo (Sri Lanka)" },
                "亭可马里 (斯里兰卡)": { "id": "CEXX010000", "en": "Trincomalee (Sri Lanka)" },
                "廷布 (不丹)": { "id": "BTXX000000", "en": "Thimphu (Bhutan)" },
                "加德满都 (尼泊尔)": { "id": "NPXX000000", "en": "Kathmandu (Nepal)" },
                "博卡拉 (尼泊尔)": { "id": "NPXX010000", "en": "Pokhara (Nepal)" }
            },
            "亚洲中部": {
                "喀布尔 (阿富汗)": { "id": "AFXX000000", "en": "Kabul (Afghanistan)" },
                "坎大哈 (阿富汗)": { "id": "AFXX010000", "en": "Kandahar (Afghanistan)" },
                "赫拉特 (阿富汗)": { "id": "AFXX020000", "en": "Herat (Afghanistan)" },
                "马扎里沙里夫 (阿富汗)": { "id": "AFXX030000", "en": "Mazar-i-Sharif (Afghanistan)" },
                "杜尚别 (塔吉克斯坦)": { "id": "TIXX000000", "en": "Dushanbe (Tajikistan)" },
                "比什凯克 (吉尔吉斯斯坦)": { "id": "KGXX000000", "en": "Bishkek (Kyrgyzstan)" },
                "奥什 (吉尔吉斯斯坦)": { "id": "KGXX010000", "en": "Osh (Kyrgyzstan)" },
                "塔什干 (乌兹别克斯坦)": { "id": "UZXX000000", "en": "Tashkent (Uzbekistan)" },
                "撒马尔罕 (乌兹别克斯坦)": { "id": "UZXX010000", "en": "Samarkand (Uzbekistan)" },
                "布哈拉 (乌兹别克斯坦)": { "id": "UZXX020000", "en": "Bukhara (Uzbekistan)" },
                "乌尔根奇 (乌兹别克斯坦)": { "id": "UZXX030000", "en": "Urgench (Uzbekistan)" },
                "阿什哈巴德 (土库曼斯坦)": { "id": "TXXX000000", "en": "Ashgabat (Turkmenistan)" },
                "巴尔坎纳巴德 (土库曼斯坦)": { "id": "TXXX010000", "en": "Nebit Dag (Turkmenistan)" },
                "马雷 (土库曼斯坦)": { "id": "TXXX020000", "en": "Mary (Turkmenistan)" },
                "土库曼纳巴德 (土库曼斯坦)": { "id": "TXXX030000", "en": "Turkmenabat (Turkmenistan)" }
            },
            "亚洲西部": {
                "巴库 (阿塞拜疆)": { "id": "AJXX000000", "en": "Baku (Azerbaijan)" },
                "埃里温 (亚美尼亚)": { "id": "AMXX000000", "en": "Yerevan (Armenia)" },
                "第比利斯 (格鲁吉亚)": { "id": "GGXX000000", "en": "Tbilisi (Georgia)" },
                "科威特城 (科威特)": { "id": "KUXX000000", "en": "Kuwait City (Kuwait)" },
                "巴格达 (伊拉克)": { "id": "IZXX000000", "en": "Baghdad (Iraq)" },
                "巴士拉 (伊拉克)": { "id": "IZXX010000", "en": "Basrah (Iraq)" },
                "摩苏尔 (伊拉克)": { "id": "IZXX020000", "en": "Mosul (Iraq)" },
                "大马士革 (叙利亚)": { "id": "SYXX000000", "en": "Damascus (Syria)" },
                "阿勒颇 (叙利亚)": { "id": "SYXX010000", "en": "Aleppo (Syria)" },
                "尼科西亚 (塞浦路斯)": { "id": "CYXX000000", "en": "Nicosia (Cyprus)" },
                "贝鲁特 (黎巴嫩)": { "id": "LEXX000000", "en": "Beirut (Lebanon)" },
                "耶路撒冷 (以色列、巴勒斯坦)": { "id": "ISXX000000", "en": "Jerusalem (Israel)" },
                "特拉维夫 (以色列)": { "id": "ISXX010000", "en": "Tel Aviv (Israel)" },
                "安曼 (约旦)": { "id": "JOXX000000", "en": "Amman (Jordan)" },
                "佩特拉 (约旦)": { "id": "JOXX010000", "en": "Petra (Jordan)" },
                "麦纳麦 (巴林)": { "id": "BAXX000000", "en": "Manama (Bahrain)" },
                "多哈 (卡塔尔)": { "id": "QAXX000000", "en": "Doha (Qatar)" },
                "马斯喀特 (阿曼)": { "id": "MUXX000000", "en": "Muscat (Oman)" },
                "塞拉莱 (阿曼)": { "id": "MUXX010000", "en": "Salalah (Oman)" },
                "萨纳 (也门)": { "id": "YMXX000000", "en": "SaNaa (Yemen)" },
                "穆卡拉 (也门)": { "id": "YMXX010000", "en": "Al Mukalla (Yemen)" },
                "亚丁 (也门)": { "id": "YMXX020000", "en": "Aden (Yemen)" }
            }
        },
        "欧洲": {
            "俄罗斯 (欧洲部分)": {
                "莫斯科": { "id": "RSXX000000", "en": "Moscow" },
                "圣彼得堡": { "id": "RSXX010000", "en": "Saint Petersburg" },
                "彼得罗扎沃茨克": { "id": "RSXX020000", "en": "Petrozavodsk" },
                "摩尔曼斯克": { "id": "RSXX030000", "en": "Murmansk" },
                "阿尔汉格尔斯克": { "id": "RSXX040000", "en": "Arkhangelsk" },
                "沃洛格达": { "id": "RSXX050000", "en": "Vologda" },
                "下诺夫哥罗德": { "id": "RSXX060000", "en": "Nizhny Novgorod" },
                "喀山": { "id": "RSXX070000", "en": "Kazan" },
                "基洛夫": { "id": "RSXX080000", "en": "Kirov" },
                "瑟克特夫卡尔": { "id": "RSXX090000", "en": "Syktyvkar" },
                "沃尔库塔": { "id": "RSXX100000", "en": "Vorkuta" },
                "彼尔姆": { "id": "RSXX110000", "en": "Perm" },
                "乌法": { "id": "RSXX120000", "en": "Ufa" },
                "萨马拉": { "id": "RSXX130000", "en": "Samara" },
                "乌里扬诺夫斯克": { "id": "RSXX140000", "en": "Ulyanovsk" },
                "萨拉托夫": { "id": "RSXX150000", "en": "Saratov" },
                "伏尔加格勒": { "id": "RSXX160000", "en": "Volgograd" },
                "阿斯特拉罕": { "id": "RSXX170000", "en": "Astrakhan" },
                "马哈奇卡拉": { "id": "RSXX180000", "en": "Makhachkala" },
                "索契": { "id": "RSXX190000", "en": "Sochi" },
                "克拉斯诺达尔": { "id": "RSXX200000", "en": "Krasnodar" },
                "顿河畔罗斯托夫": { "id": "RSXX210000", "en": "Rostov-na-Donu" },
                "沃罗涅日": { "id": "RSXX220000", "en": "Voronezh" },
                "斯摩棱斯克": { "id": "RSXX230000", "en": "Smolensk" },
                "加里宁格勒市": { "id": "RSXX240000", "en": "Kaliningrad" }
            },
            "俄罗斯 (亚洲部分)": {
                "叶卡捷琳堡": { "id": "RSXX250000", "en": "Yekaterinburg" },
                "车里雅宾斯克": { "id": "RSXX260000", "en": "Chelyabinsk" },
                "秋明": { "id": "RSXX270000", "en": "Tyumen" },
                "鄂木斯克": { "id": "RSXX280000", "en": "Omsk" },
                "下瓦尔托夫斯克": { "id": "RSXX290000", "en": "Nizhnevartovsk" },
                "诺里尔斯克": { "id": "RSXX300000", "en": "Norilsk" },
                "新西伯利亚": { "id": "RSXX310000", "en": "Novosibirsk" },
                "巴尔瑙尔": { "id": "RSXX320000", "en": "Barnaul" },
                "托木斯克": { "id": "RSXX330000", "en": "Tomsk" },
                "克麦罗沃": { "id": "RSXX340000", "en": "Kemerovo" },
                "新库兹涅茨克": { "id": "RSXX350000", "en": "Novokuznetsk" },
                "克拉斯诺亚尔斯克": { "id": "RSXX360000", "en": "Krasnoyarsk" },
                "伊尔库茨克": { "id": "RSXX370000", "en": "Irkutsk" },
                "乌兰乌德": { "id": "RSXX380000", "en": "Ulan-Ude" },
                "赤塔": { "id": "RSXX390000", "en": "Chita-Russia" },
                "哈巴罗夫斯克 (伯力)": { "id": "RSXX400000", "en": "Khabarovsk" },
                "阿穆尔河畔共青城": { "id": "RSXX410000", "en": "Komsomolsk-na-Amur" },
                "雅库茨克": { "id": "RSXX420000", "en": "Yakutsk" },
                "马加丹": { "id": "RSXX430000", "en": "Magadan" },
                "阿纳德尔": { "id": "RSXX440000", "en": "Anadyr" },
                "彼得罗巴甫洛夫斯克 (勘察加)": { "id": "RSXX450000", "en": "Petropavlovsk-Kamchatskiy" },
                "南萨哈林斯克": { "id": "RSXX460000", "en": "Yuzhno-Sakhalinsk" },
                "符拉迪沃斯托克 (海参崴)": { "id": "RSXX470000", "en": "Vladivostok" }
            },
            "德国": {
                "柏林": { "id": "GMXX000000", "en": "Berlin" },
                "莱比锡": { "id": "GMXX010000", "en": "Leipzig" },
                "德累斯顿": { "id": "GMXX020000", "en": "Dresden" },
                "纽伦堡": { "id": "GMXX030000", "en": "Nurnberg" },
                "慕尼黑": { "id": "GMXX040000", "en": "Munchen" },
                "斯图加特": { "id": "GMXX050000", "en": "Stuttgart" },
                "法兰克福": { "id": "GMXX060000", "en": "Frankfurt" },
                "波恩": { "id": "GMXX070000", "en": "Bonn" },
                "科隆": { "id": "GMXX080000", "en": "Koln" },
                "杜塞尔多夫": { "id": "GMXX090000", "en": "Dusseldorf" },
                "杜伊斯堡": { "id": "GMXX100000", "en": "Duisburg" },
                "多特蒙德": { "id": "GMXX110000", "en": "Dortmund" },
                "汉诺威": { "id": "GMXX120000", "en": "Hannover" },
                "不莱梅": { "id": "GMXX130000", "en": "Bremen" },
                "汉堡": { "id": "GMXX140000", "en": "Hamburg" }
            },
            "英国": {
                "伦敦": { "id": "UKXX000000", "en": "London" },
                "南安普敦": { "id": "UKXX010000", "en": "Southampton" },
                "普利茅斯": { "id": "UKXX020000", "en": "Plymouth" },
                "加的夫": { "id": "UKXX030000", "en": "Cardiff" },
                "布里斯托尔": { "id": "UKXX040000", "en": "Bristol" },
                "伯明翰": { "id": "UKXX050000", "en": "Birmingham" },
                "利物浦": { "id": "UKXX060000", "en": "Liverpool" },
                "贝尔法斯特": { "id": "UKXX070000", "en": "Belfast " },
                "格拉斯哥": { "id": "UKXX080000", "en": "Glasgow" },
                "阿伯丁": { "id": "UKXX090000", "en": "Aberdeen" },
                "爱丁堡": { "id": "UKXX100000", "en": "Edinburgh" },
                "曼切斯特": { "id": "UKXX110000", "en": "Manchester" },
                "利兹": { "id": "UKXX120000", "en": "Leeds" },
                "诺丁汉": { "id": "UKXX130000", "en": "Nottingham" },
                "剑桥": { "id": "UKXX140000", "en": "Cambridge" },
                "牛津": { "id": "UKXX150000", "en": "Oxford" }
            },
            "法国": {
                "巴黎": { "id": "FRXX000000", "en": "Paris" },
                "里昂": { "id": "FRXX010000", "en": "Lyon" },
                "马赛": { "id": "FRXX020000", "en": "Marseille" },
                "阿维尼翁": { "id": "FRXX030000", "en": "Avignon" },
                "图卢兹": { "id": "FRXX040000", "en": "Toulouse" },
                "波尔多": { "id": "FRXX050000", "en": "Bordeaux" },
                "里摩日": { "id": "FRXX060000", "en": "Limoges" },
                "图尔": { "id": "FRXX070000", "en": "Tours" },
                "南特": { "id": "FRXX080000", "en": "Nantes" },
                "布雷斯特": { "id": "FRXX090000", "en": "Brest" },
                "勒阿弗尔": { "id": "FRXX100000", "en": "Le Havre" },
                "里尔": { "id": "FRXX110000", "en": "Lille" },
                "梅斯": { "id": "FRXX120000", "en": "Metz" },
                "斯特拉斯堡": { "id": "FRXX130000", "en": "Strasbourg" },
                "第戎": { "id": "FRXX140000", "en": "Dijon" },
                "尼斯": { "id": "FRXX150000", "en": "Nice" },
                "戛纳": { "id": "FRXX160000", "en": "Cannes" }
            },
            "西班牙": {
                "马德里": { "id": "SPXX000000", "en": "Madrid" },
                "萨拉戈萨": { "id": "SPXX010000", "en": "Zaragoza" },
                "巴塞罗那": { "id": "SPXX020000", "en": "Barcelona" },
                "帕尔马": { "id": "SPXX030000", "en": "Palma" },
                "巴伦西亚": { "id": "SPXX040000", "en": "Valencia" },
                "托雷维耶哈": { "id": "SPXX050000", "en": "Torrevieja" },
                "穆尔西亚": { "id": "SPXX060000", "en": "Murcia" },
                "马拉加": { "id": "SPXX070000", "en": "Malaga" },
                "塞维利亚": { "id": "SPXX080000", "en": "Seville" },
                "拉科鲁尼亚": { "id": "SPXX090000", "en": "La Coruna" },
                "毕尔巴鄂": { "id": "SPXX100000", "en": "Bilbao" },
                "拉斯帕尔玛斯 (加那利群岛)": { "id": "SPXX110000", "en": "Las Palmas" }
            },
            "意大利": {
                "罗马": { "id": "ITXX000000", "en": "Rome" },
                "佛罗伦萨": { "id": "ITXX010000", "en": "Florence" },
                "比萨": { "id": "ITXX020000", "en": "Pisa" },
                "热那亚": { "id": "ITXX030000", "en": "Genoa" },
                "都灵": { "id": "ITXX040000", "en": "Turin" },
                "米兰": { "id": "ITXX050000", "en": "Milan" },
                "威尼斯": { "id": "ITXX060000", "en": "Venice" },
                "佩斯卡拉": { "id": "ITXX070000", "en": "Pescara" },
                "那不勒斯": { "id": "ITXX080000", "en": "Naples" },
                "塔兰托": { "id": "ITXX090000", "en": "Taranto" },
                "卡塔尼亚": { "id": "ITXX100000", "en": "Catania" },
                "巴勒莫": { "id": "ITXX110000", "en": "Palermo" },
                "卡利亚里": { "id": "ITXX120000", "en": "Cagliari" }
            },
            "希腊": {
                "雅典": { "id": "GRXX000000", "en": "Athens" },
                "萨罗尼加": { "id": "GRXX010000", "en": "Thessaloniki" },
                "伊拉克利翁": { "id": "GRXX020000", "en": "Heraklion" }
            },
            "罗马尼亚": {
                "布加勒斯特": { "id": "ROXX000000", "en": "Bucharest" },
                "康斯坦察": { "id": "ROXX010000", "en": "Constanta" },
                "克拉约瓦": { "id": "ROXX020000", "en": "Craiova" },
                "克鲁日-纳波卡": { "id": "ROXX030000", "en": "Cluj-Napoca" },
                "巴克乌": { "id": "ROXX040000", "en": "Bacau" }
            },
            "乌克兰": {
                "基辅": { "id": "UPXX000000", "en": "Kiev" },
                "哈尔科夫": { "id": "UPXX010000", "en": "Kharkiv" },
                "第聂伯罗彼得罗夫斯克": { "id": "UPXX020000", "en": "Dnipropetrovsk" },
                "塞瓦斯托波尔": { "id": "UPXX030000", "en": "Sevastopol" },
                "尼古拉耶夫": { "id": "UPXX040000", "en": "Nikolayev" },
                "敖德萨": { "id": "UPXX050000", "en": "Odessa" },
                "利沃夫": { "id": "UPXX060000", "en": "Lvov" }
            },
            "白俄罗斯": {
                "明斯克": { "id": "BOXX000000", "en": "Minsk" },
                "维捷布斯克": { "id": "BOXX010000", "en": "Vitebsk" },
                "莫吉廖夫": { "id": "BOXX020000", "en": "Mahilyow" },
                "戈梅利": { "id": "BOXX030000", "en": "Gomel" },
                "格罗德诺": { "id": "BOXX040000", "en": "Grodno" }
            },
            "波兰": {
                "华沙": { "id": "PLXX000000", "en": "Warsaw" },
                "罗兹": { "id": "PLXX010000", "en": "Lodz" },
                "克拉科夫": { "id": "PLXX020000", "en": "Krakow" },
                "卡托维兹": { "id": "PLXX030000", "en": "Katowice" },
                "波兹南": { "id": "PLXX040000", "en": "Poznan" },
                "什切青": { "id": "PLXX050000", "en": "Szczecin" },
                "格但斯克": { "id": "PLXX060000", "en": "Gdansk" }
            },
            "芬兰": {
                "赫尔辛基": { "id": "FIXX000000", "en": "Helsinki" },
                "图尔库": { "id": "FIXX010000", "en": "Turku" },
                "玛丽港": { "id": "FIXX020000", "en": "Mariehamn" },
                "坦佩雷": { "id": "FIXX030000", "en": "Tampere" },
                "瓦萨": { "id": "FIXX040000", "en": "Vaasa" },
                "奥卢": { "id": "FIXX050000", "en": "Oulu" },
                "索丹曲莱": { "id": "FIXX060000", "en": "Sodankyla" },
                "库奥皮奥": { "id": "FIXX070000", "en": "Kuopio" }
            },
            "瑞典": {
                "斯德哥尔摩": { "id": "SWXX000000", "en": "Stockholm" },
                "维斯比 (哥得兰岛)": { "id": "SWXX010000", "en": "Visby" },
                "马尔默": { "id": "SWXX020000", "en": "Malmo" },
                "哥德堡": { "id": "SWXX030000", "en": "Gothenburg" },
                "穆拉市": { "id": "SWXX040000", "en": "Mora" },
                "厄斯特松德": { "id": "SWXX050000", "en": "Ostersund" },
                "基律纳": { "id": "SWXX060000", "en": "Kiruna" },
                "吕勒奥市": { "id": "SWXX070000", "en": "Lulea" },
                "松兹瓦尔": { "id": "SWXX080000", "en": "Sundsvall" }
            },
            "挪威": {
                "奥斯陆": { "id": "NOXX000000", "en": "Oslo" },
                "斯塔万格": { "id": "NOXX010000", "en": "Stavanger" },
                "卑尔根": { "id": "NOXX020000", "en": "Bergen" },
                "特隆赫姆": { "id": "NOXX030000", "en": "Trondheim" },
                "摩城": { "id": "NOXX040000", "en": "Mo i Rana" },
                "特罗姆瑟": { "id": "NOXX050000", "en": "Tromso" },
                "朗伊尔城": { "id": "NOXX060000", "en": "Longyearbyen" }
            },
            "荷兰": {
                "阿姆斯特丹": { "id": "NLXX000000", "en": "Amsterdam" },
                "鹿特丹": { "id": "NLXX010000", "en": "Rotterdam" },
                "乌特勒支": { "id": "NLXX020000", "en": "Utrecht" },
                "海牙": { "id": "NLXX030000", "en": "The Hague" }
            },
            "比利时": {
                "布鲁塞尔": { "id": "BEXX000000", "en": "Brussels" },
                "安特卫普": { "id": "BEXX010000", "en": "Antwerp" }
            },
            "瑞士": {
                "伯尔尼": { "id": "SZXX000000", "en": "Berne" },
                "苏黎世": { "id": "SZXX010000", "en": "Zurich" },
                "日内瓦": { "id": "SZXX020000", "en": "Geneva" },
                "洛桑": { "id": "SZXX030000", "en": "Lausanne" }
            },
            "奥地利": {
                "维也纳": { "id": "AUXX000000", "en": "Vienna" },
                "格拉茨": { "id": "AUXX010000", "en": "Graz" },
                "林茨": { "id": "AUXX020000", "en": "Linz" },
                "因斯布鲁克": { "id": "AUXX030000", "en": "Innsbruck" }
            },
            "欧洲东部": {
                "塔林 (爱沙尼亚)": { "id": "ENXX000000", "en": "Tallinn (Estonia)" },
                "里加 (拉脱维亚)": { "id": "LGXX000000", "en": "Riga (Latvia)" },
                "维尔纽斯 (立陶宛)": { "id": "LHXX000000", "en": "Vilnius (Lithuania)" },
                "布拉迪斯拉发 (斯洛伐克)": { "id": "LOXX000000", "en": "Bratislava (Slovakia)" },
                "布达佩斯 (匈牙利)": { "id": "HUXX000000", "en": "Budapest (Hungary)" },
                "基希讷乌 (摩尔多瓦)": { "id": "MDXX000000", "en": "Kishinev (Moldova)" },
                "索菲亚 (保加利亚)": { "id": "BUXX000000", "en": "Sophia (Bulgaria)" },
                "瓦尔纳 (保加利亚)": { "id": "BUXX010000", "en": "Varna (Bulgaria)" },
                "斯科普里 (马其顿)": { "id": "MKXX000000", "en": "Skopje (Macedonia)" },
                "地拉那 (阿尔巴尼亚)": { "id": "ALXX000000", "en": "Tirana-Al (Albania)" },
                "波德戈里察 (黑山)": { "id": "MWXX000000", "en": "Podgorica (Montenegro)" },
                "贝尔格莱德 (塞尔维亚)": { "id": "SRXX000000", "en": "Belgrade (Serbia)" },
                "萨拉热窝 (波斯尼亚黑塞哥维那)": { "id": "BKXX000000", "en": "Sarajevo (Bosna and Hercegovina)" },
                "萨格勒布 (克罗地亚)": { "id": "HRXX000000", "en": "Zagreb (Croatia)" },
                "卢布尔雅那 (斯洛文尼亚)": { "id": "SIXX000000", "en": "Ljubljana (Slovenia)" },
                "布拉格 (捷克)": { "id": "EZXX000000", "en": "Prague (Czech)" }
            },
            "欧洲西部": {
                "瓦莱塔 (马耳他)": { "id": "MTXX000000", "en": "Valletta (Malta)" },
                "瓦杜兹 (列支敦士登)": { "id": "LSXX000000", "en": "Vaduz (Liechtenstein)" },
                "卢森堡 (卢森堡)": { "id": "LUXX000000", "en": "Luxembourg (Luxembourg)" },
                "哥本哈根 (丹麦)": { "id": "DAXX000000", "en": "Copenhagen (Denmark)" },
                "奥胡斯 (丹麦)": { "id": "DAXX010000", "en": "Aarhus (Denmark)" },
                "托尔斯港 (法罗群岛)": { "id": "FOXX000000", "en": "Torshavn (Faroelslands)" },
                "雷克雅未克 (冰岛)": { "id": "ICXX000000", "en": "Reykjavik (Iceland)" },
                "阿克雷里 (冰岛)": { "id": "ICXX010000", "en": "Akureyri (Iceland)" },
                "都柏林 (爱尔兰)": { "id": "EIXX000000", "en": "Dublin (Ireland)" },
                "科克 (爱尔兰)": { "id": "EIXX010000", "en": "Cork (Ireland)" },
                "里斯本 (葡萄牙)": { "id": "POXX000000", "en": "Lisbon (Portugal)" },
                "波尔图 (葡萄牙)": { "id": "POXX010000", "en": "Porto (Portugal)" },
                "英雄港 (葡萄牙亚速尔群岛)": { "id": "POXX020000", "en": "Angra do Heroismo (Portugal)" },
                "马希库 (葡萄牙马德拉群岛)": { "id": "POXX030000", "en": "Machico (Portugal)" },
                "安道尔 (安道尔)": { "id": "ANXX000000", "en": "Andorra la Vella (Andorra)" },
                "摩纳哥 (摩纳哥)": { "id": "MNXX000000", "en": "Monaco (Monaco)" },
                "圣马力诺 (圣马力诺)": { "id": "SMXX000000", "en": "San Marino (San Marino)" },
                "梵蒂冈城 (梵蒂冈)": { "id": "VTXX000000", "en": "Vatican City (Vaticano)" },
                "直布罗陀 (英)": { "id": "GIXX000000", "en": "Gibraltar (Gibraltar)" },
                "圣赫利尔 (泽西岛)": { "id": "JEXX000000", "en": "Saint Helier (Jersey Island)" },
                "道格拉斯 (马恩岛)": { "id": "IMXX000000", "en": "Douglas (Isle of Man)" }
            }
        },
        "北美洲": {
            "美国 (东部)": {
                "华盛顿": { "id": "USDC000000", "en": "Washington" },
                "纽约": { "id": "USNY000000", "en": "New York" },
                "费城": { "id": "USPA000000", "en": "Philadelphia" },
                "巴尔的摩": { "id": "USMD000000", "en": "Baltimore" },
                "罗福 (诺福克)": { "id": "USVA000000", "en": "Norfolk" },
                "哥伦布": { "id": "USOH000000", "en": "Columbus" },
                "辛辛那提": { "id": "USOH010000", "en": "Cincinnati" },
                "印第安纳波利斯": { "id": "USIN000000", "en": "Indianapolis" },
                "圣路易斯": { "id": "USMO000000", "en": "Saint Louis" },
                "得梅因": { "id": "USIA000000", "en": "Des Moines" },
                "明尼阿波利斯 (明尼苏达圣保罗)": { "id": "USMN000000", "en": "Minneapolis" },
                "密尔沃基": { "id": "USWI000000", "en": "Milwaukee" },
                "芝加哥": { "id": "USIL000000", "en": "Chicago" },
                "底特律": { "id": "USMI000000", "en": "Detroit" },
                "克里夫兰": { "id": "USOH020000", "en": "Cleveland" },
                "匹兹堡": { "id": "USPA010000", "en": "Pittsburgh" },
                "尼亚加拉瀑布城": { "id": "USNY010000", "en": "Niagara Falls" },
                "奥尔巴尼": { "id": "USNY020000", "en": "Albany" },
                "班戈": { "id": "USME000000", "en": "Pittsburgh" },
                "波士顿": { "id": "USMA000000", "en": "Boston" }
            },
            "美国 (南部)": {
                "亚特兰大": { "id": "USGA000000", "en": "Atlanta" },
                "夏洛特": { "id": "USNC000000", "en": "Charlotte" },
                "杰克逊维尔": { "id": "USFL000000", "en": "Jacksonville" },
                "迈阿密": { "id": "USFL010000", "en": "Miami" },
                "坦帕": { "id": "USFL020000", "en": "Tampa" },
                "蒙哥马利": { "id": "USAL000000", "en": "Montgomery" },
                "伯明翰": { "id": "USAL010000", "en": "Birmingham" },
                "新奥尔良": { "id": "USLA000000", "en": "New Orleaans" },
                "小石城": { "id": "USAR000000", "en": "Little Rock" },
                "孟菲斯": { "id": "USTN000000", "en": "Memphis" },
                "纳什维尔": { "id": "USTN010000", "en": "Nashville" }
            },
            "美国 (西部)": {
                "旧金山": { "id": "USCA000000", "en": "San Francisco" },
                "洛杉矶": { "id": "USCA010000", "en": "Los Angeles" },
                "圣地亚哥": { "id": "USCA020000", "en": "San Diego" },
                "萨克拉门托": { "id": "USCA030000", "en": "Sacramento" },
                "圣何塞": { "id": "USCA040000", "en": "San Jose" },
                "山景城": { "id": "USCA050000", "en": "Mountain View" },
                "伯克利": { "id": "USCA060000", "en": "Berkeley" },
                "波特兰": { "id": "USOR000000", "en": "Portland" },
                "西雅图": { "id": "USWA000000", "en": "Seattle" },
                "斯波坎": { "id": "USWA010000", "en": "Spokane" },
                "博伊西": { "id": "USID000000", "en": "Boise" },
                "黄石公园": { "id": "USWY000000", "en": "Yellowstone" },
                "西黄石": { "id": "USMT000000", "en": "West Yellowstone" },
                "大瀑布城": { "id": "USMT010000", "en": "Great Falls" },
                "俾斯麦": { "id": "USND000000", "en": "Bismarck" },
                "堪萨斯城": { "id": "USKS000000", "en": "Kansas City" },
                "俄克拉荷马城": { "id": "USOK000000", "en": "Oklahoma City" },
                "达拉斯": { "id": "USTX000000", "en": "Dallas" },
                "休斯敦": { "id": "USTX010000", "en": "Houston" },
                "圣安东尼奥": { "id": "USTX020000", "en": "San Antonio" },
                "奥斯丁": { "id": "USTX030000", "en": "Austin" },
                "凤凰城 (菲尼克斯)": { "id": "USAZ000000", "en": "Phoenix" },
                "科罗拉多大峡谷": { "id": "USAZ010000", "en": "Grand Canyon" },
                "拉斯维加斯": { "id": "USNV000000", "en": "Las Vegas" },
                "盐湖城": { "id": "USUT000000", "en": "Salt Lake City" },
                "丹佛": { "id": "USCO000000", "en": "Denver" },
                "阿尔伯克基": { "id": "USNM000000", "en": "Albuquerque" },
                "安克雷奇": { "id": "USAK000000", "en": "Anchorage" },
                "费尔班克斯": { "id": "USAK010000", "en": "Fairbanks" },
                "朱诺": { "id": "USAK020000", "en": "Juneau" },
                "乌纳拉斯卡": { "id": "USAK030000", "en": "Unalaska" },
                "诺姆": { "id": "USAK040000", "en": "Nome" },
                "火奴鲁鲁 (夏威夷)": { "id": "USHI000000", "en": "Honolulu (Hawaii)" }
            },
            "加拿大": {
                "渥太华": { "id": "CAXX000000", "en": "Ottawa" },
                "多伦多": { "id": "CAXX010000", "en": "Toronto" },
                "温哥华": { "id": "CAXX020000", "en": "Vancouver" },
                "鲁伯特王子港": { "id": "CAXX030000", "en": "Prince Rupert" },
                "怀特霍斯": { "id": "CAXX040000", "en": "Whitehorse" },
                "阿克拉维克 (因纽维克)": { "id": "CAXX050000", "en": "Aklavik (Inuvik)" },
                "黄刀镇": { "id": "CAXX060000", "en": "Yellowknife" },
                "乔治王子城": { "id": "CAXX070000", "en": "Prince George" },
                "卡尔加里": { "id": "CAXX080000", "en": "Calgary" },
                "埃德蒙顿": { "id": "CAXX090000", "en": "Edmonton" },
                "萨斯卡通": { "id": "CAXX100000", "en": "Saskatoon" },
                "丘吉尔港": { "id": "CAXX110000", "en": "Churchill" },
                "温尼泊": { "id": "CAXX120000", "en": "Winnipeg" },
                "桑德贝": { "id": "CAXX130000", "en": "Thunder Bay" },
                "苏圣玛丽": { "id": "CAXX140000", "en": "Sault Ste Marie" },
                "萨德伯里": { "id": "CAXX150000", "en": "Sudbury" },
                "哈密尔顿": { "id": "CAXX160000", "en": "Hamilton" },
                "蒙特利尔": { "id": "CAXX170000", "en": "Montreal" },
                "魁北克市": { "id": "CAXX180000", "en": "Quebec City" },
                "七岛港": { "id": "CAXX190000", "en": "Sept-iles" },
                "伊魁特": { "id": "CAXX200000", "en": "Iqaluit" },
                "科纳布鲁克": { "id": "CAXX210000", "en": "Corner Brook" },
                "圣约翰斯": { "id": "CAXX220000", "en": "Saint John" },
                "哈利法克斯": { "id": "CAXX230000", "en": "Halifax" },
                "夏洛特敦 (爱德华王子岛)": { "id": "CAXX240000", "en": "Charlottetown (Prince Edward Island)" }
            },
            "墨西哥": {
                "墨西哥城": { "id": "MXDF000000", "en": "Mexico City" },
                "克雷塔罗": { "id": "MXQA000000", "en": "Queretaro" },
                "瓜达拉哈拉": { "id": "MXJO000000", "en": "Guadalajara" },
                "马萨特兰": { "id": "MXSA000000", "en": "Mazatlan" },
                "拉巴斯": { "id": "MXBS000000", "en": "La Paz" },
                "蒂华纳": { "id": "MXBC000000", "en": "Tijuana" },
                "埃莫西约": { "id": "MXSR000000", "en": "Hermosillo" },
                "奇瓦瓦市": { "id": "MXCA000000", "en": "Chihuahua" },
                "蒙特雷": { "id": "MXNL000000", "en": "Monterrey" },
                "坦皮科": { "id": "MXTS000000", "en": "Tampico" },
                "普埃布拉": { "id": "MXPA000000", "en": "Puebla" },
                "阿卡普尔科": { "id": "MXGR000000", "en": "Acapulco" },
                "图斯特拉-古铁雷斯": { "id": "MXCS000000", "en": "Tuxtla-Gutierrez" },
                "梅里达": { "id": "MXYN000000", "en": "Merida" },
                "坎昆": { "id": "MXQR000000", "en": "Cancun" }
            },
            "北美洲其他": {
                "危地马拉市 (危地马拉)": { "id": "GTXX000000", "en": "Guatemala City (Guatemala)" },
                "贝尔莫潘 (伯利兹)": { "id": "BHXX000000", "en": "Belmopan (Belize)" },
                "伯利兹市 (伯利兹)": { "id": "BHXX010000", "en": "Belize City (Belize)" },
                "圣萨尔瓦多 (萨尔瓦多)": { "id": "ESXX000000", "en": "San Salvador (Salvador)" },
                "特古西加尔巴 (洪都拉斯)": { "id": "HOXX000000", "en": "Tegucigalpa (Honduras)" },
                "圣佩德罗苏拉 (洪都拉斯)": { "id": "HOXX010000", "en": "San Pedro Sula (Honduras)" },
                "马那瓜 (尼加拉瓜)": { "id": "NUXX000000", "en": "Managua (Nicaragua)" },
                "卡贝萨斯港 (尼加拉瓜)": { "id": "NUXX010000", "en": "Puerto Cabezas (Nicaragua)" },
                "圣何塞 (哥斯达尼加)": { "id": "CSXX000000", "en": "San Jose (Costa Rica)" },
                "巴拿马城 (巴拿马)": { "id": "PMXX000000", "en": "Panama City (Panama)" }
            },
            "格陵兰岛 (丹)": {
                "戈特霍市 (努克)": { "id": "GLXX000000", "en": "Gadthab (Nuuk)" },
                "西西缪特": { "id": "GLXX010000", "en": "Sisimiut" },
                "凯凯尔塔尔舒瓦克": { "id": "GLXX020000", "en": "Qeqertarsuaq" },
                "安马赫夏利克": { "id": "GLXX030000", "en": "Angmagssalik" },
                "卡科尔托克": { "id": "GLXX040000", "en": "Qaqortoq" }
            },
            "加勒比海北部": {
                "哈瓦那 (古巴)": { "id": "CUXX000000", "en": "Havana (Cuba)" },
                "圣地亚哥 (古巴)": { "id": "CUXX010000", "en": "Santiago de Cuba (Cuba)" },
                "太子港 (海地)": { "id": "HAXX000000", "en": "Port-au-Prince (Haiti)" },
                "圣多明戈 (多米尼加)": { "id": "DRXX000000", "en": "Santo Domingo (Dominican)" },
                "金斯敦 (牙买加)": { "id": "JMXX000000", "en": "Kingston (Jamaica)" },
                "乔治市 (开曼群岛)": { "id": "CJXX000000", "en": "George Town (Cayman Islands)" },
                "普罗维登西亚莱斯岛 (特克斯和凯科斯群岛)": {
                    "id": "TKXX000000",
                    "en": "Providenciales (Turks and Caicos Islands)"
                },
                "拿骚 (巴哈马)": { "id": "BFXX000000", "en": "Nassau (Bahamas)" },
                "哈密尔顿 (百慕大)": { "id": "BDXX000000", "en": "Hamilton (Bermuda)" },
                "圣皮埃尔市 (圣皮埃尔和密克隆群岛)": { "id": "SBXX000000", "en": "Saint Pierre (Saint Pierre and Miquelon)" }
            },
            "加勒比海东南部": {
                "圣胡安 (波多黎各)": { "id": "USPR000000", "en": "San Juan (Puerto Rico)" },
                "夏洛特阿马利亚 (美属维尔京群岛)": { "id": "USVI000000", "en": "Charlotte Amalie (Virgin Islands)" },
                "克里斯琴斯特德 (美属维尔京群岛)": { "id": "USVI010000", "en": "Christiansted (Virgin Islands)" },
                "罗德城（英属维尔京群岛）": { "id": "VIXX000000", "en": "Road Town(Virgin Islands)" },
                "瓦利 (安圭拉岛)": { "id": "AVXX000000", "en": "The Valley (Anguilla)" },
                "马里戈特 (法属圣马丁)": { "id": "RNXX000000", "en": "Marigot (Saint Martin)" },
                "巴斯特尔 (圣基茨和尼维斯)": { "id": "SCXX000000", "en": "Basseterre (St Kitts and Nevis)" },
                "圣约翰 (安提瓜和巴布达)": { "id": "ACXX000000", "en": "Saint John (Antigua and Barbuda)" },
                "巴斯特尔 (瓜德罗普岛)": { "id": "GPXX000000", "en": "Basse-Terre (Guadeloupe)" },
                "罗索 (多米尼克)": { "id": "DOXX000000", "en": "Roseau (Dominica)" },
                "法兰西堡 (马提尼克岛)": { "id": "MBXX000000", "en": "Fort de france (Martinique)" },
                "卡斯特里 (圣卢西亚)": { "id": "STXX000000", "en": "Castries (Saint Lucia)" },
                "金斯敦 (圣文森特和格林纳丁斯)": {
                    "id": "VCXX000000",
                    "en": "Kingstown (Saint Vincent and the Grenadines)"
                },
                "布里奇敦 (巴巴多斯)": { "id": "BBXX000000", "en": "Bridgetown (Barbados)" },
                "圣乔治 (格林纳达)": { "id": "GJXX000000", "en": "Saint George's (Grenada)" },
                "西班牙港 (特立尼达和多巴哥)": { "id": "TDXX000000", "en": "Spain (Trinidad and Tobago)" },
                "威廉斯塔德 (安的列斯群岛)": { "id": "UCXX000000", "en": "Willemstad (Antilles)" },
                "奥拉涅斯塔德 (阿鲁巴岛)": { "id": "AAXX000000", "en": "Oranjestad (Aruba)" }
            }
        },
        "南美洲": {
            "巴西": {
                "巴西利亚": { "id": "BRXX000000", "en": "Brasilia" },
                "圣保罗": { "id": "BRXX010000", "en": "Sao Paulo" },
                "库里奇巴": { "id": "BRXX020000", "en": "Curitiba" },
                "阿雷格里港": { "id": "BRXX030000", "en": "Porto Alegre" },
                "伊瓜苏 (瀑布)": { "id": "BRXX040000", "en": "Foz do Iguacu" },
                "大坎普市": { "id": "BRXX050000", "en": "Campo Grande" },
                "库亚巴": { "id": "BRXX060000", "en": "Cuiaba" },
                "里奥布朗库": { "id": "BRXX070000", "en": "Rio Branco" },
                "特费": { "id": "BRXX080000", "en": "Tefe" },
                "马瑙斯": { "id": "BRXX090000", "en": "Manaus" },
                "博阿维斯塔 (保艾佩蓝卡)": { "id": "BRXX100000", "en": "Boa Vista" },
                "圣塔伦": { "id": "BRXX110000", "en": "Santarem" },
                "贝伦": { "id": "BRXX120000", "en": "Belem" },
                "因佩拉特里斯": { "id": "BRXX130000", "en": "Imperatriz" },
                "圣路易斯": { "id": "BRXX140000", "en": "Sao Luis" },
                "特雷西纳": { "id": "BRXX150000", "en": "Teresina" },
                "福塔雷萨": { "id": "BRXX160000", "en": "Fortaleza" },
                "累西腓": { "id": "BRXX170000", "en": "Recife" },
                "萨尔瓦多": { "id": "BRXX180000", "en": "Salvador-Brazil" },
                "里约热内卢": { "id": "BRXX190000", "en": "Rio de Janeiro" },
                "贝洛奥里藏特": { "id": "BRXX200000", "en": "Belo Horizonte" },
                "戈亚尼亚": { "id": "BRXX210000", "en": "Goiania" },
                "帕尔马斯": { "id": "BRXX220000", "en": "Palmas" }
            },
            "阿根廷": {
                "布宜诺斯艾利斯": { "id": "ARBA000000", "en": "Buenos Aires" },
                "罗萨里奥": { "id": "ARSF000000", "en": "Rosario" },
                "科尔瓦多": { "id": "ARCT000000", "en": "Corcovado" },
                "门多萨": { "id": "ARMA000000", "en": "Mendoza" },
                "圣米格尔-德图库曼": { "id": "ARTN000000", "en": "San Miguel de Tucuman" },
                "萨尔塔": { "id": "ARSA000000", "en": "Salta" },
                "雷西斯滕西亚": { "id": "ARCO000000", "en": "Resistencia" },
                "马德普拉港": { "id": "ARBA010000", "en": "Mar del Plata" },
                "布兰卡港": { "id": "ARBA020000", "en": "Bahia Blanca" },
                "内乌肯": { "id": "ARRN000000", "en": "Neuquen" },
                "里瓦达维亚准将城": { "id": "ARCT010000", "en": "Comodoro Rivadavia" },
                "里奥加耶戈斯": { "id": "ARSC000000", "en": "Rio Gallegos" },
                "乌斯怀亚": { "id": "ARTF000000", "en": "Ushuaia" }
            },
            "委内瑞拉": {
                "加拉加斯": { "id": "VEXX000000", "en": "Caracas" },
                "巴塞罗纳": { "id": "VEXX010000", "en": "Barcelona" },
                "圭亚那城": { "id": "VEXX020000", "en": "Ciudad Guayana" },
                "玻利瓦尔城": { "id": "VEXX030000", "en": "Ciudad Bolivar" },
                "阿亚库乔港": { "id": "VEXX040000", "en": "Puerto Ayacucho" },
                "巴里纳斯": { "id": "VEXX050000", "en": "Barinas" },
                "马拉开波": { "id": "VEXX060000", "en": "Maracaibo" },
                "巴基西梅托": { "id": "VEXX070000", "en": "Barquisimeto" },
                "巴伦西亚": { "id": "VEXX080000", "en": "Valencia" }
            },
            "哥伦比亚": {
                "圣菲波哥大": { "id": "COXX000000", "en": "Santa Fe de Bogota" },
                "卡利": { "id": "COXX010000", "en": "Cali" },
                "麦德林": { "id": "COXX020000", "en": "Medellin" },
                "蒙特里亚": { "id": "COXX030000", "en": "Monteria" },
                "卡塔赫纳": { "id": "COXX040000", "en": "Cartagena" },
                "巴兰基亚": { "id": "COXX050000", "en": "Barranquilla" },
                "布卡拉曼加": { "id": "COXX060000", "en": "Bucaramanga" }
            },
            "秘鲁": {
                "利马": { "id": "PEXX000000", "en": "Lima" },
                "特鲁希略": { "id": "PEXX010000", "en": "Trujillo" },
                "皮乌拉": { "id": "PEXX020000", "en": "Piura" },
                "伊基托斯": { "id": "PEXX030000", "en": "Iquitos" },
                "普兰尔帕": { "id": "PEXX040000", "en": "Pucallpa" },
                "马丘比丘 (古城)": { "id": "PEXX050000", "en": "Machu Picchu" },
                "库斯科": { "id": "PEXX060000", "en": "Cuzco" },
                "阿雷基帕": { "id": "PEXX070000", "en": "Arequipa" }
            },
            "玻利维亚": {
                "苏克雷": { "id": "BLXX000000", "en": "Sucre" },
                "拉巴斯": { "id": "BLXX010000", "en": "La Paz" },
                "科恰班巴": { "id": "BLXX020000", "en": "Cochabamba" },
                "圣克鲁斯": { "id": "BLXX030000", "en": "Santa Cruz" },
                "塔里哈": { "id": "BLXX040000", "en": "Tarija" }
            },
            "智利": {
                "圣地亚哥": { "id": "CIXX000000", "en": "Santiago" },
                "瓦尔帕莱索": { "id": "CIXX010000", "en": "Valparaiso" },
                "安多法加斯大": { "id": "CIXX020000", "en": "Antofagasta" },
                "伊基克": { "id": "CIXX030000", "en": "Iquique" },
                "康塞普西翁": { "id": "CIXX040000", "en": "Concepcion" },
                "蒙特港": { "id": "CIXX050000", "en": "Puerto Montt" },
                "蓬塔阿雷纳斯": { "id": "CIXX060000", "en": "Punta Arenas" }
            },
            "南美洲其他": {
                "基多 (厄瓜多尔)": { "id": "ECXX000000", "en": "Quito (Ecuador)" },
                "瓜亚基尔 (厄瓜多尔)": { "id": "ECXX010000", "en": "Guayaquil (Ecuador)" },
                "阿约拉港 (厄瓜多尔)": { "id": "ECXX020000", "en": "Puerto Ayora (Ecuador)" },
                "乔治敦 (圭亚那)": { "id": "GYXX000000", "en": "Georgetown (Guyana)" },
                "帕拉马里博 (苏里南)": { "id": "NSXX000000", "en": "Paramaribo (Surinam)" },
                "卡宴 (法属圭亚那)": { "id": "FGXX000000", "en": "Cayenne (French Guiana)" },
                "蒙得维的亚 (乌拉圭)": { "id": "UYXX000000", "en": "Montevideo (Uruguay)" },
                "亚松森 (巴拉圭)": { "id": "PAXX000000", "en": "Asuncion (Paraguay)" },
                "斯坦利港 (福克兰群岛/马尔维纳斯群岛)": {
                    "id": "FKXX000000",
                    "en": "Stanley (Falkland Islands/Islas Malvinas)"
                }
            }
        },
        "非洲": {
            "南非": {
                "比勒陀利亚": { "id": "SFXX000000", "en": "Pretoria" },
                "约翰内斯堡": { "id": "SFXX010000", "en": "Johannesburg" },
                "德班": { "id": "SFXX020000", "en": "Durban" },
                "伊丽莎白港": { "id": "SFXX030000", "en": "Port Elizabeth" },
                "开普敦": { "id": "SFXX040000", "en": "Cape Town" },
                "博福特西": { "id": "SFXX050000", "en": "Beaufort West" },
                "阿平顿": { "id": "SFXX060000", "en": "Upington" },
                "布隆方丹": { "id": "SFXX070000", "en": "Bloemfontein" }
            },
            "埃及": {
                "开罗": { "id": "EGXX000000", "en": "Cairo" },
                "亚历山大港": { "id": "EGXX010000", "en": "Alexandria" },
                "苏伊士": { "id": "EGXX020000", "en": "Suez" },
                "沙姆沙伊赫": { "id": "EGXX030000", "en": "Sharm el Sheikh" },
                "基纳": { "id": "EGXX040000", "en": "Qena" },
                "路克索": { "id": "EGXX050000", "en": "Luxor" },
                "阿斯旺": { "id": "EGXX060000", "en": "Aswan" }
            },
            "利比亚": {
                "的黎波里": { "id": "LYXX000000", "en": "Tripoli" },
                "米苏拉塔": { "id": "LYXX010000", "en": "Misratah" },
                "班加西": { "id": "LYXX020000", "en": "Benghazi" },
                "图卜鲁格": { "id": "LYXX030000", "en": "Tobruk" },
                "拾哈": { "id": "LYXX040000", "en": "Sabha" }
            },
            "突尼斯": {
                "突尼斯": { "id": "TSXX000000", "en": "Tunis" },
                "斯法克斯": { "id": "TSXX010000", "en": "Sfax" }
            },
            "阿尔及利亚": {
                "阿尔及尔": { "id": "AGXX000000", "en": "Algiers" },
                "瓦赫兰 (奥兰)": { "id": "AGXX010000", "en": "Oran" },
                "君士坦丁": { "id": "AGXX020000", "en": "Constantine" },
                "图古尔特": { "id": "AGXX030000", "en": "Touggourt" },
                "塔曼拉塞特": { "id": "AGXX040000", "en": "Tamanrasset" },
                "阿德拉尔": { "id": "AGXX050000", "en": "Adrar" },
                "贝沙尔": { "id": "AGXX060000", "en": "Bechar" },
                "拉格瓦特": { "id": "AGXX070000", "en": "Laghouat" }
            },
            "摩洛哥": {
                "拉巴特": { "id": "MOXX000000", "en": "Rabat" },
                "卡萨布兰卡 (达尔贝达)": { "id": "MOXX010000", "en": "Casablanca" },
                "马拉喀什": { "id": "MOXX020000", "en": "Marrakech" },
                "阿加迪尔": { "id": "MOXX030000", "en": "Agadir" },
                "丹吉尔": { "id": "MOXX040000", "en": "Tangier" },
                "纳祖尔": { "id": "MOXX050000", "en": "Nador" },
                "菲斯 (福兹)": { "id": "MOXX060000", "en": "Fez" }
            },
            "毛里塔尼亚": {
                "努瓦克肖特": { "id": "MRXX000000", "en": "Nouakchott" },
                "努瓦迪布": { "id": "MRXX010000", "en": "Nouadhibou" },
                "基法": { "id": "MRXX020000", "en": "Kiffa" }
            },
            "马里": {
                "巴马科": { "id": "MLXX000000", "en": "Bamako" },
                "卡伊": { "id": "MLXX010000", "en": "Kayes" },
                "塞古": { "id": "MLXX020000", "en": "Segou" },
                "莫普提": { "id": "MLXX030000", "en": "Mopti" },
                "加奥": { "id": "MLXX040000", "en": "Gao" }
            },
            "尼日尔": {
                "尼亚美": { "id": "NGXX000000", "en": "Niamey" },
                "塔瓦": { "id": "NGXX010000", "en": "Tahoua" },
                "阿加德兹": { "id": "NGXX020000", "en": "Agadez" },
                "津德尔": { "id": "NGXX030000", "en": "Zinder" }
            },
            "尼日利亚": {
                "阿布贾": { "id": "NIXX000000", "en": "Abuja" },
                "哈科特港": { "id": "NIXX010000", "en": "Port Harcourt" },
                "拉哥斯": { "id": "NIXX020000", "en": "Lagos" },
                "伊巴丹": { "id": "NIXX030000", "en": "Ibadan" },
                "索科托": { "id": "NIXX040000", "en": "Sokoto" },
                "卡诺": { "id": "NIXX050000", "en": "Kano" },
                "迈杜古里": { "id": "NIXX060000", "en": "Maiduguri" }
            },
            "苏丹": {
                "喀土穆": { "id": "SUXX000000", "en": "Khartoum" },
                "阿特巴拉": { "id": "SUXX010000", "en": "Atbara" },
                "苏丹港": { "id": "SUXX020000", "en": "Port Sudan" },
                "加达里夫": { "id": "SUXX030000", "en": "Al Qadarif" },
                "欧拜伊德": { "id": "SUXX040000", "en": "Al-Ubayyid" },
                "尼亚拉": { "id": "SUXX050000", "en": "Nyala" }
            },
            "埃塞俄比亚": {
                "亚的斯亚贝巴": { "id": "ETXX000000", "en": "Addis Abeba" },
                "德雷达瓦": { "id": "ETXX010000", "en": "Dire Dawa" },
                "阿瓦萨": { "id": "ETXX020000", "en": "Hawassa" },
                "戈雷": { "id": "ETXX030000", "en": "Gore" },
                "贡德尔": { "id": "ETXX040000", "en": "Gondar" },
                "默克莱": { "id": "ETXX050000", "en": "Mek'ele" }
            },
            "刚果民主共和国": {
                "金沙萨": { "id": "CGXX000000", "en": "Kinshasa" },
                "姆班达卡": { "id": "CGXX010000", "en": "Mbandaka" },
                "基桑加尼": { "id": "CGXX020000", "en": "Kisangani" },
                "卢本巴希": { "id": "CGXX030000", "en": "Lubumbashi" },
                "科卢韦齐": { "id": "CGXX040000", "en": "Kolwezi" },
                "姆布吉马伊": { "id": "CGXX050000", "en": "Mbuji-Mayi" }
            },
            "安哥拉": {
                "罗安达": { "id": "AOXX000000", "en": "Luanda" },
                "马兰热": { "id": "AOXX010000", "en": "Malanje" },
                "万博": { "id": "AOXX020000", "en": "Huambo" },
                "卢班戈": { "id": "AOXX030000", "en": "Lubango" },
                "本格拉": { "id": "AOXX040000", "en": "Benguela" },
                "洛比托港": { "id": "AOXX050000", "en": "Lobito" }
            },
            "赞比亚": {
                "卢萨卡": { "id": "ZAXX000000", "en": "Lusaka" },
                "利文斯通 (维多利亚瀑布)": { "id": "ZAXX010000", "en": "Livingstone" },
                "基特韦": { "id": "ZAXX020000", "en": "Kitwe" },
                "恩多拉": { "id": "ZAXX030000", "en": "Ndola" },
                "卡萨马": { "id": "ZAXX040000", "en": "Kasama" }
            },
            "坦桑尼亚": {
                "达累斯萨拉姆": { "id": "TZXX000000", "en": "Dar es Salaam" },
                "姆特瓦拉": { "id": "TZXX010000", "en": "Mtwara" },
                "姆贝亚": { "id": "TZXX020000", "en": "Mbeya" },
                "基戈马": { "id": "TZXX030000", "en": "Kigoma" },
                "姆万扎": { "id": "TZXX040000", "en": "Mwanza" },
                "多多马": { "id": "TZXX050000", "en": "Dodoma" },
                "坦噶": { "id": "TZXX060000", "en": "Tanga" },
                "桑给巴尔岛": { "id": "TZXX070000", "en": "Zanzibar" }
            },
            "莫桑比克": {
                "马普托": { "id": "MZXX000000", "en": "Maputo" },
                "马希谢": { "id": "MZXX010000", "en": "Maxixe" },
                "贝拉": { "id": "MZXX020000", "en": "Beira" },
                "楠普拉": { "id": "MZXX030000", "en": "Nampula" },
                "莫桑比克港": { "id": "MZXX040000", "en": "Mozambique Port" }
            },
            "马达加斯加": {
                "塔那那利佛": { "id": "MAXX000000", "en": "Antananarivo" },
                "马哈赞加": { "id": "MAXX010000", "en": "Mahajanga" },
                "安齐拉纳纳": { "id": "MAXX020000", "en": "Antsiranana" },
                "图阿马西纳": { "id": "MAXX030000", "en": "Toamasina" },
                "法拉凡加纳": { "id": "MAXX040000", "en": "Farafangana" },
                "图莱亚尔 (图利亚拉)": { "id": "MAXX050000", "en": "Toliara" }
            },
            "毛里求斯": { "路易港": { "id": "MPXX000000", "en": "Port Louis" } },
            "塞舌尔": { "维多利亚 (塞舌尔)": { "id": "SEXX000000", "en": "Victoria (Seychelles)" } },
            "非洲东部": {
                "阿斯马拉 (厄立特里亚)": { "id": "ERXX000000", "en": "Asmara (Eritrea)" },
                "吉布提 (吉布提)": { "id": "DJXX000000", "en": "Djibouti (Djibouti)" },
                "摩加迪沙 (索马里)": { "id": "SOXX000000", "en": "Mogadishu (Somalia)" },
                "基斯马尤 (索马里)": { "id": "SOXX010000", "en": "Kismaayo (Somalia)" },
                "哈尔格萨 (索马里)": { "id": "SOXX020000", "en": "Hargeisa (Somalia)" },
                "博萨索 (索马里)": { "id": "SOXX030000", "en": "Boosaaso (Somalia)" },
                "内罗毕 (肯尼亚)": { "id": "KEXX000000", "en": "Nairobi (Kenya)" },
                "基苏木 (肯尼亚)": { "id": "KEXX010000", "en": "Kisumu (Kenya)" },
                "蒙巴萨 (肯尼亚)": { "id": "KEXX020000", "en": "Mombasa (Kenya)" },
                "坎帕拉 (乌干达)": { "id": "UGXX000000", "en": "Kampala (Uganda)" },
                "基加利 (卢旺达)": { "id": "RWXX000000", "en": "Kigali (Rwanda)" },
                "布琼布拉 (布隆迪)": { "id": "BYXX000000", "en": "Bujumbura (Burundi)" }
            },
            "非洲中部": {
                "朱巴 (南苏丹)": { "id": "ODXX000000", "en": "Juba (South Sudan)" },
                "瓦乌 (南苏丹)": { "id": "ODXX010000", "en": "Wau (South Sudan)" },
                "马拉卡尔 (南苏丹)": { "id": "ODXX020000", "en": "Malakal (South Sudan)" },
                "班基 (中非)": { "id": "CTXX000000", "en": "Bangui (Central Africa)" },
                "布阿尔 (中非)": { "id": "CTXX010000", "en": "Bouar (Central Africa)" },
                "班巴里 (中非)": { "id": "CTXX020000", "en": "Bambari (Central Africa)" },
                "布拉柴维尔 (刚果布)": { "id": "CFXX000000", "en": "Brazzaville (Congo)" },
                "卢博莫 (刚果布)": { "id": "CFXX010000", "en": "Loubomo (Republic Of The Congo)" },
                "黑角 (刚果布)": { "id": "CFXX020000", "en": "Pointe-Noire (Republic Of The Congo)" },
                "利伯维尔 (加蓬)": { "id": "GBXX000000", "en": "Libreville (Gabon)" },
                "弗朗斯维尔 (加蓬)": { "id": "GBXX010000", "en": "Franceville (Gabon)" },
                "谦蒂尔港 (加蓬)": { "id": "GBXX020000", "en": "Port Gentil (Gabon)" },
                "圣多美 (圣多美和普林西比)": { "id": "TPXX000000", "en": "Sao Tome (Sao Tome and Principe)" },
                "马拉博 (赤道几内亚)": { "id": "EKXX000000", "en": "Malabo (Equatorial Guinea)" },
                "巴塔 (赤道几内亚)": { "id": "EKXX010000", "en": "Bata (Equatorial Guinea)" },
                "雅温得 (喀麦隆)": { "id": "CMXX000000", "en": "Yaounde (Cameroon)" },
                "杜阿拉 (喀麦隆)": { "id": "CMXX010000", "en": "Douala (Cameroon)" },
                "加鲁阿 (喀麦隆)": { "id": "CMXX020000", "en": "Garoua (Cameroon)" },
                "恩贾梅纳 (乍得)": { "id": "CDXX000000", "en": "Ndjamena (Chad)" },
                "阿贝歇 (乍得)": { "id": "CDXX010000", "en": "Abeche (Chad)" },
                "多巴 (乍得)": { "id": "CDXX020000", "en": "Doba (Chad)" },
                "蒙杜 (乍得)": { "id": "CDXX030000", "en": "Moundou (Chad)" }
            },
            "非洲南部": {
                "莫罗尼 (科摩罗)": { "id": "CNXX000000", "en": "Moroni-Comoros (Comoros)" },
                "马穆楚 (马约特岛)": { "id": "MFXX000000", "en": "Mamoudzou (Mayotte)" },
                "圣但尼 (留尼汪岛)": { "id": "REXX000000", "en": "Saint-Denis (Reunion)" },
                "法兰西港 (法国南部和南极土地)": {
                    "id": "FSXX000000",
                    "en": "Port Aux Francais (French Southem And Autarctic Lands)"
                },
                "利隆圭 (马拉维)": { "id": "MIXX000000", "en": "Lilongwe (Malawi)" },
                "布兰太尔 (马拉维)": { "id": "MIXX010000", "en": "Blantyre (Malawi)" },
                "哈拉雷 (津巴布韦)": { "id": "ZIXX000000", "en": "Harare (Zimbabwe)" },
                "布拉瓦约 (津巴布韦)": { "id": "ZIXX010000", "en": "Bulawayo (Zimbabwe)" },
                "姆巴巴内 (斯威士兰)": { "id": "WZXX000000", "en": "Mbabane (Swaziland)" },
                "马塞卢 (莱索托)": { "id": "LTXX000000", "en": "Maseru (Lesotho)" },
                "哈博罗内 (博茨瓦纳)": { "id": "BCXX000000", "en": "Gaborone (Botswana)" },
                "马翁 (博茨瓦纳)": { "id": "BCXX010000", "en": "Maun (Botswana)" },
                "弗朗西斯敦 (博茨瓦纳)": { "id": "BCXX020000", "en": "Francistown (Botswana)" },
                "温得和克 (纳米比亚)": { "id": "WAXX000000", "en": "Windhoek (Namibia)" },
                "基特曼斯胡普 (纳米比亚)": { "id": "WAXX010000", "en": "Keetmanshoop (Namibia)" },
                "鲸湾港 (纳米比亚)": { "id": "WAXX020000", "en": "Walvis Bay (Namibia)" },
                "赫鲁特方舟 (纳米比亚)": { "id": "WAXX030000", "en": "Grootfontein (Namibia)" },
                "詹姆斯敦 (圣赫勒拿岛)": { "id": "SHXX000000", "en": "Jamestown (St Helena)" }
            },
            "非洲西部": {
                "波多诺伏 (贝宁)": { "id": "BNXX000000", "en": "Porto-Novo (Benin)" },
                "洛美 (多哥)": { "id": "TOXX000000", "en": "Lome (Togo)" },
                "阿克拉 (加纳)": { "id": "GHXX000000", "en": "Accra (Ghana)" },
                "库马西 (加纳)": { "id": "GHXX010000", "en": "Kumasi (Ghana)" },
                "塔马利 (加纳)": { "id": "GHXX020000", "en": "Tamale (Ghana)" },
                "瓦加杜古 (布基纳法索)": { "id": "UVXX000000", "en": "Ouagadougou (Burkina Faso)" },
                "博博迪乌拉索 (布基纳法索)": { "id": "UVXX010000", "en": "Bobo-Dioulasso (Burkina Faso)" },
                "亚穆苏克罗 (科特迪瓦)": { "id": "IVXX000000", "en": "Yamoussoukro (Ivory Coast)" },
                "阿比让 (科特迪瓦)": { "id": "IVXX010000", "en": "Abidjan (Ivory Coast)" },
                "科霍戈 (科特迪瓦)": { "id": "IVXX020000", "en": "Korhogo (Ivory Coast)" },
                "摩罗维亚 (利比里亚)": { "id": "LIXX000000", "en": "Monrovia (Liberia)" },
                "弗里敦 (塞拉利昂)": { "id": "SLXX000000", "en": "Freetown (Sierra Leone)" },
                "科纳克里 (几内亚)": { "id": "GVXX000000", "en": "Conakry (Guinea)" },
                "康康省 (几内亚)": { "id": "GVXX010000", "en": "Kankan (Guinea)" },
                "比绍 (几内亚比绍)": { "id": "PUXX000000", "en": "Bissau (Guinea-Bissau)" },
                "班珠尔 (冈比亚)": { "id": "GAXX000000", "en": "Banjul (Gambia)" },
                "达喀尔 (塞内加尔)": { "id": "SGXX000000", "en": "Dakar (Senegal)" },
                "坦巴昆达 (塞内加尔)": { "id": "SGXX010000", "en": "Tambacounda (Senegal)" },
                "普利亚县 (佛得角)": { "id": "CVXX000000", "en": "Praia (Cape Verde)" },
                "达赫拉 (西撒哈拉)": { "id": "WIXX000000", "en": "Dakhla (Western Sahara)" },
                "阿尤恩 (西撒哈拉)": { "id": "WIXX010000", "en": "Laayoune (Western Sahara)" }
            }
        },
        "大洋洲": {
            "澳大利亚": {
                "堪培拉": { "id": "ASXX000000", "en": "Canberra" },
                "悉尼": { "id": "ASXX010000", "en": "Sydney" },
                "墨尔本": { "id": "ASXX020000", "en": "Melbourne" },
                "米尔迪拉": { "id": "ASXX030000", "en": "Mildura" },
                "阿德莱德": { "id": "ASXX040000", "en": "Adelaide" },
                "奥古斯塔港": { "id": "ASXX050000", "en": "Port Augusta" },
                "林肯港": { "id": "ASXX060000", "en": "Port Lincoln" },
                "卡尔古利": { "id": "ASXX070000", "en": "Kalgoorlie" },
                "奥尔巴尼": { "id": "ASXX080000", "en": "Albany" },
                "珀斯": { "id": "ASXX090000", "en": "Perth" },
                "杰拉尔顿": { "id": "ASXX100000", "en": "Geraldton" },
                "黑德兰港": { "id": "ASXX110000", "en": "Port Hedland" },
                "达尔文": { "id": "ASXX120000", "en": "Darwin" },
                "爱丽斯泉": { "id": "ASXX130000", "en": "Alice Springs" },
                "伊萨山市": { "id": "ASXX140000", "en": "Mount Isa" },
                "汤斯维尔": { "id": "ASXX150000", "en": "Townsville" },
                "罗克汉普顿": { "id": "ASXX160000", "en": "Rockhampton" },
                "布里斯班": { "id": "ASXX170000", "en": "Brisbane" },
                "黄金海岸": { "id": "ASXX180000", "en": "Gold Coast" },
                "荷巴特": { "id": "ASXX190000", "en": "Hobart" }
            },
            "新西兰": {
                "惠灵顿": { "id": "NZXX000000", "en": "Wellington" },
                "科赖斯特切奇 (基督城)": { "id": "NZXX010000", "en": "Christchurch" },
                "因弗卡吉尔": { "id": "NZXX020000", "en": "Invercargill" },
                "皇后镇": { "id": "NZXX030000", "en": "Queenstown" },
                "奥克兰": { "id": "NZXX040000", "en": "Auckland" },
                "内皮尔": { "id": "NZXX050000", "en": "Napier" },
                "查塔姆群岛": { "id": "NZXX060000", "en": "Chatham Islands" }
            },
            "巴布亚新几内亚": {
                "莫尔兹比港": { "id": "PPXX000000", "en": "Port Moresby" },
                "芒特哈根": { "id": "PPXX010000", "en": "Mt Hagen" },
                "莱城": { "id": "PPXX020000", "en": "Lae" },
                "金贝": { "id": "PPXX030000", "en": "Kimbe" },
                "卡维恩": { "id": "PPXX040000", "en": "Kavieng" },
                "阿拉瓦": { "id": "PPXX050000", "en": "Arawa" }
            },
            "塞班岛": { "塞班": { "id": "USMP000000", "en": "Saipan" } },
            "大洋洲其他": {
                "梅莱凯奥克 (帕劳)": { "id": "PSXX000000", "en": "Melekeok (Palau)" },
                "阿加尼亚 (关岛)": { "id": "USGU000000", "en": "Agana (Guam)" },
                "帕利基尔 (密克罗尼西亚)": { "id": "FMXX000000", "en": "Palikir (Micronesia)" },
                "马朱罗 (马绍尔群岛)": { "id": "RMXX000000", "en": "Majuro (Marshall Islands)" },
                "亚伦 (瑙鲁)": { "id": "NRXX000000", "en": "Yaren (Nauru)" },
                "塔拉瓦 (基里巴斯)": { "id": "KRXX000000", "en": "Tarawa (Kiribati)" },
                "圣诞岛 (基里巴斯)": { "id": "KRXX010000", "en": "Christmas Island (Kiribati)" },
                "富纳富提 (图瓦卢)": { "id": "TVXX000000", "en": "Funafuti (Tuvalu)" },
                "阿皮亚 (萨摩亚)": { "id": "WSXX000000", "en": "Apia (Samoa)" },
                "帕果帕果 (美属萨摩亚)": { "id": "USAS000000", "en": "Pago Pago (American Samoa)" },
                "帕皮提 (大溪地)": { "id": "FPXX000000", "en": "Papeete (Tahiti)" },
                "阿瓦鲁阿 (库克群岛)": { "id": "CWXX000000", "en": "Avarua (Cook Islands)" },
                "努库阿洛法 (汤加)": { "id": "TNXX000000", "en": "Nukualofa (Tonga)" },
                "苏瓦 (斐济群岛)": { "id": "FJXX000000", "en": "Suva (Fiji Islands)" },
                "金斯敦 (诺福克岛)": { "id": "NFXX000000", "en": "Kingston (Norfolk Island)" },
                "努美阿 (新喀里多尼亚)": { "id": "NCXX000000", "en": "Noumea (New Caledonia)" },
                "维拉港 (瓦努阿图)": { "id": "NHXX000000", "en": "Port Vila (Vanuatu)" },
                "霍尼亚拉 (所罗门群岛)": { "id": "BPXX000000", "en": "Honiara (Solomon Islands)" },
                "圣诞岛 (圣诞岛)": { "id": "KTXX000000", "en": "Christmas Island (Christmas Island)" }
            }
        }
    }
};
