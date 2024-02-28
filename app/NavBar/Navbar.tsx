"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

import { useIndexContext } from "../context/indexContext";

const NavBar = () => {

const { value } = useIndexContext()


  return (
    <nav className={` dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>

<h1>{value}</h1>


      <Clock />
      <ThemeSwitch />
      <ScrollTopButton />
    </nav>
  );
};
export default NavBar;
