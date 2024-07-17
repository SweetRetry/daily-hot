import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export const calcTimeFromNow = (time: string, time2: string) => {
  return dayjs(time).from(time2);
};
