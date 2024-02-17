"use client";
import React, { useState } from "react";
import * as yup from "yup";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CountDownTimer from "./CountDownTimer";
import DangerIcon from "@/icon2/DangerIcon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function processDone(massage) {
  toast.success(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
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
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .trim()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required(" شماره تلفن همراه را وارد کنید."),
});
const validationSchemaLoginCode = yup.object({
  code: yup.string().trim().required(" کد ورود را وارد کنید."),
});

export default function VerificationForm({
  verificationToFirstFormDone,
  mainData,
  setMainData,
  formikLoginCode,
  formik,
  loadingButton,
  setLoadingButton,
}) {
  const [startTimer, setsStartTimer] = useState(false);
  const [enablePhoneSend, setEnablePhoneSend] = useState(true);
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);

  // const [message, setMessage] = useState({ type: "", content: "" });
  // const [toast, setToast] = useState(false);


  return (
    <>
      {/* <ToastBox type={message.type} statusval={toast} setToast={setToast}>
        {message.content}
      </ToastBox> */}

      <div className=" flex flex-col pb-3 ">
        <div className="py-3 leading-6 font-bold text-base ">احراز هویت</div>
        <div className="text-[#525252] leading-6 text-sm font-normal pb-3 ">
          ابتدا شماره همراه خود را وارد کنید؛ پس از دریافت کد تایید، آن را در
          فیلد مورد نظر بنویسید.
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <form className="w-full flex flex-col mb-1">
            <div className="w-full flex flex-row items-center justify-between ">
              <div className="flex-grow pl-3  relative group  ">
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
                    " w-full px-4   h-12 resize-none  border  rounded-2xl bg-white input-label-pos" +
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
                    "text-[#525252]   absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                    " " +
                    `${
                      formik.values.phone_number?.length > 0
                        ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                        : ""
                    }`
                  }
                >
                  شماره همراه
                </label>
              </div>
              <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={!enablePhoneSend}
                className={
                  "transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl   " +
                  " " +
                  `${
                    !enablePhoneSend
                      ? " bg-[#E6E6E6] cursor-wait text-[#696969] "
                      : " text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
                  }`
                }
              >
                دریافت کد تایید
              </button>
            </div>

            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
          </form>
          <div className="pb-4 flex flex-col items-center  ">
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
          <form className="flex flex-col items-center justify-center w-full">
            <div className="w-[80%] pl-3 mb-1 relative  ">
              <input
                name="code"
                disabled={disabledCodeSend}
                value={formikLoginCode.values.code}
                onChange={formikLoginCode.handleChange}
                onBlur={formikLoginCode.handleBlur}
                type="text"
                className={
                  (formikLoginCode.values.code.length > 0
                    ? " input-label-pos-active "
                    : " ") +
                  " w-full px-4 placeholder-gray  h-12 resize-none  border rounded-2xl bg-white input-label-pos" +
                  " " +
                  `${
                    formikLoginCode.errors.code && formikLoginCode.touched.code
                      ? " border-[#DF2040] "
                      : "  border-gray-300  "
                  }` +
                  " " +
                  `${disabledCodeSend ? " cursor-not-allowed " : "  "}`
                }
              />
              <label
                className={
                  "text-[#525252]   absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                  " " +
                  `${
                    formik.values?.code?.length > 0
                      ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                      : ""
                  }` +
                  " " +
                  `${disabledCodeSend ? " text-[#ababab]  " : ""}`
                }
              >
                کد تایید
              </label>

              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formikLoginCode.errors.code && formikLoginCode.touched.code
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formikLoginCode.errors.code}
              </div>
            </div>
            <div className="w-full flex flex-col  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-3 items-center ">
              <button
                type="submit"
                onClick={formikLoginCode.handleSubmit}
                className={
                  "  transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl   " +
                  " " +
                  `${
                    disabledCodeSend
                      ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
                      : "group text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
                  }`
                }
              >
                مرحله بعد
                <div
                  className={
                    "transition ease-in-out duration-500  group-hover:scale-110    group-hover:brightness-0 group-hover:invert-0 " +
                    " " +
                    `${disabledCodeSend ? "  " : " brightness-0 invert "}`
                  }
                >
                  <ArrowOpinion color={disabledCodeSend ? "#696969" : ""} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
