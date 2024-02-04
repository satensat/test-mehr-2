"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/arrow-down";
import styles from "./oneDetail.module.css";

// export default function OneDetail() {
//   return (
//     <div className='px-3 pt-3'>OneDetail</div>
//   )
// }


export default function OneDetail({subject ,data,seri}) {
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <div className="px-3 pt-3 last:pb-1 ">
      {/* w-fit */}
      <div
        className={`w-full transition ease-in-out duration-300  flex flex-col rounded-2xl bg-[#FDFDFD]  cursor-pointer leading-6 ${
          open
            ? "h-auto  border-[2px] border-[#FDFDFD]  "
            : "h-[40px] duration-300  border-[2px] border-[#f7f7f7]"
        }`}
      >
        <div className="w-full flex flex-col px-3 pt-3 pb-2">
          <div
            onClick={handleOpenClick}
            className={`w-full flex flex-row justify-between  text-[#3B3B3B] text-xs    font-bold ${
              open ? "border-b border-[#E6E6E6]" : ""
            }  `}
          >
            <div>{subject}</div>
            <button
              className={`transition ease-in-out duration-500 cursor-pointer ${
                open ? "transform rotate-180" : "transform rotate-0"
              }`}
              onClick={handleOpenClick}
            >
              <ArrowDownIcon />
            </button>
          </div>
        </div>
        <div
          className={`w-full flex flex-col  overflow-x-auto  ${
            open ? "opacity-100" : " opacity-0 hidden"
          } `}
        >
          <ul
            className={
              "  w-full flex flex-col  text-[#808080]  leading-6 text-justify text-sm min-w-max  " +
              styles.list_of_detail
            }
          >
            {seri.map((seriItem,index)=>
            
              <li className=" flex flex-col transition ease-in-out duration-300  hover:bg-lightGray min-w-max px-3 py-1 last:rounded-b-2xl " key={index}>
              <div className="text-[#808080] text-xs not-italic font-bold leading-6 ">
             { seriItem.fa_name}
              </div>
              <div className="text-base not-italic font-normal leading-8 text-[#242424] flex flex-row ">
              {/* <div className="w-1/6 min-w-[164px] md:w-1/6 md:min-w-[308px]">{ item.fields_info.feature_based[subject][seriItem.en_name]}</div> */}
                {
              data?.map((item,index)=>
              
                <div key={index} className="w-1/6 min-w-[164px] md:w-1/6 md:min-w-[308px]">{ item[seriItem.en_name]}</div>
                
              
              )
                
                }
             
              </div>
            </li>
            )}
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}

//   [&>*:nth-child(odd)]:bg-[#FDFDFD] [&>*:nth-child(even)]:bg-[#E6E6E6]
