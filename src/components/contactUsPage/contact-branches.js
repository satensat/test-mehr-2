
  
  "use client";
import  { useState } from "react";
import style from "./conatct-header-top.module.css"
import AddressIcon from "@/icon/address";
import RoutingIcon from "@/icon/routing";
import SecurityIcon from "@/icon/security";
import ShopIcon from "@/icon/shop";
import EmailIcon from "@/icon/email";
export default function ContactUsBranches() {
  const [activeTab, setActiveTab] = useState("part_tehran");
  const activeTabHandler = (e) => {
    setActiveTab(e.target.attributes.tab_sub.nodeValue);
  };

  return (
    <div className={style.footer_branch_box + " flex flex-wrap px-3 pb-3 "} >
      <div className="w-full md:w-[60%]">
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
        <li className={style.hasBorder +  " flex items-center"}><span className="inline-flex items-center pl-3"> <EmailIcon/>ایمیل</span> <a  href="mailto:-">voc@mehrtrade.com2</a></li>
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
      <div className="w-full md:w-[40%] mt-3 rounded-3xl overflow-hidden ">
      {activeTab == "part_tehran" &&  <div style={{width: 100+"%"}}><iframe width="100%" height="350" frameBorder="0" scrolling="no" marginآeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Iran%20,%20tehran%20,%20valiasr%20,%20shahamati%20+(MehrTrade)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>}
      {activeTab == "part_shiraz" &&  <div style={{width: 100+"%"}}><iframe width="100%" height="350" frameBorder="0" scrolling="no" marginآeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Iran%20,%20tehran%20,%20valiasr%20,%20shahamati%20+(MehrTrade)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>}
      {activeTab == "part_esfahan" &&  <div style={{width: 100+"%"}}><iframe width="100%" height="350" frameBorder="0" scrolling="no" marginآeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Iran%20,%20tehran%20,%20valiasr%20,%20shahamati%20+(MehrTrade)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div> }
      {activeTab == "part_mashhad" &&  <div style={{width: 100+"%"}}><iframe width="100%" height="350" frameBorder="0" scrolling="no" marginآeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Iran%20,%20tehran%20,%20valiasr%20,%20shahamati%20+(MehrTrade)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>}
       
      </div>
    </div>
  );
}
