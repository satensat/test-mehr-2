import CloseModal from "@/icon/CloseModal";
import TickCircle from "@/icon2/TickCircle";
import React from "react";

export default function ModalDoneSurvey({ modalOpen, setModalOpen }) {
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-40 bg-[#000000] "
          onClick={handleModalClose}
        ></div>
      )}
      <div
        className={
          "  ease-in-out duration-300  fixed   z-40 inset-x-0  top-0 -translate-y-full w-10/12  md:w-[376px]  border-[#D4F7F4]  border-[3px]   transition-all opacity-0  bg-[#13625C] rounded-3xl  mx-auto my-auto bg-[url('/forms/survey/Artboard-confetti.svg')]  bg-cover  bg-no-repeat " +
          " " +
          `${
            modalOpen
              ? "translate-y-[30vh]  opacity-100 "
              : " pointer-events-none  "
          }`
        }
      >
        <div className="flex flex-col relative items-center justify-center ">
          <button
            className="transition ease-in-out duration-500 group cursor-pointer p-3 top-0 left-0 absolute "
            onClick={handleModalClose}
          >
            <div className="group-hover:scale-105">

            <CloseModal color={"#F7F7F7"} />
            </div>
          </button>
          <div className="p-3">
            <TickCircle width={"80"} height={"80"} color={"#F5A800"} />
          </div>
          <div className=" flex flex-col px-3 pb-3 gap-3">
            <div className="text-[#fffff] leading-6 text-base font-bold text-center cursor-pointer ">
              از شرکت شما در نظرسنجی بینهایت متشکریم
            </div>
            <div className=" text-[#fffff] leading-8 text-base text-center cursor-pointer "> 
              شما مشتری ارزشمند ما هستین، نظرات شما باعث افزایش کیفیت خدمت رسانی
              ما خواهد شد
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
