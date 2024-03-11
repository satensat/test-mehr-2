"use client";
import React, { useState } from "react";
import style from "./design.module.css";
import SearchPriceTwo from "@/icon2/SearchPriceTwo";
import ManagementInfo from "./ManagementInfo";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyInfo from "./CompanyInfo";
import ButtonCoverLoader from "./ButtonCoverLoader";

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

const MAX_FILE_SIZE = 4194304;

const validationSchema = yup.object({
  first_name: yup
    .string()
    .max(225, "نام را وارد کنید.")
    .required("نام را وارد کنید."),
  last_name: yup
    .string()
    .max(225, "نام خانوادگی  نباید بیشتر از 225 کاراکتر باشد.")
    .required("نام خانوادگی را وارد کنید."),

  phone_number: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required("  شماره همراه را وارد کنید."),
  requested_products: yup
    .object()
    .shape({
      mobile_tablet: yup.boolean(),
      laptop: yup.boolean(),
    })
    .test(
      "at-least-one-true",
      " نوع جواز کسب خود را انتخاب کنید.",
      (obj) => obj.mobile_tablet || obj.laptop
    ),
  legal_purchase: yup.boolean(),
  certificate_file: yup.array().when("legal_purchase", {
    is: true,
    then: () =>
      yup
        .array()
        .min(1, "تصویر گواهی ارزش افزوده  را وارد کنید. ")
        .max(1, "تنها یک تصویر از گواهی ارزش افزوده باید وارد کنید.")
        .of(
          yup
            .mixed()
            .required("تصویر گواهی ارزش افزوده الزامی است.")
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
        .required("تصویر گواهی ارزش افزوده الزامی است."),
    otherwise: () => yup.array(),
  }),
  business_license: yup
    .array()
    .min(1, "تصویر جواز کسب  را وارد کنید. ")
    .max(1, "  1 تصویر از جواز کسب کافی است.")
    .of(
      yup
        .mixed()
        .required("جواز کسب الزامی است.")
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
    .required("تصویر جواز کسب الزامی است."),
});
export default function PriceInquiryMainComponent() {
  const [loadingButton, setLoadingButton] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone_number: "",
      first_name: "",
      last_name: "",
      legal_purchase: false,
      certificate_file: [],
      business_license: [],
      requested_products: {
        mobile_tablet: false,
        laptop: false,
      },
    },
    onSubmit: (values) => {
      console.log(values);
      setMainData({});
      setLoadingButton(true);
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
            body: JSON.stringify(values),
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
              setLoadingButton(false);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "200" || detail.status == "201") {
              setLoadingButton(false);
              setMainData({});

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
    <div className="shadow-G1  rounded-3xl mb-6  overflow-hidden   text-[#191100] bg-mainYellow relative">
      <div
        className={
          style.complaintHeaderTop +
          " pt-3 pb-6 z-10 bg-mainYellow w-full flex flex-col md:flex-row   justify-center  md:justify-start "
        }
      >
        <div
          className={
            "flex flex-col w-full justify-center  md:justify-start px-3"
          }
        >
          <div className=" flex flex-row justify-center items-center  md:hidden mb-1">
            <SearchPriceTwo width={"32"} height={"32"} />
          </div>
          <h1 className=" text-center md:text-right  leading-6 text-lg  font-bold md:leading-8 mb-3 ">
            استعلام قیمت محصولات
          </h1>
          <p className="    text-xs leading-5 md:text-sm  font-normal md:leading-6  text-justify">
            با توجه به سیستم فروش عمده محصولات در شرکت خدماتی و تجاری مهر
            سرمستان، لطفا در صورت درخواست خرید عمده اطلاعات خود را در فرم زیر
            ثبت نمایید. پس از ثبت اطلاعات، همکاران ما با شما تماس خواهند گرفت.
          </p>
        </div>
        <div className=" hidden md:flex w-[180px]  justify-center z-[1] ">
          <SearchPriceTwo />
        </div>
      </div>
      <div className=" bg-white text-[#242424] flex flex-col p-3">
        <div className="flex md:flex-row flex-col gap-3 md:gap-6 justify-between ">
          <ManagementInfo formik={formik} />
          <CompanyInfo formik={formik} />
        </div>
        <div className="flex flex-col w-full before:content-['']   before:h-[1px] before:w-full mt-3  before:bg-[#CCCCCC] before:mb-auto px-3 ">
          <div className="flex flex-row items-center justify-center p-3 gap-8 ">
            <button
              onClick={formik.handleSubmit}
              className={
                "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-6 py-2 text-lg not-italic font-bold leading-6  rounded-xl  hover:text-white  hover:bg-mainGreen1 h-fit   bg-mainYellow  text-[#000] gap-1 relative "
              }
            >
              استعلام قیمت
              {loadingButton && <ButtonCoverLoader />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
