
"use client";
import React, { useState ,useEffect } from "react";
import WarningIcon from "@/icon/warning";
import TickSquareIcon from "@/icon/tick-square";
export default function ToastBox({children ,type ,statusval}) {
 
    const [status, setStatus] = useState(statusval);
    console.log(statusval)
    useEffect(()=>{
      setStatus(statusval)
    },[statusval])
  
useEffect(()=>{
  
   setTimeout(HideTost, 6000);

   
},[status])
function HideTost() {
  // setStatus(false)
}
  return (
    
    <>
        {children}
    {
        status ? <div className={(type == "success"  ? " border-mainGreen1 ": "")  + (type == "danger"  ? " border-rose-600 ": "")  + "flex justify-between border-4  shadow-G3 fixed bg-white z-[999] top-12 w-full max-w-[500px] m-auto left-[50%] translate-x-[-50%] p-4 rounded-2xl"}>
    
        <div className="flex items-start ml-3">
       <span className="ml-3">
       {type == "danger"  ?    <WarningIcon/>  :  <TickSquareIcon/> }
    
       </span>
        {children}
        </div>
        <span className={(type == "success"  ? " text-mainGreen1 ": "")  + (type == "danger"  ? " text-rose-600 ": "")  +"  cursor-pointer font-bold whitespace-nowrap"} onClick={() =>setStatus(false)}>
          متوجه شدم
        </span>
      </div>
      :""
    }
    </>
  );
}
