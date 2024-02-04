"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import CardImage from "./CardImage";
import IntroCard from "./IntroCard";
import ModalContextProvider from "./ModalContext";

const data = {
  iso: [
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 26000-2010 shiraz.webp",
      content:
        "تاییدیه سیستم عملکرد اجتماعی سازمان همگام با ISO 26000:2010 (شعبه شیراز)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 26000-2010.webp",
      content:
        "تاییدیه سیستم عملکرد اجتماعی سازمان همگام با ISO 26000:2010 (شعبه تهران)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 45001-2018 shiraz.webp",
      content:
        "تاییدیه سیستم مدیریت ایمنی و بهداشت شغلی سازمان همگام  باISO 45001:2018 (شعبه شیراز)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 45001-2018.webp",
      content:
        "تاییدیه سیستم مدیریت ایمنی و بهداشت شغلی سازمان همگام  باISO 45001:2018 (شعبه تهران)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 14001-2015 shiraz.webp",
      content:
        "تاییدیه سیستم مدیریت محیط زیست سازمان همگام با ISO 14001:2015(شعبه شیراز)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 14001-2015.webp",
      content:
        "تاییدیه سیستم مدیریت محیط زیست سازمان همگام با ISO 14001:2015(شعبه تهران)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 10002-2018 shiraz.webp",
      content:
        "تاییدیه سیستم رسیدگی به شکایات و رضایت مشتری سازمان همگام  با ISO 10002:2018 (شعبه شیراز)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/ISO 10002-2018.webp",
      content:
        "تاییدیه سیستم رسیدگی به شکایات و رضایت مشتری سازمان همگام  با ISO 10002:2018 (شعبه تهران)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/گواهی ISO 9001-2015 shiraz.webp",
      content:
        "تاییدیه سیستم مدیریت کیفیت سازمان همگام با ISO 9001:2015 (شعبه شیراز)",
    },
    {
      title: "گالری گواهینامه‌ها",
      image: "/iso-webp/گواهی ISO 9001-2015.webp",
      content:
        "تاییدیه سیستم مدیریت کیفیت سازمان همگام با ISO   9001:2015(شعبه تهران)",
    },
  ],
  awards: [
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image:
        "/awards-webp/1382- 2004 Golden system electronics-exceptional success in business partnership.webp",
      content:
        "تندیس موفقیت چشمگیر در همکاری تجاری سال 2004  شرکت golden sytem electronics",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1388 - 2010 vista Top customer commercial.webp",
      content: "تندیس بهترین مشتری سال  1388 از شرکت vista it distribution",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1389 -2011 Asus Most purchase.webp",
      content: "تندیس بیشترین میزان واردات ایسوس سال 2011 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1390- 2012 قدیمی ترین و اولین توزیع کننده محصولات ایسوس در ایران 2012.webp",
      content:
        "تندیس قدیمی ترین و اولین توزیع کنننده محصولات ایسوس در ایران 2012",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/تندیس پاسداشت از اتحادیه صنف فناوران رایانه تهران 1391.webp",
      content: "تندیس پاسداشت از اتحادیه صنف فناوران رایانه تهران",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1392 - 2014 Asus Best Notebook and tablet supplier.webp",
      content:
        "تندیس بهترین تامین کننده نوت بوک و  تبلت سال 2014 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1392 - 2014 Asus Best Notebook and tablet supplier.webp",
      content:
        "تندیس بهترین تامین کننده نوت بوک های سری N سال 2014 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1393 - 2015 Asus Best Notebook and tablet supplier.webp",
      content:
        "تندیس بهترین وارد کننده تبلت و نوت بوک سری N سال 2015 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1394-2016 Asus certificate of appericiation Best Notebook, Tablet Partner.webp",
      content:
        "تندیس بهترین همکار تجاری نوت بوک و  تبلت   سال 2016 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1395-2017 Asus certificate of appericiation Best Notebook Partner.webp",
      content: "تندیس بهترین شرکت تجاری نوت بوک سری N سال 2017 از شرکت ایسوس",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1398 - 2020گواهینامه استانی رعایت حقوق مصرف کنندگان.webp",
      content:
        "تندیس رعایت حقوق مصرف کنندگان سال ۱۳۹۸ از سازمان صنعت و معدن و تجارت",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1399-2021 گواهینامه استانی رعایت حقوق مصرف کنندگان.webp",
      content:
        "تندیس رعایت حقوق مصرف کنندگان سال ۱۳۹۹ از سازمان صنعت و معدن و تجارت",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/نشان تعهد در مدیریت فناوری و نوآوری  هفتمین جایزه ملی مدیریت فناوری و نوآوری سال 1399.webp",
      content:
        "نشان تعهد در مدیریت فناوری و نوآوری  هفتمین جایزه ملی مدیریت فناوری و نوآوری سال 1399",
    },
    {
      title: "گالری عکس‌جوایز و دستاورد‌ها",
      image: "/awards-webp/1400-2022گواهینامه استانی رعایت حقوق مصرف کنندگان.webp",
      content:
        "تندیس رعایت حقوق مصرف کنندگان سال 1400 از سازمان صنعت و معدن و تجارت",
    },
  ],
};

export default function ImagesSection() {
  const [activeTab, setActiveTab] = useState("certificates");
  const activeTabHandler = (item) => {
    setActiveTab(item);
  };
  return (
    <>
      <ModalContextProvider>
        <IntroCard />

        <div className="py-2 md:py-3 font-costumFaNum">
          <div
            className={
              "px-1 md:px-3 pb-3 flex flex-col  bg-mainGreen1 rounded-3xl pt-0 " +
              styles.container
            }
          >
             <span id="details" className="translate-y-[-30px] md:translate-y-[-50px]" ></span>
            <ul className="flex  justify-center  text-[#E0E7EB] ">
              <li
              onClick={() => activeTabHandler("awards")}
                className={`transition-all duration-500 ease-in-out text-gray list-none md:text-base lg:text-lg w-4/12  md:w-2/12  text-center relative  cursor-pointer    text-lg not-italic  leading-8    before:content-[''] before:absolute before:top-0 before:right-0 before:h-[4px] before:w-full  before:rounded-b-2xl before:bg-[#f5a800] before:transition-all before:duration-500 before:ease-in-out   ${
                  activeTab == "awards"
                    ? " before:translate-x-0 text-[#f5a800]  font-bold"
                    : " before:-translate-x-full"
                }`}
              >
                <div className="py-5">
                  <a className="py-5" href="#awards">
                    جوایز
                  </a>
                </div>
              </li>
              <li
                onClick={() => activeTabHandler("certificates")}
                value={"certificates"}
                className={`text-gray list-none md:text-base lg:text-lg w-4/12 md:w-2/12  text-center relative  cursor-pointer transition-all duration-500 ease-in-out  text-lg not-italic  leading-8 
                ${
                  activeTab == "certificates"
                    ? " text-[#f5a800]  font-bold  "
                    : ""
                }`}
              >
                <div className="py-5">
                  <a className="py-5" href="#certificates">
                    گواهینامه‌ها
                  </a>
                </div>
              </li>
            </ul>
            <div className="w-full gap-3   flex flex-row flex-wrap  justify-center">
              {activeTab === "certificates" &&
                data.iso.map((item) => (
                  <CardImage key={item.content} data={item} />
                ))}
              {activeTab === "awards" &&
                data.awards.map((item) => (
                  <CardImage key={item.content} data={item} />
                ))}
            </div>
          </div>
        </div>
      </ModalContextProvider>
    </>
  );
}
