
import style from "./card-blog.module.css";
import Link from "next/link";
import ArrowLeftIcon from "@/icon/arrow-left";
import Image from "next/image";
export default function BlogCard() {
  return (
  <div className={style.blog_card_box}>
    <span  className={style.blog_card_bage_new}>جدید</span>
 <Link className={style.blog_card_img} href="/">
      
       <Image
              className="m-auto"
              src={"/home/blog1.jpg"}
              width={156}
              height={162}
              alt={"mehr trade"}
            />
    </Link>
  
    
    <h2 className={style.blog_card_title}>
   معرفی بهترین
    </h2>
    <p>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
نعت چاپ، و با استفاده از طراحان گرافیک است، 
    </p>
    <Link className={style.blog_card_btn}  href="/">مشاهده ادامه مطلب <ArrowLeftIcon/></Link>
  </div>
  )
}
