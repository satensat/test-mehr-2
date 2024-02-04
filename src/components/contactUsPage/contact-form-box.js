import Link from "next/link";
import Image from "next/image";
import ContactUsFormFields from "./contact-form-fields";
import style from "./conatct-header-top.module.css"
export default function ContactUsFormBox() {
    return (
      
  
  <div className="shadow-G1  rounded-3xl my-6  overflow-hidden pt-3 pr-3 bg-white relative" >
<h1 className="font-bold text-lg text-[#242424] mb-4 pl-3">
فرم تماس با ما
</h1>
<p className="text-slate-500 mb-6 pl-3 ">
شما میتوانید جهت ارتباط مستقیم با ما از طریق سایت پیام ارسال کنید, منتظر شما هستیم.
</p>
<div className="flex justify-between border-gray-100 border-t">
    <div className="w-full lg:w-[40%] py-8 pl-3 relative z-10">
        <ContactUsFormFields/>
    </div>
<div className={style.contactTopImg + "  overflow-hidden w-full lg:w-[60%] absolute lg:relative left-0 bottom-0 top-0 opacity-30 lg:opacity-100"}>
    <Image  alt="mehr" className="w-full min-h-full object-cover" src={"/contact/contact-us-mehr-form.jpg"} width={730} height={430} />
</div>
</div>
</div>
  
      

    );
  }
  