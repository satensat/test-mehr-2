"use client";
import React, { useEffect, useState } from "react";

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

export default function RepresentativeInformation({
  formik,
  setActiveTab,
  mainData,
  setMainData,
  firstFormDoneToSecondForm,
  loadingButton,
  setLoadingButton,
}) {
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
      <div className="w-[80%]  mt-1   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 pt-2 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات صاحب امضا:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.first_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${formik.values.first_name.length > 0 ? "text-xs" : ""}`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.first_name && formik.touched.first_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.first_name}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.last_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${formik.values.last_name.length > 0 ? "text-xs" : ""}`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.last_name && formik.touched.last_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.last_name}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="national_id"
            value={formik.values.national_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.national_id.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${formik.values.national_id.length > 0 ? "text-xs" : ""}`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.national_id && formik.touched.national_id
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.national_id}
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
                " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
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
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
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
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
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
      <div className="w-[80%]  mt-3   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 pt-2 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات مدیر فروش:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="sale_manager.first_name"
            value={formik.values.sale_manager.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.sale_manager.first_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl   pointer-events-none  text-sm group-focus-within:text-xs" +
              " " +
              `${
                formik.values.sale_manager?.first_name.length > 0
                  ? "text-xs"
                  : ""
              }`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.sale_manager?.first_name &&
                formik.touched.sale_manager?.first_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.sale_manager?.first_name}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="sale_manager.last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.last_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${
                formik.values.sale_manager.last_name.length > 0 ? "text-xs" : ""
              }`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.sale_manager?.last_name &&
                formik.touched.sale_manager?.last_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.sale_manager?.last_name}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="sale_manager.national_id"
            value={formik.values.sale_manager.national_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.sale_manager.national_id.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${
                formik.values.sale_manager?.national_id?.length > 0
                  ? "text-xs"
                  : ""
              }`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.sale_manager?.national_id &&
                formik.touched.sale_manager?.national_id
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.sale_manager?.national_id}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.sale_manager.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`sale_manager.phone_number`}
            className={
              (formik.values.sale_manager.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${
                formik.values.sale_manager.phone_number.length > 0
                  ? "text-xs"
                  : ""
              }`
            }
          >
            شماره تلفن همراه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.sale_manager?.phone_number &&
                formik.touched.sale_manager?.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.sale_manager?.phone_number}
          </div>
        </div>
      </div>
      <div className="w-[80%]  mt-3   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 pt-2 flex flex-col  items-center  ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 w-full ">
          مشخصات مسئول خرید:
        </div>
        <div className="w-full mt-1  mb-3 relative group ">
          <input
            name="buy_manager.first_name"
            value={formik.values.buy_manager.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.buy_manager.first_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
              " " +
              `${
                formik.values.buy_manager.first_name.length > 0 ? "text-xs" : ""
              }`
            }
          >
            نام
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.buy_manager?.first_name &&
                formik.touched.buy_manager?.first_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.buy_manager?.first_name}
          </div>
        </div>
        <div className=" w-full group mt-1  mb-3 relative ">
          <input
            name="buy_manager.last_name"
            value={formik.values.buy_manager.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.buy_manager.last_name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
              " " +
              `${
                formik.values.buy_manager.last_name.length > 0 ? "text-xs" : ""
              }`
            }
          >
            نام خانوادگی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.buy_manager?.last_name &&
                formik.touched.buy_manager?.last_name
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.buy_manager?.last_name}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            name="buy_manager.national_id"
            value={formik.values.buy_manager.national_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.buy_manager.national_id.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${
                formik.values.buy_manager.national_id.length > 0
                  ? "text-xs"
                  : ""
              }`
            }
          >
            کد ملی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.buy_manager?.national_id &&
                formik.touched.buy_manager?.national_id
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.buy_manager?.national_id}
          </div>
        </div>
        <div className="group mt-1  mb-3 w-full   relative ">
          <input
            value={formik.values.buy_manager.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={`buy_manager.phone_number`}
            className={
              (formik.values.buy_manager.phone_number.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label
            className={
              " absolute top-4 right-4  rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
              " " +
              `${
                formik.values.buy_manager.phone_number.length > 0
                  ? "text-xs"
                  : ""
              }`
            }
          >
            شماره تلفن همراه
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.buy_manager?.phone_number &&
                formik.touched.buy_manager?.phone_number
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.buy_manager?.phone_number}
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
