
import React from "react";
import ReceiveRepresentativeBenefits from "./ReceiveRepresentativeBenefits";
import ReceiveRepresentativePoints from "./ReceiveRepresentativePoints";

export default function Points() {
  return (
    <div
      className={
        "shadow-G1 bg-[#f7f7f7] rounded-3xl flex flex-col md:flex-row self-stretch font-costumFaNum relative overflow-hidden " +
        " h-auto "
      }
    >
    
      <div className="py-3 w-full flex flex-col">
       
        <ReceiveRepresentativeBenefits />
        <div className=" p-3 ">
          <ReceiveRepresentativePoints />
        </div>
      </div>
    </div>
  );
}
