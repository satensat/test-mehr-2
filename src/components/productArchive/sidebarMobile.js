
import { FeatureData } from "../data/feature-list";
import { CategoryData } from "../data/category-list";
import style from "./sidebarMobile.module.css"


export default function Sidebar({data}) {
    
  return (
<>

<div id="mainSideBar" className={style.mainSideBar +" w-full lg:max-w-[32%] xl:max-w-[24%]    mb-4 lg:mb-0  hidden lg:hidden"}>
 <CategoryData param={data} type="category"/>
   <FeatureData param={data}/>
   <div  className="flex bg-[#f7f7f7] absolute inset-x-0 -bottom-[124px] py-6 px-2.5 justify-between">
     <button className="text-white bg-[#13625C] leading-loose rounded-xl px-2.5 py-1.5 min-w-[48%] closeFilterBox" > مشاهده نتایج</button>
     <button type="button" className="leading-loose rounded-xl  bg-[#fff] px-2.5 py-1.5 min-w-[48%]" >خروج </button>
   </div>
 </div>
  
</>
    
  );
}
