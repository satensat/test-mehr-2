import LanguegeSquareIcon from "@/icon2/LanguegeSquareIcon";
import React from "react";
import LanguageAddComponent from "./LanguageAddComponent";

export default function LanguagesComponent({
  formik,
  listOfLanguages,
  setlistOfLanguages,
}) {
  return (
    <div className="bg-[#f7f7f7] rounded-xl pt-2 px-3 pb-3 flex flex-col w-full   ">
      <div className="flex flex-row items-center gap-2">
        <LanguegeSquareIcon />
        <div className="font-bold text-sm leading-6 text-[#242424]">زبان</div>
      </div>
      <LanguageAddComponent
        listOfLanguages={listOfLanguages}
        setlistOfLanguages={setlistOfLanguages}
      />
    </div>
  );
}
