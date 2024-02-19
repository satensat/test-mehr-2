"use client";
import CloseModal from "@/icon/CloseModal";
import InfoCircleIcon from "@/icon2/InfoCircle";
import Image from "next/image";
import styles from "./loginModal.module.css";
import FormPhoneOrEmail from "./FormPhoneOrEmail";
import FormLoginCode from "./FormLoginCode";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .trim()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required(" شماره تلفن همراه را وارد کنید."),
});

export default function LoginModal({  disabledCodeSend,
  setDisabledCodeSend,}) {
  // ----------------------------------     open modal        ----------------------

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // ----------------------------------disabled code send button ----------------------
  // getted from props

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
    <>
      <button
        onClick={handleModalOpen}
        // hover:bg-[#13625c] #f57600
        className="w-fit group transition ease-in-out duration-500 flex flex-row items-center  cursor-pointer my-3  px-4 py-2 rounded-xl bg-[#f5a800]    hover:filter hover:invert-1  hover:bg-[#13625c]  text-[#000] hover:text-white"
      >
        <div className="text-center text-base  font-bold leading-6 ">
          ورود / ثبت نام
        </div>
      </button>
      {modalOpen && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-40 bg-[#000000] "
          onClick={handleModalClose}
        ></div>
      )}
      <div
        className={
          "  ease-in-out duration-300  fixed   z-40 inset-x-0  top-0 -translate-y-full w-11/12  md:w-[488px]   transition-all opacity-0  bg-[#FDFDFD] rounded-3xl  mx-auto my-auto  " +
          // h-[508px]
          " " +
          `${
            modalOpen
              ? "translate-y-[30px]  opacity-100 "
              : " pointer-events-none  "
          }`
        }
      >
        <div className="flex flex-col  ">
          <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] pt-3 px-3 ">
            <div className="w-full flex flex-row  items-center pb-3  ">
              <div className="text-center text-base not-italic font-bold leading-6 text-[#3B3B3B]  ">
                ورود / ایجاد حساب کاربری
              </div>
              <button
                className="transition ease-in-out duration-500 hover:invert hover:brightness-200 cursor-pointer p-2 mr-auto"
                onClick={handleModalClose}
              >
                <CloseModal />
              </button>
            </div>
          </div>
          <div
            className={
              "w-full flex flex-row justify-center items-center   " +
              styles.backgroundImage
            }
          >
            <Image
              src={"/Logo-big.svg"}
              width={215}
              height={128}
              alt={"logo mehr trade"}
            />
          </div>
          <div className=" w-11/12  md:w-[488px]     overflow-y-auto p-3">
            <div className="text-[#525252] leading-6 text-sm font-normal py-3 ">
              شماره همراه یا ایمیل خود را وارد نموده سپس کد پیامک شده را وارد
              کنید.
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
    </>
  );
}
