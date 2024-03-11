"use client"
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./design.module.css";
import styledesign from "./loginModal.module.css"
import ArrowDownIcon from "@/icon/ArrowDown";
import FormLoginCode from "./FormLoginCode";
import FormPhoneOrEmail from "./FormPhoneOrEmail";
import Image from "next/image";




const validationSchema = yup.object({
    phone_number: yup
      .string()
      .trim()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
      .required(" شماره تلفن همراه را وارد کنید."),
  });
export default function LoginFullPage() {


    


  // ----------------------------------disabled code send button ----------------------
  // getted from props
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);
  // ----------------------------------  timer start   ----------------------

  const [startTimer, setsStartTimer] = useState(false);
  // ----------------------------------  phone send or email send  ----------------------

  const [enablePhoneSend, setEnablePhoneSend] = useState(true);
  // ----------------------------------  formik  ----------------------

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },
    onSubmit: (values) => {
      setEnablePhoneSend(false);
      setsStartTimer(true);
      setDisabledCodeSend(false);
      // try {
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/applicators/register/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         phone_number: values.phone_number,
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
      //       console.log(detail);
      //       if (detail.status == "400") {
      //         // setToast(true);
      //         // const featureEntries = Object.entries(detail.body);
      //         // {
      //         //   featureEntries.map((item) => setMessage(item[1]));
      //         // }
      //         // processFail(detail.body.phone_number)
      //         processFail("شماره تلفن همراه ثبت نشد.")
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         // setToast(true);
      //         // setMessage({
      //         //   type: "success",
      //         //   content:
      //         //     "شماره تلفن همراه با موفقیت ثبت شد، کد تایید برای شما از طریق پیامک ارسال خواهد شد.",
      //         // });

      //         setEnablePhoneSend(false);
      //         setsStartTimer(true);
      //         setDisabledCodeSend(false);
      //         processDone(
      //           "شماره تلفن همراه با موفقیت ثبت شد، کد تایید برای شما از طریق پیامک ارسال خواهد شد."
      //         );
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema,
  });

  return (
    <div className={"w-full h-[100vh] py-12 " + styles.container}>
      <div className="flex flex-col gap-[10px] mx-auto w-[50%] ">
        <button className="group w-fit transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 bg-[#fff] hover:text-white gap-1 ">
          <div className="transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert rotate-[-90deg] ">
            <ArrowDownIcon color={"#13625C"} width={"16"} height={"16"} />
          </div>
          بازگشت
        </button>
        <div
        className={
          "  ease-in-out duration-300        transition-all   bg-[#FDFDFD] rounded-3xl   " 
        }
      >
        <div className="flex flex-col  ">
          <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] pt-3 px-3 ">
            <div className="w-full flex flex-row  items-center pb-3  ">
              <div className="w-full text-center text-base not-italic font-bold leading-6 text-[#3B3B3B]  ">
                ورود / ایجاد حساب کاربری
              </div>

            </div>
          </div>
          <div
            className={
              "w-full flex flex-col justify-center items-center   " +
              styledesign.backgroundImage
            }
          >
            <Image
              src={"/Logo-big.svg"}
              width={215}
              height={128}
              alt={"logo mehr trade"}
            />
         
          <div className="     overflow-y-auto p-3">
            <div className="text-[#525252] leading-6 text-sm font-bold py-3 text-center ">
            شماره همراه یا ایمیل خود را وارد کنید.
            </div>
            <FormPhoneOrEmail
              formik={formik}
              disabledCodeSend={disabledCodeSend}
              setDisabledCodeSend={setDisabledCodeSend}
              enablePhoneSend={enablePhoneSend}
              setEnablePhoneSend={setEnablePhoneSend}
              startTimer={startTimer}
              setsStartTimer={setsStartTimer}
            />
          </div>
          </div>
          <div className="p-3 flex flex-col items-center before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6]">
            <FormLoginCode
              formik={formik}
              disabledCodeSend={disabledCodeSend}
              setDisabledCodeSend={setDisabledCodeSend}
              enablePhoneSend={enablePhoneSend}
              setEnablePhoneSend={setEnablePhoneSend}
              startTimer={startTimer}
              setsStartTimer={setsStartTimer}
            />
            <div className="flex flex-row items-center justify-center  gap-8 ">
              <div className="text-[#525252] leading-5 text-xs font-normal py-3">
                ایجاد حساب کاربری به معنای پذیرش{" "}
                <span className="text-[#1B887F] underline   ">
                  قوانین و مقررات
                </span>{" "}
                و{" "}
                <span className="text-[#1B887F] underline   ">حریم خصوصی</span>{" "}
                شرکت خدماتی تجاری مهر سرمستان توسط کاربر میباشد.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
