import React from "react";
import DangerIcon from "@/icon2/DangerIcon";

export default function FiveRangeTest({
  formik,
  questionText,
  question,
  subtext,
  divider,
  show
}) {
  console.log(`questions.${question}.qAnswer`)
  return (
    <div
      className={
        "mt-5 w-full flex flex-col  gap-2 px-6 mb-1 " +
        `${
          divider
            ? "after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] "
            : ""
        }`+
        `${
          show
            ? " flex flex-col  "
            : " hidden "
        }`
      }
    >
      <div className="flex flex-col w-full">
        <div className="text-[#242424] leading-6 text-sm  ">{questionText}</div>
        <div className="text-[#808080] leading-6 text-sm  ">{subtext}</div>
      </div>
      <div className="flex flex-row gap-2  justify-between  ">
        <div
          onClick={() => {
            formik.setFieldValue(`questions.${question}.qAnswer`, "1");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
            console.log(formik)
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className={
              " transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
              `${
                formik.values.questions[`${question}`].qAnswer === "1"
                  ? " bg-[#13625C] "
                  : " bg-[#E6E6E6]  hover:bg-[#afdcd9] "
              }`
            }
          >
            <div
              className={
                " text-base leading-6 font-bold text-center font-costumFaNum" +
                `${
                  formik.values.questions[`${question}`].qAnswer === "1"
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
            formik.setFieldValue(`questions.${question}.qAnswer`, "2");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className={
              "transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
              `${
                formik.values.questions[`${question}`].qAnswer === "2"
                  ? " bg-[#13625C] "
                  : " bg-[#E6E6E6]   hover:bg-[#afdcd9]   "
              }`
            }
          >
            <div
              className={
                " text-base leading-6 font-bold text-center font-costumFaNum" +
                `${
                  formik.values.questions[`${question}`].qAnswer === "2"
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
            formik.setFieldValue(`questions.${question}.qAnswer`, "3");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className={
              " transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
              `${
                formik.values.questions[`${question}`].qAnswer === "3"
                  ? " bg-[#13625C] "
                  : " bg-[#E6E6E6]   hover:bg-[#afdcd9]   "
              }`
            }
          >
            <div
              className={
                " text-base leading-6 font-bold text-center font-costumFaNum" +
                `${
                  formik.values.questions[`${question}`].qAnswer === "3"
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
            formik.setFieldValue(`questions.${question}.qAnswer`, "4");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className={
              " transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
              `${
                formik.values.questions[`${question}`].qAnswer === "4"
                  ? " bg-[#13625C] "
                  : " bg-[#E6E6E6]   hover:bg-[#afdcd9]   "
              }`
            }
          >
            <div
              className={
                " text-base leading-6 font-bold text-center font-costumFaNum" +
                `${
                  formik.values.questions[`${question}`].qAnswer === "4"
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
            formik.setFieldValue(`questions.${question}.qAnswer`, "5");
            formik.setFieldValue(`questions.${question}.qText`, questionText);
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className={
              " transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
              `${
                formik.values.questions[`${question}`].qAnswer === "5"
                  ? " bg-[#13625C] "
                  : " bg-[#E6E6E6]   hover:bg-[#afdcd9]   "
              }`
            }
          >
            <div
              className={
                " text-base leading-6 font-bold text-center font-costumFaNum" +
                `${
                  formik.values.questions[`${question}`].qAnswer === "5"
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
            formik.errors.questions && formik.touched.questions && 
             formik.errors?.questions[`${question}`]?.qAnswer && formik.touched?.questions[`${question}`]?.qAnswer 
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.questions && formik.errors?.questions[`${question}`]?.qAnswer}
      </div>
    </div>
  );
}
