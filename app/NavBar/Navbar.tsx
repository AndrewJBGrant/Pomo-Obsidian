"use client";

import Link from "next/link";
import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";
import NavIcons from "./NavIcons";
import GroupsBtn from "../groups/GroupsBtn";

//import { useColorContext } from "../context/indexContext";
//  const contextValue = useContext(Context);
// const { color } = useColorContext()


const NavBar = () => {
  return (
    <nav className={`fixed h-screen flex flex-col border-r`}>
      <Clock />
      <ThemeSwitch />

      <Link
        href="/login"
        className="navbar-icon"
      >
        Login
      </Link>


<GroupsBtn />


      <ScrollTopButton />

    </nav>
  );
};
export default NavBar;
