
"use client"


import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/GlobalRedux/Features/counter/counterSlice";


import style from "./gallery-section.module.css"
import Image from 'next/image';
import GalleryModal from './gallery-modal';
import { useSwiper } from 'swiper/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { EffectFade ,FreeMode, Thumbs ,Navigation, Pagination } from 'swiper/modules';




import ReactImageZoom  from 'react-image-zoom';




export default function GalleryProduct({images ,name}) {
  const swiper = useSwiper();
console.log(images)
const [imageColor, setImageColor] = useState(images[0].color.fa_name);
const [imageCount, setImageCount] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  function getSlideIndexByClass(className) {
    var k = 0;
    var index ;
    for (const el of document.querySelectorAll(".sliderwipperBox")) {
      k++
      if (el.classList.contains(className)) {
        
        console.log(k-1)
        index = k-1;
        return index;
      }
      
    }
    
  
   
  }


  
     const dispatch = useDispatch();
  return (
    <>
    
  
     
  
      <div className='flex  rounded-3xl shadow-G1 p-3  '>
   <div className='relative  w-14 h-full hidden md:block md:max-w-[22%]' >

   <Swiper
      dir= {"rtl"}
    onSwiper={setThumbsSwiper}
    // pagination={{
    //     clickable: true,
    //   }}
    
        // centeredSlides={true}
    spaceBetween={16}
    
     loop={true}
    slidesPerView={8}
    // freeMode={true}
    watchSlidesProgress={true}
    modules={[FreeMode, Thumbs]}
    className="mySwiper ThumbsSwiperBox h-full absolute w-full"
    direction={'vertical'}
    >
   
    {
         images.map(item => ( 
          item.images.map(temp =>(
            <SwiperSlide className='rounded-xl p-1 border-stone-300 border-[3px] max-h-[55px]' key={temp.url}>
         
          <Image width={60}   height={60}  priority={true} placeholder="data:image/avatar.jpg" alt={"product"} className='max-h-[60px] object-contain  h-full  m-auto  block' src={temp.url} /> 
        
  
       </SwiperSlide>
          ))
          ))
       }
  </Swiper>
   </div>
   
   
     <div className='w-full md:w-[88%] pr-0 md:pr-3  relative mr-auto'>
     <div>
    <span className='flex justify-between items-center mb-4'>
      <div className='flex items-center'>
        <span className='flex flex-col font-bold text-gray-500' >
          رنگ : 
          <span className='text-gray-700'>
         { imageColor}
          </span>
        </span>
        <div className='flex mx-3'>
      {
       
          images.map(item => ( 
            <span key={item.color.fa_name} style={{backgroundColor: item.color.code}} className="inline-block w-5 h-5  rounded-full m-3 border" i  onClick={() => {
              setImageColor(item.color.fa_name) 
              console.log(getSlideIndexByClass("color"+item.color.en_name))
              swiperRef.current.slideTo(getSlideIndexByClass("color"+item.color.en_name));
             
            }
              
            }></span>
            
            ))
      }
      
        </div>
      </div>
      <GalleryModal images={images} name={name}/>
     
    </span>
   </div>
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
        className="mySwiper2 mainProductGallery"
        pagination={{
            type: 'fraction',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
      >
       {
          
            images.map(item => ( 
             item.images.map((temp ,index) =>(

              <SwiperSlide className={ (index == 0 ? "color"+item.color.en_name: "") + " " + style.mainGalleryItem +  ' rounded-xl sliderwipperBox'} key={temp.url}>
              {/* <ReactImageZoom   width={400} height={250} zoomWidth={500} img={temp.url} /> */}
       <Image width={450}   height={450}  priority={true} placeholder="data:image/avatar.jpg" alt={"product"} className=' block max-h-[450px] w-auto m-auto' src={temp.url} /> 
        
       </SwiperSlide>
             ))
             ))
          
        
       }
       
       
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
    </>
  );
}

