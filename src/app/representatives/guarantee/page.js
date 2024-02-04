import FormHeader from "@/components/guarantee/FormHeader";
import FormContent from "@/components/guarantee/FormContent";
import React from "react";

export default function FormPage() {
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative px-3 ">
      <FormHeader />
      <FormContent />
    </section>
  );
}
