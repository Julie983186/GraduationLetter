import { generatePhotos } from "./helpers";

export const naPhotos = generatePhotos("na", 31).map((p, i) => {
  const id = i + 1;

  return {
    ...p,

    ...(id === 1 && {
      title: "夜晚彩霞",
      text: "第一天到海邊賞夕陽 大家一起拍的這張好美"
    }),

    ...(id === 2 && {
      title: "小Taiwan",
      text: "因為Taiwan所以我們相見"
    }),

    ...(id === 6 && {
      title: "煙火之下",
      text: "這張在煙火下倉促拍的照片超級好看"
    }),

    ...(id === 7 && {
      title: "反差",
      text: "不知道為何我笑得那麼開心 秀玉你一臉問號"
    }),

    ...(id === 11 && {
      title: "海邊獨照",
      text: "小露香肩拍美照"
    }),

    ...(id === 13 && {
      title: "最後的黑糖糕",
      text: "有點不好吃吧！冰太久了"
    }),

    ...(id === 14 && {
      title: "跳高秀玉",
      text: "這張照片歸功於秀玉跳得有夠高"
    }),

    ...(id === 15 && {
      title: "秀玉與仙人掌",
      text: "千萬不要再與仙人掌有聯繫了！"
    }),

    ...(id === 19 && {
      title: "可愛的我們",
      text: "那天風好黏 但我們還是拍下了可愛的回憶"
    }),

    ...(id === 21 && {
      title: "可愛秀玉",
      text: "這時候就應該發現秀玉很ㄎㄧㄤ"
    }),

    ...(id === 26 && {
      title: "一起吃冰",
      text: "大家一起吃好多冰 太多口味甚至要倒數交換"
    }),

    ...(id === 29 && {
      title: "Julie & Nathania",
      text: "回憶合照"
    }),
  };
});