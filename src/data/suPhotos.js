import { generatePhotos } from "./helpers";

export const suPhotos = generatePhotos("su", 23).map((p, i) => {
  const id = i + 1;

  return {
    ...p,

    ...(id === 1 && {
      title: "怪照合照",
      text: "忘記什麼課 拍了這個搞笑合照"
    }),

    ...(id === 3 && {
      title: "晚霞合照",
      text: "第一晚的海邊合照 超級漂亮！雙馬尾也很剛好"
    }),

    ...(id === 6 && {
      title: "模特與她的攝影師們",
      text: "美照的背後是她的攝影師們"
    }),

    ...(id === 7 && {
      title: "自由小蘇",
      text: "這張斜的很剛好 就像比薩斜塔"
    }),

    ...(id === 8 && {
      title: "專屬座位",
      text: "板凳最後的位置在Ju的腿上"
    }),

    ...(id === 10 && {
      title: "氛圍照",
      text: "這張暗的有點日系"
    }),

    ...(id === 12 && {
      title: "巴斯光年蘇",
      text: "莫名適合的cosplay"
    }),

    ...(id === 17 && {
      title: "第一天的牛肉麵店",
      text: "窗邊二人座 從中壢到澎湖一起吃飯"
    }),

    ...(id === 18 && {
      title: "Go go go",
      text: "看到這張照片就要想到那首歌"
    }),

    ...(id === 20 && {
      title: "腿張太開",
      text: "小蘇同學拉筋課"
    }),

    ...(id === 22 && {
      title: "Subway",
      text: "一起吃的Subway 總共也沒吃過幾次"
    }),
  };
});