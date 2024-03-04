import ArrowDownIcon from "@/icon/ArrowDown";
import React, { useState, useEffect } from "react";
import ClickOutside from "../../ClickOutside";
import formStyles from "../../formcheckbox.module.css";
import DangerIcon from "@/icon2/DangerIcon";

export default function ProvinceListComponent({ formik }) {
  const [statusProvince, setStatusProvince] = useState(false);

  const handleCloseProvinceList = () => {
    setStatusProvince(false);
  };
  const [provinceListItemsSource, setProvinceListitemsSource] = useState([]);
  const [provinceInput, setProvinceInput] = useState("");

  const [filteredProvinces, setFilteredProvinces] = useState([]);

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
  const handleChangeInputProvinceAutoComplete = (event) => {
    console.log(event);
    setProvinceInput(() => event.target.value);
    const filteredProvinces = provinceListItemsSource.filter((province) =>
      province.name.includes(event.target.value)
    );
    console.log(filteredProvinces);
    setFilteredProvinces(filteredProvinces);
    console.log(filteredProvinces.length === 1);
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
  return (
    <>
      <ClickOutside
        onClick={handleCloseProvinceList}
        className={" w-full flex flex-row mx-auto "}
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
                console.log(item)
                return (
                  <button
                    key={item.id}
                    value={item.id}
                    name={item.name}
                    onClick={() => {
 
                      formik.setFieldValue("province", `${item.id}`);
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
          "w-full mb-3 text-mainRed text-xs pt-1 flex  flex-row gap-1 items-center transition-all duration-500 " +
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
    </>
  );
}
