/* 简体中文 (zh-CN)：界面、住客指南、景点资料与周边地点。 */
LANGS.push({ c: "zh", n: "中文", loc: "zh-CN" });

UI.zh = {
  howTitle: "使用方法",
  how1: "在右上角选择语言。",
  how2: "筛选：巴黎市内、公寓附近或免费。",
  how3: "点按“路线”，即可从您当前位置出发前往。",
  picksTitle: "我们最推荐的 3 个地方",
  picksLede: "没时间全部看完？先从这几个开始。",
  book: "请提前预订",
  seeCard: "查看详情",
  h1: "入住期间可以做什么",
  lede: "这里是我们推荐的巴黎景点，以及公寓步行可达的去处。每张卡片都提供票价、开放时间，以及一个从您当前位置开始导航的按钮。",
  gTitle: "乘火车前往巴黎",
  r1: "从 Sartrouville 站到巴黎圣拉扎尔站，乘 L 线（8 站）。",
  r2: "从 Argenteuil 站到巴黎圣拉扎尔站，乘 J 线。",
  r3: "从圣拉扎尔站出发，地铁可到达下面大部分景点。出发前请在 Île-de-France Mobilités 查询班次时间。",
  metro: "地铁",
  eTitle: "近期活动", eLede: "即将举行的展览和活动，精选内容并定期更新。", now: "进行中", noEvents: "目前没有活动。",
  fAll: "全部", fParis: "巴黎市内", fLocal: "公寓附近", fFree: "免费",
  one: "个推荐", many: "个推荐",
  paris: "巴黎", near: "附近", free: "免费", closed: "今天休息",
  route: "路线", dPrice: "票价", dHours: "开放时间", dTip: "小贴士",
  contact: "需要建议？请给我们留言：",
  note: "票价和开放时间摘自官方网站，日期为 %d。信息可能有变动，出发前请再次确认。",
  langLabel: "语言", official: "官方网站", moreInfo: "更多信息", venueTbc: "场地待定",
  k_monument: "地标", k_museum: "博物馆", k_walk: "漫步", k_trip: "一日游", k_heritage: "历史遗迹", k_outing: "出游", k_exhibition: "展览", k_fair: "展会", k_concert: "音乐会",
  priceSite: "票价请见官方网站。", hoursSite: "开放时间请见官方网站。",
  closedMon: "通常周一休息。开放时间请见官方网站。",
  hoursLabel: "开放时间", notStated: "未注明。", askOnSite: "未注明：请到现场询问。",
  hours2025: "2025 年记录的时间：出发前请再次确认。",
  freeP: "免费。", freeOutdoor: "免费，户外。", openAccess: "自由出入。",
  perProgram: "视节目安排而定。", checkCalendar: "来之前请查看日程。", program: "节目安排"
};

