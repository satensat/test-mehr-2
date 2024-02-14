import React from "react";

export default async function DocumentsInfo({ mainData }) {


  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">
          اظهارنامه مالیات بر ارزش افزوده
        </div>
        {mainData?.documents?.tax_statement instanceof Array && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            {mainData?.documents?.tax_statement[0].name.substring(0, 24) +
              "..."}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">
          گواهینامه شورای انفورماتیک
        </div>
        {mainData?.documents?.informathic_certificate instanceof Array && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            {mainData?.documents?.informathic_certificate[0].name.substring(
              0,
              24
            ) + "..."}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">تصاویر محل کار</div>
        {mainData?.workplace_images instanceof Array &&
          mainData.workplace_images.map((item, index) => {
            return (
              <div
                key={item.name + "--" + item.index}
                className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5"
              >
                {item.name.substring(0, 24) + "..."}
              </div>
            );
          })}
      </div>
    </div>
  );
}
