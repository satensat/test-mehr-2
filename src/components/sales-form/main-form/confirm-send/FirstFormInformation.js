import React from "react";

export default function FirstFormInformation({ mainData }) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-2 pt-1 px-3 pb-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">
          مشخصات صاحب امضا:
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">نام</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.first_name}cccccc
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            نام خانوادگی
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.last_name}mmm
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">کد ملی</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.national_id}mmm
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">تاریخ تولد</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.birth_day}mm
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            شماره تلفن ثابت
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.fixed_number}mmm
          </div>
        </div>
        {mainData?.fixed_numbers?.map((item, index) => {
          return (
            <div
              key={item}
              className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1"
            >
              <div className="text-[#808080] text-[10px] leading-4">
                شماره تلفن ثابت {index + 2}
              </div>
              <div className="text-[#242424] text-xs leading-5">{item}</div>
            </div>
          );
        })}
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            شماره تلفن همراه
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.phone_number}mmm
          </div>
        </div>
        {mainData?.phone_numbers?.map((item, index) => {
          return (
            <div
              key={item}
              className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1"
            >
              <div className="text-[#808080] text-[10px] leading-4">
                شماره تلفن همراه {index + 2}
              </div>
              <div className="text-[#242424] text-xs leading-5">{item}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 pt-1 px-3 pb-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">
          مشخصات مدیر فروش:
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">نام</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.sale_manager?.first_name}cccccc
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            نام خانوادگی
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.sale_manager?.last_name}mmm
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">کد ملی</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.sale_manager?.national_id}mmm
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            شماره تلفن همراه
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.sale_manager?.phone_number}mmm
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1 px-3 pb-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-6">
          مشخصات مدیر فروش:
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">نام</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.buy_manager?.first_name}cccccc
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            نام خانوادگی
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.buy_manager?.last_name}mmm
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">کد ملی</div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.buy_manager?.national_id}mmm
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col px-3 py-1">
          <div className="text-[#808080] text-[10px] leading-4">
            شماره تلفن همراه
          </div>
          <div className="text-[#242424] text-xs leading-5">
            {mainData?.buy_manager?.phone_number}mmm
          </div>
        </div>
      </div>
    </div>
  );
}

// first_name: values.firstName,
// last_name: values.lastName,
// national_id: values.nationalId,
// fixed_number: values.fixed_number,
// phone_numbers: values.phone_numbers,
// fixed_numbers: values.fixed_numbers,
// fieldEDU:values.fieldEDU,
// birth_day: values.birth_day,
// degree: values.degree,
// experiences: workExperienceList,
// courses: courseList,
// skill_records: skillRecords,
