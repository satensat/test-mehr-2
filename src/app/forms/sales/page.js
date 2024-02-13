import React from "react";
import SalesFormHeader from "@/components/sales-form/SalesFormHeader";
import ContentFormSales from "@/components/sales-form/ContentFormSales";

export default function SalesFormPage() {
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative px-3 ">
      <SalesFormHeader />
    <ContentFormSales/>
    </section>
  );
}