// import ProductList from "../productArchive/produclist";
import dynamic from "next/dynamic";
const ProductList = dynamic(()=>import("../productArchive/produclist"))
export async function ProductsArchiveData({param ,slug}) {

  let searchQ = ""
  for (const [key, value] of Object.entries(param)) {
     searchQ  = searchQ+`&${key}=${value}`
  }
  
if(slug){

  searchQ  = searchQ+`&${"category"}=${slug[0]}`
}
  console.log(`http://192.168.10.195:8090/v1/api/products/?page_size=12${searchQ}`)
  try {
    const myDataQ = await fetch(`http://192.168.10.195:8090/v1/api/products/?page_size=12${searchQ}`, { next: { revalidate: 1 }, } );
    const data = await myDataQ.json();
    console.log(data)
    if (data) {
      return <ProductList  data={data}  />;
    }
  } catch {
    return "....";
  }
}
