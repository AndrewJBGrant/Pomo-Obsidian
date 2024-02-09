import ThemeSwitch from "../components/ThemeChanger";
import Clock from "./clock";

const NavBar = () => {


return (
  <nav className="fixed top-0 h-screen flex flex-col">

<ThemeSwitch />
<Clock />
  </nav>
);
};
export default NavBar;
