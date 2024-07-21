import { SocialConfigItem } from "@/config/social";

export interface SocialHotListItem {
  id: string;
  title: string;
  hot: string;
  url: string;
  mobileUrl: string;
}

export interface SocialItem extends SocialConfigItem {
  updateTime: string;
  fetchTime: string;
  list: SocialHotListItem[];
}
