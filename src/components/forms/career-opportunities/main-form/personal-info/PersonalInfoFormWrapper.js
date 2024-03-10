"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfoForm from "./PersonalInfoForm";

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

const MAX_FILE_SIZE = 4194304;

const validationSchema = yup.object({
  personalPic: yup
    .array()
    .min(1, " تصویر پرسنلی خود را وارد کنید. ")
    .max(1, "تنها یک تصویر پرسنلی باید وارد کنید.")
    .of(
      yup
        .mixed()
        .required(" تصویر پرسنلی الزامی است.")
        .test(
          "fileFormat",
          "فقط فایل های jpg، jpeg، webp، pdf و png مجاز هستند.",
          (value) => {
            if (value) {
              return validFileExtensions.file.includes(
                value.name.split(".").pop()
              );
            }
            return true;
          }
        )
        .test("fileSize", "حجم فایل نباید بیشتر از 4 مگابایت باشد", (value) => {
          if (value) {
            return value.size <= MAX_FILE_SIZE;
          }
          return true;
        })
    )
    .required("تصویر پرسنلی الزامی است."),
    requested_salary: yup.number('لطفاً عدد وارد کنید')
    .required('لطفاً مبلغ حقوق خود را وارد کنید')
    .min(1000, 'مبلغ حقوق باید بیشتر از ۱۰۰۰ تومان باشد')
    .positive('مبلغ حقوق باید مثبت باشد')
    .integer('لطفاً یک عدد صحیح وارد کنید'),
  first_name: yup
    .string()
    .max(225, "نام را وارد کنید.")
    .required("نام را وارد کنید."),
  last_name: yup
    .string()
    .max(225, "نام خانوادگی  نباید بیشتر از 225 کاراکتر باشد.")
    .required("نام خانوادگی را وارد کنید."),
  father_name: yup
    .string()
    .max(225, "نام پدر را وارد کنید.")
    .required("نام پدر را وارد کنید."),
  national_code: yup
    .string()
    .min(10, "کد ملی نباید کمتر از ۱۰ عدد داشته باشد.")
    .max(10, "کد ملی نباید بیشتر از ۱۰ عدد داشته باشد.")
    .trim()
    .matches(/^[0-9]+$/, "کد ملی باید فقط شامل اعداد باشد.")
    .required("کد ملی را وارد کنید."),
  birth_day: yup.string().trim().required(" تاریخ تولد را وارد کنید."),
  birth_city: yup.string().required("شهر را وارد نمایید."),
  gender: yup.string().required("جنسیت را وارد انتخاب کنید."),
  // gender: yup.boolean().required("جنسیت را وارد انتخاب کنید."),
  is_married: yup.boolean().required("وضعیت تاهل را انتخاب کنید."),
  nationality:yup.string().required("ملیت را وارد نمایید."),
  religion: yup.string().required("دین خود را وارد انتخاب کنید."),
  military: yup.string().required("وضعیت خدمت سربازی را وارد انتخاب کنید."),
  military_end_date: yup.string().trim().required(" تاریخ پایان خدمت را وارد کنید."),
  intrested_fields:   yup
  .string()
  .max(225, "حوزه های علاقه مندی خود را تا 225 کارامتر وارد کنید.")
  // .required("حوزه های علاقه مندی خود را وارد کنید."), 
  // yup
  // .array()
  // .min(1, " تصویر پرسنلی خود را وارد کنید. ")
  // .max(1, "تنها یک تصویر پرسنلی باید وارد کنید.")
  // .of(
  //   // yup
  //   //   .object({
  //   //     name:yup.string().oneOf(
  //   //       ["پدر", "مادر", "فرزند", "همسر", "برادر", "خواهر", "سایر"],
  //   //       "لطفا از موارد پیشنهادی انتخاب کنید."
  //   //     )
  //   //   })
  //   //   .required(" تصویر پرسنلی الزامی است.")
  // yup
  // .string()
  // )
  // yup
  // .string()
  // .max(225, "حوزه های علاقه مندی خود را تا 225 کارامتر وارد کنید.")
  // .required("حوزه های علاقه مندی خود را وارد کنید."),
});

export default function PersonalInfoFormWrapper({
  activeTab,
  setActiveTab,
  mainData,
  setMainData,
  secondFormDoneToThirdForm,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  //   const [statusProvince, setStatusProvince] = useState(false);

  //   const [statusCity, setStatusCity] = useState(false);

  const [provinceListItemsSource, setProvinceListitemsSource] = useState([]);
  const [cityListItemsSource, setCityListitemsSource] = useState([]);

  const [provinceInput, setProvinceInput] = useState("");
  const [cityListInput, setCityInput] = useState("");

  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const formik = useFormik({
    initialValues: {
      intrested_jobs:[],
      first_name: "",
      last_name: "",
      degree: "",
      national_code: "",
      father_name: "",
      birth_day: "",
      personalPic: [],
      religion: "",
      is_married: "",
      military: "",
      gender: "",
      requested_salary: "",
      birth_city: "",
      
      military_end_date: "",
      intrested_fields: "",
    },
    onSubmit: (values) => {
      setMainData({

      });
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
            body: JSON.stringify({
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
              applicator: mainData?.varificationForm?.phone_number,
              workplace_features: {
                sofa: values.workplace_features.sofa,
                network: values.workplace_features.network,
                fixed_number: values.workplace_features.fixed_number,
                reception_feature: values.workplace_features.reception_feature,
              },
            }),
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
      {activeTab === "PersonalInfoForm" && (
      <PersonalInfoForm
        activeTab={activeTab}
        formik={formik}
        filteredCities={filteredCities}
        setFilteredCities={setFilteredCities}
        loadingButton={loadingButton}
        setLoadingButton={setLoadingButton}
        provinceListItemsSource={provinceListItemsSource}
        setProvinceListitemsSource={setProvinceListitemsSource}
        cityListItemsSource={cityListItemsSource}
        setCityListitemsSource={setCityListitemsSource}
        provinceInput={provinceInput}
        setProvinceInput={setProvinceInput}
        cityListInput={cityListInput}
        setCityInput={setCityInput}
        filteredProvinces={filteredProvinces}
        setFilteredProvinces={setFilteredProvinces}
        secondFormDoneToThirdForm={secondFormDoneToThirdForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />
      )}
    </>
  );
}
