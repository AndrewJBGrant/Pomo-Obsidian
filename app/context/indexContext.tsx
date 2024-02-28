"use client"
import { useContext, useState, createContext, useLayoutEffect } from "react";

const ColorContext = createContext<any>(undefined);

export function IndexWrapper({ children } : {
  children: React.ReactNode;
}) {



  const defaultColor = "bg-red-500"


const getInitialState = () => {
  if (typeof window !== "undefined") {
    const color = localStorage.getItem("color");
    return color ? JSON.parse(color) : defaultColor;
  }
};
  const [color, setColor] = useState("getIntialState")

  useLayoutEffect(() => {
    console.log(color, "Here in the useLayout!!")
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);







return (
<ColorContext.Provider value={{
  color,
  setColor
}}>
  { children }
</ColorContext.Provider>
)
};

export function useColorContext() {
  return useContext(ColorContext)
};
