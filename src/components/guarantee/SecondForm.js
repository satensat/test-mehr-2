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

export default function SecondForm() {
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
        اطلاعات فروشگاه
      </div>

      <div className="w-[80%]  mb-6 relative  ">
        <input
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.firstName.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label className=" absolute top-3 right-4  pointer-events-none">
          نام فروشگاه
        </label>
        {formik.errors.firstName && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.firstName}
          </div>
        )}
      </div>
      <div className="w-[80%]  mb-6 relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          نوع جواز کسب:
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                توزیعی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                تولیدی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                فنی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                خدماتی
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mb-6 flex flex-row gap-2 items-center">
        <button className="p-3 ">
          <PlusIcon color={"#3B3B3B"} width={"24"} height={"24"} />
        </button>

        <div className="   relative flex-grow  ">
          <input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="number"
            className={
              (formik.values.firstName.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label className=" absolute top-3 right-4  pointer-events-none">
            تعداد افراد شاغل
          </label>
          {formik.errors.firstName && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.firstName}
            </div>
          )}
        </div>
        <button className="p-3 ">
          <MinusIcon color={"#3B3B3B"} width={"24"} height={"24"} />
        </button>
      </div>

      <div className="w-[80%]  mb-6 relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          وضعیت ملک:
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.containerRadio} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                مالک
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.containerRadio} `}
                onClick={handleCheckBox}
              >
                <input
                  type="radio"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                استیجاری
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%]  mb-6 relative  ">
        <input
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="بر اساس متر مربع"
          className={
            (true ? " input-label-pos-active " : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label className=" absolute top-3 right-4  pointer-events-none">
          متراژ ملک
        </label>
        {formik.errors.firstName && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.firstName}
          </div>
        )}
      </div>

      <div className="w-[80%] mb-8 relative   ">
        <input
          type="text "
          name="subject"
          value={
            (formik.values.subject == "SUGGESTIONS" ? "پیشنهاد " : "") ||
            (formik.values.subject == "CRITICISMS" ? " انتقاد " : "") ||
            (formik.values.subject == "OTHER_TOPICS" ? "سایر موضوعات " : "")
          }
          id="subject"
          readOnly
          onFocus={() => setStatus(true)}
          onBlur={() => setStatus(false)}
          className={
            (formik.values.subject.length > 0
              ? " input-label-pos-active "
              : " ") +
            " w-full relative z-[7]  px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />

        <label className=" absolute top-3 origin-center right-4  z-10 pointer-events-none">
          موضوع پیام
        </label>
        <span
          className={
            (status ? "rotate-180 " : "rotate-0 ") +
            " absolute top-4 z-10 left-4 "
          }
        >
          <ArrowDownIcon />
        </span>
        {formik.errors.subject && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.subject}
          </div>
        )}
        {status ? (
          <div className="flex flex-col bg-[#F7F7F7] absolute z-[5] left-0 right-0 top-[39px] pt-3   rounded-b-3xl input-selected">
            <div className=" px-3 py-2  ">
              <label for="SUGGESTIONS" className="flex items-center relative">
                <input
                  type="radio"
                  id="SUGGESTIONS"
                  name="subject"
                  onClick={() => setStatus(!status)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="SUGGESTIONS"
                  className="opacity-0 pointer-events-none absolute"
                />
                <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>
                پیشنهاد
              </label>
            </div>
            <div className=" px-3 py-2 ">
              <label for="CRITICISMS" className="flex items-center relative">
                <input
                  type="radio"
                  id="CRITICISMS"
                  name="subject"
                  onClick={() => setStatus(!status)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="CRITICISMS"
                  className="opacity-0 pointer-events-none absolute"
                />
                <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>
                انتقاد
              </label>
            </div>
            <div className=" px-3 py-2 ">
              <label for="OTHER_TOPICS" className="flex items-center relative">
                <input
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="radio"
                  id="OTHER_TOPICS"
                  value="OTHER_TOPICS"
                  className="opacity-0 pointer-events-none absolute"
                />
                <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2 "></span>
                سایر موضوعات
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-[80%]  relative my-5">
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.description.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          آدرس کامل فروشگاه
        </label>
        {formik.errors.description && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.description}
          </div>
        )}
      </div>

      <div className="w-[80%]  mb-6 relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          امکانات فروشگاه:
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="checkbox"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                مبلمان اداری
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="checkbox"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                اینترنت
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="checkbox"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                تلفن ثابت
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={handleCheckBox}
              >
                <input
                  type="checkbox"
                  checked={checkedValue}
                  onChange={handleCheckChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                سیستم پذیرش
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%]  relative my-5">
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.description.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          تجهیزات تست و تعمیر
        </label>
        {formik.errors.description && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.description}
          </div>
        )}
      </div>

      <div className="w-[80%]  relative my-5">
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.description.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          شرح وضعیت پذیرایی (اختیاری)
        </label>
        {formik.errors.description && (
          <div className="text-mainRed text-xs pt-1 ">
            {formik.errors.description}
          </div>
        )}
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