GUIDE.zh = {
  ui: {
    brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "语言",
    welcome: "欢迎入住", welcomeLede: "这里是您入住期间需要了解的一切。请点按一个栏目。",
    menu: "菜单", back: "返回菜单", host: "您的房东", callUs: "联系我们",
    route: "路线", away: "距离", distance: "距离", price: "每人价格",
    note: "信息摘自公寓的入住手册。",
    codesTitle: "门禁密码", codesBody: "各道门、钥匙盒和电梯的密码，会在您抵达前通过 Airbnb 消息发送给您。出于公寓安全考虑，这里不予显示。",
    hostTitle: "您的房东", hostBody: "我是 Oradou 公寓的房东，也是个热爱烹饪的人。欢迎访问我的 Instagram 主页：",
    hostBody2: "我很喜欢招待客人，会尽力让您的住宿尽可能舒适愉快。",
    reachUs: "需要联系我们？", phone: "电话", email: "电子邮件",
    kitchenH: "厨房", linenH: "布草", shopsH: "购物", restoH: "餐厅", fastH: "快餐", fastNote: "地址摘自入住手册。点按“路线”可查看从您当前位置出发的准确距离。"
  },
  sections: [
    { id: "arrival", t: "入住与退房", d: "时间、钥匙、停车", blocks: [
      { k: "facts", rows: [["入住", "16:00 起"], ["退房", "12:00 前"]] },
      { k: "h", t: "如何进入" },
      { k: "p", t: "住所地址和入住指引会通过 Airbnb 消息发送给您。请前往消息中告知的地址，并输入已发送给您的密码。" },
      { k: "route", dest: "6-8 rue de Lutèce, Argenteuil", label: "公寓" },
      { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "钥匙盒和停车场" },
      { k: "codes" },
      { k: "h", t: "离开之前" },
      { k: "list", items: ["关灯", "扎好垃圾袋", "洗好餐具", "把毛巾放在地上", "关好门窗", "把钥匙放回钥匙盒"] },
    ] },
    { id: "stay", t: "入住期间", d: "服务、设施", blocks: [
      { k: "h", t: "温馨提示" },
      { k: "list", items: [
        "冰箱里备有瓶装水和 panaché（啤酒柠檬汽水）。",
        "配有洗碗机，可供使用。",
        "提供毛巾。",
        "公寓各处都有插座，方便您给电子设备充电。",
        "垃圾桶是自动的：把手放在上方即可打开。",
        "客厅和卧室都有电视（Prime Video 和 Netflix）。"
      ] },
      { k: "h", t: "公寓介绍" },
      { k: "p", t: "安静环境中的舒适公寓：2 间宽敞的卧室、1 间现代化浴室和独立洗手间。设有露台、停车位、洗碗机、洗衣机和烘干机。" }
    ] },
    { id: "house", t: "厨房与布草", d: "烤箱、微波炉、洗衣机", blocks: [
      { k: "h", t: "厨房" },
      { k: "list", items: [
        "烤箱：上下加热、热风循环和热解自清洁。",
        "微波炉：大旋钮用于开门，右边小旋钮用于启动，左边小旋钮用于停止。",
        "冰箱：有凉水、panaché 饮料瓶和独立小包装黄油。",
        "Nespresso 咖啡机。"
      ] },
      { k: "h", t: "布草" },
      { k: "list", items: [
        "备有大小毛巾。",
        "为了您的舒适，床铺已经铺好。",
        "洗衣机：备有洗衣凝珠和柔顺剂。",
        "洗衣机同时具备烘干功能。另备有熨斗和蒸汽挂烫机。",
        "备有吹风机和直发夹板。"
      ] }
    ] },
    { id: "rules", t: "住宿守则", d: "几条简单的规定", blocks: [
      { k: "list", items: [
        "爱护房屋：请爱惜房屋和户外区域，避免造成损坏。",
        "聚会与招待：不得举办大型聚会，22:00 以后请保持安静。",
        "宠物：我们喜欢动物，但入住期间不允许携带宠物。",
        "额外人员：如有其他人同住，请事先告知我们。",
        "室内禁烟：南侧露台设有带遮盖的吸烟区。",
        "安全：请遵守安全规定，不要使用危险的电器。"
      ] }
    ] },
    { id: "nearby", t: "周边", d: "购物和餐厅", blocks: [
      { k: "places", ref: "shops", h: "shopsH" },
      { k: "places", ref: "restaurants", h: "restoH" },
      { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
    ] },
    { id: "activities", t: "出游推荐", d: "巴黎及周边，每日更新", special: "activities" },
    { id: "emergency", t: "紧急情况与健康", d: "医院、医生、药房", blocks: [
      { k: "facts", rows: [["急救中心（SAMU）", "15"], ["消防", "18"], ["欧洲紧急电话", "112"], ["警察", "17"]] },
      { k: "contact3", items: [
        { h: "医院", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "急诊 24 小时开放。" },
        { h: "医生", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "附近就诊的首选。您也可以通过 Doctolib 预约，遇到医疗紧急情况请拨打 15。" },
        { h: "药房", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
      ] }
    ] },
    { id: "leave", t: "离开之前", d: "退房与评价", blocks: [
      { k: "list", items: ["扎好垃圾袋", "清空洗碗机", "检查柜子和抽屉", "关好门窗", "把钥匙放回钥匙盒"] },
      { k: "h", t: "您的评价" },
      { k: "p", t: "您满意，就是我们最大的满足！如果您住得愉快，欢迎留下评价。" },
      { k: "p", t: "感谢您选择我们的住宿。期待很快再次迎接您，祝您一路平安。" }
    ] }
  ]
};

(function () {
  var Z = {
    eiffel: { n: "埃菲尔铁塔", b: "可以走楼梯或乘电梯到二层，也可以直达塔顶。", p: "走楼梯到二层：14,80 €。乘电梯到二层：23,50 €。乘电梯到塔顶：36,70 €。4 至 11 岁儿童：3,80 € 至 9,20 €。4 岁以下免费。", h: "每天 9:00 至 23:45，截至 12 月 31 日。最后入场时间 22:45。", t: "请在线预订时段。10:30 之前或 17:00 之后排队人数较少。", u: "预订" },
    louvre: { n: "卢浮宫", b: "蒙娜丽莎、米洛的维纳斯，以及这座宫殿八个多世纪的历史。", p: "欧洲经济区居民 22 €，其他游客 32 €。18 岁以下免费；每月第一个周五 18:00 以后对所有人免费（7 月和 8 月除外）。", h: "周一、周四、周六、周日 9:00 至 18:00。周三和周五 9:00 至 21:00。周二闭馆。", t: "即使符合免费条件，也请在线预订时段。旁边的杜乐丽花园免费开放。", u: "开放时间与门票" },
    sacre: { n: "圣心大教堂与蒙马特", b: "大教堂坐落在蒙马特高地，俯瞰整个巴黎。这片街区适合步行游览。", p: "大教堂免费入内。圆顶需要购票：票价请见官方网站。", h: "大教堂每天 6:30 至 22:30 开放。圆顶约 10:15 开放，视日期不同在 17:00 至 20:00 之间关闭。", t: "傍晚时分登顶，可以欣赏城市景色。" },
    arc: { n: "凯旋门", b: "屋顶观景台可俯瞰星形广场的十二条大道和香榭丽舍大街。", p: "官网显示票价为 16 €。26 岁以下免费。", h: "开放时间请见官方网站。", t: "更新信息时电梯停用，因此只能走楼梯登顶。" },
    orsay: { n: "奥赛博物馆", b: "位于塞纳河畔旧火车站内的大型印象派收藏。莫奈曾在 Argenteuil 作画，他的《阿让特伊的帆船赛》就在馆藏之中。", t: "请在线预订时段。参观之后，很适合接着去 Argenteuil 的印象派之家。" },
    notredame: { n: "巴黎圣母院", b: "修复后重新开放，矗立在西岱岛上。", p: "入场和预订条件请查看官方网站。", t: "附近的塞纳河岸很适合步行游览。" },
    versailles: { n: "凡尔赛宫", b: "镜厅、王室寝宫和花园。请安排整整一天。", t: "请提前预订，周末尤其如此。" },
    monet: { n: "克洛德·莫奈印象派之家", b: "莫奈 1874 年至 1878 年居住过的房子，他在这里画下了 156 幅 Argenteuil 题材的作品。这里没有原作：有影像投影、他的生平故事，以及俯瞰花园的茶室。", p: "5 €，优惠票 3,50 €，12 岁以下免费。", h: "随季节而变：出发前请查看网站。", t: "想看原作，请安排参观奥赛博物馆。" },
    basilique: { n: "Argenteuil 圣但尼大教堂", b: "大约 1200 年来，这座大教堂一直保存着圣袍，据传是与基督的衣袍有关的圣物。只有在圣物罕见展出期间才向公众展示。", t: "旧修道院的花园就在它后面。" },
    abbaye: { n: "修道院花园与 L'Atelier", b: "花园建在一座本笃会旧修道院的遗址上，可以看到考古遗迹。镇上的展览空间 L'Atelier 举办免费展览。", h: "L'Atelier：周三和周六 11:00 至 13:00 及 14:00 至 19:00，周日 14:00 至 19:00。" },
    streetart: { n: "Argenteuil 的街头艺术", b: "全镇各处的大型壁画，出自 C215、Hopare、Jérôme Mesnager 和 Nexer 等艺术家之手。", t: "壁画地图可在镇政府网站上查看。", u: "壁画地图" },
    cave: { n: "La Cave 演出场地", b: "一座有 145 个座位的场地，由 13 世纪的拱顶旧酒窖改建而成。演出涵盖爵士、摇滚、法语香颂、世界音乐、电子乐和单口喜剧。", p: "全价 15 €，26 岁以下 12 €，儿童 5 €。" }
  };
  var id;
  for (id in Z) { if (Z.hasOwnProperty(id) && T[id]) { T[id].zh = Z[id]; } }

  var PZ = {
    "Le Jardin du Val": "以新鲜食品、肉铺以及果蔬而受欢迎的超市。",
    "Lidl": "适合日常采购。",
    "Aldi": "平价超市，有新鲜食品和面包店。",
    "Carrefour Sartrouville": "大型综合超市，带购物长廊和加油站。",
    "Luci": "精致的意大利菜。",
    "California Sushi": "日本餐厅和寿司。",
    "Anatolie": "土耳其特色菜和烧烤。",
    "Babamour": "氛围亲切的餐厅：精品汉堡和家常菜。",
    "Medley Restaurant": "现代料理，环境雅致。"
  };
  var groups = ["shops", "restaurants", "fastfood"], g, i, p;
  for (g = 0; g < groups.length; g++) {
    for (i = 0; i < PLACES[groups[g]].length; i++) {
      p = PLACES[groups[g]][i];
      if (p.t && PZ.hasOwnProperty(p.n)) { p.t.zh = PZ[p.n]; }
    }
  }
})();
