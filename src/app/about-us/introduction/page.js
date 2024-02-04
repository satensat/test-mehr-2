import IntroCard from "@/components/about-us-introduction/IntroCard";
import MoreDetailIntroduction from "@/components/about-us-introduction/MoreDetailIntroduction";
import React from "react";

export default function AboutUsIntroductionPage() {
  return (
    <section className="w-full flex flex-col px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
      <IntroCard/>
      <MoreDetailIntroduction/>
    </section>
  );
}
