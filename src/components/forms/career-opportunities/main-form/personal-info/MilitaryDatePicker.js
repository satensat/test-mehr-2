import ArrowDownIcon from '@/icon/ArrowDown';
import DangerIcon from '@/icon2/DangerIcon';
import React from 'react'
import { DatePicker } from 'zaman';
import styles from "../form.module.css";

export default function MilitaryDatePicker({formik}) {
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
    <div
    className={
      "mb-3 w-full grow flex flex-col  " +
      ` ${
        formik.values.militaryStatus === "پایان خدمت"
          ? " text-[#525252] "
          : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
      }`
    }
  >
    <div
      onBlur={() => formik.setFieldTouched("militaryDate")}
      className={
        "group   " +
        styles.datePickerDetail +
        "  " +
        `${
          formik.values.militaryDate.length > 0
            ? styles.activeLabel
            : " "
        }`
      }
    >
      <input
        autoComplete="off"
        value={
          formik.values.militaryDate === ""
            ? ""
            : new Date(formik.values.militaryDate).toLocaleDateString(
                "fa-IR"
              )
        }
        readOnly
        className={"   " + styles.datePickerInputStyle}
      />
      <DatePicker
        round="x4"
        position="center"
        accentColor="#1b887f"
        className="font-costumFaNum "
        name="militaryDate"
        inputClass={" " + " " + styles.datePickerMainInputHide}
        onChange={(event) => {
          formik.setFieldValue(
            "militaryDate",
            new Date(event.value).toISOString().slice(0, 10)
          );
        }}
      />
      <label
        className={
          " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
          " " +
          `${formik.values.militaryDate.length > 0 ? "text-xs" : ""}` +
          " " +
          ` ${
            formik.values.militaryStatus === "پایان خدمت"
              ? " text-[#525252] "
              : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
          }`
        }
      >
        تاریخ پایان خدمت
      </label>
      <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
        <ArrowDownIcon
          color={`${
            formik.values.militaryStatus === "پایان خدمت"
              ? " #525252 "
              : "#b1b3b3"
          }`}
        />
      </div>
    </div>
    <div
      className={
        "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-full " +
        " " +
        `${
          formik.errors.militaryDate && formik.touched.militaryDate
            ? " opacity-100 "
            : " opacity-0 "
        }`
      }
    >
      <DangerIcon />
      {formik.errors.militaryDate}
    </div>
  </div>
  )
}
