"use client"
import { useContext, useState, createContext, useLayoutEffect } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children } : {
  children: React.ReactNode
}) {

const [isOpen, setIsOpen] = useState(true);

return (
<AppContext.Provider value={{
  isOpen,
  setIsOpen

}}>
  {children}
</AppContext.Provider>
)
}

export function useAppcontext() {
  return useContext(AppContext);
}

//export type ColorContextType = "bg-red-500" | "bg-sky-600" | "bg-emerald-600";

// const ColorContext = createContext({
//   color: "red-500",
//   setColor: (color: string) => {},
// });
// const defaultColor = "bg-red-500";

// const getInitialState = () => {

//   if (typeof window !== undefined) {
//      const color = localStorage.getItem('color');
//     return color ? JSON.parse(color) : defaultColor;
//   }
// };

// export function IndexWrapper({ children } : {
//   children: React.ReactNode;
// }) {

//   const [color, setColor] = useState(getInitialState);

//   useLayoutEffect(() => {
//     console.log(color, "Here in the useLayout!!")
//     localStorage.setItem('color', JSON.stringify(color));
//   }, [color]);


// return (
// <ColorContext.Provider value={{
//   color,
//   setColor
// }}>
//   { children }
// </ColorContext.Provider>
// )
// };



// export function useColorContext() {
//   return useContext(ColorContext)
// };
