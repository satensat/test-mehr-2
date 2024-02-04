import React from "react";
import ArrowOpinion from "@/icon/ArrowOpinion";
import ZoomIcon from "@/icon/ZoomIcon";
import AgencyIcon3 from "@/icon/agency3";
import Image from "next/image";
import styles from "./option.module.css";

export default function CountryMapPart() {
  return (
    <div className="py-3 ">
      <div className={"rounded-3xl shadow-G1 bg-[#f7f7f7] flex flex-col md:flex-row "+" " +styles.containerColorfull}>
        <div className="pt-3 px-3 w-full md:w-[55%] pb-2">

          <div className="flex flex-col items-center justify-center gap-2 md:mb-3 p-3 md:px-0">
          <div className="p-3 flex flex-col items-center justify-center gap-2">
          <div className="hidden md:flex">
              <AgencyIcon3 color={"#13625C"} width={"40"} height={"40"} />
            </div>
            <div className="md:hidden flex">
              <AgencyIcon3 color={"#13625C"} width={"24"} height={"24"} />
            </div>
            <div className="text-center md:text-base  text-mainGreen1  text-sm not-italic font-bold leading-6 ">
              لیست نمایندگان خدمات پس از فروش
            </div>
            <div className=" md:text-sm md:leading-6 text-[#525252] text-justify    text-xs not-italic font-normal leading-5     ">
              در صورتیکه مایل به اخذ نمایندگی خدمات پس از فروش هستید، ابتدا
              موارد ذیل را مطالعه فرمایید و سپس فرم مربوط را پر کنید.
            </div>
          </div>

            <div className="hidden flex-col gap-3 w-full md:flex ">
              <div className="flex flex-row rounded-[10px] bg-mainGreen1 justify-center items-center px-1 py-2">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-sm not-italic font-normal leading-6 text-[#fff]">
                    نوع شعبه
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-sm not-italic font-normal leading-6 text-[#fff]">
                    شهر
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-sm not-italic font-normal leading-6 text-[#fff]">
                    نام فروشگاه
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-sm not-italic font-normal leading-6 text-[#fff]">
                    خدمات
                  </div>
                </div>
              </div>


              <div className="flex flex-row rounded-[10px] bg-[#F2FCFC]   justify-center items-center px-1 py-2 ">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شعبه اصلی
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  تهران
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  خدماتی و تجاری مهر
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  تمامی خدمات
                  </div>
                </div>
              </div>

              <div className="flex flex-row rounded-[10px] bg-[#FFF]  justify-center items-center px-1 py-2">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شعبه اصلی
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شیراز
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  خدماتی و تجاری مهر
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  تمامی خدمات
                  </div>
                </div>
              </div>

              <div className="flex flex-row rounded-[10px] bg-[#F2FCFC]   justify-center items-center px-1 py-2">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شعبه اصلی
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  اصفهان
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  خدماتی و تجاری مهر
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  تمامی خدمات
                  </div>
                </div>
              </div>

              <div className="flex flex-row rounded-[10px] bg-[#FFF] justify-center items-center px-1 py-2">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شعبه اصلی
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  مشهد
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  خدماتی و تجاری مهر
                  </div>
                </div>
                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  تمامی خدمات
                  </div>
                </div>
              </div>

              <div className="flex flex-row rounded-[10px] bg-[#F2FCFC]   items-center px-1 py-2">
                <div className="p-[10px] w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شعبه اصلی
                  </div>
                </div>

                <div className="p-[10px]  w-1/4 flex flex-row justify-center ">
                  <div className="text-xs not-italic font-normal leading-5 text-[#000]">
                  شهر های دیگر
                  </div>
                </div>
               
              </div>
            </div>
          </div>

          <div
            className={
              "relative flex flex-col-reverse md:flex-row justify-center items-center bg-[#f7f7f7] rounded-[10px]"
            }
          >
            <button
              className={
                " " +
                "group    flex flex-row justify-evenly items-center rounded-xl   text-[#2b7c76] transition ease-in-out duration-500 px-3 py-1  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white  text-sm  md:text-base not-italic font-bold leading-6 mb-3 md:mb-0"
              }
            >
              پیدا کردن نزدیک‌ترین شعبه
              <div
                className={
                  " " +
                  " transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert mr-1 "
                }
              >
                <ZoomIcon color={"#2b7c76"} width={"16"} height={"16"} />
              </div>
            </button>
            <div className="p-3">
              <button className=" group transition ease-in-out duration-500 flex flex-row items-center  cursor-pointer  px-3 py-1 rounded-xl hover:bg-[#f5a800]    hover:filter hover:invert-1 bg-[#13625c] hover:text-[#000] text-white">
                <div className="text-center text-sm not-italic font-bold leading-6 ">
                  مشاهده فهرست کامل
                </div>
                <div className="transition ease-in-out duration-500 group-hover:scale-110  group-hover:brightness-0 group-hover:invert-0 mr-auto pr-1">
                  <ArrowOpinion color={"#fff"} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%]  flex flex-row justify-center items-center self-stretch">
          <div className="w-full relative rounded-3xl min-h-[175px] h-full  overflow-hidden  flex flex-row justify-center items-center ">
            <Image
              src={"/agency/Iran map.webp"}
              alt={"data.content"}
              width={2000}
              height={640}
              className=" w-[70%] md:min-w-[360px] lg:min-w-[480px] xl:min-w-[560px] h-auto object-cover mx-auto my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
