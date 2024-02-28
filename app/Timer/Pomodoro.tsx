"use client";

import { useState, useEffect } from "react";

//import { Context } from "../context/contextObject";
//import { useColorContext } from "../context/contextObject";
//  const contextValue = useContext(Context);


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
const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"]
  const [color, setColor] = useState(colors[0])




// let interval: null | ReturnType<typeof setTimeout> = null;
// if (props.timerActive) {
//   interval = setInterval(() => {
//     setTime((countdown) => countdown -1);
//   }, 1000)
// }

useEffect(() => {
let timer: null | ReturnType<typeof setTimeout> = null;

    if (running) {
       timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

if (!running || time === 0){
  clearInterval(timer);
}
return () => clearInterval(timer);
}, [running, time]);




  return (
    <>
     <div className={`flex flex-col justify-center p-6 ${color}`}>
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
          className={`px-8 text-3xl flex justify-center ${color}`}
          onClick={handleTimerActive}>
         {running ? "Pause" : "Start"}
        </button>
      </div>









      <div className={`text-2xl grid grid-cols-3 divide-x divide-solid ${color}`}>
        {/* <button className=""
          onClick={() => {
            {
              handleTimeOption(1500);
              setColor(colors[0]);
            }
          }}
        >
          Focus
        </button> */}


        <button className={`focus-within: bg-opacity-50`}
          onClick={() => {
            handleTimeOption(10);
            setColor(colors[1]);
          }}
        >
          Short Break
        </button>

        {/* <button
          onClick={() => {
            handleTimeOption(900);
            setColor(colors[2]);
          }}
        >
          {" "}
          Long Break
        </button> */}
      </div>
    </>
  );

}

  // useEffect(() => {
  //   if (running) {
  //     const timer = setInterval(() => {
  //       setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
  //     }, 1000);


  //   if (timeLeft === 0) {
  //     clearInterval(time);
  //   }


  //     return () => clearInterval(timer);
  //   }
  // }, [running, time]);
