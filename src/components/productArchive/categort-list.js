import style from "./categort-list.module.css";
import ArrowDownIcon from "@/icon/arrow-down";
import Link from "next/link";
import MobileIcon from "@/icon/mobile";
import MonitorIcon from "@/icon/monitor";
export default  function CategoryProduct({catData}) {

  
  return (
   <div className={style.product_category_box + " mb-6 p-3"}>
    <ul>
      {
        catData.results.map((item,index)=> 
        <li key={item.slug+"_item"+index} className=" product_sidebar_category_item   w-full cursor-pointer  py-[10px]">
   
          <div className="flex items-center justify-between  ">
            <Link className="flex items-center" href={"/product-category/" + item.slug}>
            {item.slug == "mobile" ? <MobileIcon/>: null }
            {item.slug == "laptop" ? <MobileIcon/> : null}
            {item.slug == "tablet" ? <MonitorIcon/>: null }
                {item.name}
                </Link> 
                {item.sub_categories.length ?  <span className="arrow_category_item"><ArrowDownIcon/></span> : null}
           
               </div>
               {item.sub_categories.length 
                ? <ul className="mt-3">
                   { item.sub_categories.map((subitem,index) =>
                    
                       <li key={subitem.slug+"_item"+index} ><Link className="py-3 px-2 flex" href={"/product-category/" +item.slug+"/"+ subitem.slug}>{subitem.name}</Link></li>
                ) }
                </ul> : null}
        </li> )
      }
      </ul>
   </div>
  );
}
