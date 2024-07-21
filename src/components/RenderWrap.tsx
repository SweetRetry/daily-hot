"use client";
import { renderConfigStorageKey } from "@/config/storageKey";
import { useLocalStorageState } from "ahooks";
import { ReactNode } from "react";

const RenderWrap = ({ id, children }: { id: string; children: ReactNode }) => {
  const [state] = useLocalStorageState<Record<string, boolean>>(
    renderConfigStorageKey,
    {
      defaultValue: {},
    },
  );
  if (state?.[id] === false) return null;
  return children;
};

export default RenderWrap;
