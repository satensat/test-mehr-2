import ArrowDownIcon from "@/icon/ArrowDown";
import React, { useState, useEffect } from "react";
import ClickOutside from "../../ClickOutside";
import formStyles from "../../formcheckbox.module.css";
import DangerIcon from "@/icon2/DangerIcon";

export default function CityListComponent({ formik }) {
  const [cityListItemsSource, setCityListitemsSource] = useState([]);
  const [cityListInput, setCityInput] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [statusCity, setStatusCity] = useState(false);
  useEffect(() => {
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
    fetchCityListitemsDependsProvince(formik.values.province);
  }, [formik.values.province]);

  const handleCloseCityList = () => {
    setStatusCity(false);
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
    <>
    
    <ClickOutside
      onClick={handleCloseCityList}
      className={" w-full flex flex-row mx-auto mt-1   "}
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
          <div className="flex flex-col bg-[#F7F7F7] border-[#e5e5e5] border-[2px] absolute z-[1] left-0 right-0 top-[39px] pt-3   rounded-b-3xl cursor-pointer max-h-[180px] overflow-y-auto  ">
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
          "w-full mb-3  text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
    </>
  );
}
