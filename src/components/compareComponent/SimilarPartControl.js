"use client";
import React, { useState } from "react";

export default function SimilarPartControl() {
  const [controlSimilarity, setControlSimilarity] = useState(false);
  const handleControlSimilarity = () => {
    setControlSimilarity(() => !controlSimilarity);
  };
  return (
    <div className="p-3 bg-[#FDFDFD]">
      <div className="shadow-G1 py-2 px-3 rounded-2xl flex flex-row items-center bg-[#FDFDFD] md:w-1/2 lg:w-1/3">
        {/* <div
          onClick={handleControlSimilarity}
          className={
            "transition ease-in-out duration-500  flex w-[48px] h-[24px] py-[2px] px-[2px]  bg-[#C2CFD6] rounded-[20px] ml-2 cursor-pointer " +
            " " +
            `${
              controlSimilarity
                ? " pl-[26px]  pr-[2px]"
                : " pl-[2px]  pr-[26px]"
            }`
          }
        >
          <div className="w-5 h-5 flex-shrink-0 bg-lightGray rounded-full"></div>
        </div> */}

        <label className="relative inline-flex items-center cursor-pointer ml-2">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={controlSimilarity}
          />
          <div
            onClick={handleControlSimilarity}
            className="w-[48px] h-[24px] bg-[#C2CFD6] rounded-full peer peer-focus:ring-2 peer-focus:ring-[#AAEEE9]  dark:peer-focus:ring-[#AAEEE9] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-lightGray  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#23AFA3] peer-checked:hover:bg-[#1B887F] hover:bg-[#9AB0BC]"
          ></div>
        </label>

        <div className="flex flex-col">
          <div className="text-sm text-right md:text-base not-italic font-normal leading-8 text-[#242424]">
            مخفی کردن شباهت‌ها
          </div>
          <div className="text-xs text-right md:text-sm not-italic font-normal leading-6 text-[#808080] ">
            ویژگی‌هایی که شبیه هستند نمایش داده نمی‌شوند.
          </div>
        </div>
      </div>
    </div>
  );
}
// after:top-[2px]  after:top-[2px] 