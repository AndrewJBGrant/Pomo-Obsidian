import ThemeSwitch from "../components/ThemeChanger";

const NavBar = () => {


return (
  <nav className="fixed top-0 h-screen m-2 flex flex-col text-main">

<ThemeSwitch />
  </nav>
);
};
export default NavBar;
