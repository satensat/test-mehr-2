"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./design.module.css";
import styledesign from "./loginModal.module.css";
import ArrowDownIcon from "@/icon/ArrowDown";
import FormLoginCode from "./FormLoginCode";
import FormPhoneOrEmail from "./FormPhoneOrEmail";
import Image from "next/image";
import RightArrowBack from "@/icon2/RightArrowBack";

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .trim()
    .required("شماره تلفن همراه یا ایمیل را وارد کنید.")
    .test(
      "contact",
      "شماره تلفن همراه یا ایمیل را صحیح وارد کنید.",
      (value) => {
        // Check if value is a valid phone number or email address
        // const phoneRegex = /^[0-9]{10}$/; ///not iran
        const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return iranPhoneRegex.test(value) || emailRegex.test(value);
      }
    ),
});

const validationSchemaLoginCode = yup.object({
  code: yup
    .string()
    .matches(/^\d+$/, "کد ورود را به درستی کنید.")
    .min(6, "کد ورود باید دقیقاً 6 کاراکتر باشد.")
    .max(6, "کد ورود باید دقیقاً 6 کاراکتر باشد.")
    .required("کد را وارد کنید."),
});
export default function LoginFullPage() {
  ///-----------------------------------------step object

  // const stepLogin = {
  //   step_one: {
  //     name: "phone or email send",
  //     valueStep: "1",
  //   },
  //   step_two: {
  //     name: "code send",
  //     valueStep: "2",
  //   },
  //   step_three: {
  //     name: "end loged in",
  //     valueStep: "3",
  //   },
  // };

  const stepLogin = useMemo(
    () => ({
      step_one: {
        name: "phone or email send",
        valueStep: "1",
      },
      step_two: {
        name: "code send",
        valueStep: "2",
      },
      step_three: {
        name: "end loged in",
        valueStep: "3",
      },
    }),
    []
  );
  const [allSteps, setAllSteps] = useState(true);
  const [currentStep, setCurrentStep] = useState(true);

  useEffect(() => {
    setAllSteps(stepLogin);
    setCurrentStep(stepLogin.step_three);
  }, [stepLogin]);
  // ----------------------------------disabled code send button ----------------------
  // getted from props
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);
  // ----------------------------------  timer start   ----------------------

  const [startTimer, setStartTimer] = useState(false);
  // ----------------------------------  phone send or email send loader ----------------------

  const [loadingPhoneOrEmailSend, setLoadingPhoneOrEmailSend] = useState(false);

  // ----------------------------------  phone send or email send loader ----------------------

  const [loadingCodeSend, setLoadingCodeSend] = useState(false);

  // ----------------------------------  phone send or email send loader ----------------------

  const [timerAgainStart, setTimerAgainStart] = useState(false);

  // ----------------------------------  phone send or email send loader ----------------------

  const [doneAllSteps, setDoneAllSteps] = useState(true);

  // ----------------------------------  formik for phone number or email address  ----------------------

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },
    onSubmit: (values) => {
      setStartTimer(true);
      setLoadingPhoneOrEmailSend(true);
      setCurrentStep(stepLogin.step_two);
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
      //         setStartTimer(true);
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

  const sendCodeAgain = () => {
    setStartTimer(true);
    setTimerAgainStart(false);
  };

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
    <div className={"w-full h-[100vh] py-12 " + styles.container}>
      <div className="flex flex-col gap-[10px] mx-auto md:w-[30%] ">
        {!doneAllSteps && (
          <button className="group w-fit transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 bg-[#fff] hover:text-white gap-1 hover:bg-mainYellow">
            <div className="transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert rotate-[-90deg] ">
              <ArrowDownIcon color={"#13625C"} width={"16"} height={"16"} />
            </div>
            بازگشت
          </button>
        )}
        <div
          className={
            "  ease-in-out duration-300    transition-all   bg-[#FDFDFD] rounded-3xl  flex flex-col "
          }
        >
          {!doneAllSteps && (
            <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] pt-3 px-3 ">
              <div className="w-full flex flex-row  items-center pb-3  ">
                <button className="cursor-pointer p-2">
                  <RightArrowBack />
                </button>
                <div className="w-full text-center text-base not-italic font-bold leading-6 text-[#3B3B3B] ml-[52px] ">
                  ورود / ایجاد حساب کاربری
                </div>
              </div>
            </div>
          )}
          <div
            className={
              "w-full flex flex-col justify-center items-center   " +
              styledesign.backgroundImage
            }
          >
            <div
              className={"w-full flex flex-row justify-center items-center   "}
            >
              <Image
                src={"/login/Frame1537.svg"}
                width={215}
                height={128}
                alt={"logo mehrtrade"}
                className="w-[75px]  -scale-x-[1] "
              />
              <Image
                src={"/Logo-big.svg"}
                width={215}
                height={128}
                alt={"logo mehrtrade"}
              />
              <Image
                src={"/login/Frame1537.svg"}
                width={215}
                height={128}
                alt={"logo mehrtrade"}
                className="w-[75px]"
              />
            </div>
            {currentStep.valueStep === "1" && (
              <div className="flex flex-col w-[80%] px-3">
                <div className="text-[#525252] leading-6 text-sm font-bold pb-3 text-center ">
                  شماره همراه یا ایمیل خود را وارد کنید.
                </div>
                <FormPhoneOrEmail
                  formik={formik}
                  loadingPhoneOrEmailSend={loadingPhoneOrEmailSend}
                />
              </div>
            )}

            {currentStep.valueStep === "2" && (
              <div className="flex flex-col w-[80%] px-3">
                <div className="text-[#525252] leading-6 text-sm font-bold pb-1 text-center ">
                  کد ارسال شده را وارد کنید.
                </div>
                <div className="text-[#525252] leading-6 text-sm font-normal pb-3 text-center ">
                  کد برای {formik.values.phone_number} ارسال شده است.
                </div>
                <FormLoginCode
                  formik={formikLoginCode}
                  loadingCodeSend={loadingCodeSend}
                  startTimer={startTimer}
                  setStartTimer={setStartTimer}
                  timerAgainStart={timerAgainStart}
                  setTimerAgainStart={setTimerAgainStart}
                  sendCodeAgain={sendCodeAgain}
                />
              </div>
            )}

            {currentStep.valueStep === "3" && (
              <div className="flex flex-col w-[80%] px-3">
                <div className="text-[#007f70] leading-8 text-lg font-extrabold pb-3 text-center ">
                  کاربر عزیز خوش‌آمدید!
                </div>
                <div className="text-[#525252] leading-6 text-sm font-normal pb-3 text-center ">
                  تا چند ثانیه دیگر به صفحه مورد نظر منتقل میشوید...
                </div>
              </div>
            )}
          </div>

          {!doneAllSteps && (
            <div className="p-3 flex flex-col items-center before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6]">
              <div className="flex flex-row items-center justify-center  gap-8 ">
                <div className="text-[#525252] leading-5 text-xs font-normal py-3">
                  ایجاد حساب کاربری به معنای پذیرش{" "}
                  <span className="text-[#1B887F] underline   ">
                    قوانین و مقررات
                  </span>{" "}
                  و{" "}
                  <span className="text-[#1B887F] underline   ">
                    حریم خصوصی
                  </span>{" "}
                  شرکت خدماتی تجاری مهر سرمستان توسط کاربر میباشد.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
