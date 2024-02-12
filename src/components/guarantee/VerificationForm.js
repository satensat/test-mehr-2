"use client";
import ToastBox from "../global/toast";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CountDownTimer from "./CountDownTimer";
import DangerIcon from "@/icon2/DangerIcon";

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .trim()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required(" شماره تلفن همراه را وارد کنید."),
});
const validationSchemaLoginCode = yup.object({
  loginCode: yup.string().trim().required(" کد ورود را وارد کنید."),
});

export default function VerificationForm({
  verificationToFirstFormDone,
  mainData,
  setMainData,
}) {
  const [startTimer, setsStartTimer] = useState(false);
  const [enablePhoneSend, setEnablePhoneSend] = useState(true);
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);

  const [message, setMessage] = useState({ type: "", content: "" });
  const [toast, setToast] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone_number: mainData?.phone_number ? mainData?.phone_number : "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(
          `http://192.168.10.195:8090/v1/api/applicators/register/`,
          {
            method: "POST",
            body: JSON.stringify({
              phone_number: values.phone_number,
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail.status);
            console.log(detail.body);
            if (detail.status == "400") {
              setToast(true);
              // const featureEntries = Object.entries(detail.body);
              // {
              //   featureEntries.map((item) => setMessage(item[1]));
              // }
            }
            if (detail.status == "200" || detail.status == "201") {
              setToast(true);
              setMessage({
                type: "success",
                content:
                  "شماره تلفن همراه با موفقیت ثبت شد، کد تایید برای شما از طریق پیامک ارسال خواهد شد.",
              });
              setEnablePhoneSend(false);
              setsStartTimer(true);
              setDisabledCodeSend(false);
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  const formikLoginCode = useFormik({
    initialValues: {
      loginCode: mainData?.code ? mainData?.code : "",
    },
    onSubmit: (values) => {
      try {
        console.log({
          phone_number: formik.values.phone_number,
          code: values.loginCode,
        });
        const res = fetch(
          `http://192.168.10.195:8090/v1/api/applicators/confirm/`,
          {
            method: "POST",
            body: JSON.stringify({
              phone_number: formik.values.phone_number,
              code: values.loginCode,
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail.status);
            console.log(detail.body);
            if (detail.status == "400") {
              setToast(true);
              if (detail.body.phone_number) {
                setToast(true);
                setMessage({
                  type: "danger",
                  content: detail.body.phone_number,
                });
              }
              if (detail.body.code) {
                setToast(true);
                setMessage({
                  type: "danger",
                  content: detail.body.code,
                });
              }
            }
            if (detail.status == "200" || detail.status == "201") {
              setToast(true);
              setMessage({
                type: "success",
                content: "احراز هویت با موفقیت انجام شد.",
              });
              // setSubmitted(true);
              verificationToFirstFormDone();
              setMainData({
                ...mainData,
               varificationForm:{ phone_number: formik.values.phone_number,
                code: values.loginCode,}
              });
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: validationSchemaLoginCode,
  });

  return (
    <>
      <ToastBox type={message.type} statusval={toast} setToast={setToast}>
        {message.content}
      </ToastBox>

      <div className=" flex flex-col pb-3 ">
        <div className="py-3 leading-6 font-bold text-base ">احراز هویت</div>
        <div className="text-[#525252] leading-6 text-sm font-normal pb-3 ">
          ابتدا شماره همراه خود را وارد کنید؛ پس از دریافت کد تایید، آن را در
          فیلد مورد نظر بنویسید.
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <div className="w-full flex flex-col mb-1">
            <div className="w-full flex flex-row items-center justify-between ">
              <div className="flex-grow pl-3  relative  ">
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
                <label className=" absolute top-3 right-4  pointer-events-none text-[#525252] ">
                  شماره همراه
                </label>
              </div>
              <button
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
          </div>
          <div className="pb-4 flex flex-col items-center  ">
            <div className="text-[#808080] leading-4 text-[10px] text-center font-bold ">
              دریافت مجدد پس از:
            </div>
            <div className="text-[#242424] leading-5 text-xs text-center font-normal flex flex-row ">
              <div className="ml-2 w-[35px]">
                <CountDownTimer
                  startTimer={startTimer}
                  setEnablePhoneSend={setEnablePhoneSend}
                />
              </div>
              دقیقه دیگر
            </div>
          </div>

          <div className="w-[80%] pl-3 mb-1 relative  ">
            <input
              name="loginCode"
              disabled={disabledCodeSend}
              value={formikLoginCode.values.loginCode}
              onChange={formikLoginCode.handleChange}
              onBlur={formikLoginCode.handleBlur}
              type="text"
              className={
                (formikLoginCode.values.loginCode.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border rounded-2xl bg-white input-label-pos" +
                " " +
                `${
                  formikLoginCode.errors.loginCode &&
                  formikLoginCode.touched.loginCode
                    ? " border-[#DF2040] "
                    : "  border-gray-300  "
                }` +
                " " +
                `${disabledCodeSend ? " cursor-not-allowed " : "  "}`
              }
            />
            <label className=" absolute top-3 right-4  pointer-events-none  text-[#525252]">
              کد تایید
            </label>

            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formikLoginCode.errors.loginCode &&
                  formikLoginCode.touched.loginCode
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formikLoginCode.errors.loginCode}
            </div>

            {/* <div className={"text-[#525252] text-xs pt-1  flex flex-row gap-1 items-center cursor-pointer" + " " + `${disabledCodeSend ? " opacity-100 " : " opacity-0"}`}>
                <DangerIcon color={"#525252"} />
                {"لطفاً ابتدا شماره تلفن همراه خود را وارد کنید."}
              </div> */}
          </div>

          <div className="w-full flex flex-col  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-3 items-center ">
            <button
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
        </div>
      </div>
    </>
  );
}
