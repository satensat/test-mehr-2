"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CloseModal from "@/icon/CloseModal";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "./ButtonCoverLoader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    first: yup
      .array()
      .min(1, "تصویر مدرک اظهارنامه مالیات بر ارزش افزوده خود را وارد کنید. ")
      .max(
        1,
        "تنها یک تصویر از مدرک اظهارنامه مالیات بر ارزش افزوده باید وارد کنید."
      )
      .of(
        yup
          .mixed()
          .required("تصویر مدرک اظهارنامه مالیات بر ارزش افزوده الزامی است.")
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
      .required("تصویر مدرک اظهارنامه مالیات بر ارزش افزوده الزامی است."),
    second: yup
      .array()
      .min(1, "تصویر مدرک گواهینامه شورای انفورماتیک خود را وارد کنید. ")
      .max(
        1,
        "تنها یک تصویر از مدرک گواهینامه شورای انفورماتیک باید وارد کنید."
      )
      .of(
        yup
          .mixed()
          .required("تصویر مدرک گواهینامه شورای انفورماتیک خود را الزامی است.")
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
      .required("تصویر مدرک گواهینامه شورای انفورماتیک خود را الزامی است."),
    last: yup
      .array()
      .min(1, "تصاویر محل کار خود را وارد کنید. ")
      .max(6, "  6 تصویر از محل کار کافی است.")
      .of(
        yup
          .mixed()
          .required("تصاویر محل کار الزامی است.")
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
      .required("تصاویر محل کار الزامی است."),
  })
  .required("First array is required");

export default function ThirdForm({
  formik,
  mainData,
  setMainData,
  thirdFormDoneToFourthForm,
  loadingButton,
  setLoadingButton,
  setActiveTab,
}) {
  const openFilePickerFirst = () => {
    document.getElementById("fileInputFirst").click();
  };



  const openFilePickerSecond = () => {
    document.getElementById("fileInputSecond").click();
  };

  const openFilePickerLast = () => {
    document.getElementById("fileInputLast").click();
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    return fileList;
  };

  const handleFileDeleteFromListFirst = (fileClicked, indexClicked) => {
    const filtered = formik.values.first.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    formik.setFieldValue("first", filtered);
  };

  const handleFileDeleteFromListSecond = (fileClicked, indexClicked) => {
    const filtered = formik.values.second.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    formik.setFieldValue("second", filtered);
  };
  const handleFileDeleteFromListLast = (fileClicked, indexClicked) => {
    const filtered = formik.values.last.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    formik.setFieldValue("last", filtered);
  };

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
          <div
            className={
              "bg-[#F7F7F7] rounded-xl   pt-4 px-3 " +
              " " +
              `${formik.values.first.length > 0 ? " pb-3  " : "  "}`
            }
          >
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
                    id="fileInputFirst"
                    accept={getAllowedExt("file")}
                    multiple={false}
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl text-xs "
                    htmlFor="fileInput"
                  >
                    اظهارنامه مالیات بر ارزش افزوده
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePickerFirst}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>

                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500  font-costumFaNum  " +
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
                    {item.name.substring(0, 24) + "..."}
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
          <div
            className={
              "bg-[#F7F7F7] rounded-xl   pt-4 px-3 " +
              " " +
              `${formik.values.second.length > 0 ? " pb-3  " : "  "}`
            }
          >
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
                    id="fileInputSecond"
                    accept={getAllowedExt("file")}
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl text-xs "
                    htmlFor="fileInput"
                  >
                    گواهینامه شورای انفورماتیک
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePickerSecond}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum " +
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
                    {item.name.substring(0, 24) + "..."}
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
          <div
            className={
              "bg-[#F7F7F7] rounded-xl   pt-4 px-3 " +
              " " +
              `${formik.values.last.length > 0 ? " pb-3  " : "  "}`
            }
          >
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
                    id="fileInputLast"
                    // accept="image/png, image/jpg, image/jpeg, application/pdf"
                    accept={getAllowedExt("file")}
                    multiple
                    className={
                      (true ? " input-label-pos-active " : " ") +
                      " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                    }
                  />
                  <label
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl text-xs "
                    htmlFor="fileInput"
                  >
                    تصاویر محل کار
                  </label>
                  <button
                    className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                    onClick={openFilePickerLast}
                  >
                    <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                  </button>
                  <div className="text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl ">
                    فایل را آپلود کنید.
                  </div>
                </div>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
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
                    {item.name.substring(0, 24) + "..."}
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
          <button
            onClick={formik.handleSubmit}
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
            مرحله بعد
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
