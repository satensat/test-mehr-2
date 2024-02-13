"use client";
import React, { useState } from "react";
import CloseModal from "@/icon/CloseModal";
import PlusIcon from "@/icon/PlusIcon";
import DangerIcon from "@/icon2/DangerIcon";

export default function SkillRecordsForm({
  formik,
  mainData,
  skillRecords,
  setSkillRecords,
}) {
  const [skill, setSkill] = useState("");
  const [skillInputCheck, setSkillInputCheck] = useState(true);

  const handleChangeSkill = (event) => {
    setSkill(event.target.value);
  };

  const handleAddSkillRecord = () => {
    // if(skill.length<8){
    //   setSkillInputCheck(false);
    // }else{
    //   setSkillInputCheck(true);
    //   setSkillRecords((prevState) => [{ skill }, ...prevState]);
    //   setSkill("");
    // }
    if (skill.length > 1) {
      setSkillInputCheck(true);
      console.log(skillRecords);
      setSkillRecords((prevState) => [{ skill }, ...prevState]);
      setSkill("");
    } else {
      setSkillInputCheck(false);
    }
  };
  const handleKeyDownInput = (event) => {
    if (event.key === "Enter") {
      if (skill.length > 1) {
        setSkillInputCheck(true);
        console.log(skillRecords);
        setSkillRecords((prevState) => [{ skill }, ...prevState]);
        setSkill("");
      } else {
        setSkillInputCheck(false);
      }
    }
  };

  const handleDeleteSkillRecord = (item, index) => {
    // element.skill !== item.skill &&
    const filteredList = skillRecords.filter(
      (element, elementIndex) => elementIndex !== index
    );
    setSkillRecords(() => [...filteredList]);
  };
  return (
    <>
      <div
        className="w-full   relative mt-1 pr-4 pl-2  border border-gray-300 rounded-2xl h-12 bg-white flex flex-row items-center 
      focus-within:outline-black
      focus-within:outline-2
      focus-within:outline
      focus-within:border-transparent
     "
      >
        <input
          name={`skill`}
          value={skill}
          onChange={handleChangeSkill}
          onKeyDown={handleKeyDownInput}
          type="text"
          placeholder="مثلا کار با سخت‌افزار"
          className={
            (true ? " input-label-pos-active " : " ") +
            " w-full h-full  placeholder-gray border-none  resize-none  input-label-pos  focus-visible:outline-none focus-visible:ring-transparent  "
          }
        />
        <label
          className={
            " absolute top-4 right-4 text-xs  pointer-events-none  group-focus-within:text-xs" +
            " " +
            `${skill.length > 0 ? "text-xs bg-[#F7F7F7]" : ""}`
          }
        >
          سوابق مهارتی
        </label>
        <button
          onClick={handleAddSkillRecord}
          className="w-fit h-fit  cursor-pointer p-2 "
          // absolute top-[50%] left-2 translate-y-[-50%]
        >
          <PlusIcon color={"#13625C"} width={"24"} height={"24"} />
        </button>
      </div>
      <div
        className={
          "text-mainRed text-xs py-1 flex  flex-row gap-1 items-center transition-all duration-500  " +
          " " +
          `${!skillInputCheck ? " opacity-100 " : " opacity-0 "}`
        }
      >
        <DangerIcon />
        لطفاً بیشتر توضیح دهید.
      </div>

      <div
        className={
          "flex flex-col gap-3 mt-1 before:transition-all before:duration-500   before:content-['']   before:h-[1px] before:w-0   before:bg-[#E6E6E6] " +
          " " +
          `${skillRecords?.length > 0 ? " before:w-full  " : "  "}`
        }
      >
        {skillRecords?.map((item, index) => {
          return (
            <div
              key={`${index}-${item}`}
              className="bg-[#F7F7F7] flex flex-row p-3  rounded-xl items-center "
            >
              <div className="text-[#242424] leading-5 text-xs flex-grow">
                {item.skill}
              </div>
              <button
                onClick={() => handleDeleteSkillRecord(item, index)}
                className="group transition ease-in-out duration-500 text-center rounded-xl font-bold text-xs leading-6 text-mainGreen1 flex flex-row  items-center px-3 py-1 hover:bg-mainGreen1 hover:text-white  "
              >
                حذف
                <div className="transition ease-in-out duration-500 mr-1 group-hover:brightness-0 group-hover:invert ">
                  <CloseModal color={"#13625C"} width={"16"} height={"16"} />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
