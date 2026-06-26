import { generatePhotos } from "./helpers";

export const wangPhotos = generatePhotos("wang", 50).map((p, i) => {
  const id = i + 1;

  return {
    ...p,

    ...(id === 4 && {
      title: "Ju屋處合照",
      text: "這張笑成這樣莫名好笑"
    }),

    ...(id === 5 && {
      title: "回憶怪照",
      text: "有時候就是要來點怪的"
    }),

    ...(id === 7 && {
      title: "獨木舟體驗",
      text: "這張修完之後覺得很美 澎湖玩水美照"
    }),

    ...(id === 10 && {
      title: "攝影師與模特兒",
      text: "自信拍照就會有美照 記得燦笑"
    }),

    ...(id === 12 && {
      title: "獨照",
      text: "笑得很美 氛圍感100分"
    }),

    ...(id === 13 && {
      title: "閒畫家常",
      text: "覺得你跟這間店莫名很適合"
    }),

    ...(id === 17 && {
      title: "仙人島愛心照",
      text: "還好有一起嘗試這個動作才留下這張回憶！"
    }),

    ...(id === 23 && {
      title: "一起去考試",
      text: "考得好累 但還好有你一起戰鬥"
    }),

    ...(id === 18 && {
      title: "海邊的我們",
      text: "有海有你也有我們"
    }),

    ...(id === 28 && {
      title: "玄武岩之下",
      text: "這張姿勢很怪 但和玄武岩莫名搭"
    }),

    ...(id === 30 && {
      title: "冰店候位ing",
      text: "外面好熱歐"
    }),

    ...(id === 32 && {
      title: "Ju屋處",
      text: "最後的小聚"
    }),

    ...(id === 33 && {
      title: "唯一的整套畢業服",
      text: "還好有拍到這個景點 雖然穿上去有夠熱"
    }),

    ...(id === 34 && {
      title: "跳起來",
      text: "大家很賣力ㄟ"
    }),

    ...(id === 37 && {
      title: "王美淑",
      text: "Love you"
    }),

    ...(id === 41 && {
      title: "慶功火鍋宴",
      text: "雖然不知道怎麼評的 但大家辛苦了"
    }),

    ...(id === 43 && {
      title: "A13",
      text: "人模人樣的我們"
    }),

    ...(id === 46 && {
      title: "拍照就愛怪動作",
      text: "越怪我越愛"
    }),

    ...(id === 50 && {
      title: "GPT之我的神",
      text: "大學四年我們的唯一信奉"
    }),
  };
});