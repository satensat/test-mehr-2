"use client";
import ToastBox from "../global/toast";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowDownIcon from "@/icon/ArrowDown";
import PlusIcon from "@/icon/PlusIcon";
import RightArrowBack from "@/icon2/RightArrowBack";
import ArrowOpinion from "@/icon/ArrowOpinion";
import formStyles from "./formcheckbox.module.css";
import MinusIcon from "@/icon2/MinusIcon";
import ClickOutside from "./ClickOutside";
import DangerIcon from "@/icon2/DangerIcon";
import styles from "./form.module.css";

const validationSchema = yup.object({
  name: yup.string().required("نام فروشگاه را وارد نمایید."),
  // province: yup.string().required(" استان را وارد نمایید."),
  province: yup.object().shape({
    id: yup.string().required("استان را انتخاب نمایید."),
    name: yup.string().required("استان را انتخاب نمایید."),
  }),
  city: yup.object().shape({
    id: yup.string().required("شهر را وارد نمایید."),
    name: yup.string().required("شهر را وارد نمایید."),
  }),
  // city: yup.string().required("شهر را وارد نمایید."),
  is_owner: yup.boolean().required("وضعیت ملک را وارد انتخاب کنید."),
  area: yup
    .number()
    .typeError("لطفا عدد وارد کنید.")
    .required("  متراژ ملک را وارد نمایید."),
  business_type: yup.object().shape({
    is_distribution: yup.boolean(),
    is_manufacturing: yup.boolean(),
    is_technical: yup.boolean(),
    is_service: yup.boolean(),
  }),
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

export default function SecondForm() {
  const [statusProvince, setStatusProvince] = useState(false);
  const handleCloseProvinceList = () => {
    setStatusProvince(false);
  };

  const [statusCity, setStatusCity] = useState(false);

  const handleCloseCityList = () => {
    setStatusCity(false);
  };

  const [provinceListItemsSource, setProvinceListitemsSource] = useState([]);
  const [cityListItemsSource, setCityListitemsSource] = useState([]);

  const [provinceInput, setProvinceInput] = useState("");
  const [cityListInput, setCityInput] = useState("");

  const [filteredProvinces, setFilteredProvinces] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const handleChangeInputProvinceAutoComplete = (event) => {
    console.log(event);
    setProvinceInput(() => event.target.value);
    const filteredProvinces = provinceListItemsSource.filter((province) =>
      province.name.includes(event.target.value)
    );
    console.log(filteredProvinces);
    setFilteredProvinces(filteredProvinces);
    console.log(filteredProvinces.length === 1);

    // if (filteredProvinces.length === 1) {
    //   console.log(filteredProvinces[0]);
    // const timeoutID =
    // setTimeout(() => {
    //   console.log("this is the first message");
    //   fetchCityListitemsDependsProvince(filteredProvinces[0].id);
    //   formik.setFieldValue("province.name", filteredProvinces[0].name);
    //   formik.setFieldValue("province.id", filteredProvinces[0].id);
    //   setProvinceInput(filteredProvinces[0].name);
    //   setStatusProvince(false);
    // }, 500);
    // timeoutID();
    // clearTimeout(timeoutID);
    // }
  };
  const handleEnterKeyPress = (event) => {
    setProvinceInput(() => event.target.value);
    const filteredProvinces = provinceListItemsSource.filter((province) =>
      province.name.includes(event.target.value)
    );

    setFilteredProvinces(filteredProvinces);

    if (event.key === "Enter") {
      fetchCityListitemsDependsProvince(filteredProvinces[0].id);
      formik.setFieldValue("province.name", filteredProvinces[0].name);
      formik.setFieldValue("province.id", filteredProvinces[0].id);
      setProvinceInput(filteredProvinces[0].name);
      setStatusProvince(false);
    }
  };
  const handleChangeInputCityAutoComplete = (event) => {
    console.log(event);
    setCityInput(() => event.target.value);
    const filteredCity = cityListItemsSource.filter((province) =>
      province.name.includes(event.target.value)
    );
    console.log(filteredCity);
    setFilteredCities(filteredCity);
    console.log(filteredCity.length === 1);
    console.log(filteredCity[0] === event.target.value);
    // if (filteredCity.length === 1) {
    //   console.log(filteredCity[0]);
    // const timeoutID =
    // setTimeout(() => {
    //   formik.setFieldValue("city.name", filteredCity[0].name);
    //   formik.setFieldValue("city.id", filteredCity[0].id);
    //   setCityInput(filteredCity[0].name);
    //   setStatusCity(false);
    // }, 500);
    // timeoutID();
    // clearTimeout(timeoutID);
    // }
  };
  const handleEnterKeyPressCity = (event) => {
    setCityInput(() => event.target.value);
    const filteredCity = cityListItemsSource.filter((province) =>
      province.name.includes(event.target.value)
    );
    setFilteredCities(filteredCity);
    if (event.key === "Enter") {
      formik.setFieldValue("city.name", filteredCity[0].name);
      formik.setFieldValue("city.id", filteredCity[0].id);
      setCityInput(filteredCity[0].name);
      setStatusCity(false);

    }
  }
  useEffect(() => {
    // http://192.168.10.195:8090/v1/api/province/
    async function fetchProvinceListitems() {
      try {
        const myDataQ = await fetch(
          `http://192.168.10.195:8090/v1/api/province/`
        );
        console.log(myDataQ);

        if (myDataQ.status == 200) {
          const test = await myDataQ.json();
          setProvinceListitemsSource(test);
          setFilteredProvinces(test);

          // console.log(test);
        }
        // return  { detail : await myDataQ.json() , status :   myDataQ.status };
      } catch {
        return "";
      }
    }

    fetchProvinceListitems();
  }, []);

  async function fetchCityListitemsDependsProvince(provinceID) {
    console.log(provinceID);
    try {
      const myDataQ = await fetch(
        `http://192.168.10.195:8090/v1/api/province/cities/${provinceID}/`
      );
      console.log(myDataQ);

      if (myDataQ.status == 200) {
        const test = await myDataQ.json();
        setCityListitemsSource(test);
        setFilteredCities(test);
        console.log(test);
      }
      // return  { detail : await myDataQ.json() , status :   myDataQ.status };
    } catch {
      return "";
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      province: { id: "", name: "" },
      city: { id: "", name: "" },
      is_owner: "",
      area: "",
      business_type: {
        is_distribution: false,
        is_manufacturing: false,
        is_technical: false,
        is_service: false,
      },
      number_of_staff: 0,
      address: "",
      reception_status: "",
      repair_features: "",
      workplace_features: {
        sofa: false,
        network: false,
        fixed_number: false,
        reception_feature: false,
      },
    },
    onSubmit: (values) => {
      try {
        const res = fetch(
          `http://192.168.10.195:8090/v1/api/shop/informations/`,
          {
            method: "POST",
            body: JSON.stringify({
              subject: values.subject,
              name: values.name,
              email_address: values.email,
              phone_number: values.phone,
              description: values.description,
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
            console.log(detail.status);
            if (detail.status == "400") {
              setToast(true);
              const featureEntries = Object.entries(detail.body);
              {
                featureEntries.map((item) => setMessage(item[1]));
              }
            }
            if (detail.status == "201") {
              setMessage(
                "پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند."
              );
              setSubmitted(true);
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  const [visible, setVisible] = useState(false);

  const toggleText = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className=" flex flex-col  items-center justify-center   ">
      <div className="p-3 leading-6 font-bold text-base flex flex-row w-full items-start gap-[10px] ">
        <RightArrowBack />
        اطلاعات فروشگاه
      </div>

      <div className="w-[80%]  mt-1  mb-3 relative group  ">
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className={
            (formik.values.name.length > 0 ? " input-label-pos-active " : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label
          className={
            " absolute top-4 right-4  pointer-events-none text-sm group-focus-within:text-xs" +
            " " +
            `${formik.values.name.length > 0 ? "text-xs" : ""}`
          }
        >
          نام فروشگاه
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.name && formik.touched.name
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.name}
        </div>
      </div>
      <div className="w-[80%]  mb-6 relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          نوع جواز کسب:
        </div>
        {/* DISTRIBUTION, MANUFACTURING, TECHNICAL, SERVICE */}
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "business_type.is_distribution",
                    !formik.values.business_type.is_distribution
                  )
                }
              >
                <input
                  type="checkbox"
                  name="business_type.is_distribution"
                  checked={formik.values.business_type.is_distribution}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                توزیعی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "business_type.is_manufacturing",
                    !formik.values.business_type.is_manufacturing
                  )
                }
              >
                <input
                  type="checkbox"
                  name="business_type.is_manufacturing"
                  checked={formik.values.business_type.is_manufacturing}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                تولیدی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "business_type.is_technical",
                    !formik.values.business_type.is_technical
                  )
                }
              >
                <input
                  type="checkbox"
                  name="business_type.is_technical"
                  checked={formik.values.business_type.is_technical}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                فنی
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "business_type.is_service",
                    !formik.values.business_type.is_service
                  )
                }
              >
                <input
                  type="checkbox"
                  name="business_type.is_service"
                  checked={formik.values.business_type.is_service}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                خدماتی
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] mt-1  mb-3 relative group ">
        <div className=" flex flex-row gap-2 items-center">
          <button
            className="p-3 "
            onClick={() => {
              formik.setFieldTouched("number_of_staff", true);
              formik.setFieldValue(
                "number_of_staff",
                formik.values.number_of_staff + 1
              );
            }}
          >
            <PlusIcon color={"#3B3B3B"} width={"24"} height={"24"} />
          </button>

          <div className={"   relative flex-grow  " + styles.formNumInput}>
            <input
              name="number_of_staff"
              value={formik.values.number_of_staff}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              className={
                (true ? " input-label-pos-active " : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label className=" absolute top-3 right-4  pointer-events-none">
              تعداد افراد شاغل
            </label>
          </div>
          <button
            className="p-3 "
            onClick={() => {
              formik.setFieldTouched("number_of_staff", true);
              formik.setFieldValue(
                "number_of_staff",
                formik.values.number_of_staff - 1
              );
            }}
          >
            <MinusIcon color={"#3B3B3B"} width={"24"} height={"24"} />
          </button>
        </div>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.number_of_staff && formik.touched.number_of_staff
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.number_of_staff}
        </div>
      </div>
      <div className="w-[80%]  mt-1   relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          وضعیت ملک:
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.containerRadio} `}
                onClick={() => formik.setFieldValue("is_owner", true)}
              >
                <input
                  type="radio"
                  checked={formik.values.is_owner === true}
                  onChange={() => formik.setFieldValue("is_owner", true)}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                مالک
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.containerRadio} `}
                onClick={() => formik.setFieldValue("is_owner", false)}
              >
                <input
                  type="radio"
                  checked={formik.values.is_owner === false}
                  onChange={() => formik.setFieldValue("is_owner", false)}
                />
                <div className={formStyles.checkmarkRadio}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                استیجاری
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-[80%] mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.is_owner && formik.touched.is_owner
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.is_owner}
      </div>
      <div className={"w-[80%]  mt-1  mb-3 relative  "}>
        <input
          name="area"
          value={formik.values.area}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="بر اساس متر مربع"
          className={
            (true ? " input-label-pos-active " : " ") +
            " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
          }
        />
        <label className=" absolute top-3 right-4  pointer-events-none">
          متراژ ملک
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.area && formik.touched.area
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.area}
        </div>
      </div>

      <ClickOutside
        onClick={handleCloseProvinceList}
        className={" w-[80%] flex flex-row mx-auto mt-1   "}
      >
        <div
          className={
            formStyles.styled_select +
            " " +
            "group   w-full  relative " +
            "  " +
            `${statusProvince ? " z-[2]  " : "  z-[1] "}`
          }
        >
          <label
            for="province"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                provinceInput.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }`
            }
          >
            استان
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
            <ArrowDownIcon />
          </div>

          <input
            value={provinceInput}
            onKeyDown={handleEnterKeyPress}
            onChange={(e) => handleChangeInputProvinceAutoComplete(e)}
            onBlur={formik.handleBlur}
            onFocus={() => setStatusProvince(true)}
            className={
              (provinceInput.length > 0 ? " input-label-pos-active " : " ") +
              " w-full px-4 relative  z-[2]  placeholder-gray    placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
            }
            id="province"
            name="province"
          ></input>

          {statusProvince ? (
            <div className="flex flex-col bg-[#F7F7F7] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredProvinces.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    value={item.id}
                    onClick={async () => {
                      formik.setFieldValue("province.name", item.name);
                      formik.setFieldValue("province.id", item.id);
                      await fetchCityListitemsDependsProvince(item.id);
                      setProvinceInput(item.name);
                      setStatusProvince(false);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl "
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </ClickOutside>
      <div
        className={
          "w-[80%] mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.province &&
            formik.touched.province &&
            formik.errors.province.name &&
            formik.touched.province.name
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.province?.name}
      </div>
      <ClickOutside
        onClick={handleCloseCityList}
        className={" w-[80%] flex flex-row mx-auto mt-1   "}
      >
        <div
          className={
            formStyles.styled_select +
            " " +
            "group   w-full  relative " +
            "  " +
            `${statusCity ? " z-[2]  " : "  z-[1] "}`
          }
        >
          <label
            for="city"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                formik.values.city.name.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }` +
              " " +
              `${formik.values.province.name === "" ? " text-[#ababab]  " : ""}`
            }
          >
            شهر
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
            <ArrowDownIcon
              color={`${formik.values.province.name === "" ? "#ababab" : ""}`}
            />
          </div>

          <input
            disabled={formik.values.province.name === ""}
            value={cityListInput}
            onKeyDown={handleEnterKeyPressCity}
            onChange={(e) => handleChangeInputCityAutoComplete(e)}
            // onBlur={formik.handleBlur}
            onFocus={() => setStatusCity(true)}
            className={
              (cityListInput.length > 0 ? " input-label-pos-active " : " ") +
              " w-full px-4 relative  z-[2]  placeholder-gray    placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos   "
            }
            id="city"
            name="city"
          ></input>

          {statusCity ? (
            <div className="flex flex-col bg-[#F7F7F7] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
              {filteredCities.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    value={item.id}
                    onClick={() => {
                      formik.setFieldValue("city.name", item.name);
                      formik.setFieldValue("city.id", item.id);
                      setCityInput(item.name);
                      setStatusCity(false);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl "
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </ClickOutside>
      <div
        className={
          "w-[80%] mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.city &&
            formik.touched.city &&
            formik.errors.city.name &&
            formik.touched.city.name
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.city?.name}
      </div>
      <div className="w-[80%]  relative mt-2 mb-3">
        <textarea
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.address.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          آدرس کامل فروشگاه
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.address && formik.touched.address
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.address}
        </div>
      </div>

      <div className="w-[80%] mt-1  relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
        <div className="font-normal text-sm leading-6 text-[#242424] py-1 ">
          امکانات فروشگاه:
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "workplace_features.sofa",
                    !formik.values.workplace_features.sofa
                  )
                }
              >
                <input
                  type="checkbox"
                  name="workplace_features.sofa"
                  checked={formik.values.workplace_features.sofa}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                مبلمان اداری
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "workplace_features.network",
                    !formik.values.workplace_features.network
                  )
                }
              >
                <input
                  type="checkbox"
                  name="workplace_features.network"
                  checked={formik.values.workplace_features.network}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                اینترنت
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "workplace_features.fixed_number",
                    !formik.values.workplace_features.fixed_number
                  )
                }
              >
                <input
                  type="checkbox"
                  name="workplace_features.fixed_number"
                  checked={formik.values.workplace_features.fixed_number}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                تلفن ثابت
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFD] rounded-xl py-2 px-3 ">
            <div className=" flex flex-row items-center gap-2 ">
              <div
                className={`${formStyles.container} `}
                onClick={() =>
                  formik.setFieldValue(
                    "workplace_features.reception_feature",
                    !formik.values.workplace_features.reception_feature
                  )
                }
              >
                <input
                  type="checkbox"
                  name="workplace_features.reception_feature"
                  checked={formik.values.workplace_features.reception_feature}
                  onChange={formik.handleChange}
                />
                <div className={formStyles.checkmark}></div>
              </div>
              <div className="font-normal text-xs leading-6 text-[#242424]">
                سیستم پذیرش
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-[80%] mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.workplace_features &&
            formik.touched.workplace_features
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.repair_features}
      </div>
      <div className="w-[80%]  relative mt-1  mb-3">
        <textarea
          name="repair_features"
          value={formik.values.repair_features}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.repair_features.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          تجهیزات تست و تعمیر
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.repair_features && formik.touched.repair_features
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.repair_features}
        </div>
      </div>

      <div className="w-[80%]  relative mt-1  mb-3 ">
        <textarea
          name="reception_status"
          value={formik.values.reception_status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            (formik.values.reception_status.length > 0
              ? " input-label-pos-active "
              : " ") +
            " min-h-32 w-full px-4 placeholder-gray resize-y   h-12   border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"
          }
        ></textarea>
        <label className=" absolute top-3 right-4  pointer-events-none rounded-2xl ">
          شرح وضعیت پذیرایی (اختیاری)
        </label>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
            " " +
            `${
              formik.errors.reception_status && formik.touched.reception_status
                ? " opacity-100 "
                : " opacity-0 "
            }`
          }
        >
          <DangerIcon />
          {formik.errors.reception_status}
        </div>
      </div>

      <div className="flex flex-col w-[80%] before:content-['']   before:h-[1px] before:w-full   before:bg-[#E6E6E6] before:mb-auto ">
        <div className="flex flex-row items-center justify-center p-3 gap-8 ">
          <button className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-mainGreen1  h-fit   hover:bg-mainGreen1  hover:text-white ">
            بازگشت به قبل
          </button>
          <button
            onClick={formik.handleSubmit}
            className="group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] "
          >
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
