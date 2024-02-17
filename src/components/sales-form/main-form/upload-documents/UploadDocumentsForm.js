"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import CloseModal from "@/icon/CloseModal";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "../ButtonCoverLoader";
import formStyles from "../formcheckbox.module.css";

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




export default function UploadDocumentsForm({
    formik,
    mainData,
    setMainData,
    thirdFormDoneToFourthForm,
    loadingButton,
    setLoadingButton,
    activeTab,
    setActiveTab,
  }) {
  // ////-----------------------corporate or shop
  // const [corporateOrShop, setCorporateOrShop] = useState();

  // ////----------------------Certificate
  // const [certificate, setCertificate] = useState(false);

  ////----------------------loading state for send data button to go next step

//   const [loadingButton, setLoadingButton] = useState(false);

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
          <div className="  mt-1   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
            <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
              نوع واحد تجاری:
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
                <div className=" flex flex-row items-center gap-2 ">
                  <div
                    className={`${formStyles.containerRadioTick} `}
                    onClick={() =>
                      formik.setFieldValue("corporateOrShop", "corporate")
                    }
                  >
                    <input
                      type="radio"
                      checked={formik.values.corporateOrShop === "corporate"}
                      onChange={() =>
                        formik.setFieldValue("corporateOrShop", "corporate")
                      }
                    />
                    <div className={formStyles.checkmarkRadio}></div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    شرکتی
                  </div>
                </div>
              </div>
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
                <div className=" flex flex-row items-center gap-2 ">
                  <div
                    className={`${formStyles.containerRadioTick} `}
                    onClick={() =>
                      formik.setFieldValue("corporateOrShop", "shop")
                    }
                  >
                    <input
                      type="radio"
                      checked={formik.values.corporateOrShop === "shop"}
                      onChange={() =>
                        formik.setFieldValue("corporateOrShop", "shop")
                      }
                    />
                    <div className={formStyles.checkmarkRadio}></div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    فروشگاهی
                  </div>
                </div>
              </div>
            </div>
          </div>
          {formik.values.corporateOrShop === "corporate" && (
            <div className="  mt-1   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
              <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
                دارای گواهی ارزش افزوده؟
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => formik.setFieldValue("certificate", true)}
                    >
                      <input
                        type="radio"
                        checked={formik.values.certificate === true}
                        onChange={() =>
                          formik.setFieldValue("certificate", true)
                        }
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                    <div className="font-normal text-xs leading-6 text-[#242424]">
                      بله
                    </div>
                  </div>
                </div>
                <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => formik.setFieldValue("certificate", false)}
                    >
                      <input
                        type="radio"
                        checked={formik.values.certificate === false}
                        onChange={() =>
                          formik.setFieldValue("certificate", false)
                        }
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                    <div className="font-normal text-xs leading-6 text-[#242424]">
                      خیر
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formik.values.certificate &&
            formik.values.corporateOrShop === "corporate" && (
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
                        formik.values.first.length > 0
                          ? " after:w-[100%]  "
                          : "  "
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
                        className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                        htmlFor="fileInput"
                      >
                        گواهی ارزش افزوده
                      </label>
                      <button
                        className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                        onClick={openFilePickerFirst}
                      >
                        <PlusIcon
                          width={"24"}
                          height={"24"}
                          color={"#13625C"}
                        />
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
                        onClick={() =>
                          handleFileDeleteFromListFirst(item, index)
                        }
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
            )}
          {formik.values.corporateOrShop === "corporate" && (
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
                      formik.values.second.length > 0
                        ? " after:w-[100%]  "
                        : "  "
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
                      className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                      htmlFor="fileInput"
                    >
                      اساسنامه شرکت
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
                      onClick={() =>
                        handleFileDeleteFromListSecond(item, index)
                      }
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
          )}

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
                    className=" absolute top-3 right-4  pointer-events-none rounded-2xl "
                    htmlFor="fileInput"
                  >
                    جواز کسب
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

{
  /* <div
className={
  "w-[80%] mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
  " " +
  `${
    formik.errors.is_owner && formik.touched.is_owner
      ? " opacity-100 "
      : " opacity-0 "
  }`
}
>
<DangerIcon />
{formik.errors.is_owner}
</div> */
}
