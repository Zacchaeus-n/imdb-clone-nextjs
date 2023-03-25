"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

//   this is to ensure that the page is rendered before the theme is set. otherwise you'll get a hydration error
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="cursor-pointer text-xl sm:text-2xl hover:text-amber-500"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-xl sm:text-2xl hover:text-amber-500"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
