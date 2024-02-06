"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/arrow-down";
import PlusIcon from "@/icon/PlusIcon";
import CloseIcon from "@/icon/close";
import CloseModal from "@/icon/CloseModal";
import { DatePicker } from "zaman";
import styles from "./form.module.css";
import DangerIcon from "@/icon2/DangerIcon";
import SkillRecordsForm from "./SkillRecordsForm";
import CoursesForm from "./CoursesForm";

export default function RecordsCourses({ formik }) {
  const [open, setOpen] = useState(true);

  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`w-[80%]   flex flex-col rounded-2xl   cursor-pointer leading-6 my-3 bg-[#F7F7F7] shadow-G1 ${
        open ? "h-auto   " : "h-[112px] "
      }`}
    >
      <div className="w-full flex flex-col p-3 gap-[10px]">
        <div
          onClick={handleOpenClick}
          className={`w-full flex flex-row justify-between  text-[#3B3B3B] text-sm pb-2   font-bold border-b border-[#E6E6E6]  `}
        >
          سوابق و دوره‌ها
          <button
            className={`transition  duration-200 cursor-pointer ${
              open ? "transform rotate-180" : "transform rotate-0"
            }`}
            onClick={handleOpenClick}
          >
            <ArrowDownIcon />
          </button>
        </div>
        <div
          className={
            "text-[#808080] leading-6 text-sm " +
            " " +
            ` ${open ? " hidden " : " block "} `
          }
        >
          پر کردن این قسمت باعث میشود احتمال امتیاز کسب نمایندگی شما افزایش
          یابد.
        </div>
      </div>

      <div
        className={`w-full flex flex-col  px-3 pb-3 ${
          open ? "opacity-100 overflow-auto " : " opacity-0 hidden"
        } `}
      >
        {/* <div className="w-full flex flex-col  text-[#808080]  leading-6 text-justify text-sm"></div> */}
        <div className="bg-[#FDFDFD]  rounded-xl  p-3 flex flex-col ">
          <div className="text-[#808080] leading-6 text-sm mb-2">
            سوابق مهارتی، مهارت‌های فنی و نرم شما میباشد مثل تعمیرات، کار با
            سخت‌افزار و یا ارتباط قوی با مشتری
          </div>

          <SkillRecordsForm />
        </div>
        <div className="w-full  mt-4 my-1 relative group">
          <textarea
            name="work_experience"
            value={formik.values.work_experience}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.work_experience.length > 0
                ? " input-label-pos-active "
                : " ") +
              " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
            }
          ></textarea>
          <label
            className={
              " absolute top-4 right-4  pointer-events-none text-sm group-focus-within:text-xs    rounded-2xl  " +
              " " +
              `${formik.values.work_experience.length > 0 ? "  text-xs" : ""}`
            }
          >
            میزان سوابق و تجارب کاری و اجرایی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.work_experience && formik.touched.work_experience
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.firstName}
          </div>
        </div>
        <CoursesForm formik={formik}/>
      </div>
    </div>
  );
}
