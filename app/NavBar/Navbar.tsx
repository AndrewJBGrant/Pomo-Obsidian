"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";

import { useContext } from "react";
import { Context } from "../context/contextObject";

const NavBar = () => {
  const contextValue = useContext(Context);

  return (
    <nav className={`${contextValue} fixed top-0 h-screen flex flex-col border-r`}>
      <ThemeSwitch />
            <Clock />
    </nav>
  );
};
export default NavBar;
