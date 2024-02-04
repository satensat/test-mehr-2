"use client";
import React, { useState } from "react";
import styles from "./compareButtonModal.module.css";

export default function CompareButtonModal() {
  const [checkedValue, setCheckedValue] = React.useState(true);

  const handleCheckBox = () => {
    setCheckedValue(!checkedValue);
  };
  const handleCheckChange = () => {
    setCheckedValue(checkedValue);
  };
  return (
    <div className="flex flex-row py-3">
      <div className="ml-2 flex flex-row items-center justify-center md:ml-5">
        <div className={`${styles.container} `} onClick={handleCheckBox}>
          {/* <label > */}
          <input type="checkbox" checked={checkedValue} onChange={handleCheckChange} />
          <div className={styles.checkmark}></div>
          {/* </label> */}
        </div>
      <div className="mr-2 text-sm not-italic font-normal leading-6 text-[#525252]">
        مقایسه
      </div>
      </div>
    </div>
  );
}
