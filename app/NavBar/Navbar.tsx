"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

import { useColorContext } from "../context/indexContext";

const NavBar = () => {
//  const contextValue = useContext(Context);

// const { color } = useColorContext()

  return (

 




    <nav className={`fixed bg-cyan-400 h-screen flex flex-col border-r`}>
      <Clock />
    <ThemeSwitch />
      <ScrollTopButton />
    </nav>

  );
};
export default NavBar;
