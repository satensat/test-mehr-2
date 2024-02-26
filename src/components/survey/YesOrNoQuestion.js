import React from "react";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "./formstyles.module.css";

export default function YesOrNoQuestion({
  formik,
  questionText,
  question,
  divider,
  subtext,
  show
}) {
  return (
    <div
      className={
        " w-full flex flex-col gap-2 px-6 " +
        `${
          divider
            ? "  mt-5  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] "
            : "  mt-5  "
        }`+
        `${
          show
            ? " flex flex-col  "
            : " hidden "
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
            formik.setFieldValue(`questions.${question}.qAnswer`, "YES");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className={
            "bg-[#F7F7F7] cursor-pointer rounded-xl py-2 px-3 w-full grow flex flex-row items-center " +
            `${
              formik.values.questions[question].qAnswer === "YES" ? "  ring ring-[#1B887F]  " : ""
            }`
          }
        >
          <div className=" flex flex-row items-center gap-2 ">
            <div className="w-[16px]">
              <div
                className={`${formStyles.containerRadioTick} `}
                onClick={() => {
                  formik.setFieldValue(`questions.${question}.qAnswer`, "YES");
                  formik.setFieldValue(`questions.${question}.qText`, questionText);
                }}
              >
                <input
                  type="radio"
                  checked={formik.values.questions[question].qAnswer === "YES"}
                  onChange={() => {
                    formik.setFieldValue(`questions.${question}.qAnswer`, "YES");
                    formik.setFieldValue(`questions.${question}.qText`, questionText);
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
         
            formik.setFieldValue(`questions.${question}.qAnswer`, "NO");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className={
            "bg-[#F7F7F7] cursor-pointer rounded-xl py-2 px-3 w-full   grow flex flex-row items-center  " +
            `${
              formik.values.questions[question].qAnswer === "NO"
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
                  formik.setFieldValue(`questions.${question}.qAnswer`, "NO");
                  formik.setFieldValue(`questions.${question}.qText`, questionText);
                }}
              >
                <input
                  type="radio"
                  checked={formik.values.questions[question].qAnswer === "NO"}
                  onChange={() => {
                    formik.setFieldValue(`questions.${question}.qAnswer`, "NO");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
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
          "text-mainRed text-xs my-1 flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
          " " +
          `${formik.errors.questions && formik.touched.questions && 
            formik.errors.questions[question]?.qAnswer && formik.touched.questions[question]?.qAnswer
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.questions && formik.touched.questions &&  formik.errors.questions[question]?.qAnswer}
      </div>
    </div>
  );
}
