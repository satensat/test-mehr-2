import React from "react";
import IntroPartCareer from "@/components/forms/career-opportunities/IntroPartCareer";
import FormContainer from "@/components/forms/career-opportunities/FormContainer";

export default function SalesFormPage() {
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative px-3 ">
      <IntroPartCareer />
    <FormContainer/>
    </section>
  );
}