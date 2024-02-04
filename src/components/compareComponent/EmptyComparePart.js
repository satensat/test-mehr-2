import CompareHandIcon from "@/icon/CompareHandIcon";
import PlusIcon from "@/icon/PlusIcon";
import Image from "next/image";

export default function EmptyComparePart() {
  return (
    <div className="w-full flex flex-col rounded-3xl bg-[#FFF] shadow-G1 ">
      <div className="p-3 w-full flex flex-row justify-between items-center ">
        <div className="text-center text-base md:text-lg not-italic font-bold leading-8 txt-[#3B3B3B] cursor-pointer">
          مقایسه محصولات
        </div>
        <button className="group  flex flex-row p-2 rounded-xl bg-mainGreen1 justify-between items-center self-stretch text-[#FFF] px-2  md:px-3 py-1 md:py-2  transition ease-in-out duration-500 hover:bg-mainYellow hover:text-[#000]">
          <div className="text-center text-sm md:text-base not-italic font-normal leading-8 ml-2">
            مقایسه پیشرفته
          </div>
          <div className="hidden md:block transition ease-in-out duration-500  group-hover:brightness-200 group-hover:invert">
            <CompareHandIcon />
          </div>
          <div className="md:hidden transition ease-in-out duration-500  group-hover:brightness-200 group-hover:invert">
            <CompareHandIcon width={"16"} height={"16"}/>
          </div>
        </button>
      </div>
      <div className="w-full flex flex-row p-3 items-center justify-center bg-lightGray">
        <div className="w-full md:w-1/2 lg:w-1/3 shadow-G1 bg-[#fff] flex flex-col p-2 rounded-3xl bg-[url('/compare/Patterns.svg')] bg-center bg-no-repeat">
          <div className="w-full flex flex-row items-center justify-center p-3">
            <Image
              src="/compare/Frame-1010.svg"
              width={208}
              height={160}
              alt="frame"
            />
          </div>
          <div className="text-center text-lg not-italic font-bold leading-8 text-[#3B3B3B] p-3 h-16">
            محصولی برای مقایسه ندارید...
          </div>
          <div className="p-3">
            <button className="group  mx-auto  flex flex-row p-2 rounded-2xl bg-mainGreen1 justify-between items-center self-stretch text-[#FFF] px-6 py-2  transition ease-in-out duration-500 hover:bg-mainYellow hover:text-[#000]">
              <div className=" text-center text-base not-italic font-bold leading-6 ml-2">
                اضافه کردن محصول
              </div>
              <div className="transition ease-in-out duration-500  group-hover:brightness-200 group-hover:invert">
                <PlusIcon color={"white"} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
