"use client";
import React, { useState } from "react";
import styles from "./option.module.css";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ArrowDownIcon from "@/icon/ArrowDown";
import ReceiveRepresentative from "./ReceiveRepresentative";
import ReceiveRepresentativePoints from "./ReceiveRepresentativePoints";
import ReceiveRepresentativeBenefits from "./ReceiveRepresentativeBenefits";

export default function Option({ children ,csspart}) {
  const [open, setOpen] = useState(false);
  //   console.log(children);
  const cssName=csspart==="first" ? styles.container : styles.containerSecond;
  const handleExpand = () => {
    setOpen(true);
  };
  const handleColapse = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={
        "shadow-G1 bg-[#f7f7f7] rounded-3xl flex flex-col md:flex-row self-stretch font-costumFaNum relative overflow-hidden " +
        `${open ? " h-auto " : "h-[427px] md:h-[188px]  "}`
      }
    >
      <div
        className={
          "bg-mainGreen1 w-full rounded-t-3xl md:rounded-3xl md:w-1/2  p-3 " +
          " " 
          +cssName
           
        }
      >
        <div className="w-full rounded-3xl">
          {children[0]}
          <div className="hidden md:block">{open && children[1]}</div>
        </div>
      </div>
      <div className="py-3 w-full md:w-1/2 flex flex-col">
        {children[2]}
        <div className=" md:hidden p-3 ">{open && children[1]}</div>
        <div
          className={
            `flex flex-col bg-[#f7f7f7] rounded-3xl mt-auto  before:bg-[#E6E6E6] md:before:bg-[#1B887F] 
            before:content-['']  before:h-[1px] before:w-full md:before:h-0 px-3 md:px-0 ` +
            `${open ? "   " : " absolute bottom-0 left-0 w-full md:w-1/2   "}`
          }
        >
          <div
            className={
              "relative flex flex-row justify-center items-center bg-[#f7f7f7] rounded-3xl" +
              `${
                open
                  ? "  "
                  : "   before:content-[''] before:absolute before:w-full before:h-[120px] md:before:h-[80px] before:bottom-0 before:right-0  before:-translate-y-[50px] " +
                    styles.more_details
              }`
            }
          >
            <button
              onClick={handleToggle}
              className={
                " " +
                "group    flex flex-row justify-evenly items-center rounded-xl   text-mainGreen1 transition ease-in-out duration-500 px-3 py-1  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white  text-sm  md:text-base not-italic font-bold leading-6"
              }
            >
              <span className={`${open ? " block " : " hidden "}`}>
                مشاهده کمتر
              </span>
              <span className={`${open ? " hidden " : " block "}`}>
                مشاهده بیشتر
              </span>
              <div
                className={
                  " " +
                  " transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert mr-1 " +
                  `${open ? "transform rotate-180" : "transform rotate-0"}`
                }
              >
                <ArrowDownIcon color={"#13625c"} />
              </div>
            </button>
            <div className="p-3">
              <button className=" group transition ease-in-out duration-500 flex flex-row items-center  cursor-pointer  px-3 py-1 rounded-xl hover:bg-[#f5a800]    hover:filter hover:invert-1 bg-[#13625c] hover:text-[#000] text-white">
                <div className="text-center text-sm not-italic font-bold leading-6 ">
                  شروع ثبت نام
                </div>
                <div className="transition ease-in-out duration-500  group-hover:scale-110  group-hover:brightness-0 group-hover:invert-0 mr-auto pr-0 md:pr-1 ">
                  <ArrowOpinion color={"#fff"} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
