"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactInfoForm from "./ContactInfoForm";

const validationSchema = yup.object().shape({
  phone_number: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required("  شماره همراه را وارد کنید."),
  postal_code: yup
    .string()
    .matches(/^\d{10}$/, "کد پستی باید دقیقاً 10 رقم باشد")
    .matches(
      /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      "کد پستی باید به فرمت صحیح وارد شود."
    )
    .required("کد پستی را وارد نمایید."),
  fixed_number: yup
    .string()
    // .matches(/^\d{10}$/, "شماره ثابت را به درستی وارد کنید")
    .matches(/^[0-9]+$/, "شماره تلفن ثابت باید شامل اعداد باشد.")
    .min(11, "شماره تلفن ثابت نباید کمتر از 11 تا شماره داشته باشد.")
    .max(12, "شماره تلفن ثابت نباید بیشتر از 12 تا شماره داشته باشد.")
    .required("  شماره ثابت را وارد کنید."),
  email: yup
    .string()
    .email("ایمیل نامعتبر است.")
    .required("ایمیل را وارد کنید."),
  address: yup
    .string()
    .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
    .required("آدرس کامل  را وارد نمایید."),
  city: yup.string().required("شهر را وارد نمایید."),
  province: yup.string().required("شهر را وارد نمایید."),
  referral_name: yup
    .string()
    .max(225, "نام معرف را وارد کنید.")
    .required("نام معرف را وارد کنید."),
  referral_position: yup
    .string()
    .max(225, "سمت معرف نباید بیشتر از 225 کاراکتر باشد.")
    .required("سمت را وارد کنید."),
  referral_phone: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه معرف را صحیح وارد کنید.")
    .required("شماره همراه معرف را وارد کنید."),
  first_relative: yup
    .object()
    .shape({
      type: yup
        .string()
        .required("نسبت  را مشخص کنید.")
        .oneOf(
          ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
          "لطفا از موارد پیشنهادی انتخاب کنید."
        ),
      first_name: yup
        .string()
        .max(225, "نام را وارد کنید.")
        .required("نام را وارد کنید."),
      last_name: yup
        .string()
        .max(225, "نام خانوادگی نباید بیشتر از 225 کاراکتر باشد.")
        .required("نام خانوادگی را وارد کنید."),
      phone_number: yup
        .string()
        .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
        .required("  شماره همراه را وارد کنید."),
      address: yup
        .string()
        .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
        .required("آدرس کامل  را وارد نمایید."),
    })
    .required("مشخصات و نشانی یکی از بستگان الزامی است."),

  secind_relative: yup
    .object()
    .shape({
      type: yup
        .string()

        .oneOf(
          ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
          "لطفا از موارد پیشنهادی انتخاب کنید."
        ),
      first_name: yup.string().max(225, "نام را وارد کنید."),

      last_name: yup
        .string()
        .max(225, "نام خانوادگی نباید بیشتر از 225 کاراکتر باشد."),

      phone_number: yup
        .string()
        .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید."),

      address: yup.string().max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد."),
    })
    .required("مشخصات و نشانی یکی از بستگان الزامی است."),
});

