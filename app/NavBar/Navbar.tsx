"use client";

import Link from "next/link"
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

  <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}

    </nav>

  );
};
export default NavBar;
