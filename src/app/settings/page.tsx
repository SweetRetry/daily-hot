import { socialList } from "@/config/social";
import React from "react";
import Image from "next/image";
import SocialSwitch from "./_components/SocialSwitch";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EnterAnimation from "@/components/EnterAnimation";

const page = () => {
  return (
    <EnterAnimation className="container">
      <div className="rounded-xl border-2 border-solid shadow">
        <div className="boder-solid border-b border-b-gray-200 p-4">
          <h2 className="relative flex items-center justify-center text-xl font-bold">
            <Link
              href="/"
              className="absolute left-0 top-0 flex items-center text-gray-500 hover:text-primary"
            >
              <ArrowLeft />
            </Link>
            热榜显示设置
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap justify-between gap-y-4 p-4">
          {socialList.map((item) => (
            <div
              key={item.id}
              className="basis-1/3 px-4 mobile:basis-full tablet:basis-1/2"
            >
              <div className="flex items-center justify-between rounded border border-solid border-primary px-8 py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={`/social/${item.id}.svg`}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-500">热搜榜</p>
                  </div>
                </div>
                <SocialSwitch id={item.id} />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="boder-solid boder-t-gray-200 flex justify-center gap-4 border-t py-4">
          <Button>全部打开</Button>
          <Button>全部关闭</Button>
          <Button>保存</Button>
        </div> */}
      </div>
    </EnterAnimation>
  );
};

export default page;
