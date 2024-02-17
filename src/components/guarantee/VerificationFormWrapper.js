"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CountDownTimer from "./CountDownTimer";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "./ButtonCoverLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerificationForm from "./VerificationForm";
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

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .trim()
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن همراه را صحیح وارد کنید.")
    .required(" شماره تلفن همراه را وارد کنید."),
});
const validationSchemaLoginCode = yup.object({
  code: yup.string().trim().required(" کد ورود را وارد کنید."),
});

export default function VerificationFormWrapper({
  activeTab,
  verificationToFirstFormDone,
  mainData,
  setMainData,
}) {
  const [loadingButton, setLoadingButton] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone_number: mainData?.phone_number ? mainData?.phone_number : "",
    },
    onSubmit: (values) => {
      setEnablePhoneSend(false);
      setsStartTimer(true);
      setDisabledCodeSend(false);
      // try {
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/applicators/register/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         phone_number: values.phone_number,
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
      //         // setToast(true);
      //         // const featureEntries = Object.entries(detail.body);
      //         // {
      //         //   featureEntries.map((item) => setMessage(item[1]));
      //         // }
      //         // processFail(detail.body.phone_number)
      //         processFail("شماره تلفن همراه ثبت نشد.")
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         // setToast(true);
      //         // setMessage({
      //         //   type: "success",
      //         //   content:
      //         //     "شماره تلفن همراه با موفقیت ثبت شد، کد تایید برای شما از طریق پیامک ارسال خواهد شد.",
      //         // });

      //         setEnablePhoneSend(false);
      //         setsStartTimer(true);
      //         setDisabledCodeSend(false);
      //         processDone(
      //           "شماره تلفن همراه با موفقیت ثبت شد، کد تایید برای شما از طریق پیامک ارسال خواهد شد."
      //         );
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema,
  });

  const formikLoginCode = useFormik({
    initialValues: {
      code: mainData?.code ? mainData?.code : "",
    },
    onSubmit: (values) => {
      setMainData({
        phone_number: formik.values.phone_number,
        code: values.code,
      });
      processDone("احراز هویت با موفقیت انجام شد.");
      verificationToFirstFormDone();
      // try {
      //   console.log({
      //     phone_number: formik.values.phone_number,
      //     code: values.code,
      //   });
      //   const res = fetch(
      //     `http://192.168.10.195:8090/v1/api/after/sale/applicators/confirm/`,
      //     {
      //       method: "POST",
      //       body: JSON.stringify({
      //         phone_number: formik.values.phone_number,
      //         code: values.code,
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
      //       console.log(detail.status);
      //       console.log(detail.body);
      //       if (detail.status == "400") {
      //         // setToast(true);
      //         if (detail.body.phone_number) {
      //           // setToast(true);
      //           // setMessage({
      //           //   type: "danger",
      //           //   content: detail.body.phone_number,
      //           // });
      //           processFail(detail.body.phone_number);
      //         }
      //         if (detail.body.code) {
      //           // setToast(true);
      //           // setMessage({
      //           //   type: "danger",
      //           //   content: detail.body.code,
      //           // });
      //           processFail(detail.body.code);
      //         }
      //       }
      //       if (detail.status == "200" || detail.status == "201") {
      //         // setToast(true);
      //         // setMessage({
      //         //   type: "success",
      //         //   content: "احراز هویت با موفقیت انجام شد.",
      //         // });
      //
      //         processDone("احراز هویت با موفقیت انجام شد.");
      //         verificationToFirstFormDone();
      //         setMainData({
      //           phone_number: formik.values.phone_number,
      //           code: values.code,
      //         });
      //         // if(detail.body.phone_number===formik.values.phone_number){
      //         //   setMainData({
      //         //     ...detail.body
      //         //   });
      //         // }else{
      //         //   setMainData({
      //         //       phone_number: formik.values.phone_number,
      //         //       code: values.code,
      //         //   });
      //         // }
      //       }
      //     })
      //     .catch((err) => console.log(err));
      // } catch (error) {
      //   console.log(error);
      // }
    },
    validationSchema: validationSchemaLoginCode,
  });
  return (
    <>
      {activeTab === "verification" && (
        <VerificationForm
          verificationToFirstFormDone={verificationToFirstFormDone}
          mainData={mainData}
          setMainData={setMainData}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
          formikLoginCode={formikLoginCode}
          formik={formik}
        />
      )}
    </>
  );
}
