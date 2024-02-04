"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./carousel.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import ArrowLeftCarouselIcon from "@/icon/ArrowLeftCarousel";
import ArrowRightCarouselIcon from "@/icon/ArrowRightCarousel";
import ArrowOpinion from "@/icon/ArrowOpinion";
import DetailsTitleDate from "./DetailsTitleDate";
import DetailsCard from "./DetailsCard";

const data = {
  page1: {
    detailDate: [
      { titleDate: "1375", content: "؟" },
      { titleDate: "1376", content: "؟" },
      { titleDate: "1377", content: "؟" },
      { titleDate: "1378", content: "؟" },
      { titleDate: "1379", content: "؟" },
      { titleDate: "1380", content: "؟" },
    ],
    detailCard: {
      title: "تاسیس شعبه شیراز...",
      content: "شروع ماجرای مهرسرمستان از تاسیس شعبه شیراز شرکت شروع شد...",
      image: "/about-us/carousel/store-page-1.webp",
      imageText: "اولین مغازه رسمی مهر سرمیتان در شهر شیراز",
      objectFit: "cover",
    },
  },
  page2: {
    detailDate: [
      { titleDate: "1381", content: "؟" },
      { titleDate: "1382", content: "" },
      { titleDate: "1383", content: "؟" },
      { titleDate: "1384", content: "؟" },
      { titleDate: "1385", content: "؟" },
    ],
    detailCard: {
      title: "تاسیس شعبه تهران...",
      content:
        "در سال 1382 با تلاش و پیگیری‌های تیم کوچک مهر سرمستان موفق شدیم اولین شعبه رسمی خود را در شهر تهران تاسیس کنیم و خود را به عنوان یکی از بازیگران مقتدر این صنعت مطرح کنیم.",
      image: "/about-us/carousel/office-buildings-card-mehr-2.webp",
      imageText: "اولین شعبه مهرسرمستان در تهران",
      objectFit: "contain",
    },
  },
  page3: {
    detailDate: [
      { titleDate: "1386", content: "؟" },
      { titleDate: "1387", content: "؟" },
      {
        titleDate: "1388",
        content:
          "دریافت تندیس بهترین مشتری سال 1388 از شرکت vista it distribution",
      },
      {
        titleDate: "1389",
        content:
          "دریافت تندیس بیشترین میزان واردات ایسوس سال 2011 از شرکت ایسوس",
      },
      {
        titleDate: "1390",
        content:
          "دریافت تندیس قدیمی ترین و اولین توزیع کننده محصولات ایسوس در ایران 2012",
      },
    ],
    detailCard: {
      title: "آغاز همکاری رسمی با شرکت های معتبر",
      content:
        "مهر با آغاز همکاری رسمی با شرکت های معتبر توانست به عنوان یکی از همکاران رسمی شرکت ایسوس در ایران تبدیل شود.",
      image: "/about-us/carousel/asus-statue-page-3.webp",
      imageText: "تندیس تقدیر از مهرسرمستان از طرف شرکت ایسوس ",
      objectFit: "contain",
    },
  },
  page4: {
    detailDate: [
      { titleDate: "1391", content: "؟" },
      {
        titleDate: "1392",
        content: `دریافت تندیس بهترین تامین کننده نوت بوک و تبلت سال 2014 از شرکت ایسوس

      دریافت تندیس بهترین تامین کننده نوت بوک‌های سری N سال 2014 از شرکت ایسوس`,
      },
      {
        titleDate: "1393",
        content:
          "دریافت تندیس بهترین تامین کننده تبلت و نوت بوک سری N سال 2015 از شرکت ایسوس",
      },
      {
        titleDate: "1394",
        content: `دریافت تندیس بهترین تامین کننده نوت بوک و تبلت سال 2016 از شرکت ایسوس

      دریافت تندیس بهترین همکار تجاری نوت بوک و تبلت سال 2016از شرکت ایسوس`,
      },
      {
        titleDate: "1395",
        content:
          "دریافت تندیس بهترین همکار تجاری نوت بوک سری N سال 2017 از شرکت ایسوس",
      },
    ],
    detailCard: {
      title: "همکاری‌های معتبر...",
      content:
        "مهر با ایجاد همکاری‌ای قوی و باثبات با شرکت معتبر ایسوس، برای سالیان متمادی موفق به دریافت تندیس های بهترین همکار و تامین کننده این شرکت شد و به عنوان یکی از موفق‌ترین همکارهای این شرکت شناخته شد.",
        image: "/about-us/carousel/asus-statue-page-4.webp",
      imageText: "تندیس های تقدیر از مهرسرمستان از طرف شرکت ایسوس ",
      objectFit: "contain",
    },
  },
  page5: {
    detailDate: [
      { titleDate: "1396", content: "؟" },
      { titleDate: "1397", content: "؟" },
      {
        titleDate: "1398",
        content:
          "دریافت تندیس رعایت حقوق مصرف کنندگان سال 1398 از سازمان صنعت و معدن و تجارت",
      },
      {
        titleDate: "1399",
        content: `دریافت نشان تعهد در مدیریت فناوری و نوآوری  هفتمین جایزه ملی مدیریت فناوری و نوآوری سال 1399

      دریافت تندیس رعایت حقوق مصرف کنندگان سال ۱۳۹۹ از سازمان صنعت و معدن و تجارت`,
      },
      {
        titleDate: "1400",
        content:
          "دریافت تندیس رعایت حقوق مصرف کنندگان سال 1400 از سازمان صنعت و معدن و تجارت",
      },
    ],
    detailCard: {
      title: "تندیس‌ها و تقدیرنامه‌ها...",
      content: `مهر با رعایت استاندارد های خدمت رسانی موفق شد در بازه زمانی 1396 تا 1400 سه تندیس رعایت حقوق مصرف کنندگان را از سازمان صنعت و معدن و تجارت دریافت کند.
      همینطور با شرکت در هفتمین جایزه ملی مدیریت فناوری و نوآوری موفق به دریافت نشان تعهد در مدیریت فناوری و نوآوری شد.`,
      image: "/about-us/carousel/carousel-page-5.webp",
      imageText: "مراسم برگزاری تقدیر از شرکت های تجاری و خدماتی",
      objectFit: "cover",
    },
  },
  page6: {
    detailDate: [
      {
        titleDate: "1401",
        content: `دریافت استاندارد های جهانی ISO در سیستم مدیریت کیفیت سازمان،
      سیستم رسیدگی به شکایات و رضایت مشتری سازمان،
      سیستم مدیریت محیط زیست سازمان،
      سیستم مدیریت ایمنی و بهداشت شغلی سازمان،
      سیستم عملکرد اجتماعی سازمان. `,
      },
      { titleDate: "1402", content: "تاسیس دو شعبه جدید در مشهد و اصفهان" },
      {
        titleDate: "1403",
        content:
          "در سال 1403 مهر قصد دارد با تاسیس دو شعبه جدید در اهواز و تبریز به گسترش شبکه خدمات رسانی خود اقدام نماید.",
      },
    ],
    detailCard: {
      title: "دریافت ISO و گسترش شبکه خدمت‌رسانی...",
      content: `مهر با رعایت استاندارد های جهانی ISO موفق به دریافت معتبرترین مدارک این سازمان برای دو شعبه خود در تهران و شیراز شد؛ رعایت این استاندارد ها به بهبود ارائه خدمات منجر میشود.
      همینطور با تاسیس دو شعبه اصلی در مشهد و اصفهان موفق به گسترش شبکه خدمت رسانی شدیم. `,
      image: "/about-us/carousel/certificate-page-6.webp",
      imageText:"تاییدیه سیستم رسیدگی به شکایات و رضایت مشتری سازمان همگام  با ISO 10002:2018 شعبه تهران",
      objectFit: "contain",
    },
  },
};

