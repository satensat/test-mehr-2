"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import formStyles from "../formcheckbox.module.css";
import DangerIcon from "@/icon2/DangerIcon";
import styles from "../form.module.css";
import ButtonCoverLoader from "../ButtonCoverLoader";
import "react-toastify/dist/ReactToastify.css";
import PresenterInfoPart from "./PresenterInfoPart";
import PlacePart from "./place-province-city-address/PlacePart";
import RelativesPart from "./relatives/RelativesPart";



export default function ContactInfoForm({ formik, mainData ,loadingButton, listOfLanguages, setlistOfLanguages }) {
  return (
    <div className=" flex flex-col  items-center justify-center bg-[#fdfdfd]  rounded-b-2xl ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-center gap-[10px] ">
      <button className="cursor-pointer p-1">
          <RightArrowBack />
        </button>
        اطلاعات تماس
      </div>
      <div className="px-3 pb-3  flex flex-col w-full   ">
      <div className=" flex flex-col md:flex-row w-full gap-6 items-center  mt-2 ">
          <div className="grow mb-3 relative group w-full ">
            <input
              name="phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.phone_number.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
                " " +
                `${formik.values.phone_number.length > 0 ? "text-xs" : ""}`
              }
            >
              شماره تماس همراه
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
          <div className=" grow group w-full  mb-3 relative ">
            <input
              name="postal_code"
              value={formik.values.postal_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.postal_code.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
                " " +
                `${formik.values.postal_code.length > 0 ? "text-xs" : ""}`
              }
            >
            کد پستی
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.postal_code && formik.touched.postal_code
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.postal_code}
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <div className="grow mb-3 relative group w-full ">
            <input
              name="fixed_number"
              value={formik.values.fixed_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.fixed_number.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
                " " +
                `${formik.values.fixed_number.length > 0 ? "text-xs" : ""}`
              }
            >
             شماره تماس ثابت
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
          <div className=" grow group w-full  mb-3 relative ">
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.email.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
                " " +
                `${formik.values.email.length > 0 ? "text-xs" : ""}`
              }
            >
          ایمیل
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.email && formik.touched.email
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.email}
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-6 items-center  mt-2 ">
          <PlacePart formik={formik}/>
          <PresenterInfoPart formik={formik} />
        </div>
        <RelativesPart formik={formik} />
      </div>

      <div className="flex flex-col w-full before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto px-3 ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button
            onClick={formik.handleSubmit}
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] " +
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
