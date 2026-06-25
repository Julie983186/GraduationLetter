import { generatePhotos } from "./helpers";

export const kPhotos = generatePhotos("k", 32).map((p, i) => {
  const id = i + 1;

  return {
    ...p,

    ...(id === 1 && {
      title: "氛圍照",
      text: "有海有風有墨鏡還有Kotomi"
    }),

    ...(id === 4 && {
      title: "小Taiwan",
      text: "希望你記得台灣記得我們"
    }),

    ...(id === 5 && {
      title: "花火節",
      text: "一起在花火節門口合照 人好多！"
    }),

    ...(id === 6 && {
      title: "與Allen合照",
      text: "專題順利結束 過程好辛苦"
    }),

    ...(id === 7 && {
      title: "第一天的冰店",
      text: "點了好多碗冰 真的好吃！"
    }),

    ...(id === 9 && {
      title: "Ju的乘客Kotomi",
      text: "還好安全載客結束澎湖之旅 差點被狗嚇到時感覺好危險"
    }),

    ...(id === 11 && {
      title: "Kotomi與哈密瓜",
      text: "笑得好開心！ 可愛得斯"
    }),

    ...(id === 15 && {
      title: "夕陽合照",
      text: "這天風吹得好黏 但我們還是很開心的拍了好多照片"
    }),

    ...(id === 16 && {
      title: "Kotomi & Julie & Nathania",
      text: "合照可愛"
    }),

    ...(id === 18 && {
      title: "玄武岩下的我們",
      text: "跟Kotomi的合照 要一直記得我！"
    }),

    ...(id === 20 && {
      title: "Kotomi的隱形絲襪",
      text: "成為我們的回憶 大家要記得擦防曬不然會曬出Kotomi"
    }),

    ...(id === 22 && {
      title: "Kotomi在台刮痧初體驗",
      text: "太痛了！沒有下一次了"
    }),

    ...(id === 25 && {
      title: "煙火之下",
      text: "這張的煙火雖然是小蘇後製 但真的很漂亮"
    }),

    ...(id === 29 && {
      title: "近距離",
      text: "可愛Kotomi"
    }),
  };
});