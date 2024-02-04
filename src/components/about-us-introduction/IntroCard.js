import ArrowOpinion from "@/icon/ArrowOpinion";
import Image from "next/image";
import React from "react";

export default function IntroCard() {
  const data = {
    id: 1,
    title: "معرفی شرکت",
    content:
      "شرکت خدماتی و تجاری مهر سرمستان از سال 1382 فعالیت خود را در حوزه واردات تجهیزات آی‌تی با محوریت قطعات آغاز کرد و به مرور وارد حوزه لپتاپ، نوت بوک، موبایل و تبلت شد. مهر با در نظر گرفتن چهار اصل اساسی سعی بر بهبود خدمات خود داشته است",
    background: "bg-white-garadient-card-aboutus",
    image: "/about-us/office-buildings.webp",
    imageCss: "bg-[url('/about-us/office-buildings-card.webp')]",
    titleColor: "text-mainGreen1",
    textColor: "text-[#525252]",
    hrefAddress: "/about-us/introduction",
  };
  return (
    // <div className="w-full p-3">
    //   <div className="p-3 w-full shadow-G1 rounded-3xl">
    //     <div
    //       className={
    //         "rounded-2xl w-full h-full min-h-[292px] md:min-h-[436px] bg-cover bg-no-repeat bg-center" +
    //         " " +
    //         "bg-[url('/about-us/office-buildings.webp')] "
    //       }
    //     >
    //       <div className={"p-3 h-full min-h-[292px] md:min-h-[436px] "+ data.background}>
    //         <div className={"flex flex-col p-3 w-full md:w-1/2 md:max-w-[500px] "+ " "}>
    //           <div
    //             className={
    //               "text-lg not-italic font-bold leading-8  pb-3" +
    //               " " +
    //               data.titleColor
    //             }
    //           >
    //             {data.title}
    //           </div>
    //           <div
    //             className={
    //               "text-sm not-italic font-normal leading-7  text-justify" +
    //               " " +
    //               data.textColor
    //             }
    //           >
    //             {data.content} <span className="md:hidden">...</span>
    //           </div>
    //           <div
    //             className={
    //               "hidden md:block text-sm not-italic font-normal leading-6  px-3 pt-3" + " "
    //             }
    //           >
    //             <ul className="text-right text-sm not-italic font-normal leading-6 text-[#525252] list-disc">
    //               <li className="text-mainGreen1">
    //                 <span className="text-[#525252]">واردات کالای باکیفیت</span>
    //               </li>
    //               <li className="text-mainGreen1">
    //                 <span className="text-[#525252]">
    //                   تناسب بین کالا و خواست‌ها و نیازمندی‌های مصرف‌کنندگان
    //                   ایرانی
    //                 </span>
    //               </li>
    //               <li className="text-mainGreen1">
    //                 <span className="text-[#525252]">
    //                   قیمت‌گذاری با در نظر گرفتن همه‌ی چهارچوب‌های قانونی
    //                 </span>
    //               </li>
    //               <li className="text-mainGreen1">
    //                 <span className="text-[#525252]">
    //                   ارائه خدمات پس از فروش برتر
    //                 </span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="flex flex-col p-3 ">
    //           <button className="group w-fit transition ease-in-out duration-500  flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px]  bg-[#FFF] border-[#13625C] rounded-xl py-1 px-3 md:text-xs hover:text-white  hover:bg-mainGreen1 ">
    //           <a className="flex flex-row justify-center items-center" href="#introduction">
    //             <div className="text-sm not-italic font-bold leading-6 ml-1     ">
    //               آشنایی بیشتر
    //             </div>
    //             <div className="transition ease-in-out duration-500 group-hover:-translate-x-1 group-hover:scale-110  group-hover:brightness-0 group-hover:invert">
    //               <ArrowOpinion />
    //             </div>
    //             </a>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full p-0 pb-3 md:p-3">
      <div className="p-3 w-full shadow-G1 rounded-3xl">
        <div className={"rounded-2xl w-full h-full " + " "}>
          <div className="w-full relative rounded-3xl min-h-[400px]  overflow-hidden  ">
            <Image
              src={data.image}
              alt={data.content}
              width={2000}
              height={440}
              className=" w-full rounded-3xl h-auto min-h-[400px] object-cover  max-h-[650px] "
            />
            <div
              className={
                "absolute top-0 inset-x-0 p-3 h-full w-full min-h-[400px] rounded-2xl  bg-white-garadient-card-aboutus  " +
                "md:"+data.background
              }
            >
              <div
                className={
                  "flex flex-col p-3 w-full md:w-1/2 md:max-w-[500px] " + " "
                }
              >
                <div
                  className={
                    "text-lg not-italic font-bold leading-8  pb-3" +
                    " " +
                    data.titleColor
                  }
                >
                  {data.title}
                </div>
                <div
                  className={
                    "text-sm not-italic font-normal leading-7 text-justify" +
                    " " +
                    data.textColor
                  }
                >
                  {data.content} <span className="md:hidden">...</span>
                </div>
                <div
                  className={
                    "hidden md:block text-sm not-italic font-normal leading-6  px-3 pt-3" +
                    " "
                  }
                >
                  <ul className="text-right text-sm not-italic font-normal leading-6 text-[#525252] list-disc">
                    <li className="text-mainGreen1">
                      <span className="text-[#525252]">
                        واردات کالای باکیفیت
                      </span>
                    </li>
                    <li className="text-mainGreen1">
                      <span className="text-[#525252]">
                        تناسب بین کالا و خواست‌ها و نیازمندی‌های مصرف‌کنندگان
                        ایرانی
                      </span>
                    </li>
                    <li className="text-mainGreen1">
                      <span className="text-[#525252]">
                        قیمت‌گذاری با در نظر گرفتن همه‌ی چهارچوب‌های قانونی
                      </span>
                    </li>
                    <li className="text-mainGreen1">
                      <span className="text-[#525252]">
                        ارائه خدمات پس از فروش برتر
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col p-3 ">
                <button className="group w-fit transition ease-in-out duration-500  flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px]  bg-[#FFF] border-[#13625C] rounded-xl py-1 px-3 md:text-xs hover:text-white  hover:bg-mainGreen1 ">
                  <a
                    className="flex flex-row justify-center items-center"
                    href="#details"
                  >
                    <div className="text-sm not-italic font-bold leading-6 ml-1     ">
                      آشنایی بیشتر
                    </div>
                    <div className="transition ease-in-out duration-500 group-hover:-translate-x-1 group-hover:scale-110  group-hover:brightness-0 group-hover:invert">
                      <ArrowOpinion />
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
