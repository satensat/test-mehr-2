"use clint";
import CloseModal from "@/icon/CloseModal";
import DangerIcon from "@/icon2/DangerIcon";
import React, { useEffect, useState } from "react";

export default function MobilePhoneNumberInputsList({
  formik,
  handleDeleteFixedPhone,
}) {
  console.log(formik);
  return (
    <>
      {formik.values.phone_number_list.map((phoneNumber, index) => {
        return (
          <>
            <div key={index} className="group mt-1   w-[80%]   relative  ">
              <input
                value={formik.values.phone_number_list[index]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                name={`phone_number_list[${index}]`}
                className={
                  (formik.values?.phone_number_list[index]?.length > 0
                    ? " input-label-pos-active "
                    : " ") +
                  " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                }
              />
              <label
                className={
                  " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs" +
                  " " +
                  `${
                    formik.values.phone_number_list[index].length > 0
                      ? "text-xs"
                      : ""
                  }`
                }
              >
                شماره تلفن همراه {index + 2}
              </label>
              <button
                onClick={() => 
                  handleDeleteFixedPhone(index)
                }
                className="w-fit h-fit z-[1] absolute top-[50%] left-2 translate-y-[-50%] cursor-pointer p-2"
              >
                <CloseModal color="#ABABAB" />
              </button>
            </div>
            <div
              className={
                "w-[80%]   text-mainRed text-xs pt-1 mb-2 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors?.phone_number_list &&
                  formik.touched?.phone_number_list &&
                  formik.errors?.phone_number_list[index] &&
                  formik.touched?.phone_number_list[index]
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors?.phone_number_list &&
                formik.errors?.phone_number_list[index]}
            </div>
          </>
        );
      })}
    </>
  );
}
