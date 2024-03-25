"use client";
import { useAppcontext } from "../context/indexContext";

export default function SideBarBtn() {
const { isOpen, setIsOpen } = useAppcontext();



return(

           <button>
{!isOpen ? (

            <span className="rounded-full mr-2 absolute right-0 bg-slate-300 p-2" onClick={() => setIsOpen(!isOpen)}>O</span>
) : (
            <span className="mr-2 absolute right-0 bg-slate-300 rounded-full p-2" onClick={() => setIsOpen(!isOpen)}>C</span>


)}
          </button>

)

}
