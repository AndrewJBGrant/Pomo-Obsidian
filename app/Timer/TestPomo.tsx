"use client";
import { useEffect, useState } from "react";

export default function TimerTest() {
  const [running, setIsRunning] = useState<boolean>(false);
  const handleTimerActive = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div>
      <Timer timerActive={running} />
      <button onClick={handleTimerActive}>{running ? "Stop" : "Run"}</button>
    </div>
  );
}
function Timer(props: { timerActive: boolean }) {
  const [time, setTime] = useState(10);

    const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    let interval: null | ReturnType<typeof setTimeout> = null;
    if (props.timerActive) {
      interval = setInterval(() => {
        setTime((countdown) => countdown - 1);
      }, 1000);
    }
    if (!props.timerActive || time === 0) {
      alert("Timer finished");
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.timerActive, time]);

  const handleReset = () => {
    setTime(15);
  };



  return (
    <div>
      <h1 className="bg-yellow-500">{time}</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
