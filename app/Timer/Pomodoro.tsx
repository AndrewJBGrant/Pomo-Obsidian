"use client";

import { useState, useEffect, useRef } from "react";

const PomoDoroTimer: React.FC = () => {
  const [time, setTime] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(time);
  const [running, setIsRunning] = useState(false);

  const colors = ["bg-red-500", "bg-green-500", "bg-yellow-500"];
  const [color, setColor] = useState(colors[0]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current != null) {
      //  TypeScript knows that ref is not null here
      audioRef.current.play();
    }
  };

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
          className={`px-8 text-3xl flex justify-center focus:shadow-outline ${color}`}
          onClick={() => {
            setIsRunning(!running);
            playAudio;
          }}
        >
          <audio ref={audioRef} src="../sounds/Timer_end.mp3" />
          {running ? "Pause" : "Start"}
        </button>
      </div>
      <div className={`text-xl grid grid-cols-3 divide-x ${color}`}>
        <button
          onClick={() => {
            {
              handleTimeOption(1500);
              setColor(colors[0]);
            }
          }}
        >
          Focus
        </button>
        <button
          onClick={() => {
            handleTimeOption(300);
            setColor(colors[1]);
          }}
        >
          Short Break
        </button>

        <button
          onClick={() => {
            handleTimeOption(900);
            setColor(colors[2]);
          }}
        >
          {" "}
          Long Break
        </button>
      </div>

      <audio src=""></audio>
    </>
  );
};

export default PomoDoroTimer;
