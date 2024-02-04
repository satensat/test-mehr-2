import React from "react";
import styles from "./styles.module.css";

export default function MessageManagement() {
  return (
    <div className="p-0 md:py-3 font-costumFaNum">
      <div
        className={
          "p-3 px-4 flex flex-col gap-3 bg-mainGreen1 rounded-3xl " +
          styles.container
        }
      >
        <span
          id="details"
          className="translate-y-[-40px] md:translate-y-[-70px]"
        ></span>
        <div className="text-right text-lg not-italic font-bold leading-8 text-[#F7F7F7] pb-1 ">
          پیام مدیر عامل
        </div>
        <div className="text-right text-sm not-italic font-normal leading-7 text-[#FDFDFD]">
          <p className="text-justify">
            با توجه به پیشرفت روز افزون تکنولوژی و فناوری و اهمیت بالای
            بهره‌مندی از ظرفیت‌های رشد و توسعه که زمینه‌ساز شکوفا شدن یک جامعه
            مدرن می‌باشد، تأمین و توزیع کالاها و تجهیزات IT به ویژه موبایل و
            لپتاپ با برند اصل و معتبر که شایسته شأن ایرانیان عزیز می‌باشد همواره
            از دغدغه‌های همیشگی اینجانب بوده و خداوند متعال را شاکرم که پس از
            گذشت دو دهه از فعالیت خانواده مهر سرمستان با تلاش‌ فراوان و کوشش
            مستمر اینک توانسته‌ایم سهم گسترده‌ای از بازار تجهیزات IT کشور
            عزیزمان ایران را کسب نماییم. بر این باوریم تا در فضای رقابتی و پر
            چالش کنونی حاکم بر این حوزه، پیشرفت سازمان در گرو رضایت مشتریان بوده
            و همواره سعی می‌شود تا تمامی اولویت‌ها، تصمیمات خلاقانه مدیریتی،
            مقاصد و اهداف سازمانی به سمت الزامات، نیازها و خواسته‌های مشتریان
            سوق یابد و در راستای این مهم با پایه‌گذاری خلق ارزش مشترک، بهبود
            مستمر و ارتقای نظام کیفیت فراگیر، زیربنای یکپارچه خدمات پس از فروش
            را با عنوان &quot;گارانتی مهر&quot; نوآورانه و ارزشمند طراحی نموده و
            آن را جهت رضایت حال مشتریان ارائه می‌نماییم.
          </p>
          <p className="text-justify">
            امید است با عنایت بر خداوند بزرگ و با وجود تلاش، همدلی، انگیزه و
            انسجام کامل درونی همچون گذشته استوار در مسیر رشد، تعالی و بهره‌وری
            روز افزون قدم نهاده و همواره افتخار کسب اعتماد مشتریان و ارائه خدمت
            به آنان را داشته باشیم. سرمایه ما مشاهده حال خوب تمام ایرانیان عزیز
            است و قطعا ما در جایگاه خود برای این امر تلاش خواهیم کرد.
          </p>
          <p className="pt-4">
            و در پایان نور مهر و امید خداوند بر شما تابنده تر از همیشه
          </p>
        </div>
        <div>
          <ul className="list-disc pr-5">
            <li className="text-right text-sm not-italic font-extrabold leading-6 text-mainYellow">
              عابد کرمی، مدیریت شرکت خدماتی و تجاری مهر سرمستان
            </li>
          </ul>
        </div>
        <div className="pt-2 md:pt-4">
          <div className={styles.h_iframe_aparat_embed_frame}>
            <span style={{ display: "block", paddingTop: "57%" }}></span>
            <iframe
              className="rounded-2xl"
              src="https://www.aparat.com/video/video/embed/videohash/BPntm/vt/frame"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

//////   `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.
