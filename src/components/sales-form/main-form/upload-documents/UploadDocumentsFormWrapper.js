"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadDocumentsForm from "./UploadDocumentsForm";
function processDone(massage) {
  toast.success(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

function processFail(massage) {
  toast.error(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

function getAllowedExt(type) {
  return validFileExtensions[type].map((e) => `.${e}`).toString();
}
// 102400
//  4194304 ----- 4MB
//  3145728 ----- 3MB
const MAX_FILE_SIZE = 4194304;

///------------------------------------------------data name
//first tax_statement
//second  informathic_certificate
//last   workplape_images
///------------------------------------------------

const validationSchema = yup
  .object()
  .shape({
    corporateOrShop: yup.string(),
    // corporateOrShop: yup.boolean(),
    // certificate: yup.string(),
    certificate: yup.boolean(),
    first: yup
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
                // const supportedFormats = ['pdf'];
                // return supportedFormats.includes(value.name.split('.').pop());
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
    second: yup
      .array()
      .min(1, "تصویر اساسنامه شرکت  را وارد کنید. ")
      .max(1, "تنها یک تصویر از اساسنامه شرکت باید وارد کنید.")
      .of(
        yup
          .mixed()
          .required("تصویر اساسنامه شرکت   الزامی است.")
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
      .required("تصویر اساسنامه شرکت  را الزامی است."),
    last: yup
      .array()
      .min(1, "جواز کسب  را وارد کنید. ")
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
      .required("جواز کسب الزامی است."),
  })
  .required("First array is required");

export default function UploadDocumentsFormWrapper({
  mainData,
  setMainData,
  thirdFormDoneToFourthForm,
  activeTab,
  setActiveTab,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  const formik = useFormik({
    initialValues: {
      corporateOrShop: "corporate",
      certificate: false,
      applicator: mainData?.phone_number ? mainData?.phone_number : "",
      shop_id: mainData?.shop_id ? mainData?.shop_id : "",
      first:
        mainData?.documents?.tax_statement instanceof Array
          ? mainData?.documents?.tax_statement
          : [],
      second:
        mainData?.documents?.informathic_certificate instanceof Array
          ? mainData?.documents?.informathic_certificate
          : [],
      last:
        mainData?.workplace_images instanceof Array
          ? mainData?.workplace_images
          : [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setMainData({
        ...mainData,
        documents: {
          tax_statement: values.first,
          informathic_certificate: values.second,
        },
        workplace_images: values.last,
      });
      console.log(mainData);
      const formData = new FormData();

      formData.append("applicator", values.applicator);
      formData.append("shop_id", values.shop_id);
      formData.append("tax_statement", values.first[0]);
      formData.append("informathic_certificate", values.second[0]);

      for (let i = 0; i < values.last.length; i++) {
        // console.log(values.last[i]);
        formData.append("workplace_images", values.last[i]);
      }
      console.log(formData);
      thirdFormDoneToFourthForm();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // try {
      //   const res = fetch(`http://192.168.10.195:8090/v1/api/after/sale/upload/documents/`, {
      //     method: "POST",
      //     body: formData,
      //     headers: {
      //       "content-type": "multipart/form-data",
      //     },
      //   })
      //     .then((response) =>
      //       response
      //         .json()
      //         .then((data) => ({ status: response.status, body: data }))
      //     )
      //     .then((detail) => {
      //       console.log(detail.status);
      //       if (detail.status == "400") {
      //         setToast(true);
      //         const featureEntries = Object.entries(detail.body);
      //         {
      //           featureEntries.map((item) => setMessage(item[1]));
      //         }
      //       }
      //       if (detail.status == "201") {
      //         setMessage(
      //           "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
      //         );
      //         setSubmitted(true);
      //       }
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // })
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
  });
  return (
    <>
      {activeTab === "third" && (
        <UploadDocumentsForm
          formik={formik}
          thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
          mainData={mainData}
          setMainData={setMainData}
          setActiveTab={setActiveTab}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
        />
      )}
    </>
  );
}
