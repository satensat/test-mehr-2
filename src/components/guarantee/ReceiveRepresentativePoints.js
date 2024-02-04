import StarIcon from '@/icon2/StarIcon'
import WarningExclamation from '@/icon2/WarningExclamation'
import React from 'react'

export default function ReceiveRepresentativePoints() {
  return (
    <div
    className="flex flex-col before:bg-[#E6E6E6]
before:content-['']  before:h-[1px] before:w-full   "
  >
    <div className="pt-3 md:py-3">
      <div className="flex flex-row gap-2 py-2 ">
        <div>
          <WarningExclamation />
        </div>
        <div className="text-right text-sm not-italic font-bold leading-6 text-[#242424]">
          نکات قابل توجه
        </div>
      </div>
      <div className="py-3">
        <div className=" bg-[#fdfdfd] rounded-xl  pb-1">
          <div className="px-3 py-1 flex flex-col">
            <p className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
              مدارک مورد نیاز
            </p>
            <p className="text-right text-xs not-italic font-bold leading-6 text-[#242424] ">
              پیش از شروع فرم، مدارک زیر را جهت بارگذاری داشته باشید:
            </p>
          </div>
          <div className="px-3">
            <ul className="list-disc pr-2">
              <li className="text-right text-xs not-italic font-normal leading-6 text-[#525252]">
                اظهارنامه مالیات بر ارزش افزوده
              </li>
              <li className="text-right text-xs not-italic font-normal leading-6 text-[#525252]">
                گواهینامه شورای عالی انفورماتیک
              </li>
              <li className="text-right text-xs not-italic font-normal leading-6 text-[#525252]">
                تصاویر محل کار
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#fdfdfd] rounded-xl ">
        <div className="px-3 py-1 flex flex-col">
          <p className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
            سطوح نمایندگان
          </p>
          <p className="text-xs not-italic font-normal leading-5 text-[#242424] ">
            متقاضیان بر حسب شرایط و امکانات به سطوح مختلف تقسیم
            می‌شوند:
          </p>
        </div>
        <div className="px-3 pt-3">
          <div className="px-3 py-2 rounded-xl bg-[#f7f7f7] flex flex-row gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <StarIcon color={"#fff"} />
            </div>
            <div className="flex flex-col ">
              <div className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
              سطح 0
              </div>
              <div className="text-right text-xs not-italic font-normal leading-[1.9rem] text-[#242424]  ">
              پس از دریافت کالا دستگاه به نمایندگی مرکزی ارسال می نماید.
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pt-3">
          <div className="px-3 py-2 rounded-xl bg-[#f7f7f7] flex flex-row gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <StarIcon />
            </div>
            <div className="flex flex-col ">
              <div className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
                سطح 1
              </div>
              <div className="text-right text-xs not-italic font-normal leading-[1.9rem] text-[#242424]  ">
                پس از دریافت کالا و تست اولیه دستگاه و بررسی و مشاهده
                ایراد دستگاه به نمایندگی مرکزی ارسال می نماید.
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pt-3">
          <div className="px-3 py-2 rounded-xl bg-[#E6E6E6] flex flex-row gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <StarIcon />
              <StarIcon />
            </div>
            <div className="flex flex-col ">
              <div className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
                سطح 2
              </div>
              <div className="text-right text-xs not-italic font-normal leading-[1.9rem] text-[#242424]  ">
                پس از دریافت کالا در صورتی که مشکل به وجود آمده در
                دستگاه نرم‌افزاری باشد اقدام به رفع ایراد می نماید و
                اگر نیاز به تعویض قطعه باشد دستگاه به دفتر مرکزی ارسال
                می گردد .
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 ">
          <div className="px-3 py-2 rounded-xl bg-[#CCC] flex flex-row gap-2 ">
            <div className="flex flex-col justify-center items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="flex flex-col ">
              <div className="text-right text-xs not-italic font-bold leading-6 text-[#808080]">
                سطح 3
              </div>
              <div className="text-right text-xs not-italic font-normal leading-[1.9rem] text-[#242424]  ">
                پس از دریافت کالا در صورتی که مشکل به وجود آمده در
                دستگاه نرم‌افزاری باشد ، نمایندگی در این سطح اقدام به
                رفع ایراد می نماید و اگر نیاز به تعویض قطعه باشد
                دستگاه به دفتر مرکزی ارسال می گردد . همچنین در در
                صورتی که دستگاه نیاز به تعمیر ات تخصصی مادربرد از قبیل
                ریبال CPU ، ریبال RAM ، تعویض IC ها و... داشته باشد
                این سطح قادر به انجام این فرآیند میباشد.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
