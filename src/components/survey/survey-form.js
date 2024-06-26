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
import ArrowOpinion from "@/icon/ArrowOpinion";
import ButtonCoverLoader from "./ButtonCoverLoader";
import ModalDoneSurvey from "./ModalDoneSurvey";
import CloseModal from "@/icon/CloseModal";

const validationSchemaCode = yup.object({
  activeTab: yup.string(),
  reception: yup.string().when("activeTab", {
    is: (activeTab) => activeTab === "RECEPTION",
    then: () =>
      yup
        .string()
        .min(5, "کد پذیرش 5 رقمی می باشد.")
        .max(5, "کد پذیرش 5 رقمی می باشد.")
        .required("کد پذیرش را وارد کنید."),
    otherwise: () => yup.string().notRequired(),
  }),
  mobile: yup.string().when("activeTab", {
    is: (activeTab) => activeTab === "MOBILE",
    then: () =>
      yup
        .string()
        .min(15, "15 رقم می باشد.")
        .max(15, "15 رقم می باشد.")
        .required("سریال موبایل را وارد کنید."),
    otherwise: () => yup.string().notRequired(),
  }),
  laptop: yup.string().when("activeTab", {
    is: (activeTab) => activeTab === "LAPTOP",
    then: () => yup.string().required("سریال لپتاپ را وارد کنید."),
    otherwise: () => yup.string().notRequired(),
  }),
});

