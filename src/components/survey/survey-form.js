"use client";

import SurveyIcon from "@/icon/surveyNote";
import InfoCircleIcon from "@/icon2/InfoCircle";
import style from "./survey.module.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TickSquare from "@/icon2/TickSquare";
import DangerIcon from "@/icon2/DangerIcon";
import PersonalInformation from "./PersonalInformation";
import SurvayContent from "./SurvayContent";
export default function SurveyFormPage() {
  const formik = useFormik({
    initialValues: {
      reception_code: "",
      imei: "",
      serial_number: "",
      gender: "",
      age:"",
      course:"",
      question_1:"",
      question_2:"",
      question_3:"",
      question_4:"",
      question_5:"",
      question_6:"",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({}),
  });

  const [activeTab, setActiveTab] = useState("CODE");
  return (
    <div className="bg-mainGreen1 text-[#F7F7F7] md:px-3 md:py-4 rounded-3xl md:mt-5 flex flex-row items-center justify-center">
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
                value={formik.values.reception_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                name={`reception_code`}
                placeholder="کد 5 رقمی پذیرش"
                className={
                  (true > 0 ? "  " : " ") +
                  " w-full px-4 placeholder-[#ABABAB]  h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                }
              />
              {/* formik.values.reception_code.length > 0  */}
              <label
                className={
                  " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
                  " " +
                  `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                }
              >
                کد یکتای پذیرش
              </label>
              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formik.errors.reception_code &&
                    formik.touched.reception_code
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formik.errors.reception_code}
              </div>
            </div>
          ) : null}

          {activeTab == "PHONE" ? (
            <div className="group md:w-[40%] mb-2 relative mx-auto mt-8">
              <input
                value={formik.values.imei}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="شماره 15 رقمی IMEI1"
                name={`imei`}
                className={
                  (true ? "   " : " ") +
                  " w-full px-4 placeholder-[#ABABAB]  h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                }
              />
              {/* formik.values.imei.length > 0 */}
              <label
                className={
                  " absolute top-3 right-4 rounded-2xl px-1 pointer-events-none group-focus-within:text-xs  bg-white  group-focus-within:-translate-y-[20px] " +
                  " " +
                  `${true ? " text-xs  -translate-y-[20px]  " : " text-sm "}`
                }
              >
                شماره IMEI1
              </label>
              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formik.errors.imei && formik.touched.imei
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formik.errors.imei}
              </div>
            </div>
          ) : null}

          {activeTab == "LAPTOP" ? (
            <div className="group md:w-[40%] mb-2 relative mx-auto mt-8">
              <input
                value={formik.values.serial_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="شماره سریال نوشته شده بر روی دستگاه"
                name={`serial_number`}
                className={
                  (true ? "  " : " ") +
                  " w-full px-4 placeholder-[#ABABAB] h-10 resize-none  border border-gray-300 rounded-2xl bg-white "
                }
              />
              {/* formik.values.serial_number.length > 0 */}
              <label
                className={
                  " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
                  " " +
                  `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                }
              >
                شماره سریال دستگاه
              </label>
              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formik.errors.serial_number && formik.touched.serial_number
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formik.errors.serial_number}
              </div>
            </div>
          ) : null}
        </div>
        <PersonalInformation formik={formik} />
        <SurvayContent  formik={formik}/>
      </div>
    </div>
  );
}
