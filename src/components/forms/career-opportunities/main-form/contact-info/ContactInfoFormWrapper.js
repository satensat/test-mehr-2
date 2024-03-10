"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactInfoForm from "./ContactInfoForm";

const validationSchema = yup.object().shape({
  mobile_phone: yup
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
  salary: yup
    .number()
    .required("لطفاً مبلغ حقوق خود را وارد کنید")
    .min(1000, "مبلغ حقوق باید بیشتر از ۱۰۰۰ تومان باشد")
    .positive("مبلغ حقوق باید مثبت باشد")
    .integer("لطفاً یک عدد صحیح وارد کنید"),
  city: yup.string().required("شهر را وارد نمایید."),
  province: yup.string().required("شهر را وارد نمایید."),
  presenter_firstName: yup
    .string()
    .max(225, "نام معرف را وارد کنید.")
    .required("نام معرف را وارد کنید."),
  presenter_lastName: yup
    .string()
    .max(225, "نام خانوادگی معرف نباید بیشتر از 225 کاراکتر باشد.")
    .required("نام خانوادگی را وارد کنید."),
  presenter_phone_number: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه معرف را صحیح وارد کنید.")
    .required("  شماره همراه معرف را وارد کنید."),
  first_relative_type: yup
    .string()
    .required("نسبت معرف را مشخص کنیذ")
    .oneOf(
      ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
      "لطفا از موارد پیشنهادی انتخاب کنید."
    ),
  first_relative_firstName: yup
    .string()
    .max(225, "نام معرف را وارد کنید.")
    .required("نام معرف را وارد کنید."),
  first_relative_lastName: yup
    .string()
    .max(225, "نام خانوادگی معرف نباید بیشتر از 225 کاراکتر باشد.")
    .required("نام خانوادگی را وارد کنید."),
  first_relative_phone_number: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه معرف را صحیح وارد کنید.")
    .required("  شماره همراه معرف را وارد کنید."),
  first_relative_address: yup
    .string()
    .max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد.")
    .required("آدرس کامل  را وارد نمایید."),
  second_relative: yup.object({
    type: yup
      .string()
      // .required("نسبت معرف را مشخص کنیذ")
      .oneOf(
        ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
        "لطفا از موارد پیشنهادی انتخاب کنید."
      ),
    firstName: yup.string().max(225, "نام معرف را وارد کنید."),
    // .required("نام معرف را وارد کنید."),
    lastName: yup
      .string()
      .max(225, "نام خانوادگی معرف نباید بیشتر از 225 کاراکتر باشد."),
    // .required("نام خانوادگی را وارد کنید."),
    phone_number: yup
      .string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه معرف را صحیح وارد کنید."),
    // .required("  شماره همراه معرف را وارد کنید."),
    address: yup.string().max(225, "آدرس  نباید بیشتر از 225 کاراکتر باشد."),
    // .required("آدرس کامل  را وارد نمایید."),
  }).test(
    'is-optional',
    `county is required`,
    function({ firstName,lastName, phone_number ,address,type}) {
      return firstName === '' && lastName === '' && phone_number === '' && address === '' && type === '' ? false : true
    }
  ),
});

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
//       second_relative_lastName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
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
//       second_relative_firstName,
//       second_relative_lastName,
//       second_relative_phone_number,
//       second_relative_address
//     ) =>
//       !second_relative_type &&
//       !second_relative_firstName &&
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
      mobile_phone: "",
      postal_code: "",
      fixed_number: "",
      email: "",
      address: "",
      salary: "",
      city: "",
      province: "",
      presenter_firstName: "",
      presenter_lastName: "",
      presenter_phone_number: "",
      first_relative_type: "",
      first_relative_firstName: "",
      first_relative_lastName: "",
      first_relative_phone_number: "",
      first_relative_address: "",
      second_relative_type: "",
      second_relative_firstName: "",
      second_relative_lastName: "",
      second_relative_phone_number: "",
      second_relative_address: "",
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
              setMainData({
                ...mainData,
                secondForm: {
                  applicator: mainData?.varificationForm?.phone_number,
                  name: values.name,
                  province: values.province.id,
                  city: values.city.id,
                  is_owner: values.is_owner,
                  area: values.area,
                  business_type: {
                    is_distribution: values.business_type.is_distribution,
                    is_manufacturing: values.business_type.is_manufacturing,
                    is_technical: values.business_type.is_technical,
                    is_service: values.business_type.is_service,
                  },
                  number_of_staff: values.number_of_staff,
                  address: values.address,
                  reception_status: values.reception_status,
                  repair_features: values.repair_features,
                  workplace_features: {
                    sofa: values.workplace_features.sofa,
                    network: values.workplace_features.network,
                    fixed_number: values.workplace_features.fixed_number,
                    reception_feature:
                      values.workplace_features.reception_feature,
                  },
                },
              });
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
