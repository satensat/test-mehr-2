import CloseModal from "@/icon/CloseModal";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ModalImage({
  handleModalClose,
  handleModalData,
  handleModalOpen,
  modalOpen,
  modalData,
}) {
  return (
    <>
      {modalOpen && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-40 bg-[#000000] "
          onClick={handleModalClose}
        ></div>
      )}
      <div
        id="drawer-navigation-bottom"
        className={
          "  ease-in-out duration-300  fixed   z-40 inset-x-0  top-0 -translate-y-full w-11/12  md:w-8/12  px-3 overflow-y-auto transition-all opacity-0 max-h-[95vh] bg-[#FDFDFD] rounded-3xl  mx-auto   " +
          " " +
          //   `${isModalOpen ? " " : " translate-y-full  "}`
          `${modalOpen ? "translate-y-[20px]  opacity-100 " : "   "}`
        }
      >
        <div className="flex flex-col  ">
          <div className="flex flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] pt-3">
            <div className="w-full flex flex-row  items-center pb-3  ">
              <div className="text-center text-base not-italic font-bold leading-6 text-[#3B3B3B]  ">
                {modalData.title}
              </div>
              <button
                className="transition ease-in-out duration-500 hover:invert hover:brightness-200 cursor-pointer p-2 mr-auto"
                onClick={handleModalClose}
              >
                <CloseModal />
              </button>
            </div>
          </div>
          <div className="p-3 bg-[#F7F7F7] rounded-b-3xl">
            <div className="text-right text-sm not-italic font-bold leading-6 text-[#3B3B3B] ">
              {modalData.content}
            </div>
          </div>
          <div className="p-3">
            <div className="rounded-[8px] h-[624px] relative   ">
              <Image
                src={modalData.image}
                alt={
                  "/awards-webp/1388 - 2010 vista Top customer commercial.webp"
                }
                layout="fill"
                objectFit={"contain"}
                className="rounded-[8px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
