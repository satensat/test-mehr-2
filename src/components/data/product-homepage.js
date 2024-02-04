import ProductSection from "../modules/section-product";
// const ProductSection = dynamic(()=>import("../modules/section-product"))
export async function ProductsData() {
  try {
 
    const myDataQ = await fetch(
      "http://192.168.10.195:8090/v1/api/products/home/",
      {
        // next: { revalidate: 60*5 },
        cache: 'no-store' 
      }
    )
    if (!myDataQ.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await myDataQ.json();
    const dataMobile =   data.filter(
      (el) => el.category.slug == "mobile"
    )
    const dataLaptop =   data.filter(
      (el) => el.category.slug == "laptop"
    )
    if (data && data.length > 0) {
      return <>
       <ProductSection items="4.5" type="mobile" data={dataMobile} title="محبوب ترین گوشی ها"  />
       <ProductSection items="4.25" type="laptap" data={dataLaptop} title="محبوب ترین لپتاپ ها" />
      </>;
    }
  } catch {
    return "";
  }
}
