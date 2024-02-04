import style from "./section-agency.module.css";
import AgencyCard from "./card-agency";
import Link from "next/link";
import AgencyIcon1 from "@/icon/agency1";
import AgencyIcon2 from "@/icon/agency2";
import AgencyIcon3 from "@/icon/agency3";
import WalletCheckIcon from "@/icon/wallet-check";
import ArrowLeftIcon from "@/icon/arrow-left";
export default function AgencySection() {
  return (
    <section className={style.section_agency_box}>
      <div className="px-5 lg:px-10 max-w-[1600px] mx-auto">
        <div
          className={
            style.section_agency_title +
            " flex justify-center items-center mb-5"
          }
        >
          <WalletCheckIcon />
          <h4>همکاری با مهر</h4>
          

          <Link className="hidden md:flex" href="/">مشاهده سایر خدمات
          <ArrowLeftIcon/>
          </Link>
          <Link className="flex md:hidden" href="/"> سایر
          <ArrowLeftIcon/>
          </Link>
        </div>


        <div className="flex flex-row flex-wrap md:flex-nowrap md:space-x-5  md:space-x-reverse">
          <div className="w-full md:basis-1/3 mb-4 md:mb-0">
            <AgencyCard title=" دریافت نمایندگی فروش">
              <AgencyIcon1 />
            </AgencyCard>
          </div>
          <div className="w-full md:basis-1/3 mb-4 md:mb-0">
            <AgencyCard title=" دریافت نمایندگی خدمات پس از فروش">
              <AgencyIcon2 />
            </AgencyCard>
          </div>
          <div className="w-full md:basis-1/3 ">
            <AgencyCard title="لیست نمایندگان مهر">
              <AgencyIcon3 />
            </AgencyCard>
          </div>
        </div>
      </div>
    </section>
  );
}
