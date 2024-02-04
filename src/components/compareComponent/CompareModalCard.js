import RamIcon from "@/icon/Ram";
import CpuIcon from "@/icon/cpu";
import CameraIcon from "@/icon/camera";
import MaximizeIcon from "@/icon/maximize";
import Image from "next/image";
import React from "react";
import CompareButtonModal from "./CompareButtonModal";

export default function CompareModalCard({detail}) {
  return (
   
      <div className="bg-[#FFF] rounded-2xl  shadow-G1 py-2 w-full flex flex-col  my-3">
        <div className="w-full flex flex-row items-center ">
          <div className="flex flex-col w-[35%] items-center justify-center  ">
            <div className="w-full flex  bg-[url('/compare/Patterns.svg')]  bg-center bg-no-repeat bg-contain p-2 ">
              <div className="  my-2    w-full ">
                <Image
                  src={detail.image.url}
                  alt={detail.names.name}
                  width={300}
                  height={100}
                  className="w-auto  max-h-[100px] m-auto object-cover "
                />
              </div>
            </div>
            <div className="p-2">
              <Image
                width={80}
                height={107}
                alt={detail.brand.slug}
                src={`/brand/${detail.brand.slug}_logo.svg`}
              />
            </div>
          </div>
          <div className="flex flex-col w-[65%] self-stretch h-auto ">          
              <div className="text-xs not-italic font-bold leading-6 text-[#3B3B3B] p-2">
                {detail.names.name}
              </div>
              
              <div className="flex flex-row justify-center mt-auto ">
              {detail.screen_size  ?   <div className="flex flex-col w-12 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
                
                  <div className="pt-1 mx-auto ">
                    <MaximizeIcon />
                  </div>
                  <div className="text-xs not-italic font-normal leading-5 text-[#696969] mx-auto">
                   {detail.screen_size}
                  </div>
                </div> : ""}

                {detail.ram ? <div className="flex flex-col w-12 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
                  <div className="pt-1 mx-auto ">
                    <RamIcon />
                  </div>
                  <div className="text-xs not-italic font-normal leading-5 text-[#696969] mx-auto">
                 { detail.ram}
                  </div>
                </div> : ""}
                
           
                
                {detail.cpu ?  <div className="flex flex-col w-12 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
                  <div className="pt-1 mx-auto ">
                    <CameraIcon />
                  </div>
                  <div className="text-xs not-italic font-normal leading-5 text-[#696969] mx-auto">
                   {detail.camera_quality}
                  </div>
                </div>
           :     ""}
                {detail.cpu ?  <div className="flex flex-col w-12 transition ease-in-out duration-500 hover:scale-105 cursor-pointer">
                  <div className="pt-1 mx-auto ">
                    <CpuIcon />
                  </div>
                  <div className="text-xs not-italic font-normal leading-5 text-[#696969] mx-auto">
                   {detail.cpu}
                  </div>
                </div>
           :     ""}
              </div>
            
            <div className="w-full flex flex-col before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] px-2 ">
              <CompareButtonModal />
            </div>
          </div>
        </div>

    </div>
  );
}
// transition ease-in-out duration-500 hover:scale-105
/// after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] px-2