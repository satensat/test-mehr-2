"use client";
import style from "./section-hero.module.css";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import ArrowLeftIcon from "@/icon/arrow-left";
import { Navigation ,Autoplay } from "swiper/modules";
import VerifyIcon from "@/icon/verify";
import ShopIcon from "@/icon/shop";
import BuildingIcon from "@/icon/building";
import { Pagination } from 'swiper/modules';


export default function HeroSection() {

  const swiperRef = useRef();
 
  const mouseEnter = () => {
if(document.getElementById("section_hero_box").offsetWidth > 998){
    document.getElementById("section_hero_right").classList.add("type2");
    document.getElementById("section_hero_left").classList.add("type2") 
    const seiperHeight = document.getElementById("swipperWrap").offsetHeight
    const seiperWidth = document.getElementById("section_hero_box").offsetWidth
    document.getElementById("section_hero_right").style.height = seiperHeight+"px"; 
   document.getElementById("section_hero_box").style.height = seiperHeight+"px"; 
  //  document.getElementById("swipperWrap").style.width = (seiperWidth*75/100)+"px"; 
    const nodeList = document.querySelectorAll("#swipperWrap img");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.height = seiperHeight+"px"; 
      // nodeList[i].style.width = (seiperWidth*75/100)+"px"; 
    }
  }
}

const mouseLeave= () => {
  if(document.getElementById("section_hero_box").offsetWidth > 998){
  document.getElementById("section_hero_right").classList.remove("type2")
  document.getElementById("section_hero_left").classList.remove("type2") 
  // const seiperWidth = document.getElementById("section_hero_box").offsetWidth
  // document.getElementById("swipperWrap").style.width = seiperWidth+"px"; 
    const nodeList = document.querySelectorAll("#swipperWrap img");
    for (let i = 0; i < nodeList.length; i++) {
      // nodeList[i].style.width = seiperWidth+"px"; 
    }
  }
}
  return (
    <section id="section_hero_box" className={style.section_hero_box} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    <div className="flex justify-end flex-row flex-wrap md:flex-nowrap"  >
      <div id="section_hero_right" className={style.section_hero_right } >
        <div className={style.section_hero_right_detail}>
        <Image
              className={style.section_hero_right_vector}
              src={"/home/benefit.svg"}
              width={156}
              height={162}
              alt={"mehr trade"}
            />
       
        <h1  className={style.section_hero_title} >
          <span className={style.section_hero_title_sec1} >فروش عمده لپ‌تاپ و موبایل</span>
          <span className={style.section_hero_title_sec2}>     همراه با <span>گارانتی مهر</span></span>
        </h1>
        <ul className={style.section_hero_detail_list}>
          <li className={style.section_hero_detail_item}>
            <VerifyIcon/>
            <span className={style.section_hero_detail_txt}> 
              <span>+25</span>
            سال سابقه
            </span>
          </li>
          <li className={style.section_hero_detail_item}>
          <BuildingIcon/>
            <span className={style.section_hero_detail_txt}>
            <span>+4</span>
            شعبه
            </span>
          </li>
          <li className={style.section_hero_detail_item}>
          <ShopIcon/>
            <span className={style.section_hero_detail_txt}>
            <span>+250</span>
            نمایندگی
            </span>
          </li>
        </ul>
        <Link className={style.section_hero_title_btn1} href="">خدمات گارانتی 
        <ArrowLeftIcon/>
        </Link>
        <Link  className={style.section_hero_title_btn2} href="">مشاهده محصولات</Link>
        </div>
      </div>
      <div id="section_hero_left" className={ style.section_hero_slider_box + "   section_hero_left  "}>
<Swiper
      
          modules={[Pagination ]}
          pagination

          spaceBetween={0}
         id="swipperWrap"
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <Image
              className="ml-3"
              src={"/home/slider1.png"}
              width={1220}
              height={524}
              alt={"mehr trade"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="ml-3"
              src={"/home/slider1.png"}
              width={1220}
              height={524}
              alt={"mehr trade"}
            />
          </SwiperSlide>
        </Swiper>
        <div className={style.swipperAllowBox}>
     
     <button className="swipper-allow swipper-allow-prev" onClick={() => {swiperRef.current.slidePrev()}}>

</button>
<button className="swipper-allow swipper-allow-next" onClick={() => {
swiperRef.current.slideNext()
}
}>

</button>
</div>
</div>
    </div>
       
  
    </section>

  );
}
