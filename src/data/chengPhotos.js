import { generatePhotos } from "./helpers";

export const chengPhotos = generatePhotos("cheng", 25).map((p, i) => {
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
    })
  };
});