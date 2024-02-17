"use client";
import React, { useEffect, useState } from "react";

// applicator: mainData?.phone_number,
// name: values.name,
// province: values.province,
// city: values.city,
// is_owner: values.is_owner,
// area: values.area,
// business_type: {
//   is_distribution: values.business_type.is_distribution,
//   is_manufacturing: values.business_type.is_manufacturing,
//   is_technical: values.business_type.is_technical,
//   is_service: values.business_type.is_service,
// },
// number_of_staff: values.number_of_staff,
// address: values.address,
// reception_status: values.reception_status,
// repair_features: values.repair_features,
// workplace_features: {
//   sofa: values.workplace_features.sofa,
//   network: values.workplace_features.network,
//   fixed_number: values.workplace_features.fixed_number,
//   reception_feature: values.workplace_features.reception_feature,
// },
export default function StoreInfo({ mainData }) {
  const [provinceName, setProvinceName] = useState({});
  const [provinceList, setProvinceList] = useState([]);
  const [cityName, setCityName] = useState({});
  const [cityList, setCityList] = useState([]);
  // useEffect(() => {
  //   // http://192.168.10.195:8090/v1/api/province/
  //   async function fetchProvinceListitems() {
  //     try {
  //       const myDataQ = await fetch(
  //         `http://192.168.10.195:8090/v1/api/province/`
  //       );
  //       // console.log(myDataQ);
  //       if (myDataQ.status == 200) {
  //         const test = await myDataQ.json();
  //         setProvinceList(test);
  //         // console.log(test);
  //         const findProvinces = test.filter(
  //           (province) => province.id === +mainData.province
  //         );
  //         setProvinceName(findProvinces);
  //       }
  //       // return  { detail : await myDataQ.json() , status :   myDataQ.status };
  //     } catch {
  //       return "";
  //     }
  //   }

  //   fetchProvinceListitems();

  //   async function fetchCityListitemsDependsProvince(provinceID) {
  //     // console.log(provinceID);
  //     try {
  //       const myDataQ = await fetch(
  //         `http://192.168.10.195:8090/v1/api/province/cities/${provinceID}/`
  //       );
  //       // console.log(myDataQ);

  //       if (myDataQ.status == 200) {
  //         const test = await myDataQ.json();
  //         setCityList(test);
  //         // console.log(test);
  //         // mainData.city
  //         const findCity = test.filter((city) => city.id === +mainData.city);
  //         setCityName(findCity[0]);
  //         // console.log(findCity[0])
  //       }
  //       // return  { detail : await myDataQ.json() , status :   myDataQ.status };
  //     } catch {
  //       return "";
  //     }
  //   }
  //   // fetchCityListitemsDependsProvince("1");
  //   fetchCityListitemsDependsProvince(mainData.province);
  // }, [mainData]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">نوع جواز کسب</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.business_type?.is_distribution
            ? mainData?.business_type?.is_distribution + ","
            : ""}
          {mainData?.business_type?.is_manufacturing
            ? mainData?.business_type?.is_manufacturing + ","
            : ""}
          {mainData?.business_type?.is_technical
            ? mainData?.business_type?.is_technical + ","
            : ""}
          {mainData?.business_type?.business_type
            ? mainData?.business_type?.business_type + ""
            : ""}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          تعداد افراد شاغل
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.number_of_staff} نفر
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> وضعیت ملک</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.is_owner ? " مالک " : " استیجاری"}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> متراژ ملک</div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.area}متر مربع
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> استان</div>
        <div className="text-[#242424] text-xs leading-5">
          {provinceName?.name}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4"> شهر</div>
        <div className="text-[#242424] text-xs leading-5">{cityName?.name}</div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          آدرس کامل فروشگاه
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.address}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 bg-[#FDFDFD] rounded-2xl ">
        <div className="text-[#242424] text-sm leading-4">امکانات فروشگاه:</div>
        {mainData?.workplace_features?.sofa && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            مبلمان اداری
          </div>
        )}
        {mainData?.workplace_features?.network && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            اینترنت
          </div>
        )}
        {mainData?.workplace_features?.fixed_number && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            تلفن ثابت
          </div>
        )}
        {mainData?.workplace_features?.fixed_number && (
          <div className="bg-[#F7F7F7] rounded-xl flex flex-col px-3 py-1 text-[#242424] text-xs leading-5">
            سیستم پذیرش
          </div>
        )}
      </div>

      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          تجهیزات تست و تعمیر
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.repair_features}
        </div>
      </div>
      <div className="bg-[#FDFDFD] rounded-2xl flex flex-col px-3 py-1">
        <div className="text-[#808080] text-[10px] leading-4">
          شرح وضعیت پذیرایی (اختیاری)
        </div>
        <div className="text-[#242424] text-xs leading-5">
          {mainData?.reception_status}
        </div>
      </div>
    </div>
  );
}
