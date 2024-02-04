import style from "./section-benefit.module.css";
import BenefitCard from "./card-benefit";
import BenefitIcon1 from "@/icon/benefit1";
import BenefitIcon2 from "@/icon/benefit2";
import BenefitIcon3 from "@/icon/benefit3";
import BenefitIcon4 from "@/icon/benefit4";
import BenefitIcon5 from "@/icon/benefit5";
import BenefitIcon6 from "@/icon/benefit6";
export default function BenefitSection() {
  return (
    <section className={style.section_benefit_box}>
      <div>

        <div className={style.section_benefit_title + " mb-3 md:mb-5 pb-1"}>
          <h4>مزایای گارانتی مهر</h4>
          <p>چرا گارانتی مهر را انتخاب میکنند؟</p>
        </div>
        <div className="px-5 lg:px-10 max-w-[1600px] mx-auto  flex justify-between flex-row flex-wrap xl:flex-nowrap xl:space-x-4  xl:space-x-reverse">
          <div className="basis-1/2 lg:basis-4/12  xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="دسترسی راحت به شعب خدمات">
              <BenefitIcon1 />
            </BenefitCard>
          </div>
          <div className="basis-1/2 lg:basis-4/12 xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="سرعت عمل در ارائه خدمات پس از فروش">
              <BenefitIcon2 />
            </BenefitCard>
          </div>
          <div className="basis-1/2 lg:basis-4/12 xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="ارائه خدمات متعدد دیجیتال">
              <BenefitIcon3 />
            </BenefitCard>
          </div>
          <div className="basis-1/2 lg:basis-4/12 xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="امانت داری در بستری مورد اعتماد">
              <BenefitIcon4 />
            </BenefitCard>
          </div>
          <div className="basis-1/2 lg:basis-4/12 xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="کیفیت بالا و بروزترین متد تعمیرات">
              <BenefitIcon5 />
            </BenefitCard>
          </div>
          <div className="basis-1/2 lg:basis-4/12 xl:basis-2/12 mb-4 xl:mb-0">
            <BenefitCard title="مشتری مداری و تکریم کاربران">
              <BenefitIcon6 />
            </BenefitCard>
          </div>
        </div>
      </div>
    </section>
  );
}
