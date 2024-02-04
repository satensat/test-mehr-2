"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/arrow-down";

export default function OneDetailSingleProduct({subject ,amount}) {
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`w-full transition duration-200  flex flex-col rounded-2xl   cursor-pointer leading-6 ${
        open
          ? "h-auto bg-[#FDFDFD] border-[2px] border-[#FDFDFD]  "
          : "h-[40px] duration-200"
      }`}
    >
      <div className="w-full flex flex-col p-3">
        <div
          onClick={handleOpenClick}
          className={`w-full flex flex-row justify-between  text-[#3B3B3B] text-sm pb-2   font-bold ${
            open ? "border-b border-[#E6E6E6]" : ""
          }  `}
        >
          <div>{subject[0]}</div>
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
        className={`w-full flex flex-col   ${
          open ? "opacity-100" : " opacity-0 hidden"
        } `}
      >
        <div className="w-full flex flex-col  text-[#808080]  leading-6 text-justify text-sm">
         
          {subject[1].map((item) => <div key= { item.fa_name} className="w-full flex flex-col transition duration-300  hover:bg-lightGray px-3 py-1 rounded">
            <div className="text-[#808080] text-xs not-italic font-bold leading-6">
           { item.fa_name}
            </div>
            <div className="text-base not-italic font-normal leading-8 text-[#242424]">
             {amount[item.en_name]}
            </div>
          </div>)}
          
         
     
        </div>
      </div>
    </div>
  );
}
