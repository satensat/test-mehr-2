import GoalIcon from "@/icon/GoalIcon";
import RoadArrows from "@/icon/RoadArrows";
import VisionEye from "@/icon/VisionEye";
import BuildingIcon from "@/icon/building";
import IdealsIcon from "@/icon/ideals";
import ShopIcon from "@/icon/shop";
import VerifyIcon from "@/icon/verify";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import AboutUsCarousel from "../about-us/AboutUsCarousel";

export default function MoreDetailIntroduction() {
  return (
    <>
    
    <div className="p-0 md:p-3 font-costumFaNum">
      <div
        className={
          "p-3 flex flex-col gap-3 bg-mainGreen1 rounded-3xl " +
          styles.container
        }
      >
         <span id="details" className="translate-y-[-40px] md:translate-y-[-30px]" ></span>
        <div className="h-[296px] md:h-[320px] relative ">
          <Image
            src={"/about-us-introduction/logo-large-mehr.svg"}
            alt={"مهرسرمسنان"}
            layout="fill"
            objectFit={"contain"}
            className=" w-full"
          />
        </div>
        <ul className="flex flex-row items-center justify-center ">
          <li className="flex flex-row gap-1 md:gap-2 py-1 px-0 ml-2 md:px-2 items-center  md:mx-2">
            <div className="hidden md:block">
              <VerifyIcon width={"32"} height={"32"} color={"#F5A800"} />
            </div>
            <div className=" md:hidden">
              <VerifyIcon width={24} height={24}  color={"#F5A800"} />
            </div>
            <div className="flex flex-col">
              <span className="text-center  not-italic font-black leading-6 text-mainYellow   text-lg md:text-2xl ">
                25+
              </span>
              <span className="text-center text-[10px] md:text-sm not-italic md:font-normal md:leading-6 text-[#E6E6E6]  font-bold leading-4">
                سال سابقه
              </span>
            </div>
          </li>
          <li className="flex flex-row gap-1 md:gap-2 py-1 px-0 ml-2 md:px-2 items-center  md:mx-2">
            <div className="hidden md:block">
              <BuildingIcon width={"32"} height={"32"} color={"#F5A800"} />
            </div>
            <div className="md:hidden">
              <BuildingIcon width={24} height={24}   color={"#F5A800"} />
            </div>
            <div className="flex flex-col">
              <span className="text-center  not-italic font-black leading-6 text-mainYellow text-lg md:text-2xl ">
                4+
              </span>
              <span className="text-center text-[10px] md:text-sm not-italic md:font-normal md:leading-6 text-[#E6E6E6]  font-bold leading-4">
                شعبه
              </span>
            </div>
          </li>
          <li className="flex flex-row gap-1 md:gap-2 py-1 px-0 ml-2 md:px-2 items-center  md:mx-2">
            <div className="hidden md:block">
              <ShopIcon width={"32"} height={"32"} color={"#F5A800"} />
            </div>
            <div className="md:hidden">
              <ShopIcon width={24} height={24}  color={"#F5A800"} />
            </div>
            <div className="flex flex-col">
              <span className="text-center not-italic font-black leading-6 text-mainYellow text-lg md:text-2xl ">
                250+
              </span>
              <span className="text-center text-[10px] md:text-sm not-italic md:font-normal md:leading-6 text-[#E6E6E6]  font-bold leading-4">
                نمایندگی
              </span>
            </div>
          </li>
        </ul>
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm not-italic font-normal leading-6 text-[#fdfdfd] pb-2">
            شرکت خدماتی و تجاری مهر سرمستان از سال 1382 فعالیت خود را در حوزه
            واردات تجهیزات آی‌تی با محوریت قطعات آغاز کرد و به مرور وارد حوزه
            لپتاپ، نوت بوک، موبایل و تبلت شد. مهر با در نظر گرفتن چهار اصل اساسی
            سعی بر بهبود خدمات خود داشته است.
          </div>
          <div className="flex flex-col pr-5 pb-2">
            <ul className="text-right text-sm not-italic font-normal leading-6 text-[#525252] list-disc">
              <li className="text-[#fdfdfd]">
                <span className="text-[#fdfdfd]">واردات کالای باکیفیت</span>
              </li>
              <li className="text-[#fdfdfd]">
                <span className="text-[#fdfdfd]">
                  تناسب بین کالا و خواست‌ها و نیازمندی‌های مصرف‌کنندگان ایرانی
                </span>
              </li>
              <li className="text-[#fdfdfd]">
                <span className="text-[#fdfdfd]">
                  قیمت‌گذاری با در نظر گرفتن همه‌ی چهارچوب‌های قانونی
                </span>
              </li>
              <li className="text-[#fdfdfd]">
                <span className="text-[#fdfdfd]">
                  ارائه خدمات پس از فروش برتر
                </span>
              </li>
            </ul>
          </div>
          <div className="text-sm not-italic font-normal leading-6 text-[#fdfdfd]">
            تعهد، پشتکار و همگام بودن با مشتریان ، بازرگانی مهر را به عنوان یک
            نام در سطح اول توزیع تجهیزات it در کشور مطرح نموده است.ما تلاش
            می‌کنیم تا بهترین خدمات را در اختیار مشتریان عزیز سراسر کشور قرار
            دهیم. همیشه سعی‌ نموده‌ایم با بدست‌آوردن درک بهتری از بازار ، بهترین
            اجناس از لحاظ کیفی را با بهترین خدمات پس از فروش در اختیار شرکای
            تجاریمان قرار دهیم. در طول بیش از یک دهه فعالیت، همیشه برای خرید
            ارتباطی مستقیم با کمپانی‌های تولید کننده اجناس داشته‌ایم و
            سعی‌نموده‌ایم برترین‌ها را با بهترین خدمات پس از فروش ، بهترین کیفیت
            و بهترین قیمت به کشور وارد کنیم، و در تمامی طول مسیر، مشتری مداری را
            بعنوان اولین و اصلی‌ترین هدف خود انتخاب نموده ایم.با توجه به اینکه
            بازرگانی مهر ارتباط مستقیم با تولید کنندگان و تامین کنندگان اصلی
            برندها در خارج از کشور دارد بعنوان نماینده و تامین کننده اصلی
            برند‌های HP, ASUS, Lenovo، Huawei، Samsung, Nokia, Honor, Apple,
            Xiaomi در تمامی نقاط ایران عزیزمان فعالیت می‌نماید. بر آن هستیم تا
            بهترین‌ها ی تکنولوژی را با بهترین قیمت و کیفیت وارد بازار داخلی کشور
            نمائیم و تمام تلاشمان این بوده‌ که در این امر بهترین باشیم.
          </div>
        </div>
        <div className="py-3 flex flex-row  flex-wrap gap-3 justify-center self-stretch ">
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/asus_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>

            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              ایسوس
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/Samsung_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              سامسونگ
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/Lenovo_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              لنوو
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/Xiaomi_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              شیائومی
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/Microsoft_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              مایکروسافت
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/HP_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              اچ پی
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl px-4 py-2 flex flex-col items-center ">
            <div className=" relative h-[24px] w-[75.6px] ">
              <Image
                src={"/brand/apple_logo.svg"}
                alt={"مهرسرمسنان"}
                layout="fill"
                objectFit={"contain"}
                // className=" w-full"
              />
            </div>
            <div className="text-xs not-italic font-bold leading-6 text-[#525252] mx-auto">
              اپل
            </div>
          </div>
        </div>
        <div className="text-sm not-italic font-normal leading-6 text-[#fdfdfd]">
          هم اکنون بازرگانی مهر عضو اتاق بازرگانی ایران و قطر، ایران و روسیه،
          ایران و هند، ایران و کانادا، ایران و امارات، ایران و آلمان، ایران و
          گرجستان می باشد.ما با کمک شرکاء تجاری عزیزمان در سال 1393 بعنوان
          بزرگترین شریک تجاری شرکت ASUS در ایران معرفی شدیم، همچنان که سالهای
          قبل نیز جوایز بسیاری از این قبیل کسب نمودیم و همه‌ی آنها را مدیون تیم
          بازرگانی مهر و شرکای تجاریمان هستیم.
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3">
          <div className="w-full p-3 flex flex-col gap-3 rounded-2xl bg-[#F7F7F7] md:w-1/2">
            <div className=" flex flex-col justify-center gap-2 items-center">
              <div>
                <IdealsIcon />
              </div>
              <div className="text-center text-base not-italic font-bold leading-6 text-[#525252]">
                آرمان‌ها
              </div>
            </div>
            <div className="text-sm not-italic font-normal text-center leading-6 text-[#525252]">
              محصولات و خدمات ما انتخاب اول هر خانواده ایرانی باشد.
            </div>
          </div>
          <div className="w-full p-3 flex flex-col gap-3 rounded-2xl bg-[#F7F7F7] md:w-1/2">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div>
                <VisionEye />
              </div>
              <div className="text-center text-base not-italic font-bold leading-6 text-[#525252]">
                چشم انداز
              </div>
            </div>
            <div className="text-sm not-italic font-normal text-center leading-6 text-[#525252]">
              محصولات و خدمات ما انتخاب اول مشتریان در سراسر کشور باشد.
            </div>
          </div>
        </div>
        <div className="w-full p-3 flex flex-col gap-3 rounded-2xl bg-[#F7F7F7] ">
          <div className=" flex flex-col justify-center items-center gap-2">
            <div>
              <GoalIcon />
            </div>
            <div className="text-center text-base not-italic font-bold leading-6 text-[#525252]">
              بیانیه ماموریت
            </div>
          </div>
          <div className="text-sm not-italic font-normal text-justify leading-6 text-[#525252]">
            شرکت خدماتی و تجاری مهرسرمستان بنابر مسئولیت خود در قبال ذینفعان و
            شناسایی آنها، مأموریت دارد با واردات از شرکای تجاری برند و معتبر
            خارجی در حوزه انواع تجهیزات IT به ویژه نوت بوک و موبایل منطبق با
            منابع کسب شده خروجی از تجزیه و تحلیل و نیازسنجی بازار، تأمین کالای
            هدفمند و ابتکارانه و منطبق با نیازهای مشتریان را توسعه و سامان
            بخشیده و با تعهد، پشتکار و همگام بودن با مشتریان محصولات با کیفیت و
            قیمت مناسب را عرضه نماید. در این راستا ضمن اقدام به مسئولیتهای
            اجتماعی، برقراری ارتباط و یکپارچگی با جامعه نسبت به ارائه خدمات پس
            از فروش نوآورانه، ارزنده و دارای شعب گسترده در سراسر کشور، آسودگی
            خاطر مشتریان را به صورت مداوم سرلوحه خود قرار داده و رضایت مشتریان
            را همواره در تمامی فعالی تهای خود مدنظر قرار می‌دهد.
          </div>
        </div>
        <div className="w-full p-3 flex flex-col gap-3 rounded-2xl bg-[#F7F7F7] ">
          <div className=" flex flex-col justify-center items-center gap-2">
            <div>
              <RoadArrows />
            </div>
            <div className="text-center text-base not-italic font-bold leading-6 text-[#525252]">
              خط مشی
            </div>
          </div>
          <div className="text-sm not-italic font-normal text-justify leading-6 text-[#525252]">
            شرکت خدماتی و تجاری مهر سرمستان به عنوان سازمان پیشرو در بازرگانی و
            ارائه خدمات پس از فروش تجهیزات IT به ویژه نوت بوکو موبایلدر کشور با
            ایجاد تفکر مشتری محور، گامی بلند در جهت بهبود عملکرد سازمان برداشته
            است. بدین منظور اقدام به استقرار و اجرای سیستم مدیریت زیست محیطی،
            ایمنی کارکنان بر اساس استاندارد ISO 14001:2015وISO 45001:2018، سیستم
            مدیریت کیفیت براساس الزاماتISO 9001:2015، سیستم مدیریت کیفیت در
            رضایتمندی مشتریان و رسیدگی به شکایات آن‌ها بر اساس استانداردISO
            10002:2018و همچنین ISO 26000: 2010 سیستم مدیریت مسئولیت اجتماعی
            نموده و خود را ملزم و متعهد به اصول زیر می داند:
          </div>
          <div className="flex flex-col gap-3 py-3">
            <div className="flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
              <div className="text-center  not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2    text-lg  md:text-2xl">
                1
              </div>
              <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                تمرکز بر مشتریان به منظور بر آورده کردن الزامات مشتریان
              </div>
            </div>
            <div className="flex flex-col md:flex-row  items-center gap-3">
              <div className="w-full md:w-1/2 flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 md:self-stretch transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
                <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                  2
                </div>
                <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                  ارتقا پاسخگویی و رسیدگی به شکایات مشتریان و نظرات آن ها در
                  حداقل زمان
                </div>
              </div>
              <div className="flex flex-col  items-center gap-3 w-full md:w-1/2">
                <div className="w-full flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
                  <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                    3
                  </div>
                  <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                    توسعه و توانمند سازی منابع انسانی به عنوان ارزشمند ترین
                    سرمایه سازمان از طریق مشارکت و آموزش
                  </div>
                </div>

                <div className=" w-full flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
                  <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                    4
                  </div>
                  <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                    ارتقاء سطح انگیزشی منابع انسانی از طریق بهبود نظام انتخاب و
                    ارزشیابی کارکنان و تاکید برشایسته سالاری
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  items-center gap-3">
              <div className="flex flex-col  items-center gap-3 w-full md:w-1/2">
                <div className="w-full flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer ">
                  <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                    5
                  </div>
                  <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                    افزایش سهم بازار و توسعه نام آوری سازمان (برند) از طریق
                    ارائه سبد محصولات و نوآوری و ارائه دهنده خدمات گارانتی
                  </div>
                </div>

                <div className=" w-full flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
                  <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                    6
                  </div>
                  <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                    حفظ و پیشگیری از آلودگی محیط زیست، حذف خطرات و کاهش ریسک
                    ایمنی و بهداشت و ارتقاء ایمنی کارکنان
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row bg-[#FDFDFD] py-1 px-3 rounded-xl items-center gap-2 md:self-stretch transition-all duration-500 ease-in-out hover:shadow-G2 cursor-pointer">
                <div className="text-center  text-lg  md:text-2xl not-italic font-bold leading-10 text-[#696969] font-costumFaNum px-2 py-2">
                  7
                </div>
                <div className="text-right text-sm not-italic font-normal leading-6 text-[#242424]">
                  یکپارچه سازی، پیاده سازی و ارتقاء رفتار مسئولیت اجتماعی در
                  سراسر سازمان و حفظ ارزش مسئولیتی سازمان نسبت به جامعه و محیط
                  پیرامون خود با انجام فعالیت‌ها خیرخواهانه
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutUsCarousel/>
    </>
  );
}
