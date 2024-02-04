"use client";
import React, { useState, createContext } from "react";
import ModalImage from "./ModalImage";
export const ModalContext = createContext();
export default function ModalContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalData = (data) => {
    setModalData(data);
  };
  return (
    <ModalContext.Provider
      value={{
        handleModalClose,
        handleModalData,
        handleModalOpen,
        modalOpen,
        modalData,
      }}
    >
      <ModalImage
        handleModalClose={handleModalClose}
        handleModalData={handleModalData}
        handleModalOpen={handleModalOpen}
        modalOpen={modalOpen}
        modalData={modalData}
      />
      {children}
    </ModalContext.Provider>
  );
}
