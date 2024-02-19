import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import NavBar from "../NavBar/Navbar";
import PomoDoroTimer from "../Timer/Pomodoro";


const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"];

//export const Context = createContext(colors[0]);
//export const Context = createContext<[string, Dispatch<SetStateAction<string>>]>([colors[0], () => ""]);
// console.log(typeof(Context))

export const Context = createContext({
  color: colors[0],
  setColor: (color:string) => {}
})



export const ThemeProvider = () => {
  const [color, setColor] = useState("");

// const { color, setColors } = useContext(Context)
  return (
    <>
      <Context.Provider value={{color, setColor}}>
        <NavBar />
        <PomoDoroTimer />

      </Context.Provider>
    </>
  );
};

export const useColorContext = () => {
const context = useContext(Context);

if(!context) {
  throw new Error("useColorContext must be used within the ThemeProvider")
}

return context;
}
