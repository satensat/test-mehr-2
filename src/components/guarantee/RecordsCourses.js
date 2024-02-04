"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/icon/arrow-down";
import PlusIcon from "@/icon/PlusIcon";
import CloseIcon from "@/icon/close";
import CloseModal from "@/icon/CloseModal";
import { DatePicker } from "zaman";
import styles from "./form.module.css";

export default function RecordsCourses({ formik }) {
  const [open, setOpen] = useState(true);
  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`w-[80%]   flex flex-col rounded-2xl   cursor-pointer leading-6 my-3 bg-[#F7F7F7] shadow-G1 ${
        open ? "h-auto   " : "h-[112px] "
      }`}
    >
      <div className="w-full flex flex-col p-3 gap-[10px]">
        <div
          onClick={handleOpenClick}
          className={`w-full flex flex-row justify-between  text-[#3B3B3B] text-sm pb-2   font-bold border-b border-[#E6E6E6]  `}
        >
          سوابق و دوره‌ها
          <button
            className={`transition  duration-200 cursor-pointer ${
              open ? "transform rotate-180" : "transform rotate-0"
            }`}
            onClick={handleOpenClick}
          >
            <ArrowDownIcon />
          </button>
        </div>
        <div
          className={
            "text-[#808080] leading-6 text-sm " +
            " " +
            ` ${open ? " hidden " : " block "} `
          }
        >
          پر کردن این قسمت باعث میشود احتمال امتیاز کسب نمایندگی شما افزایش
          یابد.
        </div>
      </div>

      <div
        className={`w-full flex flex-col  px-3 pb-3 ${
          open ? "opacity-100 overflow-auto " : " opacity-0 hidden"
        } `}
      >
        {/* <div className="w-full flex flex-col  text-[#808080]  leading-6 text-justify text-sm"></div> */}
        <div className="bg-[#FDFDFD]  rounded-xl gap-[8px] p-3 flex flex-col ">
          <div className="text-[#808080] leading-6 text-sm">
            سوابق مهارتی، مهارت‌های فنی و نرم شما میباشد مثل تعمیرات، کار با
            سخت‌افزار و یا ارتباط قوی با مشتری
          </div>
          <div className="mb-4">
            <div className="w-full   relative mt-3">
              <input
                name="fieldEDU"
                value={formik.values.fieldEDU}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="مثلا کار با سخت‌افزار"
                className={
                  (true ? " input-label-pos-active " : " ") +
                  " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                }
              />
              <label className=" absolute top-3 right-4  pointer-events-none">
                سوابق مهارتی
              </label>
              <button className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
                <PlusIcon color={"#13625C"} width={"24"} height={"24"} />
              </button>
            </div>
            {formik.errors.fieldEDU && (
              <div className="text-mainRed text-xs pt-1 ">
                {formik.errors.fieldEDU}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] ">
            <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center ">
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                اجرای خدمات
              </div>
              <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>

            <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center ">
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                اجرای خدمات
              </div>
              <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  relative my-5">
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
          <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
            میزان سوابق و تجارب کاری و اجرایی
          </label>
          {formik.errors.description && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.description}
            </div>
          )}
        </div>

        <div className="bg-[#FDFDFD]  rounded-xl gap-[8px] p-3 flex flex-col ">
          <div className="text-[#242424] leading-6 text-sm">دوره آموزشی:</div>
          <div className="flex flex-col items-center">
            <div className="w-full  mb-6 relative  ">
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
                نام دوره
              </label>
              {formik.errors.firstName && (
                <div className="text-mainRed text-xs pt-1 ">
                  {formik.errors.firstName}
                </div>
              )}
            </div>
            <div className="w-full  mb-6 relative ">
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
                نام موسسه
              </label>
              {formik.errors.lastName && (
                <div className="text-mainRed text-xs pt-1 ">
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            <div className="mb-6 w-full flex flex-col ">
              <div
                className={
                  styles.datePickerDetail +
                  "  " +
                  `${
                    formik.values.birthDate.length > 0
                      ? styles.activeLabel
                      : " "
                  }`
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
                  تاریخ شروع
                </label>
                <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
                  <ArrowDownIcon />
                </div>
              </div>
              {formik.errors.birthDate && (
                <div className="text-mainRed text-xs pt-1 w-[80%] ">
                  {formik.errors.birthDate}
                </div>
              )}
            </div>

            <div className="mb-6 w-full flex flex-col ">
              <div
                className={
                  styles.datePickerDetail +
                  "  " +
                  `${
                    formik.values.birthDate.length > 0
                      ? styles.activeLabel
                      : " "
                  }`
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
                تاریخ پایان (پیش بینی تاریخ پایان)
                </label>
                <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
                  <ArrowDownIcon />
                </div>
              </div>
              {formik.errors.birthDate && (
                <div className="text-mainRed text-xs pt-1 w-[80%] ">
                  {formik.errors.birthDate}
                </div>
              )}
            </div>
            <div className="w-full  relative my-5">
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
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
        توضیحات
        </label>
        {formik.errors.description && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.description}
          </div>
        )}
      </div>

      <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-sm leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white mb-2 ">
      اضافه کردن دوره
        <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
          <PlusIcon color={"#13625C"} width={"16"} height={"16"} />
        </div>
      </button>
      <div className="w-full flex flex-col gap-3  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] ">
            <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center ">
              <div className="text-[#242424] leading-5 text-xs flex-grow">
              دوره 1
              </div>
              <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>

            <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center ">
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                اجرای خدمات
              </div>
              <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