export default function AboutUsCarousel() {
  const swiperRef = useRef();
  const timeLineRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [swiperTimeLine, setSwiperTimeLine] = useState(null);
  const [prevButtonDisable, setPrevButtonDisable] = useState(true);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);

  // const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(5);
    }
    if (timeLineRef.current && timeLineRef.current.swiper) {
      timeLineRef.current.swiper.slideTo(5);
    }
  }, []);
  const disableChange = (swiper) => {
    setPrevButtonDisable(swiper.isBeginning);
    console.log(swiper.isBeginning);
    console.log(swiper.isEnd);
    setNextButtonDisable(swiper.isEnd);
  };

  const changeActiveIndex = (index) => {
    if (timeLineRef.current && timeLineRef.current.swiper) {
      timeLineRef.current.swiper.slideTo(index);
    }
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <div className="py-3">
      <div className="shadow-G1 rounded-3xl ">

     
      <div className="w-full p-3 flex flex-col rounded-t-3xl bg-mainGreen1 gap-3 ">
        <div className="text-lg not-italic font-bold leading-8 text-[#F7F7F7]">
          تاریخچه شرکت
        </div>
        <div className="text-sm not-italic font-normal leading-6 text-[#CCC]">
          داستان مهرسرمستان از شروع تا به امروز
        </div>
      </div>
      <div className="px-3 bg-[#F7F7F7] flex flex-row justify-between">
        <div className="py-2 ">
          <button
            disabled={prevButtonDisable ? true : false}
            className={
              "group py-2 pr-[6px] pl-[10px] bg-[#E6E6E6] rounded-2xl transition duration-500 ease-in-out  " +
              `${
                prevButtonDisable
                  ? " opacity-50 "
                  : " hover:bg-mainYellow opacity-100"
              }`
            }
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <div
              className={
                "brightness-150 invert transition duration-500 ease-in-out  " +
                `${
                  prevButtonDisable
                    ? "opacity-50 "
                    : " group-hover:brightness-0 group-hover:invert-0 opacity-100"
                }`
              }
            >
              <ArrowRightCarouselIcon />
            </div>
          </button>
        </div>

        <div className="w-6/12 md:w-10/12 lg:w-11/12  relative about-us-timeLine">
          <Swiper
            ref={timeLineRef}
            slidesPerView={5}
            spaceBetween={3}
            speed={1000}
            // initialSlide={5}
            centeredSlides={true}
            className="about-us-timeLine"
            onSlideChange={(swiper) => {
              setSwiperTimeLine(swiper);
              changeActiveIndex(swiper.activeIndex);
              disableChange(swiper);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween:2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween:2,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween:1,
              },
            }}
          >
            <SwiperSlide onClick={() => changeActiveIndex(0)}>
              <div className="transition-all duration-150 ease-in-out">1375 تا 1380</div>
            </SwiperSlide>
            <SwiperSlide onClick={() => changeActiveIndex(1)}>
              <div className="transition-all duration-150 ease-in-out">1381 تا 1385</div>
            </SwiperSlide>
            <SwiperSlide onClick={() => changeActiveIndex(2)}>
              <div className="transition-all duration-150 ease-in-out">1386 تا 1390</div>
            </SwiperSlide>
            <SwiperSlide onClick={() => changeActiveIndex(3)}>
              <div className="transition-all duration-150 ease-in-out">1391 تا 1395</div>
            </SwiperSlide>
            <SwiperSlide onClick={() => changeActiveIndex(4)}>
              <div className="transition-all duration-150 ease-in-out">1396 تا 1400</div>
            </SwiperSlide>
            <SwiperSlide onClick={() => changeActiveIndex(5)}>
              <div className="transition-all duration-150 ease-in-out">1400 تا امروز</div>
            </SwiperSlide>
          </Swiper>
          <div className="rotate-90 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <ArrowOpinion />
          </div>
        </div>
        <div className="py-2 ">
          <button
            disabled={nextButtonDisable ? true : false}
            className={
              "group py-2 pl-[6px] pr-[10px] bg-[#E6E6E6] rounded-2xl transition duration-500 ease-in-out  " +
              `${
                nextButtonDisable
                  ? " opacity-50 "
                  : " hover:bg-mainYellow opacity-100"
              }`
            }
            onClick={() => {
              swiper.slideNext();
              // console.log(swiper.isBeginning);
            }}
          >
            <div
              className={
                "brightness-150 invert transition duration-500 ease-in-out  " +
                `${
                  nextButtonDisable
                    ? "opacity-50 "
                    : " group-hover:brightness-0 group-hover:invert-0 opacity-100"
                }`
              }
            >
              <ArrowLeftCarouselIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="about-us-carousel w-full">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          autoHeight={true}
          slidesPerView={1}
          speed={1000}
          // initialSlide={5}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={(swiper) => {
            setSwiper(swiper);
            changeActiveIndex(swiper.activeIndex);
            disableChange(swiper);
          }}
        >
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate detailDate={data.page1.detailDate}/>
              <DetailsCard data={data.page1.detailCard}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate detailDate={data.page2.detailDate} />
              <DetailsCard data={data.page2.detailCard}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate detailDate={data.page3.detailDate} />
              <DetailsCard  data={data.page3.detailCard} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate detailDate={data.page4.detailDate} />
              <DetailsCard data={data.page4.detailCard} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate detailDate={data.page5.detailDate} />
              <DetailsCard data={data.page5.detailCard} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  flex flex-col md:flex-row gap-3 py-3">
              <DetailsTitleDate   detailDate={data.page6.detailDate} />
              <DetailsCard data={data.page6.detailCard} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  );
}
