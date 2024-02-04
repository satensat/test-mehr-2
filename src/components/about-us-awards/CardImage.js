import ZoomIcon from "@/icon/ZoomIcon";
import Image from "next/image";
import React from "react";
import ModalOpenZoomButton from "./ModalOpenZoomButton";

export default function CardImage({ data }) {
  return (
    <div className="rounded-2xl bg-[#FFF] shadow-G2  w-[46%] md:w-[32%] lg:w-[24%] 2xl:w-[19%] px-3  pb-4 relative min-h-[226px] ">
      <div className="flex flex-col ">
        <div className="rounded-[8px] h-[150px] md:h-[208px] relative  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCC] ">
          <Image
            src={data.image}
            alt={data.content}
            layout="fill"
            objectFit={"contain"}
            className="rounded-[8px] w-full"
          />
        </div>
        <div className="flex flex-col gap-1 text-center text-[10px] md:text-sm not-italic font-bold md:leading-6  text-[#696969] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6]    leading-4  ">
          {data.content}
        </div>
        <ModalOpenZoomButton data={data} />
      </div>
    </div>
  );
}
