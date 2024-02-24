import StarIcon from '@/icon2/StarIcon'
import WarningExclamation from '@/icon2/WarningExclamation'
import React from 'react'

export default function AgencyReceivePoints() {
  return (
    <div
    className="flex flex-col before:bg-[#E6E6E6] md:before:bg-[#1B887F] before:content-['']  before:h-[1px] before:w-full   "
  >
    <div className="pt-3 md:py-3">
      <div className="flex flex-row gap-2 py-2 ">
        <div>
          <WarningExclamation />
        </div>
        <div className="text-right text-sm not-italic font-bold leading-6 text-[#242424] md:text-[#fdfdfd]">
          نکات قابل توجه
        </div>
      </div>
      <div className="pt-3 md:py-3">
        <div className=" bg-[#fdfdfd] rounded-xl pb-1">
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
              جواز کسب و کار
              </li>
              <li className="text-right text-xs not-italic font-normal leading-6 text-[#525252]">
              اساسنامه شرکت یا فروشگاه
              </li>
              <li className="text-right text-xs not-italic font-normal leading-6 text-[#525252]">
              تصاویر محل کار
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
