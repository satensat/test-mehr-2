"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import DetailPart from "./DetailPart";
import FirstFormInformation from "./FirstFormInformation";
import StoreInfo from "./StoreInfo";
import DocumentsInfo from "./DocumentsInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonCoverLoader from "./ButtonCoverLoader";
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
  subject: yup.string().trim().required("نام را وارد کنید"),
});

export default function LastForm({
  formik,
  mainData,
  setMainData,
  setActiveTab,
  doneLastForm,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

  const formiktest = useFormik({
    initialValues: {
      subject: "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/after/sale/`, {
          method: "POST",
          body: JSON.stringify({
            subject: values.subject,
          }),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail.status);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
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
    <div className=" flex flex-col  items-center justify-center   ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-start gap-[10px] ">
        <RightArrowBack />
        تایید و ارسال
      </div>
      <div className="w-full flex flex-col gap-4 py-3 items-center">
        <DetailPart title={"اطلاعات نماینده (صاحب امضا)"}>
          <FirstFormInformation mainData={mainData} />
        </DetailPart>
        <DetailPart title={"اطلاعات فروشگاه"}>
          <StoreInfo mainData={mainData} />
        </DetailPart>
        <DetailPart title={"بارگذاری مدارک"}>
          <DocumentsInfo mainData={mainData} />
        </DetailPart>
      </div>

      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button
            onClick={() => setActiveTab("third")}
            className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white "
          >
            بازگشت به قبل
          </button>
          <button
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
            تایید و ارسال
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
            {loadingButton && <ButtonCoverLoader />}
          </button>
        </div>
      </div>
    </div>
  );
}
