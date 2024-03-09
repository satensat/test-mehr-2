import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PlusIcon from "@/icon/PlusIcon";
import TrashIcon from "@/icon2/TrashIcon";
import TeacherIcon from "@/icon2/TeacherIcon";
import Edit2Icon from "@/icon2/Edit2Icon";
import DangerIcon from "@/icon2/DangerIcon";
import TickSquare from "@/icon2/TickSquare";
import UniversityType from "./UniversityType";
import StartDatePicker from "./StartDatePicker";
import EndDatePicker from "./EndDatePicker";
import FieldOfStudy from "./FieldOfStudy";
import GradePart from "./GradePart";

const validationSchema = yup
  .object({
    name: yup.string().required("نام موسسه را وارد نمایید."),
    university_type: yup.string().required("نوع دانشگاه را انتخاب کنید."),
    field_of_study: yup.string().required("رشته تحصیلی را وارد نمایید."),
    academic_orientation: yup
      .string()
      .required("گرایش یا عنوان دقیق رشته تحصیلی را وارد نمایید."),
    grade: yup.string().required("مقطع تحصیلی را انتخاب کنید."),
    total_average: yup
      .number()
      .typeError("لطفا یک عدد وارد کنید.")
      .required("لطفا معدل کل وارد کنید.")
      .min(0, "عدد نمی‌تواند کوچکتر از صفر باشد.")
      .max(20, "عدد نمی‌تواند بزرگتر از 20 باشد.")
      .nullable(),
    start_date: yup.date().nonNullable().required("تاریخ شروع  را وارد کنید."),
    end_date: yup.date().when("not_end", {
      is: true,
      then: () => yup.date(), // If not_end is true, end_date is not required
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

export default function EducationalBackgroundAddComponent({
  formik,
  educationList,
  setEducationList,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    name: "",
    university_type: "",
    field_of_study: "",
    academic_orientation: "",
    grade: "",
    total_average: "",
    start_date: "",
    end_date: "",
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
      university_type:
        editItem.university_type !== "" ? editItem.university_type : "",
      field_of_study:
        editItem.field_of_study !== "" ? editItem.field_of_study : "",
      academic_orientation:
        editItem.academic_orientation !== ""
          ? editItem.academic_orientation
          : "",
      grade: editItem.grade !== "" ? editItem.grade : "",
      total_average:
        editItem.total_average !== "" ? editItem.total_average : "",
      start_date: editItem.start_date !== "" ? editItem.start_date : "",
      end_date: editItem.end_date !== "" ? editItem.end_date : "",
      not_end: editItem.not_end !== "" ? editItem.not_end : false,
      description: editItem.description !== "" ? editItem.description : "",
      timeAdd: editItem.timeAdd !== "" ? editItem.timeAdd : "",
    },
    onSubmit: (values, actions) => {
      if (!editStatus) {
        const valueWithId = { ...values, timeAdd: Date.now() };
        setEducationList((prev) => [...prev, valueWithId]);
        //   formik.setvalues()
        actions.resetForm();
      } else {
        const indexItem = educationList.findIndex(
          (item) => item.timeAdd === values.timeAdd
        );
        const testArray = educationList;
        testArray[indexItem] = values;
        setEducationList(testArray);
        setEditStatus(false);
        actions.resetForm();
        setEditItem({
          name: "",
          university_type: "",
          field_of_study: "",
          academic_orientation: "",
          grade: "",
          total_average: "",
          start_date: "",
          end_date: "",
          not_end: false,
          description: "",
          timeAdd: "",
        });
      }
    },
    validationSchema,
    enableReinitialize: true,
  });
  const handleDeleteItem = (input, index) => {
    const filteredItem = educationList.filter((item) => item.timeAdd !== input.timeAdd);
    setEducationList(filteredItem);
  };
  return (
    <div className="bg-[#f7f7f7] rounded-xl pt-2 px-3 pb-3 flex flex-col w-full font-costumFaNum  ">
      <div className="flex flex-row items-center gap-2">
        <TeacherIcon />
        <div className="font-bold text-sm leading-6 text-[#242424]">
          سابقه تحصیلی
        </div>
      </div>
      <div className="flex flex-col  mt-2 md:mt-0 ">
        <div
          className={
            "pt-2 flex flex-col after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
            " " +
            `${
              educationList.length > 0 ? " after:w-[100%] after:mt-3  " : "  "
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
                  نام موسسه
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
              <UniversityType formik={formikEducation} />
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <FieldOfStudy formik={formikEducation} />
              <div className="group w-full  mb-3 grow  md:w-[50%] relative ">
                <input
                  name="academic_orientation"
                  value={formikEducation.values.academic_orientation}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.academic_orientation?.length > 0
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
                      formikEducation.values.academic_orientation?.length > 0
                        ? "text-xs"
                        : ""
                    }`
                  }
                >
                  گرایش یا عنوان دقیق رشته تحصیلی
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.academic_orientation &&
                      formikEducation.touched.academic_orientation
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.academic_orientation}
                </div>
              </div>
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <GradePart formik={formikEducation} />
              <div className="group w-full  mb-3 grow md:w-[50%]  relative ">
                <input
                  name="total_average"
                  value={formikEducation.values.total_average}
                  onChange={formikEducation.handleChange}
                  onBlur={formikEducation.handleBlur}
                  type="text"
                  className={
                    (formikEducation.values.total_average?.length > 0
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
                      formikEducation.values.total_average?.length > 0
                        ? "text-xs"
                        : ""
                    }`
                  }
                >
                  معدل کل
                </label>
                <div
                  className={
                    "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                    " " +
                    `${
                      formikEducation.errors.total_average &&
                      formikEducation.touched.total_average
                        ? " opacity-100 "
                        : " opacity-0 "
                    }`
                  }
                >
                  <DangerIcon />
                  {formikEducation.errors.total_average}
                </div>
              </div>
            </div>
            <div className="flex flex-col grow w-full  md:flex-row items-center md:gap-6 ">
              <StartDatePicker formik={formikEducation} />
              <EndDatePicker formik={formikEducation} />
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
                    university_type: "",
                    field_of_study: "",
                    academic_orientation: "",
                    grade: "",
                    total_average: "",
                    start_date: "",
                    end_date: "",
                    not_end: false,
                    description: "",
                    timeAdd: "",
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
            `${educationList.length > 0 ? "  " : "  hidden"}`
          }
        >
          {educationList.map((item, index) => {
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
                    {item.field_of_study}
                  </div>
                  <div className="text-[#808080] leading-6 text-sm flex-grow">
                    {item.start_date} تا{" "}
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
