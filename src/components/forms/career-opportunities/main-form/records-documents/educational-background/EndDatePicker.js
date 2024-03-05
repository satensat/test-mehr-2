"use client";
import ArrowDownIcon from "@/icon/ArrowDown";
import DangerIcon from "@/icon2/DangerIcon";
import React, { useState } from "react";
import { DatePicker } from "zaman";
import styles from "../../form.module.css";

export default function EndDatePicker({ formik }) {
  const [controlSimilarity, setControlSimilarity] = useState(false);
  const handleControlSimilarity = () => {
    setControlSimilarity(() => !controlSimilarity);
  };
  // const handleDateConvert = (dateInput) => {
  //     //"26-02-2012" format to timestamp
  //     const [y, m, d] = dateInput.split(/-|\//);
  //     const test = new Date(
  //       parseInt(y, 10),
  //       parseInt(m, 10) - 1,
  //       parseInt(d),
  //       10
  //     ).getTime();
  //     return test;
  //   };
  return (
    <div className="grow md:w-[50%] w-full flex flex-col items-center mb-3">
      <div className="flex flex-row w-full gap-3 items-center">
        <div
          className={
            " w-[50%] grow flex flex-col  " +
            ` ${
              //   formik.values.militaryStatus === "پایان خدمت"
              // ?
              " text-[#525252] "
              // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
            }`
          }
        >
          <div
            onBlur={() => formik.setFieldTouched("end_date")}
            className={
              "group   " +
              styles.datePickerDetail +
              "  " +
              `${formik.values.end_date?.length > 0 ? styles.activeLabel : " "}`
            }
          >
            <input
              autoComplete="off"
              value={
                formik.values.end_date === ""
                  ? ""
                  : new Date(formik.values.end_date).toLocaleDateString("fa-IR")
              }
              readOnly
              className={"   " + styles.datePickerInputStyle}
            />
            <DatePicker
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum "
              name="end_date"
              inputClass={" " + " " + styles.datePickerMainInputHide}
              onChange={(event) => {
                formik.setFieldValue(
                  "end_date",
                  new Date(event.value).toISOString().slice(0, 10)
                );
              }}
            />
            <label
              className={
                " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${formik.values.end_date?.length > 0 ? "text-xs" : ""}` +
                " " +
                ` ${
                  //   formik.values.militaryStatus === "پایان خدمت"
                  // ?
                  " text-[#525252] "
                  // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
                }`
              }
            >
              سال پایان
            </label>
            <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
              <ArrowDownIcon color={`${" #525252 "}`} />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-row gap-1 p-1  ">
          <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] my-auto  ">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={controlSimilarity}
            />
            <div
              onClick={handleControlSimilarity}
              className="w-[48px] h-[24px] bg-[#C2CFD6] rounded-full peer peer-focus:ring-2 peer-focus:ring-[#AAEEE9]  dark:peer-focus:ring-[#AAEEE9] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-lightGray  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#23AFA3] peer-checked:hover:bg-[#1B887F] hover:bg-[#9AB0BC]"
            ></div>
          </label>
          <div className="text-[#525252] text-xs leading-5  ">
            هم اکنون 
            <p>مشغول هستم</p>
          </div>
        </div>
      </div>
      <div
        className={
          "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-full " +
          " " +
          `${
            formik.errors.end_date && formik.touched.end_date
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.end_date}
      </div>
    </div>
  );
}
