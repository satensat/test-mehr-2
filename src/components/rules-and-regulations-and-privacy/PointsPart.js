import React from "react";
import Point from "./Point";

export default function PointsPart() {
  const data = [
    {
      title: "1- درباره وبسایت",
      content: [
        "1-1 به سایت شرکت خدماتی و تجاری مهر سرمستان خوش آمدید. این وبسایت این فرصت را برای شما فراهم می‌کند که از میان تعداد متنوعی از کالاها/ خدمات که برای فروش عمده از طریق وبسایت فهرست‌بندی شده‌اند به جستجو و خرید بپردازید. وبسایت این خدمات را به وسیله اعطای دسترسی شما به محتوای وبسایت فراهم می‌کند",
        "2-1 این وبسایت به وسیله شرکت خدماتی و تجاری مهر سرمستان مدیریت می‌شود و در هر کجا که از اصطلاح ما استفاده شده است منظور این شرکت است.هر کچا که از اصطلاح سایت یا وبسایت استفاده شود منظور وبسایت این شرکت است. دسترسی و استفاده از وبسایت و هر نوع از کالاها و خدمات خریداری شده به وسیله این شرکت فراهم می‌شود. از شما خواهشمندیم که این ضوابط و مقررات را با دقت بخوانید. استفاده از این وبسایت و یا خرید یکی از محصولات یا خدمات آن نشان می‌دهد که شما پذیرفته‌اید که به واسطه قبول این شرایط و ضوابط محدودیت‌هایی داشته باشید. متقابلا اگر این شرایط را نپذیرید به این معناست که از وبسایت و خدمات آن استفاده نخواهید کرد. اگر شما با این شرایط و ضوابط موافق نیستید باید دسترسی و استفاده از وبسایت و هر گونه خدمات آن را متوقف کنید.",
        "3-1 شرکت خدماتی و تجاری مهر سرمستان این حق را برای خود محفوظ نگاه می‌دارد که هر کدام از شرایط و ضوابط را از طریق به روزرسانی این صفحه بنا به صلاحدید خود مورد بازبینی و تغییر قرار دهد. زمانی که این شرکت شرایط و ضوابط را بروزرسانی می‌کند، از تلاش‌های معقولی برای اطلاع رسانی به شما در مورد به بروزرسانی‌های این شرایط استفاده خواهد کرد اما این امر وظیفه شماست که شرایط و ضوابط را چک کنید تا از تغییرات آن باخبر شوید. لازم به ذکر است که ادامه دسترسی شما به وبسایت به معنای پذیرش و موافقت با این تغییرات است. هر گونه تغییر در شرایط و ضوابط از تاریخ انتشار ترتیب اثر داده می‌شود.لازم است قبل از دسترسی و استفاده از خدمات وبسایت حتما شرایط و ضوابط پیش رو را با دقت مطالعه نمایید. سوالات خود را در مورد این شرایط و ضوابط از طریق آدرس ایمیل زیر با ما در میان بگذارید.",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-3 py-3 ">
      {data.map((item, index) => (
        <Point key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
