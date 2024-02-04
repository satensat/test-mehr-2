import AgencyIcon2 from "@/icon/agency2";
import React from "react";

export default function ReceiveRepresentative() {
    console.log("isServer");
  let isServer = typeof window === "undefined" ? false : true;
  console.log(isServer);

  return (
  
    <div className="flex flex-col items-center justify-center gap-2 mb-3 px-1 md:px-0">
       <div className="md:hidden flex">
        <AgencyIcon2 color={"#fff"} width={"24"} height={"24"} />
      </div>
      <div className="hidden md:flex">
        <AgencyIcon2 color={"#fff"} width={"40"} height={"40"} />
      </div>
      <div className="text-center md:text-base not-italic font-bold leading-6     text-sm">
        دریافت نمایندگی خدمات پس از فروش
      </div>
      <div className=" md:text-sm not-italic font-normal md:leading-6 text-justify text-xs leading-5  text-[#F7F7F7] ">
        در صورتیکه مایل به اخذ نمایندگی خدمات پس از فروش هستید، ابتدا موارد ذیل
        را مطالعه فرمایید و سپس فرم مربوط را پر کنید.
      </div>
    </div>
  );
}
