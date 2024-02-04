"use client";
import EmptyComparePart from "@/components/compareComponent/EmptyComparePart";
import FullComparePart from "@/components/compareComponent/FullComparePart";
import BlogSection from "@/components/modules/section-blog";
import React, { useState  , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
export default function ComparePage({ params, searchParams }) {
     // Redox values ​​for the number and IDs of the selected products ///////////////
  const compareValue = useSelector((state) => state.counter.value); 
  const compareCount = useSelector((state) => state.counter.count); 
  // Fetch data of selected products ///////////////
  const [dataDetail ,setDataDetail] = useState([])
  useEffect(()=>{
    
    async function fetchData() {
      try {
        const myDataQ = await fetch(`http://192.168.10.195:8090/v1/api/products/compare/?id_list=${compareValue}`,
          { cache: 'no-store' }
        );
    console.log( myDataQ)
   
    if(myDataQ.status == 200){
      const test = await myDataQ.json()
      setDataDetail(test)
      console.log(test)
    }
        // return  { detail : await myDataQ.json() , status :   myDataQ.status };
      
      } catch {
        return ""
      }
    }
    
     fetchData()
   
  },[compareCount])
  return (
    <section className="w-full flex flex-col px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
       
            
      {/* <EmptyComparePart /> */}
      <FullComparePart detail={dataDetail} />
      <BlogSection/>
    </section>
  );
}
