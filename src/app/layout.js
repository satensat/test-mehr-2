import "./globals.css";
import Header from "@/components/modules/global-header";
import CtaSection from "@/components/modules/section-cta";
import Footer from "@/components/modules/global-footer";
import PreFooter from "@/components/modules/global-prefooter";
import ModalCompare from "@/components/compareComponent/ModalCompare";
import localFont from "next/font/local";
import Head from "next/head";
// import dynamic from 'next/dynamic'
// const Providers = dynamic(
//   () => import('@/GlobalRedux/provider')
// )
import Providers  from "@/GlobalRedux/provider";
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../fonts/IRANSansX-Regular.woff2" });
export const metadata = {
  title: "بازرگانی مهر | شرکت خدماتی و تجاری مهر سرمستان",
  description: "بازرگانی مهر با تعهد، پشتکار و همگام بودن با مشتریان موفق شده به عنوان یک نام در سطح اول توزیع تجهیزات IT در کشور مطرح شود.",
  icons: {
    icon: "/favicon.ico",
    url: '/favicon.ico',
    href: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
       <Head >
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
      <body>
        <main className={myFont.className + " mainWrapper"}>
        <CtaSection />
         <Header />
         <Providers> <ModalCompare />{children}</Providers>
         
          <PreFooter />
         <Footer />
          </main>
      </body>
    </html>
  );
}
