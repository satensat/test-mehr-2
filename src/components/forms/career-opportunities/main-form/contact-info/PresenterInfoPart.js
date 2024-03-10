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
          name="presenter_firstName"
          value={formik.values.presenter_firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.presenter_firstName.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
            " " +
            `${formik.values.presenter_firstName.length > 0 ? "text-xs" : ""}`
          }
        >
          نام معرف
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.presenter_firstName && formik.touched.presenter_firstName
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.presenter_firstName}
        </div>
      </div>
      <div className=" grow group w-full  mb-3 relative ">
        <input
          name="presenter_lastName"
          value={formik.values.presenter_lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.presenter_lastName.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values.presenter_lastName.length > 0 ? "text-xs" : ""}`
          }
        >
          سمت معرف
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.presenter_lastName && formik.touched.presenter_lastName
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.presenter_lastName}
        </div>
      </div>
      <div className=" grow group w-full  mb-3 relative ">
        <input
          name="presenter_phone_number"
          value={formik.values.presenter_phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.presenter_phone_number.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values.presenter_phone_number.length > 0 ? "text-xs" : ""}`
          }
        >
          شماره تماس معرف
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.presenter_phone_number && formik.touched.presenter_phone_number
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.presenter_phone_number}
        </div>
      </div>
    </div>
  );
}
