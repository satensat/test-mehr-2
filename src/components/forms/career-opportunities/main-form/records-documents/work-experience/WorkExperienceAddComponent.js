import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PlusIcon from "@/icon/PlusIcon";
import TrashIcon from "@/icon2/TrashIcon";
import Edit2Icon from "@/icon2/Edit2Icon";
import DangerIcon from "@/icon2/DangerIcon";
import TickSquare from "@/icon2/TickSquare";

import StartDatePicker from "./StartDatePicker";

import Briefcase from "@/icon2/Briefcase";
import EndDateMonthPicker from "./EndDateMonthPicker";
import StartDateMonthPicker from "./StartDateMonthPicker";
import EndDatePicker from "./EndDatePicker";

const validationSchema = yup
  .object({
    name: yup.string().required("نام شرکت را وارد نمایید."),
    job_title: yup.string().required("عنوان شغلی را انتخاب کنید."),
    salary: yup.string().required("متوسط دریافت ماهانه را وارد نمایید."),
    phone_number: yup.string().required("شماره تماس شرکت را وارد نمایید."),
    address: yup.string().max(225, "توضیحات نباید بیشتر از 225 کاراکتر باشد."),
    start_date: yup.date().nonNullable().required("سال شروع  را وارد کنید."),
    start_date_month: yup
      .string()
      .required("ماه شروع  را وارد کنید."),
    end_date: yup.date().when("not_end", {
      is: true,
      then: () => yup.date(),
      otherwise: () =>
        yup
          .date()
          .nonNullable()
          .test(
            "",
            "تاریخ پایان باید بعد از تاریخ شروع باشد.",
            (val, props) => {
              console.log(props);
              console.log(val);
              // const valueOfDate = new Date(val).getTime();
              // const startDate = new Date(props.parent.start_date).getTime();
              if (props.parent.start_date < val) {
                return true;
              }
            }
          )
          .required("تاریخ پایان  را وارد کنید."),
      // otherwise:()=> yup.date()
      // .required("تاریخ پایان را وارد کنید.")
      // .min(yup.ref('start_date'), "تاریخ پایان باید بعد از تاریخ شروع باشد.")
    }),
    end_date_month: yup.date().when("not_end", {
      is: true,
      then: () => yup.string(),
      otherwise: () => yup.string().required("ماه پایان  را وارد کنید."),
    }),
    not_end: yup.boolean(),
    description: yup
      .string()
      .max(225, "توضیحات نباید بیشتر از 225 کاراکتر باشد."),
    // phone: yup.string()
    //   .when(['name', 'lastName', 'address'], {
    //     is: (name, lastName, address) => !name && !lastName && !address,
    //     then: yup.string().required('Phone is required when other fields are empty'),
    //     otherwise: () => yup.string().notRequired(),
    //   })
  })
  .required();

