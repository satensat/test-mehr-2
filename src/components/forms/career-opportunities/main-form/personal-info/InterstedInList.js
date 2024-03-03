"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "../formcheckbox.module.css";
import CloseModal from "@/icon/CloseModal";
const listOfJobs = [
  { id: "1", name: "کارشناس فروش ", selected: false },
  { id: "2", name: "کارشناس فنی و تعمیرات ", selected: false },
  { id: "3", name: "کارشناس بازاریابی", selected: false },
  { id: "4", name: "مالی و حسابداری ", selected: false },
  { id: "5", name: "منشی ", selected: false },
  { id: "6", name: "وصول مطالبات ", selected: false },
  { id: "7", name: "آبدارچی و خدمات ", selected: false },
  { id: "8", name: "انباردار ", selected: false },
  { id: "9", name: "کارپرداز ", selected: false },
  { id: "10", name: "پیک ", selected: false },
  { id: "11", name: "آشپز ", selected: false },
  { id: "12", name: "سئو ", selected: false },
  { id: "13", name: "برنامه نویسی ", selected: false },
  { id: "14", name: "طراحی ", selected: false },
  { id: "15", name: "ادمین شبکات اجتماعی ", selected: false },
  { id: "16", name: "تولید محتوا ", selected: false },
  { id: "17", name: "کارشناس بازارگانی", selected: false },
  { id: "18", name: "کارشناس اداری ", selected: false },
  { id: "19", name: "منابع انسانی ", selected: false },
  { id: "20", name: "تضمین کیفیت ", selected: false },
  { id: "21", name: "کارشناس پذیرش ", selected: false },
  { id: "22", name: "مترجم زبان", selected: false },
];

export default function InterstedInList({ formik }) {
  const [statusList, setStatusList] = useState(false);
  const handleCloseList = () => {
    setStatusList(false);
  };

  const [listItemsSource, setListitemsSource] = useState([]);

  const [textInput, setTextInput] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setListitemsSource(listOfJobs);
    setFilteredList(listOfJobs);
  }, []);
  const handleChangeInputAutoComplete = (event) => {
    console.log(event);
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((interstedIn) =>
      interstedIn.name.includes(event.target.value)
    );
    console.log(filteredList);
    setFilteredList(filteredList);
    console.log(filteredList.length === 1);
  };
  const handleEnterKeyPress = (event) => {
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((interstedIn) =>
      interstedIn.name.includes(event.target.value)
    );
    setFilteredList(filteredList);
    if (event.key === "Enter") {
      formik.setFieldValue("interstedIn", filteredList[0].name);
      setTextInput(filteredList[0].name);
      setStatusList(false);
    }
  };

  const handleChangeSelected = (item, index) => {
    const updatedItems = [...filteredList];
    updatedItems[index] = {
      ...updatedItems[index],
      selected: !updatedItems[index]?.selected,
    };
    if(updatedItems[index].selected){

      formik.setFieldValue("interstedIn", [...formik.values.interstedIn,updatedItems[index]]);
    }else{
      const filteredFormik=formik.values.interstedIn.filter((item,index)=>item.name===updatedItems[index].name)
    }
    setFilteredList(updatedItems);
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
          onClick={() => setStatusList(true)}
        >
          <label
            htmlFor="interstedIn"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                formik.values.interstedIn?.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }`
            }
          >
            به چه موقعیت‌های شغلی علاقه‌مند‌اید؟
          </label>
          {/* <input
            // value={textInput}
            value={""}
            readOnly
            onKeyDown={handleEnterKeyPress}
            onChange={(e) => handleChangeInputAutoComplete(e)}
            onBlur={formik.handleBlur}
            onFocus={() => setStatusList(true)}
            className={
              (textInput.length > 0 ? " input-label-pos-active " : " ") +
              " w-full px-4 relative  z-[2]    h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
            }
            id="interstedIn"
            name="interstedIn"
          ></input> */}

          <div
            className={
              "w-full   relative px-2 border border-gray-300 rounded-2xl h-12  bg-white flex flex-row items-center   group-focus-within:outline-black group-focus-within:outline-2 group-focus-within:outline  group-focus-within:border-transparent     z-[2] " +
              "   "
            }
            // onClick={() => setStatusList(true)}
          >
            <input
              value={""}
              readOnly
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="interstedIn"
              type="text"
              className={
                (true ? " input-label-pos-active " : " ") +
                " w-full h-full   border-none  resize-none  input-label-pos  focus-visible:outline-none focus-visible:ring-transparent bg-transparent opacity-0 placeholder-[#ABABAB] placeholder:text-xs placeholder:font-costumFaNum -z-[3]  absolute   "
              }
            />
            <div
              className=" grow flex flex-row flex-nowrap  items-center gap-2  overflow-x-auto h-12 w-full z-[5] py-3  font-costumFaNum  "
              onClick={() => setStatusList(true)}
            >
              {
                formik.values.interstedIn?.length>0 &&  formik.values.interstedIn?.length+"  مورد انتخاب شده"

                // formik.values.interstedIn?.map((item) => {
                // if (item.selected) {
                //   return <div key={item.name} className="w-fit" >{item.name + "،"}</div>;
                // }
                // })
              }
            </div>
            <button
              className="w-fit h-fit  cursor-pointer p-2 "
              onClick={() => {
                setStatusList(!statusList);
              }}
            >
              <ArrowDownIcon />
            </button>
          </div>
          {statusList ? (
            <div className="flex flex-col bg-[#F7F7F7] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredList.map((item, index) => {
                return (
                  <button
                    key={item.name}
                    value={item.name}
                    name={item.name}
                    onClick={() => {
                      handleChangeSelected(item, index);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl text-right "
                  >
                    {/* {item.name} */}
                    <div className=" flex flex-row items-center gap-2 ">
                      <div className="w-[16px]">
                        <div
                          className={`${formStyles.containerRadioTick} `}
                          onClick={() => {
                            handleChangeSelected(item, index);
                          }}
                        >
                          <input
                            type="radio"
                            checked={item.selected}
                            // onChange={() =>
                            //   formik.setFieldValue("is_owner", item.name)
                            // }
                          />
                          <div className={formStyles.checkmarkRadio}></div>
                        </div>
                      </div>
                      <div className="font-normal text-xs leading-6 text-[#242424]">
                        {item.name}
                      </div>
                    </div>
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
            formik.errors.interstedIn && formik.touched.interstedIn
              ? // &&
                // formik.errors.interstedIn.name &&
                // formik.touched.interstedIn.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.interstedIn}
      </div>
    </div>
  );
}
