"use client";
import { useEffect } from "react";
export default function ActionList() {
  useEffect(()=>{

    document.querySelector(".product_card_description_btn").addEventListener("click", function () {
         document.querySelector(".product_description_content").classList.add("active")
         document.querySelector(".product_card_description_btn").classList.add("disable")
         
    });
    
    // +++++++++++++++++++++
    for (const el of document.querySelectorAll(".closeFilterBox")) {
      el.addEventListener("click", function (e) {
        document.querySelector("#mainSideBar").classList.remove("block")
        document.querySelector("#mainSideBar").classList.add("hidden")
      });
    }
    // +++++++++++++++++++++
    for (const el of document.querySelectorAll(".product_sidebar_property_item")) {
      el.addEventListener("click", function (e) {
        e.target.classList.toggle("active")
      });
    }
 // +++++++++++++++++++++
 for (const el of document.querySelectorAll(".arrow_category_item")) {
  el.addEventListener("click", function (e) {
    e.target.parentNode.parentNode.classList.add("active")
  });
}
    
  })
 
}
