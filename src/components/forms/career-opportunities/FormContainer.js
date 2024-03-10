import React from "react";
import styles from "./stylesFormContainer.module.css";
import stylesDesign from "./design.module.css";
import ClipBoardTickIcon from "@/icon2/ClipBoardTickIcon";
import ProgressBarAndform from "./ProgressBar";


export default function FormContainer() {
  return (
    <div
      className={
        "md:bg-[#13625C]  md:py-6  flex flex-row items-start justify-center  md:bg-[url('/forms/Noise.svg')] rounded-3xl -z-0 " +
        " " +
        styles.containerFormGreen
      }
    >
      <div className={""}>
      </div>
      <div className={"flex flex-col rounded-2xl z-[1] w-full md:w-8/12 bg-[#FDFDFD] shadow-G1 "+stylesDesign.container}>
        
        <div className="flex flex-row gap-3 items-center p-3 bg-mainGreen1 rounded-t-2xl ">
          <ClipBoardTickIcon color={"#ffffff"} width={"32"} height={"32"} />
          <div className="grow leading-8 font-bold text-lg text-[#ffffff]">
            فرم استخدام
          </div>
        </div>
  
          <ProgressBarAndform />


      </div>
    </div>
  );
}
