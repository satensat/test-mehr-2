import React from "react";
import ScoreIcon from "@/icon/Score";
import BookIcon from "@/icon2/BookIcon";
import ClipBoardTickIcon from "@/icon2/ClipBoardTickIcon";
import ProfileTwoUser from "@/icon2/ProfileTwoUser";
import VerifyIcon from "@/icon/verify";
// import GlobalSearchIcon from "@/icon2/GlobalSearchIcon";
import TrendUpIcon from "@/icon2/TrendUpIcon";
import GlobalSearchIcon from "@/icon2/GlobalSearch";

export default function ReceiveRepresentativeBenefits() {

  return (
    <>
      <div className="flex flex-col">
        <div className="px-3 py-2 flex flex-row gap-2">
          <div>
            <ScoreIcon />
          </div>
          <div className="text-right text-sm not-italic font-bold leading-6  text-[#242424]">
            مزایای عضویت
          </div>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2">
            <div>
              <BookIcon />
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              برگزاری جلسات و سمینارهای آموزشی
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2">
            <div>
              <ProfileTwoUser />
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              مراجعه خریداران و افزایش مشتریان
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2">
            <div>
              <VerifyIcon width={"24"} height={"24"} color={"#696969"} />
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              نمایندگی یک برند معتبر کشوری
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2">
            <div>
              <GlobalSearchIcon />
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              نمایش در لیست نمایندگان وبسایت
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2">
            <div>
              <TrendUpIcon />
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              افزایش کیفیت خدمات با بررسی‌های دوره‌ای
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 md:pt-3 pb-0 md:pb-5 ">
        <div className=" flex flex-col px-3 before:bg-[#E6E6E6] md:before:h-[0px] 
before:content-['']  before:h-[1px] before:w-full  md:pt-0 ">

      <div className="pt-3 md:pt-0">
        
       
        <div className="py-2 flex flex-row gap-2">
          <div>
            <ClipBoardTickIcon />
          </div>
          <div className="text-right text-sm not-italic font-bold leading-6  text-[#242424]">
            شرایط
          </div>
        </div>
        </div> 
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2 items-center">
            <div className="text-center text-lg not-italic font-bold leading-10 text-[#696969] pl-1">
              1
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              داشتن تجربه و سابقه در زمینه خدمات پس از فروش
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2 items-center">
            <div className="text-center text-lg not-italic font-bold leading-10 text-[#696969] pl-1">
              2
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              آشنایی کامل و کافی با شرکت خدماتی و تجاری مهر سرمستان و ضوابط و
              قوانین
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2 items-center">
            <div className="text-center text-lg not-italic font-bold leading-10 text-[#696969] pl-1">
              3
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              دارای فضای مناسب با الزامات شرکت
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2 items-center">
            <div className="text-center text-lg not-italic font-bold leading-10 text-[#696969] pl-1">
              4
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              دارا بودن شرایط متعارف عرفی و اجتماعی و نداشتن سوء سابقه و بدهی
              های بانکی
            </div>
          </div>
          <div className=" bg-[#fdfdfd] rounded-xl flex flex-row px-3 py-2 gap-2 items-center">
            <div className="text-center text-lg not-italic font-bold leading-10 text-[#696969] pl-1">
              5
            </div>
            <div className="text-right text-xs not-italic font-normal leading-5 text-[#242424]">
              شرکت متقاضی ثبت شده باشد و دارای کد اقتصادی و مجوزهای فعالیت
              مربوطه باشد
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
