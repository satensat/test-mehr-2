"use client";
import React, {  useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondForm from "./SecondForm";
function processDone(massage) {
  toast.success(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

function processFail(massage) {
  toast.error(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const validationSchema = yup.object({
  name: yup.string().required("نام فروشگاه را وارد نمایید."),
  province: yup.string().required(" استان را وارد نمایید."),
  // province: yup.object().shape({
  //   id: yup.string().required("استان را انتخاب نمایید."),
  //   name: yup.string().required("استان را انتخاب نمایید."),
  // }),
  // city: yup.object().shape({
  //   id: yup.string().required("شهر را وارد نمایید."),
  //   name: yup.string().required("شهر را وارد نمایید."),
  // }),
  city: yup.string().required("شهر را وارد نمایید."),
  is_owner: yup.boolean().required("وضعیت ملک را وارد انتخاب کنید."),
  area: yup
    .number()
    .typeError("لطفا عدد وارد کنید.")
    .required("  متراژ ملک را وارد نمایید."),
  business_type: yup
    .object()
    .shape({
      is_distribution: yup.boolean(),
      is_manufacturing: yup.boolean(),
      is_technical: yup.boolean(),
      is_service: yup.boolean(),
    })
    .test(
      "at-least-one-true",
      " نوع جواز کسب خود را انتخاب کنید.",
      (obj) =>
        obj.is_distribution ||
        obj.is_manufacturing ||
        obj.is_technical ||
        obj.is_service
    ),
  number_of_staff: yup
    .number()
    .required("تعداد افراد شاغل را وارد نمایید.")
    .positive("تعداد افراد شاغل باید مثبت باشد."),
  address: yup.string().required("آدرس کامل فروشگاه را وارد نمایید."),
  reception_status: yup.string(),
  repair_features: yup.string().required("تجهیزات تست و تعمیر را وارد نمایید."),
  workplace_features: yup.object().shape({
    sofa: yup.boolean(),
    network: yup.boolean(),
    fixed_number: yup.boolean(),
    reception_feature: yup.boolean(),
  }),
});

export default function SecondFormWrapper({
  mainData,
  setMainData,
  secondFormDoneToThirdForm,
  activeTab,
  setActiveTab,
}) {
  ////----------------------loading state for send data button to go next step

  const [loadingButton, setLoadingButton] = useState(false);

//   const [statusProvince, setStatusProvince] = useState(false);


//   const [statusCity, setStatusCity] = useState(false);


  const [provinceListItemsSource, setProvinceListitemsSource] = useState([]);
  const [cityListItemsSource, setCityListitemsSource] = useState([]);

  const [provinceInput, setProvinceInput] = useState("");
  const [cityListInput, setCityInput] = useState("");

  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);



  const formik = useFormik({
    initialValues: {
      name: mainData.name ? mainData.name : "",
      province: mainData.province ? mainData.province : "",
      city: mainData.city ? mainData.city : "",
      is_owner: mainData.is_owner ? mainData.is_owner : "",
      area: mainData.area ? mainData.area : "",
      business_type: {
        is_distribution: mainData.is_distribution
          ? mainData.is_distribution
          : false,
        is_manufacturing: mainData.is_manufacturing
          ? mainData.is_manufacturing
          : false,
        is_technical: mainData.is_technical ? mainData.is_technical : false,
        is_service: mainData.is_service ? mainData.is_service : false,
      },
      number_of_staff: mainData.number_of_staff ? mainData.number_of_staff : 0,
      address: mainData.address ? mainData.address : "",
      reception_status: mainData.reception_status
        ? mainData.reception_status
        : "",
      repair_features: mainData.repair_features ? mainData.repair_features : "",
      workplace_features: {
        sofa: mainData.sofa ? mainData.sofa : false,
        network: mainData.network ? mainData.network : false,
        fixed_number: mainData.fixed_number ? mainData.fixed_number : false,
        reception_feature: mainData.reception_feature
          ? mainData.reception_feature
          : false,
      },
    },
    onSubmit: (values) => {
      setMainData({
        ...mainData,
        applicator: mainData?.phone_number,
        name: values.name,
        province: values.province,
        city: values.city,
        is_owner: values.is_owner,
        area: values.area,
        business_type: {
          is_distribution: values.business_type.is_distribution,
          is_manufacturing: values.business_type.is_manufacturing,
          is_technical: values.business_type.is_technical,
          is_service: values.business_type.is_service,
        },
        number_of_staff: values.number_of_staff,
        address: values.address,
        reception_status: values.reception_status,
        repair_features: values.repair_features,
        workplace_features: {
          sofa: values.workplace_features.sofa,
          network: values.workplace_features.network,
          fixed_number: values.workplace_features.fixed_number,
          reception_feature: values.workplace_features.reception_feature,
        },
      });
      secondFormDoneToThirdForm();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      try {
        const res = fetch(
          `http://192.168.10.195:8090/v1/api/after/sale/shop/informations/`,
          {
            method: "POST",
            body: JSON.stringify({
              name: values.name,
              province: values.province.id,
              city: values.city.id,
              is_owner: values.is_owner,
              area: values.area,
              business_type: {
                is_distribution: values.business_type.is_distribution,
                is_manufacturing: values.business_type.is_manufacturing,
                is_technical: values.business_type.is_technical,
                is_service: values.business_type.is_service,
              },
              number_of_staff: values.number_of_staff,
              address: values.address,
              reception_status: values.reception_status,
              repair_features: values.repair_features,
              applicator: mainData?.varificationForm?.phone_number,
              workplace_features: {
                sofa: values.workplace_features.sofa,
                network: values.workplace_features.network,
                fixed_number: values.workplace_features.fixed_number,
                reception_feature: values.workplace_features.reception_feature,
              },
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((response) =>
            response
              .json()
              .then((data) => ({ status: response.status, body: data }))
          )
          .then((detail) => {
            console.log(detail);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "200" || detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
              setMainData({
                ...mainData,
                secondForm: {
                  applicator: mainData?.varificationForm?.phone_number,
                  name: values.name,
                  province: values.province.id,
                  city: values.city.id,
                  is_owner: values.is_owner,
                  area: values.area,
                  business_type: {
                    is_distribution: values.business_type.is_distribution,
                    is_manufacturing: values.business_type.is_manufacturing,
                    is_technical: values.business_type.is_technical,
                    is_service: values.business_type.is_service,
                  },
                  number_of_staff: values.number_of_staff,
                  address: values.address,
                  reception_status: values.reception_status,
                  repair_features: values.repair_features,
                  workplace_features: {
                    sofa: values.workplace_features.sofa,
                    network: values.workplace_features.network,
                    fixed_number: values.workplace_features.fixed_number,
                    reception_feature:
                      values.workplace_features.reception_feature,
                  },
                },
              });
              secondFormDoneToThirdForm();
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });
  return (
    <>
    
    {activeTab === "second" && (
    <SecondForm
      formik={formik}
      filteredCities={filteredCities}
      setFilteredCities={setFilteredCities}
      loadingButton={loadingButton}
      setLoadingButton={setLoadingButton}
    //   statusProvince={statusProvince}
    //   setStatusProvince={setStatusProvince}
    //   statusCity={statusCity}
    //   setStatusCity={setStatusCity}
      provinceListItemsSource={provinceListItemsSource}
      setProvinceListitemsSource={setProvinceListitemsSource}
      cityListItemsSource={cityListItemsSource}
      setCityListitemsSource={setCityListitemsSource}
      provinceInput={provinceInput}
      setProvinceInput={setProvinceInput}
      cityListInput={cityListInput}
      setCityInput={setCityInput}
      filteredProvinces={filteredProvinces}
      setFilteredProvinces={setFilteredProvinces}
      secondFormDoneToThirdForm={secondFormDoneToThirdForm}
      mainData={mainData}
      setMainData={setMainData}
      setActiveTab={setActiveTab}
    />)}
    </>
  );
}
