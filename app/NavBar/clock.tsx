import { FaRegClock } from "react-icons/fa";


export default function Clock() {


function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const day = today.getDay();
  const currentDay = dayNames[day];
  return (
    <div className="grid justify-items-center">
      <span className="text-2xl font-extrabold">{date}</span>
      {currentDay}
    </div>
  );
}

const currentDate = getDate();


return (
  <span className="border-solid border-2 border-slate-500 dark:hover:bg-slate-500 dark:border-gray-200 rounded-md">
    {currentDate}
  {/* <FaRegClock /> */}
  </span>
);
};
