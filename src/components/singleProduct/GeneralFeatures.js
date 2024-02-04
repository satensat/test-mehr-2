
import React from "react";

export default function GeneralFeatures({feature ,amount}) {


  return (
    <div className="w-full  flex flex-col rounded-3xl bg-lightGray  leading-6">
      <div className="w-full flex flex-col px-3 pt-3 pb-3">
        <div className="w-full flex flex-row justify-between border-b border-[#E6E6E6]  text-[#3B3B3B] text-sm  md:text-lg pb-2 font-bold ">
          ویژگی های کلی
        </div>
      </div>
      <div className="w-full flex flex-col px-3 pb-3 ">
        <div className="w-full flex flex-col gap-3 text-[#808080]  leading-6 text-justify text-sm">

        {feature.map(item =>   <div className="w-full flex flex-col px-3 py-1  bg-[#FDFDFD] rounded-xl">
            <div className="text-[#808080] text-xs not-italic font-bold leading-6">
          {  item.en_name}
            </div>
            <div className="text-base not-italic font-normal leading-8 text-[#242424]">
          {  item.fa_name}
            </div>
          </div>)}
         
        
        
        
        
        </div>
      </div>
    </div>
  );
}


