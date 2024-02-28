import { createContext, useContext } from "react";
import { ColorContextType } from "../Timer/Pomodoro";

export const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function useColorContext() {
const color = useContext(ColorContext);

// if (color === undefined) {
// throw new Error(`${color}? Is not defined check methods`)

// }
return color;
}
