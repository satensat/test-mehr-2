
import style from "./card-benefit.module.css";
import Link from "next/link";
export default function BenefitCard({title,children}) {
  return (
   <div className={style.benefit_card_box}>
    <Link href="/">
     { children}
     <h2 className="mt-2">{title}</h2>
    </Link>
   </div>
  )
}
