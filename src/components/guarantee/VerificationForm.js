"use client";
import ToastBox from "../global/toast";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/arrow-down";
import styles from "./form.module.css";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CountDownTimer from "./CountDownTimer";

const validationSchema = yup.object({
  mobileNumber: yup.string().trim().required(" شماره همراه را وارد کنید."),
});
const validationSchemaLoginCode = yup.object({
  loginCode: yup.string().trim().required(" کد ورود را وارد کنید."),
});
export default function VerificationForm() {
  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/contact/to/us/`, {
          method: "POST",
          body: JSON.stringify({
            subject: values.subject,
            name: values.name,
            email_address: values.email,
            phone_number: values.phone,
            description: values.description,
          }),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail.status);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
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
      loginCode: "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/contact/to/us/`, {
          method: "POST",
          body: JSON.stringify({
            subject: values.subject,
            name: values.name,
            email_address: values.email,
            phone_number: values.phone,
            description: values.description,
          }),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail.status);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
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
    <div className=" flex flex-col pb-3">
      {/* before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] */}
      <div className="py-3 leading-6 font-bold text-base ">احراز هویت</div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col mb-6">
          <div className="w-full flex flex-row items-center justify-between ">
            <div className="flex-grow pl-3  relative  ">
              <input
                name="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className={
                  (formik.values.mobileNumber.length > 0
                    ? " input-label-pos-active "
                    : " ") +
                  " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                }
              />
              <label className=" absolute top-3 right-4  pointer-events-none">
                شماره همراه
              </label>
            </div>
            <button className="transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] ">
              دریافت کد ورود
            </button>
          </div>
          {formik.errors.mobileNumber && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.mobileNumber}
            </div>
          )}
        </div>
        <div className="pb-4 flex flex-col items-center  ">
          <div className="text-[#808080] leading-4 text-[10px] text-center font-bold ">
            دریافت مجدد پس از:
          </div>
          <div className="text-[#242424] leading-5 text-xs text-center font-normal flex flex-row ">
            <div className="ml-2 w-[35px]">
              <CountDownTimer />
            </div>


            دقیقه دیگر

          </div>
        </div>
        <div className="w-[80%] pl-3 mb-6 relative  ">
          <input
            name="loginCode"
            value={formikLoginCode.values.loginCode}
            onChange={formikLoginCode.handleChange}
            onBlur={formikLoginCode.handleBlur}
            type="text"
            className={
              (formikLoginCode.values.loginCode.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label className=" absolute top-3 right-4  pointer-events-none">
            کد ورود
          </label>
          {formikLoginCode.errors.loginCode && (
            <div className="text-mainRed text-xs pt-1 ">
              {formikLoginCode.errors.loginCode}
            </div>
          )}
        </div>

          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] ">
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
          </button>

      </div>
    </div>
  );
}
