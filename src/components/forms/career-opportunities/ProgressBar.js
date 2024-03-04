"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./progress.module.css";
import stylesMobile from "./progressMobile.module.css";
// import RepresentativeInformationWrapper from "./Representative-information/RepresentativeInformationWrapper";
// import StoreInfoFormWrapper from "./store-info-form/StoreInfoFormWrapper";
// import VerificationFormWrpper from "./verification/VerificationFormWrapper";
// import UploadDocumentsFormWrapper from "./upload-documents/UploadDocumentsFormWrapper";
// import ConfirmAndSend from "./confirm-send/ConfirmAndSend";

export default function ProgressBarAndform() {
  const [mainData, setMainData] = useState({});

  ////////points animation
  const aniamtionPartDone =
    styles.points + " " + styles.fullsize + " " + styles.fullsizeTick;
  const pointNotComplete = styles.points;
  const pointBlank = styles.points_blank;
  /////step counter
  const [stepCounter, setStepCounter] = useState("0");
  /////points style
  const [firstPoint, setFirstPoint] = useState(pointNotComplete);
  const [secondPoint, setSecondPoint] = useState(pointBlank);
  const [thirdPoint, setThirdPoint] = useState(pointBlank);
  const [fourthPoint, setFourthPoint] = useState(pointBlank);
  const [lastPoint, setLastPoint] = useState(pointBlank);

  //////progres animation

  const progress25 = styles.fullAnimation25;
  const progress50 = styles.fullAnimation50;
  const progress75 = styles.fullAnimation75;
  const progressFull = styles.fullAnimation;
  const [progressAnimation, setProgressAnimation] = useState("");

  ///text active

  ////tab active

  const [activeTab, setActiveTab] = useState("verification");

  const handleClickVarification = () => {};
  const verificationToFirstFormDone = () => {
    setProgressAnimation(progress25);
    setFirstPoint(aniamtionPartDone);
    setSecondPoint(pointNotComplete);
    setActiveTab("first");
    setStepCounter("1");
  };

  const firstFormDoneToSecondForm = () => {
    setProgressAnimation(progress50);
    setSecondPoint(aniamtionPartDone);
    setThirdPoint(pointNotComplete);
    setActiveTab("second");
    setStepCounter("2");
  };

  const secondFormDoneToThirdForm = () => {
    setProgressAnimation(progress75);
    setThirdPoint(aniamtionPartDone);
    setFourthPoint(pointNotComplete);
    setActiveTab("third");
    setStepCounter("3");
  };

  const thirdFormDoneToFourthForm = () => {
    setProgressAnimation(progressFull);
    setFourthPoint(aniamtionPartDone);
    setLastPoint(pointNotComplete);
    setActiveTab("forth");
    setStepCounter("4");
  };
  const doneLastForm = () => {
    setProgressAnimation(progressFull);
    setLastPoint(aniamtionPartDone);
    setStepCounter("5");
  };
  return (
    <div className="py-3 w-full  h-fit ">
      {/* <div className="min-h-[70px] flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-auto relative">
        <div
          className={
            "mx-auto md:w-[90%] flex flex-row justify-between w-full " +
            " " +
            styles.progressBar +
            " " +
            progressAnimation
          }
        >
          {/* <div className={pointNotComplete + " " +aniamtionPartDone}> *
          <div
            className={"cursor-pointer" + " " + firstPoint}
            onClick={() => setActiveTab("verification")}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "verification" ? styles.active : " "}`
              }
            >
              حساب کاربری
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + secondPoint}
            onClick={() => {
              // if (+stepCounter >= 1) {
              setActiveTab("first");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "first" ? styles.active : " "}`
              }
            >
              اطلاعات فردی
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + thirdPoint}
            onClick={() => {
              // if (+stepCounter >= 2) {
              setActiveTab("second");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "second" ? styles.active : " "}`
              }
            >
              اطلاعات تماس
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + fourthPoint}
            onClick={() => {
              // if (+stepCounter >= 3) {
              setActiveTab("third");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "third" ? styles.active : " "}`
              }
            >
              زبان و مهارت
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + lastPoint}
            onClick={() => {
              // if (+stepCounter >= 4) {
              setActiveTab("last");
              // }
            }}
          >
            {/* <div className={" absolute top-[50%]  left-[50%] -translate-x-1/2  -translate-y-1/2 "+styles.tickIcon}>
              <EmpthyTick  width={"32"} height={"32"}/>
            </div> *
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "last" ? styles.active : " "}`
              }
              onClick={() => {
                // if (+stepCounter >= 5) {
                setActiveTab("last");
                // }
              }}
            >
              سوابق و مدارک
            </div>
          </div>
        </div>
      </div> */}
      <div className=" px-3  flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-auto relative">
      <div className="flex flex-row items-center w-full pb-3">
        <div className={"      " + stylesMobile.loader_container}>
          <svg
            className={stylesMobile.loader_main}
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
          >
            <circle
              className={stylesMobile.loader__value_main}
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          <svg
            className={stylesMobile.loader}
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
          >
            <circle
              className={
                stylesMobile.loader__value +
                "  " +
                stylesMobile.loader_value_first
              }
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          <div className="absolute top-0 inset-x-0 w-[64px] h-[64px] flex flex-row items-center justify-center font-costumFaNum ">
            <div className="flex flex-col">
              <div className=" text-xs leading-6  text-center text-[#ABABAB]  ">
                <span className="text-mainGreen1 font-bold   text-xs leading-6 ">
                  5
                </span>{" "}
                از{" "}
                <span className="text-mainGreen1 font-bold   text-xs leading-6 ">
                  5
                </span>
              </div>
              <div className=" text-[10px] leading-4  text-center text-[#ABABAB] ">
                مرحله
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center before:h-[40px]  before:content-['']    before:w-[1px]   before:bg-[#E6E6E6] before:mx-3    ">
          <div className="flex flex-col w-full ">
            <div className="text-[#242424] text-base leading-8">
              حساب کاربری
            </div>
            <div className="text-[#808080] text-sm leading-6">
              مرحله بعد: اطلاعات فردی
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* {activeTab === "verification" && (
        <div
          className={
            "  ease-in-out duration-300    transition-all   " +
            " " +
            `${
              activeTab === "verification"
                ? " opacity-100 translate-y-0  relative"
                : " translate-y-full  opacity-0  absolute "
            }`
          }
        >
          <VerificationForm />
        </div>
      )} */}
      {/* 
      {activeTab === "first" && (
        <div
          className={
            "  ease-in-out duration-300    transition-all   " +
            " " +
            `${
              activeTab === "first"
                ? " opacity-100 translate-y-0 "
                : " translate-y-full  opacity-0  absolute "
            }`
          }
        >
          <FirstForm />
        </div>
      )}
      {activeTab === "second" && (
        <div
          className={
            "  ease-in-out duration-300    transition-all   " +
            " " +
            `${
              activeTab === "second"
                ? " opacity-100 translate-y-0 "
                : " translate-y-full  opacity-0   absolute"
            }`
          }
        >
          <SecondForm />
        </div>
      )}
      {activeTab === "third" && (
        <div
          className={
            "  ease-in-out duration-300    transition-all   " +
            " " +
            `${
              activeTab === "third"
                ? " opacity-100 translate-y-0 "
                : " translate-y-full  opacity-0  absolute "
            }`
          }
        >
          <ThirdForm />
        </div>
      )}
      {activeTab === "last" && (
        <div
          className={
            "  ease-in-out duration-300    transition-all   " +
            " " +
            `${
              activeTab === "last"
                ? " opacity-100 translate-y-0 "
                : " translate-y-full  opacity-0 absolute  "
            }`
          }
        >
          <LastForm />
        </div>
      )} */}

      {/* <VerificationFormWrpper
        activeTab={activeTab}
        verificationToFirstFormDone={verificationToFirstFormDone}
        mainData={mainData}
        setMainData={setMainData}
      />

      <RepresentativeInformationWrapper
        mainData={mainData}
        activeTab={activeTab}
        firstFormDoneToSecondForm={firstFormDoneToSecondForm}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <StoreInfoFormWrapper
        activeTab={activeTab}
        secondFormDoneToThirdForm={secondFormDoneToThirdForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <UploadDocumentsFormWrapper
        activeTab={activeTab}
        thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      {activeTab === "last" && (
        <ConfirmAndSend activeTab={activeTab} setActiveTab={setActiveTab} doneLastForm={doneLastForm} />
      )} */}
    </div>
  );
}
