import PlusIcon from "@/icon/PlusIcon";
import DangerIcon from "@/icon2/DangerIcon";
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
const MAX_FILE_SIZE = 4194304;

export default function PersonalPicture({ formik }) {
  const openFilePickerPersonalPic = () => {
    document.getElementById("fileInputPersonalPic").click();
  };


  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    return fileList;
  };

  const handleFileDeleteFromListPersonalPic = (fileClicked, indexClicked) => {
    const filtered = formik.values.personalPic.filter(
      (file, index) => file.name !== fileClicked.name && indexClicked !== index
    );
    formik.setFieldValue("personalPic", filtered);
  };
  return (
    <div
      className={
        "bg-[#F7F7F7] rounded-xl   pt-4 px-3 w-full " +
        " " +
        `${formik.values.personalPic.length > 0 ? " pb-3  " : "  "}`
      }
    >
      <div className=" flex flex-col items-start gap-2  ">
        <div
          className={
            "w-full flex flex-col items-start  after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
            " " +
            `${
              formik.values.personalPic.length > 0 ? " after:w-[100%]  " : "  "
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
              name="personalPic"
              onChange={(event) => {
                formik.setFieldValue("personalPic", [
                  ...handleFileChange(event),
                ]);
              }}
              onBlur={formik.handleBlur}
              type="file"
              placeholder="فایل را آپلود کنید."
              id="fileInputPersonalPic"
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
              تصویر پرسنلی
            </label>
            <button
              className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%]  cursor-pointer"
              onClick={openFilePickerPersonalPic}
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
                formik.errors.personalPic && formik.touched.personalPic
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.personalPic}
          </div>
        </div>
        {formik.values.personalPic.map((item, index) => (
          <div
            key={index}
            className="bg-[#FDFDFD] flex flex-row p-3  rounded-xl items-center w-full "
          >
            <div className="text-[#242424] leading-5 text-xs flex-grow">
              {item.name.length > 100
                ? item.name.substring(0, 100) + "..."
                : item.name}
            </div>
            <button
              onClick={() => handleFileDeleteFromListPersonalPic(item, index)}
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
