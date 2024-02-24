import React from "react";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "./formstyles.module.css";

export default function YesOrNoQuestion({
  formik,
  questionText,
  question,
  divider,
  subtext,
}) {
  return (
    <div
      className={
        " w-full flex flex-col gap-2 px-6 " +
        `${
          divider
            ? "  mt-5  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] "
            : "  mt-5  "
        }`
      }
    >
      <div className="flex flex-col w-full">
        <div className="text-[#242424] leading-6 text-sm  ">{questionText}</div>
        <div className="text-[#808080] leading-6 text-sm  ">{subtext}</div>
      </div>
      <div className="flex flex-row gap-2  justify-between  ">
        <div
          onClick={() => {
            formik.setFieldValue(question, true);
          }}
          className={
            "bg-[#F7F7F7] cursor-pointer rounded-xl py-2 px-3 w-full grow flex flex-row items-center " +
            `${
              formik.values[question] === true ? "  ring ring-[#1B887F]  " : ""
            }`
          }
        >
          <div className=" flex flex-row items-center gap-2 ">
            <div className="w-[16px]">
              <div
                className={`${formStyles.containerRadioTick} `}
                onClick={() => {
                  formik.setFieldValue(question, true);
                }}
              >
                <input
                  type="radio"
                  checked={formik.values[question] === true}
                  onChange={() => {
                    formik.setFieldValue(question, true);
                  }}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
            </div>
            <div className="font-normal text-xs leading-6 text-[#242424]">
              بله
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            formik.setFieldValue(question, false);
          }}
          className={
            "bg-[#F7F7F7] cursor-pointer rounded-xl py-2 px-3 w-full   grow flex flex-row items-center  " +
            `${
              formik.values[question] === false
                ? " ring ring-[#1B887F]    "
                : ""
            }`
          }
        >
          <div className=" flex flex-row items-center gap-2 ">
            <div className="w-[16px]">
              <div
                className={`${formStyles.containerRadioTick} `}
                onClick={() => {
                  formik.setFieldValue(question, false);
                }}
              >
                <input
                  type="radio"
                  checked={formik.values[question] === false}
                  onChange={() => {
                    formik.setFieldValue(question, false);
                  }}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
            </div>
            <div className="font-normal text-xs leading-6 text-[#242424]">
              خیر
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "text-mainRed text-xs  flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
          " " +
          `${
            formik.errors[question] && formik.touched[question]
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors[question]}
      </div>
    </div>
  );
}
