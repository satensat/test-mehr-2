"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CountDownTimer from "./CountDownTimer";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "./ButtonCoverLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TickCircle from "@/icon2/TickCircle";

function processDone(massage) {
  toast.success(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

function processFail(massage) {
  toast.error(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default function FormPhoneOrEmail({
  formik,
  disabledCodeSend,
  setDisabledCodeSend,
  enablePhoneSend,
  setEnablePhoneSend,
  startTimer,
  setsStartTimer,
}) {
  return (
    <form className="w-full flex flex-col mb-1">
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-[80%] flex-grow  relative group  ">
          <input
            name="phone_number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-3   h-[40px] resize-none  border  rounded-2xl bg-white " +
              " " +
              `${
                formik.errors.phone_number && formik.touched.phone_number
                  ? " border-[#DF2040] "
                  : "  border-gray-300  "
              }`
            }
          />
          <label
            className={
              "text-[#525252]   absolute  z-[3] top-3 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[20px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                formik.values.phone_number?.length > 0
                  ? " text-xs  -translate-y-[20px]  px-[5px] bg-[#fff]  "
                  : ""
              }`
            }
          >
            شماره همراه یا ایمیل
          </label>
        </div>

        {!enablePhoneSend ? (
          <div
            className={
              "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
              " " +
              `${!enablePhoneSend ? " opacity-100 " : " opacity-0 "}`
            }
          >
            <TickCircle />
            زیمآ‌تیقفوم مایپ نتم
          </div>
        ) : (
          <div
            className={
              "w-[80%] text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.phone_number && formik.touched.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.phone_number}
          </div>
        )}
      </div>
      <div className="w-[80%] flex flex-row items-center justify-center mx-auto  ">
        <button
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!enablePhoneSend}
          className={
            " flex-grow transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl   " +
            " " +
            `${
              !enablePhoneSend
                ? " bg-[#E6E6E6] cursor-wait text-[#696969] "
                : " text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
            }`
          }
        >
          دریافت کد ورود یکبار مصرف
        </button>
        <div className="px-3 py-1 flex flex-col items-center  ">
          <div className="text-[#808080] leading-4 text-[10px] text-center font-bold ">
            دریافت مجدد پس از:
          </div>
          <div className="text-[#242424] leading-5 text-xs text-center font-normal flex flex-row ">
            <div className="ml-2 w-[35px]">
              <CountDownTimer
                startTimer={startTimer}
                setsStartTimer={setsStartTimer}
                setEnablePhoneSend={setEnablePhoneSend}
              />
            </div>
            دقیقه دیگر
          </div>
        </div>
      </div>
    </form>
  );
}
