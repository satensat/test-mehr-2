"use client" ; 
import style from "./sidebar-product.module.css";
import ArrowDownIcon from "@/icon/arrow-down";
import FilterIcon from "@/icon/filter";
import CloseIcon from "@/icon/close"; 
import { useState ,useEffect} from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default  function SidebarProduct({catData}) {
   const [removefilter , setRemovefilter] = useState(false)
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const [dataList , setDataList] = useState(false)
   useEffect(()=>{
    if(searchParams.toString().length > 0){
      if(searchParams.has("page")){
        if(searchParams.toString().replace("page="+searchParams.get("page") , "").length > 0){
          setRemovefilter(true)
        }

      }else{
        setRemovefilter(true)
      }
      
    }else{
      setRemovefilter(false)
    }
    
  },[])
   useEffect(()=>{

   
    searchParams.forEach((value, key) => {
      for (const el of document.querySelectorAll(`#${key}_box > ul >li`)) {
        console.log(value)
          value.split(",").forEach((value) => {
                   if(el.getAttribute("data") == value){
                    el.children[0].style.background = "#003730"; 
                   }
                   });       
        }
    });
  
 },[])

   function handleSearch(el,term) {
    const params = new URLSearchParams(searchParams);
    if(term != "remove"){
     
      
      setRemovefilter(true)
      if(params.has(term[0])){
       
         if(!params.get(term[0]).includes(term[1])){
          el.target.children[0].style.background = "#003730"
             params.set(term[0], `${params.get(term[0])},${term[1]}`);
         }else{
          console.log(el.target.children[0].style.background)
          el.target.children[0].style.background = "#fff"
          var xx  =""
          var i = 0 
          for (const value of params.get(term[0]).split(",")) {
            if (value !== term[1]) {
              if(xx.length > 0 ){
                xx = xx+","+value
              }else{
                xx = value
              }
               
               i++
            }
        }
        params.set(term[0], xx);
       
       
         }
      }else{
        el.target.children[0].style.background = "#003730"
         params.set(term[0], term[1]);
      }
      router.push(`${pathname}?${params}`);
      setDataList(!dataList)
    }
   else{
    for (const temp of document.querySelectorAll(".filterItem")) {
      console.log(temp.children[0])
      temp.children[0].style.background = "#fff"
    }
    setRemovefilter(false)
    router.push(`${pathname}`);
    setDataList(!dataList)
   }
  
  }
  return (
   <div className={style.product_sidebar_box + " overflow-hidden"}>
    <div className="flex justify-between font-extrabold text-[#696969]  items-center border-slate-100 pb-2.5 mb-3 border-b">
        <span className={style.sidebar_filter + " flex items-center"}>
          <FilterIcon/>
        فیلتر
        </span>
        {removefilter ? <span onClick={(el) => handleSearch(el,"remove")} className={style.close_filter + " flex items-center"}>
        حذف فیلتر‌ها
        <CloseIcon/>
        </span> : null}
        
    </div>
    

    <ul className={style.product_sidebar_property_box + " text-[#525252]"}>
   {catData.map((item,index)=>  <li id={item.en_name+"_box"} key={item.fa_name+"_item"+index} className=" product_sidebar_property_item  font-bold w-full cursor-pointer    py-[15px] ">
       <div className="flex items-center justify-between pointer-events-none">
       {item.fa_name}
        <span><ArrowDownIcon/></span>
       </div>
        {item.value_list ? <ul className="mt-2">{
          item.value_list.map((temp,index) => 

          <li key={temp+"_feature"+index} data={temp} onClick={(el) => handleSearch(el,[item.en_name,temp])} className="filterItem font-normal py-3 px-2 items-center  flex"><span className="w-[16px] h-[16px] border-2 inline-flex rounded-md border-neutral-400 ml-2  pointer-events-none"></span>{temp}</li>
        )
          }</ul> : null}
        </li>)}
     
    </ul>
   </div>
  );
}
