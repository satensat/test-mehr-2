"use client";
import  { useState } from "react";
import style from "./global-footer-branches.module.css"
import AddressIcon from "@/icon/address";
import RoutingIcon from "@/icon/routing";
import SecurityIcon from "@/icon/security";
import ShopIcon from "@/icon/shop";
import EmailIcon from "@/icon/email";
export default function FooterBranches() {
  const [activeTab, setActiveTab] = useState("part_tehran");
  const activeTabHandler = (e) => {
    setActiveTab(e.target.attributes.tab_sub.nodeValue);
  };

  return (
    <div className={style.footer_branch_box}>
      <ul className={style.footer_branch_tab_names}>
        <li
          className={activeTab == "part_tehran" ? style.active : ""}
          tab_sub="part_tehran"
          onClick={activeTabHandler}
        >
          تهران
        </li>
        <li
          className={activeTab == "part_shiraz" ? style.active : ""}
          tab_sub="part_shiraz"
          onClick={activeTabHandler}
        >
          شیراز
        </li>
        <li
          className={activeTab == "part_esfahan" ? style.active : ""}
          tab_sub="part_esfahan"
          onClick={activeTabHandler}
        >
          اصفهان
        </li>
        <li
          className={activeTab == "part_mashhad" ? style.active : ""}
          tab_sub="part_mashhad"
          onClick={activeTabHandler}
        >
          مشهد
        </li>
      </ul>
      {activeTab == "part_tehran" && 
      <ul className={style.footer_branch_tab_data}>
        <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <EmailIcon/>ایمیل</span> <a  href="mailto:-">voc@mehrtrade.com</a></li>
        <li className="flex items-center"><span className="inline-flex items-center pl-3"> <ShopIcon/>فروش</span><a  href="tel:55">021-4328</a></li>
        <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <SecurityIcon/>گارانتی</span><a href="tel:55">021-43670000</a></li>
        <li className="flex items-center"><span className="inline-flex items-center pl-3"> <RoutingIcon/>کد پستی</span>1594658911</li>
        <li className="flex items-center"><span className="inline-flex items-center pl-3"> <AddressIcon/>آدرس</span>   خیابان ولیعصر - بالاتر از میدان ولیعصر - کوچه شهامتی - پلاک 21</li>
      </ul>
      
      }
      {activeTab == "part_shiraz" &&  
     <ul className={style.footer_branch_tab_data}>
     <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <EmailIcon/>ایمیل</span> <a  href="mailto:-">voc@mehrtrade.com</a></li>
     <li className="flex items-center"><span className="inline-flex items-center pl-3"> <ShopIcon/>فروش</span><a  href="tel:55">021-4328</a></li>
     <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <SecurityIcon/>گارانتی</span><a href="tel:55">021-43670000</a></li>
     <li className="flex items-center"><span className="inline-flex items-center pl-3"> <RoutingIcon/>کد پستی</span>1594658911</li>
     <li className="flex items-center"><span className="inline-flex items-center pl-3"> <AddressIcon/>آدرس</span>   خیابان ولیعصر - بالاتر از میدان ولیعصر - کوچه شهامتی - پلاک 21</li>
   </ul>
     }
      {activeTab == "part_esfahan" &&  
    <ul className={style.footer_branch_tab_data}>
    <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <EmailIcon/>ایمیل</span> <a  href="mailto:-">voc@mehrtrade.com</a></li>
    <li className="flex items-center"><span className="inline-flex items-center pl-3"> <ShopIcon/>فروش</span><a  href="tel:55">021-4328</a></li>
    <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <SecurityIcon/>گارانتی</span><a href="tel:55">021-43670000</a></li>
    <li className="flex items-center"><span className="inline-flex items-center pl-3"> <RoutingIcon/>کد پستی</span>1594658911</li>
    <li className="flex items-center"><span className="inline-flex items-center pl-3"> <AddressIcon/>آدرس</span>   خیابان ولیعصر - بالاتر از میدان ولیعصر - کوچه شهامتی - پلاک 21</li>
  </ul>
      }
      {activeTab == "part_mashhad" && 
      <ul className={style.footer_branch_tab_data}>
      <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <EmailIcon/>ایمیل</span> <a  href="mailto:-">voc@mehrtrade.com</a></li>
      <li className="flex items-center"><span className="inline-flex items-center pl-3"> <ShopIcon/>فروش</span><a  href="tel:55">021-4328</a></li>
      <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <SecurityIcon/>گارانتی</span><a href="tel:55">021-43670000</a></li>
      <li className="flex items-center"><span className="inline-flex items-center pl-3"> <RoutingIcon/>کد پستی</span>1594658911</li>
      <li className="flex items-center"><span className="inline-flex items-center pl-3"> <AddressIcon/>آدرس</span>   خیابان ولیعصر - بالاتر از میدان ولیعصر - کوچه شهامتی - پلاک 21</li>
    </ul>
       }
    </div>
  );
}
