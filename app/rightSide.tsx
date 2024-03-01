"use client";
import { useState } from "react";

import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";




export default function RightSide() {
const [isOpen, setIsOpen] = useState(false);

//  console.log(typeof(isOpen),"What isOpen?")
//   console.log(typeof(setIsOpen),"What isSetIsOpen?")

  return (
    <>
{!isOpen ? (

  <div className="fixed top-1/2 z-40 transition ease-in-out duration-300">
          <button>
            <span className="absolute bg-teal-500 p-4" onClick={() => setIsOpen(!isOpen)}>Open</span>
          </button>
        </div>
      ) : (

      <div className={`relative basis-1/4 bg-emerald-500`}>



        <div className={`fixed`}>
          {/* <PomoDoroTimer timerActive={false} /> */}

          <div className="text-center">HERE A NEW TODO</div>
          <div className="overflow-y-auto h-96">
            {/* <AllTodos /> */}
          </div>
        </div>
       <div className="fixed top-1/2 transition hover:opacity-70">
          <button className="transition hover:scale-110">
            <span className="p-3 absolute bg-slate-300" onClick={() => setIsOpen(!isOpen)}>close</span>
          </button>
        </div>
      </div>


)}




    </>
  );
}
