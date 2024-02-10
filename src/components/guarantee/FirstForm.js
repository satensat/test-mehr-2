"use client";
import ToastBox from "../global/toast";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/arrow-down";
import { Calendar, CalendarProvider, DatePicker, TimePicker } from "zaman";
import styles from "./form.module.css";
import PlusIcon from "@/icon/PlusIcon";
import RecordsCourses from "./RecordsCourses";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import PhoneNumberInputsList from "./PhoneNumberInputsList";
import DangerIcon from "@/icon2/DangerIcon";
import MobilePhoneNumberInputsList from "./MobilePhoneNumberInputsList ";

const validationSchema = yup.object({
  firstName: yup.string().trim().required("نام را وارد کنید"),
  lastName: yup.string().trim().required("نام خانوادگی را وارد کنید"),
  nationalId: yup.string().trim().required("کد ملی را وارد کنید"),
  education: yup.string().trim().required("تحصیلات را وارد کنید"),
  fieldEDU: yup.string().trim().required("رشته را وارد کنید"),
  birthDate: yup.string().trim().required(" تاریخ تولد را وارد کنید"),
  // phoneNumbers: yup
  // .array()
  // .length(1, 'You must provide exactly one phone number')
  // .of(
  //   yup
  //     .string()
  //     .matches(/^\d{10}$/, 'Phone number must be a valid 10-digit number') ,
  //   email: yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
  fixed_number_main: yup
    .string()
    // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
    .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
    .min(12, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
    .max(12, "شماره تلفن ثابت نباید بیشنر از 12 تا شماره داشته باشد.")
    .required("  شماره ثابت را وارد کنید."),
  fixed_number: yup
    .array()
    // .length(1, "حداقل یک شماره ثابت الزامی است.")
    .of(
      yup
        .string()
        // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
        .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
        .min(12, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
        .max(12, "شماره تلفن ثابت نباید بیشنر از 12 تا شماره داشته باشد.")
      // .required("  شماره ثابت را وارد کنید.")
    ),
  phone_number: yup
    .string()
    .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
    .min(12, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
    .max(12, "شماره تلفن ثابت نباید بیشنر از 12 تا شماره داشته باشد.")
    .required("  شماره ثابت را وارد کنید."),
  phone_number_list: yup.array().of(
    yup
      .string()
      .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
      .min(12, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
      .max(12, "شماره تلفن ثابت نباید بیشنر از 12 تا شماره داشته باشد.")
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

export default function FirstForm({ setActiveTab, mainData, setMainData }) {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [courseList, setCurseList] = useState([]);



  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      firstName: "",
      lastName: "",
      education: "",
      nationalId: "",
      fieldEDU: "",
      phone: "",
      birthDate: "",
      fixed_number_main: "",
      fixed_number: [],
      description: "",
      phone_number: mainData?.phone_number ? mainData?.phone_number : "",
      applicator:mainData?.phone_number ? mainData?.phone_number : "",
      phone_number_list: [],
      work_experience: "",
      // courses: [],
      // skill_records:[]
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/applicators/`, {
          method: "POST",
          body: JSON.stringify({
            subject: values.subject,
            name: values.name,
            email_address: values.email,
            phone_number: values.phone,
            description: values.description,
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
            console.log(detail.status);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  const handleAddItemFixedPhone = () => {
    if (formik.values.fixed_number.length < 2) {
      formik.setValues({
        ...formik.values,
        fixed_number: [...formik.values.fixed_number, ""],
      });
    }
  };
  const handleDeleteFixedPhone = (indexField) => {
    const filteredList = formik.values.fixed_number.filter(
      (item, index) => index !== indexField
    );
    formik.setValues({
      ...formik.values,
      fixed_number: [...filteredList],
    });
  };

  const handleAddItemMobileNumber = () => {
    if (formik.values.phone_number_list.length < 2) {
      formik.setValues({
        ...formik.values,
        phone_number_list: [...formik.values.phone_number_list, ""],
      });
    }
  };
  const handleDeleteMobileNumber = (indexField) => {
    const filteredList = formik.values.phone_number_list.filter(
      (item, index) => index !== indexField
    );
    formik.setValues({
      ...formik.values,
      phone_number_list: [...filteredList],
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

      <div className="w-[80%] mt-1  mb-3 relative group ">
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
      <div className=" w-[80%] group mt-1  mb-3 relative ">
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
      <div className="group mt-1  mb-3 w-[80%]   relative ">
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
          onBlur={() => formik.setFieldTouched("birthDate")}
          className={
            "group   " +
            styles.datePicker +
            "  " +
            `${formik.values.birthDate.length > 0 ? styles.activeLabel : " "}`
          }
        >
          <DatePicker
            round="x4"
            position="center"
            accentColor="#1b887f"
            className="font-costumFaNum relative  "
            name="birthDate"
            onChange={(event) => {
              formik.setFieldValue("birthDate", event.value.toString());
            }}
          />
          <label
            className={
              " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${formik.values.birthDate.length > 0 ? "text-xs" : ""}`
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
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-[80%] " +
            " " +
            `${
              formik.errors.birthDate && formik.touched.birthDate
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.birthDate}
        </div>
      </div>
      <div className="group mt-1  mb-3 w-[80%]   relative ">
        <input
          name="education"
          value={formik.values.education}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.education.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
            " " +
            `${formik.values.education.length > 0 ? "text-xs" : ""}`
          }
        >
          تحصیلات
        </label>

        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.education && formik.touched.education
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.education}
        </div>
      </div>
      <div className="group mt-1  mb-3 w-[80%]   relative ">
        <input
          name="fieldEDU"
          value={formik.values.fieldEDU}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.fieldEDU.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
            " " +
            `${formik.values.fieldEDU.length > 0 ? "text-xs" : ""}`
          }
        >
          رشته
        </label>

        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.fieldEDU && formik.touched.fieldEDU
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.fieldEDU}
        </div>
      </div>

      <div className="group mt-1  mb-3 w-[80%]   relative ">
        <input
          value={formik.values.fixed_number_main}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name={`fixed_number_main`}
          className={
            (formik.values.fixed_number_main.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
            " " +
            `${formik.values.fixed_number_main.length > 0 ? "text-xs" : ""}`
          }
        >
          شماره تلفن ثابت
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.fixed_number_main &&
              formik.touched.fixed_number_main
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.fixed_number_main}
        </div>
      </div>
      <PhoneNumberInputsList
        formik={formik}
        handleDeleteFixedPhone={handleDeleteFixedPhone}
      />

      <button
        onClick={handleAddItemFixedPhone}
        disabled={formik.values.fixed_number.length === 2}
        className={
          " transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6  flex flex-row  items-center px-3 py-1  mb-2 " +
          " " +
          `${
            formik.values.fixed_number.length === 2
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
              formik.values.fixed_number.length === 2
                ? "  "
                : " group-hover:brightness-0 group-hover:invert "
            }`
          }
        >
          <PlusIcon
            width={"16"}
            height={"16"}
            color={
              formik.values.fixed_number.length === 2 ? "#696969" : "#13625c"
            }
          />
        </div>
      </button>
      <div
        className={
          "text-[#525252] text-xs  flex  flex-row w-[80%] gap-1  items-center cursor-pointer transition-all duration-500  " +
          " " +
          `${
            formik.values.fixed_number.length === 2
              ? " opacity-100 pb-3  "
              : "  opacity-0 "
          }`
        }
      >
        <DangerIcon color={"#525252"} />
        محدود تا سه شماره تلفن ثابت
      </div>

      <div className="group mt-1  mb-3 w-[80%]   relative ">
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
        disabled={formik.values.phone_number_list.length === 2}
        className={
          " transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6  flex flex-row  items-center px-3 py-1  mb-2 " +
          " " +
          `${
            formik.values.phone_number_list.length === 2
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
              formik.values.phone_number_list.length === 2
                ? "  "
                : " group-hover:brightness-0 group-hover:invert "
            }`
          }
        >
          <PlusIcon
            width={"16"}
            height={"16"}
            color={
              formik.values.phone_number_list.length === 2
                ? "#696969"
                : "#13625c"
            }
          />
        </div>
      </button>
      <div
        className={
          "text-[#525252] text-xs  flex  flex-row w-[80%] gap-1  items-center cursor-pointer transition-all duration-500  " +
          " " +
          `${
            formik.values.phone_number_list.length === 2
              ? " opacity-100 pb-3  "
              : "  opacity-0 "
          }`
        }
      >
        <DangerIcon color={"#525252"} />
        محدود تا سه  شماره تلفن همراه
      </div>

      <RecordsCourses formik={formik} setCurseList={setCurseList} courseList={courseList}/>
      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button
            onClick={() => setActiveTab("verification")}
            className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white "
          >
            بازگشت به قبل
          </button>
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] ">
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
