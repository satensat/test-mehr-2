
import style from "./card-agency.module.css";
import Link from "next/link";
export default function AgencyCard({title, children }) {
  return (
   <div className={style.agency_card_box}>
    <Link href="/">
     { children}
     <h2 className="mt-2">{title}</h2>
     <span className={style.agency_card_shadow}>{children}</span>
    </Link>
   </div>
  )
}
