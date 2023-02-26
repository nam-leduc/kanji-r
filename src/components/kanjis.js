import KANJI_DETAIL from "./kanjiDetail.json";

function createKanjiDataForEachPage(...cells) {
  let cols = cells.map((kanji) => {
    let kanjiDetail = {
      mean: kanji,
      examples: [],
    };
    if (kanji in KANJI_DETAIL) {
      kanjiDetail = KANJI_DETAIL[kanji];
    }

    const meaning = kanjiDetail.mean;
    const examples = kanjiDetail.examples;
    const onyomi = kanjiDetail.on;
    const kunyomi = kanjiDetail.kun;

    const value = kanji;
    let remembered = localStorage.getItem(kanji);
    if (remembered == null || remembered == "false") {
      remembered = false;
    }

    return { value, kanji, remembered, meaning, examples, onyomi, kunyomi };
  });
  return cols;
}

const ROWS = [
  {
    id: 1,
    name: "5k - 1",
    cols: createKanjiDataForEachPage(
      "一",
      "右",
      "雨",
      "円",
      "王",
      "音",
      "下",
      "火",
      "花",
      "貝",
      "学",
      "気",
      "九",
      "休",
      "玉",
      "金",
      "空",
      "月",
      "犬",
      "見",
      "五",
      "口",
      "校",
      "左",
      "三",
      "山",
      "子",
      "四",
      "糸",
      "字",
      "耳",
      "七",
      "車",
      "手",
      "十",
      "出",
      "女",
      "小",
      "上",
      "森"
    ),
  },
  {
    id: 2,
    name: "5k - 2",
    cols: createKanjiDataForEachPage(
      "人",
      "水",
      "正",
      "生",
      "青",
      "夕",
      "石",
      "赤",
      "千",
      "川",
      "先",
      "早",
      "草",
      "足",
      "村",
      "大",
      "男",
      "竹",
      "中",
      "虫",
      "町",
      "天",
      "田",
      "土",
      "二",
      "日",
      "入",
      "年",
      "白",
      "八",
      "百",
      "文",
      "木",
      "本",
      "名",
      "目",
      "立",
      "力",
      "林",
      "六"
    ),
  },
  {
    id: 3,
    name: "5k - 3",
    cols: createKanjiDataForEachPage(
      "引",
      "羽",
      "雲",
      "園",
      "遠",
      "何",
      "科",
      "夏",
      "家",
      "歌",
      "画",
      "回",
      "会",
      "海",
      "絵",
      "外",
      "角",
      "楽",
      "活",
      "間",
      "丸",
      "岩",
      "顔",
      "汽",
      "記",
      "帰",
      "弓",
      "牛",
      "魚",
      "京",
      "強",
      "教",
      "近",
      "兄",
      "形",
      "計",
      "元",
      "言",
      "原",
      "戸"
    ),
  },
  {
    id: 4,
    name: "5k - 4",
    cols: createKanjiDataForEachPage(
      "古",
      "午",
      "後",
      "語",
      "工",
      "公",
      "広",
      "交",
      "光",
      "考",
      "行",
      "高",
      "黄",
      "合",
      "谷",
      "国",
      "黒",
      "今",
      "才",
      "細",
      "作",
      "算",
      "止",
      "市",
      "矢",
      "姉",
      "思",
      "紙",
      "寺",
      "自",
      "時",
      "室",
      "社",
      "弱",
      "首",
      "秋",
      "週",
      "春",
      "書",
      "少"
    ),
  },
  {
    id: 5,
    name: "5k - 5",
    cols: createKanjiDataForEachPage(
      "場",
      "色",
      "食",
      "心",
      "新",
      "親",
      "図",
      "数",
      "西",
      "声",
      "星",
      "晴",
      "切",
      "雪",
      "船",
      "線",
      "前",
      "組",
      "走",
      "多",
      "太",
      "体",
      "台",
      "地",
      "池",
      "知",
      "茶",
      "昼",
      "長",
      "鳥",
      "朝",
      "直",
      "通",
      "弟",
      "店",
      "点",
      "電",
      "刀",
      "冬",
      "当"
    ),
  },
  {
    id: 6,
    name: "5k - 6",
    cols: createKanjiDataForEachPage(
      "東",
      "答",
      "頭",
      "同",
      "道",
      "読",
      "内",
      "南",
      "肉",
      "馬",
      "売",
      "買",
      "麦",
      "半",
      "番",
      "父",
      "風",
      "分",
      "聞",
      "米",
      "歩",
      "母",
      "方",
      "北",
      "毎",
      "妹",
      "万",
      "明",
      "鳴",
      "毛",
      "門",
      "夜",
      "野",
      "友",
      "用",
      "曜",
      "来",
      "里",
      "理",
      "話"
    ),
  },
  {
    id: 7,
    name: "4k - 1",
    cols: createKanjiDataForEachPage(
      "悪",
      "安",
      "暗",
      "医",
      "委",
      "意",
      "育",
      "員",
      "院",
      "飲",
      "運",
      "泳",
      "駅",
      "央",
      "横",
      "屋",
      "温",
      "化",
      "荷",
      "界",
      "開",
      "階",
      "寒",
      "感",
      "漢",
      "館",
      "岸",
      "起",
      "期",
      "客",
      "究",
      "急",
      "級",
      "宮",
      "球",
      "去",
      "橋",
      "業",
      "曲",
      "局"
    ),
  },
  {
    id: 8,
    name: "4k - 2",
    cols: createKanjiDataForEachPage(
      "銀",
      "区",
      "苦",
      "具",
      "君",
      "係",
      "軽",
      "血",
      "決",
      "研",
      "県",
      "庫",
      "湖",
      "向",
      "幸",
      "港",
      "号",
      "根",
      "祭",
      "皿",
      "仕",
      "死",
      "使",
      "始",
      "指",
      "歯",
      "詩",
      "次",
      "事",
      "持",
      "式",
      "実",
      "写",
      "者",
      "主",
      "守",
      "取",
      "酒",
      "受",
      "州"
    ),
  },
  {
    id: 9,
    name: "4k - 3",
    cols: createKanjiDataForEachPage(
      "拾",
      "終",
      "習",
      "集",
      "住",
      "重",
      "宿",
      "所",
      "暑",
      "助",
      "昭",
      "消",
      "商",
      "章",
      "勝",
      "乗",
      "植",
      "申",
      "身",
      "神",
      "真",
      "深",
      "進",
      "世",
      "整",
      "昔",
      "全",
      "相",
      "送",
      "想",
      "息",
      "速",
      "族",
      "他",
      "打",
      "対",
      "待",
      "代",
      "第",
      "題"
    ),
  },
  {
    id: 10,
    name: "4k - 4",
    cols: createKanjiDataForEachPage(
      "炭",
      "短",
      "談",
      "着",
      "注",
      "柱",
      "丁",
      "帳",
      "調",
      "追",
      "定",
      "庭",
      "笛",
      "鉄",
      "転",
      "都",
      "度",
      "投",
      "豆",
      "島",
      "湯",
      "登",
      "等",
      "動",
      "童",
      "農",
      "波",
      "配",
      "倍",
      "箱",
      "畑",
      "発",
      "反",
      "坂",
      "板",
      "皮",
      "悲",
      "美",
      "鼻",
      "筆"
    ),
  },
  {
    id: 11,
    name: "4k - 5",
    cols: createKanjiDataForEachPage(
      "氷",
      "表",
      "秒",
      "病",
      "品",
      "負",
      "部",
      "服",
      "福",
      "物",
      "平",
      "返",
      "勉",
      "放",
      "味",
      "命",
      "面",
      "問",
      "役",
      "薬",
      "由",
      "油",
      "有",
      "遊",
      "予",
      "羊",
      "洋",
      "葉",
      "陽",
      "様",
      "落",
      "流",
      "旅",
      "両",
      "緑",
      "礼",
      "列",
      "練",
      "路",
      "和"
    ),
  },
  {
    id: 12,
    name: "4k - 6",
    cols: createKanjiDataForEachPage(
      "愛",
      "案",
      "以",
      "衣",
      "位",
      "囲",
      "胃",
      "印",
      "英",
      "栄",
      "塩",
      "億",
      "加",
      "果",
      "貨",
      "課",
      "芽",
      "改",
      "械",
      "害",
      "街",
      "各",
      "覚",
      "完",
      "官",
      "管",
      "関",
      "観",
      "願",
      "希",
      "季",
      "紀",
      "喜",
      "旗",
      "器",
      "機",
      "議",
      "求",
      "泣",
      "救"
    ),
  },
  {
    id: 13,
    name: "4k - 7",
    cols: createKanjiDataForEachPage(
      "給",
      "挙",
      "漁",
      "共",
      "協",
      "鏡",
      "競",
      "極",
      "訓",
      "軍",
      "郡",
      "径",
      "型",
      "景",
      "芸",
      "欠",
      "結",
      "建",
      "健",
      "験",
      "固",
      "功",
      "好",
      "候",
      "航",
      "康",
      "告",
      "差",
      "菜",
      "最",
      "材",
      "昨",
      "札",
      "刷",
      "殺",
      "察",
      "参",
      "産",
      "散",
      "残"
    ),
  },
  {
    id: 14,
    name: "4k - 8",
    cols: createKanjiDataForEachPage(
      "士",
      "氏",
      "史",
      "司",
      "試",
      "児",
      "治",
      "辞",
      "失",
      "借",
      "種",
      "周",
      "祝",
      "順",
      "初",
      "松",
      "笑",
      "唱",
      "焼",
      "象",
      "照",
      "賞",
      "臣",
      "信",
      "成",
      "省",
      "清",
      "静",
      "席",
      "積",
      "折",
      "節",
      "説",
      "浅",
      "戦",
      "選",
      "然",
      "争",
      "倉",
      "巣"
    ),
  },
  {
    id: 15,
    name: "4k - 9",
    cols: createKanjiDataForEachPage(
      "束",
      "側",
      "続",
      "卒",
      "孫",
      "帯",
      "隊",
      "達",
      "単",
      "置",
      "仲",
      "貯",
      "兆",
      "腸",
      "低",
      "底",
      "停",
      "的",
      "典",
      "伝",
      "徒",
      "努",
      "灯",
      "堂",
      "働",
      "特",
      "得",
      "毒",
      "熱",
      "念",
      "敗",
      "梅",
      "博",
      "飯",
      "飛",
      "費",
      "必",
      "票",
      "標",
      "不"
    ),
  },
  {
    id: 16,
    name: "4k - 10",
    cols: createKanjiDataForEachPage(
      "夫",
      "付",
      "府",
      "副",
      "粉",
      "兵",
      "別",
      "辺",
      "変",
      "便",
      "包",
      "法",
      "望",
      "牧",
      "末",
      "満",
      "未",
      "脈",
      "民",
      "無",
      "約",
      "勇",
      "要",
      "養",
      "浴",
      "利",
      "陸",
      "良",
      "料",
      "量",
      "輪",
      "類",
      "令",
      "冷",
      "例",
      "歴",
      "連",
      "老",
      "労",
      "録"
    ),
  },
];

export const TABLES = ROWS.map((row, index) => {
  return {
    id: row.id,
    name: row.name,
  };
});

export const RENDER_TABLES = TABLES.map((table) => {
  return {
    label: table.name,
    id: table.id,
  };
});

export default ROWS;
