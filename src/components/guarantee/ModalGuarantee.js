"use client";
import CloseModal from "@/icon/CloseModal";
import InfoCircleIcon from "@/icon2/InfoCircle";
import React from "react";
import { useState } from "react";
import Points from "./Points";

export default function ModalGuarantee() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleModalOpen}
        className="w-fit group transition-all ease-in-out duration-500 flex flex-row items-center  cursor-pointer my-3  px-3 py-1 rounded-xl bg-[#f5a800]  hover:bg-[#fff] text-[#000] "
      >
        <div className="text-center text-sm not-italic font-bold leading-6 ">
          موارد مطالعه
        </div>
        <div className="transition ease-in-out duration-500  group-hover:scale-110   mr-auto pr-1">
          <InfoCircleIcon />
        </div>
      </button>
      {modalOpen && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-40 bg-[#000000] "
          onClick={handleModalClose}
        ></div>
      )}
      <div
        className={
          "  ease-in-out duration-300  fixed   z-40 inset-x-0  top-0 -translate-y-full w-11/12  md:w-8/12  px-3  transition-all opacity-0 max-h-[95vh] bg-[#FDFDFD] rounded-3xl  mx-auto   " +
          " " +
          `${modalOpen ? "translate-y-[20px]  opacity-100 " : "   "}`
        }
      >
        <div className="flex flex-col  ">
          <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] pt-3">
            <div className="w-full flex flex-row  items-center pb-3  ">
              <div className="text-center text-base not-italic font-bold leading-6 text-[#3B3B3B]  ">
                موارد مطالعه
              </div>
              <button
                className="transition ease-in-out duration-500 hover:invert hover:brightness-200 cursor-pointer p-2 mr-auto"
                onClick={handleModalClose}
              >
                <CloseModal />
              </button>
            </div>
          </div>
          <div className="h-[364px] md:h-[628px] pt-3 px-3 overflow-y-auto">
            <Points />
          </div>
          <div className="p-3 flex flex-col items-center before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6]">
            <div className="flex flex-row items-center justify-center p-3 gap-8 ">
              <button
                onClick={handleModalClose}
                className="transition ease-in-out duration-500 group flex flex-row gap-2 justify-center items-center text-[#13625C] border-solid border-[1px] text-sm not-italic font-bold leading-6 border-[#13625C] rounded-xl  hover:text-white  hover:bg-mainGreen1 h-fit   px-3 py-1 "
              >
                بستن
                <div className="transition ease-in-out duration-500   group-hover:brightness-0 group-hover:invert ">
                  <CloseModal width={"16"} height={"16"} color={"#13625C"} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
