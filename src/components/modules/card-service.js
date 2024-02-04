
import style from "./card-service.module.css";
import Link from "next/link";
export default function ServiceCard({title ,children}) {
  return (
   <div className={style.service_card_box}>
    <Link href="/">  {children} <h2>{title} </h2>  <span className={style.service_card_shadow}>{children}</span></Link>
   </div>
  )
}
