"use client";
import React, { useLayoutEffect, useState } from "react";
import dayjs from "dayjs";
import { Lunar } from "lunar-typescript";

const renderLunarCalendar = () => {
  // 解构农历对象
  const lunar = Lunar.fromDate(new Date());
  const gzYear = lunar.getYearInGanZhi(); // 道历年
  const IMonthCn = lunar.getMonthInChinese(); // 农历月
  const IDayCn = lunar.getDayInChinese(); // 农历日
  const ncWeek = lunar.getWeekInChinese(); // 农历星期
  return `${gzYear}年 ${IMonthCn}月${IDayCn} 星期${ncWeek}`;
};

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime.add(1, "seconds"));
    }, 1000);

    return () => {
      timer && clearTimeout(timer);
    };
  });
  return (
    <>
      <p>{currentTime.format("YYYY-MM-DD HH:mm:ss")}</p>
      <p className="text-gray-500">{renderLunarCalendar()}</p>
    </>
  );
};

export default Timer;