const validationSchema = yup.object().shape({
  gender: yup.string().required("جنسیت را مشخص کنید."),
  age: yup.string().required("سن را مشخص کنید."),
  degree: yup.string().required("مدرک تحصیلی را مشخص کنید."),
  questions: yup.object().shape({
    question_1: yup.string().required("پاسخ سوال الزامی است."),
    question_1_qText: yup.string().required("متن سوال الزامی است."),
    question_2: yup.string().required("پاسخ سوال الزامی است."),
    question_2_qText: yup.string().required("متن سوال الزامی است."),
    question_3: yup.string().required("پاسخ سوال الزامی است."),
    question_3_qText: yup.string().required("متن سوال الزامی است."),
    question_4: yup.string().required("پاسخ سوال الزامی است."),
    question_4_qText: yup.string().required("متن سوال الزامی است."),
    question_5: yup.string().required("پاسخ سوال الزامی است."),
    question_5_qText: yup.string().required("متن سوال الزامی است."),
    question_6: yup.string().required("پاسخ سوال الزامی است."),
    question_6_qText: yup.string().required("متن سوال الزامی است."),
    question_7: yup.string().required("پاسخ سوال الزامی است."),
    question_7_qText: yup.string().required("متن سوال الزامی است."),
    question_8: yup.string().required("پاسخ سوال الزامی است."),
    question_8_qText: yup.string().required("متن سوال الزامی است."),
    /////////=============================================================================
    question_9: yup.string().when("question_8", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("پاسخ سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    question_9_qText: yup.string().when("question_8", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("متن سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    /////////=============================================================================
    question_9_detail: yup.string(),
    question_9_detail_qText: yup.string(),
    question_10: yup.string().required("پاسخ سوال الزامی است."),
    question_10_qText: yup.string().required("متن سوال الزامی است."),
    question_11: yup.string().required("پاسخ سوال الزامی است."),
    question_11_qText: yup.string().required("متن سوال الزامی است."),
    question_12: yup.string().required("پاسخ سوال الزامی است."),
    question_12_qText: yup.string().required("متن سوال الزامی است."),
    question_13: yup.string().required("پاسخ سوال الزامی است."),
    question_13_qText: yup.string().required("متن سوال الزامی است."),
    question_14: yup.string().required("پاسخ سوال الزامی است."),
    question_14_qText: yup.string().required("متن سوال الزامی است."),
    question_15: yup.string().required("پاسخ سوال الزامی است."),
    question_15_qText: yup.string().required("متن سوال الزامی است."),
    question_16: yup.string().required("پاسخ سوال الزامی است."),
    question_16_qText: yup.string().required("متن سوال الزامی است."),
    /////////=============================================================================
    question_17: yup.string().when("question_16", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("پاسخ سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    question_17_qText: yup.string().when("question_16", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("متن سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    question_18: yup.string().when("question_16", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("پاسخ سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    question_18_qText: yup.string().when("question_16", {
      is: (answer) => answer === "YES",
      then: () => yup.string().required("متن سوال الزامی است."),
      otherwise: () => yup.string().notRequired(),
    }),
    /////////=============================================================================
    question_19: yup.string().required("پاسخ سوال الزامی است."),
    question_19_qText: yup.string().required("متن سوال الزامی است."),
    question_19_detail: yup.string().required("پاسخ سوال الزامی است."),
    question_19_detail_qText: yup.string().required("متن سوال الزامی است."),
  }),
});
export default function SurveyFormPage() {
  // ----------------------------------  active tab  ----------------------

  const [activeTab, setActiveTab] = useState("RECEPTION");

  // ----------------------------------        reception_code   mobile   LAPTOP form to fill  ----------------------

  const [enableSend, setEnableSend] = useState(false);

  ////-------------------------------------------------- loading code send--------------------------
  const [loadingButton, setLoadingButton] = useState(false);
  ////-------------------------------------------------- loading survey send--------------------------
  const [loadingButtonSurvey, setLoadingButtonSurvey] = useState(false);

  ////-------------------------------------------------- modal   --------------------------

  const [modalOpen, setModalOpen] = useState(false);

  ////-------------------------------------------------- disable tabs   --------------------------

  const [disabledTabs, setDisabledTabs] = useState({
    reception: false,
    mobile: false,
    laptop: false,
  });

  ////--------------------------------------------------  formik for code   --------------------------
  function objectToArrayObj(selectObject) {
    const result = [];
    for (let i = 1; i <= 19; i++) {
      // console.log(selectObject[`question_${i}`]);
      if (selectObject[`question_${i}`]) {
        result.push({
          question: selectObject[`question_${i}_qText`],
          answer: selectObject[`question_${i}`],
        });
      }
    }
    return result;
  }

  const [courseInput, setCourseInput] = useState("");
  const formikCode = useFormik({
    initialValues: {
      activeTab: "RECEPTION",
      reception: "",
      mobile: "",
      laptop: "",
    },
    validationSchema: validationSchemaCode,
    onSubmit: async (values) => {
      setLoadingButton(true);
      // console.log(values);
      // console.log({
      //   code_type: activeTab,
      //   code: values[activeTab.toLowerCase()],
      // });

      try {
        const res = fetch(`http://192.168.10.198:8090/v1/api/survey/code/`, {
          method: "POST",
          body: JSON.stringify({
            code_type: activeTab,
            code: values[activeTab.toLowerCase()],
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
            console.log(detail);
            if (detail.status == "400") {
              const featureEntries = Object.entries(detail.body);
              // console.log(featureEntries[0]);
              {
                featureEntries.map((item) => {
                  toast.warn(item[1][0]);
                });
              }
              setLoadingButton(false);
            }
            if (detail.status == "200" || detail.status == "201") {
              toast.success("کد پذیرش یافت شد.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setEnableSend(true);
              setLoadingButton(false);
              if (activeTab === "MOBILE") {
                setDisabledTabs((prevState) => ({
                  ...prevState,
                  reception: true,
                  laptop: true,
                }));
              }
              if (activeTab === "reception") {
                setDisabledTabs((prevState) => ({
                  ...prevState,
                  mobile: true,
                  laptop: true,
                }));
              }
              if (activeTab === "LAPTOP") {
                setDisabledTabs((prevState) => ({
                  ...prevState,
                  reception: true,
                  mobile: true,
                }));
              }
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: validationSchemaCode,
  });

  /////----------------------------converting  object of questions to array of questions and answers for sending api

  function checkQuestionsData(obj) {
    let test = { ...obj };
    if (test.hasOwnProperty("question_8") && test["question_8"] === "NO") {
      delete test["question_9"];
      delete test["question_9_qText"];
      delete test["question_9_detail"];
      delete test["question_9_detail_qText"];
    }
    if (
      test.hasOwnProperty("question_8") &&
      test["question_8"] === "YES" &&
      (test["question_9"] === "4" || test["question_9"] === "5")
    ) {
      delete test["question_9_detail"];
      delete test["question_9_detail_qText"];
    }
    if (test.hasOwnProperty("question_16") && test["question_16"] === "NO") {
      delete test["question_18"];
      delete test["question_18_qText"];
      delete test["question_17"];
      delete test["question_17_qText"];
    }
    return test;
  }

  const formik = useFormik({
    initialValues: {
      gender: "",
      age: "",
      degree: "",
      questions: {
        question_1: "",
        question_10_qText: "",
        question_2: "",
        question_10_qText: "",
        question_3: "",
        question_10_qText: "",
        question_4: "",
        question_10_qText: "",
        question_5: "",
        question_10_qText: "",
        question_6: "",
        question_10_qText: "",
        question_7: "",
        question_10_qText: "",
        question_8: "",
        question_10_qText: "",
        question_9: "",
        question_10_qText: "",
        question_9_detail: "",
        question_10_qText: "",
        question_10: "",
        question_10_qText: "",
        question_11: "",
        question_10_qText: "",
        question_12: "",
        question_10_qText: "",
        question_13: "",
        question_10_qText: "",
        question_14: "",
        question_10_qText: "",
        question_15: "",
        question_10_qText: "",
        question_16: "",
        question_10_qText: "",
        question_17: "",
        question_10_qText: "",
        question_18: "",
        question_10_qText: "",
        question_19: "",
        question_10_qText: "",
        question_19_detail: "",
        question_10_qText: "",
      },
    },
    onSubmit: (values) => {
      const objectChecked = values.questions;

      ////--------------------------------------------------------------------------------- deleting empty fields
      const objQues = checkQuestionsData(objectChecked);
      ////---------------------------------------------------------------------------------  changing format to api needed format
      const arrayQues = objectToArrayObj(objQues);

      setLoadingButtonSurvey(true);
      // console.log({
      //   personal_information: {
      //     code_type: activeTab,
      //     code: formikCode.values[activeTab.toLowerCase()],
      //     age: values.age === "x" ? "" : values.age,
      //     gender: values.gender === "x" ? "" : values.gender,
      //     degree: values.degree === "x" ? "" : values.degree,
      //   },
      //   questions: arrayQues,
      // });

      try {
        const res = fetch(`http://192.168.10.198:8090/v1/api/survey/answer/`, {
          method: "POST",
          body: JSON.stringify({
            personal_information: {
              code_type: activeTab,
              code: formikCode.values[activeTab.toLowerCase()],
              age: values.age,
              gender: values.gender,
              degree: values.degree,
            },
            questions: arrayQues,
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
            console.log(detail);
            if (detail.status == "400") {
              const featureEntries = Object.entries(detail.body);
              // console.log(featureEntries[0]);
              {
                featureEntries.map((item) => {
                  toast.warn(item[1][0]);
                });
              }
              setLoadingButtonSurvey(false);
            }
            if (detail.status == "200" || detail.status == "201") {
              // toast.success("نظر شما با موفقیت ثبت شد.", {
              //   position: "top-center",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "light",
              // });
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setLoadingButtonSurvey(false);
              setModalOpen(true);
              setEnableSend(false);
              formik.resetForm();
              formikCode.resetForm();
              setCourseInput("");
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  return (
    <>
      <ModalDoneSurvey modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div
        className={
          " bg-[#FDFDFD] rounded-b-3xl md:rounded-3xl shadow-G1  md:bg-mainGreen1 text-[#F7F7F7]  md:mt-5 relative -z-[0] overflow-clip   "+ " "+stylesForm.containerFormGreen
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
            <div
              className={"  absolute top-0 left-0 -z-0 md:w-[40%] lg:w-fit "}
            >
              <Image
                src={
                  "/forms/survey/top-view-assortment-with-different-feelings2---1.svg"
                }
                alt={"survey"}
                width={420}
                height={420}
                className={"  " + " "}
              />
            </div>
            <div
              className={
                "  absolute bottom-0 -right-[20px] -z-0  md:w-[65%] lg:w-fit "
              }
            >
              <Image
                src={
                  "/forms/survey/top-view-assortment-with-different-feelings1-1.svg"
                }
                alt={"survey"}
                width={704}
                height={704}
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
            <form className="w-full  bg-[#FDFDFD] rounded-b-3xl md:rounded-3xl shadow-G1   p-3  text-[#000]">
              <p className="text-[#000]">
                سریال دستگاه یا کد پذیرش خود را وارد کنید.
              </p>
              <div className=" border border-[#808080] flex rounded-xl  max-w-fit mx-auto overflow-hidden my-4">
                <div
                  className={
                    "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold " +
                    (activeTab === "RECEPTION"
                      ? "  bg-mainGreen1 text-white  "
                      : "    ") +
                    (disabledTabs.reception === true
                      ? "   text-[#3B3B3B]  pointer-events-none  text-opacity-40 "
                      : "  text-[#525252]  ")
                  }
                  tab_sub="RECEPTION"
                  onClick={() => {
                    formikCode.setFieldValue("activeTab", "RECEPTION");
                    setActiveTab("RECEPTION");
                  }}
                >
                  {activeTab === "RECEPTION" ? <TickSquare /> : null}
                  کد پذیرش
                </div>
                <div
                  className={
                    "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold border-x  border-[#808080]  " +
                    (activeTab === "MOBILE"
                      ? "  bg-mainGreen1 text-white  "
                      : "   ") +
                    (disabledTabs.mobile === true
                      ? "   text-[#3B3B3B]  pointer-events-none  text-opacity-40 "
                      : "  text-[#525252]  ")
                  }
                  tab_sub="MOBILE"
                  onClick={() => {
                    setActiveTab("MOBILE");
                    formikCode.setFieldValue("activeTab", "MOBILE");
                  }}
                >
                  {activeTab === "MOBILE" ? <TickSquare /> : null}
                  سریال موبایل
                </div>
                <div
                  className={
                    "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold " +
                    (activeTab === "LAPTOP"
                      ? " bg-mainGreen1 text-white  "
                      : "   ") +
                    (disabledTabs.laptop === true
                      ? "   text-[#3B3B3B]  pointer-events-none  text-opacity-40 "
                      : "  text-[#525252]  ")
                  }
                  tab_sub="LAPTOP"
                  onClick={() => {
                    formikCode.setFieldValue("activeTab", "LAPTOP");
                    setActiveTab("LAPTOP");
                  }}
                >
                  {activeTab === "LAPTOP" ? <TickSquare /> : null}
                  سریال لپتاپ
                </div>
              </div>

              <div
                className={
                  "group md:w-[60%] max-w-[258px] mb-1 relative mx-auto mt-8   flex flex-col  " +
                  `${activeTab === "RECEPTION" ? " flex " : " hidden"}`
                }
              >
                <div
                  className={
                    "w-full   relative pr-4 border border-gray-300 rounded-2xl h-10 bg-white flex flex-row items-center   group-focus-within:outline-black group-focus-within:outline-2 group-focus-within:outline  group-focus-within:border-transparent    " +
                    "   " +
                    `${enableSend ? "  pl-2 " : " pl-4 "}`
                  }
                >
                  <input
                    value={formikCode.values.reception}
                    onChange={formikCode.handleChange}
                    onBlur={formikCode.handleBlur}
                    type="text"
                    name={`reception`}
                    placeholder="کد 5 رقمی پذیرش"
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full h-full  placeholder-gray border-none  resize-none  input-label-pos  focus-visible:outline-none focus-visible:ring-transparent  bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                    }
                  />
                  {enableSend && (
                    <button
                      onClick={() => {
                        formikCode.setFieldValue("reception", "");
                        setDisabledTabs({
                          mobile: false,
                          reception: false,
                          laptop: false,
                        });
                      }}
                      className="w-fit h-fit  cursor-pointer p-2 "
                    >
                      <CloseModal
                        color={"#ABABAB"}
                        width={"16"}
                        height={"16"}
                      />
                    </button>
                  )}
                </div>
                {/* <input
                  value={formikCode.values.reception}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  type="text"
                  name={`reception`}
                  placeholder="کد 5 رقمی پذیرش"
                  className={
                    (true > 0 ? "  " : " ") +
                    " w-full px-4  h-10 resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                  }
                /> */}
                {/* placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus-within:placeholder:-translate-x-2 */}
                {/* formikCode.values.reception.length > 0  */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
                    " " +
                    `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                  }
                >
                  کد یکتای پذیرش
                </label>
                {enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    متن پیام موفقیت آمیز بود
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed font-costumFaNum text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.reception &&
                        formikCode.touched.reception
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.reception}
                  </div>
                )}
              </div>

              <div
                className={
                  "group md:w-[60%] max-w-[258px] mb-1 relative mx-auto mt-8  flex flex-col  " +
                  `${activeTab == "MOBILE" ? " flex " : " hidden"}`
                }
              >
                <div
                  className={
                    "w-full   relative pr-4 border border-gray-300 rounded-2xl h-10 bg-white flex flex-row items-center   group-focus-within:outline-black group-focus-within:outline-2 group-focus-within:outline  group-focus-within:border-transparent    " +
                    "   " +
                    `${enableSend ? "  pl-2 " : " pl-4 "}`
                  }
                >
                  <input
                    value={formikCode.values.mobile}
                    onChange={formikCode.handleChange}
                    onBlur={formikCode.handleBlur}
                    name="mobile"
                    type="text"
                    placeholder="شماره 15 رقمی IMEI1"
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full h-full  placeholder-gray border-none  resize-none  input-label-pos  focus-visible:outline-none focus-visible:ring-transparent  bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                    }
                  />
                  {enableSend && (
                    <button
                      className="w-fit h-fit  cursor-pointer p-2 "
                      onClick={() => {
                        formikCode.setFieldValue("mobile", "");
                        setDisabledTabs({
                          mobile: false,
                          reception: false,
                          laptop: false,
                        });
                      }}
                    >
                      <CloseModal
                        color={"#ABABAB"}
                        width={"16"}
                        height={"16"}
                      />
                    </button>
                  )}
                </div>
                {/* <input
                  value={formikCode.values.mobile}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  type="text"
                  placeholder="شماره 15 رقمی IMEI1"
                  name="mobile"
                  className={
                    (true ? "   " : " ") +
                    " w-full px-4  h-10 resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                  }
                /> */}
                {/* formikCode.values.mobile.length > 0 */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl px-1 pointer-events-none group-focus-within:text-xs  bg-white  group-focus-within:-translate-y-[20px] text-[#525252] " +
                    " " +
                    `${true ? " text-xs  -translate-y-[20px]  " : " text-sm "}`
                  }
                >
                  شماره IMEI1
                </label>
                {enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    متن پیام موفقیت آمیز بود
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed font-costumFaNum text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.mobile && formikCode.touched.mobile
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.mobile}
                  </div>
                )}
              </div>
              <div
                className={
                  "group md:w-[60%] max-w-[258px] mb-1 relative mx-auto mt-8  flex flex-col " +
                  `${activeTab == "LAPTOP" ? " flex " : " hidden"}`
                }
              >
                <div
                  className={
                    "w-full   relative pr-4 border border-gray-300 rounded-2xl h-10 bg-white flex flex-row items-center   group-focus-within:outline-black group-focus-within:outline-2 group-focus-within:outline  group-focus-within:border-transparent    " +
                    "   " +
                    `${enableSend ? "  pl-2 " : " pl-4 "}`
                  }
                >
                  <input
                    value={formikCode.values.laptop}
                    onChange={formikCode.handleChange}
                    onBlur={formikCode.handleBlur}
                    name={`laptop`}
                    type="text"
                    placeholder="شماره سریال نوشته شده بر روی دستگاه"
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full h-full  placeholder-gray border-none  resize-none  input-label-pos  focus-visible:outline-none focus-visible:ring-transparent  bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                    }
                  />
                  {enableSend && (
                    <button
                      className="w-fit h-fit  cursor-pointer p-2 "
                      onClick={() => {
                        formikCode.setFieldValue("laptop", "");
                        setDisabledTabs({
                          mobile: false,
                          reception: false,
                          laptop: false,
                        });
                      }}
                    >
                      <CloseModal
                        color={"#ABABAB"}
                        width={"16"}
                        height={"16"}
                      />
                    </button>
                  )}
                </div>
                {/* <input
                  value={formikCode.values.laptop}
                  onChange={formikCode.handleChange}
                  onBlur={formikCode.handleBlur}
                  name={`laptop`}
                  type="text"
                  placeholder="شماره سریال نوشته شده بر روی دستگاه"
                  className={
                    (true ? "  " : " ") +
                    " w-full px-4 h-10   resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum "
                  }
                /> */}
                {/* formikCode.values.laptop.length > 0 */}
                <label
                  className={
                    " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] text-[#525252] " +
                    " " +
                    `${true ? "text-xs  -translate-y-[20px]  " : ""}`
                  }
                >
                  شماره سریال دستگاه
                </label>
                {enableSend ? (
                  <div
                    className={
                      "w-[80%] leading-5  text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 text-[#696969] " +
                      " " +
                      `${enableSend ? " opacity-100 " : " opacity-0 "}`
                    }
                  >
                    <TickCircle />
                    متن پیام موفقیت آمیز بود
                  </div>
                ) : (
                  <div
                    className={
                      "text-mainRed font-costumFaNum text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                      " " +
                      `${
                        formikCode.errors.laptop && formikCode.touched.laptop
                          ? " opacity-100 "
                          : " opacity-0 "
                      }`
                    }
                  >
                    <DangerIcon />
                    {formikCode.errors.laptop}
                  </div>
                )}
              </div>

              <div className="flex flex-row items-center justify-center pt-3  ">
                <button
                  type="submit"
                  onClick={formikCode.handleSubmit}
                  className={
                    "group transition ease-in-out duration-500  flex flex-row gap-1 justify-center items-center  px-3 py-1 text-sm leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] w-fit relative font-bold min-w-[104px] " +
                    " " +
                    // `${
                    //   disabledCodeSend
                    //     ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
                    //     : "group text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
                    // }` +
                    " " +
                    `${loadingButton ? "  pointer-events-none  " : " "}`
                  }
                >
                  ادامه
                  <div className="transition ease-in-out duration-500   brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
                    <ArrowOpinion width={"16"} height={"16"} />
                  </div>
                  {loadingButton && <ButtonCoverLoader />}
                </button>
              </div>
            </form>
            {/* <form className=" contents "> */}
            <PersonalInformation
              formik={formik}
              enableSend={enableSend}
              courseInput={courseInput}
              setCourseInput={setCourseInput}
            />
            <SurvayFormContent
              formik={formik}
              enableSend={enableSend}
              loadingButtonSurvey={loadingButtonSurvey}
            />
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}
