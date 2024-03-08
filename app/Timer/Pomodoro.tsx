"use client";

import { useState, useEffect } from "react";


export default function PomoDoroTimer(props: { timerActive: boolean}) {

const [running, setIsRunning] = useState(false);

// Start or Pause Button
const handleTimerActive = () => {
  setIsRunning((prev) => !prev)
};
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };



let interval: null | ReturnType<typeof setTimeout> = null;
if (props.timerActive) {
  interval = setInterval(() => {
    setTime((countdown) => countdown -1);
  }, 1000)
}

useEffect(() => {
let timer: null | ReturnType<typeof setTimeout> = null;

    if (running) {
       timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

if (!running || time === 0){
  clearInterval(time);
}
return () => clearInterval(time);
}, [running, time]);


  return (
    <>
     <div className={`flex flex-col justify-center p-6 m-5 bg-teal-400`}>
        {time === 300 ? (
          <span className="flex justify-center text-8xl">
            0{Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        ) : (
          <span className="flex justify-center text-8xl">
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        )}


        <button
          className={`px-8 text-3xl flex justify-center bg-teal-400`}
          onClick={handleTimerActive}>
         {running ? "Pause" : "Start"}
        </button>
      </div>



      <div className={`text-2xl flex divide-x divide-solid bg-teal-400`}>
        <button
          onClick={() => {
            {
              handleTimeOption(1500);
            }
          }}
        >
          Focus
        </button>

      </div>
    </>
  );
}




// const { color, setColor } = useColorContext()
//import { useColorContext } from "../context/indexContext";
// export type ColorContextType = "bg-red-500" | "bg-sky-600" | "bg-emerald-600";

// export interface Color {
//   color: string
// };

        {/* <button className={`focus-within: bg-opacity-50`}
          onClick={() => {
            handleTimeOption(10);

          }}
        >
          Short Break
        </button>

        <button
          onClick={() => {
            handleTimeOption(900);

          }}
        >
          {" "}
          Long Break
        </button> */}
