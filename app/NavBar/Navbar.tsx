"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";

// import { useContext } from "react";
// import { Context } from "../context/contextObject";

import { useColorContext } from "../context/contextObject";
// const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"];


const NavBar = () => {
//  const contextValue = useContext(Context);

const { color } = useColorContext()

  return (
    <nav className={`bg-neutral-100 dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>
      <Clock />
      <ThemeSwitch />

    </nav>
  );
};
export default NavBar;
