import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import RealTime from "./RealTime";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-24 w-full items-center justify-between px-4 pc:px-8">
      <div className="flex items-center justify-start">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="mr-4 object-contain mobile:w-[36px]"
        />
        <div>
          <h1 className="text-2xl font-bold mobile:text-base">今日热榜</h1>
          <h3 className="text-sm text-gray-400 mobile:text-xs">
            {" "}
            汇聚全网热点,热门尽览无余
          </h3>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-center text-center mobile:hidden">
        <RealTime />
      </div>

      <div className="flex gap-4">
        <ThemeToggle />
        {/* <Link href="/settings">
          <Button variant="secondary" size="icon">
            <Settings />
          </Button>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
