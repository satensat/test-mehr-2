
import CardProductList from "./card-produclist";
import Pagination from "./pagination";
import Image from "next/image";
import style from "./produclist.module.css"
export default function ProductList({data}) {
 if(data.count >0){
  return (
    <>
      <div className="  flex flex-wrap gap-x-[21px]   ">
        {data.results.map((item ,index) => (
         <div className="  w-full  sm:max-w-[48%] xl:max-w-[31.5%] 2xl:w-[23.5%] 3xl:w-[19%] ">
                  <CardProductList key={item.id+index} detail={item}/>
                  </div>
         ))}
        
   
      </div>
      <Pagination count={Math.ceil(data.count / 12)} />
    </>
       
     );
 }else{
  return (
    <>
    <div className={style.notfoundPrdBox + " rounded-3xl shadow-G1 p-6 "}>
    <Image src={"/product/notprd.svg"} width={232} height={184} className="mx-auto mb-7 z-1 relative max-w-44 md:max-w-96"/>
    <p className="font-bold text-center text-sm md:text-lg z-1 relative">محصولی با این مشخصات پیدا نکردیم...</p>
    </div>
    </>
       
     );
 }

}
