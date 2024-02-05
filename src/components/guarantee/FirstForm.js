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

  fixed_number: yup
    .array()
    .length(1, "حداقل یک شماره ثابت الزامی است.")
    .of(
      yup
        .string()
        // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
        .required("  شماره ثابت را وارد کنید.")
    ),
  description: yup.string().trim().required("پیام را وارد نمایید"),
});

export default function FirstForm({ setActiveTab }) {
  const [selectedDate, setSelectedDate] = useState(null);

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
      fixed_number: [""],
      description: "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/contact/to/us/`, {
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




  const [phoneNumbers, setPhoneNumbers] = useState([]); 

  const addPhoneNumberField = () => {
    console.log([...phoneNumbers, ''])
    setPhoneNumbers([...phoneNumbers, '']); 
  };

  const handleAddItem = () => {
    formik.setValues({
      ...formik.values,
      fixed_number: [...formik.values.fixed_number,''],
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

      <div className="w-[80%]  mb-6 relative  ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          نام
        </label>
        {formik.errors.firstName && formik.touched.firstName && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.firstName}
          </div>
        )}
      </div>
      <div className="w-[80%]  mb-6 relative ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          نام خانوادگی
        </label>
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.lastName}
          </div>
        )}
      </div>
      <div className="w-[80%]  mb-6 relative ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          کد ملی
        </label>
        {formik.errors.nationalId && formik.touched.nationalId && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.nationalId}
          </div>
        )}
      </div>
      <div className="mb-6 w-full flex flex-col items-center">
        <div
          onBlur={() => formik.setFieldTouched("birthDate")}
          className={
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
          <label className=" absolute top-3 right-4  pointer-events-none">
            تاریخ تولد
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
            <ArrowDownIcon />
          </div>
        </div>
        {formik.errors.birthDate && formik.touched.birthDate && (
          <div className="text-mainRed text-xs pt-1 w-[80%] ">
            {formik.errors.birthDate}
          </div>
        )}
      </div>
      <div className="w-[80%]  mb-6 relative ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          تحصیلات
        </label>
        {formik.errors.education && formik.touched.education && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.education}
          </div>
        )}
      </div>
      <div className="w-[80%]  mb-6 relative ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          رشته
        </label>
        {formik.errors.fieldEDU && formik.touched.fieldEDU && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.fieldEDU}
          </div>
        )}
      </div>

      <div className="w-[80%]  mb-6 relative ">
        <input
        
          value={formik.values.fixed_number[0]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name={`fixed_number[${0}]`}
          className={
            (formik.values.fixed_number[0].length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label className=" absolute top-3 right-4  pointer-events-none">
          شماره تلفن ثابت
        </label>
        {formik.errors?.fixed_number && formik.touched?.fixed_number && formik.errors?.fixed_number[0] && formik.touched?.fixed_number[0] && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors?.fixed_number[0]}
          </div>
        )}
      </div>
      <PhoneNumberInputsList formik={formik}  />
      <button onClick={handleAddItem} className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white mb-2 ">
        اضافه کردن شماره تلفن ثابت دیگر
        <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
          <PlusIcon color={"#13625C"} width={"16"} height={"16"} />
        </div>
      </button>

      <div className="w-[80%]  mb-6 relative ">
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
        <label className=" absolute top-3 right-4  pointer-events-none">
          شماره تلفن همراه
        </label>
        {formik.errors.fieldEDU && formik.touched.fieldEDU && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.fieldEDU}
          </div>
        )}
      </div>
      <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 mb-2 hover:bg-mainGreen1 hover:text-white ">
        اضافه کردن شماره تلفن همراه دیگر
        <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
          <PlusIcon color={"#13625C"} width={"16"} height={"16"} />
        </div>
      </button>
      <RecordsCourses formik={formik} />
      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
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
