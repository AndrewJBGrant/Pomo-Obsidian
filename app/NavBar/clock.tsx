// import { FaRegClock } from "react-icons/fa";

import NavIcons from "./NavIcons";

export default function Clock() {
  function getDate() {
    const today = new Date();
    const date = today.getDate();
    const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    const day = today.getDay();
    const currentDay = dayNames[day];

   return (
      <div className="grid justify-items-center">
        <span className="text-2xl font-extrabold">{date}</span>
        <span className="text-xl">{currentDay}</span>
      </div>
    );
  }

// function getFullDate() {
//   let new_Date: Date = new Date();
//   let result = new_Date.toLocaleString("en-GB");

// return (
//   <div className="text-xl m-4 font-bold">{result}</div>
// )
// }

  const currentDate = getDate();
  // const fullDate = getFullDate()

  return (
    <>
      <NavIcons icon={currentDate} text={"Full time will go here"} />
    </>
  );
}
