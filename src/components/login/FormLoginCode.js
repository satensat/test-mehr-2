"use client";
import React, { useState, useRef } from "react";
import CountDownTimer from "./CountDownTimer";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "./ButtonCoverLoader";

export default function FormLoginCode({
  formik,
  loadingCodeSend,
  setStartTimer,
  startTimer,
  timerAgainStart,
  setTimerAgainStart,
  sendCodeAgain,
}) {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    formik.setFieldValue("code", newInputs.join(""));
    if (value.length === 1 && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Backspace" && index > 0 && inputs[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <form className="flex flex-col items-center justify-center w-full mt-3">
      <div
        dir="ltr"
        className="w-full  relative flex flex-row items-center gap-3 justify-center text-left  "
        onBlur={() => formik.setFieldTouched("code", true)}
      >
        {inputs.map((value, index) => (
          <input
            name={`code-${index}`}
            key={index}
            // value={formik.values.code}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            type="text"
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            className={
              "  px-4 w-[45px] text-center  h-10 resize-none  border rounded-2xl bg-white " +
              " " +
              `${
                formik.errors.code && formik.touched.code
                  ? " border-[#DF2040] "
                  : "  border-[#ABABAB]  "
              }` +
              " "
            }
          />
        ))}
      </div>
      <div
        className={
          "text-mainRed text-xs pt-1 flex w-full flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.code && formik.touched.code
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.code}
      </div>
      <div
        className={
          "px-3 py-1  flex-row items-center font-costumFaNum  bg-[#F7F7F7]  rounded-xl w-full  " +
          `${timerAgainStart ? " hidden " : "  flex "}`
        }
      >
        <div className="text-[#242424] leading-5 text-xs text-center font-normal flex flex-row gap-2 py-1 px-3">
          <div className=" w-[35px]">
            <CountDownTimer
              startTimer={startTimer}
              setStartTimer={setStartTimer}
              setTimerAgainStart={setTimerAgainStart}
            />
          </div>
          دقیقه مانده تا
        </div>
        <div className="text-[#ABABAB]  font-bold leading-6 text-sm py-1 px-3">
          دریافت مجدد کد ورود
        </div>
      </div>
      <button
        onClick={ sendCodeAgain}
        type="button"
        className={
          "px-3 py-2  flex-row items-center font-costumFaNum  transition ease-in-out duration-500  bg-[#F7F7F7]  rounded-xl w-full text-[#13625C]  font-bold leading-6 text-sm justify-center hover:bg-mainGreen1  hover:text-[#fff] " +
          `${timerAgainStart ? " flex " : "  hidden "}`
        }
      >
        دریافت مجدد کد ورود
      </button>
      <div className="w-full flex flex-row items-center justify-center mx-auto mt-3 ">
        <button
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!(formik.isValid && formik.dirty)}
          className={
            " flex-grow transition ease-in-out duration-500 h-fit  flex flex-row justify-center items-center  px-4 py-2 text-base font-bold leading-6  rounded-xl  relative " +
            " " +
            // `${
            //   !(formik.isValid && formik.dirty)
            //     ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
            //     : "   "
            // }` +
            " " +
            `${
              loadingCodeSend
                ? " text-white  bg-mainGreen1   "
                : !(formik.isValid && formik.dirty)
                ? " bg-[#F7F7F7] cursor-not-allowed text-[#696969] "
                : "    text-white  bg-mainGreen1    hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
            }`
          }
        >
          تایید
          {loadingCodeSend && <ButtonCoverLoader />}
        </button>
      </div>
    </form>
  );
}
