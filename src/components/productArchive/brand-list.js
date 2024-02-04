
"use client";
import Link from "next/link";
import style from "./brand-list.module.css";
import Image from "next/image";
import BookSquareIcon from "@/icon/tag/book-square";
import FlagIcon from "@/icon/tag/flag";
import GameIcon from "@/icon/tag/game";
import MedalStarIcon from "@/icon/tag/medal-star";
import MessageProgrammingIcon from "@/icon/tag/message-programming";
import MoneysIcon from "@/icon/tag/moneys";
import PercentageSquareIcon from "@/icon/tag/percentage-square";
import TickcircleIcon from "@/icon/tag/tick-circle";
import RulerPenIcon from "@/icon/tag/ruler&pen";
import { useEffect ,useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default function BrandList() {
  
    // const router = useRouter();
    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const params = new URLSearchParams(searchParams);
    // const [dataList , setDataList] = useState(params.get("brand"))
    //   useEffect(()=>{
      
    //         for (const el of document.querySelectorAll(".BrandListItem")) {
    //             el.style.border = "2px solid #f7f7f7"; 
    //             if(dataList){
    //             dataList.split(",").forEach((value) => {
    //                 console.log(value)
    //                 console.log(el.getAttribute("data"))
    //               if(el.getAttribute("data") == value){
    //                 el.style.border = "2px solid #13625c"; 
    //               }
    //               });
    //             }
    //           }
        
       
    // },[dataList])
    // function handleSearch(term) {
    //     const params = new URLSearchParams(searchParams);
    //     if(term != "remove"){
    //         if(params.has("brand")){
    //            if(!params.get("brand").includes(term)){
    //                params.set("brand", `${params.get("brand")},${term}`);
    //            }else{
    //             params.set("brand", `${params.get("brand").replace(`,${term}` ,"").replace(term ,"")}`);
    //            }
    //         }else{
    //            params.set('brand', term);
    //         }
    //         router.push(`${pathname}?${params}`);
    //         setDataList(params.get("brand"))
    //     }else{
    //         router.push(`${pathname}`);
    //         setDataList("")
    //     }
     
    // }
   
  return (
    <div className={style.productPageTop + " rounded-3xl p-3 mb-6 hidden lg:block"}>
        <ul className={style.BrandListBox + " flex gap-5 border-slate-100 border-b pb-3 overflow-auto"}>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max "}>
        <Link  href="/"  className="  py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center min-h-full" >
          
        نمایش همه
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="asus">
        <Link  href="/brand/asus" onClick={() => handleSearch("asus")}  className=" py-2 px-3.5  rounded-2xl w-full flex flex-col justify-center items-center " >
            <Image alt="ASUS" src={"/brand/asus_logo.svg"} className=" max-w-full m-auto  h-[24px] w-max" width={75} height={24}/>
        ایسوس
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="lenovo">
        <Link  href="/brand/lenovo"  className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
        <Image alt="" src={"/brand/lenovo_logo.svg"} className=" max-w-full m-auto  h-[24px] w-max"  width={75} height={24}/>
        لنوو
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="microsoft">
        <Link  href="/brand/microsoft"   className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
        <Image alt="Microsof" src={"/brand/microsoft_logo.svg"}  className=" max-w-full m-auto  h-[24px] w-max" width={75} height={24}/>
        مایکروسافت
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="hp">
            <Link  href="/brand/hp"  className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
            <Image alt="HP" src={"/brand/hp_logo.svg"}  className=" max-w-full m-auto  h-[24px] w-max" width={75} height={24}/>
            اچ پی
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="apple">
            <Link  href="/brand/apple" className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
        <Image alt="Apple" src={"/brand/apple_logo.svg"} className=" max-w-full m-auto  h-[24px] w-max"  width={75} height={24}/>
        اپل
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="samsung">
        <Link href="/brand/samsung" className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
        <Image alt="Samsung" src={"/brand/samsung_logo.svg"} className=" max-w-full m-auto  h-[24px] w-max" width={75} height={24}/>
        سامسونگ
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max BrandListItem"} data="xiaomi">
                <Link href="/brand/xiaomi" className="py-2 px-3.5 rounded-2xl w-full flex flex-col justify-center items-center">
            <Image alt="Xiaomi" src={"/brand/xiaomi_logo.svg"} className=" max-w-full m-auto  h-[24px] w-max" width={75} height={24}/>
            شیائومی
            </Link></li>
    </ul>
    <ul className={style.BrandListBox + " flex  pt-3  gap-5 overflow-auto"} >
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5 rounded-2xl w-full flex  justify-center items-center min-h-full" >
        <span className="ml-1">
          <TickcircleIcon/>
          </span>
        نمایش همه
            </Link></li>
        <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
      
      <span className="ml-1">
      <FlagIcon/>
      </span>
        پرچمدار
            </Link></li>
    
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
        <PercentageSquareIcon/>
        </span>
            اقتصادی
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
           <MoneysIcon/>
           </span>
            میان‌رده
            </Link></li>

            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
           <MedalStarIcon/>
           </span>
            امتیاز بالا
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
           <GameIcon/></span>
            گیمینگ
            </Link></li>
            
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
           <MessageProgrammingIcon/>
           </span>
            برنامه نویسی
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
           <BookSquareIcon/>
           </span>
            دانشجویی
            </Link></li>
            <li  className={style.BrandListItem + " w-[10.5%] min-w-max"}><Link href="" className="py-2 px-3.5  rounded-2xl w-full flex justify-center items-center " >  
            <span className="ml-1">
          <RulerPenIcon/>
          </span>
            مهندسی
            </Link></li>
          
    </ul>
    </div>
  );
}
