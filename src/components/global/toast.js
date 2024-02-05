"use client";
import React, { useState, useEffect } from "react";
import WarningIcon from "@/icon/warning";
import TickSquareIcon from "@/icon/tick-square";
export default function ToastBox({ children, type, statusval ,setToast}) {
  const [status, setStatus] = useState(statusval);
  console.log(statusval);
  useEffect(() => {
    setStatus(statusval);

  }, [statusval,setToast]);

  useEffect(() => {
    setTimeout(()=>{
      setToast(false);
      setStatus(false);
    }, 6000);
  }, [status,setToast]);

  return (
    <>
      <div
        className={
          (type == "success" ? " border-mainGreen1 " : "") +
          (type == "danger" ? " border-rose-600 " : "") +
          "ease-in-out duration-300     inset-x-0 -translate-y-full  transition-all opacity-0 flex justify-between border-4  shadow-G3 fixed bg-white z-[999] top-12 w-[95%] md:max-w-[500px] m-auto p-4 rounded-2xl" +
          " " +
          `${status ? "translate-y-[20px]  opacity-100 " : "   "}`
        }
      >
        <div className="flex items-start ml-3">
          <span className="ml-3">
            {type == "danger" ? <WarningIcon /> : <TickSquareIcon />}
          </span>
          {children}
        </div>
        <span
          className={
            (type == "success" ? " text-mainGreen1 " : "") +
            (type == "danger" ? " text-rose-600 " : "") +
            "  cursor-pointer font-bold whitespace-nowrap"
          }
          onClick={() => setStatus(false)}
        >
          متوجه شدم
        </span>
      </div>
    </>
  );
}
