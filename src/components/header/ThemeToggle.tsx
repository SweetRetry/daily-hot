"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="secondary"
      size="icon"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default Theme;
