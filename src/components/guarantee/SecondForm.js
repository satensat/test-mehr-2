"use client";
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
import ButtonCoverLoader from "./ButtonCoverLoader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export default function SecondForm({
  mainData,
  setMainData,
  formik,
  secondFormDoneToThirdForm,
  filteredCities,
  setFilteredCities,
  loadingButton,
  setLoadingButton,
  // statusProvince,
  // setStatusProvince,
  // statusCity,
  // setStatusCity,
  provinceListItemsSource,
  setProvinceListitemsSource,
  cityListItemsSource,
  setCityListitemsSource,
  provinceInput,
  setProvinceInput,
  cityListInput,
  setCityInput,
  filteredProvinces,
  setFilteredProvinces,
  setActiveTab,
}) {
  const [statusProvince, setStatusProvince] = useState(false);


  const [statusCity, setStatusCity] = useState(false);
  const handleCloseProvinceList = () => {
    setStatusProvince(false);
  };

  const handleCloseCityList = () => {
    setStatusCity(false);
  };
  useEffect(() => {
    // http://192.168.10.195:8090/v1/api/province/
    async function fetchProvinceListitems() {
      try {
        const myDataQ = await fetch(
          `http://192.168.10.195:8090/v1/api/province/`
        );
        // console.log(myDataQ);

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
      // console.log(myDataQ);

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
  // province: { id: "", name: "" },
  // city: { id: "", name: "" },
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
      formik.setFieldValue("province", filteredProvinces[0].id);
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
      formik.setFieldValue("city", filteredCity[0].id);
      setCityInput(filteredCity[0].name);
      setStatusCity(false);
    }
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
            " absolute top-4 right-4 rounded-2xl  pointer-events-none text-sm group-focus-within:text-xs" +
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
      <div className="w-[80%] relative bg-[#F7F7F7] rounded-xl px-3 pb-3 ">
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
      <div
        className={
          "w-[80%] mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
          " " +
          `${
            formik.errors.business_type && formik.touched.business_type
              ? " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.business_type}
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
          <div className={"  group relative flex-grow  " + styles.formNumInput}>
            <input
              name="number_of_staff"
              value={formik.values.number_of_staff>0 ? formik.values.number_of_staff : ""}
              min="1"
              // value={formik.values.number_of_staff}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              className={
                (formik.values.number_of_staff>0 ? " input-label-pos-active " : " ") +
                " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"
              }
            />
            <label
              className={
                " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
                " " +
                `${
                  formik.values.number_of_staff>0
                    ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                    : ""
                }`
              }
            >
              تعداد افراد شاغل
            </label>
          </div>
          <button
            className="p-3 "
            onClick={() => {
           
              if(formik.values.number_of_staff>0){
                formik.setFieldValue(
                  "number_of_staff",
                  formik.values.number_of_staff - 1
                );
              }else{
                formik.setFieldTouched("number_of_staff", true);
              }
            }}
          >
            <MinusIcon color={"#3B3B3B"} width={"24"} height={"24"} />
          </button>
        </div>
        <div
          className={
            "text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 mx-14 " +
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
      <div className={"w-[80%] group  mt-1  mb-3 relative  "}>
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
        <label
          className={
            " absolute   top-4 right-4  pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff]  text-xs   " +
            " " +
            `${
              formik.values.area.length > 0
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
          }
        >
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
            htmlFor="province"
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
                  <button
                    key={item.id}
                    value={item.id}
                    name={item.name}
                    onClick={async () => {
                      formik.setFieldValue("province", item.id);
                      await fetchCityListitemsDependsProvince(item.id);
                      setProvinceInput(item.name);
                      setStatusProvince(false);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl text-right "
                  >
                    {item.name}
                  </button>
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
            formik.errors.province && formik.touched.province
              ? // &&
                // formik.errors.province.name &&
                // formik.touched.province.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {formik.errors.province}
        {/* {formik.errors.province?.name} */}
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
            htmlFor="city"
            className={
              " absolute  z-[3] top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
              " " +
              `${
                cityListInput.length > 0
                  ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                  : ""
              }` +
              " " +
              `${formik.values.province === "" ? " text-[#ababab]  " : ""}`
            }
          >
            شهر
          </label>
          <div className="w-fit h-fit absolute top-[50%] left-4 translate-y-[-50%] pointer-events-none  z-[3]">
            <ArrowDownIcon
              color={`${formik.values.province === "" ? "#ababab" : ""}`}
            />
          </div>

          <input
            disabled={formik.values.province === ""}
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
                  <button
                    key={item.id}
                    value={item.id}
                    name={item.name}
                    onClick={() => {
                      formik.setFieldValue("city", item.id);
                      setCityInput(item.name);
                      setStatusCity(false);
                    }}
                    className=" px-3 py-2 hover:bg-[#ebeaea] last:rounded-b-3xl text-right  "
                  >
                    {item.name}
                  </button>
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
            formik.errors.city && formik.touched.city
              ? // &&
                // formik.errors.city.name &&
                // formik.touched.city.name
                " opacity-100 "
              : " opacity-0 "
          }`
        }
      >
        <DangerIcon />
        {/* {formik.errors.city?.name} */}
        {formik.errors.city}
      </div>
      <div className="w-[80%] group relative mt-2 mb-3">
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
        <label
          className={
            " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formik.values.address.length > 0
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
          }
        >
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
      <div className="w-[80%] group relative mt-1  mb-3">
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
        <label
          className={
            " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formik.values.repair_features.length > 0
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
          }
        >
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
      <div className="w-[80%] group  relative mt-1  mb-3 ">
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
        <label
          className={
            " absolute   top-4 right-4 text-sm pointer-events-none group-focus-within:text-xs   group-focus-within:-translate-y-[24px] rounded-3xl  group-focus-within:px-[5px] transition-all duration-[0.4s] group-focus-within:bg-[#fff] " +
            " " +
            `${
              formik.values.reception_status.length > 0
                ? " text-xs  -translate-y-[24px]  px-[5px] bg-[#fff]  "
                : ""
            }`
          }
        >
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
            className={
              "group transition ease-in-out duration-500  flex flex-row justify-center items-center  px-3 py-1 text-sm not-italic font-bold leading-6  rounded-xl  text-white  bg-mainGreen1 h-fit   hover:bg-mainYellow  hover:text-[#000] " +
              " " +
              `${loadingButton ? "pointer-events-none" : " "}`
            }
          >
            مرحله بعد
            <div className="transition ease-in-out duration-500  group-hover:scale-110  brightness-0 invert  group-hover:brightness-0 group-hover:invert-0">
              <ArrowOpinion />
            </div>
            {loadingButton && <ButtonCoverLoader />}
          </button>
        </div>
      </div>
    </div>
  );
}

// setMainData({
//   ...mainData,
//   storeForm: {
//     applicator: mainData?.varificationForm?.phone_number,
//     name: values.name,
//     province: values.province.id,
//     city: values.city.id,
//     is_owner: values.is_owner,
//     area: values.area,
//     business_type: {
//       is_distribution: values.business_type.is_distribution,
//       is_manufacturing: values.business_type.is_manufacturing,
//       is_technical: values.business_type.is_technical,
//       is_service: values.business_type.is_service
//     },
//     number_of_staff: values.number_of_staff,
//     address: values.address,
//     reception_status: values.reception_status,
//     repair_features: values.repair_features,
//     workplace_features: {
//       sofa: values.workplace_features.sofa,
//       network: values.workplace_features.network,
//       fixed_number: values.workplace_features.fixed_number,
//       reception_feature: values.workplace_features.reception_feature
//     },
//   }
// });
