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

const validationSchemaCode = yup.object({
  activeTab: yup.string(),
  reception: yup.string().when("activeTab", {
    is: (activeTab) => activeTab === "RECEPTION",
    then: () =>
      yup
        .string()
        .min(5, "Reception code must be 5 characters")
        .max(5, "Reception code must be 5 characters")
        .required("Reception code is required"),
    otherwise: () => yup.string().notRequired(),
  }),
  phone: yup.string().when("activeTab", {
    is: (activeTab) =>{ activeTab === "PHONE"},
    then: () =>
      yup
        .string()
        .required("PHONE is required")
        .min(15, "PHONE must be 15 characters"),
    otherwise: () => yup.string().notRequired(),
  }),
  laptop: yup.string().when("activeTab", {
    is: (activeTab) => activeTab === "LAPTOP",
    then: () => yup.string().required("laptop is required"),
    otherwise: () => yup.string().notRequired(),
  }),
});

export default function SurveyFormPage() {


  let validationShape = {
    gender: yup.string().required("جنسیت را مشخص کنید."),
    age: yup.string().required("سن را مشخص کنید."),
    degree: yup.string().required("مدرک تحصیلی را مشخص کنید."),
    questions: yup.object().shape({
      question_1: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_2: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_3: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_4: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_5: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_6: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_7: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_8: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      /////////=============================================================================

      // question_9: yup.object().shape({
      //   qText: yup.string().when("questions.question_8.qAnswer", {
      //     is:"YES",
      //     then: ()=> yup.string().required("متن سوال الزامی است."),
      //     otherwise: ()=>  yup.string().notRequired(),
      //   }),
      //   qAnswer: yup.string().when("questions.question_8.qAnswer", {
      //     is:"YES",
      //     then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
      //     otherwise: ()=>  yup.string().notRequired(),
      //   }),
      // }),
      /////////=============================================================================

      question_9_detail: yup.object().shape({
        qText: yup.string(),
        qAnswer: yup.string(),
        // .required('لطفا دلیل نمره پایین خود را وارد کنید یا پیشنهاد خود برای بهبود خدمات را بنویسید.')
      }),
      question_10: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_11: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_12: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_13: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_14: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_15: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_16: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      /////////=============================================================================
      // question_17: yup.object().shape({
      //   qText: yup.string().when("questions.question_16.qAnswer", {
      //     is: "YES",
      //     then:()=>   yup.string().required("متن سوال الزامی است."),
      //     otherwise:  ()=> yup.string().notRequired(),
      //   }),
      //   qAnswer: yup.string().when("questions.question_16.qAnswer", {
      //     is: (answer) => answer === "YES",
      //     then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
      //     otherwise: ()=>  yup.string().notRequired(),
      //   }),
      // }),
      // question_18: yup.object().shape({
      //   qText: yup.string().when("questions.question_16.qAnswer", {
      //     is: (answer) => answer === "YES",
      //     then: ()=>  yup.string().required("متن سوال الزامی است."),
      //     otherwise:()=>   yup.string().notRequired(),
      //   }),
      //   qAnswer: yup.string().when("questions.question_16.qAnswer", {
      //     is: "YES",
      //     then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
      //     otherwise: ()=>  yup.string().notRequired(),
      //   }),
      // }),
      /////////=============================================================================

      question_19: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_19_detail: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
    }),
  };

  const validationSchema1 = yup.object().shape({
    gender: yup.string().required("جنسیت را مشخص کنید."),
    age: yup.string().required("سن را مشخص کنید."),
    degree: yup.string().required("مدرک تحصیلی را مشخص کنید."),
    questions: yup.object().shape({
      question_1: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_2: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_3: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_4: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_5: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_6: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_7: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_8: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      /////////=============================================================================

      question_9: yup.object().shape({
        qText: yup.string().when("questions.question_8.qAnswer", {
          is:"YES",
          then: ()=> yup.string().required("متن سوال الزامی است."),
          otherwise: ()=>  yup.string().notRequired(),
        }),
        qAnswer: yup.string().when("questions.question_8.qAnswer", {
          is:"YES",
          then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
          otherwise: ()=>  yup.string().notRequired(),
        }),
      }),
      /////////=============================================================================

      question_9_detail: yup.object().shape({
        qText: yup.string(),
        qAnswer: yup.string(),
        // .required('لطفا دلیل نمره پایین خود را وارد کنید یا پیشنهاد خود برای بهبود خدمات را بنویسید.')
      }),
      question_10: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_11: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_12: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_13: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_14: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_15: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_16: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      /////////=============================================================================
      question_17: yup.object().shape({
        qText: yup.string().when("questions.question_16.qAnswer", {
          is: "YES",
          then:()=>   yup.string().required("متن سوال الزامی است."),
          otherwise:  ()=> yup.string().notRequired(),
        }),
        qAnswer: yup.string().when("questions.question_16.qAnswer", {
          is: (answer) => answer === "YES",
          then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
          otherwise: ()=>  yup.string().notRequired(),
        }),
      }),
      question_18: yup.object().shape({
        qText: yup.string().when("questions.question_16.qAnswer", {
          is: (answer) => answer === "YES",
          then: ()=>  yup.string().required("متن سوال الزامی است."),
          otherwise:()=>   yup.string().notRequired(),
        }),
        qAnswer: yup.string().when("questions.question_16.qAnswer", {
          is: "YES",
          then: ()=>  yup.string().required("پاسخ سوال الزامی است."),
          otherwise: ()=>  yup.string().notRequired(),
        }),
      }),
      /////////=============================================================================

      question_19: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
      question_19_detail: yup.object().shape({
        qText: yup.string().required("متن سوال الزامی است."),
        qAnswer: yup.string().required("پاسخ سوال الزامی است."),
      }),
    }),
  });




  const validationSchema = yup.object().shape(validationShape);
  // ----------------------------------  active tab  ----------------------

  const [activeTab, setActiveTab] = useState("RECEPTION");

  // ----------------------------------        reception_code   PHONE   LAPTOP send  ----------------------

  const [enableSend, setEnableSend] = useState(true);

  ////-------------------------------------------------- loading code send--------------------------
  const [loadingButton, setLoadingButton] = useState(false);
  ////-------------------------------------------------- loading survey send--------------------------
  const [loadingButtonSurvey, setLoadingButtonSurvey] = useState(false);
  ////--------------------------------------------------  formik for code   --------------------------

  const formikCode = useFormik({
    initialValues: {
      activeTab: "RECEPTION",
      reception: "",
      phone: "",
      laptop: "",
    },
    validationSchema: validationSchemaCode,
    onSubmit: async (values) => {
      setLoadingButton(true)
      console.log(values);
      console.log({
        code_type: activeTab,
        code: values[activeTab.toLowerCase()],
      });
      // http://192.168.10.181:8090/v1/api/survey/code/

      try {
        const res = fetch(`http://192.168.10.181:8090/v1/api/survey/code/`, {
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
              console.log(featureEntries[0]);
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
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },

    // validationSchema: yup.object({}),
  });



  /////----------------------------converting  object of questions to array of questions and answers for sending api
  function convertObjectToArray(obj) {
    const questionsArray = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const questionNumber = key.split("_")[1];
        const questionText = obj[key].qText;
        const questionAnswer = obj[key].qAnswer;

        questionsArray.push({
          question: questionText,
          answer: questionAnswer,
        });
      }
    }

    return questionsArray;
  }
  function deletePropertyIfValue(obj, property, value) {
    if (obj.hasOwnProperty(property) && obj[property] === value) {
      delete obj[property];
    }
  }
  
 

  function checkQuestionsData(obj){
    // console.log(obj)
    let test={...obj}
    if (test.hasOwnProperty("question_8") && test["question_8"].qAnswer === "NO") {
      delete test["question_9"];
      delete test["question_9_detail"];
    }
    if (test.hasOwnProperty("question_16") && test["question_16"].qAnswer === "NO") {
      delete test["question_18"];
      delete test["question_17"];
    }
    return test
  }
  const formik = useFormik({
    initialValues: {
      gender: "",
      age: "",
      degree: "",
      questions: {
        question_1: { qText: "", qAnswer: "" },
        question_2: { qText: "", qAnswer: "" },
        question_3: { qText: "", qAnswer: "" },
        question_4: { qText: "", qAnswer: "" },
        question_5: { qText: "", qAnswer: "" },
        question_6: { qText: "", qAnswer: "" },
        question_7: { qText: "", qAnswer: "" },
        question_8: { qText: "", qAnswer: "" },
        question_9: { qText: "", qAnswer: "" },
        question_9_detail: { qText: "", qAnswer: "" },
        question_10: { qText: "", qAnswer: "" },
        question_11: { qText: "", qAnswer: "" },
        question_12: { qText: "", qAnswer: "" },
        question_13: { qText: "", qAnswer: "" },
        question_14: { qText: "", qAnswer: "" },
        question_15: { qText: "", qAnswer: "" },
        question_16: { qText: "", qAnswer: "" },
        question_17: { qText: "", qAnswer: "" },
        question_18: { qText: "", qAnswer: "" },
        question_19: { qText: "", qAnswer: "" },
        question_19_detail: { qText: "", qAnswer: "" },
      },
    },
    onSubmit: (values) => {
      console.log(values);
      const objectChecked=values.questions;
      const objQues=checkQuestionsData(objectChecked)
      console.log(objQues)
      const arrayQues = convertObjectToArray(objQues);
      // const arrayQues = convertObjectToArray(values.questions);
      console.log(arrayQues);
      setLoadingButtonSurvey(true)
      console.log({
        personal_information: {
          code_type: activeTab,
          code: formikCode.values[activeTab.toLowerCase()],
          age: values.age === "x" ? "" : values.age,
          gender: values.gender === "x" ? "" : values.gender,
          degree: values.degree === "x" ? "" : values.degree,
        },
        questions: arrayQues,
      });

      // try {
      //   const res = fetch(`http://192.168.10.181:8090/v1/api/survey/answer/`, {
      //     method: "POST",
      //     body: JSON.stringify({
      //       personal_information: {
      //         code_type: activeTab,
      //         code: formikCode.values[activeTab.toLowerCase()],
      //         age: values.age,
      //         gender: values.gender,
      //         degree: values.degree,
      //       },
      //       questions: arrayQues,
      //     }),
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //   })
      //     .then((response) =>
      //       response
      //         .json()
      //         .then((data) => ({ status: response.status, body: data }))
      //     )
      //     .then((detail) => {
      //       console.log(detail);
      //       if (detail.status == "400") {
      //         const featureEntries = Object.entries(detail.body);
      //         console.log(featureEntries[0]);
      //         {
      //           featureEntries.map((item) => {
      //             toast.warn(item[1][0]);
      //           });
      //         }
      //         setLoadingButtonSurvey(false)

      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         toast.success("نظر شما با موفقیت ثبت شد.", {
      //           position: "top-center",
      //           autoClose: 5000,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: true,
      //           draggable: true,
      //           progress: undefined,
      //           theme: "light",
      //         });
      //         setEnableSend(true);
      //         setLoadingButtonSurvey(false)
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema,
  });
  if (formik.values.questions.question_8==="YES") {
    validationShape.questions.question_9 = yup.object().shape({
      qText: yup.string().required("متن سوال الزامی است."),
      qAnswer: yup.string().required("پاسخ سوال الزامی است."),
    })
  }


  if (formik.values.questions.question_16==="YES") {
    validationShape.questions.question_17 = yup.object().shape({
      qText: yup.string().required("متن سوال الزامی است."),
      qAnswer: yup.string().required("پاسخ سوال الزامی است."),
    })
  }


  if (formik.values.questions.question_16==="YES") {
    validationShape.questions.question_18 = yup.object().shape({
      qText: yup.string().required("متن سوال الزامی است."),
      qAnswer: yup.string().required("پاسخ سوال الزامی است."),
    })
  }

  return (
    <div
      className={
        " bg-[#FDFDFD] rounded-b-3xl md:rounded-3xl shadow-G1  md:bg-mainGreen1 text-[#F7F7F7]  md:mt-5 relative -z-[0] overflow-clip   "
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
          <div className={"  absolute top-0 left-0 -z-0 md:w-[40%] lg:w-fit "}>
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
          <div className={"  absolute bottom-0 -right-[20px] -z-0  md:w-[65%] lg:w-fit "}>
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
          <div className="w-full  bg-[#FDFDFD] rounded-b-3xl md:rounded-3xl shadow-G1   p-3 text-[#000]">
            <p>سریال دستگاه یا کد پذیرش خود را وارد کنید.</p>
            <div className=" border border-[#808080] flex rounded-xl  max-w-fit mx-auto overflow-hidden my-4">
              <div
                className={
                  "flex flex-row items-center justify-center cursor-pointer gap-1 py-3 min-w-[98px]   text-center text-xs font-bold " +
                  (activeTab == "RECEPTION"
                    ? "  bg-mainGreen1 text-white  "
                    : "  text-[#525252]  ")
                }
                tab_sub="RECEPTION"
                onClick={() => {
                  formikCode.setFieldValue("activeTab", "RECEPTION");
                  console.log(formikCode);
                  setActiveTab("RECEPTION");
                }}
              >
                {activeTab == "RECEPTION" ? <TickSquare /> : null}
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
                onClick={() => {
                  setActiveTab("PHONE");
                  console.log(formikCode);

                  formikCode.setFieldValue("activeTab", "PHONE");
                }}
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
                onClick={() => {
                  formikCode.setFieldValue("activeTab", "LAPTOP");
                  setActiveTab("LAPTOP");
                  console.log(formikCode);
                }}
              >
                {activeTab == "LAPTOP" ? <TickSquare /> : null}
                سریال لپتاپ
              </div>
            </div>

            <div
              className={
                "group md:w-[60%] lg:w-[50%] mb-1 relative mx-auto mt-8   flex flex-col  " +
                `${activeTab == "RECEPTION" ? " flex " : " hidden"}`
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
                  (true > 0 ? "  " : " ") +
                  " w-full px-4  h-10 resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs "
                }
              />
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
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
                "group md:w-[60%] lg:w-[50%] mb-1 relative mx-auto mt-8  flex flex-col  " +
                `${activeTab == "PHONE" ? " flex " : " hidden"}`
              }
            >
              <input
                value={formikCode.values.phone}
                onChange={formikCode.handleChange}
                onBlur={formikCode.handleBlur}
                type="text"
                placeholder="شماره 15 رقمی IMEI1"
                name={`phone`}
                className={
                  (true ? "   " : " ") +
                  " w-full px-4  h-10 resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs "
                }
              />
              {/* formikCode.values.phone.length > 0 */}
              <label
                className={
                  " absolute top-3 right-4 rounded-2xl px-1 pointer-events-none group-focus-within:text-xs  bg-white  group-focus-within:-translate-y-[20px] " +
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
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikCode.errors.phone && formikCode.touched.phone
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikCode.errors.phone}
                </div>
              )}
            </div>

            <div
              className={
                "group md:w-[60%] lg:w-[50%] mb-1 relative mx-auto mt-8  flex flex-col " +
                `${activeTab == "LAPTOP" ? " flex " : " hidden"}`
              }
            >
              <input
                value={formikCode.values.laptop}
                onChange={formikCode.handleChange}
                onBlur={formikCode.handleBlur}
                type="text"
                placeholder="شماره سریال نوشته شده بر روی دستگاه"
                name={`laptop`}
                className={
                  (true ? "  " : " ") +
                  " w-full px-4 h-10   resize-none  border border-gray-300 rounded-2xl bg-white    placeholder-[#ABABAB] placeholder:text-xs "
                }
              />
              {/* formikCode.values.laptop.length > 0 */}
              <label
                className={
                  " absolute top-3 right-4 rounded-2xl text-sm pointer-events-none bg-white px-1 group-focus-within:text-xs  group-focus-within:-translate-y-[20px] " +
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
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
          </div>
          <PersonalInformation formik={formik} enableSend={enableSend} />
          <SurvayFormContent formik={formik} enableSend={enableSend} loadingButtonSurvey={loadingButtonSurvey} />
        </div>
      </div>
    </div>
  );
}
