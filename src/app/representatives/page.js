import React from "react";
import IntroCardRepresentatives from "@/components/representatives/IntroCardRepresentatives";
import OptionsPart from "@/components/representatives/OptionsPart";
import CountryMapPart from "@/components/representatives/CountryMapPart";

export default function page() {
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative px-3 ">
      <IntroCardRepresentatives />
      <OptionsPart/>
      <CountryMapPart/>
    </section>
  );
}
