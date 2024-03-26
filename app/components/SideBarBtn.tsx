"use client";
import { useSidebarcontext } from "../context/indexContext";

export default function SideBarBtn() {
const { isOpen, setIsOpen } = useSidebarcontext();



return(



           <button>
{!isOpen ? (

            <span className="hover-state rounded-full mr-2 absolute right-0 p-2" onClick={() => setIsOpen(!isOpen)}>O</span>
) : (
            <span className="hover-state mr-2 absolute right-0 rounded-full p-2" onClick={() => setIsOpen(!isOpen)}>C</span>


)}
          </button>

)

}
