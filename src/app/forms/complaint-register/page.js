
import BreadcrumbList from "@/components/global/breadcrumb";

import CompaintRegisterFormBox from "@/components/forms/complaint-register/complaint-register-form";

export default function ComplaintRegisterPage() {

  const breadcrumbContent = [
    {name : "خانه" , url :"/"},
    {name : "ثبت شکایت" , url :""}
    ]

  return (
    <>
   <section className="px-5 lg:px-10 max-w-[1600px] mx-auto ">
   <BreadcrumbList data={breadcrumbContent} inquiry={false}/>


 <CompaintRegisterFormBox/>
   </section>

    </>
  );
}
