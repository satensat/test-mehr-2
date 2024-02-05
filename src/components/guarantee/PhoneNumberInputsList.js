"use clint";
import React, { useEffect, useState } from "react";

export default function PhoneNumberInputsList({
  formik
}) {


  return (
    <>
      {formik.values.fixed_number.map((phoneNumber, index) => {
        if(index===0){
            return
        }
        return <div key={index} className="w-[80%]  mb-6 relative ">
            <input
              value={formik.values.fixed_number[index]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name={`fixed_number[${index}]`}
              className={
                (formik.values?.fixed_number[index]?.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label className=" absolute top-3 right-4  pointer-events-none">
              شماره تلفن ثابت {index+1}
            </label>
            {formik.errors?.fixed_number &&
              formik.touched?.fixed_number &&
              formik.errors?.fixed_number[index] &&
              formik.touched?.fixed_number[index] && (
                <div className="text-mainRed text-xs pt-1 ">
                  {formik.errors?.fixed_number[index]}
                </div>
              )}
          </div>
       
      })}
    </>
  );
}
