"use client";
import CloseModal from "@/icon/CloseModal";
import CompareIcon from "@/icon/CompareIcon";
import React, { useState, useEffect } from "react";
import CompareModalCard from "./CompareModalCard";
import PlusIcon from "@/icon/PlusIcon";

import { useDispatch, useSelector } from "react-redux";
import { data } from "autoprefixer";

import { useRouter } from "next/navigation";
export default function ModalCompare() {
  const router = useRouter();

  // Redox values ​​for the number and IDs of the selected products ///////////////
  
  const compareValue = useSelector((state) => state.counter.value);
  const compareCount = useSelector((state) => state.counter.count);

  // Fetch data of selected products ///////////////
  const [dataDetail, setDataDetail] = useState([]);
  useEffect(() => {
    if (!compareCount) {
      setDataDetail([]);
    } else {
      async function fetchData() {
        try {
          const myDataQ = await fetch(
            `http://192.168.10.195:8090/v1/api/products/compare/?id_list=${compareValue}`,
            { cache: "no-store" }
          );
          console.log(myDataQ);

          if (myDataQ.status == 200) {
            const test = await myDataQ.json();
            setDataDetail(test);
            console.log(test);
          }
          // return  { detail : await myDataQ.json() , status :   myDataQ.status };
        } catch {
          return "";
        }
      }

      fetchData();
    }
  }, [compareCount,compareValue]);

  // Drag Event action function ///////////////
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrower = () => {
    setDrawerOpen(true);
  };
  const closeDrower = () => {
    setDrawerOpen(false);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState(0);

  const handlePointerDown = (e) => {
    console.log("drag");
    setIsDragging(true);
    setSidebarPosition(e.clientY);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const deltaY = e.clientY - sidebarPosition;
      console.log(deltaY);
      if (deltaY > 5) {
        closeDrower();
        setIsDragging(false);
      }
    }
  };
  const handlePointerUp = () => {
    setIsDragging(false);
  };
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setSidebarPosition(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaY = e.touches[0].clientY - sidebarPosition;
      if (deltaY > 22) {
        closeDrower();
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
 
      <div className="p-8 fixed bottom-0 left-0 z-30">
        <button
          className="group relative bg-[#13625C] py-4 pl-4 pr-5 rounded-2xl text-[#fff] transition ease-in-out duration-500 hover:bg-mainYellow hover:text-[#000] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] "
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={openDrower}
        >
          <div className="flex flex-row justify-between items-center ">
            <div className="text-sm not-italic font-bold leading-4">مقایسه</div>
            <div className="mr-2 flex flex-row items-center justify-center  cursor-pointer transition ease-in-out duration-500  group-hover:brightness-200 group-hover:invert ">
              <CompareIcon color={"white"} />
            </div>
            <div className="bg-[#B71A34] text-[#fff] absolute -top-2 -left-2 px-2 font-costumFaNum text-center text-base not-italic font-normal leading-6 lining-nums tabular-nums rounded-full">
              {compareCount}
            </div>
          </div>
        </button>
      </div>
      {isDrawerOpen && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-40 bg-[#000000] "
          onClick={closeDrower}
        ></div>
      )}
      <div
        id="drawer-navigation-bottom"
        className={
          "  ease-in-out duration-500  fixed bottom-0 left-0 z-40 lg:top-0  lg:w-[392px] w-screen max-w-[984px] h-[92%] lg:h-screen px-4 pt-4 lg:overflow-y-auto transition-transform  bg-[#FDFDFD] lg:bg-[#E6E6E6] rounded-t-3xl lg:rounded-r-3xl lg:rounded-l-none overflow-hidden lg:p-0 " +
          " " +
          `${
            isDrawerOpen
              ? " "
              : " translate-y-full  lg:-translate-x-full lg:translate-y-0"
          }`
        }
      >
        <div className="w-full cursor-pointer lg:hidden ">
          <div className="relative mx-auto w-[32px] ">
            <div
              className="absolute -top-2 left-0 w-[32px] h-[32px] pt-2"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <span className="w-[32px] h-[4px] mx-auto  bg-[#79747E]  rounded-full block"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between  ">
          <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCC] px-3 pt-3">
            <div className="w-full flex flex-row  items-center pb-3  ">
              <button
                className="transition ease-in-out duration-500 hover:invert hover:brightness-200 cursor-pointer p-2"
                onClick={closeDrower}
              >
                <CloseModal />
              </button>
              <div className="text-center text-base not-italic font-bold leading-6 text-[#3B3B3B] ">
                مقایسه محصولات
              </div>
              <div className=" mr-auto">
                <button className="lg:hidden text-center text-sm not-italic font-bold leading-6 rounded-xl text-mainGreen1  px-3 py-1 transition ease-in-out duration-500  hover:text-white  hover:bg-mainGreen1 ">
                  پاک کردن همه
                </button>
                <button className="hidden lg:block text-center text-sm not-italic font-bold leading-6 rounded-xl text-mainGreen1  px-3 py-1 transition ease-in-out duration-500  hover:text-white  hover:bg-mainGreen1 ">
                  خالی کردن لیست
                </button>
              </div>
            </div>
          </div>
          <div className="w-full overflow-y-auto  h-[70vh] lg:h-auto px-3 ">
            <button
              onClick={() => router.push("/products")}
              className="group transition ease-in-out duration-500  border-dashed border-[3px] border-[#13625C]  rounded-2xl flex flex-row justify-center items-center cursor-pointer hover:scale-105 mx-auto self-center  my-3   py-2   w-full "
            >
              <div className="text-base not-italic font-normal leading-8 text-mainGreen1 ml-2 ">
                اضافه کردن
              </div>
              <div className="transition ease-in-out duration-500 ">
                <PlusIcon color={"#13625C"} />
              </div>
            </button>

            {dataDetail.length > 0
              ? dataDetail.map((item, index) => (
                  <CompareModalCard detail={item} key={index} />
                ))
              : ""}
          </div>
          <div className="flex flex-col before:content-['']   before:h-[1px] before:w-full   before:bg-[#CCC] p-3 ">
            <div className="w-full flex flex-row  items-center mt-3  justify-center  p-3">
              <button
                onClick={() => router.push("/compare")}
                className="text-center text-sm not-italic font-bold leading-6 bg-mainGreen1 rounded-xl px-3 py-1 text-[#FFF] transition ease-in-out duration-500 hover:bg-mainYellow hover:text-[#000] ml-3"
              >
                <div className="text-sm not-italic font-bold leading-6 ">
                  شروع مقایسه
                </div>
              </button>
              <button
                className="text-center text-sm not-italic font-bold leading-6 text-mainGreen1 rounded-xl px-6 py-1 transition ease-in-out duration-500  hover:text-white bg-white  hover:bg-mainGreen1 shadow-G1 mr-3"
                onClick={closeDrower}
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
