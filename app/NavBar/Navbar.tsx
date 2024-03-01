"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

import { useColorContext } from "../context/indexContext";

const NavBar = () => {
//  const contextValue = useContext(Context);

const { color } = useColorContext()

  return (
    <nav className={`bg-neutral-100 dark:bg-zinc-700 fixed top-0 h-screen flex flex-col border-r`}>
      <Clock />

<span className="">
    <ThemeSwitch />
</span>

<span className={`hover:text-${color}`}>
      <ScrollTopButton />

    </nav>
</div>
  );
};
export default NavBar;
