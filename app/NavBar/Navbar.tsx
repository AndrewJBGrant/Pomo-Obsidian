"use client";

import Link from "next/link";
import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";

//import { useColorContext } from "../context/indexContext";
//  const contextValue = useContext(Context);
// const { color } = useColorContext()


const NavBarIcon = ({ icon, title, text }: any) => (
  <div className="navbar-icon group">
    {title}
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);



const NavBar = () => {
  return (
    <nav className={`fixed h-screen flex flex-col border-r`}>
      <Clock />
      <ThemeSwitch />
      <ScrollTopButton />
      <Link
        href="/login"
        className=""
      >
        Login
      </Link>{" "}


   <NavBarIcon
          title={"Groups"}
          text={"Store a collection of realted notes"}
        />



    </nav>
  );
};
export default NavBar;
