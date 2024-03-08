"use client";

import { useState, useEffect } from "react";

enum TimerDuration {
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
  const [timeLeft, setTimeLeft] = useState<number>(
    TimerDuration.FOCUS_25_MIN
  );
  // state variable on weather timer is running or not
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

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
   }, [timeLeft])








// effect for timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
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
    setTimerRunning((prevTimerRunning) => !prevTimerRunning);
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

  return (
    <div className={`flex flex-col justify-center p-4 m-5 ${color}`}>
      <div className="flex justify-center text-8xl">{formatTime(timeLeft)}</div>

      <button  className="text-2xl" onClick={pauseTimer}>{timerRunning ? "Pause" : "Start"}</button>

      <div className={`text-2xl grid grid-cols-2 gap-2 mt-3 justify-items-start`}>
        <button className="timer-btns justify-self-stretch"
          onClick={() =>
            handleTimeOption(TimerDuration.FOCUS_25_MIN, "bg-red-500")
          }
        >
          Focus
        </button>


        <button className="timer-btns justify-self-stretch"
          onClick={() =>
            handleTimeOption(TimerDuration.FOCUS_50_MIN, "bg-blue-300")
          }
        >
          Long Focus
        </button>

        <button className="timer-btns justify-self-stretch"
          onClick={() =>
            handleTimeOption(TimerDuration.BREAK_5_MIN, "bg-green-300")
          }
        >
          Break
        </button>


        <button className="timer-btns justify-self-stretch"
          onClick={() =>
            handleTimeOption(TimerDuration.BREAK_10_MIN, "bg-teal-900")
          }
        >
          Long Break
        </button>


      </div>
    </div>
  );
};

export default TestTimer;
