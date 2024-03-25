"use client";
import { useState } from "react";
import TimerTest from "./Timer/TestPomo";
import Todo from "./todos/Todo";
import { useAppcontext } from "./context/indexContext";
import SideBarBtn from "./components/SideBarBtn";




export default function RightSide() {

const { isOpen } = useAppcontext();

//  console.log(typeof(isOpen),"What isOpen?")
  //console.log(typeof(setIsOpen),"What isSetIsOpen?")

  return (
    <section className="flex-shrink-0">
{!isOpen ? (

<></>

      ) : (

      <div className={`relative basis-1/4`}>
        <h1>SideBar is Open!</h1>
        <div className={`fixed border-l-2 h-full`}>
            <TimerTest />
          <div className="overflow-y-auto h-96">
            {/* <Todo /> */}
          </div>
        </div>
        </div>
)}
    </section>
  );
}
