"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

import { useColorContext } from "../context/indexContext";

const NavBar = () => {
  const { color } = useColorContext();

  return (
    <nav
      className={`dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>

      <Clock />

<span className="">
    <ThemeSwitch />
</span>

<span className={`hover:text-${color}`}>
      <ScrollTopButton />

</span>

    </nav>
  );
};
export default NavBar;