export default function WorkExperienceAddComponent({
  formik,
  workExperience,
  setWorkExperience,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    name: "",
    job_title: "",
    salary: "",
    phone_number: "",
    grade: "",
    total_average: "",
    start_date: "",
    start_date_month: "",
    end_date: "",
    end_date_month: "",
    not_end: false,
    description: "",
  });
  const [editStatus, setEditStatus] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };
  const formikEducation = useFormik({
    initialValues: {
      name: editItem.name !== "" ? editItem.name : "",
      job_title: editItem.job_title !== "" ? editItem.job_title : "",
      salary: editItem.salary !== "" ? editItem.salary : "",
      phone_number: editItem.phone_number !== "" ? editItem.phone_number : "",
      address: editItem.address !== "" ? editItem.address : "",
      start_date: editItem.start_date !== "" ? editItem.start_date : "",
      start_date_month:
        editItem.start_date_month !== "" ? editItem.start_date_month : "",
      end_date: editItem.end_date !== "" ? editItem.end_date : "",
      end_date_month:
        editItem.end_date_month !== "" ? editItem.end_date_month : "",
      not_end: editItem.not_end !== "" ? editItem.not_end : false,
      description: editItem.description !== "" ? editItem.description : "",
      id: editItem.id !== "" ? editItem.id : "",
    },
    onSubmit: (values, actions) => {
      if (!editStatus) {
        const valueWithId = { ...values, id: Date.now() };
        setWorkExperience((prev) => [...prev, valueWithId]);
        //   formik.setvalues()
        actions.resetForm();
      } else {
        const indexItem = workExperience.findIndex(
          (item) => item.id === values.id
        );
        const testArray = workExperience;
        testArray[indexItem] = values;
        setWorkExperience(testArray);
        setEditStatus(false);
        actions.resetForm();
        setEditItem({
          name: "",
          job_title: "",
          salary: "",
          phone_number: "",
          address: "",
          start_date: "",
          start_date_month: "",
          end_date: "",
          end_date_month: "",
          not_end: false,
          description: "",
          id: "",
        });
      }
    },
    validationSchema,
    enableReinitialize: true,
  });
  const handleDeleteItem = (input, index) => {
    const filteredItem = workExperience.filter((item) => item.id !== input.id);
    setWorkExperience(filteredItem);
  };
  return (
    <div className="bg-[#f7f7f7] rounded-xl pt-2 px-3 pb-3 flex flex-col w-full font-costumFaNum  ">
      <div className="flex flex-row items-center gap-2">
        <Briefcase />
        <div className="font-bold text-sm leading-6 text-[#242424]">
          سابقه شغلی
        </div>
      </div>
      <div className="flex flex-col  mt-2 md:mt-0 ">
        <div
          className={
            "pt-2 flex flex-col after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
            " " +
            `${
              workExperience.length > 0 ? " after:w-[100%] after:mt-3  " : "  "
            }`
          }
        >
          <div
            className={
              "flex flex-col mt-3  " +
              `${openForm ? "   h-auto " : "   h-0 overflow-hidden "}`
            }
          >
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <div className="group w-full  mb-3 grow  relative md:w-[50%] ">
                <input
                  name="name"
                  value={formikEducation.values.name}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.name?.length > 0
                      ? " input-label-pos-active "
                      : " ") +
                    " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                  }
                />
                <label
                  className={
                    " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                    " " +
                    `${
                      formikEducation.values.name?.length > 0 ? "text-xs" : ""
                    }`
                  }
                >
                  نام شرکت
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.name &&
                      formikEducation.touched.name
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.name}
                </div>
              </div>
              <div className="group w-full  mb-3 grow  relative md:w-[50%] ">
                <input
                  name="job_title"
                  value={formikEducation.values.job_title}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.job_title?.length > 0
                      ? " input-label-pos-active "
                      : " ") +
                    " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                  }
                />
                <label
                  className={
                    " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                    " " +
                    `${
                      formikEducation.values.job_title?.length > 0
                        ? "text-xs"
                        : ""
                    }`
                  }
                >
                  عنوان شغلی
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.job_title &&
                      formikEducation.touched.job_title
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.job_title}
                </div>
              </div>
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <div className="group w-full  mb-3 grow  md:w-[50%] relative ">
                <input
                  name="salary"
                  value={formikEducation.values.salary}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.salary?.length > 0
                      ? " input-label-pos-active "
                      : " ") +
                    " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                  }
                />
                <label
                  className={
                    " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                    " " +
                    `${
                      formikEducation.values.salary?.length > 0 ? "text-xs" : ""
                    }`
                  }
                >
                  متوسط دریافت ماهانه
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.salary &&
                      formikEducation.touched.salary
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.salary}
                </div>
              </div>
              <div className="group w-full  mb-3 grow  md:w-[50%] relative ">
                <input
                  name="phone_number"
                  value={formikEducation.values.phone_number}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.phone_number?.length > 0
                      ? " input-label-pos-active "
                      : " ") +
                    " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
                  }
                />
                <label
                  className={
                    " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                    " " +
                    `${
                      formikEducation.values.phone_number?.length > 0
                        ? "text-xs"
                        : ""
                    }`
                  }
                >
                  شماره تماس شرکت
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.phone_number &&
                      formikEducation.touched.phone_number
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.phone_number}
                </div>
              </div>
            </div>
            <div className="w-full group relative mt-2">
              <textarea
                name="address"
                value={formikEducation.values.address}
                onChange={formikEducation.handleChange}
                onBlur={formikEducation.handleBlur}
                className={
                  (formikEducation.values.address?.length > 0
                    ? " input-label-pos-active "
                    : " ") +
                  " min-h-32 w-full px-4 placeholder-gray resize-none   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
                }
              ></textarea>
              <label
                className={
                  " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                  " " +
                  `${
                    formikEducation.values.address?.length > 0
                      ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                      : ""
                  }`
                }
              >
                آدرس شرکت
              </label>
              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formikEducation.errors.address &&
                    formikEducation.touched.address
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formikEducation.errors.address}
              </div>
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <StartDatePicker formik={formikEducation} />
              <StartDateMonthPicker formik={formikEducation} />
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <EndDatePicker formik={formikEducation} />
              <EndDateMonthPicker formik={formikEducation} />
            </div>
            <div className="w-full group relative mt-2">
              <textarea
                name="description"
                value={formikEducation.values.description}
                onChange={formikEducation.handleChange}
                onBlur={formikEducation.handleBlur}
                className={
                  (formikEducation.values.description?.length > 0
                    ? " input-label-pos-active "
                    : " ") +
                  " min-h-32 w-full px-4 placeholder-gray resize-none   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
                }
              ></textarea>
              <label
                className={
                  " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                  " " +
                  `${
                    formikEducation.values.description?.length > 0
                      ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                      : ""
                  }`
                }
              >
                توضیحات
              </label>
              <div
                className={
                  "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                  " " +
                  `${
                    formikEducation.errors.description &&
                    formikEducation.touched.description
                      ? " opacity-100 "
                      : " opacity-0 "
                  }`
                }
              >
                <DangerIcon />
                {formikEducation.errors.description}
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center w-full pt-3 pb-6  ">
              <button
                onClick={() => {
                  handleOpenForm();
                  formikEducation.resetForm();
                  setEditStatus(false);
                  setEditItem({
                    name: "",
                    job_title: "",
                    salary: "",
                    phone_number: "",
                    address: "",
                    start_date: "",
                    start_date_month: "",
                    end_date: "",
                    end_date_month: "",
                    not_end: false,
                    description: "",
                    id: "",
                  });
                }}
                className="transition ease-in-out duration-400 group flex flex-row justify-center items-center text-[#13625C]  border-solid border-[1px] text-sm not-italic font-bold leading-6 border-[#13625C] rounded-xl  hover:text-white  hover:bg-mainGreen1  bg-[#ffff] px-3 py-1 min-w-[104px]  "
              >
                انصراف
              </button>
              <button
                onClick={formikEducation.handleSubmit}
                className={
                  " group transition ease-in-out duration-500  flex flex-row justify-center items-center gap-2 px-3 py-1 text-sm  font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit w-fit  hover:bg-mainYellow  hover:text-[#000] min-w-[104px] " +
                  " "
                }
              >
                تایید
                <div className="transition ease-in-out duration-500  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
                  <TickSquare width={"16"} height={"16"} />
                </div>
              </button>
            </div>
          </div>
          {!openForm && (
            <button
              onClick={handleOpenForm}
              className={
                "mx-auto group transition ease-in-out duration-500  flex flex-row justify-center items-center gap-2 px-3 py-1 text-sm  font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit w-fit  hover:bg-mainYellow  hover:text-[#000] " +
                " "
              }
            >
              ایجاد سابقه
              <div className="transition ease-in-out duration-500  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
                <PlusIcon width={"16"} height={"16"} />
              </div>
            </button>
          )}
        </div>
        <div
          className={
            "flex flex-row gap-6  items-center flex-wrap mt-3 " +
            `${workExperience.length > 0 ? "  " : "  hidden"}`
          }
        >
          {workExperience.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-3 w-full  pl-2 pr-3 py-1 items-center rounded-xl bg-[#FDFDFD] font-costumFaNum"
              >
                <div className="flex flex-col flex-grow gap-[1px]">
                  <div className="text-[#808080] leading-6 text-xs font-bold flex-grow">
                    {item.name}
                  </div>
                  <div className="text-[#242424] leading-6 text-sm flex-grow">
                    {item.job_title}
                  </div>
                  <div className="text-[#808080] leading-6 text-sm flex-grow">
                    {item.start_date_month} {item.start_date} تا{" "}
                    {item.end_date_month}{" "}
                    {item.end_date !== "" ? item.end_date : "اکنون"}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEditItem(item);
                    setEditStatus(true);
                  }}
                  className="group transition ease-in-out duration-500 text-center rounded-2xl font-bold hover:bg-mainGreen1  "
                >
                  <div className="transition ease-in-out duration-500 p-2 group-hover:brightness-0 group-hover:invert ">
                    <Edit2Icon />
                  </div>
                </button>
                <button
                  onClick={() => handleDeleteItem(item, index)}
                  className="group transition ease-in-out duration-500 text-center rounded-2xl font-bold hover:bg-mainGreen1  "
                >
                  <div className="transition ease-in-out duration-500 py-2 px-2 group-hover:brightness-0 group-hover:invert ">
                    <TrashIcon />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
