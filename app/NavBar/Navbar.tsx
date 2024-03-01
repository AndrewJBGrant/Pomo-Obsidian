"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";

// import { useContext } from "react";
// import { Context } from "../context/contextObject";

import { useColorContext } from "../context/contextObject";
import ScrollTopButton from "./ScrollTop";
// const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"];


const NavBar = () => {
//  const contextValue = useContext(Context);

// const { color } = useColorContext()

  return (

<div className="flex basis-24">
    <nav className={` dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>
      <Clock />
      <ThemeSwitch />
      <ScrollTopButton />
    </nav>
</div>
  );
};
export default NavBar;
