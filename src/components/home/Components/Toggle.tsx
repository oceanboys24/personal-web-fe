"use client";

import { Button } from "@/components/ui/button";
import { MdDarkMode } from "react-icons/md";
import { PiSunDim } from "react-icons/pi";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "light" ? (
    <Button
      variant="ghost"
      className="cursor-pointer"
      onClick={() => setTheme("dark")}
    >
      <MdDarkMode />
    </Button>
  ) : (
    <Button
      variant="ghost"
      className="cursor-pointer"
      onClick={() => setTheme("light")}
    >
      <PiSunDim />
    </Button>
  );
}
