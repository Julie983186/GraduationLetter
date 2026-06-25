import { generatePhotos } from "./helpers";

export const wangPhotos = generatePhotos("wang", 23).map((p, i) => {
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
  };
});