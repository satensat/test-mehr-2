"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import CloseModal from "@/icon/CloseModal";
import PlusIcon from "@/icon/PlusIcon";

import { DatePicker } from "zaman";
import styles from "./form.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import DangerIcon from "@/icon2/DangerIcon";

// const validationSchema33 = yup.object({
//   name: yup.string().required("نام دوره را وارد کنید"),
//   institution_name: yup.string(),
//   start_date: yup.string().when("end_date", {
//     is: '',
//     then: yup.string().required(),
//     otherwise: () => yup.string().notRequired(),
//   }),
// //    yup.string(),
//   end_date: yup.string().when("start_date", {
//     is: '',
//     then: yup.string().required(),
//     otherwise: () => yup.string().notRequired(),
//   }),
//   description: yup.string(),
// //   start_date: yup.date().nullable().when('end_date', (end_date, schema) => {
// //     return end_date ? schema.required('Start date is required') : schema;
// //   }),
// //   end_date: yup.date().nullable().when('start_date', (start_date, schema) => {
// //     return start_date ? schema.min(start_date, 'End date must be after start date').required('End date is required') : schema;
// //   }),
// });

const validationSchema = yup.lazy((values) =>
  yup.object({
    name: yup.string().required("نام دوره را وارد کنید"),
    institution_name: yup.string(),
    start_date: yup.string(),
    end_date: yup.string(),
    description: yup.string(),
  })
);

export default function CoursesForm({ setCurseList, courseList }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      institution_name: "",
      start_date: "",
      end_date: "",
      description: "",
    },
    onSubmit: (values) => {
      // const handleAddItemMobileNumber = () => {
      //   if (formik.values.phone_number_list.length < 2) {
      //     formik.setValues({
      //       ...formik.values,
      //       phone_number_list: [...formik.values.phone_number_list, ""],
      //     });
      //   }
      // };
      setCurseList((prev) => [...prev, values]);
    },
    validationSchema,
  });

  const handleDeleteCourse = (item, index) => {
    const filteredList = courseList.filter(
      (element, elementIndex) =>
        elementIndex !== index
    );
    setCurseList(() => [...filteredList]);
  };

  return (
    <form className="bg-[#FDFDFD]  rounded-xl gap-[8px] p-3 flex flex-col ">
      <div className="text-[#242424] leading-6 text-sm">دوره آموزشی:</div>
      <div className="flex flex-col items-center">
        <div className="w-full  mb-3 relative group ">
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.name.length > 0 ? "text-xs" : ""}`
            }
          >
            نام دوره
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.name && formik.touched.name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.name}
          </div>
        </div>
        <div className="w-full  mb-3 relative group ">
          <input
            name="institution_name"
            value={formik.values.institution_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.institution_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.institution_name.length > 0 ? "text-xs" : ""}`
            }
          >
            نام موسسه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.institution_name &&
                formik.touched.institution_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.institution_name}
          </div>
        </div>

        <div className="mb-3 w-full flex flex-col ">
          <div
            onBlur={() => formik.setFieldTouched("start_date")}
            className={
              "group   " +
              styles.datePickerDetail +
              "  " +
              `${
                formik.values.start_date.length > 0 ? styles.activeLabel : " "
              }`
            }
          >
            <DatePicker
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum relative  "
              name="start_date"
              onChange={(event) => {
                formik.setFieldValue("start_date", event.value.toString());
              }}
            />
            <label
              className={
                " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${formik.values.start_date.length > 0 ? "text-xs" : ""}`
              }
            >
              تاریخ شروع
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
                formik.errors.start_date && formik.touched.start_date
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.start_date}
          </div>
        </div>

        <div className="mb-3 w-full flex flex-col ">
          <div
            onBlur={() => formik.setFieldTouched("end_date")}
            className={
              "group   " +
              styles.datePickerDetail +
              "  " +
              `${formik.values.end_date.length > 0 ? styles.activeLabel : " "}`
            }
          >
            <DatePicker
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum relative  "
              name="end_date"
              //   defaultValue="timestamp"
              //   customShowDateFormat={"YYYY MMMM DD"}
              onChange={(event) => {
                // console.log(Date.parse( new Date(event.value).toUTCString()))
                console.log(new Date(event.value).toUTCString());
                // console.log(event)
                console.log(Date.parse(event.value));
                formik.setFieldValue(
                  "end_date",
                  new Date(event.value).toUTCString()
                );

                //                 // 1707658708000
                // const compareDates = (d1, d2) => {
                //     let date1 = new Date(d1).getTime();
                //     let date2 = new Date(d2).getTime();

                //     if (date1 < date2) {
                //       console.log(`${d1} is less than ${d2}`);
                //     } else if (date1 > date2) {
                //       console.log(`${d1} is greater than ${d2}`);
                //     } else {
                //       console.log(`Both dates are equal`);
                //     }
                //   };
                //   compareDates("Mon, 12 Feb 2024 13:44:31 GMT", "Wed, 07 Feb 2024 13:44:31 GMT");
              }}
            />
            <label
              className={
                " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${formik.values.end_date.length > 0 ? "text-xs" : ""}`
              }
            >
              تاریخ پایان (پیش بینی تاریخ پایان)
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
                formik.errors.end_date && formik.touched.end_date
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.end_date}
          </div>
        </div>
        <div className="w-full  relative  group">
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.description.length > 0
                ? " input-label-pos-active "
                : " ") +
              " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
            }
          ></textarea>
          <label
            className={
              " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.description.length > 0 ? " text-xs " : ""}`
            }
          >
            توضیحات
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.description && formik.touched.description
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.description}
          </div>
        </div>
      </div>

      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="group transition ease-in-out duration-500 text-center w-fit rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white mb-2 mx-auto "
      >
        اضافه کردن دوره
        <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
          <PlusIcon color={"#13625C"} width={"16"} height={"16"} />
        </div>
      </button>

      <div
        className={
          "w-full flex flex-col gap-3  before:transition-all before:duration-500   before:content-['']   before:h-[1px] before:w-0   before:bg-[#E6E6E6] " +
          " " +
          `${courseList?.length > 0 ? " before:w-full  " : "  "}`
        }
      >
        {courseList?.map((item, index) => {
          return (
            <div
              key={`${index}-${item}`}
              className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center "
            >
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                {item.name}
              </div>
              <button
                onClick={() => handleDeleteCourse(index)}
                className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  "
              >
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
}
