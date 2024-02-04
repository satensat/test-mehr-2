import style from "./global-prefooter.module.css";
import FooterBranches from "./global-footer-branches";
import Link from "next/link";
import Instagram from "@/icon/instagran";
import Aparat from "@/icon/aparat";
import Telegram from "@/icon/telegram";
import ArrowLeftIcon from "@/icon/arrow-left";
import Image from "next/image";
export default function PreFooter() {
  return (
    <div className={style.prefooter_Wrapper + " px-5 lg:px-10 max-w-[1600px] mx-auto flex flex-row flex-wrap  lg:space-x-5  lg:space-x-reverse  lg:flex-nowrap  "}>
      <div className="w-full basis-full lg:basis-1/2 mb-5 lg:mb-0">
        <FooterBranches />
      </div>
      <div className="w-full  basis-full lg:basis-1/2 flex-col-reverse flex lg:block">
        <div className={style.prefooter_Introduction_box }>
          <div className="flex justify-between items-center">
            <span>
            <Image src={"/logo.svg"} width={195} height={50} alt={"logo mehr trade"} />
            </span>
            <span>
            <Image
              className="m-auto"
              alt="mehr trade"
              src={"/home/achivements.svg"}
              width={300}
              height={64}
            />
             </span>
           
           
          </div>
          <p>
            بازرگانی مهر از سال 1382 در زمینه واردات انواع تجهیزات آی تی به ویژه
            لپ تاپ، نوت بوک، تبلت و موبایل در کشور فعال است. تعهد، پشتکار و
            همگام بودن با مشتریان ، بازرگانی مهر را به عنوان یک نام در سطح اول
            توزیع تجهیزات it در کشور مطرح نموده است. ما تلاش می‌کنیم تا بهترین
            خدمات را در اختیار مشتریان عزیز سراسر کشور قرار دهیم. همیشه سعی‌
            نموده‌ایم با بدست‌آوردن درک بهتری از بازار ، بهترین اجناس از ...
          </p>
          <Link className={style.prefooter_Introduction_btn} href="/">
            درباره مهر <ArrowLeftIcon />
          </Link>
        </div>
        <div className={style.prefooter_social_box + " mb-5 lg:mb-0"}>
          <p>خبر‌ها و مطالب جدید در شبکات اجتماعی مهر</p>
          <ul className={style.prefooter_social_list}>
            <li>
              <a href="">
                <Aparat />
              </a>
            </li>
            <li>
              <a href="">
                <Telegram />
              </a>
            </li>
            <li><a href=""><Instagram/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
