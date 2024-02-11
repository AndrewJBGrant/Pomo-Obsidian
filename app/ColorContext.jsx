"use client";

import { createContext, useContext, useState } from "react";

export const themeColors = {
focus: {
 bg: "bg-red-500"},

 short: {
 bg: "bg-sky-600",
 },

long: {
 bg: "bg-emerald-600"
  },
}

const intialColor = {
  color:themeColors.focus,
  setColor: () => {}
};
  const ClrContext = createContext(intialColor);


export const ThemeProvider = ({children}) => {

const [color, setColor] = useState(themeColors.focus);

  return (
    <>
      <ClrContext.Provider value={{color, setColor}}>
        {children}
      </ClrContext.Provider>
    </>
  );
}

const useTheme = () => {
  const context = useContext(ClrContext)
if(context === undefined){
  throw new Error("UseTheme must be used with a Provider!")
}
return context
};

export default useTheme;
