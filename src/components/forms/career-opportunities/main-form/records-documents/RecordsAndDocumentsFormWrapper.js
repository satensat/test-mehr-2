"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecordsAndDocumentsForm from "./RecordsAndDocumentsForm";

const validationSchema = yup.object({});

export default function RecordsAndDocumentsFormWrapper({
  activeTab,
  setActiveTab,
  mainData,
  setMainData,
  doneLastForm,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  const [educationList, setEducationList] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const [documentsList, setDocumentsList] = useState([]);

  const formik = useFormik({
    initialValues: {
      educationList: [],
      workExperience: [],
      documentsList: [],
    },
    onSubmit: (values) => {
      setMainData({});
      doneLastForm();
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
      //         doneLastForm();
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
      {activeTab === "RecordsAndDocuments" && (
        <RecordsAndDocumentsForm
          activeTab={activeTab}
          formik={formik}
          loadingButton={loadingButton}
          educationList={educationList}
          setEducationList={setEducationList}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          documentsList={documentsList}
          setDocumentsList={setDocumentsList}
          mainData={mainData}
        />
      )}
    </>
  );
}
