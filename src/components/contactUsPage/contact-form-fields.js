"use client";
import ToastBox from "../global/toast";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/arrow-down";
export default function ContactUsFormFields() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);
  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      name: "",
      description: "",
      phone: "",
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
    validationSchema: yup.object({
      subject: yup.string().trim().required("موضوع را وارد نمایید"),
      name: yup.string().trim().required("نام را وارد کنید"),
      email: yup
        .string()
        .email("ایمیل نامعتبر است")
        .required("ایمیل را وارد کنید"),
      description: yup.string().trim().required("پیام را وارد نمایید"),
    }),
  });

  const [status, setStatus] = useState(false);
  return (
    <>
      {submitted ? (
        <ToastBox type="success" statusval={toast}>
          {" "}
          {message}
        </ToastBox>
      ) : (
        ""
      )}
      {
        <ToastBox type="danger" statusval={toast}>
          {" "}
          {message}
        </ToastBox>
      }

      <form
        className="flex flex-wrap justify-between"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full md:w-[49%] mb-8 relative   ">
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
            onClick={() => setStatus(!status)}
            onBlur={formik.handleBlur}
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
                  {" "}
                  <input
                    type="radio"
                    id="SUGGESTIONS"
                    name="subject"
                    onClick={() => setStatus(!status)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="SUGGESTIONS"
                    className="opacity-0 pointer-events-none absolute"
                  />{" "}
                  <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>
                  پیشنهاد{" "}
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
                  />{" "}
                  <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>{" "}
                  انتقاد{" "}
                </label>
              </div>
              <div className=" px-3 py-2 ">
                <label
                  for="OTHER_TOPICS"
                  className="flex items-center relative"
                >
                  {" "}
                  <input
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="radio"
                    id="OTHER_TOPICS"
                    value="OTHER_TOPICS"
                    className="opacity-0 pointer-events-none absolute"
                  />{" "}
                  <span class="checkmark inline-flex w-6 h-6 rounded-3xl ml-2 "></span>
                  سایر موضوعات{" "}
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full md:w-[49%] mb-8 relative">
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className={
              (formik.values.name.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label className=" absolute top-3 right-4  pointer-events-none">
            نام و نام خانوادگی
          </label>
          {formik.errors.name && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="w-full md:w-[49%] mb-8 relative">
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.phone.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label className=" absolute top-3 right-4  pointer-events-none">
            شماره تماس (اختیاری)
          </label>
          {formik.errors.phone && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div className="w-full md:w-[49%] mb-8 relative">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.email.length > 0
                ? " input-label-pos-active "
                : " ") +
              " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
            }
          />
          <label className=" absolute top-3 right-4  pointer-events-none">
            ایمیل
          </label>
          {formik.errors.email && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="w-full md:w-full relative">
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.description.length > 0
                ? " input-label-pos-active "
                : " ") +
              " min-h-32 w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
            }
          ></textarea>
          <label className=" absolute top-3 right-4  pointer-events-none">
            متن پیام را اینجا بنویسید...
          </label>
          {formik.errors.description && (
            <div className="text-mainRed text-xs pt-1 ">
              {formik.errors.description}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-mainYellow rounded-xl  px-6 leading-10 inline-flex mt-8 mx-auto font-bold text-base items-center  hover:bg-[#f7f7f7]  transition  duration-500"
        >
          ارسال پیام
          <span className="mr-2">
            <ArrowLeftIcon color="#000" />
          </span>
        </button>
      </form>
    </>
  );
}
