"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "../../formcheckbox.module.css";

// پدر / مادر / فرزند / همسر / برادر / خواهر / سایر

const listOfRelative = [
  { name: "پدر" },
  { name: "مادر" },
  { name: "فرزند" },
  { name: "همسر" },
  { name: "برادر" },
  { name: "خواهر" },
  { name: "سایر" },
];
export default function RelativeList({ formik, checkValueName }) {
  const [statusList, setStatusList] = useState(false);
  const handleCloseList = () => {
    setStatusList(false);
  };

  const [listItemsSource, setListitemsSource] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setListitemsSource(listOfRelative);
    setFilteredList(listOfRelative);
  }, []);
  const handleChangeInputAutoComplete = (event) => {
    console.log(event);
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((relative) =>
      relative.name.includes(event.target.value)
    );
    console.log(filteredList);
    setFilteredList(filteredList);
    console.log(filteredList.length === 1);
  };
  const handleEnterKeyPress = (event) => {
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((relative) =>
      relative.name.includes(event.target.value)
    );
    setFilteredList(filteredList);
    if (event.key === "Enter") {
      formik.setFieldValue(
        `${checkValueName}_relative.type`,
        filteredList[0].name
      );
      setTextInput(filteredList[0].name);
      setStatusList(false);
    }
  };

  return (
    <div className="flex flex-col grow w-full">
      <ClickOutside
        onClick={handleCloseList}
        className={" w-full flex flex-row mx-auto mt-1   "}
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
            htmlFor="relative"
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
            نسبت با شما
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
            onFocus={() => {
              setStatusList(true);
              formik.setFieldTouched(`${checkValueName}_relative.type`,true)
            }}
            className={
              (textInput.length > 0 ? " input-label-pos-active " : " ") +
              " w-full px-4 relative  z-[2]  placeholder-gray    placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
            }
            id="relative"
            name="relative"
          ></input>
          {statusList ? (
            <div className="flex flex-col bg-[#F7F7F7] border-[#e5e5e5] border-[2px] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredList.map((item, index) => {
                return (
                  <button
                    key={item.name}
                    value={item.name}
                    name={item.name}
                    onClick={() => {
                      formik.setFieldValue(
                        `${checkValueName}_relative.type`,
                        item.name
                      );
                      setTextInput(item.name);
                      console.log(formik);
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
            formik.errors[`${checkValueName}_relative`]?.type &&
            formik.touched[`${checkValueName}_relative`]?.type
              ? // &&
                // formik.errors.relative.name &&
                // formik.touched.relative.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors[`${checkValueName}_relative`]?.type}
      </div>
    </div>
  );
}
