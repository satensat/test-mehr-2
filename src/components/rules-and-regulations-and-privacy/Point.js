import React from "react";

export default function Point({title,content}) {
  return (
    <div className="flex flex-col   rounded-3xl ">
      <div className="bg-[#13625C] px-3 py-2 rounded-t-xl text-[#FFFFFF] text-sm leading-6 font-bold">{title}</div>
      <div className=" flex flex-col gap-3  bg-[#F7F7F7] p-3  rounded-b-3xl text-[#525252] text-sm leading-6 text-justify ">
        {content.map((item,index)=>
        <p key={index}>
            {item}
        </p>)}
      </div>
    </div>
  );
}
