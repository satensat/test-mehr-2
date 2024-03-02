"use client";
import React, { useState } from "react";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ButtonCoverLoader from "../ButtonCoverLoader";
import LoginModal from "@/components/global/LoginModal/LoginModal";
import InfoCircleIcon from "@/icon2/InfoCircle";
import SmsEmailIcon from "@/icon2/SmsEmailIcon";
import CallIcon from "@/icon2/CallIcon";

export default function LoginStepMainComponent({
  activeTab,
  verificationToFirstFormDone,
  mainData,
  setMainData,
}) {
  const [loadingButton, setLoadingButton] = useState(false);
  const [disabledCodeSend, setDisabledCodeSend] = useState(true);
  return (
    <>
      {/* {activeTab === "login" && ( */}
      <div className=" flex flex-col pb-3 px-3 rounded-b-2xl ">
        <div className=" text-[#242424] font-bold text-base leading-6 pb-3 text-center w-full">
          حساب کاربری
        </div>
        <div className="text-[#525252] leading-6 text-sm font-normal pb-3 ">
          برای ادامه فرآیند ابتدا وارد حساب کاربری خود شوید.
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <LoginModal
            disabledCodeSend={disabledCodeSend}
            setDisabledCodeSend={setDisabledCodeSend}
          />
        </div>

        <div className="flex flex-col w-full  gap-3">
          <div className="w-full px-3 py-1 flex flex-row rounded-2xl shadow-G1 items-center justify-between">
            <div className="flex flex-col">
              <div className="text-[#808080] leading-6 text-xs font-bold">
                شماره همراه
              </div>
              <div className="text-[#242424] leading-8 text-base">
                شماره همراه ثبت نشده است
              </div>
              <div className="flex flex-row  items-center gap-1 ">
                <InfoCircleIcon width={16} height={16} color={"#FBAB5B"} />
                <div className="text-[#696969] leading-5 text-xs ">
                  برای ادامه فرآیند شماره همراه خود را ثبت کنید
                </div>
              </div>
            </div>
            <button
              className={
                " " +
                "group h-fit   flex flex-row justify-evenly items-center rounded-xl   text-mainGreen1 transition ease-in-out duration-500 px-3 py-1  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white  text-xs  md:text-base not-italic font-bold leading-6"
              }
            >
              ویرایش اطلاعات
              <div
                className={
                  " " +
                  " transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert mr-1 "
                }
              >
                {/* <ArrowDownIcon color={"#13625c"} /> */}
                <ArrowOpinion color={"#13625c"} width={"16"} height={"16"} />
              </div>
            </button>
          </div>

          <div className="flex flex-row w-full items-center gap-2 bg-[#F7F7F7] rounded-2xl py-1 px-3">
            <CallIcon />
            <div className="flex flex-col">
              <div className="text-xs leading-6 text-[#808080] font-bold">
                شماره همراه
              </div>
              <div className="text-[#242424]  leading-8 text-base ">
                09050584751
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full items-center gap-2 bg-[#F7F7F7] rounded-2xl py-1 px-3">
            <SmsEmailIcon />
            <div className="flex flex-col">
              <div className="text-xs leading-6 text-[#808080] font-bold">
                ایمیل
              </div>
              <div className="text-[#242424]  leading-8 text-base ">
                younesiamir96@gmail.com
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full items-center gap-2 bg-[#F7F7F7] rounded-2xl py-1 px-3">
            <SmsEmailIcon />
            <div className="flex flex-col">
              <div className="text-xs leading-6 text-[#808080] font-bold">
                ایمیل
              </div>
              <div className="text-[#242424]  leading-8 text-base ">
                ایمیل ثبت نشده است.
              </div>
            </div>
          </div>
          <div className="py-3 w-full flex flex-row items-center  gap-2">
            <div className="py-1 text-sm text-[#525252] leading-6">
              این حساب کاربری شما نیست؟
            </div>
            <button
              className={
                " " +
                "group h-fit   flex flex-row justify-evenly items-center rounded-xl   text-mainGreen1 transition ease-in-out duration-500 px-3 py-1  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white  text-xs  not-italic font-bold leading-6"
              }
            >
              خروج از حساب کاربری
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <form className="flex flex-col items-center justify-center w-full">
            <div className="w-full flex flex-col  before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-3 items-center ">
              <button
                type="submit"
                //   onClick={formikLoginCode.handleSubmit}
                className={
                  "  transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl   " +
                  " " +
                  `${
                    disabledCodeSend
                      ? " bg-[#E6E6E6] cursor-not-allowed text-[#696969] "
                      : "group text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] cursor-pointer "
                  }` +
                  " " +
                  `${loadingButton ? "pointer-events-none" : " "}`
                }
              >
                مرحله بعد
                <div
                  className={
                    "transition ease-in-out duration-500  group-hover:scale-110    group-hover:brightness-0 group-hover:invert-0 " +
                    " " +
                    `${disabledCodeSend ? "  " : " brightness-0 invert "}`
                  }
                >
                  <ArrowOpinion color={disabledCodeSend ? "#696969" : ""} />
                </div>
                {loadingButton && <ButtonCoverLoader />}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
