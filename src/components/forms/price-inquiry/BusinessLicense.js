import DangerIcon from "@/icon2/DangerIcon";
import MidAttachIcon from "@/icon2/MidAttachIcon";
import TrashIcon from "@/icon2/TrashIcon";
import React from "react";

const validFileExtensions = {
  file: ["jpg", "gif", "png", "jpeg", "svg", "webp", "pdf"],
};

function getAllowedExt(type) {
  return validFileExtensions[type].map((e) => `.${e}`).toString();
}
// 102400
//  4194304 ----- 4MB
//  3145728 ----- 3MB
// const MAX_FILE_SIZE = 4194304;

export default function BusinessLicense({ formik }) {
  const openFilePickerPicture = () => {
    document.getElementById("fileInputPictureBusiness").click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    return fileList;
  };

  const handleFileDeleteFromListPicture = (fileClicked, indexClicked) => {
    const filtered = formik.values.business_license.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    formik.setFieldValue("business_license", filtered);
  };
  return (
    <div
      className={
        "bg-[#FDFDFD] rounded-xl   pt-4 px-3 w-full " +
        " " +
        `${formik.values.business_license.length > 0 ? " pb-3  " : "  "}`
      }
    >
      <div className=" flex flex-col items-start gap-2  ">
        <div
          className={
            "w-full flex flex-col items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
            " " +
            `${
              formik.values.business_license.length > 0
                ? " after:w-[100%]  "
                : "  "
            }`
          }
        >
          <div
            className={
              (true ? " input-label-pos-active " : " ") +
              "relative w-full pr-4 pl-1 placeholder-gray  h-11 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos flex flex-row items-center "
            }
          >
            <input
              name="business_license"
              onChange={(event) => {
                formik.setFieldValue("business_license", [
                  ...handleFileChange(event),
                ]);
              }}
              onBlur={formik.handleBlur}
              type="file"
              placeholder="فایل را آپلود کنید."
              id="fileInputPictureBusiness"
              accept={getAllowedExt("file")}
              multiple={false}
              className={
                (true ? " input-label-pos-active " : " ") +
                "  py-3 px-1 placeholder:text-xs placeholder:text-[#E6E6E6]  h-12 resize-none  border border-gray-300 rounded-2xl bg-white  opacity-0 flex-grow "
              }
            />
            <label
              className=" absolute top-4 right-4  pointer-events-none rounded-2xl text-xs "
              htmlFor="fileInput"
            >
              جواز کسب
            </label>
            <button
              onClick={openFilePickerPicture}
              className={
                "  h-fit min-w-[90px] cursor-pointer  group transition ease-in-out duration-500  flex flex-row justify-between items-center  px-2 py-1 text-xs not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1   hover:bg-mainYellow  hover:text-[#000]  "
              }
            >
              آپلود فایل
              <div className="transition ease-in-out duration-500   brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
                <MidAttachIcon />
              </div>
            </button>
            <div className="text-xs text-[#E6E6E6] absolute top-[50%] -translate-y-[50%] right-4  pointer-events-none rounded-2xl  ">
              فایل را آپلود کنید.
            </div>
          </div>

          <div
            className={
              "text-mainRed mb-2 text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500  font-costumFaNum  " +
              " " +
              `${
                formik.errors.business_license &&
                formik.touched.business_license
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.business_license}
          </div>
        </div>
        {formik.values.business_license.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] flex flex-row p-3  rounded-2xl items-center w-full "
          >
            <div className="text-[#242424] leading-5 text-xs flex-grow">
              {item.name.length > 100
                ? item.name.substring(0, 100) + "..."
                : item.name}
            </div>
            <button
              onClick={() => handleFileDeleteFromListPicture(item, index)}
              className="group transition ease-in-out duration-500 text-center rounded-2xl font-bold hover:bg-mainGreen1  "
            >
              <div className="transition ease-in-out duration-500 py-2 px-2 group-hover:brightness-0 group-hover:invert ">
                <TrashIcon />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
