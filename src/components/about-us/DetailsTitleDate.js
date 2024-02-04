import EllipseIcon from "@/icon/Ellipse";
import React from "react";

export default function DetailsTitleDate({ detailDate }) {

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-3 font-costumFaNum">
      {detailDate.map((item) => 
        <div className="w-full flex flex-col  " key={item.titleDate}>
          <div className="w-full flex flex-row gap-2 px-3 py-1 items-center">
            <div>
              <EllipseIcon />
            </div>
            <div className="text-[#242424] text-right text-base not-italic font-normal leading-8 font-costumFaNum">
              {item.titleDate}
            </div>
          </div>
          <div className="px-3 text-[#525252] text-right text-sm not-italic font-normal leading-6 font-costumFaNum">
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
}
