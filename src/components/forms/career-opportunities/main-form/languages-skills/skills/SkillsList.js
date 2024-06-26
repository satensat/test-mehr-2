"use client";
import React, { useEffect, useState } from "react";
// import ArrowDownIcon from "@/icon/ArrowDown";
// import ClickOutside from "../../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
// import formStyles from "../../formcheckbox.module.css";

// const listOfSkills = [
//   { name: "فارسی" },
//   { name: "فارسی" },
//   { name: "فارسی" },
//   { name: "فارسی" },
//   { name: "فارسی" },
// ];
export default function SkillsList({ formik }) {
    // const [statusList, setStatusList] = useState(false);
    // const handleCloseList = () => {
    //   setStatusList(false);
    //   // formik.setFieldValue("language", filteredList[0].name);
    //   // setTextInput(filteredList[0].name);
    // };
  
    // const [listItemsSource, setListitemsSource] = useState([]);
  
    // const [textInput, setTextInput] = useState("");
  
    // const [filteredList, setFilteredList] = useState([]);
  
    // useEffect(() => {
    //   setListitemsSource(listOfSkills);
    //   setFilteredList(listOfSkills);
    // }, []);

    // useEffect(() => {
    //   if(formik.values.skill===""){
    //     setTextInput("");
    //   }
    // }, [formik.values.skill]);
    // const handleChangeInputAutoComplete = (event) => {
    //   console.log(event);
    //   setTextInput(() => event.target.value);
    //   const filteredList = listItemsSource.filter((language) =>
    //     language.name.includes(event.target.value)
    //   );
    //   console.log(filteredList);
    //   setFilteredList(filteredList);
    //   console.log(filteredList.length === 1);
    // };
    // const handleEnterKeyPress = (event) => {
    //   setTextInput(() => event.target.value);
    //   const filteredList = listItemsSource.filter((language) =>
    //     language.name.includes(event.target.value)
    //   );
    //   setFilteredList(filteredList);
    //   if (event.key === "Enter") {
    //     formik.setFieldValue("language", filteredList[0].name);
    //     setTextInput(filteredList[0].name);
    //     setStatusList(false);
    //   }
    // };
 
    return (
      <div className="flex flex-col grow w-full md:w-[50%] ">
          <div className="group w-full  mb-3 grow    relative ">
            <input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.title?.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                " " +
                `${formik.values.title?.length > 0 ? "text-xs" : ""}`
              }
            >
              مهارت
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.title && formik.touched.title
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.title}
            </div>
          </div>
      </div>
    );
  }
  
