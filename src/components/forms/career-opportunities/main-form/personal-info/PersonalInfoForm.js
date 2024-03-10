"use client";
import React from "react";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import formStyles from "../formcheckbox.module.css";
import DangerIcon from "@/icon2/DangerIcon";
import ButtonCoverLoader from "../ButtonCoverLoader";
import "react-toastify/dist/ReactToastify.css";
import InterstedInList from "./InterstedInList";
import ReligionList from "./ReligionList";
import MilitaryStatusList from "./MilitaryStatusList";
import PersonalPicture from "./PersonalPicture";
import BirthdayDatePicker from "./BirthdayDatePicker";
import MilitaryDatePicker from "./MilitaryDatePicker";

export default function PersonalInfoForm({ formik, mainData ,loadingButton }) {
  return (
    <div className=" flex flex-col  items-center justify-center bg-[#fdfdfd]  rounded-b-2xl ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-center gap-[10px] ">
      <button className="cursor-pointer p-1">
          <RightArrowBack />
        </button>
        اطلاعات فردی
      </div>
      <div className="px-3 pb-3  flex flex-col w-full gap-1  ">
        <PersonalPicture formik={formik} />
        {/* ------------------------------------------------------------------------------------------ */}
        <div className=" flex flex-col mt-2 md:flex-row w-full gap-6 items-center">
          <InterstedInList formik={formik} />
          <div className={"grow group  mt-1  mb-3 relative  w-full "}>
            <input
              name="requested_salary"
              value={formik.values.requested_salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="به تومان وارد کنید"
              className={
                (true ? " input-label-pos-active " : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${
                  formik.touched.requested_salary
                    ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                    : ""
                }`
              }
            >
              حدود حقوق درخواستی ماهیانه
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.requested_salary && formik.touched.requested_salary
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.requested_salary}
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <div className="grow mb-3 relative group w-full ">
            <input
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.first_name.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
                " " +
                `${formik.values.first_name.length > 0 ? "text-xs" : ""}`
              }
            >
              نام
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.first_name && formik.touched.first_name
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.first_name}
            </div>
          </div>
          <div className=" grow group w-full  mb-3 relative ">
            <input
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.last_name.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm  pointer-events-none  group-focus-within:text-xs" +
                " " +
                `${formik.values.last_name.length > 0 ? "text-xs" : ""}`
              }
            >
              نام خانوادگی
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.last_name && formik.touched.last_name
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.last_name}
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <div className="group  w-full mb-3 grow   relative ">
            <input
              name="father_name"
              value={formik.values.father_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.father_name.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                " " +
                `${formik.values.father_name.length > 0 ? "text-xs" : ""}`
              }
            >
              نام پدر
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.father_name && formik.touched.father_name
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.father_name}
            </div>
          </div>

          <div className="group  w-full mb-3 grow   relative ">
            <input
              name="national_code"
              value={formik.values.national_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.national_code.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                " " +
                `${formik.values.national_code.length > 0 ? "text-xs" : ""}`
              }
            >
              کد ملی
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.national_code && formik.touched.national_code
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.national_code}
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <div className="group   mb-3 grow w-full  relative ">
            <input
              name="birth_city"
              value={formik.values.birth_city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.birth_city.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                " " +
                `${formik.values.birth_city.length > 0 ? "text-xs" : ""}`
              }
            >
              شهر محل تولد
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.birth_city && formik.touched.birth_city
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.birth_city}
            </div>
          </div>

          <BirthdayDatePicker formik={formik} mainData={mainData} />
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <div className="group w-full  mb-3 grow    relative ">
            <input
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={
                (formik.values.nationality?.length > 0
                  ? " input-label-pos-active "
                  : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute top-4 right-4 rounded-2xl text-sm pointer-events-none group-focus-within:text-xs" +
                " " +
                `${formik.values.nationality?.length > 0 ? "text-xs" : ""}`
              }
            >
              ملیت
            </label>
            <div
              className={
                "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.nationality && formik.touched.nationality
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.nationality}
            </div>
          </div>
          <ReligionList formik={formik} />
        </div>
        <div className=" flex flex-col md:flex-row w-full  gap-6   items-center ">
          <div className="flex flex-col w-full  md:w-[50%] ">
            <div className="w-full   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
              <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
                وضعیت تاهل
              </div>
              <div className="flex flex-row gap-3 pt-2">
                <div className="bg-[#FDFDFD] grow rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div className="w-[16px]">
                      <div
                        className={`${formStyles.containerRadioTick} `}
                        onClick={() =>
                          // formik.setFieldValue("is_married", "SINGLE")
                          formik.setFieldValue("is_married",false)
                        }
                      >
                        <input
                          type="radio"
                          checked={formik.values.is_married ===false}
                          onChange={() =>
                            formik.setFieldValue("is_married",false)
                          }
                        />
                        <div className={formStyles.checkmarkRadio}></div>
                      </div>
                    </div>
                    <div className="font-normal text-xs leading-6 text-[#242424]">
                      مجرد
                    </div>
                  </div>
                </div>
                <div className="bg-[#FDFDFD] grow rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div className="w-[16px]">
                      <div
                        className={`${formStyles.containerRadioTick} `}
                        onClick={() =>
                          // formik.setFieldValue("is_married", "MARRIED")
                          formik.setFieldValue("is_married", true)
                        }
                      >
                        <input
                          type="radio"
                          checked={formik.values.is_married === true}
                          onChange={() =>
                            formik.setFieldValue("is_married", true)
                          }
                        />
                        <div className={formStyles.checkmarkRadio}></div>
                      </div>
                    </div>
                    <div className="font-normal text-xs leading-6 text-[#242424]">
                      متاهل
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "w-full mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
                " " +
                `${
                  formik.errors.is_married && formik.touched.is_married
                    ? " opacity-100 "
                    : " opacity-0 "
                }`
              }
            >
              <DangerIcon />
              {formik.errors.is_married}
            </div>
          </div>
          <div className="flex flex-col w-full  md:w-[50%] ">
            <div className="w-full   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
              <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
                جنسیت
              </div>
              <div className="flex flex-row gap-3 pt-2">
                <div className="bg-[#FDFDFD] grow rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div className="w-[16px]">
                      <div
                        className={`${formStyles.containerRadioTick} `}
                        onClick={() => formik.setFieldValue("gender", "FEMALE")}
                      >
                        <input
                          type="radio"
                          checked={formik.values.gender === "FEMALE"}
                          onChange={() =>
                            formik.setFieldValue("gender", "FEMALE")
                          }
                        />
                        <div className={formStyles.checkmarkRadio}></div>
                      </div>
                    </div>
                    <div className="font-normal text-xs leading-6 text-[#242424]">
                      زن
                    </div>
                  </div>
                </div>
                <div className="bg-[#FDFDFD] grow rounded-xl py-2 px-3 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <div className="w-[16px]">
                      <div
                        className={`${formStyles.containerRadioTick} `}
                        onClick={() => formik.setFieldValue("gender", "MALE")}
                      >
                        <input
                          type="radio"
                          checked={formik.values.gender === "MALE"}
                          onChange={() =>
                            formik.setFieldValue("gender", "MALE")
                          }
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
            </div>
            <div
              className={
                "w-full mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
        <div className=" flex flex-col md:flex-row w-full gap-6 items-center">
          <MilitaryStatusList formik={formik} />
          <MilitaryDatePicker formik={formik} />
        </div>
        <div className="w-full group relative mt-2 mb-3">
          <textarea
            name="intrested_fields"
            value={formik.values.intrested_fields}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              (formik.values.intrested_fields.length > 0
                ? " input-label-pos-active "
                : " ") +
              " min-h-32 w-full px-4 placeholder-gray resize-none   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
            }
          ></textarea>
          <label
            className={
              " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                formik.values.intrested_fields.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }`
            }
          >
            حوزه های علاقه مندی
          </label>
          <div
            className={
              "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
              " " +
              `${
                formik.errors.intrested_fields && formik.touched.intrested_fields
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.intrested_fields}
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col w-full before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto px-3 ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button
            onClick={formik.handleSubmit}
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
            {loadingButton && <ButtonCoverLoader />}
          </button>
        </div>
      </div>
    </div>
  );
}
