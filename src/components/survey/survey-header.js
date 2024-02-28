import React from "react";
import SurveyIcon from "@/icon/surveyNote";
import InfoCircleIcon from "@/icon2/InfoCircle";
import style from "./survey.module.css";
export default function SurveyHeaderPage() {
  return (
    <div className="md:px-3 relative z-1">
      <div
        className={
          " bg-mainGreen1 text-[#F7F7F7] px-3 py-4 rounded-t-3xl md:rounded-3xl flex justify-between  items-center font-costumFaNum " +
          style.container
        }
      >
        <div
          className={
            "flex flex-col w-full justify-center  md:justify-start"
          }
        >
          <div className=" flex flex-row justify-center items-center  md:hidden mb-3">
            <SurveyIcon width={"24"} height={"24"} color={"#fff"} />
          </div>
          <h1 className=" text-center md:text-right text-sm leading-6 md:text-lg  font-bold md:leading-8 text-[#f7f7f7] ">
            نظرسنجی مشتریان خدمات پس از فروش
          </h1>
          <p className="    text-xs leading-5 md:text-sm  font-normal md:leading-6 text-[#ccc] text-justify">
            نظرسنجی ذیل جهت بهبود خدمات تهیه شده و مخصوص مشتریانی است که جهت
            دریافت خدمات پس از فروش مراجعه کرده‌اند.
          </p>
          <div className="flex items-center bg-white text-[#242424] px-3  rounded-lg mt-4 py-1 ">
            <span className=" pr-2 pl-4 ">
              <InfoCircleIcon color="#696969" width={"24"} height={"24"} />
            </span>
            <ul className=" space-y-1 list-inside list-disc  ">
              <li className=" text-xs">
                مدت زمان پاسخگویی حدودی: 7 دقیقه
              </li>
              <li className="  text-xs  ">
                تمامی اطلاعات شما نزد شرکت محفوظ بوده، با نفر سومی به اشتراک
                گذاشته نخواهد شد و صرفا جهت بهبود کیفیت خدمات استفاده خواهد شد.
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex w-[180px]  justify-center">
          <SurveyIcon />
        </div>
      </div>
    </div>
  );
}
// before:content-[''] before:w-[3px]  before:h-[3px] before:rounded-full before:bg-[#242424] before:block flex items-baseline
// before:content-[''] before:w-[3px]  before:h-[3px] before:rounded-full before:bg-[#242424] before:block flex items-baseline