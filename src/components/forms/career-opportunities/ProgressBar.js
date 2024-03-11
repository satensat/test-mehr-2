"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./progress.module.css";
import stylesMobile from "./progressMobile.module.css";
import LoginStepMainComponent from "./main-form/accountCheck/LoginStepMainComponent";
import PersonalInfoFormWrapper from "./main-form/personal-info/PersonalInfoFormWrapper";
import LanguegesAndSkillsFormWrapper from "./main-form/languages-skills/LanguegesAndSkillsFormWrapper";
import ContactInfoFormWrapper from "./main-form/contact-info/ContactInfoFormWrapper";
import RecordsAndDocumentsFormWrapper from "./main-form/records-documents/RecordsAndDocumentsFormWrapper";

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

  /////active text mobile view
  const stepInformations = {
    firstStep: {
      title: "حساب کاربری",
      nextStepTitle: "اطلاعات فردی",
      stepNumber: "1",
    },
    secondStep: {
      title: "اطلاعات فردی",
      nextStepTitle: "اطلاعات تماس",
      stepNumber: "2",
    },
    thirdStep: {
      title: "اطلاعات تماس",
      nextStepTitle: "زبان و مهارت",
      stepNumber: "3",
    },
    forthStep: {
      title: "زبان و مهارت",
      nextStepTitle: "سوابق و مدارک",
      stepNumber: "4",
    },
    lastStep: {
      title: "سوابق و مدارک",
      nextStepTitle: "---",
      stepNumber: "5",
    },
  };
  const [activeTextMobile, setActiveTextMobile] = useState(
    stepInformations.firstStep
  );

  ////// set mobile animation progress
  const progress0Mobile = stylesMobile.loader_value_first;
  const progress1to2Mobile = stylesMobile.loader_value_second;
  const progress2_3Mobile = stylesMobile.loader_value_third;
  const progress3_4Mobile = stylesMobile.loader_value_forth;
  const progress4_5Mobile = stylesMobile.loader_value_fifth;
  const progressFullMobile = stylesMobile.loader_value_full;

  const [progressAnimationMobile, setProgressAnimationMobile] =
    useState(progress0Mobile);

  const handleClickVarification = () => {};
  const verificationToFirstFormDone = () => {
    setProgressAnimation(progress25);
    setFirstPoint(aniamtionPartDone);
    setSecondPoint(pointNotComplete);
    setActiveTab("PersonalInfoForm");
    setStepCounter("1");
    //////mobile
    setActiveTextMobile(stepInformations.secondStep);
    setProgressAnimationMobile(progress1to2Mobile);
  };

  const firstFormDoneToSecondForm = () => {
    setProgressAnimation(progress50);
    setSecondPoint(aniamtionPartDone);
    setThirdPoint(pointNotComplete);
    setActiveTab("ContactInfoForm");
    setStepCounter("2");
    //////mobile
    setActiveTextMobile(stepInformations.thirdStep);
    setProgressAnimationMobile(progress2_3Mobile);
  };

  const secondFormDoneToThirdForm = () => {
    setProgressAnimation(progress75);
    setThirdPoint(aniamtionPartDone);
    setFourthPoint(pointNotComplete);
    setActiveTab("LanguegesAndSkillsForm");
    setStepCounter("3");
    //////mobile
    setActiveTextMobile(stepInformations.forthStep);
    setProgressAnimationMobile(progress3_4Mobile);
  };

  const thirdFormDoneToFourthForm = () => {
    setProgressAnimation(progressFull);
    setFourthPoint(aniamtionPartDone);
    setLastPoint(pointNotComplete);
    setActiveTab("RecordsAndDocuments");
    setStepCounter("4");
    //////mobile
    setActiveTextMobile(stepInformations.lastStep);
    setProgressAnimationMobile(progress4_5Mobile);
  };
  const doneLastForm = () => {
    setProgressAnimation(progressFull);
    setLastPoint(aniamtionPartDone);
    setStepCounter("5");
    //////mobile
    setActiveTextMobile(stepInformations.lastStep);
    setProgressAnimationMobile(progressFullMobile);
  };

  return (
    <div className="py-3 w-full  h-fit ">
      <div className="hidden md:flex   min-h-[70px]  flex-col  after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-auto relative  px-3 ">
        <div
          className={
            "mx-auto md:w-[90%] flex flex-row justify-between w-full " +
            " " +
            styles.progressBar +
            " " +
            progressAnimation
          }
        >
          {/* <div className={pointNotComplete + " " +aniamtionPartDone}>  */}
          <div
            className={"cursor-pointer" + " " + firstPoint}
            onClick={() => setActiveTab("LoginStepMainComponent")}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "LoginStepMainComponent" ? styles.active : " "}`
              }
            >
              حساب کاربری
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + secondPoint}
            onClick={() => {
              // if (+stepCounter >= 1) {
              setActiveTab("PersonalInfoForm");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "PersonalInfoForm" ? styles.active : " "}`
              }
            >
              اطلاعات فردی
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + thirdPoint}
            onClick={() => {
              // if (+stepCounter >= 2) {
              setActiveTab("ContactInfoForm");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "ContactInfoForm" ? styles.active : " "}`
              }
            >
              اطلاعات تماس
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + fourthPoint}
            onClick={() => {
              // if (+stepCounter >= 3) {
              setActiveTab("LanguegesAndSkillsForm");
              // }
            }}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${
                  activeTab === "LanguegesAndSkillsForm" ? styles.active : " "
                }`
              }
            >
              زبان و مهارت
            </div>
          </div>
          <div
            className={"cursor-pointer" + " " + lastPoint}
            onClick={() => {
              // if (+stepCounter >= 4) {
              setActiveTab("RecordsAndDocuments");
              // }
            }}
          >
            {/* {/* <div className={" absolute top-[50%]  left-[50%] -translate-x-1/2  -translate-y-1/2 "+styles.tickIcon}>
              <EmpthyTick  width={"32"} height={"32"}/>
            </div> * */}
            <div
              className={
                styles.textPart +
                " " +
                ` ${activeTab === "RecordsAndDocuments" ? styles.active : " "}`
              }
              onClick={() => {
                // if (+stepCounter >= 5) {
                setActiveTab("RecordsAndDocuments");
                // }
              }}
            >
              سوابق و مدارک
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden px-3  flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-auto relative">
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
                  stylesMobile.loader__value + "  " + progressAnimationMobile
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
                    {activeTextMobile.stepNumber}
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
                {activeTextMobile.title}
              </div>
              <div className="text-[#808080] text-sm leading-6">
                مرحله بعد: {activeTextMobile.nextStepTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col bg-[#FDFDFD] rounded-b-2xl ">
        </div> */}
      <LoginStepMainComponent
        activeTab={activeTab}
        thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />
      <PersonalInfoFormWrapper
        activeTab={activeTab}
        thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <ContactInfoFormWrapper
        activeTab={activeTab}
        thirdFormDoneToFourthForm={firstFormDoneToSecondForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />
      <LanguegesAndSkillsFormWrapper
        activeTab={activeTab}
        thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <RecordsAndDocumentsFormWrapper
        activeTab={activeTab}
        doneLastForm={doneLastForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

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
