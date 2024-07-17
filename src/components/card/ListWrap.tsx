"use client";
import React from "react";
import { useLocalStorageState } from "ahooks";

const ListWrap = ({ children }: { children: React.ReactNode }) => {
  const [len] = useLocalStorageState<number>("listLen", {
    defaultValue: 6,
  });
  return (
    <ul
      className="space-y-4 overflow-hidden hover:overflow-auto"
      style={{ maxHeight: `${len! * 40 + 10}px` }}
    >
      {children}
    </ul>
  );
};

export default ListWrap;
