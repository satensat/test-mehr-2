"use client";
import React, { useEffect, useState } from "react";
import MagicStarIcon from "@/icon2/MagicStar";
import FiveRangeTest from "./FiveRangeTest";
import YesOrNoQuestion from "./YesOrNoQuestion";
import TenRangeTest from "./TenRangeTest";
import TextDescription from "./TextDescription";
import Buildings2 from "@/icon2/Buildings2";
import Wallet3Icon from "@/icon2/Wallet3Icon";
import Messages2 from "@/icon2/Messages2";
import SunBoldIcon from "@/icon2/SunBoldIcon";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ButtonCoverLoader from "./ButtonCoverLoader";

export default function SurvayFormContent({
  formik,
  enableSend,
  loadingButtonSurvey,
}) {
  const testNumber = ["1"];
  const [q19_helpText, setQ19_helpText] = useState({
    labelText: "نقطه قوت گارانتی مهر چیست؟",
    placeholderText: "لطفا نقطه قوت گارانتی مهر را بنویسید.",
  });
  useEffect(() => {
    if (
      formik.values.questions.question_19.qAnswer === "1" ||
      formik.values.questions.question_19.qAnswer === "2" ||
      formik.values.questions.question_19.qAnswer === "3" ||
      formik.values.questions.question_19.qAnswer === "4" ||
      formik.values.questions.question_19.qAnswer === "5" ||
      formik.values.questions.question_19.qAnswer === "6"
    ) {
      setQ19_helpText({
        labelText: "دلیل نمره پایین شما چیست؟",
        placeholderText: "لطفا دلیل نمره پایین خود را بنویسید.",
      });
    }
    if (
      formik.values.questions.question_19.qAnswer === "7" ||
      formik.values.questions.question_19.qAnswer === "8"
    ) {
      setQ19_helpText({
        labelText: "چه پیشنهادی برای بهتر شدن خدمات ما دارید؟",
        placeholderText: "لطفا پیشنهاد خود را برا بهتر شدن خدمات بنویسید.",
      });
    }
    if (
      formik.values.questions.question_19.qAnswer === "9" ||
      formik.values.questions.question_19.qAnswer === "10"
    ) {
      setQ19_helpText({
        labelText: "نقطه قوت گارانتی مهر چیست؟",
        placeholderText: "لطفا نقطه قوت گارانتی مهر را بنویسید.",
      });
    }
  }, [formik.values.questions.question_19.qAnswer]);

  // function checkQuestionTypeSetComponent(question, index, length) {
  //   switch (question.type_of_answer) {
  //     case "FIVE_CHOICES":
  //       return (
  //         <FiveRangeTest
  //           formik={formik}
  //           index={index}
  //           question={"question_5"}
  //           questionText={question.question}
  //           divider={true}
  //           is_shown={question.is_shown}
  //         />
  //       );

  //     case "BOOLEANFIELD":

  //     case "TEN_CHOICES":

  //     case "TEXT":

  //     default:
  //       break;
  //   }
  // }

  function check19Num() {
    if (
      formik.values.questions.question_8.qAnswer === "YES" &&
      formik.values.questions.question_16.qAnswer === "YES"
    ) {
      return "19";
    }
    if (formik.values.questions.question_8.qAnswer === "YES") {
      return "17";
    }
    return "16";
  }
  function check10Num(qNum) {
    if (formik.values.questions.question_8.qAnswer === "YES") {
      return qNum;
    }
    return +qNum-1;
  }
  return (
    <form className="w-full  bg-[#FDFDFD] rounded-3xl shadow-G1 flex flex-col  font-costumFaNum relative ">
      {!enableSend && (
        <div className="w-full flex flex-row items-center justify-center h-full absolute top-0 inset-x-0 bg-slate-50 bg-opacity-30 p-3 rounded-3xl  z-[14]  "></div>
      )}
      <div className="flex flex-col relative">
        <div className="sticky top-0 inset-x-0 z-[12]   bg-[#FDFDFD] rounded-3xl">
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
        <div className="flex flex-col  ">
          <YesOrNoQuestion
            formik={formik}
            show={true}
            question={"question_1"}
            divider={true}
            questionText={
              "1-در هنگام خرید محصول، ضمانت نامه فارسی تحویل شما داده شده ؟"
            }
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_2"}
            questionText={
              "2- سهولت در برقراری تماس و دسترسی به مراکز خدمات پس از فروش"
            }
            divider={true}
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_3"}
            questionText={" 3- مدت زمان انتظار پذیرش"}
            divider={true}
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_4"}
            questionText={
              "4- نحوه اطلاع رسانی واحد گارانتی به شما نسبت به فرایند خدمات ارائه شده"
            }
            divider={true}
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_5"}
            questionText={"5- کیفیت خدمات ارائه شده به شما"}
            divider={true}
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_6"}
            questionText={"6- تحویل به موقع و خوش قولی شرکت"}
            divider={true}
          />
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_7"}
            questionText={"7- امانت داری واحد گارانتی از دستگاه شما"}
            divider={true}
          />
          <YesOrNoQuestion
            formik={formik}
            show={true}
            question={"question_8"}
            divider={
              formik.values.questions.question_8.qAnswer === "YES"
                ? false
                : true
            }
            questionText={
              "8- آیا در خصوص نحوه ارائه خدمات پس از فروش شکایتی به شرکت مطرح کرده اید؟"
            }
          />
          {/* {formik.values.questions.question_8.qAnswer === "YES" && ( */}
          <FiveRangeTest
            formik={formik}
            show={formik.values.questions.question_8.qAnswer === "YES"}
            question={"question_9"}
            questionText={`9- رسیدگی واحد گارانتی نسبت به شکایت شما`}
            divider={
              formik.values.questions.question_9.qAnswer === "1" ||
              formik.values.questions.question_9.qAnswer === "2" ||
              formik.values.questions.question_9.qAnswer === "3"
                ? false
                : true
            }
          />
          {/* )} */}
          {/* {formik.values.questions.question_8.qAnswer === "YES" &&
            (formik.values.questions.question_9.qAnswer === "1" ||
              formik.values.questions.question_9.qAnswer === "2" ||
              formik.values.questions.question_9.qAnswer === "3") && ( */}
          <TextDescription
            formik={formik}
            show={
              formik.values.questions.question_8.qAnswer === "YES" &&
              (formik.values.questions.question_9.qAnswer === "1" ||
                formik.values.questions.question_9.qAnswer === "2" ||
                formik.values.questions.question_9.qAnswer === "3")
            }
            labelDescription={"دلیل نمره پایین شما چیست؟ (اختیاری)"}
            placeholderDescription={
              "لطفا دلیل نمره پایین خود را وارد کنید یا پیشنهاد خود برای بهبود خدمات را بنویسید"
            }
            question={"question_9_detail"}
            divider={true}
          />
          {/* )} */}
          <FiveRangeTest
            formik={formik}
            show={true}
            question={"question_10"}
            questionText={`${check10Num("10")}- مدت زمان تعمیر دستگاه شما`}
            divider={false}
          />
          <div className="sticky top-[86px] inset-x-0 z-[12]  bg-[#FDFDFD] rounded-b-3xl">
            <div className="w-full flex flex-row bg-mainYellow  p-3 rounded-b-3xl   ">
              <Buildings2 />
              <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
                شرایط محیطی
              </p>
            </div>
          </div>

          <FiveRangeTest
            show={true}
            questionText={`${check10Num("11")}- آراستگی کارکنان `}
            formik={formik}
            question={"question_11"}
            divider={true}
          />

          <FiveRangeTest
            show={true}
            formik={formik}
            question={"question_12"}
            questionText={`${check10Num("12")}- آراستگی و نظم محیط پذیرش`}
            divider={false}
          />

          <div className="sticky top-[86px] inset-x-0 z-[12]  bg-[#FDFDFD] rounded-b-3xl">
            <div className="w-full flex flex-row bg-mainYellow  p-3 rounded-b-3xl   ">
              <Messages2 />
              <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
                نحوه ارتباط با مشتریان
              </p>
            </div>
          </div>
          <FiveRangeTest
            show={true}
            formik={formik}
            question={"question_13"}
            questionText={`${check10Num("13")}- میزان زمان اختصاص داده شده و دقت مشاور به مشکلات شما`}
            divider={true}
          />
          <FiveRangeTest
            show={true}
            formik={formik}
            question={"question_14"}
            questionText={`${check10Num("14")}- شیوه برخورد کارکنان با شما`}
            divider={true}
          />
          <FiveRangeTest
            show={true}
            formik={formik}
            question={"question_15"}
            questionText={`${check10Num("15")}- نحوه پاسخگویی به درخواست ها و سوالات احتمالی شما`}
            divider={false}
          />
          <div className="sticky top-[86px] inset-x-0 z-[12]  bg-[#FDFDFD] rounded-b-3xl">
            <div className="w-full flex flex-row bg-mainYellow  p-3 rounded-b-3xl   ">
              <Wallet3Icon />
              <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
                هزینه خدمات
              </p>
            </div>
          </div>
          <YesOrNoQuestion
            formik={formik}
            show={true}
            question={"question_16"}
            divider={false}
            questionText={`${check10Num("16")}- آیا هزینه‌ای از شما از بابت ارائه خدمات دریافت شده است؟`}
          />
          {/* {formik.values.questions.question_16.qAnswer === "YES" && ( */}
          <YesOrNoQuestion
            formik={formik}
            show={formik.values.questions.question_16.qAnswer === "YES"}
            question={"question_17"}
            divider={false}
            questionText={`17- آیا قبل از اقدام به تعمیر حدود هزینه به شما اعلام شده است؟`}
          />
          {/* // )} */}
          {/* {formik.values.questions.question_16.qAnswer === "YES" && ( */}
          <FiveRangeTest
            formik={formik}
            show={formik.values.questions.question_16.qAnswer === "YES"}
            question={"question_18"}
            questionText={`18- تناسب هزینه دریافتی با خدمات ارائه شده`}
            divider={false}
          />
          {/* )} */}
          <div className="sticky top-[86px] inset-x-0 z-[12]  bg-[#FDFDFD] rounded-b-3xl">
            <div className="w-full flex flex-row bg-mainYellow  p-3 rounded-b-3xl   ">
              <SunBoldIcon />
              <p className="text-[#242424] leading-6 text-base font-bold px-3 ">
                رضایت از مهر
              </p>
            </div>
          </div>

          <TenRangeTest
            formik={formik}
            show={true}
            question={"question_19"}
            questionText={`${check19Num()}- از 1 تا 10 چقدر احتمال دارد گارانتی مهر را به دیگران پیشنهاد کنید؟ `}
            divider={false}
            subtext={"1 کمترین و 10 بیشترین احتمال است"}
          />
          <TextDescription
            formik={formik}
            show={true}
            labelDescription={q19_helpText.labelText}
            placeholderDescription={q19_helpText.placeholderText}
            question={"question_19_detail"}
            divider={false}
          />
        </div>

        {/* <div className="sticky top-0 inset-x-0 z-[12]  bg-[#FDFDFD] rounded-3xl">
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
        </div> */}
        {/* <div className="flex flex-col" > 
        
        {questionsTest.map((item,index)=>{
// questionsTest.length
        })}
        
        
        
         </div> */}
      </div>
      <div className="  w-full flex flex-col gap-3 pt-3 after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCCCCC] before:content-['']   before:h-[1px] before:w-full   before:bg-[#CCCCCC]  ">
        <div className="w-[50px] h-[50px] bg-mainGreen1"></div>
      </div>
      <div className="flex flex-row items-center justify-center p-3  ">
        <button
          onClick={formik.handleSubmit}
          className={
            "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-4 py-2 text-base leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] w-fit relative overflow-hidden " +
            " " +
            `${loadingButtonSurvey ? "  pointer-events-none  " : " "}`
          }
        >
          ثبت نظر
          <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
            <ArrowOpinion width={"24"} height={"24"} />
          </div>
          {loadingButtonSurvey && <ButtonCoverLoader />}
        </button>
      </div>
    </form>
  );
}
