"use client"
import React from "react";
import FavoriteIcon from "@/icon/Favorite";
import Image from "next/image";
import ShareModal from "./ShareModal";
export default function SharePartOfProduct({brand ,en_name ,fa_name }) {

  return (
    <>
      <div className="top-24 sticky w-full flex flex-col rounded-3xl bg-[#FFF] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] px-2 py-1 md:px-0 xl:p-2 ">
        <div className="w-full flex flex-col md:flex-row  bg-white rounded-2xl ">
          <div className="w-full flex flex-row px-1 md:px-0 group md:order-last ">
            <div className="w-full flex flex-row   border-b border-[#E6E6E6]  md:border-b-0 items-center justify-center relative  md:before:content-['']  md:before:h-[80px] md:before:w-[1px]   before:rounded-b-2xl md:before:bg-[#E6E6E6] md:before:ml-auto">
              <div className="flex flex-col px-3 md:px-2 relative  ">
                {console.log(brand)}
               {/* {brand.slug.lenght > 0 ? <Image
                  src={`/brand/${brand.slug}_logo.svg.svg`}
                  width={75.6}
                  height={24}
                  alt={"logo Lenovo"}
                  // layout='fill'
                  // objectFit='contain'
                /> : ""}  */}
              
              </div>
              <div className="flex flex-col px-1 md:px-2 md:mx-auto">
                <div className="flex flex-col  relative  h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
                  <Image
                    src={"/single-product/garantine-logo.webp"}
                    alt={"logo Lenovo"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-row items-center justify-center">
            <div className="w-full flex flex-row  items-center justify-evenly ">
              <div className=" flex flex-row px-3 py-3 items-center justify-evenly md:px-0 ">
                
              <ShareModal en_name={en_name} fa_name={fa_name} />

              </div>
              <div className=" flex flex-row px-3 py-3 items-center justify-center md:px-0 ">
                <button className="transition ease-in-out duration-400 group flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px] text-sm not-italic font-bold leading-6 border-[#13625C] rounded-xl py-1 md:py-2 px-1 md:px-0 xl:px-1 md:text-sm hover:text-white  hover:bg-mainGreen1 ">
                  <div className="px-1 md:pl-0 xl:px-1">مورد علاقه</div>
                  <div className="transition ease-in-out duration-400  group-hover:brightness-0 group-hover:invert ml-1 md:ml-0">
                    <FavoriteIcon fill={"#13625C"} className="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

// filter: brightness(0) invert(1);
