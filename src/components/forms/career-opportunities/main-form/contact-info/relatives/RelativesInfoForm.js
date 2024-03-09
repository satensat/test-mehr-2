import DangerIcon from '@/icon2/DangerIcon'
import React from 'react'
import RelativeList from './RelationList'

export default function RelativesInfoForm({formik,title,checkValueName}) {
  return (
    <div className="flex flex-col bg-[#e6e6e6]   items-center pt-1 px-3 pb-3 rounded-xl w-full  md:w-[50%] font-costumFaNum "  >
        <div className="text-[#242424]   text-sm  leading-6 w-full py-1 mb-1 ">
        {/* اطلاعات فرد 1   */}
        {title}
        </div>
         <RelativeList formik={formik} />
      <div className="grow mb-3 relative group w-full ">
        <input
          name={`${checkValueName}_relative_firstName`}
          value={formik.values[`${checkValueName}_relative_firstName`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values[`${checkValueName}_relative_firstName`].length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
            " " +
            `${formik.values[`${checkValueName}_relative_firstName`].length > 0 ? "text-xs" : ""}`
          }
        >
          نام
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors[`${checkValueName}_relative_firstName`] && formik.touched[`${checkValueName}_relative_firstName`]
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors[`${checkValueName}_relative_firstName`]}
        </div>
      </div>
      <div className=" grow group w-full  mb-3 relative ">
        <input
          name={`${checkValueName}_relative_lastName`}
          value={formik.values[`${checkValueName}_relative_lastName`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values[`${checkValueName}_relative_lastName`].length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values[`${checkValueName}_relative_lastName`].length > 0 ? "text-xs" : ""}`
          }
        >
          نام خانوادگی
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors[`${checkValueName}_relative_lastName`] && formik.touched[`${checkValueName}_relative_lastName`]
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors[`${checkValueName}_relative_lastName`]}
        </div>
      </div>
      <div className="w-full group relative ">
        <textarea
          name={`${checkValueName}_relative_address`}
          value={formik.values[`${checkValueName}_relative_address`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values[`${checkValueName}_relative_address`].length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-none   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label
          className={
            " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formik.values[`${checkValueName}_relative_address`].length > 0
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
          }
        >
          آدرس محل سکونت
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors[`${checkValueName}_relative_address`] && formik.touched[`${checkValueName}_relative_address`]
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors[`${checkValueName}_relative_address`]}
        </div>
      </div>
      <div className=" grow group w-full  mb-3 relative ">
        <input
          name={`${checkValueName}_relative_phone_number`}
          value={formik.values[`${checkValueName}_relative_phone_number`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values[`${checkValueName}_relative_phone_number`].length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${formik.values[`${checkValueName}_relative_phone_number`].length > 0 ? "text-xs" : ""}`
          }
        >
       شماره تماس همراه
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors[`${checkValueName}_relative_phone_number`] && formik.touched[`${checkValueName}_relative_phone_number`]
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors[`${checkValueName}_relative_phone_number`]}
        </div>
      </div>
    </div>
  )
}
