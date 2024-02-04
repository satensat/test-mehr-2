import ArrowOpinion from "@/icon/ArrowOpinion";
import Image from "next/image";
import React from "react";
import styles from "./option.module.css";

export default function IntroCardRepresentatives() {
  return (
    <div className=" py-3 ">
      <div className="shadow-G1 bg-[#fff] rounded-3xl flex flex-row relative  h-fit md:min-h-0 overflow-hidden ">

          <div className="flex flex-col gap-3  p-3 h-full  md:relative md:w-[70%]     rounded-3xl z-[10] ">
            <div className="text-right text-lg not-italic font-bold leading-8 text-[#242424]">
              امور نمایندگان
            </div>
            <div className="text-right text-sm not-italic font-normal leading-6 text-[#525252] max-w-[900px]">
              شما با پیوستن به جامعه خدمات رسانی شرکت تجاری و خدماتی مهر سرمستان
              به کسب و کار خود رونق بخشیده و از مزایای پیوستن به برند معتبر مهر
              سرمستان منتفع شوید.
            </div>
            
            <button className="w-fit group transition ease-in-out duration-500 flex flex-row items-center  cursor-pointer my-3  px-3 py-1 rounded-xl bg-[#f5a800]    hover:filter hover:invert-1 hover:bg-[#13625c] text-[#000] hover:text-white">
              <div className="text-center text-sm not-italic font-bold leading-6 ">
                ورود به پنل نمایندگان
              </div>
              <div className="transition ease-in-out duration-500  group-hover:scale-110  group-hover:brightness-0 group-hover:invert mr-auto pr-1">
                <ArrowOpinion color={"#000"} />
              </div>
            </button>
        
          </div>


        <div className={"md:w-[30%] md:h-auto h-full  z-[1] absolute top-0 left-0 md:relative " + styles.gradient_white_bg}>
          <Image
            src={
              "/agency/business-network-background-connecting-dots-technology-design-1.svg"
            }
            alt={"data.content"}
            width={2000}
            height={440}
            className={"rounded-3xl  md:rounded-r-none h-full  mr-auto object-cover opacity-35 md:opacity-100 " + " "}
          />
        </div>
      </div>
    </div>
  );
}
// w-full -z-10