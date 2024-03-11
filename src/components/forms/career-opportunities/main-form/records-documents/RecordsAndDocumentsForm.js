"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import formStyles from "../formcheckbox.module.css";
import DangerIcon from "@/icon2/DangerIcon";
import styles from "../form.module.css";
import ButtonCoverLoader from "../ButtonCoverLoader";
import "react-toastify/dist/ReactToastify.css";

import EducationalBackgroundAddComponent from "./educational-background/EducationalBackgroundAddComponent";
import WorkExperienceAddComponent from "./work-experience/WorkExperienceAddComponent";
import DocumentAddComponent from "./documentsPart/DocumentAddComponent";
import TickSquare from "@/icon2/TickSquare";

export default function RecordsAndDocumentsForm({
  formik,
  mainData,
  loadingButton,
  setEducationList,
  educationList,
  workExperience,
  setWorkExperience,
  documentsList,
  setDocumentsList,
}) {
  return (
    <div className=" flex flex-col  items-center justify-center bg-[#fdfdfd]  rounded-b-2xl ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-center gap-[10px] ">
      <button className="cursor-pointer p-1">
          <RightArrowBack />
        </button>
        سوابق و مدارک
      </div>
      <div className="px-3 pb-3  flex flex-col w-full gap-3  ">
        <EducationalBackgroundAddComponent
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <WorkExperienceAddComponent
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
        <DocumentAddComponent
          documentsList={documentsList}
          setDocumentsList={setDocumentsList}
        />
      </div>

      <div className="flex flex-col w-full before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto px-3 ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button
            onClick={formik.handleSubmit}
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] gap-1 " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
           ثبت و ارسال
            <div className="transition ease-in-out duration-500   brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <TickSquare />
            </div>
            {loadingButton && <ButtonCoverLoader />}
          </button>
        </div>
      </div>
    </div>
  );
}
