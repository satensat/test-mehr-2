
import style from  "./section-cta.module.css";
import Image from "next/image";
import ArrowLeftIcon from "@/icon/arrow-left";
export default function CtaSection() {
  return (
    <div className={style.section_cta_box}>
        <div className="px-5 lg:px-10 max-w-[1600px] mx-auto  py-4">
             <Image className="ml-3"  src={"/home/ctaimg.png"} width={20} height={24} alt={"mehr trade"}/>
             <p>قرعه کشی جشنواره یلدا مهر سرمستان</p>
             <span className="pr-3"><ArrowLeftIcon/></span>
        </div>
    </div>
  )
}