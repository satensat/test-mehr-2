"use client";
import React, { useRef } from "react";
import style from "./section-brand.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowLeftIcon from "@/icon/arrow-left";
import { EffectFade ,Pagination } from 'swiper/modules';
export default function BrandSection() {
  const swiperRef = useRef();
  return (
    <section className={style.section_brand_box}>
      <div className="flex flex-row   ">
       
        <div className={style.section_brand_slider_box + " w-75 md:basis-9/12  "} >
          <Swiper
            modules={[EffectFade,Pagination ]}
            spaceBetween={30}
            effect="fade"
            pagination
            slides-per-view={3}
            slidesPerView={1}
           className={style.swipperBrandBox}
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
                alt={"mehr trade brand"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="ml-3"
                src={"/home/slider1.png"}
                width={1220}
                height={524}
                alt={"mehr trade brand"}
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
        <div className="w-25 md:basis-3/12 ">

          <div className={style.section_brand_detail}>
      
<h3 className={style.section_brand_title}>
<span>محصولات پرچمدار </span>
از شرکای تجاری مهر
</h3>
<Link href="">مشاهده محصولات
<ArrowLeftIcon/>
</Link>

<div className={style.section_brands_wrapper}>
     <div className={style.section_brands_list}>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
   </div>
   <div className={style.section_brands_list}>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
      <div className={style.section_brands_list_item}><span><Image  alt={"mehr trade brand"} src="/home/brands.svg" width={130} height={130}/></span></div>
   </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
