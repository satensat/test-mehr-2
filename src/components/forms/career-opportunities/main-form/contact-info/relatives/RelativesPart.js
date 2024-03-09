import DangerIcon from "@/icon2/DangerIcon";
import React from "react";
import RelativeList from "./RelationList";
import RelativesInfoForm from "./RelativesInfoForm";

export default function RelativesPart({ formik }) {
  return (
    <div className="flex flex-col rounded-xl pt-1 px-3 pb-3 bg-[#f7f7f7] ">
      <div className="text-[#242424]   text-sm font-bold leading-6 py-1  ">
        مشخصات و نشانی دو نفر از بستگان قابل اعتماد که در صورت نیاز به آنها
        مراجعه شود
      </div>
      <div className="flex flex-col  md:flex-row mt-2  w-full gap-6 items-center">
        <RelativesInfoForm formik={formik} title="اطلاعات فرد 1" checkValueName="first" />
        <RelativesInfoForm formik={formik} title="اطلاعات فرد 2" checkValueName="second"/>
      </div>
    </div>
  );
}
