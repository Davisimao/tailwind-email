import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";


export default function PageMode() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  function Mode() {
    setIsDarkMode(!isDarkMode)
    window.document.documentElement.classList.toggle("dark")
    console.log(!isDarkMode)
  }



  return (
    <button className="absolute  bottom-5 cursor-pointer " onClick={Mode}>

      {isDarkMode ? <CiLight className="w-10 h-full" /> : <CiDark className="w-10 h-full" />}

    </button>
  )
}
