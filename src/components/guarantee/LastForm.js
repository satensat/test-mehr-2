"use client";
import ToastBox from "../global/toast";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/arrow-down";
import { Calendar, CalendarProvider, DatePicker, TimePicker } from "zaman";
import styles from "./form.module.css";
import PlusIcon from "@/icon/PlusIcon";
import RecordsCourses from "./RecordsCourses";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import formStyles from "./formcheckbox.module.css";
import MinusIcon from "@/icon2/MinusIcon";
import CloseModal from "@/icon/CloseModal";
import DetailPart from "./DetailPart";
import FirstFormInformation from "./FirstFormInformation";
import StoreInfo from "./StoreInfo";
import DocumentsInfo from "./DocumentsInfo";

const validationSchema = yup.object({
  firstName: yup.string().trim().required("نام را وارد کنید"),
  lastName: yup.string().trim().required("نام خانوادگی را وارد کنید"),
  nationalId: yup.string().trim().required("کد ملی را وارد کنید"),
  education: yup.string().trim().required("تحصیلات را وارد کنید"),
  fieldEDU: yup.string().trim().required("رشته را وارد کنید"),
  birthDate: yup.string().trim().required(" تاریخ تولد را وارد کنید"),
  //   email: yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
  description: yup.string().trim().required("پیام را وارد نمایید"),
});

export default function LastForm() {
  const [checkedValue, setCheckedValue] = React.useState(false);

  const handleCheckBox = () => {
    setCheckedValue(!checkedValue);
  };

  const handleCheckChange = () => {
    setCheckedValue(checkedValue);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      firstName: "",
      lastName: "",
      education: "",
      nationalId: "",
      fieldEDU: "",
      phone: "",
      birthDate: "",
      description: "",
    },
    onSubmit: (values) => {
      try {
        const res = fetch(`http://192.168.10.195:8090/v1/api/contact/to/us/`, {
          method: "POST",
          body: JSON.stringify({
            subject: values.subject,
            name: values.name,
            email_address: values.email,
            phone_number: values.phone,
            description: values.description,
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
          <FirstFormInformation />
        </DetailPart>
        <DetailPart title={"اطلاعات فروشگاه"}>
          <StoreInfo />
        </DetailPart>
        <DetailPart title={"بارگذاری مدارک"}>
          <DocumentsInfo />
        </DetailPart>
      </div>

      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] ">
            تایید و ارسال
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
