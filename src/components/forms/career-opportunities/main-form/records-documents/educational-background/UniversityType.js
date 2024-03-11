"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "../../formcheckbox.module.css";

// دولتی/ خصوصی / آزاد / پیام نور / جامع  علمی کاربردی / فنی خرفه ای / پردیس بین المللی / غیر ایرانی / سایر

const listOfUniVersityType = [
  { name: "دولتی", valueStatus: "1" },
  { name: "خصوصی", valueStatus: "2" },
  { name: "آزاد", valueStatus: "3" },
  { name: "پیام نور", valueStatus: "4" },
  { name: "جامع  علمی کاربردی", valueStatus: "5" },
  { name: "فنی خرفه ای", valueStatus: "6" },
  { name: "پردیس بین المللی", valueStatus: "7" },
  { name: "غیر ایرانی", valueStatus: "8" },
  { name: "سایر", valueStatus: "9" },
];
export default function UniversityType({ formik }) {
  const [statusList, setStatusList] = useState(false);
  const handleCloseList = () => {
    // formik.setFieldValue("university_type", filteredList[0].name);
    // setTextInput(filteredList[0].name);
    setStatusList(false);
  };

  const [listItemsSource, setListitemsSource] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setListitemsSource(listOfUniVersityType);
    setFilteredList(listOfUniVersityType);
  }, []);
  useEffect(() => {
    const textObj = listOfUniVersityType.find(
      (item) => item.valueStatus === formik.values.university_type
    );
    if (textObj?.name) {
      setTextInput(textObj?.name);
    } else {
      setTextInput("");
    }
    if (textObj?.name) {
      setTextInput(textObj?.name);
    } else {
      setTextInput("");
    }
  }, [formik.values.university_type]);
  const handleChangeInputAutoComplete = (event) => {
    console.log(event);
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((university_type) =>
      university_type.name.includes(event.target.value)
    );
    console.log(filteredList);
    setFilteredList(filteredList);
    console.log(filteredList.length === 1);
  };
  const handleEnterKeyPress = (event) => {
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((university_type) =>
      university_type.name.includes(event.target.value)
    );
    setFilteredList(filteredList);
    if (event.key === "Enter") {
      formik.setFieldValue("university_type", filteredList[0].valueStatus);
      setTextInput(filteredList[0].name);
      setStatusList(false);
    }
  };

  return (
    <div className="flex flex-col grow w-full md:w-[50%] ">
      <ClickOutside
        onClick={handleCloseList}
        className={" w-full flex flex-row mx-auto   "}
      >
        <div
          className={
            formStyles.styled_select +
            " " +
            "group   w-full  relative " +
            "  " +
            `${statusList ? " z-[2]  " : "  z-[1] "}`
          }
        >
          <label
            htmlFor="university_type"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                textInput.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }`
            }
          >
            نوع دانشگاه
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
            <ArrowDownIcon />
          </div>
          <input
            value={textInput}
            autoComplete="off"
            onKeyDown={handleEnterKeyPress}
            onChange={(e) => handleChangeInputAutoComplete(e)}
            onBlur={formik.handleBlur}
            onFocus={() => setStatusList(true)}
            className={
              (textInput.length > 0 ? " input-label-pos-active " : " ") +
              " w-full px-4 relative  z-[2]  placeholder-gray    placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
            }
            id="university_type"
            name="university_type"
          ></input>
          {statusList ? (
            <div className="flex flex-col bg-[#fff]  border-[#e5e5e5] border-[2px] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredList.map((item, index) => {
                return (
                  <button
                    key={item.name}
                    value={item.valueStatus}
                    name={item.name}
                    onClick={() => {
                      formik.setFieldValue("university_type", item.valueStatus);
                      setTextInput(item.name);
                      setStatusList(false);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl text-right "
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </ClickOutside>
      <div
        className={
          "w-full mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.university_type && formik.touched.university_type
              ? // &&
                // formik.errors.university_type.name &&
                // formik.touched.university_type.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.university_type}
      </div>
    </div>
  );
}
