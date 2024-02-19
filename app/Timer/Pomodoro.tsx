"use client";

import { useState, useEffect, useRef, useContext } from "react";

//import { Context } from "../context/contextObject";

import { useColorContext } from "../context/contextObject";


function PomoDoroTimer() {

//  const contextValue = useContext(Context);


  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

 // const colors = ["bg-red-500", "bg-sky-600", "bg-emerald-600"]

//  const [color, setColor] = useState(contextValue)
const { color, setColor } = useColorContext()


  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(time);
      alert('Timer reached zero!');
    }
  }, [timeLeft, time]);




  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
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
          onClick={() => {
            setIsRunning(!running);
            // playAudio;
          }}
        >
          <audio ref={audioRef} src="../sounds/Timer_end.mp3" />
          {running ? "Pause" : "Start"}
        </button>
      </div>
      <div className={`text-2xl grid grid-cols-3 divide-x divide-solid ${color}`}>
        <button className=""
          onClick={() => {
            {
              handleTimeOption(1500);
              setColor(color);
            }
          }}
        >
          Focus
        </button>
        <button className={`focus-within: bg-opacity-50`}
          onClick={() => {
            handleTimeOption(100);
            setColor("");
          }}
        >
          Short Break
        </button>

        <button
          onClick={() => {
            handleTimeOption(900);
            setColor("");
          }}
        >
          {" "}
          Long Break
        </button>
      </div>
    </>
  );
};

export default PomoDoroTimer;
