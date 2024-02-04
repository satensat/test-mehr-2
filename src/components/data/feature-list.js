import SidebarProduct from "../productArchive/sidebar-product";
export async function FeatureData({param}) {
  
  try {

    const myDataQ = await fetch(`http://192.168.10.195:8090/v1/api/fields/${param[param.length-1]}/`,
      { next: { revalidate: 1 }, }
    );
    const catList = await myDataQ.json();
    if (catList && myDataQ.status=="200") {
     
        return <SidebarProduct catData={catList} /> ;
    }
  } catch {
    return ""
  }
}
