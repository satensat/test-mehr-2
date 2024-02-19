import React from "react";
import formStyles from "./formstyles.module.css";
import MagicStarIcon from "@/icon2/MagicStar";
import DangerIcon from "@/icon2/DangerIcon";

export default function SurvayContent({ formik }) {
  return (
    <div className="w-full  bg-[#FDFDFD] rounded-3xl shadow-G1 flex flex-col relative font-costumFaNum ">
      <div className="sticky top-0 inset-x-0">
        <div className="  w-full flex flex-col gap-3 pt-3 after:content-['']   after:h-[2px] after:w-full   after:bg-[#13625C] ">
          <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
            با توجه به تجربه خدماتی که دریافت کرده‌اید
          </p>
          <p className="text-[#525252] leading-6 text-sm px-3  ">
            میزان رضایت خود از موارد زیر را اعلام کنید
          </p>
        </div>
        <div className="w-full flex flex-row bg-mainYellow  p-3 rounded-b-3xl   ">
          <MagicStarIcon />
          <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
            کیفیت سنجی خدمات ارائه شده
          </p>
        </div>
      </div>
      <div className="flex flex-col px-6 ">
        <div className="mt-5 w-full flex flex-col  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC]  gap-2 ">
          <div className="text-[#242424] leading-6 text-sm  ">
            1-در هنگام خرید محصول، ضمانت نامه فارسی تحویل شما داده شده ؟
          </div>

          <div className="flex flex-col md:flex-row gap-2  justify-between  ">
            <div className="bg-[#F7F7F7] rounded-xl py-2 px-3 w-full grow flex flex-row items-center">
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
                  بله
                </div>
              </div>
            </div>
            <div className="bg-[#F7F7F7] rounded-xl py-2 px-3 w-full   grow flex flex-row items-center ">
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
                  خیر
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "text-mainRed text-xs  flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
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

        <div className="mt-5 w-full flex flex-col  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC]  gap-2 ">
          <div className="text-[#242424] leading-6 text-sm  ">
            2- سهولت در برقراری تماس و دسترسی به مراکز خدمات پس از فروش
          </div>

          <div className="flex flex-col md:flex-row gap-2  justify-between  ">
            <div
              onClick={() => {
                formik.setFieldValue("question_2", "1");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_2 === "1"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_2 === "1"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  1
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">ضعیف</div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_2", "2");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_2 === "2"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_2 === "2"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  2
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_2", "3");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_2 === "3"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_2 === "3"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  3
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">متوسط</div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_2", "4");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_2 === "4"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_2 === "4"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  4
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_2", "5");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_2 === "5"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_2 === "5"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  5
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">عالی</div>
            </div>
          </div>
          <div
            className={
              "text-mainRed text-xs  flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
              " " +
              `${
                formik.errors.question_2 && formik.touched.question_2
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.question_2}
          </div>
        </div>


        <div className="mt-5 w-full flex flex-col  after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC]  gap-2 ">
          <div className="text-[#242424] leading-6 text-sm  ">
          3- مدت زمان انتظار پذیرش
          </div>

          <div className="flex flex-col md:flex-row gap-2  justify-between  ">
            <div
              onClick={() => {
                formik.setFieldValue("question_3", "1");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_3 === "1"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_3 === "1"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  1
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">ضعیف</div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_3", "2");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_3 === "2"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_3 === "2"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  2
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_3", "3");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_3 === "3"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_3 === "3"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  3
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">متوسط</div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_3", "4");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_3 === "4"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_3 === "4"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  4
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                formik.setFieldValue("question_3", "5");
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={" rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.question_3 === "5"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]"
                }`}
              >
                <div
                  className={
                    " text-base leading-6 font-bold text-center font-costumFaNum" +
                    `${
                      formik.values.question_3 === "5"
                        ? " text-[#fff]"
                        : "  text-[#696969] "
                    }`
                  }
                >
                  5
                </div>
              </div>
              <div className="text-[#525252] text-sm leading-6">عالی</div>
            </div>
          </div>
          <div
            className={
              "text-mainRed text-xs  flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
              " " +
              `${
                formik.errors.question_3 && formik.touched.question_3
                  ? " opacity-100 "
                  : " opacity-0 "
              }`
            }
          >
            <DangerIcon />
            {formik.errors.question_3}
          </div>
        </div>















        
      </div>
    </div>
  );
}
