"use client";

import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavIcons from "../NavBar/NavIcons";
import { Span } from "next/dist/trace";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client!!, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  //  const { color } = useColorContext();

  return (
    <button className="text-3xl" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <NavIcons
        text={"Dark/Light mode?"}
        icon={theme === "light" ? <FaRegMoon /> : <GoSun />}
      ></NavIcons>
    </button>
  );
};

export default ThemeSwitch;

{
  /* {theme === "light" ? (
    <span> <FaRegMoon /> </span> ) : (
    <span> <GoSun /> </span> )
 } */
}
