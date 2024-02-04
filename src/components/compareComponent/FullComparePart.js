import React from "react";
import CompareHandIcon from "@/icon/CompareHandIcon";
import PlusIcon from "@/icon/PlusIcon";
import CompareCard from "./CompareCard";
import AddProductCompare from "./AddProductCompare";
import SimilarPartControl from "./SimilarPartControl";
import DetailsPart from "./DetailsPart";
import TopCardsCompare from "./TopCardsCompare";
import TopCardsCompare1 from "./TopCardsCompare1";

export default function FullComparePart({detail}) {
  // const [isScroll, setIsScroll] = useState(false);
  // const handleScroll = (e) => {
  //   console.log(e);
  // };
  return (
    <div className="relative">
      <TopCardsCompare1 />
      <div
        className="w-full flex flex-col rounded-3xl bg-lightGray shadow-G1  overflow-x-scroll"
        // onScroll={handleScroll}
        id="controlSimilarity"
      >
        <div className=" w-fit min-w-full ">
          <div className="p-3 w-full flex flex-row justify-between items-center bg-mainGreen1 rounded-t-3xl">
            <div className="text-center text-lightGray text-base md:text-lg not-italic font-bold leading-8 txt-[#3B3B3B] cursor-pointer">
              مقایسه محصولات
            </div>
            <button className="group  flex flex-row   rounded-xl bg-mainYellow justify-between items-center self-stretch px-2  md:px-3 py-1 md:py-2  transition ease-in-out duration-500 hover:bg-[#fff] hover:text-[#000]">
              <div className="text-center text-sm md:text-base not-italic font-normal leading-7 ml-1 md:leading-8 md:ml-2">
                مقایسه پیشرفته
              </div>
              <div className="hidden md:block transition ease-in-out duration-500  brightness-200 invert">
                <CompareHandIcon />
              </div>
              <div className=" md:hidden transition ease-in-out duration-500  brightness-200 invert">
                <CompareHandIcon width={"16"} height={"16"} />
              </div>
            </button>
          </div>

          <div className="w-full overflow-x-auto   flex flex-row  bg-[#E6E6E6] gap-3 p-3 items-stretch lg:sticky top-0 lg:z-20 [&>*:nth-child(1)]:block [&>*:nth-child(2)]:block  md:[&>*:nth-child(n)]:block ">
           
            {
            detail.length > 0  ? 
            detail.map((item ,index) => (
              <CompareCard detail={item} key={index}/>
            )) : ""
             }
            <AddProductCompare  />
          </div>
          <div className=" w-full h-fit ">
            <SimilarPartControl />
            
           {
            
            detail.length > 0  ? <DetailsPart  detail={detail}/>:""
           } 
          </div>
        </div>
      </div>
    </div>
  );
}
// sticky top-0 z-20
