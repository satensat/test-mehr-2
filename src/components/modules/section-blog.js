"use client";
import BlogCard from "./card-blog";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./section-blog.module.css";
import { Virtual } from 'swiper/modules';
import Link from "next/link";
import "swiper/css";
import 'swiper/css/virtual';
import "swiper/css/navigation";
import React, { useRef } from "react";
import BlogIcon from "@/icon/blog";
import ArrowLeftIcon from "@/icon/arrow-left";
export default function BlogSection() {
  const swiperRef = useRef();
  return (
    <section className={style.section_blog_box}>
      <div className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
        <div className={style.section_blog_top}>
          <div className={style.section_blog_title}>
          <BlogIcon/>
            <h4> مجله مهر</h4>
          </div>
          <Link href="/" >
            مشاهده همه مقالات
            <ArrowLeftIcon />
          </Link>
        </div>
        <div className={style.swipperWrap}>
      
        <Swiper
          dir= {"rtl"}
          
          speed={1500}
          initialSlide={5}
          spaceBetween={24}
          slidesPerView={4}
          modules={[Virtual]}
          virtual
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2.1,
            },
            780: {
              slidesPerView: 2.7,
            },
            1000: {
              slidesPerView: 3.8,
            },
            1300: {
              slidesPerView: 4.25,
            },
            1500: {
              slidesPerView: 4.5,
            },
          }}
       
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          
        >
       
          <SwiperSlide>
            {" "}
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard />
          </SwiperSlide>
          
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
