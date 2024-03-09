import PlusIcon from "@/icon/PlusIcon";
import DangerIcon from "@/icon2/DangerIcon";
import TrashIcon from "@/icon2/TrashIcon";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import DocumentTextIcon from "@/icon2/DocumentTextIcon";
import TypeOfDocument from "./TypeOfDocument";

function getAllowedExt(type) {
  return validFileExtensions[type].map((e) => `.${e}`).toString();
}
// 102400
//  4194304 ----- 4MB
//  3145728 ----- 3MB
const MAX_FILE_SIZE = 4194304;

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

const validationSchema = yup
  .object({
    type_document: yup.string().required("نوع فایل را وارد نمایید."),
    documentPic: yup
      .array()
      .min(1, " تصویر مدرک خود را وارد کنید. ")
      .max(1, "تنها یک تصویر مدرک باید وارد کنید.")
      .of(
        yup
          .mixed()
          .required(" تصویر الزامی است.")
          .test(
            "fileFormat",
            "فقط فایل های jpg، jpeg، webp، pdf و png مجاز هستند.",
            (value) => {
              // console.log(value)
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
      .required("تصویر مدرک الزامی است."),
  })
  .required("فایل را وارد نمایید.");

export default function DocumentAddComponent({
  documentsList,
  setDocumentsList,
}) {
  const formikEducation = useFormik({
    initialValues: {
      documentPic: [],
      type_document: "",
    },
    onSubmit: (values, actions) => {
      const valueWithId = { ...values, timeAdd: Date.now() };
      setDocumentsList((prev) => [...prev, valueWithId]);
      //   formik.setvalues()
      actions.resetForm();
    },
    validationSchema,
    enableReinitialize: true,
  });
  const handleDeleteItem = (input, index) => {
    const filteredItem = documentsList.filter(
      (item) => item.timeAdd !== input.timeAdd
    );
    setDocumentsList(filteredItem);
  };

  const openFilePickerDocumentPic = () => {
    document.getElementById("fileInputdocumentPic").click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    return fileList;
  };

  const handleFileDeleteFromListDocumentPic = (fileClicked, indexClicked) => {
    const filtered = documentsList.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    setDocumentsList(filtered);
  };
  return (
    <div
      className={
        "bg-[#F7F7F7] rounded-xl   pt-4 px-3 w-full " +
        " " +
        `${documentsList?.length > 0 ? " pb-3  " : "  "}`
      }
    >
      <div className="flex flex-row items-center gap-2">
        <DocumentTextIcon />
        <div className="font-bold text-sm leading-6 text-[#242424]">
          سابقه تحصیلی
        </div>
      </div>
      <div className=" flex flex-col items-start gap-2  ">
        <div
          className={
            "w-full flex flex-col  items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
            " " +
            `${documentsList?.length > 0 ? " after:w-[100%]  " : "  "}`
          }
        >
          <div className="flex flex-col md:flex-row gap-6 w-full items-center mt-3 ">
            <TypeOfDocument formik={formikEducation} />
            <div className="flex flex-col items center md:w-[50%] grow w-full">
              <div
                className={
                  (true ? "  " : " ") +
                  "relative w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white   "
                }
              >
                <input
                  name="documentPic"
                  // readOnly
                  onChange={(event) => {
                    formikEducation.setFieldValue("documentPic", [
                      ...handleFileChange(event),
                    ]);
                  }}
                  onBlur={formikEducation.handleBlur}
                  type="file"
                  placeholder="فایل را آپلود کنید."
                  id="fileInputdocumentPic"
                  accept={getAllowedExt("file")}
                  multiple={false}
                  className={
                    (true ? " input-label-pos-active " : " ") +
                    " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 "
                  }
                />
                <label
                  className=" absolute top-4 right-4  pointer-events-none rounded-2xl text-xs "
                  htmlFor="fileInput"
                >
                  فایل آپلودی
                </label>
                <div></div>
                <button
                  className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
                  onClick={openFilePickerDocumentPic}
                >
                  <PlusIcon width={"24"} height={"24"} color={"#13625C"} />
                </button>
                <div
                  className={
                    "text-[#ABABAB] absolute top-3 right-4  pointer-events-none rounded-2xl " +
                    `${
                      formikEducation.values.documentPic.length === 0
                        ? "  flex"
                        : "  hidden"
                    }`
                  }
                >
                  فایل را آپلود کنید.
                </div>
                <div className="text-[#242424] leading-5 text-xs flex-grow absolute top-3 right-4  pointer-events-none rounded-2xl ">
                  {formikEducation.values.documentPic?.map((item, index) => (
                    <div
                      key={item.name}
                      className="text-[#242424] leading-5 text-xs flex-grow"
                    >
                      {item.name.length > 100
                        ? item.name.substring(0, 100) + "..."
                        : item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500  font-costumFaNum  " +
                  " " +
                  `${
                    formikEducation.errors.documentPic &&
                    formikEducation.touched.documentPic
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formikEducation.errors.documentPic}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center w-full pt-3 pb-6  ">
            <button
              onClick={formikEducation.handleSubmit}
              className={
                "mx-auto group transition ease-in-out duration-500  flex flex-row justify-center items-center gap-2 px-3 py-1 text-sm  font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit w-fit  hover:bg-mainYellow  hover:text-[#000] " +
                " "
              }
            >
              اضافه کردن
              <div className="transition ease-in-out duration-500  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
                <PlusIcon width={"16"} height={"16"} />
              </div>
            </button>
          </div>
        </div>
        {documentsList?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FDFDFD] flex flex-row p-3  rounded-xl items-center w-full "
          >
            <div className="flex flex-col flex-grow">
              <div className="text-[#808080] leading-6 text-xs flex-grow">
                {item.type_document}
              </div>
              {item.documentPic.lengh !== 0 && (
                <div className="text-[#242424] leading-6 text-sm flex-grow">
                  {item.documentPic[0]?.name.length > 100
                    ? item.documentPic[0].name.substring(0, 100) + "..."
                    : item.documentPic[0].name}
                </div>
              )}
            </div>
            <button
              onClick={() => handleFileDeleteFromListDocumentPic(item, index)}
              className="group transition ease-in-out duration-500 text-center rounded-2xl font-bold hover:bg-mainGreen1  "
            >
              <div className="transition ease-in-out duration-500 py-1 px-2 group-hover:brightness-0 group-hover:invert ">
                <TrashIcon />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
