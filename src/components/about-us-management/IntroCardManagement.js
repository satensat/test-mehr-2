import ArrowOpinion from "@/icon/ArrowOpinion";
import Image from "next/image";
import React from "react";

export default function IntroCardManagement() {
  const data = {
    id: 3,
    title: "درباره مدیریت",
    content:
      " “بر این باوریم تا در فضای رقابتی و پر چالش کنونی حاکم بر این حوزه، پیشرفت سازمان در گرو رضایت مشتریان بوده و همواره سعی می‌شود تا تمامی اولویت‌ها، تصمیمات خلاقانه مدیریتی، مقاصد و اهداف سازمانی به سمت الزامات، نیازها و خواسته‌های مشتریان سوق یابد”",
    background: "bg-black-garadient-card-aboutus",
    image: "/about-us/manager.webp",
    imageCss: "bg-[url('/about-us/management-card.webp')]",
    titleColor: "text-[#F7F7F7]",
    textColor: "text-[#CCC]",
    hrefAddress: "/about-us/management",
  };
  return (
    <div className="w-full p-0 pb-3 md:py-3">
      <div className="p-3 w-full shadow-G1 rounded-3xl">
        <div className={"rounded-2xl w-full h-full " + " "}>
          <div className="w-full relative rounded-3xl min-h-[400px]  overflow-hidden  ">
            <Image
              src={data.image}
              alt={data.content}
              width={1000}
              height={440}
              className=" w-full rounded-3xl h-auto min-h-[400px] object-cover  max-h-[650px] "
            />
            <div
              className={
                "absolute top-0 inset-x-0 p-3 h-full  min-h-[400px]  rounded-2xl bg-black-garadient-card-aboutus md:bg-black-gradient-intro-awards  " +
                data.background
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



//  {/* <div
//         className={
//           "rounded-2xl w-full h-full min-h-[292px] md:min-h-[636px]  bg-cover bg-no-repeat bg-top" +
//           " " +
//           "bg-[url('/about-us/manager.webp')] "
//         }
//       >
//          <div className={"p-3 h-full min-h-[292px] md:min-h-[636px]  rounded-2xl bg-black-garadient-card-aboutus md:bg-black-gradient-intro-awards  "+ data.background}>
//           <div className={"flex flex-col p-3 w-full md:w-1/2 md:max-w-[500px] "+ " "}>
//             <div
//               className={
//                 "text-lg not-italic font-bold leading-8  pb-3" +
//                 " " +
//                 data.titleColor
//               }
//             >
//               {data.title}
//             </div>
//             <div
//               className={
//                 "text-sm not-italic font-normal leading-7 text-justify" +
//                 " " +
//                 data.textColor
//               }
//             >
//               {data.content} <span className="md:hidden">...</span>
//             </div>

//           </div>
//           <div className="flex flex-col p-3 ">
//             <button className="group w-fit transition ease-in-out duration-500  flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px]  bg-[#FFF] border-[#13625C] rounded-xl py-1 px-3 md:text-xs hover:text-white  hover:bg-mainGreen1 ">
//             <a className="flex flex-row justify-center items-center" href="#management">
//               <div className="text-sm not-italic font-bold leading-6 ml-1     ">
//                 آشنایی بیشتر
//               </div>
//               <div className="transition ease-in-out duration-500 group-hover:-translate-x-1 group-hover:scale-110  group-hover:brightness-0 group-hover:invert">
//                 <ArrowOpinion />
//               </div>
//               </a>
//             </button>
//           </div>
//         </div> 
//       </div> */}