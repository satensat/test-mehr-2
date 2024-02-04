import AgencyIcon1 from "@/icon/agency1";
import React from "react";

export default function AgencyReceive() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-3 px-1 md:px-0">
      <div className="hidden md:flex">
        <AgencyIcon1 color={"#fff"} width={"40"} height={"40"} />
      </div>
      <div className="md:hidden flex">
        <AgencyIcon1 color={"#fff"} width={"24"} height={"24"} />
      </div>
      <div className="text-center md:text-base not-italic font-bold leading-6     text-sm ">
        دریافت عاملیت فروش
      </div>
      <div className="text-justify md:text-sm not-italic font-normal md:leading-6 text-xs  leading-5 text-[#F7F7F7]">
        در صورتیکه مایل به اخذ نمایندگی فروش هستید، ابتدا موارد ذیل را مطالعه
        فرمایید و سپس فرم مربوط را پر کنید تا همکاران ما با شما تماس بگیرند.
      </div>
    </div>
  );
}
