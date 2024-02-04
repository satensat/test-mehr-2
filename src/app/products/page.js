

import { ProductsArchiveData } from "@/components/data/product-list";
import ProductDescription from "@/components/productArchive/product-description";
import BreadcrumbList from "@/components/productArchive/breadcrumb";
import ActionList from "@/components/productArchive/action";
import { CategoryData } from "@/components/data/category-list";
import Sidebar from "@/components/productArchive/sidebarMobile";

export default function Product({params,searchParams}) {
 
  const breadcrumbContent = [
   {name : "خانه" , url :"/"},
   {name : "محصولات" , url :""}
   ]
  return (
    <>
    <ActionList/>
      <section className="px-5 lg:px-10 max-w-[1600px] mx-auto">
      <Sidebar data={params.slug} />
       <BreadcrumbList data={breadcrumbContent}/>
    <div className="flex flex-row flex-wrap md:flex-nowrap md:space-x-5  md:space-x-reverse">
      <div className="w-full md:basis-1/4 mb-4 md:mb-0">
      <div className="sticky top-0">
      <CategoryData param={params.slug} type="category"/>
       </div>
      </div>
      <div className=" w-full md:basis-3/4 mb-4 md:mb-0">
     
      <ProductsArchiveData param={searchParams} />
     
      </div>
   
    </div>
   
      <ProductDescription/>

      </section>
    </>
  );
}
