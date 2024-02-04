"use client";
import React, { useRef } from "react";
import { Virtual , Pagination } from 'swiper/modules';
import 'swiper/css/virtual';
import style from "./section-comment.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import 'swiper/css/navigation';
export default function CommentSection() {
  const swiperRef = useRef();
  const [status, setStatus] = useState(0);
  return (
    <section className={style.section_comment_box + " section_comment_box"}>

      <Image
      className={style.section_comment_box_back + " section_comment_box_back"}
      id="section_comment_box_back"
   
                src={"/home/comment.svg"}
                width={900}
                height={900}
      />
      {/* <span
        className={style.section_comment_box_back + " section_comment_box_back"}
        id="section_comment_box_back"
      ></span> */}
      <div className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
        <div className={style.section_comment_title}>
          <Image
            alt={"mehr trade"}
            src={"/home/sun.png"}
            width={58}
            height={58}
          />
          <h4>رضایت مشتریان مهر</h4>
        </div>
        <Swiper
          dir= {"rtl"}
          modules={[Virtual, Pagination]}
          // virtual
          // pagination
          initialSlide={5}
          spaceBetween={5}
          autoplay={{ delay: 0 }}
          lazy={"true"} 
          speed={3000}
          // reversedirection
      //     allowTouchMove= {false}
      // allowClick= {true}
      centerInsufficientSlides= {true}
          loop={true}
          centeredSlides={true}
          slidesPerView={4.3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            998: {
              slidesPerView: 3,
            },
            1224: {
              slidesPerView: 4.3,
            },
          }}
          onTransitionEnd={() => {
            setStatus(status + 35);
            document.getElementById(
              "section_comment_box_back"
            ).style.transform = `translate(-50% , -50%) rotate(${status}deg)`;
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                    <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                   <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                    <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                     <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                     <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.comment_card_item + " comment_card_item"}>
              <div
                className={
                  style.comment_card_item_msg + " comment_card_item_msg"
                }
              >
                     <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className={style.comment_card_item_img}>
                {" "}
                <Image
                  alt={"mehr trade"}
                  src={"/home/avatar.jpg"}
                  width={58}
                  height={58}
                />
              </div>
              <div
                className={
                  style.comment_card_item_name + " comment_card_item_name"
                }
              >
                سیدرضا تهرانی
              </div>
              <div
                className={
                  style.comment_card_item_pos + " comment_card_item_pos"
                }
              >
                فروشنده لپ تاپ و موبایل در بازار موبایل
              </div>
            </div>
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
    </section>
  );
}
