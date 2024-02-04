"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./progress.module.css";
import FirstForm from "./FirstForm";

import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import VerificationForm from "./VerificationForm";
import LastForm from "./LastForm";

export default function ProgressBar() {
  ////////points animation
  const aniamtionPartDone = styles.fullsize + " " + styles.fullsizeTick;
  const pointNotComplete = styles.points;
  const pointBlank = styles.points_blank;

  const [styleChange, setStyleChange] = useState(pointNotComplete);
  const [styleAnimation, setStyleAnimation] = useState("");
  const [counter, setcounter] = useState(0);
  /////points style
  const [firstPoint, setFirstPoint] = useState(pointNotComplete);
  const [secondPoint, setSecondPoint] = useState(pointBlank);
  const [thirdPoint, setThirdPoint] = useState(pointBlank);
  const [fourthPoint, setFourthPoint] = useState(pointBlank);
  const [lastPoint, setLastPoint] = useState(pointBlank);

  const handleChange = () => {
    setStyleChange(pointNotComplete);
    setStyleAnimation(aniamtionPartDone);
  };
  //////progres animation

  const progress35 = styles.fullAnimation35;
  const progress70 = styles.fullAnimation70;
  const progressFull = styles.fullAnimation;
  const [progressAnimation, setProgressAnimation] = useState("");

  ///text active

  const [textActive, setTextActive] = useState(1);

  ////tab active

  const [activeTab, setActiveTab] = useState("verification");


  const handleClickVarification=()=>{

  }

  return (
    <div className="p-3 w-full  h-fit ">
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
            className={firstPoint}
            onClick={() => setActiveTab("verification")}
          >
            <div
              className={
                styles.textPart +
                " " +
                ` ${textActive === 1 ? styles.active : " "}`
              }
            >
              احراز هویت
            </div>
          </div>
          <div className={secondPoint} onClick={() => setActiveTab("first")}>
            <div
              className={
                styles.textPart +
                " " +
                ` ${textActive === 2 ? styles.active : " "}`
              }
            >
              اطلاعات نماینده
            </div>
          </div>
          <div className={thirdPoint} onClick={() => setActiveTab("second")}>
            <div
              className={
                styles.textPart +
                " " +
                ` ${textActive === 3 ? styles.active : " "}`
              }
            >
              اطلاعات فروشگاه
            </div>
          </div>
          <div className={thirdPoint} onClick={() => setActiveTab("third")}>
            <div
              className={
                styles.textPart +
                " " +
                ` ${textActive === 4 ? styles.active : " "}`
              }
            >
              بارگذاری مدارک
            </div>
          </div>
          <div className={lastPoint} onClick={() => setActiveTab("last")}>
            <div
              className={
                styles.textPart +
                " " +
                ` ${textActive === 5 ? styles.active : " "}`
              }
            >
              تایید و ارسال
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
      
      {activeTab === "verification" && < VerificationForm/>}
      {activeTab === "first" && <FirstForm />}
      {activeTab === "second" && <SecondForm />}
      {activeTab === "third" && <ThirdForm />}
      {activeTab === "last" && <LastForm />}
    </div>
  );
}
