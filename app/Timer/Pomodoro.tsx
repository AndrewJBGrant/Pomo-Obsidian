"use client";

import { useState, useEffect } from "react";


const PomoDoroTimer: React.FC = () => {
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);

const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500'];
const [color, setColor] = useState(colors[0]);


  const handleTimeOption = (time: number) => {
    setTime(time);
    setTimeLeft(time);
  };

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [running]);


  return (
    <>
      <div className={`flex flex-col justify-center p-6 rounded ${color}`}>
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
          className={`px-8 text-3xl flex justify-center transition-colors duration-150 bg focus:shadow-outline ${color}`}
          onClick={() => {
            setIsRunning(!running);

          }}
        >
          {running ? "Pause" : "Start"}
        </button>
      </div>
      <div className="text-xl grid grid-cols-3 divide-x">
        <button
          className="bg-lime-700"
          onClick={() => {
            {
              handleTimeOption(1500);
            }
          }}
        >
          Focus
        </button>
        <button
          className="bg-lime-700"
          onClick={() => {
            handleTimeOption(300);
          
          }}
        >
          Short Break
        </button>

        <button
          className="bg-lime-700"
          onClick={() => {
            handleTimeOption(900);
            setColor(colors[1])
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
