import ArrowOpinion from "@/icon/ArrowOpinion";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

export default function Card({
  title,
  content,
  image,
  imageCss,
  titleColor,
  textColor,
  background,
  hrefAddress,
}) {
  return (
    <div
      className={
        "group w-full md:w-1/3 rounded-3xl bg-[#FDFDFD] p-[10px] shadow-G1 relative transition  duration-[1000ms] overflow-hidden " +
        styles.card
      }
    >
      {/* before:transition  before:duration-[1000ms] before:content-['']   before:w-0 hover:before:w-full before:h-full overflow-hidden before:absolute before:top-1/2 before:left-1/2  before:-translate-x-2/4 before:-translate-y-2/4  before:bg-[#1b887f]  */}
      <Link
        href={hrefAddress}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10"
      ></Link>
      {/* <div className="relative"> */}

      <div
        className={
          "rounded-2xl relative w-full h-full min-h-[268px] bg-cover bg-no-repeat bg-center bg-white " +
          " " +
          imageCss +
          " " +
          styles.innerCard
        }
      >
        <div
          className={
            "flex flex-col w-full h-full min-h-[268px] rounded-2xl" +
            " " +
            background
          }
        >
          <div className="flex flex-col p-3  ">
            <div
              className={
                "text-lg not-italic font-bold leading-8  pb-3" +
                " " +
                titleColor
              }
            >
              {title}
            </div>
            <div
              className={
                "text-sm not-italic font-normal leading-8 " + " " + textColor
              }
            >
              {content}
            </div>
          </div>
          <div className="flex flex-col p-3 mt-auto ">
            <button className="w-fit transition ease-in-out duration-500  flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px]  bg-[#FFF] border-[#13625C] rounded-xl py-1 px-3 md:text-xs group-hover:text-white  group-hover:bg-mainGreen1 ">
              <div className="text-sm not-italic font-bold leading-6 ml-1">
                آشنایی بیشتر
              </div>
              <div className="transition ease-in-out duration-500 group-hover:-translate-x-1 group-hover:scale-110  group-hover:brightness-0 group-hover:invert">
                <ArrowOpinion />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

// linear-gradient(270deg, #FFF 0.15%, rgba(217, 217, 217, 0.00) 99.87%)
// linear-gradient(270deg, rgba(0, 0, 0, 0.90) 0.15%, rgba(64, 64, 64, 0.63) 99.86%, rgba(217, 217, 217, 0.00) 99.87%);
// linear-gradient(270deg, rgba(0, 0, 0, 0.90) 0.15%, rgba(64, 64, 64, 0.63) 99.86%, rgba(217, 217, 217, 0.00) 99.87%);
//before:origin-center before:-translate-x-2/4
