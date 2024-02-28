import React from "react";
import DangerIcon from "@/icon2/DangerIcon";

export default function TenRangeTest({
  formik,
  show,
  questionText,
  question,
  subtext,
  divider,
}) {
  return (
    <div
      className={
        "mt-5 w-full  gap-2 px-6 " +
        `${
          divider
            ? "after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] "
            : " first-letter:"
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
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2  justify-between  ">
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "1");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "1"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "1"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                1
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "2");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "2"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "2"
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
              formik.setFieldValue(`questions.${question}`, "3");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "3"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "3"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                3
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "4");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "4"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "4"
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
              formik.setFieldValue(`questions.${question}`, "5");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "5"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "5"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                5
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2  justify-between  ">
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "6");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "6"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "6"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                6{" "}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "7");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "7"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "7"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                7
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "8");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "8"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "8"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                8
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "9");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "9"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "9"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                9
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              formik.setFieldValue(`questions.${question}`, "10");
              formik.setFieldValue(`questions.${question}_qText`, questionText);
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={
                "   transition-all duration-300 rounded-xl p-2  w-[40px] h-[40px] " +
                `${
                  formik.values.questions[`${question}`] === "10"
                    ? " bg-[#13625C] "
                    : " bg-[#E6E6E6]   hover:bg-[#afdcd9] "
                }`
              }
            >
              <div
                className={
                  " text-base leading-6 font-bold text-center font-costumFaNum" +
                  `${
                    formik.values.questions[`${question}`] === "10"
                      ? " text-[#fff]"
                      : "  text-[#696969] "
                  }`
                }
              >
                10
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "text-mainRed text-xs  flex  flex-row gap-1 items-center transition-all duration-500 font-costumFaNum  " +
          " " +
          `${
            formik.errors.questions && formik.touched.questions &&  
            formik.errors.questions[`${question}`] &&
            formik.touched.questions[`${question}`]
             ?  " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.questions && formik.touched.questions &&   formik.errors.questions[`${question}`]}
      </div>
    </div>
  );
}
