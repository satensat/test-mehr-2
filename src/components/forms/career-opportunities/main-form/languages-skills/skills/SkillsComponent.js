
import React from "react";
import SkillAddComponent from "./SkillAddComponent";
import LampChargeIcon from "@/icon2/LampChargeIcon";

export default function SkillsComponent({
  formik,
  listOfSkills,setlistOfSkills
}) {
  return (
    <div className="bg-[#f7f7f7] rounded-xl pt-2 px-3 pb-3 flex flex-col w-full   ">
      <div className="flex flex-row items-center gap-2">
        <LampChargeIcon />
        <div className="font-bold text-sm leading-6 text-[#242424]">زبان</div>
      </div>
      < SkillAddComponent
      formik={formik}
        listOfSkills={listOfSkills}
        setlistOfSkills={setlistOfSkills}
      />
    </div>
  );
}
