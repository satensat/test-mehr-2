
"use client";
import style from "./pagination.module.css"
import ArrowLeftIcon from "@/icon/arrow-left";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect ,useState } from "react";
export default function Pagination({count }) {
  const [current , setCurrent] = useState(1) 
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  useEffect(()=>{
    const params = new URLSearchParams(searchParams);
    if(params.has("page")){
      setCurrent(params.get("page"))
    }
  })
  function handleSearch(term) {
    console.log(current)
    setCurrent(term)
    const params = new URLSearchParams(searchParams);
    if(term){
      params.set('page', term);
      router.push(`${pathname}?${params}`);
    }
  }

 if(count > 1 ){
  const todoIdList = []; 
   
  for (let i = 0; i < count ; i++) {
    
     
    todoIdList[i]=i+1
    console.log(i+1)
    }
    console.log(todoIdList)
  return (
    <div className={style.pagination_wrap + " flex items-center justify-center mt-1.5"}>
  
      {Number(count) <8 ?  
      todoIdList.map((item) => <span onClick={() => handleSearch(item)}  className={style.pagination_item  + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7] hover:bg-[#003730] hover:text-[#fff] transition duration-700 rounded-lg"}>
        {item}
      </span>) 
         
       
      
      
         : null}
        {
   (Number(count) > 7 && current > 2 && current < count-1 ) && <>
   <span className={style.pagination_item  + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg " + style.pagination_item_left}>
    <ArrowLeftIcon/>
  </span>
   <span onClick={() => handleSearch(1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
     1
  </span>
  <span className={style.pagination_item + " items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  ...
  </span>
  <span onClick={() => handleSearch(Number(current) - 1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(current) - 1}
  </span>
  <span onClick={() => handleSearch(Number(current))} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(current)}
  </span>
  <span onClick={() => handleSearch(Number(current) + 1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(current) + 1}
  </span>
  <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  ...
  </span>
  <span onClick={() => handleSearch(Number(count) )} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(count) }
  </span>
  <span className={style.pagination_item  + style.pagination_item_right + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
    <ArrowLeftIcon/>
  </span>
   </> 
        }
  
        {
         (Number(count) > 7 && current == 2  ) && <>
   <span className={style.pagination_item  + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg " + style.pagination_item_left}>
    <ArrowLeftIcon/>
  </span>
  <span onClick={() => handleSearch(1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  1
  </span>
  <span onClick={() => handleSearch(2)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  2
  </span>
  <span onClick={() => handleSearch(3)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  3
  </span>
  <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  ...
  </span>
  <span onClick={() => handleSearch(Number(count) - 1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(count) -1 }
  </span>
  <span onClick={() => handleSearch(Number(count))} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  
  </span>
  <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
    <ArrowLeftIcon/>
  </span>
   </> 
        }
         {
         (Number(count) > 7 && current == Number(count) -1 ) && <>
   <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg "+ style.pagination_item_left}>
    <ArrowLeftIcon/>
  </span>
   
  
  <span onClick={() => handleSearch(1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  1
  </span>
  <span onClick={() => handleSearch(2)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  2
  </span>
  
  <span className={style.pagination_item + " items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  ...
  </span>
  <span onClick={() => handleSearch(Number(count) -2)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(count) - 2 }
  </span>
  <span onClick={() => handleSearch(Number(count) - 1 )} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(count) -1 }
  </span>
  <span onClick={() => handleSearch(Number(count))} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
  {Number(count) }
  </span>
  <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
    <ArrowLeftIcon/>
  </span>
   </> 
        }
        {   
     
      (Number(count) > 7 && (current < 2 || current > count-1) ) && <>
       <span className={style.pagination_item  + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg " + style.pagination_item_left}>
        <ArrowLeftIcon/>
     </span>
       <span onClick={() => handleSearch(1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
         1
     </span>
     <span onClick={() => handleSearch(2)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
       2
     </span>
     <span className={style.pagination_item + " items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
     ...
     </span>
     <span onClick={() => handleSearch(Number(count) - 1)} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
     {Number(count) -1 }
     </span>
     <span onClick={() => handleSearch(Number(count))} className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
     {Number(count) }
     </span>
     <span className={style.pagination_item + " cursor-pointer items-center w-9 h-9 mx-2 inline-flex justify-center  bg-[#f7f7f7]  rounded-lg"}>
        <ArrowLeftIcon/>
     </span>
       </> 
        }
    </div>
    );
 }
 
}
