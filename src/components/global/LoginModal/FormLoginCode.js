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

const validationSchemaLoginCode = yup.object({
  code: yup.string().trim().required(" کد ورود را وارد کنید."),
});

export default function FormLoginCode({ formik }) {
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);

  const formikLoginCode = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      setMainData({
        phone_number: formik.values.phone_number,
        code: values.code,
      });
      processDone("احراز هویت با موفقیت انجام شد.");
      verificationToFirstFormDone();
      // try {
      //   console.log({
      //     phone_number: formik.values.phone_number,
      //     code: values.code,
      //   });
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/applicators/confirm/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         phone_number: formik.values.phone_number,
      //         code: values.code,
      //       }),
      //       headers: {
      //         "content-type": "application/json",
      //       },
      //     }
      //   )
      //     .then((response) =>
      //       response
      //         .json()
      //         .then((data) => ({ status: response.status, body: data }))
      //     )
      //     .then((detail) => {
      //       console.log(detail.status);
      //       console.log(detail.body);
      //       if (detail.status == "400") {
      //         // setToast(true);
      //         if (detail.body.phone_number) {
      //           // setToast(true);
      //           // setMessage({
      //           //   type: "danger",
      //           //   content: detail.body.phone_number,
      //           // });
      //           processFail(detail.body.phone_number);
      //         }
      //         if (detail.body.code) {
      //           // setToast(true);
      //           // setMessage({
      //           //   type: "danger",
      //           //   content: detail.body.code,
      //           // });
      //           processFail(detail.body.code);
      //         }
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         // setToast(true);
      //         // setMessage({
      //         //   type: "success",
      //         //   content: "احراز هویت با موفقیت انجام شد.",
      //         // });
      //
      //         processDone("احراز هویت با موفقیت انجام شد.");
      //         verificationToFirstFormDone();
      //         setMainData({
      //           phone_number: formik.values.phone_number,
      //           code: values.code,
      //         });
      //         // if(detail.body.phone_number===formik.values.phone_number){
      //         //   setMainData({
      //         //     ...detail.body
      //         //   });
      //         // }else{
      //         //   setMainData({
      //         //       phone_number: formik.values.phone_number,
      //         //       code: values.code,
      //         //   });
      //         // }
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema: validationSchemaLoginCode,
  });

  return (
    <form className="flex flex-col items-center justify-center w-full mt-3">
      <div className="w-[80%]  relative  ">
        <input
          name="code"
          disabled={disabledCodeSend}
          value={formikLoginCode.values.code}
          onChange={formikLoginCode.handleChange}
          onBlur={formikLoginCode.handleBlur}
          placeholder={
            // (
            //  formikLoginCode.values.code.length > 0 &&
            // disabledCodeSend &&
            // formikLoginCode.touched.code)
            disabledCodeSend ? "" : "کد پیامک شده را وارد نمایید."
          }
          type="text"
          className={
            (formikLoginCode.values.code.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4   h-10 resize-none  border rounded-2xl bg-white input-label-pos" +
            " " +
            `${
              formikLoginCode.errors.code && formikLoginCode.touched.code
                ? " border-[#DF2040] "
                : "  border-gray-300  "
            }` +
            " " +
            `${
              disabledCodeSend
                ? " cursor-not-allowed  placeholder-opacity-0  "
                : " placeholder-gray "
            }`
          }
        />
        <label
          className={
            "text-[#525252]   absolute  z-[3] top-3 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[22px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formikLoginCode.values?.code?.length > 0
                ? " text-xs  -translate-y-[22px]  px-[5px] bg-[#fff]  "
                : ""
            }` +
            " " +
            `${disabledCodeSend ? " text-[#ababab]  " : ""}`
          }
        >
          کد ورود یکبار مصرف
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
      {/* <div className="w-full flex flex-col  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-3 items-center ">
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
          }` +
          " " +
          `${loadingButton ? "pointer-events-none" : " "}`
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
        {loadingButton && <ButtonCoverLoader />}
      </button>
    </div> */}
    </form>
  );
}
