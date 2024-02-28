"use client"
import { useContext, useState, createContext } from "react";

const IndexContext = createContext<any>(undefined);

export function IndexWrapper({ children } : {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("Piggley")

return (
<IndexContext.Provider value={{
  value,
  setValue
}}>
  { children }
</IndexContext.Provider>
)
};

export function useIndexContext() {
  return useContext(IndexContext)
};
