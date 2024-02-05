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

export default function ThirdForm() {
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
        بارگذاری مدارک
      </div>

      <div className="w-[80%]  mb-6 relative  rounded-xl px-3 pb-3 ">

        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          میتوانید فایل های متعدد بارگذاری کنید.
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#F7F7F7] rounded-xl pb-3  pt-4 px-3 ">
            <div className=" flex flex-col items-start gap-2  ">
              <div className="w-full flex flex-col items-start gap-2 mb-2 after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-4 ">
                <div className="w-full  relative  ">
                  <input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="فایل را آپلود کنید."
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                    }
                  />
                  <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl">
                    اظهارنامه مالیات بر ارزش افزوده
                  </label>
                  <button className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer">
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                </div>
                {formik.errors.firstName && (
                  <div className="text-mainRed text-xs pt-1 ">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-xl pb-3  pt-4 px-3 ">
            <div className=" flex flex-col items-start gap-2  ">
              <div className="w-full flex flex-col items-start gap-2 mb-2 after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-4 ">
                <div className="w-full  relative  ">
                  <input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="فایل را آپلود کنید."
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                    }
                  />
                  <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl">
                    گواهینامه شورای انفورماتیک
                  </label>
                  <button className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] cursor-pointer ">
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                </div>
                {formik.errors.firstName && (
                  <div className="text-mainRed text-xs pt-1 ">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-xl pb-3  pt-4 px-3 ">
            <div className=" flex flex-col items-start gap-2  ">
              <div className="w-full flex flex-col items-start gap-2 mb-2 after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-4 ">
                <div className="w-full  relative  ">
                  <input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="فایل را آپلود کنید."
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                    }
                  />
                  <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl">
                    تصاویر محل کار
                  </label>
                  <button className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] cursor-pointer">
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                </div>
                {formik.errors.firstName && (
                  <div className="text-mainRed text-xs pt-1 ">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
              <div className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center w-full ">
                <div className="text-[#242424] leading-5 text-xs flex-grow">
                  اجرای خدمات
                </div>
                <button className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  ">
                  حذف
                  <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                    <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      
      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] ">
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
