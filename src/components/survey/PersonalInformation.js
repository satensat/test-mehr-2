"use client";
import React, { useState } from "react";
import DangerIcon from "@/icon2/DangerIcon";
import formStyles from "./formstyles.module.css";
import ArrowDownIcon from "@/icon/ArrowDown";
import ClickOutside from "../forms/ClickOutside";

export default function PersonalInformation({ formik }) {
  // زیر دیپلم / دیپلم / کارشناسی / کارشناسی ارشد / دکتری و بالاتر / سایر موارد

  const courses = [
    { name: " زیر دیپلم" },
    { name: "دیپلم" },
    { name: "کارشناسی" },
    { name: " کارشناسی ارشد" },
    { name: " دکتری و بالاتر" },
    { name: " سایر موارد" },
  ];
  const [statusListCourse, setStatusListCourse] = useState(false);
  const [listCourseFiltterd, setListCourseFiltterd] = useState(courses);

  const handleCloseCourseList = () => {
    setStatusListCourse(false);
  };

  const [courseInput, setCourseInput] = useState("");
  const handleChangeInputCourseAutoComplete = (event) => {
    console.log(event);
    setCourseInput(() => event.target.value);
    const filteredCourse = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    console.log(filteredCourse);
    listCourseFiltterd(filteredCourse);
    console.log(filteredCourse.length === 1);

    // if (filteredCourse.length === 1) {
    //   console.log(filteredCourse[0]);
    // const timeoutID =
    // setTimeout(() => {
    //   console.log("this is the first message");
    //   fetchCityListitemsDependsProvince(filteredCourse[0].id);
    //   formik.setFieldValue("province.name", filteredCourse[0].name);
    //   formik.setFieldValue("province.id", filteredCourse[0].id);
    //   setCourseInput(filteredCourse[0].name);
    //   statusListCourse(false);
    // }, 500);
    // timeoutID();
    // clearTimeout(timeoutID);
    // }
  };
  const handleEnterKeyPress = (event) => {
    setCourseInput(() => event.target.value);
    const filteredCourse = courses.filter((course) =>
      course.name.includes(event.target.value)
    );

    listCourseFiltterd(filteredCourse);

    if (event.key === "Enter") {
      formik.setFieldValue("course", filteredCourse[0].id);
      setCourseInput(filteredCourse[0].name);
      statusListCourse(false);
    }
  };

  return (
    <div className="w-full  bg-[#FDFDFD] rounded-3xl shadow-G1  font-costumFaNum z-30">
      <p className="text-[#242424] leading-6 text-base font-bold p-3 ">
        اطلاعات شخصی
      </p>
      <div className="flex flex-col gap-[18px] items-center justify-center px-3 pt-1 pb-3">
        <div className="flex flex-col w-full  gap-2 bg-[#F7F7F7] rounded-2xl pt-1 pb-3 px-3">
          <div className="text-[#242424]  leading-6 text-sm py-1 pl-3">
            جنسیت:
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2  justify-between  ">
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 w-full grow flex flex-row items-center">
                <div className=" flex flex-row items-center gap-2 ">
                  <div className="w-[16px]">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => {
                        formik.setFieldValue("gender", "woman");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.gender === "woman"}
                        onChange={() => {
                          formik.setFieldValue("gender", "woman");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    زن
                  </div>
                </div>
              </div>
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 w-full   grow flex flex-row items-center ">
                <div className=" flex flex-row items-center gap-2 ">
                  <div className="w-[16px]">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => {
                        formik.setFieldValue("gender", "man");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.gender === "man"}
                        onChange={() => {
                          formik.setFieldValue("gender", "man");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    مرد
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FDFDFD] rounded-xl py-2  px-3 w-[100%] flex flex-row items-center ">
              <div className=" flex flex-row items-center gap-1 ">
                <div className="w-[16px]">
                  <div
                    className={
                      `${formStyles.containerRadioTick} ` +
                      " w-[16px] flex-grow"
                    }
                    onClick={() => {
                      formik.setFieldValue("gender", "x");
                    }}
                  >
                    <input
                      type="radio"
                      checked={formik.values.gender === "x"}
                      onChange={() => {
                        formik.setFieldValue("gender", "x");
                      }}
                    />
                    <div className={formStyles.checkmarkRadio}></div>
                  </div>
                </div>
                <div className="font-normal text-xs leading-6 text-[#242424]">
                  ترجیح میدهم جواب ندهم
                </div>
              </div>
            </div>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
                " " +
                `${
                  formik.errors.gender && formik.touched.gender
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.gender}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full  gap-2 bg-[#F7F7F7] rounded-2xl pt-1 pb-3 px-3">
          <div className="text-[#242424]  leading-6 text-sm py-1 pl-3">سن:</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2  justify-between  ">
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 grow flex flex-row items-center">
                <div className=" flex flex-row items-center gap-2 ">
                  <div className="w-[16px]">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => {
                        formik.setFieldValue("age", "16-24");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.age === "16-24"}
                        onChange={() => {
                          formik.setFieldValue("age", "16-24");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    16 تا 24
                  </div>
                </div>
              </div>
              <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 grow flex flex-row items-center ">
                <div className=" flex flex-row items-center gap-2 ">
                  <div className="w-[16px]">
                    <div
                      className={`${formStyles.containerRadioTick} `}
                      onClick={() => {
                        formik.setFieldValue("age", "25-34");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.age === "25-34"}
                        onChange={() => {
                          formik.setFieldValue("age", "25-34");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    25 تا 34
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2  justify-between  ">
              <div className="bg-[#FDFDFD] rounded-xl py-2  px-3 grow flex flex-row items-center ">
                <div className=" flex flex-row items-center gap-1 ">
                  <div className="w-[16px]">
                    <div
                      className={
                        `${formStyles.containerRadioTick} ` +
                        " w-[16px] flex-grow"
                      }
                      onClick={() => {
                        formik.setFieldValue("age", "35-45");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.age === "35-45"}
                        onChange={() => {
                          formik.setFieldValue("age", "35-45");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    35 تا 45
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFDFD] rounded-xl py-2  px-3 grow flex flex-row items-center ">
                <div className=" flex flex-row items-center gap-1 ">
                  <div className="w-[16px]">
                    <div
                      className={
                        `${formStyles.containerRadioTick} ` +
                        " w-[16px] flex-grow"
                      }
                      onClick={() => {
                        formik.setFieldValue("age", "45-up");
                      }}
                    >
                      <input
                        type="radio"
                        checked={formik.values.age === "45-up"}
                        onChange={() => {
                          formik.setFieldValue("age", "45-up");
                        }}
                      />
                      <div className={formStyles.checkmarkRadio}></div>
                    </div>
                  </div>
                  <div className="font-normal text-xs leading-6 text-[#242424]">
                    بالای 45
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFDFD] rounded-xl py-2  px-3 grow flex flex-row items-center ">
              <div className=" flex flex-row items-center gap-1 ">
                <div className="w-[16px]">
                  <div
                    className={
                      `${formStyles.containerRadioTick} ` +
                      " w-[16px] flex-grow"
                    }
                    onClick={() => {
                      formik.setFieldValue("age", "x");
                    }}
                  >
                    <input
                      type="radio"
                      checked={formik.values.age === "x"}
                      onChange={() => {
                        formik.setFieldValue("age", "x");
                      }}
                    />
                    <div className={formStyles.checkmarkRadio}></div>
                  </div>
                </div>
                <div className="font-normal text-xs leading-6 text-[#242424]">
                  ترجیح میدهم جواب ندهم
                </div>
              </div>
            </div>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
                " " +
                `${
                  formik.errors.age && formik.touched.age
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.age}
            </div>
          </div>
        </div>

        <ClickOutside
          onClick={handleCloseCourseList}
          className={" w-[60%] flex flex-row mx-auto mt-1   "}
        >
          <div
            className={
              formStyles.styled_select +
              " " +
              "group   w-full  relative " +
              "  " +
              `${statusListCourse ? " z-[2]  " : "  z-[1] "}`
            }
          >
            <label
              htmlFor="province"
              className={
                " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] text-[#525252] " +
                " " +
                `${
                  true > 0
                    ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                    : ""
                }`
                //   courseInput.length
              }
            >
              مقطع تحصیلی
            </label>
            <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
              <ArrowDownIcon />
            </div>
            <input
              value={courseInput}
              onKeyDown={handleEnterKeyPress}
              placeholder="آخرین مدرک تحصیلی دریافت شده"
              onChange={(e) => handleChangeInputCourseAutoComplete(e)}
              onBlur={formik.handleBlur}
              onFocus={() => setStatusListCourse(true)}
              className={
                (courseInput.length > 0 ? " input-label-pos-active " : " ") +
                " w-full px-4 relative  z-[2]  placeholder-[#ABABAB] h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos text-[#525252]  "
              }
              id="province"
              name="province"
            ></input>
            {statusListCourse ? (
              <div className="flex flex-col bg-[#F7F7F7] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto text-[#525252]  ">
                {listCourseFiltterd.map((item, index) => {
                  return (
                    <button
                      key={item.name}
                      value={item.name}
                      name={item.name}
                      onClick={() => {
                        formik.setFieldValue("province", item.name);

                        setCourseInput(item.name);
                        setStatusListCourse(false);
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
      </div>
    </div>
  );
}
