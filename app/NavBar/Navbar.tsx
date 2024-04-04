import ThemeSwitch from "../components/buttons/ThemeChanger";
import Clock from "./clock";
import ScrollTopButton from "./ScrollTop";
import GroupsBtn from "../components/buttons/GroupsBtn";
import AuthButton from "../components/buttons/SessionBtn";
import NewNoteBtn from "../components/buttons/NewNoteBtn";
//import { useColorContext } from "../context/indexContext";
//  const contextValue = useContext(Context);
// const { color } = useColorContext()

const NavBar = () => {
  return (
    <nav className="fixed basis-1/4 h-screen flex flex-col border-r p-1">
      <Clock />
      <ThemeSwitch />
      <NewNoteBtn />
      <GroupsBtn />
      <AuthButton />
      <ScrollTopButton />
    </nav>
  );
};
export default NavBar;
