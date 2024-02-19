import React from "react";
import SurveyIcon from "@/icon/surveyNote";
import InfoCircleIcon from "@/icon2/InfoCircle";
import style from "./survey.module.css";
export default function SurveyHeaderPage() {
  return (
    <div className="md:px-3">
      <div className={" bg-mainGreen1 text-[#F7F7F7] px-3 py-4 rounded-t-3xl md:rounded-3xl flex justify-between  items-center "+style.container}>
        <div className={style.SurveyHeaderTopDesc}>
          <h1 className=" text-lg font-bold mb-4">
            نظر سنجی مشتریان خدمات پس از فروش
          </h1>
          <p>
            نظرسنجی ذیل جهت بهبود خدمات تهیه شده و مخصوص مشتریانی است که جهت
            دریافت خدمات پس از فروش مراجعه کرده‌اند.
          </p>
          <div className="flex items-center bg-white text-[#242424] px-3  rounded-lg mt-4 py-1 ">
            <span className=" pr-2 pl-4 ">
              <InfoCircleIcon color="#696969" width={"24"} height={"24"} />
            </span>
            <ul>
              <li className="before:content-[''] before:w-1  before:h-1 before:rounded-full before:bg-[#242424] before:block before:ml-2 flex items-baseline">
                مدت زمان پاسخگویی حدودی: 7 دقیقه
              </li>
              <li className="before:content-[''] before:w-1  before:h-1 before:rounded-full before:bg-[#242424] before:block before:ml-2 flex items-baseline">
                تمامی اطلاعات شما نزد شرکت محفوظ بوده، با نفر سومی به اشتراک
                گذاشته نخواهد شد و صرفا جهت بهبود کیفیت خدمات استفاده خواهد شد.
              </li>
            </ul>
          </div>
        </div>
        <div className="  w-[180px] flex justify-center">
          <SurveyIcon />
        </div>
      </div>
    </div>
  );
}
