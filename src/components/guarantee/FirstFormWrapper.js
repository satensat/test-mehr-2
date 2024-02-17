"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirstForm from "./FirstForm";
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
const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(225, "نام را وارد کنید.")
    .required("نام را وارد کنید."),
  lastName: yup
    .string()
    .max(225, "نام خانوادگی  نباید بیشتر از 225 کاراکتر باشد.")
    .required("نام خانوادگی را وارد کنید."),
  nationalId: yup
    .string()
    .min(10, "کد ملی نباید کمتر از ۱۰ عدد داشته باشد.")
    .max(10, "کد ملی نباید بیشتر از ۱۰ عدد داشته باشد.")
    .trim()
    .matches(/^[0-9]+$/, "کد ملی باید فقط شامل اعداد باشد.")
    .required("کد ملی را وارد کنید."),
  degree: yup
    .string()
    .max(225, "تحصیلات نباید بیشتر از 225 کاراکتر باشد.")
    .required("تحصیلات را وارد کنید."),
  fieldEDU: yup.string().required("رشته را وارد کنید."),
  birth_day: yup.string().trim().required(" تاریخ تولد را وارد کنید."),
  // phoneNumbers: yup
  // .array()
  // .length(1, 'You must provide exactly one phone number')
  // .of(
  //   yup
  //     .string()
  //     .matches(/^\d{10}$/, 'Phone number must be a valid 10-digit number') ,
  //   email: yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
  fixed_number: yup
    .string()
    // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
    .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
    .min(11, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
    .max(12, "شماره تلفن ثابت نباید بیشتر از 12 تا شماره داشته باشد.")
    .required("  شماره ثابت را وارد کنید."),
  fixed_numbers: yup
    .array()
    // .length(1, "حداقل یک شماره ثابت الزامی است.")
    .of(
      yup
        .string()
        // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
        .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
        .min(11, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
        .max(12, "شماره تلفن ثابت نباید بیشتر از 12 تا شماره داشته باشد.")
      // .required("  شماره ثابت را وارد کنید.")
    ),
  phone_number: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required("  شماره همراه را وارد کنید."),
  phone_numbers: yup
    .array()
    .of(
      yup
        .string()
        .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    ),
  work_experience: yup.string(),
  // skill_records: yup.array().of(yup.object().shape({
  //   skill: yup.string(),
  // })),
  // courses: yup.array().of(
  //   yup.object().shape({
  //     name: yup.string(),
  //     institution_name: yup.string(),
  //     start_date: yup.string(),
  //     end_date: yup.string(),
  //     description: yup.string(),
  //   })
  // ),
});

export default function FirstFormWrapper({
  activeTab,
  setActiveTab,
  mainData,
  setMainData,
  firstFormDoneToSecondForm,
}) {
  ////----------------------course list items sending to RecordsCourses component then course component
  const [courseList, setCurseList] = useState([]);

  ////----------------------work-experience list items sending to RecordsCourses component then work-experience component

  const [workExperienceList, setWorkExperienceList] = useState([]);

  ////----------------------skill list items sending to RecordsCourses component then skill component

  const [skillRecords, setSkillRecords] = useState([]);

  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: mainData.first_name ? mainData.first_name : "",
      lastName: mainData.last_name ? mainData.last_name : "",
      degree: mainData.degree ? mainData.degree : "",
      nationalId: mainData.national_id ? mainData.national_id : "",
      fieldEDU: mainData.fieldEDU ? mainData.fieldEDU : "",
      birth_day: mainData.birth_day ? mainData.birth_day : "",
      fixed_number: mainData.fixed_number ? mainData.fixed_number : "",
      fixed_numbers: mainData.fixed_numbers ? mainData.fixed_numbers : [],
      phone_number: mainData?.phone_number ? mainData?.phone_number : "",
      // applicator:mainData?.varificationForm.phone_number ? mainData?.varificationForm.phone_number : "",
      phone_numbers: mainData.phone_numbers ? mainData.phone_numbers : [],
      // work_experience: "",
      // courses: [],
      // skill_records:[]
    },
    onSubmit: (values) => {
      setLoadingButton(true);
      firstFormDoneToSecondForm();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setMainData({
        ...mainData,
        first_name: values.firstName,
        last_name: values.lastName,
        national_id: values.nationalId,
        fixed_number: values.fixed_number,
        phone_numbers: values.phone_numbers,
        fixed_numbers: values.fixed_numbers,
        fieldEDU: values.fieldEDU,
        birth_day: values.birth_day,
        degree: values.degree,
        experiences: workExperienceList,
        courses: courseList,
        skill_records: skillRecords,
      });
      // try {
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/applicators/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         phone_number: values.phone_number,
      //         code: mainData?.code,
      //         first_name: values.firstName,
      //         last_name: values.lastName,
      //         national_id: values.nationalId,
      //         fixed_number: values.fixed_number,
      //         phone_numbers: values.phone_numbers,
      //         fixed_numbers: values.fixed_numbers,
      //         birth_day: values.birth_day,
      //         degree: values.degree,
      //         experiences: workExperienceList,
      //         courses: courseList,
      //         skill_records: skillRecords,
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
      //         const featureEntries = Object.entries(detail.body);
      //         {
      //           featureEntries.map((item) => setMessage(item[1]));
      //         }
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         setMainData({
      //           ...mainData,
      //           first_name: values.firstName,
      //           last_name: values.lastName,
      //           national_id: values.nationalId,
      //           fixed_number: values.fixed_number,
      //           phone_numbers: values.phone_numbers,
      //           fixed_numbers: values.fixed_numbers,
      //           birth_day: values.birth_day,
      //           degree: values.degree,
      //           experiences: workExperienceList,
      //           courses: courseList,
      //           skill_records: skillRecords,
      //         });
      //         processDone("اطلاعات با موفقیت ثبت شد.");
      //         firstFormDoneToSecondForm();
      //         window.scrollTo({
      //           top: 0,
      //           left: 0,
      //           behavior: "smooth",
      //         });
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
      {activeTab === "first" && (
        <FirstForm
          formik={formik}
          mainData={mainData}
          firstFormDoneToSecondForm={firstFormDoneToSecondForm}
          setMainData={setMainData}
          setActiveTab={setActiveTab}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
          skillRecords={skillRecords}
          setSkillRecords={setSkillRecords}
          workExperienceList={workExperienceList}
          setWorkExperienceList={setWorkExperienceList}
          courseList={courseList}
          setCurseList={setCurseList}
        />
      )}
    </>
  );
}
