import React from "react";
import Image from "next/image";
import ProgressBarAndform from "./main-form/ProgressBarAndform";

export default function ContentFormSales() {
  return (
    <div className="py-3 flex flex-col md:flex-row gap-4 ">
      <div
        className={
          "w-full md:w-[45%]  shadow-G1 bg-[#FDFDFD] rounded-3xl flex flex-col md:flex-row  font-costumFaNum relative h-fit"
        }
      >
        <ProgressBarAndform />
      </div>
      <div className=" md:w-[55%] hidden md:block  relative ">
      <Image
          alt="Mehr Sales"
          className="w-full rounded-3xl  object-cover  sticky top-0 left-0   "
          width={590}
          height={735}
          src={"/agency/sales/levelup.webp"}
        />
      </div>
    </div>
  );
}
