"use client";
import React, { useState } from "react";
import styles from "./SingleProductPageHeader.module.css";

export default function SingleProductPageHeader({en_name ,fa_name}) {

  const [activeTab, setActiveTab] = useState("introduction");
  const activeTabHandler = (value) => {
    setActiveTab(value);
  };
  return (
    <>

      <div className="w-full   flex-col md:hidden contents ">
      
        <div className="w-full sticky top-0 z-20 bg-[#13625C] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)]  px-3 rounded-t-2xl ">
          <ul className="flex justify-between mb-25 px-1 text-[#E0E7EB] ">
            {/* <div className="absolute top-0 right-0 w-1/4 h-4 bg-[#f5a800]"></div> */}
            <li
              //   className={activeTab == "part_tehran" ? style.active : ""}
              tab_sub="introduction"
              value={"introduction"}
              onClick={() => activeTabHandler("introduction")}
              className={`text-gray list-none text-base md:text-lg p-18/8  text-center relative  cursor-pointer transition-400 ${
                activeTab == "introduction"
                  ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                  : ""
              }`}
            >
              <a className="py-3 inline-flex" href="#introduction">
              معرفی
              </a>
            </li>
            <li
              tab_sub="details"
              onClick={() => activeTabHandler("details")}
              value={"details"}
              className={`text-gray list-none text-base md:text-lg   text-center relative  cursor-pointer transition-400  ${
                activeTab == "details"
                  ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                  : ""
              }`}
            >
             <a href="#details" className="py-3 inline-flex">جزئیات</a>
             
            </li>
            <li
              tab_sub="review"
              onClick={() => activeTabHandler("review")}
              value={"review"}
              className={`text-gray list-none text-base md:text-lg p-18/8  text-center  relative cursor-pointer transition-400  ${
                activeTab == "review"
                  ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                  : ""
              }`}
            >
             
                
                <a className="py-3 inline-flex" href="#expertcheck">
                بررسی </a> 
             
            </li>
            <li
              tab_sub="comments"
              //   onClick={activeTabHandler}
              onClick={() => activeTabHandler("comments")}
              value={"comments"}
              className={`text-gray list-none text-base md:text-lg p-18/8  text-center relative cursor-pointer transition-400  ${
                activeTab == "comments"
                  ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                  : ""
              }`}
            >
             
              <a className="py-3 inline-flex" href="#comments">
              نظرات
              </a>
              
              
            </li>
          </ul>
        </div>
        <div className="w-full  px-3 py-3 rounded-b-2xl bg-lightGray leading-6 text-sm mt-[-24px]">
          <div className="font-bold text-[#3B3B3B] cursor-pointer font-costumFaNum">
          {fa_name}
          </div>
          <div className=" text-[#525252] cursor-pointer">
         {en_name}
          </div>
        </div>
      </div>
      <div className="hidden sticky top-0 z-10 w-full  flex-col md:flex ">
        {/* <div className="  w-full  rounded-2xl bg-[#13625C] px-3 bg-single-product-header bg-center bg-no-repeat"> */}
        <div className={`  w-full  rounded-2xl bg-[#13625C] px-3 ${styles.headerBackground}  `}>
          <div className={`  w-full  rounded-2xl bg-[#13625C] px-3 ${styles.headerBackground}  `}></div>
          <div className="w-full flex flex-row ">
            <div className="w-full flex flex-col p-3 leading-6 ">
              <div className="font-bold text-lightGray pb-3 text-right text-sm not-italic  leading-6 cursor-pointer font-costumFaNum ">
              {fa_name}
              </div>
              <div className=" text-[#CCC] font-normal text-sm text-right not-italic leading-6 cursor-pointer">
              {en_name}
              </div>
            </div>
            <div className="w-3/5 lg:w-3/5 ">
              <ul className="flex justify-between mb-25  md:text-[#E0E7EB] ">
                {/* <div className="absolute top-0 right-0 w-1/4 h-4 bg-[#f5a800]"></div> */}
                <li
                  //   className={activeTab == "part_tehran" ? style.active : ""}
                  tab_sub="introduction"
                  value={"introduction"}
                  onClick={() => activeTabHandler("introduction")}
                  className={`hover:text-[#f5a800]  duration-300 transition text-gray list-none md:text-base lg:text-lg p-18/8 min-w-14  text-center relative  cursor-pointer transition-400   ${
                    activeTab == "introduction"
                      ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                      : ""
                  }`}
                >
                  <div className="py-5">
                    <a className="py-5" href="#introduction">معرفی</a>
                  </div>
                  {/* <div className="bg-color4 h-4 w-full block absolute top-0 border-radius-[0,0,4,4] right-0"></div> */}
                </li>
                <li
                  tab_sub="details"
                  //   onClick={activeTabHandler}
                  onClick={() => activeTabHandler("details")}
                  value={"details"}
                  className={`hover:text-[#f5a800] duration-300 transition  text-gray list-none md:text-base lg:text-lg  min-w-14  text-center relative  cursor-pointer transition-400 ${
                    activeTab == "details"
                      ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                      : ""
                  }`}
                >
                  <div className="py-5">
                    <a className="py-5" href="#details">جزئیات</a>
                  </div>
                  {/* <div className="bg-color4 h-4 w-full block absolute top-0 border-radius-[0,0,4,4] right-0"></div> */}
                </li>
                <li
                  tab_sub="expertcheck"
                  //   onClick={activeTabHandler}
                  onClick={() => activeTabHandler("review")}
                  value={"review"}
                  className={`hover:text-[#f5a800] duration-300 transition  text-gray list-none md:text-base lg:text-lg p-18/8 min-w-14  text-center  relative cursor-pointer transition-400${
                    activeTab == "review"
                      ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                      : ""
                  }`}
                >
                  <div className="py-5">
                    <a className="py-5" href="#expertcheck">بررسی</a>
                  </div>
                  {/* <div className="bg-color4 h-4 w-full block absolute top-0 border-radius-[0,0,4,4] right-0"></div> */}
                </li>
                <li
                  tab_sub="comments"
                  //   onClick={activeTabHandler}
                  onClick={() => activeTabHandler("comments")}
                  value={"comments"}
                  className={`hover:text-[#f5a800] duration-300 transition text-gray list-none md:text-base lg:text-lg p-18/8 min-w-14  text-center relative cursor-pointer transition-400 ${
                    activeTab == "comments"
                      ? " text-[#f5a800]  font-bold  before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800]"
                      : ""
                  }`}
                >
                  <div className="py-5">
                    <a className="py-5" href="#comments"> نظرات </a>
                  </div>
                  {/* <div className="bg-color4 h-4 w-full block absolute top-0 border-radius-[0,0,4,4] right-0"></div> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
