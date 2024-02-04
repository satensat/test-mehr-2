import React from "react";
import ProgressBar from "./ProgressBar";

export default function MainForm() {
  return (
    <div
      className={
        "w-full md:w-[45%]  shadow-G1 bg-[#FDFDFD] rounded-3xl flex flex-col md:flex-row  font-costumFaNum relative h-fit" 
      }
    >
        <ProgressBar/>

    </div>
  );
}
