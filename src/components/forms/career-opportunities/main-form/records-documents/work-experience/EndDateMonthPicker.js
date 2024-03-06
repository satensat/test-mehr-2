// "use client";
// import ArrowDownIcon from "@/icon/ArrowDown";
// import DangerIcon from "@/icon2/DangerIcon";
// import React, { useState } from "react";
// import { DatePicker } from "zaman";
// import styles from "../../form.module.css";

// export default function EndDatePicker({ formik }) {
//   const [controlSimilarity, setControlSimilarity] = useState(false);
//   const handleControlSimilarity = () => {
//     setControlSimilarity(() => !controlSimilarity);
//   };
//   // const handleDateConvert = (dateInput) => {
//   //     //"26-02-2012" format to timestamp
//   //     const [y, m, d] = dateInput.split(/-|\//);
//   //     const test = new Date(
//   //       parseInt(y, 10),
//   //       parseInt(m, 10) - 1,
//   //       parseInt(d),
//   //       10
//   //     ).getTime();
//   //     return test;
//   //   };
//   return (
//     <div className="grow md:w-[50%] w-full flex flex-col items-center mb-3">
//       <div className="flex flex-row w-full gap-3 items-center">
//         <div
//           className={
//             " w-[50%] grow flex flex-col  " +
//             ` ${
//               //   formik.values.militaryStatus === "پایان خدمت"
//               // ?
//               " text-[#525252] "
//               // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
//             }`
//           }
//         >
//           <div
//             onBlur={() => formik.setFieldTouched("end_date_month")}
//             className={
//               "group   " +
//               styles.datePickerDetail +
//               "  " +
//               `${formik.values.end_date_month?.length > 0 ? styles.activeLabel : " "}`
//             }
//           >
//             <input
//               autoComplete="off"
//               value={
//                 formik.values.end_date_month === ""
//                   ? ""
//                   : new Date(formik.values.end_date_month).toLocaleDateString("fa-IR")
//               }
//               readOnly
//               className={"   " + styles.datePickerInputStyle}
//             />
//             <DatePicker
//               round="x4"
//               position="center"
//               accentColor="#1b887f"
//               className="font-costumFaNum "
//               name="end_date_month"
//               inputClass={" " + " " + styles.datePickerMainInputHide}
//               onChange={(event) => {
//                 formik.setFieldValue(
//                   "end_date_month",
//                   new Date(event.value).toISOString().slice(0, 10)
//                 );
//               }}
//             />
//             <label
//               className={
//                 " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
//                 " " +
//                 `${formik.values.end_date_month?.length > 0 ? "text-xs" : ""}` +
//                 " " +
//                 ` ${
//                   //   formik.values.militaryStatus === "پایان خدمت"
//                   // ?
//                   " text-[#525252] "
//                   // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
//                 }`
//               }
//             >
//               سال پایان
//             </label>
//             <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
//               <ArrowDownIcon color={`${" #525252 "}`} />
//             </div>
//           </div>
//         </div>
//         <div className="w-[50%] flex flex-row gap-1 p-1  ">
//           <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] my-auto  ">
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={controlSimilarity}
//             />
//             <div
//               onClick={handleControlSimilarity}
//               className="w-[48px] h-[24px] bg-[#C2CFD6] rounded-full peer peer-focus:ring-2 peer-focus:ring-[#AAEEE9]  dark:peer-focus:ring-[#AAEEE9] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-lightGray  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#23AFA3] peer-checked:hover:bg-[#1B887F] hover:bg-[#9AB0BC]"
//             ></div>
//           </label>
//           <div className="text-[#525252] text-xs leading-5  ">
//             هم اکنون
//             <p>مشغول هستم</p>
//           </div>
//         </div>
//       </div>
//       <div
//         className={
//           "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-full " +
//           " " +
//           `${
//             formik.errors.end_date_month && formik.touched.end_date_month
//               ? " opacity-100 "
//               : " opacity-0 "
//           }`
//         }
//       >
//         <DangerIcon />
//         {formik.errors.end_date_month}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "../../formcheckbox.module.css";



