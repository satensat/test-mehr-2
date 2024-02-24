import DangerIcon from "@/icon2/DangerIcon";
import React from "react";

export default function TextDescription({
  formik,
  placeholderDescription,
  labelDescription,
  question,
  divider
}) {
  return (
    <div className={
        "w-full flex flex-col mt-3 px-6 " +
        `${
          divider
            ? "  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] "
            : ""
        }`
      }>

    <div
      className={
        "w-full group relative   text-[#525252] -z-0 " 
      }
    >
      <textarea
        name={question}
        value={formik.values[question]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholderDescription}
        className={
          (true > 0 ? "  " : " ") +
          " w-full px-4 placeholder-[#ABABAB] pt-3  h-10 resize-none min-h-32  border border-[#ABABAB] rounded-2xl bg-white  placeholder-translate "
        }
      ></textarea>
      <label
        className={
          " absolute  top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px]  transition-all duration-[0.4s] " +
          " " +
          `${true ? "text-xs  -translate-y-[20px]  " : ""}`
        }
      >
        {labelDescription}
      </label>
      <div
        className={
          "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
    </div>
  );
}
