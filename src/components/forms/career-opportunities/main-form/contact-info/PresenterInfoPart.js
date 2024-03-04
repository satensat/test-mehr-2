import DangerIcon from "@/icon2/DangerIcon";
import React from "react";

export default function PresenterInfoPart({ formik }) {
  return (
    <div className=" flex flex-col  w-full  md:w-[50%] gap-2 items-center bg-[#f7f7f7] pt-1 px-3 pb-3 rounded-xl mb-auto ">
        <div className="text-[#242424] text-sm   leading-6 py-1 w-full ">
        اطلاعات معرف
        </div>
      <div className="grow mb-3 relative group w-full ">
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
            " absolute top-4 right-4 rounded-2xl  pointer-events-none text-xs group-focus-within:text-xs" +
            " " +
            `${formik.values.firstName.length > 0 ? "text-xs" : ""}`
          }
        >
          نام معرف
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
      <div className=" grow group w-full  mb-3 relative ">
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
            " absolute top-4 right-4 rounded-2xl text-xs  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values.lastName.length > 0 ? "text-xs" : ""}`
          }
        >
          سمت معرف
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
      <div className=" grow group w-full  mb-3 relative ">
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
            " absolute top-4 right-4 rounded-2xl text-xs  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values.lastName.length > 0 ? "text-xs" : ""}`
          }
        >
          شماره تماس معرف
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
    </div>
  );
}
