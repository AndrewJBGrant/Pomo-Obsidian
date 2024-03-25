"use client";
import { useTimeContext, useRunningContext   } from "../context/indexContext";
import { useState, useEffect } from "react";

export enum TimerDuration {
  FOCUS_25_MIN = 25 * 60,
  FOCUS_50_MIN = 50 * 60,
  BREAK_5_MIN = 1 * 60,
  BREAK_10_MIN = 10 * 60,
}

const TestTimer: React.FC = () => {
  // const alarmSound = new Audio("../sounds/Timer_end.mp3");
  //console.log(typeof(alarmSound)) => Object!

  // state contolling the color
  const [color, setColor] = useState("bg-red-500");

  // state controlling time on the clock
//  const [timeLeft, setTimeLeft] = useState<number>(TimerDuration.FOCUS_25_MIN);
 const { timeLeft, setTimeLeft } = useTimeContext();


  // state variable on weather timer is running or not
  //const [timerRunning, setTimerRunning] = useState<boolean>(false);
const { timerRunning, setTimerRunning} = useRunningContext()


  // set what timer is in use
  const handleTimeOption = (time: number, color: string) => {
    setTimeLeft(time);
    setColor(color);
    setTimerRunning(false);
  };

  // effect for controlling sounds and setting next timer
  useEffect(() => {
    if (timeLeft === 0) {
      //   alarmSound.play();
    }
  }, [timeLeft]);

  // effect for timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime: number) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  // const startTimer = (duration: number) => {
  //   setTimeLeft(duration * 60);
  //   setTimerRunning(true);
  // };

  const pauseTimer = () => {
    setTimerRunning((prevTimerRunning: any) => !prevTimerRunning);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes.toString().padStart(2, "0")}:${formattedSeconds
      .toString()
      .padStart(2, "0")}`;
  };

// localStorage.setItem("Timer", JSON.stringify(timeLeft));

// const cartInitialValue = () => {
//   return JSON.parse(localStorage.getItem("Timer")) || TimerDuration.FOCUS_25_MIN;
// };


  return (
    <div className={`flex flex-col justify-center p-4 ${color}`}>
      <div className="flex justify-center text-8xl">{formatTime(timeLeft)}</div>

{/* <ToolTip  text={"Start or stop timer"}
     children={ <button className="text-3xl " onClick={pauseTimer}>
        {timerRunning ? "Pause" : "Start"}
      </button>} /> */}
<button className="text-2xl " onClick={pauseTimer}>
        {timerRunning ? "Pause" : "Start"}
      </button>

      <div
        className={` grid grid-cols-4 gap-2 mt-3 justify-items-start`}
      >
        <button

          onClick={() =>
            handleTimeOption(TimerDuration.FOCUS_25_MIN, "bg-red-500")
          }
        >
          Focus
        </button>

        <button

          onClick={() =>
            handleTimeOption(TimerDuration.FOCUS_50_MIN, "bg-red-700")
          }
        >
          Long Focus
        </button>

        <button

          onClick={() =>
            handleTimeOption(TimerDuration.BREAK_5_MIN, "bg-cyan-600")
          }
        >
          5
        </button>

        <button

          onClick={() =>
            handleTimeOption(TimerDuration.BREAK_10_MIN, "bg-sky-700")
          }
        >
          15
        </button>
      </div>
    </div>
  );
};

export default TestTimer;
