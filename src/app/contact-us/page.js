
import BreadcrumbList from "@/components/global/breadcrumb";
import ContactUsHeader from "@/components/contactUsPage/conatct-header-top";
import ContactUsFormBox from "@/components/contactUsPage/contact-form-box";
import ContactUsBranches from "@/components/contactUsPage/contact-branches";
export default function ContactUsPage() {
  const breadcrumbContent = [
    {name : "خانه" , url :"/"},
    {name : "ارتباط با ما" , url :""}
    ]
  return (
    <>

   <section className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
   <BreadcrumbList data={breadcrumbContent} inquiry={false}/>
  <ContactUsHeader/>
  <ContactUsBranches/>
 <ContactUsFormBox/>
   </section>

    </>
  );
}
