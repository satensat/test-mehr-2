
import CommentProduct from "@/components/productSingle/comment-section";
import GalleryProduct from "@/components/productSingle/gallery-section";
import DetailsSingleProduct from "@/components/singleProduct/DetailsSingleProduct";
import EditorContent from "@/components/singleProduct/EditorContent";
import GeneralFeatures from "@/components/singleProduct/GeneralFeatures";
import IntroductionSection from "@/components/singleProduct/IntroductionSection";
import SharePartOfProduct from "@/components/singleProduct/SharePartOfProduct";
import SingleProductGallery from "@/components/singleProduct/SingleProductGallery";
import BreadcrumbList from "@/components/global/breadcrumb";
import SingleProductPageHeader from "@/components/singleProduct/SingleProductPageHeader";
import { notFound } from 'next/navigation';
 async function test(param) {
  
 

  try {
    const myDataQ = await fetch(`http://192.168.10.195:8090/v1/api/products/${param}/`,
      { 
        
        // next: { revalidate: 0 },
      cache: 'no-store' 
    }
    );
console.log(myDataQ.status)
    return  { detail : await myDataQ.json() , status :   myDataQ.status };
  
  } catch {
    return ""
  }
}
export default async function ProductPage({  params, searchParams }) {
 const response = await test(params.slug[0])
 const data =  response.detail

 if(response.status == 404){
  notFound()
 }
if(response && response.status == 200){
  const breadcrumbContent = [
    {name : "خانه" , url :"/"},
    {name : "محصولات" , url :"/products"},
     {name : data.names.fa_name , url :""}
    ]
    
 
  return (
    <>
   
    <section className="w-full flex flex-row flex-wrap px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
        <BreadcrumbList data={breadcrumbContent} inquiry={false}/>
        <div className="w-full flex flex-col gap-6   ">
          <SingleProductPageHeader en_name={data.names.name} fa_name={data.names.fa_name} />
          <div className="w-full flex flex-col gap-6  md:flex-row lg:flex-row ">
          <div className="w-full   flex flex-col gap-6  md:w-[40%] ">
              <GalleryProduct images={data.features} name={data.names} />
              <SharePartOfProduct en_name={data.names.name} fa_name={data.names.fa_name} brand={data.brand} />
            </div>
            <div className="w-full  flex flex-col gap-6  md:w-[60%] ">
            <IntroductionSection  introduction={data.description} comments={data.comments} id={data.id} />
             <GeneralFeatures feature={data.fields_info.generals}  amount={data} />
            <DetailsSingleProduct feature={data.fields_info.feature_based}  amount={data} /> 
            </div>
          </div>
          {data.description.text &&  <EditorContent description={data.description.text}/>}
         
          <CommentProduct comments={data.comments} slug={params.slug[0]}/>
        </div>
      </section>
     
    </>
  );
}}
