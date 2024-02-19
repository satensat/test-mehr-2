import React from "react";
import BreadcrumbList from "@/components/global/breadcrumb";
import SurveyHeaderPage from "@/components/survey/survey-header";
import SurveyFormPage from "@/components/survey/survey-form";
export default function SurveyPage() {
    const breadcrumbContent = [
        {name : "خانه" , url :"/"},
        {name : "نظر سنجی" , url :""}
        ]
  return (
    <section className="w-full flex flex-col  lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative  ">
        <BreadcrumbList data={breadcrumbContent} inquiry={false}/>
        <SurveyHeaderPage/>
        <SurveyFormPage/>
    </section>
  );
}