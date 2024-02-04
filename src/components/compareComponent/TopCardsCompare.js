"use client";

import React from "react";
import { useState, useEffect } from "react";
import SimpleCardCompare from "./SimpleCardCompare";
export default function TopCardsCompare() {
  const [scrollYNum, setScrollYNum] = useState(0);
  const [topNum, setTopNum] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollYNum(window.scrollY);
      console.log(window.scrollY);
    };
    const d = document.getElementById("controlSimilarity");
    const topPos = d.offsetTop;
    console.log(topPos);
    setTopNum(topPos);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div
    //   className={
    //     // ""
    //     "w-full h-full absolute transition-all duration-500  " +
    //     "" +
    //     ` ${scrollYNum > 220 ? " z-1 " : "   -z-10"}`
    //   } top-[${scrollYNum}px]  ${scrollYNum} 
    // >
      <div
        className={
          "w-full   transition-all duration-100 absolute  top-0  z-40" 
          +
          ` ${
            scrollYNum > 450
              ? ` absolute  z-40 top-[${scrollYNum}px]   `
              : "    -translate-y-[100vh]"
          }`
        }
        style={{ top: `${scrollYNum-topNum-630}px` }}
      >
        <div
          className={
            "  flex flex-row overflow-x-auto  bg-[#E6E6E6] gap-3 p-3 items-stretch  shadow-645 transition-all  " 
            // +
            // ` ${
            //   scrollYNum > 220
            //     ? "translate-y-0 lg:-translate-y-full"
            //     : "   -translate-y-full lg:-translate-y-full"
            // }`
          }
        >
          <SimpleCardCompare />
          <SimpleCardCompare />
          <SimpleCardCompare />
          <SimpleCardCompare />
          <SimpleCardCompare />
        </div>
      </div>
    // </div>
  );
}
