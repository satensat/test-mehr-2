
"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import CloseIcon from "@/icon/close";

import style from "./gallery-section.module.css"
import ZoomIcon from '@/icon/zoom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/grid';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import {Grid,  EffectFade ,FreeMode, Thumbs ,Navigation, Pagination, Scrollbar, Mousewheel  } from 'swiper/modules';
export default function GalleryModal({images , name}) {
     // ++++
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  const [status, setStatus] = useState(false);
  return (
 <>

<span className="mr-2 border-stone-300 md:border-r pr-4 py-2" onClick={()=> setStatus(true)}>
       <ZoomIcon/>
       </span>
 <div className={!status ? "hidden " : "fixed " + " inset-x-0 inset-y-0 bg-slate-900/30 z-[100] p-3 overflow-auto" }>
  <div className="bg-lightWhiteSmoke  max-w-[1300px]  m-auto rounded-3xl p-3 my-4">
  <div className='flex justify-between pt-2 pb-3'>
    <span className='text-base font-bold'>
    گالری عکس‌های محصول
    </span>
    <button className="bg-white mr-3   rounded-xl text-mainGreen1" onClick={()=> setStatus(false)}>
      <CloseIcon/>
    </button>
  </div>
  <div className="w-full  px-3 py-3 rounded-b-2xl bg-lightGray leading-6 text-sm ">
    <div className="font-bold text-[#3B3B3B] cursor-pointer font-costumFaNum">  {name.fa_name} </div>
    <div className=" text-[#525252] cursor-pointer">{name.name} </div>
    </div>
  <div className='flex  rounded-3xl p-3 mb-6 justify-center '>
   <div className='relative w-14  md:w-[30%] ' >

   <Swiper
      dir= {"rtl"}
    onSwiper={setThumbsSwiper}
    
        direction={'vertical'}
        grid={{
            rows: 3,
          }}
          slidesPerView={5}
        freeMode={true}
       
        mousewheel={true}
        modules={[Grid, FreeMode]}
       
        className="mySwiper ThumbsSwiperBox h-full absolute w-full"
   
  >
 
    
           {
         images.map(item => ( 
          item.images.map(temp =>(
            <SwiperSlide className='rounded-xl p-2 border-stone-300 border-[3px] max-w-28' >
         
         <Image width={100}   height={100}  priority={true} placeholder="data:image/avatar.jpg" alt={"product"}  src={temp.url}  className='object-contain w-full h-full' /> 
        
  
       </SwiperSlide>
          ))
          ))
       }
  </Swiper>
   </div>
   
   
     <div className='w-full md:w-[45%] pr-3 md:pr-4 relative '>
   
     <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
        autoplay={{ delay: 0 }}
        lazy={"true"} 
        speed={3000}
        dir= {"rtl"}
        // loop={true}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade,FreeMode,Navigation, Thumbs,Pagination]}
        effect={'fade'}
        className="mySwiper2 mainProductModalGallery"
        pagination={{
            type: 'fraction',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
      >
         {
         images.map(item => ( 
          item.images.map(temp =>(
            <SwiperSlide className='rounded-xl p-2' >
         
         <Image width={550}   height={550}  priority={true} className='max-h-[550px]  w-auto m-auto ' placeholder="data:image/avatar.jpg" alt={"product"}  src={temp.url} /> 
        
  
       </SwiperSlide>
          ))
          ))
       }
      
     
      </Swiper>
      <div className={style.swipperAllowBox + " pb-3"}>
     
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

  </div>
  
 </div>
 </>
    
  );
}
