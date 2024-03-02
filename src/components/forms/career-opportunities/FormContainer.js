import React from "react";
import styles from "./stylesFormContainer.module.css";
import ClipBoardTickIcon from "@/icon2/ClipBoardTickIcon";
import ProgressBarAndform from "./ProgressBar";
import LoginStepMainComponent from "./main-form/accountCheck/LoginStepMainComponent";
import PersonalInfoFormWrapper from "./main-form/personal-info/PersonalInfoFormWrapper";

export default function FormContainer() {
  return (
    <div
      className={
        "bg-[#13625C]  py-6  flex flex-row items-start justify-center  bg-[url('/forms/Noise.svg')] rounded-3xl -z-0 " +
        " " +
        styles.containerFormGreen
      }
    >
      <div className="flex flex-col rounded-2xl z-[1]  w-8/12 ">
        <div className="flex flex-row gap-3 items-center p-3 bg-mainGreen1 rounded-t-2xl ">
          <ClipBoardTickIcon color={"#ffffff"} width={"32"} height={"32"} />
          <div className="grow leading-8 font-bold text-lg text-[#ffffff]">
            فرم استخدام
          </div>
        </div>
        <div className="bg-[#FDFDFD]">
          <ProgressBarAndform />
        </div>
        {/* <div className=" flex flex-col bg-[#FDFDFD] rounded-b-2xl ">
          <LoginStepMainComponent />
        </div> */}
        <PersonalInfoFormWrapper/>
      </div>
    </div>
  );
}
