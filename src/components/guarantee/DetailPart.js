"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/arrow-down";
import PlusIcon from "@/icon/PlusIcon";
import CloseIcon from "@/icon/close";
import CloseModal from "@/icon/CloseModal";

export default function DetailPart({ children,title }) {
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`w-[80%]   flex flex-col rounded-2xl   cursor-pointer leading-6  bg-[#F7F7F7] shadow-G1 ${
        open ? "h-auto   " : "h-[40px] "
      }`}
    >
      <div className="w-full flex flex-col p-3 gap-[10px]">
        <div
          onClick={handleOpenClick}
          className={`w-full flex flex-row justify-between  text-[#3B3B3B] text-sm pb-2   font-bold ${ open ? " border-b border-[#E6E6E6] ": " "}  `}
        >
          {title}
          <button
            className={`transition  duration-200 cursor-pointer ${
              open ? "transform rotate-180" : "transform rotate-0"
            }`}
            onClick={handleOpenClick}
          >
            <ArrowDownIcon />
          </button>
        </div>
      </div>

      <div
        className={`w-full flex flex-col  px-3 pb-3 ${
          open ? "opacity-100 overflow-auto " : " opacity-0 hidden"
        } `}
      >
        {children}
      </div>
    </div>
  );
}
