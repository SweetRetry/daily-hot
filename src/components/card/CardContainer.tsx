import React from "react";
import { Button } from "../ui/button";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { calcTimeFromNow } from "@/lib/timeUtils";
import ListWrap from "./ListWrap";
import { SocialItem } from "@/types/social";

const CardContainer = ({ item }: { item: SocialItem }) => {
  return (
    <div className="cursor-pointer space-y-4 rounded-lg border border-solid border-gray-400 border-opacity-50 p-4 transition-all hover:shadow-[1px_1px_10px_-2px_rgba(0,0,0,0.1),-1px_-1px_10px_-2px_rgba(0,0,0,0.1)]">
      {/* 头部 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            width={24}
            height={24}
            src={`/social/${item.id}.svg`}
            alt={item.name}
            className="mr-2"
          />
          {item.name}
        </div>
        <span>{item.tip || "热榜"}</span>
      </div>
      {/* 内容 */}
      <ListWrap>
        {item.list?.map((item, index) => (
          <li key={item.id} className="flex">
            <span
              className={cn(
                "mr-2 flex h-6 w-6 min-w-6 items-center justify-center rounded bg-gray-100 dark:bg-gray-600",
                {
                  "!bg-red-500 text-white": index === 0,
                  "!bg-orange-400 text-white": index === 1,
                  "!bg-yellow-400 text-white": index === 2,
                },
              )}
            >
              {index + 1}
            </span>
            <a
              href={item.url}
              target="__blank"
              className="relative transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ListWrap>

      {/* 尾部 */}
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-gray-500">
          {calcTimeFromNow(item.updateTime, item.fetchTime)}
        </span>
        <Button size="icon" variant="secondary" className="h-6 w-8">
          <RefreshCcw className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CardContainer;
