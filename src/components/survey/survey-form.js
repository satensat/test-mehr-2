"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TickSquare from "@/icon2/TickSquare";
import DangerIcon from "@/icon2/DangerIcon";
import PersonalInformation from "./PersonalInformation";
import SurvayFormContent from "./SurvayFormContent";
import stylesForm from "./survey-form.module.css";
import TickCircle from "@/icon2/TickCircle";
import Image from "next/image";

export default function SurveyFormPage() {
  // ----------------------------------  active tab  ----------------------

  const [activeTab, setActiveTab] = useState("CODE");

  // ----------------------------------        reception_code   imei   serial_number send  ----------------------

  const [enableSend, setEnableSend] = useState(true);

  const formikCode = useFormik({
    initialValues: {
      reception_code: "",
      imei: "",
      serial_number: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({}),
  });

  const formik = useFormik({
    initialValues: {
      gender: "",
      age: "",
      course: "",
      question_1: "",
      question_2: "",
      question_3: "",
      question_4: "",
      question_5: "",
      question_6: "",
      question_7: "",
      question_8: "",
      question_9: "",
      question_9_detail: "",
      question_10: "",
      question_11: "",
      question_12: "",
      question_13: "",
      question_14: "",
      question_15: "",
      question_16: "",
      question_17: "",
      question_18: "",
      question_19: "",
      question_19_detail: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({}),
  });

  const [dataQuestions, setDataQuestions] = useState([]);

  useEffect(() => {
    try {
      const res = fetch(
        `http://192.168.10.195:8090/v1/api/after/sale/upload/documents/`
      )
        .then((response) =>
          response
            .json()
            .then((data) => ({ status: response.status, body: data }))
        )
        .then((detail) => {
          // console.log(detail.status);
          console.log(detail);
          if (detail.status == "400") {

            // const featureEntries = Object.entries(detail.body);
            // {
            //   featureEntries.map((item) => setMessage(item[1]));
            // }
          }
          if (detail.status == "201") {
            setDataQuestions();
          }
          // window.scrollTo({
          //   top: 0,
          //   left: 0,
          //   behavior: "smooth",
          // });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className={
        "  md:bg-mainGreen1 text-[#F7F7F7]  rounded-3xl md:mt-5 relative -z-[0] overflow-clip   "
      }
    >
      <div className=" -z-0 top-0 inset-x-0 sticky  w-full h-0 hidden md:flex    ">
        <div className="w-full  relative h-[100vh] overflow-hidden">
          <div
            className={
              "hidden md:flex  w-full h-[100vh] absolute  top-0 inset-x-0    " +
              stylesForm.backgroundImage
            }
          ></div>
          <div className={"  absolute top-0 left-0 -z-0 "}>
            <Image
              src={
                "/forms/survey/top-view-assortment-with-different-feelings2---1.svg"
              }
              alt={"survey"}
              width={481}
              height={481}
              className={"  " + " "}
            />
          </div>
          <div className={"  absolute bottom-0 right-0 -z-0 "}>
            <Image
              src={
                "/forms/survey/top-view-assortment-with-different-feelings1-1.svg"
              }
              alt={"survey"}
              width={804}
              height={804}
              className={" " + " "}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex w-full flex-row items-center justify-center  z-2 top-0 inset-x-0 sticky  md:px-3 md:py-4  ">
        <div className="w-full md:w-[50%]  flex flex-col items-center gap-5 ">
          <div className="w-full  bg-[#FDFDFD] rounded-b-3xl md:rounded-3xl shadow-G1   p-3 text-[#000]">
            <p>سریال دستگاه یا کد پذیرش خود را وارد کنید.</p>
            <div className=" border border-[#808080] flex rounded-xl  max-w-fit mx-auto overflow-hidden my-4">
              <div
                className={
                  "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold " +
                  (activeTab == "CODE"
                    ? "  bg-mainGreen1 text-white  "
                    : "  text-[#525252]  ")
                }
                tab_sub="CODE"
                onClick={() => setActiveTab("CODE")}
              >
                {activeTab == "CODE" ? <TickSquare /> : null}
                کد پذیرش
              </div>
              <div
                className={
                  "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold border-x  border-[#808080]  " +
                  (activeTab == "PHONE"
                    ? "  bg-mainGreen1 text-white  "
                    : "  text-[#525252] ")
                }
                tab_sub="PHONE"
                onClick={() => setActiveTab("PHONE")}
              >
                {activeTab == "PHONE" ? <TickSquare /> : null}
                سریال موبایل
              </div>
              <div
                className={
                  "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold " +
                  (activeTab == "LAPTOP"
                    ? " bg-mainGreen1 text-white  "
                    : "  text-[#525252] ")
                }
                tab_sub="LAPTOP"
                onClick={() => setActiveTab("LAPTOP")}
              >
                {activeTab == "LAPTOP" ? <TickSquare /> : null}
                سریال لپتاپ
              </div>
            </div>
            {activeTab == "CODE" ? (
              <div className="group md:w-[40%] mb-2 relative mx-auto mt-8">
                <input
                  value={formikCode.values.reception_code}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  type="text"
                  name={`reception_code`}
                  placeholder="کد 5 رقمی پذیرش"
                  className={
                    (true > 0 ? "  " : " ") +
                    " w-full px-4 placeholder-[#ABABAB]  h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                  }
                />
                {/* formikCode.values.reception_code.length > 0  */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
                    " " +
                    `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                  }
                >
                  کد یکتای پذیرش
                </label>
                {!enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${!enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    زیمآ‌تیقفوم مایپ نتم
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.reception_code &&
                        formikCode.touched.reception_code
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.reception_code}
                  </div>
                )}
              </div>
            ) : null}

            {activeTab == "PHONE" ? (
              <div className="group md:w-[40%] mb-2 relative mx-auto mt-8">
                <input
                  value={formikCode.values.imei}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  type="text"
                  placeholder="شماره 15 رقمی IMEI1"
                  name={`imei`}
                  className={
                    (true ? "   " : " ") +
                    " w-full px-4 placeholder-[#ABABAB]  h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                  }
                />
                {/* formikCode.values.imei.length > 0 */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl px-1 pointer-events-none group-focus-within:text-xs  bg-white  group-focus-within:-translate-y-[20px] " +
                    " " +
                    `${true ? " text-xs  -translate-y-[20px]  " : " text-sm "}`
                  }
                >
                  شماره IMEI1
                </label>
                {!enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${!enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    زیمآ‌تیقفوم مایپ نتم
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.imei && formikCode.touched.imei
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.imei}
                  </div>
                )}
              </div>
            ) : null}

            {activeTab == "LAPTOP" ? (
              <div className="group md:w-[40%] mb-2 relative mx-auto mt-8">
                <input
                  value={formikCode.values.serial_number}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  type="text"
                  placeholder="شماره سریال نوشته شده بر روی دستگاه"
                  name={`serial_number`}
                  className={
                    (true ? "  " : " ") +
                    " w-full px-4 placeholder-[#ABABAB] h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                  }
                />
                {/* formikCode.values.serial_number.length > 0 */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
                    " " +
                    `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                  }
                >
                  شماره سریال دستگاه
                </label>
                {!enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${!enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    زیمآ‌تیقفوم مایپ نتم
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.serial_number &&
                        formikCode.touched.serial_number
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.serial_number}
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <PersonalInformation formik={formik} />
          <SurvayFormContent formik={formik} />
        </div>
      </div>
    </div>
  );
}
