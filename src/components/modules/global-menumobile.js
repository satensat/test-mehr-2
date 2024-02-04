"use client";
import { useState } from "react";
import style from "./global-menumobile.module.css";
import Link from "next/link";
import CloseIcon from "@/icon/close";
import ArrowLeftIcon from "@/icon/arrow-left";
import MenuIcon from "@/icon/menu";
import ArrowDownIcon from "@/icon/arrow-down";
import MobileIcon from "@/icon/mobile";
import MonitorIcon from "@/icon/monitor";
export default function MenuMobile() {
  const [activeTab, setActiveTab] = useState("part_main");
  const activeTabHandler = (e) => {
    setActiveTab(e.target.attributes.tab_sub.nodeValue);
  };
  const [menuStatus, setMenuStatus] = useState(false);
  const activeMenu = (e) => {
    setMenuStatus(!menuStatus);
  };
  const [activePrd, setActivePrd] = useState(null);
  const activePrdHandler = (e) => {
    if (e.target.attributes.tab_sub.nodeValue == activePrd) {
      setActivePrd(null);
    } else {
      setActivePrd(e.target.attributes.tab_sub.nodeValue);
    }
  };
  return (
    <>
      <span className={style.header_menu_btn} onClick={activeMenu}>
        <MenuIcon />
      </span>
      {menuStatus && (
        <>
          <div
            className={
              style.mobile_menu_box +
              " mobile_menu_box py-5 " +
              (menuStatus ? " active" : "")
            }
          >
            {activeTab == "part_main" && (
              <div>
                <div
                  tab_sub="part_main"
                  onClick={activeMenu}
                  className={style.main_header_submenu_back}
                >
                  {" "}
                  <span className="ml-2">
                    <CloseIcon />
                  </span>{" "}
                  بستن{" "}
                </div>
                <ul>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">محصولات </Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_product"
                      onClick={activeTabHandler}
                    >
                      <ArrowLeftIcon />
                    </span>
                  </li>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">گارانتی </Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_garanti"
                      onClick={activeTabHandler}
                    >
                      <ArrowLeftIcon />
                    </span>
                  </li>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">خدمات </Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_service"
                      onClick={activeTabHandler}
                    >
                      <ArrowLeftIcon />
                    </span>
                  </li>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">درباره ما </Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_about"
                      onClick={activeTabHandler}
                    >
                      <ArrowLeftIcon />
                    </span>
                  </li>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">تماس با ما</Link>
                  </li>
                  <li className="mb-5 flex w-full  justify-between">
                    <Link href="/">سوالات متداول</Link>
                  </li>
                  <li className="flex w-full  justify-between">
                    <Link href="/">مجله مهر</Link>
                  </li>
                </ul>
              </div>
            )}

            {activeTab == "part_product" && (
              <div >
                <div
                  tab_sub="part_main"
                  onClick={activeTabHandler}
                  className={style.main_header_submenu_back}
                >
                  {" "}
                  <ArrowLeftIcon /> منو اصلی{" "}
                </div>
                <ul className={style.main_header_submenu_level1}>
                  <li className={(activePrd == "part_product_mobile" ? style.activesubmenu : "") +  " flex w-full  justify-between mb-5"}>
                    <Link href=""><MobileIcon/> گوشی موبایل</Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_product_mobile"
                      onClick={activePrdHandler}
                    >
                      <ArrowDownIcon />
                    </span>
                  </li>
                  {activePrd == "part_product_mobile" && (
                    <ul className={style.main_header_submenu_level2}>
                      <li>
                        <Link href="">سامسونگ</Link>
                      </li>
                      <li>
                        <Link href="">اپل</Link>
                      </li>
                    </ul>
                  )}

                  <li className={(activePrd == "part_product_laptop" ? style.activesubmenu : "") +  " flex w-full  justify-between "}>
                    <Link href=""><MonitorIcon/> لپتاپ</Link>
                    <span
                      className={style.mobile_menu_clk}
                      tab_sub="part_product_laptop"
                      onClick={activePrdHandler}
                    >
                      <ArrowDownIcon />
                    </span>
                  </li>
                  {activePrd == "part_product_laptop" && (
                    <ul className={style.main_header_submenu_level2}>
                      <li>
                        <Link href="">سامسونگ</Link>
                      </li>
                      <li>
                        <Link href="">اپل</Link>
                      </li>
                    </ul>
                  )}
                </ul>
              </div>
            )}
            {activeTab == "part_garanti" && (
              <div>
                <div
                  tab_sub="part_main"
                  onClick={activeTabHandler}
                  className={style.main_header_submenu_back}
                >
                  {" "}
                  <ArrowLeftIcon /> منو اصلی{" "}
                </div>
                <ul className={style.main_header_submenu_level1}>
                  <li className="mb-5">
                    <Link href="">استعلام قیمت</Link>
                  </li>
                  <li className="mb-5">
                    <Link href="">دریافت کد رجیستری</Link>
                  </li>
                  <li className="mb-5">
                    <Link href="">نوبت دهی</Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> شرایط گارانتی</Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> ثبت شکایت</Link>
                  </li>
                  <li className="mb-5">
                    <Link href=""> تعرفه خدمات</Link>
                  </li>
                  <li>
                    <Link href=""> نمایندگی گارانتی مهر </Link>
                  </li>
                </ul>
              </div>
            )}
            {activeTab == "part_service" && (
              <div>
                <div
                  tab_sub="part_main"
                  onClick={activeTabHandler}
                  className={style.main_header_submenu_back}
                >
                  {" "}
                  <ArrowLeftIcon /> منو اصلی{" "}
                </div>
                <ul className={style.main_header_submenu_level1}>
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
              </div>
              
            )}
            {activeTab == "part_about" && (
              <div>
                <div
                  tab_sub="part_main"
                  onClick={activeTabHandler}
                  className={style.main_header_submenu_back}
                >
                  {" "}
                  <ArrowLeftIcon /> منو اصلی{" "}
                </div>
                <ul className={style.main_header_submenu_level1}>
                  <li className="mb-5">
                    <Link href="">معرفی شرکت</Link>
                  </li>
                  <li className="mb-5">
                    <Link href="">دستاورد ها</Link>
                  </li>
                  <li>
                    <Link href="">پیام مدیر عامل</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            onClick={activeMenu}
            className={
              style.maskmenu + " maskmenu " + (menuStatus ? " active" : "")
            }
          ></div>
        </>
      )}
    </>
  );
}
