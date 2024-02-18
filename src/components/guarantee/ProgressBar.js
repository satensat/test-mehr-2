"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./progress.module.css";
import FirstForm from "./FirstForm";

import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import VerificationForm from "./VerificationForm";
import LastForm from "./LastForm";
import EmpthyTick from "@/icon2/EmpthyTick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirstFormWrapper from "./FirstFormWrapper";
import VerificationFormWrapper from "./VerificationFormWrapper";
import SecondFormWrapper from "./SecondFormWrapper";
import ThirdFormWrapper from "./ThirdFormWrapper";
import LoginStepMainComponent from "./accountLoginComponent/LoginStepMainComponent";

export default function ProgressBar() {
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

  const [activeTab, setActiveTab] = useState("login");

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
    setActiveTab("last");
    setStepCounter("4");
  };
  const doneLastForm = () => {
    setProgressAnimation(progressFull);
    setLastPoint(aniamtionPartDone);
    setStepCounter("5");
  };
  return (
    <div className="p-3 w-full  h-fit ">
      <ToastContainer />
      <div className="min-h-[70px] flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] after:mt-auto relative">
        <div
          className={
            "mx-auto md:w-[90%] flex flex-row justify-between w-full " +
            " " +
            styles.progressBar +
            " " +
            progressAnimation
          }
        >
          {/* <div className={pointNotComplete + " " +aniamtionPartDone}> */}
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
              اطلاعات نماینده
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
              اطلاعات فروشگاه
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
              بارگذاری مدارک
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
            </div> */}
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
              تایید و ارسال
            </div>
          </div>
        </div>
      </div>
      {/* {activeTab === "verification" && (
        <div className="w-full">
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
        </div>
      )} */}
      {/* {activeTab === "first" && (
        <div className="w-full">
        <div
          className={
            "  ease-in-out duration-300    transition-all delay-200   " +
            " " +
            `${
              activeTab === "first"
                ? " opacity-100 translate-y-0 "
                : " translate-y-full  opacity-0  absolute "
            }`
          }
        >
          <FirstForm           mainData={mainData}
          firstFormDoneToSecondForm={firstFormDoneToSecondForm}
          setMainData={setMainData}
          setActiveTab={setActiveTab} />
        </div>
        </div>
      )} */}
      {/* 
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

      {/* <VerificationFormWrapper
        activeTab={activeTab}
          verificationToFirstFormDone={verificationToFirstFormDone}
          mainData={mainData}
          setMainData={setMainData}
        /> */}
      <LoginStepMainComponent
        activeTab={activeTab}
        verificationToFirstFormDone={verificationToFirstFormDone}
        mainData={mainData}
        setMainData={setMainData}
      />

      <FirstFormWrapper
        activeTab={activeTab}
        mainData={mainData}
        firstFormDoneToSecondForm={firstFormDoneToSecondForm}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <SecondFormWrapper
        activeTab={activeTab}
        secondFormDoneToThirdForm={secondFormDoneToThirdForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <ThirdFormWrapper
        activeTab={activeTab}
        thirdFormDoneToFourthForm={thirdFormDoneToFourthForm}
        mainData={mainData}
        setMainData={setMainData}
        setActiveTab={setActiveTab}
      />

      <LastForm
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        doneLastForm={doneLastForm}
        mainData={mainData}
        setMainData={setMainData}
      />
    </div>
  );
}
