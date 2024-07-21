"use client";
import { Switch } from "@/components/ui/switch";
import { renderConfigStorageKey } from "@/config/storageKey";
import { useLocalStorageState } from "ahooks";
import React, { useState } from "react";

const SocialSwitch = ({ id }: { id: string }) => {
  const [state, setState] = useLocalStorageState<Record<string, boolean>>(
    renderConfigStorageKey,
  );

  const [checked, setChecked] = useState(state?.[id] ?? true);

  return (
    <Switch
      checked={checked}
      onCheckedChange={(value) => {
        setChecked(!checked);
        setState({
          ...state,
          [id]: value,
        });
      }}
    />
  );
};

export default SocialSwitch;
