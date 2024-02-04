import Link from "next/link";
import Image from "next/image";
import MessageQuestion from "@/icon/message-question";
import style from "./conatct-header-top.module.css"
export default function ContactUsHeader() {
    return (
      
  
  <div className="shadow-G1  rounded-3xl mb-6 mt-3 flex justify-between overflow-hidden  bg-white relative" >
<div className="p-3 w-full  md:w-[70%] relative  z-10">
<h1 className="font-bold text-lg text-[#242424] mb-4">
تماس با ما
</h1>
<p className="text-slate-500 mb-6">
در صورت داشتن سوال ممکن است در سوالات پرتکرار جواب آن را پیدا کنید.
</p>
<Link className="bg-mainYellow rounded-xl px-3 leading-8 inline-flex items-center hover:bg-[#f7f7f7]  transition  duration-500" href={"/faq"} > سوالات پرتکرار 
<span className="mr-1">
<MessageQuestion/>
</span>
</Link>
</div>

<div className={style.contactTopImg + " overflow-hidden w-full opacity-30 md:opacity-100 md:w-[30%]  absolute md:relative left-0 bottom-0 top-0"}>
    <Image className="w-full min-h-full object-cover" src={"/contact/contact-us-mehr-top.jpg"} width={335} height={145} alt="mehr" />
</div>
</div>
  
      

    );
  }
  