import DangerIcon from "@/icon2/DangerIcon";
import React from "react";
import formStyles from "./formcheckbox.module.css";

export default function ManagementInfo({ formik }) {
  return (
    <div className=" flex flex-col  w-full  md:w-[50%]  items-center bg-[#f7f7f7] pt-1 px-3 pb-3 rounded-2xl mb-auto ">
      <div className="text-[#242424] text-sm   leading-6 py-3  w-full ">
        اطلاعات مدیریت
      </div>
      <div className="grow mb-3 mt-1 relative group w-full ">
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
            " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
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
      <div className=" grow group w-full mt-1  mb-3 relative ">
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
            " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
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
      <div className={"grow group  mt-1  mb-3 relative  w-full "}>
        <input
          name="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="شماره همراهی که واتساپ داشته باشد، وارد کنید."
          className={
            (true ? " input-label-pos-active " : " ") +
            " w-full px-4 placeholder:text-xs placeholder:text-[#ABABAB]  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formik.touched.phone_number
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
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

      <div className="w-full relative bg-[#FDFDFD] rounded-xl pt-1 px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          محصولات درخواستی
        </div>

        <div className="flex flex-col md:flex-row gap-3 pt-2">
          <div className="bg-[#F7F7F7] grow md:w-[50%] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "requested_products.mobile_tablet",
                    !formik.values.requested_products.mobile_tablet
                  )
                }
              >
                <input
                  readOnly
                  type="checkbox"
                  name="requested_products.mobile_tablet"
                  checked={formik.values.requested_products.mobile_tablet}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-5 text-[#242424]">
                موبایل و تبلت
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] grow   md:w-[50%] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "requested_products.laptop",
                    !formik.values.requested_products.laptop
                  )
                }
              >
                <input
                  readOnly
                  type="checkbox"
                  name="requested_products.laptop"
                  checked={formik.values.requested_products.laptop}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-5 text-[#242424]">
                لپتاپ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.requested_products &&
            formik.touched.requested_products
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.requested_products}
      </div>
    </div>
  );
}
