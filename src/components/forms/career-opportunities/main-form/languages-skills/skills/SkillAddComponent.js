import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PlusIcon from "@/icon/PlusIcon";
import TrashIcon from "@/icon2/TrashIcon";
import SkillLevel from "./SkillLevel";
import SkillsList from "./SkillsList";

const validationSchema = yup
  .object({
    title: yup.string().required("مهارت را وارد کنید."),
    skillLevel: yup.string().required("سطح مهارت را انتخاب کنید."),
  })
  .required();

export default function SkillAddComponent({
  formik,
  listOfSkills,
  setlistOfSkills
}) {
  const formikLanguage = useFormik({
    initialValues: {
      title: "",
      skillLevel: "",
    },
    onSubmit: (values, actions) => {
      const valueWithId={...values,timeAdd:Date.now()}
      setlistOfSkills((prev) => [...prev, valueWithId]);
      //   formik.setvalues()
      actions.resetForm();
    },
    validationSchema,
  });

  const handleDeleteItem=(input, index)=>{
    const filteredItem=listOfSkills.filter((item)=>item.timeAdd!==input.timeAdd);
    setlistOfSkills(filteredItem)
  }
  return (
    <div className="flex flex-col mt-2 md:mt-0">
      <div
        className={
          "pt-2 flex flex-col after:content-['']   after:h-[1px] after:w-0   after:bg-[#E6E6E6] after:mb-1 after:transition-all after:duration-500 " +
          " " +
          `${
            listOfSkills?.length > 0 ? " after:w-[100%] after:mt-3  " : "  "
          }`
        }
      >
        <div className="flex flex-col md:flex-row items-center md:gap-6">
          <SkillsList formik={formikLanguage} />
          <SkillLevel formik={formikLanguage} />
        </div>
        <button
          onClick={formikLanguage.handleSubmit}
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
      <div className="flex flex-row gap-x-[2%] gap-y-6 items-center flex-wrap pt-3 ">
        {listOfSkills?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row  w-full md:w-[49%] pl-2 pr-3 py-1 items-center rounded-xl bg-[#FDFDFD] "
            >
              <div className="flex flex-col flex-grow gap-[1px]" >
              <div className="text-[#808080] leading-6 text-xs font-bold flex-grow">
                {item.skillLevel}
              </div>
              <div className="text-[#242424] leading-6 text-sm flex-grow">
                {item.title}
              </div>
                </div>
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
  );
}
