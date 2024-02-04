"use client";
import React, { useContext } from "react";
import ZoomIcon from "@/icon/ZoomIcon";
import { ModalContext } from "./ModalContext";

export default function ModalOpenZoomButton({ data }) {
  const {
    handleModalClose,
    handleModalData,
    handleModalOpen,
    modalOpen,
    modalData,
  } = useContext(ModalContext);
  const handleClickOpenModal = () => {
    handleModalOpen();
    handleModalData(data)
  };
  return (
    <div className="absolute top-0 left-0 p-2">

    <button
      className=" p-3 bg-[#FFF] rounded-full transition-all duration-300 hover:scale-110"
      onClick={handleClickOpenModal}
    >
      <ZoomIcon />
    </button>
    </div>
  );
}
