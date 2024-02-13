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

const validationSchema = yup
  .object({
    title: yup.string().required("نام محل کار را وارد کنید."),
    start_date: yup.date().nonNullable().required("تاریخ شروع  را وارد کنید."),
    end_date: yup
      .date()
      .nonNullable()
      .test("", "تاریخ پایان باید بعد از تاریخ شروع باشد.", (val, props) => {
        console.log(props);
        const valueOfDate = new Date(val).getTime();
        const startDate = new Date(props.parent.start_date).getTime();
        if (startDate < valueOfDate) {
          return true;
        }
      })
      .required("تاریخ پایان  را وارد کنید."),
    description: yup.string(),
  })
  .required();
//   workExperienceList} setWorkExperienceList
export default function WorkExperienceForm({ setWorkExperienceList, workExperienceList }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      start_date: "",
      end_date: "",
    },
    onSubmit: (values, actions) => {
      // const handleAddItemMobileNumber = () => {
      //   if (formik.values.phone_number_list.length < 2) {
      //     formik.setValues({
      //       ...formik.values,
      //       phone_number_list: [...formik.values.phone_number_list, ""],
      //     });
      //   }
      // };
      setWorkExperienceList((prev) => [...prev, values]);
      actions.resetForm();
    },
    validationSchema,
  });

  const handleDeleteCourse = (item, index) => {
    const filteredList = workExperienceList.filter(
      (element, elementIndex) => elementIndex !== index
    );
    setWorkExperienceList(() => [...filteredList]);
  };

  return (
    <form className="bg-[#FDFDFD]  rounded-xl gap-[8px] p-3 flex flex-col mb-3 ">
      <div className="text-[#242424] leading-6 text-sm">سابقه کاری:</div>
      <div className="flex flex-col items-center">
        <div className="w-full  mb-3 relative group ">
          <input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.title.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.title.length > 0 ? "text-xs" : ""}`
            }
          >
            نام محل کار
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.title && formik.touched.title
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.title}
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
            <input
              value={
                formik.values.start_date === ""
                  ? ""
                  : new Date(formik.values.start_date).toLocaleDateString(
                      "fa-IR"
                    )
              }
              readOnly
              className={"   " + styles.datePickerInputStyle}
            />
            <DatePicker
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum "
              name="start_date"
              inputClass={" " + " " + styles.datePickerMainInputHide}
              onChange={(event) => {
                formik.setFieldValue("start_date",    new Date(event.value).toISOString().slice(0, 10));
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
              `${
                formik.values.end_date.length > 0 ? styles.activeLabel : " "
              }` +
              " " +
              `${
                formik.values.start_date === "" ? " pointer-events-none " : ""
              }`
            }
          >
            <input
              value={
                formik.values.end_date === ""
                  ? ""
                  : new Date(formik.values.end_date).toLocaleDateString("fa-IR")
              }
              readOnly
              className={"   " + styles.datePickerInputStyle}
            />
            <DatePicker
              round="x4"
              position="center"
              accentColor="#1b887f"
              className="font-costumFaNum "
              name="end_date"
              inputClass={" " + " " + styles.datePickerMainInputHide}
              onChange={(event) => {
                // console.log(Date.parse( new Date(event.value).toUTCString()))
                // console.log(new Date(event.value).toUTCString());
                // console.log(event);
                // console.log(Date.parse(event.value));
                formik.setFieldValue(
                  "end_date",
                  new Date(event.value).toISOString().slice(0, 10)
                );
              }}
            />
            <label
              className={
                " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${formik.values.end_date.length > 0 ? "text-xs" : ""}` +
                " " +
                `${formik.values.start_date === "" ? " text-[#ababab]" : ""}`
              }
            >
              تاریخ پایان (پیش بینی تاریخ پایان)
            </label>
            <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
              <ArrowDownIcon
                color={`${formik.values.start_date === "" ? "#ababab" : ""}`}
              />
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
      </div>
      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="group transition ease-in-out duration-500 text-center w-fit rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white mb-2 mx-auto "
      >
        اضافه کردن سابقه کاری
        <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
          <PlusIcon color={"#13625C"} width={"16"} height={"16"} />
        </div>
      </button>
      <div
        className={
          "w-full flex flex-col gap-3  before:transition-all before:duration-500   before:content-['']   before:h-[1px] before:w-0   before:bg-[#E6E6E6] " +
          " " +
          `${workExperienceList?.length > 0 ? " before:w-full  " : "  "}`
        }
      >
        {workExperienceList?.map((item, index) => {
          return (
            <div
              key={`${index}-${item}`}
              className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center "
            >
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                {item.title}
              </div>
              <button
                onClick={() => handleDeleteCourse(item, index)}
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
