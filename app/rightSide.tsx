"use client";
import { useState } from "react";
import TimerTest from "./Timer/TestPomo";
import Todo from "./todos/Todo";
import { useSidebarcontext } from "./context/indexContext";
import SideBarBtn from "./components/buttons/SideBarBtn";

export default function RightSide() {
  const { isOpen } = useSidebarcontext();

  //  console.log(typeof(isOpen),"What isOpen?")
  //console.log(typeof(setIsOpen),"What isSetIsOpen?")

  return (
    <>
      <section
        className={`flex-shrink-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
      >
        {!isOpen ? (
          <></>
        ) : (
          <div className={`relative border-l-2 h-full`}>
            <TimerTest />

            <div className="overflow-y-auto h-96">{/* <Todo /> */}</div>
          </div>
        )}
      </section>
    </>
  );
}
