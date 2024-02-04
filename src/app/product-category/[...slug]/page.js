
import { ProductsArchiveData } from "@/components/data/product-list";
import ProductDescription from "@/components/productArchive/product-description";
import { FeatureData } from "@/components/data/feature-list";
import BrandList from "@/components/productArchive/brand-list";

import ActionList from "@/components/productArchive/action";
import { CategoryData } from "@/components/data/category-list";
import Sidebar from "@/components/productArchive/sidebarMobile";
export default function ProductCategory({ params ,searchParams }) {


  return (
    <>
  <ActionList/>
      <section className="px-5 lg:px-10 max-w-[1600px] mx-auto">
        
      <Sidebar data={params.slug} />
       <CategoryData param={params.slug} type="breadcrump"/>
    <div className="flex flex-row flex-wrap justify-between gap-x-[11px] gap-y-2 ">
      <div className=" w-full lg:max-w-[32%] xl:max-w-[24%]    mb-4 lg:mb-0  hidden lg:block">
        <div className="sticky top-0">
        <CategoryData param={params.slug} type="category"/>
        <FeatureData param={params.slug}/>
        </div>
      </div>
      <div className=" w-full lg:max-w-[65%] xl:max-w-[74%]   mb-4 lg:mb-0">
      <BrandList/>
      <ProductsArchiveData param={searchParams} slug={params.slug} />
      </div>
   
    </div>
   
      <ProductDescription/>

    
      </section>
    </>
  );
}
