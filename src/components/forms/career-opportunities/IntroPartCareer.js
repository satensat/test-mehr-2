import ArrowOpinion from "@/icon/ArrowOpinion";
import Image from "next/image";
import React from "react";
import styles from "./option.module.css";
import WalletCheck from "@/icon2/WalletCheck";

export default function IntroPartCareer() {
  return (
    <div className=" py-3 ">
      <div className="shadow-G1 bg-[#fff] rounded-3xl flex flex-row relative  h-fit md:min-h-0 overflow-hidden ">
        <div className="flex flex-col px-3 pb-3  z-[10] md:w-[70%] ">
          <div className="flex flex-col gap-3  py-3  h-full md:relative     rounded-3xl ">
            <div className=" text-lg font-bold leading-8 text-[#242424]">
              فرصت‌های شغلی
            </div>
            <div className=" text-sm font-normal leading-6 text-[#525252] max-w-[900px]">
              شرکت خدماتی تجاری مهر سرمستان به صورت مداوم به دنبال توسعه و تشکیل
              تیم‌های متخصص در حوزه‌های مختلف است، این امر باعث شده مهر دارای
              کارمندان متعهد و کارآمد باشد و به عنوان یک شرکت با نگاه شایسته
              محور به سرمایه‌های انسانی خود شناخته شود.
              <p>
                اگر شما هم علاقه‌‌مند به پیوستن به خانواده بزرگ مهر سرمستان
                هستید، میتوانید از طریق فرصت‌های ذیل اقدام نمایید.
              </p>
            </div>
          </div>

          <div className="flex flex-row  items-center p-3 bg-[#f7f7f7] rounded-2xl gap-3  max-w-[900px] ">
            <WalletCheck />
            <div className=" text-[#242424] text-xs leading-5  ">
              در صورتی که به دنبال همکاری تجاری هستید, فرم‌های مربوط به امور
              نمایندگان را پرکنید.
            </div>
            <button className="  mr-auto w-fit group transition ease-in-out duration-500 flex flex-row items-center  cursor-pointer  px-3 py-1 rounded-xl bg-[#f5a800]    hover:filter hover:invert-1 hover:bg-[#13625c] text-[#000] hover:text-white">
              <div className="text-center text-sm font-bold leading-6 ">
                امور نمایندگان
              </div>
              <div className="transition ease-in-out duration-500  group-hover:scale-110  group-hover:brightness-0 group-hover:invert mr-auto pr-1">
                <ArrowOpinion color={"#000"} />
              </div>
            </button>
          </div>
        </div>

        <div
          className={
            "md:w-[30%] md:h-auto h-full  z-[1] absolute top-0 left-0 md:relative " +
            styles.gradient_white_bg
          }
        >
          <Image
            src={
              "/forms/career-opportunities/attractive-latin-executive-offering-customer-service-with-headset-offering-tech-support-busy-call-center.svg"
            }
            alt={"data.content"}
            width={2000}
            height={440}
            className={
              "rounded-3xl  md:rounded-r-none h-full  mr-auto object-cover opacity-35 md:opacity-100 " +
              " "
            }
          />
        </div>
      </div>
    </div>
  );
}
