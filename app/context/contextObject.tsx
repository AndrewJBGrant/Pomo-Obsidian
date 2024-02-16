import { createContext, useContext, useState } from "react";
import NavBar from "../NavBar/Navbar";
import PomoDoroTimer from "../Timer/Pomodoro";


const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"];
export const Context = createContext(colors[0]);

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <Context.Provider value={color}>
        <NavBar />
        <PomoDoroTimer />
      </Context.Provider>
    </>
  );
}
