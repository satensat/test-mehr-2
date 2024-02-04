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
    // <div className="contents">
// {/* <div className="absolute w-full"> */}
    <div
      className={
        "w-full  transition-all duration-100  " 
        +
        ` ${scrollYNum > 350 ? `sticky   top-0 z-50 inset-x-0  block translate-y-0 ` : " hidden   top-0 z-50 inset-x-0 -translate-y-[100vh] "}`
      }
    >
      <div
        className={
          "  flex flex-row overflow-x-auto  bg-[#E6E6E6] gap-3 p-3 items-stretch  shadow-645 transition-all [&>*:nth-child(1)]:block [&>*:nth-child(2)]:block  md:[&>*:nth-child(n)]:block rounded-3xl "
        }
      >
        <SimpleCardCompare />
        <SimpleCardCompare />
        <SimpleCardCompare />
        <SimpleCardCompare />
      </div>
    </div>
//  {/* </div> */}
  );
}
