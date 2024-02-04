import ArrowOpinion from "@/icon/ArrowOpinion";
import CloseModal from "@/icon/CloseModal";
import FavoriteIcon from "@/icon/Favorite";
import Image from "next/image";

export default function CompareCard({detail}) {
  return (
    <div className="min-w-[176px]  w-1/2  md:min-w-[314px] md:w-1/4 hidden ">
      <div className="bg-[#FFF] rounded-2xl  shadow-G1 p-2 md:p-3 w-full flex flex-col  transition ease-in-out duration-500 hover:scale-105">
        <div
          className={
            "w-full  flex-col after:content-['']   after:h-[1px] after:w-full   after:bg-[#E6E6E6] "
          }
        >
          {/* after:content-['']   after:h-[1px] after:w-full   after:bg-[#CCC] */}
          <div className="w-full flex flex-row justify-between items-center pb-3 ">
            <div className="transition ease-in-out duration-500 hover:invert hover:brightness-200 cursor-pointer">
              <CloseModal />
            </div>
            <div className=" flex flex-row items-center justify-center  ">
              <button className="transition ease-in-out duration-500 group flex flex-row justify-center items-center text-[#13625C]   border-solid border-[1px]  border-[#13625C] rounded-xl py-1 px-1  md:px-3 md:text-xs hover:text-white  hover:bg-mainGreen1 text-sm not-italic font-bold leading-6 ">
                <div className="ml-1 text-sm not-italic font-bold leading-6 hidden md:flex ">
                  مورد علاقه
                </div>
                <div className="transition ease-in-out duration-500  group-hover:brightness-0 group-hover:invert  ">
                  <div className="hidden md:flex">
                    <FavoriteIcon color={"#13625C"} />
                  </div>
                  <div className="flex md:hidden justify-center ">
                    <FavoriteIcon color={"#13625C"} width={24} height={25} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <span className="h-[1px] w-full   bg-[#E6E6E6]"></span>
        <div className={"w-full flex flex-col md:flex-row   " + " "}>

            <div className=" flex flex-col w-full md:w-[35%] items-center justify-center py-2">
              <Image
                
                src={detail.image.url}
                alt={detail.image.url}
                width={300}
                height={100}
                className="w-auto max-h-[85px]  ] m-auto object-cover "
              />
            </div>

          <div
            className=" w-full text-center  md:w-[65%] md:text-right text-xs not-italic font-bold leading-6 text-[#3b3b3b] my-auto py-2
          "
          >
           {detail.names.name}
          </div>
        </div>
        <button
          className={
            "group px-1 mx-auto transition-all  duration-500   md:mt-2 py-1 md:px-3    rounded-xl   hover:bg-mainYellow flex flex-row items-center justify-between" +
            " "
          }
        >
          <div className="text-xs text-center md:text-sm not-italic transition-all  duration-500 font-bold leading-6 text-mainGreen1  group-hover:text-black md:ml-1">
            مشاهده محصول
          </div>
          <div className="transition-all ease-in-out duration-500  group-hover:brightness-0  ">
            <ArrowOpinion />
          </div>
        </button>
      </div>
    </div>
  );
}
// min-h-[308px] md:min-h-[196px]
