"use client";
import React, { useState } from "react";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ButtonCoverLoader from "../ButtonCoverLoader";
import LoginModal from "@/components/global/LoginModal/LoginModal";

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
      {activeTab === "login" && (
        <div className=" flex flex-col pb-3 ">
          <div className="py-3 leading-6 font-bold text-base ">حساب کاربری</div>
          <div className="text-[#525252] leading-6 text-sm font-normal pb-3 ">
            برای ادامه فرآیند ابتدا وارد حساب کاربری خود شوید.
          </div>
          <div className="w-full flex flex-row items-center justify-center">
            <LoginModal />
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
      )}
    </>
  );
}
