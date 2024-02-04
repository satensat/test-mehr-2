
"use client";
import style from  "./breadcrumb.module.css";
import FilterIcon from "@/icon/filter";
import Link from "next/link";
export default function BreadcrumbList({data ,cat}) {

  return (
    <div className="flex lg:items-center pt-3.5 pb-6  justify-between flex-col lg:flex-row">
      <ul className={style.breadcrumb_box  +  " breadcrumb_box text-xs no-scrollbar flex   gap-[10px] overflow-y-hidden overflow-x-auto xs:max-w-full font-bold xl:gap-[8px] "}>
    {
       data.map((item , index) => {
        if(index+1 == data.length){
          return (<li key={item.name+"_item"+index} >{item.name}</li>)
        }else{
          return (<li key={item.name+"_item"+index} ><Link href={item.url}>{item.name}</Link> </li>)
        }
       })
    }
  </ul>

 <div className="flex justify-between mt-5 lg:mt-0">
  <span onClick={()=> {
    document.querySelector("#mainSideBar").classList.add("block")
    document.querySelector("#mainSideBar").classList.remove("hidden")
  }} className={style.filterCategoryMobile + " bg-[#13625c] rounded-2xl d-flex lg:hidden items-center flex  justify-center w-[40px] h-[40px]"}>
    <FilterIcon  />
  </span>
 
  <Link href="" className="bg-[#13625c] text-white py-2 px-4 rounded-xl">استعلام قیمت</Link>
 </div>
    </div>
  );
}
