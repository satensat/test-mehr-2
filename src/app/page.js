
import dynamic from "next/dynamic";
// import HeroSection from "@/components/modules/section-hero";
const HeroSection = dynamic(()=>import("@/components/modules/section-hero"))
const CommentSection = dynamic(()=>import("@/components/modules/section-comment"))
// import CommentSection from "@/components/modules/section-comment";
import ServiceSection from "@/components/modules/section-service";
import BenefitSection from "@/components/modules/section-benefit";
import AgencySection from "@/components/modules/section-agency";
// import BlogSection from "@/components/modules/section-blog";
const BlogSection = dynamic(()=>import("@/components/modules/section-blog"))
// import BrandSection from "@/components/modules/section-brand";
const BrandSection = dynamic(()=>import("@/components/modules/section-brand"))
import { ProductsData } from "@/components/data/product-homepage";

export default function Home() {
  return (
    <>
      
      <HeroSection />
      <ServiceSection />
      <BenefitSection />
      <CommentSection />
      <BrandSection />
      <AgencySection />
      <ProductsData  />
      <BlogSection />
     

    </>
  );
}
