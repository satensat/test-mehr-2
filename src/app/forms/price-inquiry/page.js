// import BreadcrumbList from "@/components/global/breadcrumb";
import PriceInquiryMainComponent from "@/components/forms/price-inquiry/PriceInquiryMainComponent";

export default function PriceInquiryPage() {
  const breadcrumbContent = [
    { name: "خانه", url: "/" },
    { name: "", url: "" },
  ];

  return (
    <>
      <section className="md:px-5 lg:px-10 max-w-[1600px] mx-auto ">
        {/* <BreadcrumbList data={breadcrumbContent} inquiry={false}/> */}
        <PriceInquiryMainComponent />
      </section>
    </>
  );
}
