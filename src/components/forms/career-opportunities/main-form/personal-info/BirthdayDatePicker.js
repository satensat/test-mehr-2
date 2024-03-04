import ArrowDownIcon from "@/icon/ArrowDown";
import DangerIcon from "@/icon2/DangerIcon";
import React from "react";
import { DatePicker } from "zaman";
import styles from "../form.module.css";

export default function BirthdayDatePicker({ formik, mainData }) {
  const handleDateConvert = (dateInput) => {
    //"26-02-2012" format to timestamp
    const [y, m, d] = dateInput.split(/-|\//);
    const test = new Date(
      parseInt(y, 10),
      parseInt(m, 10) - 1,
      parseInt(d),
      10
    ).getTime();
    return test;
  };
  return (
    <div className="mb-3 grow  flex flex-col items-center w-full">
      <div
        onBlur={() => formik.setFieldTouched("birth_day")}
        className={
          "group   " +
          styles.datePicker +
          "  " +
          `${formik.values.birth_day.length > 0 ? styles.activeLabel : " "}`
        }
      >
        <DatePicker
          defaultValue={
            mainData?.birth_day
              ? handleDateConvert(mainData?.birth_day)
              : undefined
          }
          round="x4"
          position="center"
          accentColor="#1b887f"
          className="font-costumFaNum relative  "
          name="birth_day"
          onChange={(event) => {
            formik.setFieldValue(
              "birth_day",
              new Date(event.value).toISOString().slice(0, 10)
            );
          }}
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${formik.values.birth_day.length > 0 ? "text-xs" : ""}`
          }
        >
          تاریخ تولد
        </label>
        <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
          <ArrowDownIcon />
        </div>
      </div>
      <div
        className={
          "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-[80%] " +
          " " +
          `${
            formik.errors.birth_day && formik.touched.birth_day
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.birth_day}
      </div>
    </div>
  );
}
