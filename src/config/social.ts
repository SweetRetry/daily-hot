export enum SocialType {
  Tiktok = "tiktok",
  Zhihu = "zhihu",
  Weibo = "weibo",
  Juejin = "juejin",
}

export interface SocialConfigItem {
  name: string;
  id: SocialType;
  tip?: string;
}

export const socialList: SocialConfigItem[] = [
  {
    name: "抖音",
    id: SocialType.Tiktok,
    tip: "热搜榜",
  },
  {
    name: "微博",
    id: SocialType.Weibo,
  },
  {
    name: "知乎",
    id: SocialType.Zhihu,
  },
  {
    name: "掘金",
    id: SocialType.Juejin,
    tip: "文章榜",
  },
];
