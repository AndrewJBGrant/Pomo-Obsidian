"use client";

import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";
import NavIcons from "./NavIcons";
import GroupsBtn from "../groups/GroupsBtn";
import AuthButton from "../components/SignOutBtn";
import Link from "next/link";
//import { useColorContext } from "../context/indexContext";
//  const contextValue = useContext(Context);
// const { color } = useColorContext()

const NavBar = () => {
  return (
    <nav className={`fixed basis-1/4 h-screen flex flex-col border-r p-1`}>
      {/* <Clock /> */}
      <ThemeSwitch />

      <GroupsBtn />

  <Link
        href="/login"
        className="navbar-icon"
      >
        IN
      </Link>


{/* <AuthButton /> */}
      <ScrollTopButton />
    </nav>
  );
};
export default NavBar;
