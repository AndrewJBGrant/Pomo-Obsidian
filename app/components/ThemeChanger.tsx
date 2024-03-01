"use client";

import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useColorContext } from "../context/indexContext";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client!!, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

   const { color } = useColorContext();

  return (
<div>
<button
   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
   className={`rounded-md p-4 border bg-${color}`}>

 {theme === "light" ? (
    <span className="text-3xl"> <FaRegMoon /> </span> ) : (
    <span className="text-3xl"> <GoSun /> </span> )
 }
 </button>
</div>
  )
}

export default ThemeSwitch;
