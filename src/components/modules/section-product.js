"use client";
import React, { useRef } from "react";
import { Virtual } from 'swiper/modules';
import ProductCard from "@/components/modules/card-product";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./section-product.module.css";
import Link from "next/link";
import "swiper/css";
import ArrowLeftIcon from "@/icon/arrow-left";
import MobileIcon from "@/icon/mobile";
import MonitorIcon from "@/icon/monitor";
import 'swiper/css/virtual';
export default function ProductSection({ items ,type , data ,title }) {
 
  const swiperRef = useRef();
  if(data.length > 0 ){
    return (
   
      <section className={style.section_product_box}>
  
        <div className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
          <div className={style.section_product_top}>
            <div className={style.section_product_title}>
            {type == "mobile" ?  <MobileIcon/> :  <MonitorIcon/>}
              <h4>{title}</h4>
            </div>
            <Link className={style.section_product_btn + " hidden md:flex" } href="/">
              مشاهده همه محصولات
              <ArrowLeftIcon />
            </Link>
            <Link className={style.section_product_btn + " flex md:hidden" } href="/">
               همه محصولات
              <ArrowLeftIcon />
            </Link>
           
          </div>
  
    <div className={style.swipperWrap}>
       <Swiper
         dir= {"rtl"}
         modules={[Virtual]}
            initialSlide={4}
            spaceBetween={30}
            virtual
            slidesPerView={items}
            lazy={"true"} 
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.3,
              },
              780: {
                slidesPerView: 1.7,
              },
              1000: {
                slidesPerView: 3.8,
              },
              1248: {
                slidesPerView: 4.25,
              },
              1350: {
                slidesPerView: items,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((item ,index) => (
                <SwiperSlide key={item.id} virtualIndex={index}>
                      <ProductCard detail={item} type={type}/>
                </SwiperSlide>
              ))}
          </Swiper>
          
          <div className={style.swipperAllowBox}>
       
        <button className="swipper-allow swipper-allow-prev" onClick={() => {
       
          swiperRef.current.slidePrev()
        }}>
         
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
  

}
