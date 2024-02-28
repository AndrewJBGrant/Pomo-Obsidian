"use client";

import NavBar from "../NavBar/Navbar";
import { ColorContext } from "../context/colorContext";
import { useState, useLayoutEffect, useEffect } from "react";

export type ColorContextType = "bg-red-500" | "bg-sky-600" | "bg-emerald-600";

export interface Color {
  color: string
};

const defaultColor = "bg-red-500"

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const color = localStorage.getItem("color");
    return color ? JSON.parse(color) : defaultColor;
  }
};


export const TimerColorContext = ({ children}: { children: React.ReactNode}) => {
// Getting and setting the colors
 const [color, setColor] = useState(getInitialState);
  useLayoutEffect(() => {
    console.log(color, "Here in the useLayout!!")
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);

return (
<>
<ColorContext.Provider value={color}>
{children}
</ColorContext.Provider>
</>
);

}



export default function PomoDoroTimer(props: { timerActive: boolean}) {

const [running, setIsRunning] = useState(false);
const handleTimerActive = () => {
  setIsRunning((prev) => !prev)
};
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };
return (
<>
  <div className={`flex flex-col font-extrabold`}>
         {/* <button
           onClick={() => {
             setColor("bg-red-500");}}>
           Happy 😆
         </button>

         <button
           onClick={() => {
             setColor("bg-sky-600");
           }}
         >
           Angry 😡
         </button> */}
       </div>
</>
)
}



// let interval: null | ReturnType<typeof setTimeout> = null;
// if (props.timerActive) {
//   interval = setInterval(() => {
//     setTime((countdown) => countdown -1);
//   }, 1000)
// }

// useEffect(() => {
// let timer: null | ReturnType<typeof setTimeout> = null;

//     if (running) {
//        timer = setInterval(() => {
//         setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
//       }, 1000);
//     }

// if (!running || time === 0){
//   clearInterval(timer);
// }
// return () => clearInterval(timer);
// }, [running, time]);













  // return (
  //   <>
  //    <div className={`flex flex-col justify-center p-6 ${color}`}>
  //       {time === 300 ? (
  //         <span className="flex justify-center text-8xl">
  //           0{Math.floor(timeLeft / 60)}:
  //           {(timeLeft % 60).toString().padStart(2, "0")}
  //         </span>
  //       ) : (
  //         <span className="flex justify-center text-8xl">
  //           {Math.floor(timeLeft / 60)}:
  //           {(timeLeft % 60).toString().padStart(2, "0")}
  //         </span>
  //       )}

  //       <button
  //         className={`px-8 text-3xl flex justify-center ${color}`}
  //         onClick={handleTimerActive}>
  //        {running ? "Pause" : "Start"}
  //       </button>
  //     </div>
  //     <div className={`text-2xl grid grid-cols-3 divide-x divide-solid ${color}`}>
  //       {/* <button className=""
  //         onClick={() => {
  //           {
  //             handleTimeOption(1500);
  //             setColor(colors[0]);
  //           }
  //         }}
  //       >
  //         Focus
  //       </button> */}

  //       <button className={`focus-within: bg-opacity-50`}
  //         onClick={() => {
  //           handleTimeOption(10);
  //           setColor(colors[1]);
  //         }}
  //       >
  //         Short Break
  //       </button>

  //       {/* <button
  //         onClick={() => {
  //           handleTimeOption(900);
  //           setColor(colors[2]);
  //         }}
  //       >
  //         {" "}
  //         Long Break
  //       </button> */}
  //     </div>
  //   </>
  // );
