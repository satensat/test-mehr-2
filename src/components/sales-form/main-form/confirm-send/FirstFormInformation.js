import React from "react";

export default function FirstFormInformation({ mainData }) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">نام</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.first_name}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">نام خانوادگی</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.last_name}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">کد ملی</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.national_id}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">تاریخ تولد</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.birth_day}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> تحصیلات</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.degree}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> رشته</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.fieldEDU}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          شماره تلفن ثابت
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.fixed_number}
        </div>
      </div>
      {mainData?.fixed_numbers?.map((item, index) => {
        return (
          <div
            key={item}
            className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1"
          >
            <div className="text-[#808080] text-[10px] leading-4">
              شماره تلفن ثابت {index + 2}
            </div>
            <div className="text-[#242424] text-xs leading-5">{item}</div>
          </div>
        );
      })}
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          شماره تلفن همراه
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.phone_number}
        </div>
      </div>
      {mainData?.phone_numbers?.map((item, index) => {
        return (
          <div
            key={item}
            className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1"
          >
            <div className="text-[#808080] text-[10px] leading-4">
              شماره تلفن همراه {index + 2}
            </div>
            <div className="text-[#242424] text-xs leading-5">{item}</div>
          </div>
        );
      })}
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-4">سوابق مهارتی:</div>
        {mainData?.skill_records?.map((item) => {
          return (
            <div
              key={item.skill}
              className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5"
            >
              {item.skill}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-4">سابقه کاری :</div>
        {mainData?.experiences?.map((item, index) => {
          // console.log(item);
          return (
            <div
              key={item.name + "--" + `${index}`}
              className="w-full flex flex-col gap-2"
            >
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1  w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  نام محل کار
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {item.title}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  تاریخ شروع
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {new Date(item.start_date).toLocaleDateString("fa-IR")}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  تاریخ پایان (پیش بینی تاریخ پایان)
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {new Date(item.end_date).toLocaleDateString("fa-IR")}
                </div>
              </div>
              {+mainData?.experiences?.length > +index + 1 && (
                <span className="w-full h-[1px] bg-[#E6E6E6] "></span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-4">دوره آموزشی:</div>
        {mainData?.courses?.map((item, index) => {
          return (
            <div
              key={item.name + "--" + `${index}`}
              className="w-full flex flex-col gap-2"
            >
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 w-full ">
                <div className="text-[#808080] text-[10px] leading-4">
                  نام دوره
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {item.name}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  نام موسسه
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {item.institution_name}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  تاریخ شروع
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {new Date(item.start_date).toLocaleDateString("fa-IR")}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  تاریخ پایان (پیش بینی تاریخ پایان)
                </div>
                <div className="text-[#242424] text-xs leading-5">
                  {new Date(item.end_date).toLocaleDateString("fa-IR")}
                </div>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5 w-full">
                <div className="text-[#808080] text-[10px] leading-4">
                  توضیحات
                </div>
                <div className="text-[#242424] text-xs leading-5 w-full">
                  {item.description}
                </div>
              </div>
              {+mainData?.courses?.length > +index + 1 && (
                <span className="w-full h-[1px] bg-[#E6E6E6] "></span>
              )}
            </div>
          );
        })}
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
