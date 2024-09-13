import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function UseState_D4() {
  const [val, setVal] = useState(false);
  const [bg, setBg] = useState(false);
  return (
    <div className={`w-full h-screen flex justify-center items-center bg-zinc-200 ${bg === false ? "bg-sky-600" : "bg-zinc-600"}`}>

      {/* card animation */}

      <div className="w-80 h-60 bg-zinc-500 rounded overflow-hidden relative flex">
            <img className={`transition-all ease-out duration-500 shrink-0 w-full h-full object-cover ${val === false ? "-translate-x-[100%]" : "-translate-x-[0%]" }`} src="https://images.unsplash.com/photo-1724505599369-2c1d43324fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`transition-all ease-out duration-500 shrink-0 w-full h-full object-cover ${val === false ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1533647392789-144572155127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span onClick={()=>setVal(()=>!val)} className={`transition-all ease-out duration-500 w-8 h-8 bg-zinc-200 absolute rounded-full flex items-center justify-center bottom-4 ${val === false ? "-rotate-180" : "-rotate-0"} left-1/2 -translate-x-1/2`}>
          <FaArrowRight />
          </span>
        </div>

      {/* bg animation */}

      <span onClick={() => setBg(() => !bg)} className={` ${bg === true ? "bg-sky-600" : "bg-zinc-600"} ml-10 transition-all ease-out duration-800 w-20 h-20 bg-red-600 absolute rounded-full flex items-center justify-center bottom-10 p-2 text-center Class  uppercase text-xs eading-4 cursor-pointer text-white  ml-20  -translate-x-1/2`}>
        change color
      </span>






    </div>
  )
}

export default UseState_D4