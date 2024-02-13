"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/arrow-down";
import { DatePicker } from "zaman";
import styles from "../form.module.css";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import PhoneNumberInputsList from "./PhoneNumberInputsList";
import DangerIcon from "@/icon2/DangerIcon";
import MobilePhoneNumberInputsList from "./MobilePhoneNumberInputsList ";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonCoverLoader from "../../ButtonCoverLoader";
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

export default function RepresentativeInformation({
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

  const handleDateConvert = (dateInput) => {
    //"26-02-2012" format to timestamp
    const [y, m, d] = dateInput.split(/-|\//);
    const test = new Date(
      parseInt(y, 10),
      parseInt(m, 10) - 1,
      parseInt(d),
      10
    ).getTime();
    return test;
  };

  useEffect(() => {
    if (mainData.experiences instanceof Array) {
      console.log("experienc");
      setWorkExperienceList(mainData.experiences);
    }
    if (mainData.courses instanceof Array) {
      setCurseList(mainData.courses);
      console.log("2");
    }
    if (mainData.skill_records instanceof Array) {
      console.log("3");
      setSkillRecords(mainData.skill_records);
    }
  }, [mainData]);

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

  const handleAddItemFixedPhone = () => {
    if (formik.values.fixed_numbers.length < 2) {
      formik.setValues({
        ...formik.values,
        fixed_numbers: [...formik.values.fixed_numbers, ""],
      });
    }
  };
  const handleDeleteFixedPhone = (indexField) => {
    const filteredList = formik.values.fixed_numbers.filter(
      (item, index) => index !== indexField
    );
    formik.setValues({
      ...formik.values,
      fixed_numbers: [...filteredList],
    });
  };

  const handleAddItemMobileNumber = () => {
    if (formik.values.phone_numbers.length < 2) {
      formik.setValues({
        ...formik.values,
        phone_numbers: [...formik.values.phone_numbers, ""],
      });
    }
  };
  const handleDeleteMobileNumber = (indexField) => {
    const filteredList = formik.values.phone_numbers.filter(
      (item, index) => index !== indexField
    );
    formik.setValues({
      ...formik.values,
      phone_numbers: [...filteredList],
    });
  };
  return (
    <div className=" flex flex-col  items-center justify-center   ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-start gap-[10px] ">
        <button
          className="cursor-pointer"
          onClick={() => setActiveTab("verification")}
        >
          <RightArrowBack />
        </button>
        اطلاعات نماینده (صاحب امضا)
      </div>
      <div className="w-[80%]  mt-1   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات صاحب امضا:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.firstName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.firstName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.firstName && formik.touched.firstName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.firstName}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.lastName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${formik.values.lastName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.lastName && formik.touched.lastName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.lastName}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="nationalId"
            value={formik.values.nationalId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.nationalId.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.nationalId.length > 0 ? "text-xs" : ""}`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.nationalId && formik.touched.nationalId
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.nationalId}
          </div>
        </div>
        <div className="mb-3 mt-1 w-full flex flex-col items-center">
          <div
            onBlur={() => formik.setFieldTouched("birth_day")}
            className={
              "group   " +
              styles.datePicker +
              "  " +
              `${formik.values.birth_day.length > 0 ? styles.activeLabel : " "}`
            }
          >
            <DatePicker
              defaultValue={
                mainData?.birth_day
                  ? handleDateConvert(mainData?.birth_day)
                  : undefined
              }
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum relative w-full  "
              name="birth_day"
              onChange={(event) => {
                formik.setFieldValue(
                  "birth_day",
                  new Date(event.value).toISOString().slice(0, 10)
                );
              }}
            />
            <label
              className={
                " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${formik.values.birth_day.length > 0 ? "text-xs" : ""}`
              }
            >
              تاریخ تولد
            </label>
            <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
              <ArrowDownIcon />
            </div>
          </div>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-full " +
              " " +
              `${
                formik.errors.birth_day && formik.touched.birth_day
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.birth_day}
          </div>
        </div>

        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.fixed_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`fixed_number`}
            className={
              (formik.values.fixed_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.fixed_number.length > 0 ? "text-xs" : ""}`
            }
          >
            شماره تلفن ثابت
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.fixed_number && formik.touched.fixed_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.fixed_number}
          </div>
        </div>
        <PhoneNumberInputsList
          formik={formik}
          handleDeleteFixedPhone={handleDeleteFixedPhone}
        />
        <button
          onClick={handleAddItemFixedPhone}
          disabled={formik.values.fixed_numbers.length === 2}
          className={
            " transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6  flex flex-row  items-center px-3 py-1  mb-2 " +
            " " +
            `${
              formik.values.fixed_numbers.length === 2
                ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
                : "group text-mainGreen1 cursor-pointer hover:bg-mainGreen1 hover:text-white"
            }`
          }
        >
          اضافه کردن شماره تلفن ثابت دیگر
          <div
            className={
              " transition ease-in-out duration-500 mr-1   " +
              " " +
              `${
                formik.values.fixed_numbers.length === 2
                  ? "  "
                  : " group-hover:brightness-0 group-hover:invert "
              }`
            }
          >
            <PlusIcon
              width={"16"}
              height={"16"}
              color={
                formik.values.fixed_numbers.length === 2 ? "#696969" : "#13625c"
              }
            />
          </div>
        </button>
        <div
          className={
            "text-[#525252] text-xs  flex  flex-row w-full gap-1  items-center cursor-pointer transition-all duration-500  " +
            " " +
            `${
              formik.values.fixed_numbers.length === 2
                ? " opacity-100 pb-3  "
                : "  opacity-0 "
            }`
          }
        >
          <DangerIcon color={"#525252"} />
          محدود تا سه شماره تلفن ثابت
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`phone_number`}
            className={
              (formik.values.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.phone_number.length > 0 ? "text-xs" : ""}`
            }
          >
            شماره تلفن همراه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.phone_number && formik.touched.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.phone_number}
          </div>
        </div>
        <MobilePhoneNumberInputsList
          formik={formik}
          handleDeleteFixedPhone={handleDeleteMobileNumber}
        />
        <button
          onClick={handleAddItemMobileNumber}
          disabled={formik.values.phone_numbers.length === 2}
          className={
            " transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6  flex flex-row  items-center px-3 py-1  mb-2 " +
            " " +
            `${
              formik.values.phone_numbers.length === 2
                ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
                : "group text-mainGreen1 cursor-pointer hover:bg-mainGreen1 hover:text-white"
            }`
          }
        >
          اضافه کردن شماره تلفن همراه دیگر
          <div
            className={
              " transition ease-in-out duration-500 mr-1   " +
              " " +
              `${
                formik.values.phone_numbers.length === 2
                  ? "  "
                  : " group-hover:brightness-0 group-hover:invert "
              }`
            }
          >
            <PlusIcon
              width={"16"}
              height={"16"}
              color={
                formik.values.phone_numbers.length === 2 ? "#696969" : "#13625c"
              }
            />
          </div>
        </button>
        <div
          className={
            "text-[#525252] text-xs  flex  flex-row w-full gap-1  items-center cursor-pointer transition-all duration-500  " +
            " " +
            `${
              formik.values.phone_numbers.length === 2
                ? " opacity-100 pb-3  "
                : "  opacity-0 "
            }`
          }
        >
          <DangerIcon color={"#525252"} />
          محدود تا سه شماره تلفن همراه
        </div>
      </div>
      <div className="w-[80%]  mt-3   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات مدیر فروش:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.firstName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.firstName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.firstName && formik.touched.firstName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.firstName}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.lastName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${formik.values.lastName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.lastName && formik.touched.lastName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.lastName}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="nationalId"
            value={formik.values.nationalId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.nationalId.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.nationalId.length > 0 ? "text-xs" : ""}`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.nationalId && formik.touched.nationalId
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.nationalId}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`phone_number`}
            className={
              (formik.values.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.phone_number.length > 0 ? "text-xs" : ""}`
            }
          >
            شماره تلفن همراه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.phone_number && formik.touched.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.phone_number}
          </div>
        </div>
      </div>
      <div className="w-[80%]  mt-3   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات مسئول خرید:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.firstName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.firstName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.firstName && formik.touched.firstName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.firstName}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.lastName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${formik.values.lastName.length > 0 ? "text-xs" : ""}`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.lastName && formik.touched.lastName
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.lastName}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="nationalId"
            value={formik.values.nationalId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.nationalId.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.nationalId.length > 0 ? "text-xs" : ""}`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.nationalId && formik.touched.nationalId
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.nationalId}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`phone_number`}
            className={
              (formik.values.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.phone_number.length > 0 ? "text-xs" : ""}`
            }
          >
            شماره تلفن همراه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.phone_number && formik.touched.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.phone_number}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] mt-3 before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button
            onClick={() => setActiveTab("verification")}
            className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white  "
          >
            بازگشت به قبل
          </button>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] relative " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
            {loadingButton && <ButtonCoverLoader />}
          </button>
        </div>
      </div>
    </div>
  );
}