export default function ContactInfoFormWrapper({
  activeTab,
  setActiveTab,
  mainData,
  setMainData,
  secondFormDoneToThirdForm,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  const [listOfLanguages, setlistOfLanguages] = useState([]);

  const formik = useFormik({
    initialValues: {
      phone_number: "",
      postal_code: "",
      fixed_number: "",
      email: "",
      address: "",
      city: "",
      province: "",
      referral_name: "",
      referral_position: "",
      referral_phone: "",
      first_relative: {
        type: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
      },
      second_relative: {
        type: undefined,
        first_name: undefined,
        last_name: undefined,
        phone_number: undefined,
        address: undefined,
      },
      // second_relative_type: "",
      // second_relative_firstName: "",
      // second_relative_lastName: "",
      // second_relative_phone_number: "",
      // second_relative_address: "",
    },
    onSubmit: (values) => {
      setMainData({});
      secondFormDoneToThirdForm();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      try {
        const res = fetch(
          `http://192.168.10.195:8090/v1/api/after/sale/shop/informations/`,
          {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "200" || detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
              setMainData({});
              secondFormDoneToThirdForm();
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });
  return (
    <>
      {activeTab === "ContactInfoForm" && (
        <ContactInfoForm
          activeTab={activeTab}
          formik={formik}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
          listOfLanguages={listOfLanguages}
          setlistOfLanguages={setlistOfLanguages}
          secondFormDoneToThirdForm={secondFormDoneToThirdForm}
          mainData={mainData}
          setMainData={setMainData}
          setActiveTab={setActiveTab}
        />
      )}
    </>
  );
}

// .test(
//   "is-optional",
//   `county is required`,
//   function ({ first_name, last_name, phone_number, address, type }) {
//     return first_name === "" &&
//     last_name === "" &&
//       phone_number === "" &&
//       address === "" &&
//       type === ""
//       ? false
//       : true;
//   }
// ),

// second_relative: yup.object().shape({
//   type: yup
//     .string()
//     .when(["first_name", "last_name", "phone_number", "address"], {
//       is: (first_name, last_name, phone_number, address) =>
//         !first_name && !last_name && !phone_number && !address,
//       then: () =>
//         yup
//           .string()
//           .required("نسبت  را مشخص کنید.")
//           .oneOf(
//             ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
//             "لطفا از موارد پیشنهادی انتخاب کنید."
//           ),
//       otherwise: () => yup.string(),
//     }),
//   first_name: yup
//     .string()
//     .when(["last_name", "type", "phone_number", "address"], {
//       is: (type, last_name, phone_number, address) =>
//         !type && !last_name && !phone_number && !address,
//       then: () =>
//         yup
//           .string()
//           .max(225, "نام را وارد کنید.")
//           .required("نام را وارد کنید."),
//       otherwise: () => yup.string(),
//     }),
//   last_name: yup
//     .string()
//     .when(["type", "first_name", "phone_number", "address"], {
//       is: (type, first_name, phone_number, address) =>
//         !type && !first_name && !phone_number && !address,
//       then: () =>
//         yup
//           .string()
//           .max(225, "نام خانوادگی نباید بیشتر از 225 کاراکتر باشد.")
//           .required("نام خانوادگی را وارد کنید."),
//       otherwise: () => yup.string(),
//     }),

//   phone_number: yup
//     .string()
//     .when(["type", "first_name", "last_name", "address"], {
//       is: (type, first_name, last_name, address) =>
//         !type && !first_name && !last_name && !address,
//       then: () =>
//         yup
//           .string()
//           .matches(
//             /^(\+98|0)?9\d{9}$/,
//             "شماره تلفن همراه را صحیح وارد کنید."
//           )
//           .required("  شماره همراه را وارد کنید."),
//       otherwise: () => yup.string(),
//     }),
// address: yup
//   .string()
//   .when(["type", "first_name", "last_name", "phone_number"], {
//     is: (type, first_name, last_name, phone_number) =>
//       !type && !first_name && !last_name && !phone_number,
//     then: () =>
//       yup
//         .string()
//         .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
//         .required("آدرس کامل را وارد نمایید."),
//     otherwise: () => yup.string(),
//   }),
// }),
// [
//   ["first_name", "last_name", "phone_number", "address"],
//   ["last_name", "type", "phone_number", "address"],
//   ["type", "first_name", "phone_number", "address"],
//   ["type", "first_name", "last_name", "address"],
//   ["type", "first_name", "last_name", "phone_number"],
// ]

// second_relative_type: yup
// .string()
// .when(
//   [
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
// second_relative_firstName,
// second_relative_lastName,
// second_relative_phone_number,
// second_relative_address
//     ) =>
// !second_relative_firstName &&
// !second_relative_lastName &&
// !second_relative_phone_number &&
// !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .required("نسبت معرف را مشخص کنیذ")
//         .oneOf(
//           ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
//           "لطفا از موارد پیشنهادی انتخاب کنید."
//         ),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_firstName: yup
// .string()
// .when(
//   [
//     "second_relative_lastName",
//     "second_relative_type",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_lastName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_lastName &&
//       !second_relative_phone_number &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .max(225, "نام معرف را وارد کنید.")
//         .required("نام معرف را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_lastName: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_phone_number &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .max(225, "نام خانوادگی معرف نباید بیشتر از 225 کاراکتر باشد.")
//         .required("نام خانوادگی را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_phone_number: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_lastName &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .matches(
//           /^(\+98|0)?9\d{9}$/,
//           "شماره تلفن همراه معرف را صحیح وارد کنید."
//         )
//         .required("  شماره همراه معرف را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_address: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_phone_number",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_phone_number
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_lastName &&
//       !second_relative_phone_number,
//     then: () =>
//       yup
//         .string()
//         .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
//         .required("آدرس کامل  را وارد نمایید."),
//     otherwise: () => yup.string(),
//   }
// ),

// ['second_relative_type', 'second_relative_firstName','second_relative_lastName','second_relative_phone_number','second_relative_address']

// second_relative_type: yup
// .string()
// .when(
//   [
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_firstName &&
//       !second_relative_lastName &&
//       !second_relative_phone_number &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .required("نسبت معرف را مشخص کنیذ")
//         .oneOf(
//           ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
//           "لطفا از موارد پیشنهادی انتخاب کنید."
//         ),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_firstName: yup
// .string()
// .when(
//   [
//     "second_relative_lastName",
//     "second_relative_type",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_lastName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_lastName &&
//       !second_relative_phone_number &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .max(225, "نام معرف را وارد کنید.")
//         .required("نام معرف را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_lastName: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_phone_number",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_phone_number &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .max(225, "نام خانوادگی معرف نباید بیشتر از 225 کاراکتر باشد.")
//         .required("نام خانوادگی را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_phone_number: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_address",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_lastName &&
//       !second_relative_address,
//     then: () =>
//       yup
//         .string()
//         .matches(
//           /^(\+98|0)?9\d{9}$/,
//           "شماره تلفن همراه معرف را صحیح وارد کنید."
//         )
//         .required("  شماره همراه معرف را وارد کنید."),
//     otherwise: () => yup.string(),
//   }
// ),
// second_relative_address: yup
// .string()
// .when(
//   [
//     "second_relative_type",
//     "second_relative_firstName",
//     "second_relative_lastName",
//     "second_relative_phone_number",
//   ],
//   {
//     is: (
//       second_relative_type,
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_phone_number
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
//       !second_relative_lastName &&
//       !second_relative_phone_number,
//     then: () =>
//       yup
//         .string()
//         .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
//         .required("آدرس کامل  را وارد نمایید."),
//     otherwise: () => yup.string(),
//   }
// ),
// },
// [
// [
// "second_relative_first_name",
// "second_relative_last_name",
// "second_relative_phone_number",
// "second_relative_address",
// ],
// [
// "second_relative_last_name",
// "second_relative_type",
// "second_relative_phone_number",
// "second_relative_address",
// ],
// [
// "second_relative_type",
// "second_relative_first_name",
// "second_relative_phone_number",
// "second_relative_address",
// ],
// [
// "second_relative_type",
// "second_relative_first_name",
// "second_relative_last_name",
// "second_relative_address",
// ],
// [
// "second_relative_type",
// "second_relative_first_name",
// "second_relative_last_name",
// "second_relative_phone_number",
// ],
// ]

// [
//   ["second_relative.first_name", "second_relative.last_name", "second_relative.phone_number", "second_relative.address"],
//   ["second_relative.last_name", "second_relative.type", "second_relative.phone_number", "second_relative.address"],
//   ["second_relative.type", "second_relative.first_name", "second_relative.phone_number", "second_relative.address"],
//   ["second_relative.type", "second_relative.first_name", "second_relative.last_name", "second_relative.address"],
//   ["second_relative.type", "second_relative.first_name", "second_relative.last_name", "second_relative.phone_number"],
// ]
