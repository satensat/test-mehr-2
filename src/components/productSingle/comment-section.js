
"use client"
import Comment from "@/icon/comment";
import Star from "@/icon/star";
import LikeIcon from "@/icon/like";
import LikeTagIcon from "@/icon/likeTag";
import ProductCommentForm from "./comment-form";
import Image from "next/image";
import style from "./comment-section.module.css"

export default function CommentProduct({comments ,slug}) {
 
  
  return (
 <>
<div>
<span
        id="comments"
        className="block translate-y-[-70px] md:translate-y-[-110px] "
      ></span>
<div className="rounded-3xl shadow-G1 p-3  ">
   
    <div className="flex justify-between pb-3 border-slate-200 border-b mb-3 items-center ">
        <span className="font-bold  text-base ">
        نظرات و امتیازات کاربران
        </span>
       
        <ProductCommentForm slug={slug} type={"main"}/>
    </div>
    <ul>
   {comments.length == 0 ? 
   <div className={style.commentsEmptyBox + " shadow-G1 bg-white rounded-3xl p-3 "}>
    <Image src="/single-product/notFound.svg" width={100} height={88} className="m-auto relative z-[2]"/>
    <p className="font-bold text-center  text-[#3B3B3B] my-7 text-base relative z-[2]">
    هنوز هیچ نظری برای این محصول ثبت نشده است, اولین نفر باشید!
    </p>
   <div className="flex justify-center ">
   <ProductCommentForm slug={slug} type={"main"}/>
   </div>
   </div>
   :   comments.map(item => (
       <li className="shadow-G1 bg-[#F7F7F7] rounded-2xl mb-6 p-3 text-gray-500">
       <div className="flex justify-between  border-slate-200 border-b pb-3 flex-wrap md:flex-nowrap ">
           <div className="items-center flex w-full md:w-auto justify-between md:justify-start md:mb-0 mb-3">
           <span className="font-bold text-gray-700 pl-3 border-l-stone-300 md:border-l py-2">
          {item.name}
           </span>
           <span className="flex-col flex pr-3 ">
           <span className="font-bold  text-xs pb-1.5">
           امتیاز داده شده
           </span>
           <span className="text-gray-700 text-base">
           {item.score}
            از 5
           </span>
        
           </span>
           </div>
    
           <div className="flex items-center ml-auto mr-0 md:mr-3 w-1/2 md:w-auto">
           {[...Array(5)].map((star, index) => {
 
if(index < item.score){
  return (
    
    <span className="mx-0.5 md:mx-1">
    <Star fill="#f5a800"/>
    </span>
  );
}else{
  return (
    <span className="mx-0.5 md:mx-1">
    <Star/>
    </span>
  );
}
  
})}
           </div>
           <div className="flex items-center w-1/2 md:w-auto justify-end">
          
           <div className="flex items-center" >
           <LikeTagIcon/>
         <span className="flex-col flex mr-2 text-center">
         <span className="font-bold  text-xs pb-1.5">
           پسندیده شده
           </span>
           <span className="text-gray-700 text-base">
           {item.rate} از 5
           </span>
         </span>
           
           </div>
           <span className="bg-mainGreen1 inline-flex rounded-2xl mr-1 md:mr-4 md:p-2.5 p-1.5">
         <LikeIcon/>
         </span>
           </div>
       </div>
       <p className="py-3 leading-relaxed">
        {item.text}
       </p>
       <ProductCommentForm slug={slug} type={"reply"} id={item.id}/>
      
       <ul>
  
</ul>
   </li>

      ))}
    
       
        {/* <li className="shadow-G1 bg-[#F7F7F7] rounded-2xl  p-3 text-gray-500">
            <div className="flex justify-between  border-slate-200 border-b pb-3 flex-wrap md:flex-nowrap ">
                <div className="items-center flex w-full md:w-auto justify-between md:justify-start md:mb-0 mb-3">
                <span className="font-bold text-gray-700 pl-3 border-l-stone-300 md:border-l py-2">
                اسم کاربر
                </span>
                <span className="flex-col flex pr-3 ">
                <span className="font-bold  text-xs pb-1.5">
                امتیاز داده شده
                </span>
                <span className="text-gray-700 text-base">
                4 از 5
                </span>
                </span>
                </div>

                <div className="flex items-center ml-auto mr-0 md:mr-3 w-1/2 md:w-auto">
                  <span className="mx-0.5 md:mx-1">
                  <Star/>
                  </span>
                  <span className="mx-0.5 md:mx-1">
                  <Star/>
                  </span>
                  <span className="mx-0.5 md:mx-1">
                  <Star/>
                  </span>
                  <span className="mx-0.5 md:mx-1">
                  <Star/>
                  </span>
                  <span className="mx-0.5 md:mx-1">
                  <Star/>
                  </span>
                </div>
                <div className="flex items-center w-1/2 md:w-auto justify-end">
               
                <div className="flex items-center" >
                <LikeTagIcon/>
              <span className="flex-col flex mr-2 text-center">
              <span className="font-bold  text-xs pb-1.5">
                پسندیده شده
                </span>
                <span className="text-gray-700 text-base">
                4 از 5
                </span>
              </span>
                
                </div>
                <span className="bg-mainGreen1 inline-flex rounded-2xl mr-1 md:mr-4 md:p-2.5 p-1.5">
              <LikeIcon/>
              </span>
                </div>
            </div>
            <p className="py-3 leading-relaxed">
            لپ‌تاپ‌ها یکی از بهترین محصولات کامپیوتری بودند که در سال‌های اخیر بسیار پیشرفته‌تر و جذاب‌تر شده‌اند. با داشتن یک لپ‌تاپ در بسیاری از مواقع دیگر نیازی به سیستم‌های کامپیوتری نخواهید داشت و کامپیوتر شما همیشه همراهتان خواهد بود. دنیای لپ‌تاپ‌ها بسیار وسیع است و صدها مدل از این دستگاه‌ها در بازار وجود دارد. این لپ‌تاپ‌ها یکی از بهترین محصولات کامپیوتری بودند که در سال‌های اخیر بسیار پیشرفته‌تر و جذاب‌تر شده‌اند. با داشتن یک لپ‌تاپ در بسیاری از مواقع دیگر نیازی به سیستم‌های کامپیوتری نخواهید داشت و کامپیوتر شما همیشه همراهتان خواهد بود. دنیای لپ‌تاپ‌ها بسیار وسیع است و صدها مدل از این دستگاه‌ها در بازار وجود دارد. این 
            </p>
            <button className="flex justify-center items-center mt-3 bg-white h-8 min-w-24 rounded-xl block m-auto font-bold border-mainGreen1 border text-mainGreen1 ">
                پاسخ
                <span className="mr-1">
                <MessageAdd/>
                </span>
            </button>
            <ul>
        <li className="shadow-G1 bg-[#E6E6E6] rounded-2xl  p-3 text-gray-500 mt-6">
            <div className="flex justify-between  border-slate-300 border-b pb-3">
                <div className="items-center flex">
                <span className="font-bold text-gray-700 pl-3">
                اسم کاربر
                </span>
               
                </div>

           

                <div>
              <span className="bg-mainGreen1 inline-flex rounded-2xl p-2.5">
              <LikeIcon/>
              </span>
                </div>
            </div>
            <p className="py-3 leading-relaxed">
            لپ‌تاپ‌ها یکی از بهترین محصولات کامپیوتری بودند که در سال‌های اخیر بسیار پیشرفته‌تر و جذاب‌تر شده‌اند. با داشتن یک لپ‌تاپ در بسیاری از مواقع دیگر نیازی به سیستم‌های کامپیوتری نخواهید داشت و کامپیوتر شما همیشه همراهتان خواهد بود. دنیای لپ‌تاپ‌ها بسیار وسیع است و صدها مدل از این دستگاه‌ها در بازار وجود دارد. این لپ‌تاپ‌ها یکی از بهترین محصولات کامپیوتری بودند که در سال‌های اخیر بسیار پیشرفته‌تر و جذاب‌تر شده‌اند. با داشتن یک لپ‌تاپ در بسیاری از مواقع دیگر نیازی به سیستم‌های کامپیوتری نخواهید داشت و کامپیوتر شما همیشه همراهتان خواهد بود. دنیای لپ‌تاپ‌ها بسیار وسیع است و صدها مدل از این دستگاه‌ها در بازار وجود دارد. این 
            </p>
            
        </li>
    </ul>
        </li> */}
    </ul>
</div>
</div>
 </>
    
  );
}