const monthsHijri = [
  "فروردین",
  "اُردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
export default function EndDateMonthPicker({ formik }) {
  const [statusList, setStatusList] = useState(false);
  const handleCloseList = () => {
    // formik.setFieldValue("end_date_month", filteredList[0].name);
    // setTextInput(filteredList[0].name);
    setStatusList(false);
  };

  const [listItemsSource, setListitemsSource] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setListitemsSource(monthsHijri);
    setFilteredList(monthsHijri);
  }, []);
  useEffect(() => {
    setTextInput(formik.values.end_date_month);
  }, [formik.values.end_date_month]);
  const handleChangeInputAutoComplete = (event) => {
    // console.log(event);
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((end_date_month) =>
      end_date_month.includes(event.target.value)
    );
    // console.log(filteredList);
    setFilteredList(filteredList);
    // console.log(filteredList.length === 1);
  };
  const handleEnterKeyPress = (event) => {
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((end_date_month) =>
      end_date_month.includes(event.target.value)
    );
    setFilteredList(filteredList);
    if (event.key === "Enter") {
      formik.setFieldValue("end_date_month", filteredList[0]);
      setTextInput(filteredList[0]);
      setStatusList(false);
    }
  };

  return (
    <div className="flex flex-col grow w-full md:w-[50%] font-costumFaNum">
      <div className="flex flex-row w-full gap-3 items-center">
        <ClickOutside
          onClick={handleCloseList}
          className={
            " flex flex-row mx-auto mt-1  w-[50%] grow   " +
            `${formik.values.not_end ? " pointer-events-none   " : "  "}`
          }
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
              htmlFor="end_date_month"
              className={
                " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${
                  textInput?.length > 0
                    ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                    : ""
                }` +
                " " +
                `${formik.values.not_end ? " text-[#cccc]   " : ""}`
              }
            >
              ماه پایان
            </label>
            <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
              <ArrowDownIcon
                color={`${formik.values.not_end ? "#cccc" : "#525252"}`}
              />
            </div>
            <input
              value={textInput}
              onKeyDown={handleEnterKeyPress}
              autoComplete="off"
              onChange={(e) => handleChangeInputAutoComplete(e)}
              onBlur={formik.handleBlur}
              onFocus={() => setStatusList(true)}
              className={
                (textInput?.length > 0 ? " input-label-pos-active " : " ") +
                " w-full px-4 relative  z-[2]  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
              }
              id="end_date_month"
              name="end_date_month"
            ></input>
            {statusList ? (
              <div className="flex flex-col bg-[#fff]  border-[#e5e5e5] border-[2px] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
                {filteredList.map((item, index) => {
                  return (
                    <button
                      key={item}
                      value={item}
                      name={item}
                      onClick={() => {
                        formik.setFieldValue("end_date_month", item);
                        setTextInput(item);
                        setStatusList(false);
                      }}
                      className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl text-right "
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </ClickOutside>
        <div className="w-[50%] flex flex-row gap-1 p-1  ">
          <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] my-auto  ">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formik.values.not_end}
            />
            <div
              onClick={() => {
                formik.setFieldValue("not_end", !formik.values.not_end);
                formik.setFieldValue("end_date_month", "");
              }}
              className="w-[48px] h-[24px] bg-[#C2CFD6] rounded-full peer peer-focus:ring-2 peer-focus:ring-[#AAEEE9]  dark:peer-focus:ring-[#AAEEE9] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-lightGray  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#23AFA3] peer-checked:hover:bg-[#1B887F] hover:bg-[#9AB0BC]"
            ></div>
          </label>
          <div className="text-[#525252] text-xs leading-5  ">
            هم اکنون
        مشغول هستم
          </div>
        </div>
      </div>

      <div
        className={
          "w-full mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.end_date_month && formik.touched.end_date_month
              ? // &&
                // formik.errors.end_date_month.name &&
                // formik.touched.end_date_month.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.end_date_month}
      </div>
    </div>
  );
}
