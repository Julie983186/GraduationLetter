import { generatePhotos } from "./helpers";

export const chengPhotos = generatePhotos("cheng", 43).map((p, i) => {
  const id = i + 1;

  return {
    ...p,

    ...(id === 2 && {
      title: "第一天的晚霞",
      text: "好美 很喜歡那天吹著海風一起聽方大同"
    }),

    ...(id === 4 && {
      title: "東吉島的徒步之旅",
      text: "不知道在看什麼笑成這樣"
    }),

    ...(id === 11 && {
      title: "榕樹下的試拍",
      text: "氛圍感 但有陽光那張更美"
    }),

    ...(id === 15 && {
      title: "獨木舟體驗",
      text: "抱歉尹榛這樣看真的有點Ju董"
    }),

    ...(id === 18 && {
      title: "海邊的我們",
      text: "有海有你也有我們"
    }),

    ...(id === 25 && {
      title: "與賢明的合照",
      text: "消失的領巾我給你補回來了！"
    }),

    ...(id === 28 && {
      title: "玄武岩下的怪姿勢",
      text: "這張拍完後看真的很好笑"
    }),

    ...(id === 30 && {
      title: "回程合照",
      text: "暈船前的紀錄照 氛圍感點滿"
    }),

    ...(id === 32 && {
      title: "畢專紀錄",
      text: "大家人模人樣的等到最後"
    }),

    ...(id === 33 && {
      title: "著名景點-跨海大橋",
      text: "這裡真的人多到好難拍"
    }),

    ...(id === 34 && {
      title: "19&20",
      text: "We are in the upsidedown"
    }),
    
    ...(id === 37 && {
      title: "A13",
      text: "畢專團隊合照"
    }),

    ...(id === 39 && {
      title: "火鍋慶功宴",
      text: "雖然沒得名 但熬過畢專我們很棒！"
    }),

    ...(id === 43 && {
      title: "張尹榛",
      text: "Love you"
    }),
  };
});