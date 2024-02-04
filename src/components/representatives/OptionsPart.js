import React from "react";
import Option from "./Option";
import ReceiveRepresentative from "./ReceiveRepresentative";
import ReceiveRepresentativeBenefits from "./ReceiveRepresentativeBenefits";
import ReceiveRepresentativePoints from "./ReceiveRepresentativePoints";
import AgencyReceive from "./AgencyReceive";
import AgencyReceivePoints from "./AgencyReceivePoints";
import AgencyReceiveBenefits from "./AgencyReceiveBenefits";

export default function OptionsPart() {
  return (
    <div className="py-3 flex flex-col gap-6 text-[#f7f7f7]  ">
      <Option csspart={"first"}>
        <ReceiveRepresentative />
        <ReceiveRepresentativePoints />
        <ReceiveRepresentativeBenefits />
      </Option>
      <Option csspart={"second"}>
        <AgencyReceive />
        <AgencyReceivePoints />
        <AgencyReceiveBenefits />
      </Option>
    </div>
  );
}
