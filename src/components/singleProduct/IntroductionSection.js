"use client";
import React from "react";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ArrowRank from "@/icon/ArrowRank";
import CompareIcon from "@/icon/CompareIcon";
import ScoreIcon from "@/icon/Score";
import UserOpinion from "@/icon/UserOpinion";
import styles from "./introduction.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/GlobalRedux/Features/counter/counterSlice";
export default function IntroductionSection({introduction ,comments ,id}) {
  const dispatch = useDispatch();
  
  const [checkedValue ,setCheckedValue] = React.useState(false);

  const handleCheckBox=()=>{
   console.log(checkedValue)
    if(!checkedValue){
      dispatch(increment(id))
    }else{
       dispatch(decrement(id))
    }
    setCheckedValue(!checkedValue)
  }

  const handleCheckChange = () => {
    setCheckedValue(checkedValue);
  };
  return (
    <div
      className="w-full  flex flex-col rounded-3xl bg-lightGray  leading-6"
    >
      <span id="introduction" className="translate-y-[-70px] md:translate-y-[-120px]" ></span>
      <div className="w-full flex flex-col px-3 pt-3">
        <div className="w-full flex flex-row justify-between border-b border-[#E6E6E6]  text-[#3B3B3B]  pb-2 font-bold text-sm  md:text-lg">
          معرفی
        </div>
      </div>
      <div className="w-full flex flex-col pt-3 px-3 mb-3">
        <div className="w-full flex flex-row justify-between text-[#808080] mt-3 leading-6 text-justify text-sm">
        {introduction.short_text}
        </div>
      </div>
      <div className="w-full px-3 pb-3 pt-1 md:pt-1 ">
        <div className="w-full flex flex-col lg:flex-row  bg-white rounded-2xl ">
          <div className="w-full flex flex-row px-3 group ">
            <div className="w-full flex flex-row py-2 border-b border-[#E6E6E6]  lg:border-b-0">
              <div className=" flex flex-row pl-3 py-1 items-center ">
                <ScoreIcon />
              </div>
              <div className="w-full flex flex-col pl-3 py-1 flex-grow-1">
                <div className="w-full flex flex-col text-[#808080] text-xs cursor-pointer  font-bold leading-7">
                  میانگین امتیازات
                </div>
                <div className="w-full flex flex-col  text-base text-[#242424] font-normal cursor-pointer   not-italic  leading-7 font-costumFaNum">
                {comments.score > 0 ? comments.score :"-" } از ۵
                  
                </div>
              </div>
              <button className="w-full flex flex-row transition ease-in-out delay-150 items-center justify-end lg:pl-2 border-[#E6E6E6] lg:border-l text-[#755000]  cursor-pointer text-sm not-italic font-bold">
                رتبه دهید
                <div className="transition ease-in-out duration-400 group-hover:-translate-x-1 group-hover:scale-110">
                  <ArrowRank />
                </div>
              </button>
            </div>
          </div>
          <div className="group w-full flex flex-row px-3  ">
            <div className="w-full flex flex-row py-2 ">
              <div className=" flex flex-row pl-3 py-1 items-center ">
                <UserOpinion />
              </div>
              <div className="w-full flex flex-col pl-3 py-1 flex-grow-1">
                <div className="w-full flex flex-col text-[#808080] text-xs font-bold cursor-pointer leading-7">
                  نظر کاربران
                </div>
                <div className="w-full flex flex-col text-base text-[#242424] font-normal cursor-pointer not-italic  leading-7 font-costumFaNum">
                 {comments.length > 0 ? comments.length :"-" } دیدگاه
                </div>
              </div>
              <button className="w-full transition ease-in-out duration-500 flex flex-row items-center justify-end text-[#1b887f]  cursor-pointer text-sm not-italic font-bold lg:text-sm ">
                خواندن نظرات
                <div className="transition ease-in-out duration-400 group-hover:-translate-x-1 group-hover:scale-110">
                  <ArrowOpinion />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-evenly px-3 pb-3 md:justify-center">
        <div className=" flex flex-row items-center justify-between  md:py-3 ">

          <div className="ml-2 flex flex-row items-center justify-center ">
            <div className={`${styles.container} `} onClick={handleCheckBox}>
                <input type="checkbox" checked={checkedValue} onChange={handleCheckChange}  />
                <div className={styles.checkmark} ></div>
            </div>
          </div>
          <div className="ml-2  cursor-pointer text-right text-sm md:text-base not-italic font-normal leading-8 text-[#242424] " onClick={handleCheckBox}>مقایسه</div>
          <div className="ml-2 flex flex-row items-center justify-center lg:ml-5 cursor-pointer">
            <CompareIcon color={checkedValue ? "#23AFA3" : "#808080"} />
          </div>
        </div>
        <button className="px-6 rounded-2xl bg-[#f5a800]  text-black transition ease-in-out duration-500 lg:px-7 py-2  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white text-sm  md:text-base not-italic font-bold leading-6 ">
          استعلام قیمت
        </button>
      </div>
    </div>
  );
}
