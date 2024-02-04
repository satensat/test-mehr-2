import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
    return (
        <>
        
        <section className="px-3">
            <div className="bg-white rounded-[32px] max-w-[520px] mt-7 mb-9 mx-auto shadow-G1 pb-1">
            <Image src={"/404.svg"} width={400} height={400} className="w-full"/>
            <p className="text-slate-600 font-bold text-center mt-3 px-4 md:text-base text-xs">متاسفانه به مشکل برخوردیم و نتونستیم صفحه‌ای که میخواهید رو پیدا کنیم...
لینک های زیر شاید به کار شما بیاید</p>
  <div className="flex my-6 justify-center">
  <Link href="" className="border-mainGreen1 transition duration-300 mx-1 md:mx-3 hover:bg-mainGreen1 color-mainGreen1 border rounded-xl text-mainGreen1 hover:text-white  font-bold py-1 px-2 md:px-4 text-xs md:text-sm" >صفحه خانه</Link>
<Link href="" className="border-mainGreen1 transition duration-300 mx-1 md:mx-3 hover:bg-mainGreen1 color-mainGreen1 border rounded-xl text-mainGreen1 hover:text-white font-bold py-1 px-2 md:px-4 text-xs md:text-sm" >محصولات</Link>
<Link href="" className="border-mainGreen1 transition duration-300 mx-1 md:mx-3 hover:bg-mainGreen1 border rounded-xl text-mainGreen1 hover:text-white font-bold py-1 px-2 md:px-4 text-xs md:text-sm" >خدمات گارانتی</Link>
  </div>
            </div>
           
        </section>
        </>
    )
}