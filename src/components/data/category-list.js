import CategoryProduct from "../productArchive/categort-list";
import BreadcrumbList from "../productArchive/breadcrumb";
export async function CategoryData({param ,type}) {

  try {
    const myDataQ = await fetch("http://192.168.10.195:8090/v1/api/categories/?page=1&page_size=999",
      { next: { revalidate: 1 }, }
    );
    const catList = await myDataQ.json();
    let breadcrumbContent
    if (catList && myDataQ.status=="200") {
    
      if(param){
        const slugData =   catList.results.find((el) => el.slug == param[0] )
        let slugData2
        if( slugData.sub_categories.length > 0 ){
          slugData.sub_categories.map((item)=>{
            
            if(item.slug == param[1] ){
             
              slugData2 = {name : item.name , url:``}
            }
            
          })
           
        }
        breadcrumbContent = [
          {name : "خانه" , url :"/"},
          {name : "محصولات" , url :"/products"},
          {name:slugData.name ,url :`/product-category/${slugData.slug}`}
          ]
          if(slugData2){
            breadcrumbContent = [...breadcrumbContent ,  slugData2]
          }
       
      }
    
     if(type=="category"){
      return <CategoryProduct catData={catList}  /> ;
     }
     if(type=="breadcrump"){
      
        return <BreadcrumbList data={breadcrumbContent} catData={catList} />
     }
    }

  } catch {
    return ""
  }
}
