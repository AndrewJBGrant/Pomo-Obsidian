"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

import { useColorContext } from "../context/indexContext";

const NavBar = () => {
  const { color } = useColorContext();

  return (
    <nav
      className={`${color} dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>

      <Clock />
      <ThemeSwitch />
      <ScrollTopButton />

    </nav>
  );
};
export default NavBar;
