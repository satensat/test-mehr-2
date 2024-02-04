
import style from "./global-footer.module.css";
import Link from "next/link";
import Image from "next/image";
import GlobalIcon from "@/icon/global";
import ArrowDownIcon from "@/icon/arrow-down";
import Newsletter from "@/icon/newsletter";
export default function Footer() {
  return (


 <footer  className={style.main_footer_box }>
    <div className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
    <div className={style.footer_wrap + " flex flex-row justify-between flex-wrap lg:flex-nowrap  lg:space-x-5  lg:space-x-reverse"}>
<div className="basis-1/2 lg:basis-2/12 mb-4 lg:mb-0">
    <h4 className={style.footer_menu_sub}>درباره ما</h4>
<ul className={style.footer_menu_list }>
    <li>
        <Link href="">دستاورد ها</Link>
    </li>
    <li>
        <Link href="">معرفی شرکت</Link>
    </li>
    <li>
        <Link href="">پیام مدیر عامل</Link>
    </li>
    <li>
        <Link href="">پنل مشتریان گارانتی</Link>
    </li>
    <li>
        <Link href="">پنل همکاران</Link>
    </li>
</ul>
</div>
<div className="basis-1/2 lg:basis-2/12 mb-4 lg:mb-0">
<h4 className={style.footer_menu_sub}>درباره ما</h4>
<ul className={style.footer_menu_list}>
    <li>
        <Link href=""> نظرسنجی</Link>
    </li>
    <li>
        <Link href="">ثبت شکایت</Link>
    </li>
    <li>
        <Link href="">درخواست نمایندگی</Link>
    </li>
    <li>
        <Link href="">فرصت های شغلی</Link>
    </li>
    <li>
        <Link href="">استعلام قیمت</Link>
    </li>
</ul>
</div>
<div className="basis-1/2 lg:basis-2/12 mb-4 lg:mb-0">
<h4 className={style.footer_menu_sub}>درباره ما</h4>
<ul className={style.footer_menu_list}>
    <li>
        <Link href="">نوبت دهی</Link>
    </li>
    <li>
        <Link href="">شرایط گارانتی</Link>
    </li>
    <li>
        <Link href="">راهنمای فعالسازی </Link>
    </li>
   
</ul>
</div>
<div className="basis-1/2 lg:basis-2/12 mb-4 lg:mb-0">
<h4 className={style.footer_menu_sub}>درباره ما</h4>
<ul className={style.footer_menu_list}>
    <li>
        <Link href="">تماس با ما</Link>
    </li>
    <li>
        <Link href="">سوالات پرتکرار</Link>
    </li>
    <li>
        <Link href="">مجله مهر</Link>
    </li>
  
</ul>
</div>
<div className="basis-full lg:basis-4/12 mb-4 lg:mb-0 lg:order-none order-first">

   <form className={style.newsletters_footer_box}>
    <label>ایمیل</label>
    <input type="email" placeholder="Mehruser@gmail.com"></input>
   <button>عضویت در خبرنامه
    <Newsletter/>
   </button>
   </form>
   <div className={style.select_lang_box}>
  
      <div className={style.selected_lang_box}>  <GlobalIcon/>فارسی  <ArrowDownIcon/></div>
     <ul > 
        <li>
            <a href="">فارسی</a>
        </li>
        <li>
            <a href="">English</a>
        </li>
     </ul>
   </div>
</div>
   </div>
  
        </div>
   
    <div className={style.footer_copyright_wrap}>
           <div className="px-5 lg:px-10 max-w-[1600px] mx-auto  py-3">
        <p>
    این وبسایت متعلق به شرکت مهر سرمستان میباشد و کلیه حقوق مادی و معنوی ان محفوظ است
    </p>
        </div>
 </div>
 </footer>



  )
}
