import style from "./section-service.module.css";
import Link from "next/link";
import ServiceCard from "./card-service";
import ServiceIcon1 from "@/icon/service1";
import ServiceIcon2 from "@/icon/service2";
import ServiceIcon3 from "@/icon/service3";
import ServiceIcon4 from "@/icon/service4";
import ServiceIcon from "@/icon/service";
import ArrowLeftIcon from "@/icon/arrow-left";
export default function ServiceSection() {
  return (
    <section className={style.section_service_box}>
      <div className="px-5 lg:px-10 max-w-[1600px] mx-auto">
        <div
          className={
            style.service_title_box + " flex justify-center items-center mb-5"
          }
        >
        <ServiceIcon/>
          <h4>خدمات آنلاین گارانتی</h4>
          <Link className="hidden md:flex" href="/">مشاهده سایر خدمات
          <ArrowLeftIcon/>
          </Link>
          <Link className="flex md:hidden" href="/"> سایر
          <ArrowLeftIcon/>
          </Link>
        </div>

        <div className="flex flex-row justify-between flex-wrap lg:flex-nowrap  lg:space-x-5  lg:space-x-reverse ">
          <div
            className={
              style.serviceCardWrap + " basis-1/2 lg:basis-1/4 mb-4 lg:mb-0"
            }
          >
            <ServiceCard title="استعلام اصالت گارانتی">
              {" "}
              <ServiceIcon1 />{" "}
            </ServiceCard>
          </div>
          <div
            className={
              style.serviceCardWrap + " basis-1/2 lg:basis-1/4 mb-4 lg:mb-0"
            }
          >
            <ServiceCard title="استعلام اصالت گارانتی">
              <ServiceIcon2 />
            </ServiceCard>
          </div>
          <div
            className={
              style.serviceCardWrap + " basis-1/2 lg:basis-1/4 mb-4 lg:mb-0"
            }
          >
            <ServiceCard title="نوبت دهی آنلاین">
              <ServiceIcon3 />
            </ServiceCard>
          </div>
          <div className={style.serviceCardWrap + " basis-1/2 lg:basis-1/4 mb-4 lg:mb-0"}>
            <ServiceCard title="دریافت کد رجیستری">
              <ServiceIcon4 />
            </ServiceCard>
          </div>
        </div>
      </div>
    </section>
  );
}
