import style from "./global-header.module.css";
import Link from "next/link";
import Image from "next/image";
import ArrowLeftIcon from "@/icon/arrow-left";
import SearchIcon from "@/icon/search";
import ArrowDownIcon from "@/icon/arrow-down";
import MenuMobile from "./global-menumobile";
import UserIcon from "@/icon/user";
import MobileIcon from "@/icon/mobile";
import MonitorIcon from "@/icon/monitor";
export default function Header() {
  return (
    <header className={style.main_header_wrap + " px-5 lg:px-10 max-w-[1600px] "}>
     
        <div className={style.main_header_box }>
          <Link href="/" className={style.main_header_logo}>
            <Image
              src={"/logo.svg"}
              width={195}
              height={50}
              alt={"logo mehr trade"}
            />
          </Link>
          <ul className={style.main_header_menu}>
            <li>
              <Link href="/">
                محصولات <ArrowDownIcon />
              </Link>
              <ul className={style.main_header_submenu}>
                <li className={style.main_header_submenu_prd}>
                  <Link href=""><MobileIcon/> گوشی موبایل <ArrowLeftIcon/></Link>
                  <ul className={style.main_header_submenu_level2}>
                    <li>
                      <Link href="">سامسونگ</Link>
                    </li>
                    <li>
                      <Link href="">اپل</Link>
                    </li>
                  </ul>
                </li>
                <li className={style.main_header_submenu_prd}>
                  <Link href=""><MonitorIcon/> لپتاپ <ArrowLeftIcon/></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                گارانتی <ArrowDownIcon />
              </Link>
              <ul className={style.main_header_submenu}>
                <li>
                  <Link href="">استعلام قیمت</Link>
                </li>
                <li>
                  <Link href="">دریافت کد رجیستری</Link>
                </li>
                <li>
                  <Link href="">نوبت دهی</Link>
                </li>
                <li>
                  <Link href=""> شرایط گارانتی</Link>
                </li>
                <li>
                  <Link href=""> ثبت شکایت</Link>
                </li>
                <li>
                  <Link href=""> تعرفه خدمات</Link>
                </li>
                <li>
                  <Link href=""> نمایندگی گارانتی مهر </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                خدمات <ArrowDownIcon />
              </Link>
              <ul className={style.main_header_submenu}>
                  <li className="mb-5">
                    <Link href="">درخواست نمایندگی</Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> نظرسنجی </Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> ثبت شکایت</Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> فرصت های شغلی</Link>
                  </li>
                  <li>
                    <Link href=""> استعلام قیمت</Link>
                  </li>
                </ul>
            </li>
            <li>
              <Link href="/">
                درباره ما <ArrowDownIcon />
              </Link>
              <ul className={style.main_header_submenu}>
                <li>
                  <Link href="">معرفی شرکت</Link>
                </li>
                <li>
                  <Link href="">دستاورد ها</Link>
                </li>
                <li>
                  <Link href="">پیام مدیر عامل</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">تماس با ما</Link>
            </li>
            <li>
              <Link href="/">سوالات متداول</Link>
            </li>
            <li>
              <Link href="/">مجله مهر</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <span className={style.header_search_btn}>
              <SearchIcon />
            </span>
            

            <Link className={style.main_header_btn} href="/">
              <span className={style.main_header_btn_part1} >
                ثبت نام/ ورود <ArrowLeftIcon />
              </span>
              <span className={style.main_header_btn_part2} >
                {" "}
                <UserIcon />
              </span>
            </Link>
            <MenuMobile />
          </div>
        </div>
      
    </header>
  );
}
