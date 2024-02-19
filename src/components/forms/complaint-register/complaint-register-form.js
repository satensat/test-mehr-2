import Link from "next/link";
import Image from "next/image";

import style from "./complaint-register.module.css"
import ComplaintRegisterFormFields from "@/components/forms/complaint-register/complaint-register-form-fields";
export default function CompaintRegisterFormBox() {
    return (
      
  
  <div className="shadow-G1  rounded-3xl mb-6  overflow-hidden   text-[#F7F7F7] bg-mainGreen1 relative" >
    <div className={style.complaintHeaderTop + " pt-3 pb-6 z-10 bg-mainGreen1 "}>
    <h1 className="font-bold text-lg  mb-4  px-3">
فرم ثبت شکایت
</h1>
<p className="   px-3 ">
انتقادات و شکایات شما باعث افزایش کیفیت خدمات رسانی ما خواهد شد، لطفا در صورت داشتن شکایت فرم ذیل را پر کنید.
</p>
    </div>

<div className="flex justify-between  bg-white text-[#242424]">
    <div className="w-full lg:w-[55%] pb-8 relative z-10 ">
        <ComplaintRegisterFormFields/>
    </div>
<div className={style.contactTopImg + "  overflow-hidden w-full lg:w-[45%] absolute lg:relative left-0 bottom-0 top-0 opacity-30 lg:opacity-100"}>
    <Image  alt="mehr" className="w-full min-h-full h-96 object-cover" src={"/forms/complaint-register/complaint.svg"} width={730} height={430} />
</div>
</div>
</div>
  
      

    );
  }
  