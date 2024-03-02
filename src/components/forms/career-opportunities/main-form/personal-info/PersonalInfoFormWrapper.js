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
  .max(
    1,
    "تنها یک تصویر پرسنلی باید وارد کنید."
  )
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
      .test(
        "fileSize",
        "حجم فایل نباید بیشتر از 4 مگابایت باشد",
        (value) => {
          if (value) {
            return value.size <= MAX_FILE_SIZE;
          }
          return true;
        }
      )
  )
  .required("تصویر پرسنلی الزامی است."),





  brand_name: yup.string().required("نام فروشگاه را وارد نمایید."),
  province: yup.string().required(" استان را وارد نمایید."),

  city: yup.string().required("شهر را وارد نمایید."),
  is_owner: yup.boolean().required("وضعیت ملک را وارد انتخاب کنید."),
  business_type: yup
    .object()
    .shape({
      is_distribution: yup.boolean(),
      is_manufacturing: yup.boolean(),
      is_technical: yup.boolean(),
      is_service: yup.boolean(),
    })
    .test(
      "at-least-one-true",
      " نوع جواز کسب خود را انتخاب کنید.",
      (obj) =>
        obj.is_distribution ||
        obj.is_manufacturing ||
        obj.is_technical ||
        obj.is_service
    ),
  business_code: yup.string().min(20, "شماره جواز کسب نباید کمتر از 20 عدد داشته باشد.").required("شماره جواز کسب را وارد نمایید."),
  number_of_staff: yup
    .number()
    .required("تعداد افراد شاغل را وارد نمایید.")
    .positive("تعداد افراد شاغل باید مثبت باشد."),
  number_of_branches: yup
    .number()
    .required("تعداد افراد شاغل را وارد نمایید.")
    .positive("تعداد افراد شاغل باید مثبت باشد."),
  address: yup.string().required("آدرس کامل فروشگاه را وارد نمایید."),
  postal_code: yup
    .string()
    .matches(/^\d{10}$/, "کد پستی باید دقیقاً 10 رقم باشد")
    .matches(
      /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      "کد پستی باید به فرمت صحیح وارد شود."
    )
    .required("کد پستی را وارد نمایید."),
  website: yup.string().url("آدرس وبسایت نامعتبر است."),
  fax_number: yup
    .string()
    .min(12, "فکس نباید کمتر از 12 عدد داشته باشد.")
    .max(12, "فکس نباید بیشتر از 12 عدد داشته باشد.")
    .matches(
      /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/,
      "شماره فکس نامعتبر است. "
    ),
  email: yup
    .string()
    .email("ایمیل نامعتبر است.")
    .required("ایمیل را وارد کنید."),
    activities: yup.array()
    .of(
      yup.object().shape({
        activity: yup.string().oneOf(["mobile", "laptop", "tablet", "accessories"]).required()
      })
    )
    .min(1, "نوع فعالیت را انتخاب کنید.")
    .required(),
 
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
      firstName:"",
      lastName:"",
      degree:"",
      nationalId:"",
      father_name:"",
      birth_day:"",
      personalPic:[],
      interstedIn:"",
      brand_name:"",
      province:"",
      city: "",
      is_owner:"",

      business_code:"",
      postal_code:"",
      website:"",
      email: "",
      fax_number:"",
      number_of_staff:"",
      address:  "",

    },
    onSubmit: (values) => {
      setMainData({
        ...mainData,
        applicator: mainData?.phone_number,
        name: values.name,
        province: values.province,
        city: values.city,
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
          reception_feature: values.workplace_features.reception_feature,
        },
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
      {/* {activeTab === "second" && ( */}
        <PersonalInfoForm
          activeTab={activeTab}
          formik={formik}
          filteredCities={filteredCities}
          setFilteredCities={setFilteredCities}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
          //   statusProvince={statusProvince}
          //   setStatusProvince={setStatusProvince}
          //   statusCity={statusCity}
          //   setStatusCity={setStatusCity}
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
      {/* )} */}
    </>
  );
}