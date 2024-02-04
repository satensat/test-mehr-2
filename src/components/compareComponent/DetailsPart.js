"use client"
import React from "react";
import OneDetail from "./OneDetail";

export default function DetailsPart({detail}) {


  const featureEntries = Object.entries(detail[0]?.fields_info.feature_based);
  console.log(featureEntries)
  
  return (
    <div className="bg-[#F7F7F7] flex flex-col rounded-3xl    ">
       {/* {
            detail.length > 0  ? 
            featureEntries.map((item ,index) => (
              <CompareCard detail={item} />
            )) : ""
             } */}
               
      { featureEntries?.map((item ,index)=> (
      <OneDetail subject={item[0]} seri={item[1]} data={detail} key={index}/> 
       
      ))}
     

    </div>
  );


}
