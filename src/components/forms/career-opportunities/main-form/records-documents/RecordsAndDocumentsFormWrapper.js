"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecordsAndDocumentsForm from "./RecordsAndDocumentsForm";

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

const MAX_FILE_SIZE = 4194304;

const validationSchema = yup.object({
  personalPic: yup
    .array()
    .min(1, "تصویر مدرک خود را وارد کنید.")
    .max(10, "تنها 10 تصویر مدرک باید وارد کنید.")
    .of(
      yup.object().shape({
        type_document: yup.string().required("Name is required"),
        documents: yup
          .mixed()
          .required(" تصویر مدرک الزامی است.")
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
          ),
      })
    ),
});

export default function RecordsAndDocumentsFormWrapper({
  activeTab,
  setActiveTab,
  mainData,
  setMainData,
  thirdFormDoneToFourthForm,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  const [educationList, setEducationList] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const formik = useFormik({
    initialValues: {
      languages: [],
      skills: [],
    },
    onSubmit: (values) => {
      setMainData({});
      thirdFormDoneToFourthForm();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // try {
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/shop/informations/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //       }),
      //       headers: {
      //         "content-type": "application/json",
      //       },
      //     }
      //   )
      //     .then((response) =>
      //       response
      //         .json()
      //         .then((data) => ({ status: response.status, body: data }))
      //     )
      //     .then((detail) => {
      //       console.log(detail);
      //       if (detail.status == "400") {
      //         setToast(true);
      //         const featureEntries = Object.entries(detail.body);
      //         {
      //           featureEntries.map((item) => setMessage(item[1]));
      //         }
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         setMessage(
      //           "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
      //         );
      //         setSubmitted(true);
      //         setMainData({
      //         });
      //         thirdFormDoneToFourthForm();
      //         window.scrollTo({
      //           top: 0,
      //           left: 0,
      //           behavior: "smooth",
      //         });
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema,
  });
  return (
    <>
      {/* {activeTab === "second" &&    listOfLanguages, setlistOfLanguages ( */}
      <RecordsAndDocumentsForm
        activeTab={activeTab}
        formik={formik}
        loadingButton={loadingButton}
        educationList={educationList}
        setEducationList={setEducationList}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        mainData={mainData}
      />
      {/* )} */}
    </>
  );
}
