import { PropsWithChildren, createContext, useState } from "react";

type ContextType = [string, (color: string) => void];

export const ColorContext = createContext<ContextType | undefined>(undefined);

export const ColorProvider = ({ children }: PropsWithChildren<{}>) => {
  const color = useState("");

  

  return (
    <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
  );
};
