import DangerIcon from "@/icon2/DangerIcon";
import React from "react";
import ProvinceListComponent from "./ProvinceListComponent";
import CityListComponent from "./CityListComponent";

export default function PlacePart({ formik }) {
  return (
    <div className=" flex flex-col  w-full  md:w-[50%]  ">
      <ProvinceListComponent formik={formik} />
      <CityListComponent formik={formik} />
      <div className="w-full group relative mt-2">
        <textarea
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.address.length > 0
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
              formik.values.address.length > 0
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
              formik.errors.address && formik.touched.address
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.address}
        </div>
      </div>
    </div>
  );
}
