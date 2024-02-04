import Image from "next/image";
import React from "react";

export default function DetailsCard({ data }) {
    // data.image
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className=" flex flex-col bg-[#F7F7F7] rounded-2xl">
        <div className="text-right text-base not-italic font-normal leading-8 text-[#242424] px-3 py-1">
          {data.title}
        </div>
        <div className="text-right text-sm not-italic font-normal leading-8 text-[#525252] px-3 ">
          {data.content}
        </div>
        <div className="flex flex-col px-3 pt-3">
          <div className="rounded-[8px] bg-[#fdfdfd] h-[268px] relative ">
            <Image 
            src={data.image}
            alt={data.imageText}
            layout="fill"
            objectFit={data.objectFit}
            className="rounded-[8px] w-full"
            />
          </div>
          <div className="text-right text-xs not-italic font-normal leading-5 p-3 text">
            {data.imageText}
          </div>
        </div>
      </div>
    </div>
  );
}
