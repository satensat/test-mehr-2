import AgencyIcon2 from "@/icon/agency2";
import React from "react";
import styles from "./styles.module.css";
import InfoCircleIcon from "@/icon2/InfoCircle";
import ModalGuarantee from "./ModalGuarantee";

export default function FormHeader() {
  return (
    <div
      className={
        "md:my-3 bg-mainGreen1 rounded-3xl flex flex-col md:flex-row md:justify-between items-center p-3 md:p-0    " +
        styles.container
      }
    >
      <div className=" flex flex-row justify-center items-center  md:hidden">
        <AgencyIcon2 width={"24"} height={"24"} color={"#fff"} />
      </div>
      <div className="w-full md:w-[70%] px-3 pt-3 md:pb-3 flex flex-col gap-2 items-center md:items-start md:gap-3 z-[1]">
        <div className="text-sm leading-6 md:text-lg  font-bold md:leading-8 text-[#f7f7f7]">
          دریافت نمایندگی خدمات پس از فروش
        </div>
        <div className="text-xs leading-5 md:text-sm  font-normal md:leading-6 text-[#ccc] text-justify">
          در صورتیکه مایل به اخذ نمایندگی خدمات پس از فروش هستید، ابتدا موارد
          ذیل را مطالعه فرمایید و سپس فرم مربوط را پر کنید.
        </div>

        <ModalGuarantee/>
      </div>
      <div className="p-[10px] hidden flex-row justify-center items-center w-[15%] md:flex">
        <AgencyIcon2 width={"78"} height={"72"} color={"#fff"} />
      </div>
    </div>
  );
}
