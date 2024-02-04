import React from "react";
import Card from "./Card";

export default function CardsAboutUs() {
  const data = [
    {
      id: 1,
      title: "معرفی شرکت",
      content:
        "شرکت خدماتی و تجاری مهر سرمستان از سال 1382 فعالیت خود را در حوزه واردات تجهیزات آی‌تی با محوریت قطعات آغاز کرد و به مرور وارد حوزه لپتاپ، نوت بوک، موبایل و تبلت شد. مهر با در نظر گرفتن چهار اصل اساسی سعی بر بهبود خدمات خود داشته است...",
      background: "bg-white-garadient-card-aboutus",
      image: "/about-us/office-buildings-card.webp",
      imageCss:"bg-[url('/about-us/office-buildings-card.webp')]",
      titleColor: "text-mainGreen1",
      textColor: "text-[#525252]",
      hrefAddress: "/about-us/introduction",
    },
    {
      id: 2,
      title: "جوایز و دستاورد‌ها",
      content:
        "شرکت خدماتی و تجاری مهر سرمستان توانسته است با رعایت حقوق مصرف کنندگان و تلاش همیشگی برای ارتقای کالا و خدمات خود برای کسب اعتماد شرکای تجاری و مصرف کنندگان نهایی به دستاوردهای مختلفی طی سالیان گذشته دست پیدا کند.",
      background: "bg-black-garadient-card-aboutus",
      image: "/about-us/awards-card.webp",
      imageCss:"bg-[url('/about-us/awards-card.webp')]",
      titleColor: "text-[#F7F7F7]",
      textColor: "text-[#CCC]",
      hrefAddress: "/about-us/awards",
    },
    {
      id: 3,
      title: "درباره مدیریت",
      content:
        " “بر این باوریم تا در فضای رقابتی و پر چالش کنونی حاکم بر این حوزه، پیشرفت سازمان در گرو رضایت مشتریان بوده و همواره سعی می‌شود تا تمامی اولویت‌ها، تصمیمات خلاقانه مدیریتی، مقاصد و اهداف سازمانی به سمت الزامات، نیازها و خواسته‌های مشتریان سوق یابد”",
      background: "bg-black-garadient-card-aboutus",
      image: "/about-us/management-card.webp",
      imageCss:"bg-[url('/about-us/management-card.webp')]",
      titleColor: "text-[#F7F7F7]",
      textColor: "text-[#CCC]",
      hrefAddress: "/about-us/management",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row gap-3 py-3">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          content={item.content}
          background={item.background}
          image={item.image}
          imageCss={item.imageCss}
          titleColor={item.titleColor}
          textColor={item.textColor}
          hrefAddress={item.hrefAddress}
        />
      ))}
    </div>
  );
}
