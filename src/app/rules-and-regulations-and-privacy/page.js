import React from "react";
import IntroPartCareer from "@/components/rules-and-regulations-and-privacy/IntroPartCareer";
import PointsPart from "@/components/rules-and-regulations-and-privacy/PointsPart";

export default function page() {
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative px-3 ">
      <IntroPartCareer />
      <PointsPart/>
    </section>
  );
}
