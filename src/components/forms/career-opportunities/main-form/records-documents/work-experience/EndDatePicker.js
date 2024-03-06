// "use client";
// import ArrowDownIcon from "@/icon/ArrowDown";
// import DangerIcon from "@/icon2/DangerIcon";
// import React, { useEffect } from "react";
// import { DatePicker } from "zaman";
// import styles from "../../form.module.css";

// export default function StartDatePicker({ formik }) {

//   return (
//     <div
//       className={
//         "mb-3 w-full grow flex flex-col  md:w-[50%]    " +
//         ` ${
//           //   formik.values.militaryStatus === "پایان خدمت"
//           // ?
//           " text-[#525252] "
//           // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
//         }`
//       }
//     >
//       {/* <div
//         onBlur={() => formik.setFieldTouched("end_date")}
//         className={
//           "group   " +
//           styles.datePickerDetail +
//           "  " +
//           `${formik.values.end_date?.length > 0 ? styles.activeLabel : " "}`
//         }
//       >
//         <input
//           autoComplete="off"
//           value={
//             formik.values.end_date === ""
//               ? ""
//               : new Date(formik.values.end_date).toLocaleDateString("fa-IR")
//           }
//           readOnly
//           className={"   " + styles.datePickerInputStyle}
//         />
//         <DatePicker
//           round="x4"
//           position="center"
//           accentColor="#1b887f"
//           className="font-costumFaNum "
//           name="end_date"
//           inputClass={" " + " " + styles.datePickerMainInputHide}
//           onChange={(event) => {
//             formik.setFieldValue(
//               "end_date",
//               new Date(event.value).toISOString().slice(0, 10)
//             );
//           }}
//         />
//         <label
//           className={
//             " absolute top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px]   group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
//             " " +
//             `${formik.values.end_date?.length > 0 ? "text-xs" : ""}` +
//             " " +
//             ` ${
//               //   formik.values.militaryStatus === "پایان خدمت"
//               // ?
//               " text-[#525252] "
//               // : " pointer-events-none text-[#3b3b3b] text-opacity-40 "
//             }`
//           }
//         >
//           سال شروع
//         </label>
//         <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none">
//           <ArrowDownIcon color={`${" #525252 "}`} />
//         </div>
//       </div>
//       <div
//         className={
//           "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 w-full " +
//           " " +
//           `${
//             formik.errors.end_date && formik.touched.end_date
//               ? " opacity-100 "
//               : " opacity-0 "
//           }`
//         }
//       >
//         <DangerIcon />
//         {formik.errors.end_date}
//       </div> */}
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../../ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "../../formcheckbox.module.css";

function getCurrentShamsiYear() {
  const date = new Date();
  const options = {
    timeZone: "Asia/Tehran",
    calendar: "persian",
    year: "numeric",
  };
  const shamsiYear = date.toLocaleDateString("fa-IR", options);
  return shamsiYear;
}
function persianToEnglish(persianNumber) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return persianNumber.replace(/[۰-۹]/g, function (match) {
    return persianDigits.indexOf(match);
  });
}

function getHijriYears() {
  const currentYear = +persianToEnglish(getCurrentShamsiYear());
  const startYear = 1323; // The start year in the Hijri calendar

  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year.toString());
  }

  return years.reverse();
}
const hijriYears = getHijriYears();

export default function EndDatePicker({ formik }) {
  const [statusList, setStatusList] = useState(false);
  const handleCloseList = () => {
    // formik.setFieldValue("end_date", filteredList[0].name);
    // setTextInput(filteredList[0].name);
    setStatusList(false);
  };

  const [listItemsSource, setListitemsSource] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setListitemsSource(hijriYears);
    setFilteredList(hijriYears);
  }, []);
  useEffect(() => {

      setTextInput(formik.values.end_date );

  }, [formik.values.end_date]);
  const handleChangeInputAutoComplete = (event) => {
    // console.log(event);
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((end_date) =>
      end_date.includes(event.target.value)
    );
    // console.log(filteredList);
    setFilteredList(filteredList);
    // console.log(filteredList.length === 1);
    if( event.target.value===""){
      setTextInput(() =>"");
      setFilteredList(hijriYears);
    }
  };
  const handleEnterKeyPress = (event) => {
    setTextInput(() => event.target.value);
    const filteredList = listItemsSource.filter((end_date) =>
      end_date.includes(event.target.value)
    );
    setFilteredList(filteredList);
    if (event.key === "Enter") {
      formik.setFieldValue("end_date", filteredList[0]);
      setTextInput(filteredList[0]);
      setStatusList(false);
    }
  };

  return (
    <div className="flex flex-col grow w-full md:w-[50%] font-costumFaNum">
      <ClickOutside
        onClick={handleCloseList}
        className={" w-full flex flex-row mx-auto mt-1   " +
        `${formik.values.not_end ? " pointer-events-none   " : "  "}`}
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
            htmlFor="end_date"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                textInput.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }`+
              " " +
              `${formik.values.not_end ? " text-[#cccc]   " : ""}`
            }
          >
            سال پایان
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
            <ArrowDownIcon color={`${formik.values.not_end ? "#cccc" : "#525252"}`} />
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
            id="end_date"
            name="end_date"
          ></input>
          {statusList ? (
            <div className="flex flex-col bg-[#fff] border-[#e5e5e5] border-[2px] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredList.map((item, index) => {
                return (
                  <button
                    key={item}
                    value={item}
                    name={item}
                    onClick={() => {
                      formik.setFieldValue("end_date", item);
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
      <div
        className={
          "w-full mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.end_date && formik.touched.end_date
              ? // &&
                // formik.errors.end_date.name &&
                // formik.touched.end_date.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.end_date}
      </div>
    </div>
  );
}
