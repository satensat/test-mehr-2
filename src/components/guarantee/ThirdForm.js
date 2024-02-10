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
import DangerIcon from "@/icon2/DangerIcon";

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
const MAX_FILE_SIZE = 102400;


  // first: yup
  //   .array()
  //   .of(
  //     yup.mixed().test("fileType", "File must be a PDF or image", (value) => {
  //       if (!value) return true; // If no file is selected, validation passes
  //       const supportedTypes = ["image/jpeg","image/gif","image/jpeg","image/jpeg", "image/png", "application/pdf"];
  //       return supportedTypes.includes(value.type);
  //     })
  //   )
  //   .max(5, "You can upload a maximum of 5 files"), // Adjust the maximum number of files as needed
const validationSchema = yup.object({
  first: yup.array(),
  // .of(
  //   yup
  //     .mixed()
  //     .test("is-valid-type", "Not a valid image type", (value) =>
  //       isValidFileType(value && value.name.toLowerCase(), "image")
  //     )
  //     .test(
  //       "is-valid-size",
  //       "Max allowed size is 100KB",
  //       (value) => value && value.size <= MAX_FILE_SIZE
  //     )
  // ),
  second: yup.array(),
  last: yup.array(),
});

export default function ThirdForm() {
  const openFilePicker = () => {
    document.getElementById("fileInput").click();
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    return fileList;
  };

  const handleFileDeleteFromListFirst = (fileClicked, indexClicked) => {
    const filtered = formik.values.first.filter(
      (file, index) => (file.name !== fileClicked.name && indexClicked !== index)
    );
    formik.setFieldValue("first", filtered);
  };

  const  handleFileDeleteFromListSecond= (fileClicked, indexClicked) => {
    const filtered = formik.values.second.filter(
      (file, index) => (file.name !== fileClicked.name && indexClicked !== index)
    );
    formik.setFieldValue("second", filtered);
  };
  const  handleFileDeleteFromListLast= (fileClicked, indexClicked) => {
    const filtered = formik.values.second.filter(
      (file, index) => (file.name !== fileClicked.name && indexClicked !== index)
    );
    formik.setFieldValue("second", filtered);
  };


  const formik = useFormik({
    initialValues: {
      first: [],
      second: [],
      last: [],
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
          <div className={"bg-[#F7F7F7] rounded-xl   pt-4 px-3 "+
                  " " +
                  `${
                    formik.values.first.length > 0 ? " pb-3  " : "  "
                  }`}>
            <div className=" flex flex-col items-start gap-2  ">
              <div
                className={
                  "w-full flex flex-col items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
                  " " +
                  `${
                    formik.values.first.length > 0 ? " after:w-[100%]  " : "  "
                  }`
                }
              >
                <div
                  className={
                    (true ? " input-label-pos-active " : " ") +
                    "relative w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos  "
                  }
                >
                  <input
                    name="first"
                    onChange={(event) => {
                      formik.setFieldValue("first", [
                        ...formik.values.first,
                        ...handleFileChange(event),
                      ]);
                    }}
                    onBlur={formik.handleBlur}
                    type="file"
                    placeholder="فایل را آپلود کنید."
                    id="fileInput"
                    // accept="image/png, image/jpg, image/jpeg, application/pdf"
                    accept={getAllowedExt("file")}
                    multiple
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                    htmlFor="fileInput"
                  >
                    اظهارنامه مالیات بر ارزش افزوده
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePicker}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>

                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formik.errors.first && formik.touched.first
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formik.errors.first}
                </div>
              </div>

              {formik.values.first.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FDFDFD] flex flex-row p-3  rounded-xl items-center w-full "
                >
                  <div className="text-[#242424] leading-5 text-xs flex-grow">
                    {item.name}
                  </div>
                  <button
                    onClick={() => handleFileDeleteFromListFirst(item, index)}
                    className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  "
                  >
                    حذف
                    <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                      <CloseModal
                        color={"#13625C"}
                        width={"16"}
                        height={"16"}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>



          <div className={"bg-[#F7F7F7] rounded-xl   pt-4 px-3 "+
                  " " +
                  `${
                    formik.values.second.length > 0 ? " pb-3  " : "  "
                  }`}>
            <div className=" flex flex-col items-start gap-2  ">
              <div
                className={
                  "w-full flex flex-col items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
                  " " +
                  `${
                    formik.values.second.length > 0 ? " after:w-[100%]  " : "  "
                  }`
                }
              >
                <div
                  className={
                    (true ? " input-label-pos-active " : " ") +
                    "relative w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos  "
                  }
                >
                  <input
                    name="second"
                    onChange={(event) => {
                      formik.setFieldValue("second", [
                        ...formik.values.second,
                        ...handleFileChange(event),
                      ]);
                    }}
                    onBlur={formik.handleBlur}
                    type="file"
                    placeholder="فایل را آپلود کنید."
                    id="fileInput"
                    // accept="image/png, image/jpg, image/jpeg, application/pdf"
                    accept={getAllowedExt("file")}
                    multiple
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                    htmlFor="fileInput"
                  >
                                     گواهینامه شورای انفورماتیک
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePicker}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>

                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formik.errors.second && formik.touched.second
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formik.errors.second}
                </div>
              </div>

              {formik.values.second.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FDFDFD] flex flex-row p-3  rounded-xl items-center w-full "
                >
                  <div className="text-[#242424] leading-5 text-xs flex-grow">
                    {item.name}
                  </div>
                  <button
                    onClick={() => handleFileDeleteFromListSecond(item, index)}
                    className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  "
                  >
                    حذف
                    <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                      <CloseModal
                        color={"#13625C"}
                        width={"16"}
                        height={"16"}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>



          <div className={"bg-[#F7F7F7] rounded-xl   pt-4 px-3 " +
                  " " +
                  `${
                    formik.values.last.length > 0 ? " pb-3  " : "  "
                  }`}>
            <div className=" flex flex-col items-start gap-2  ">
              <div
                className={
                  "w-full flex flex-col items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
                  " " +
                  `${
                    formik.values.last.length > 0 ? " after:w-[100%]  " : "  "
                  }`
                }
              >
                <div
                  className={
                    (true ? " input-label-pos-active " : " ") +
                    "relative w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos  "
                  }
                >
                  <input
                    name="last"
                    onChange={(event) => {
                      formik.setFieldValue("last", [
                        ...formik.values.last,
                        ...handleFileChange(event),
                      ]);
                    }}
                    onBlur={formik.handleBlur}
                    type="file"
                    placeholder="فایل را آپلود کنید."
                    id="fileInput"
                    // accept="image/png, image/jpg, image/jpeg, application/pdf"
                    accept={getAllowedExt("file")}
                    multiple
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                    htmlFor="fileInput"
                  >
                                  تصاویر محل کار
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePicker}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>

                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formik.errors.last && formik.touched.last
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formik.errors.last}
                </div>
              </div>

              {formik.values.last.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FDFDFD] flex flex-row p-3  rounded-xl items-center w-full "
                >
                  <div className="text-[#242424] leading-5 text-xs flex-grow">
                    {item.name}
                  </div>
                  <button
                    onClick={() => handleFileDeleteFromListLast(item, index)}
                    className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  "
                  >
                    حذف
                    <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                      <CloseModal
                        color={"#13625C"}
                        width={"16"}
                        height={"16"}
                      />
                    </div>
                  </button>
                </div>
              ))}
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
