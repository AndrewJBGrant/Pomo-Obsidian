"use client"
import { useContext, useState, createContext, useLayoutEffect } from "react";
import { TimerDuration } from "../Timer/TestPomo";

const SideBarContext = createContext<any>(undefined);


interface CurrentTimerType {
  timeLeft: number
  setTimeLeft: any
}

const TimeContext = createContext<any>(undefined)

const TimeRunningContext = createContext<any>(undefined);

export function AppWrapper({ children } : {
  children: React.ReactNode
}) {
const [isOpen, setIsOpen] = useState(true);


 const defaultTime = TimerDuration.FOCUS_25_MIN;

 const getInitialState = () => {

   if (typeof window !== undefined) {
      const time = localStorage.getItem('time');
// console.log(time)
     return time ? JSON.parse(time) : defaultTime;
   }
 };


const [timeLeft, setTimeLeft] = useState<number>(getInitialState);

  useLayoutEffect(() => {
    // console.log(timeLeft, "Here in the useLayout!!")
    localStorage.setItem('time', JSON.stringify(timeLeft));
  }, [timeLeft]);

const defaultState = false

 const getdefaultState = () => {

   if (typeof window !== undefined) {
      const running = localStorage.getItem('timerRunning');
// console.log(time)
     return running ? JSON.parse(running) : defaultState;
   }
 };

const [timerRunning, setTimerRunning] = useState<boolean>(defaultState);

  useLayoutEffect(() => {
    // console.log(timeLeft, "Here in the useLayout!!")
    localStorage.setItem('running', JSON.stringify(timerRunning));
  }, [timerRunning]);




return (
<SideBarContext.Provider value={{
  isOpen,
  setIsOpen
}}>
<TimeContext.Provider value={{
  timeLeft,
  setTimeLeft
}}>
<TimeRunningContext.Provider value={{
  timerRunning,
  setTimerRunning
}}>
  {children}
</TimeRunningContext.Provider>
</TimeContext.Provider>
</SideBarContext.Provider>
)





}

export function useSidebarcontext() {
  return useContext(SideBarContext);
}

export function useTimeContext() {
  return useContext(TimeContext);
}

export function useRunningContext() {
  return useContext(TimeRunningContext);
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
