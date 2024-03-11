import DangerIcon from "@/icon2/DangerIcon";
import React from "react";
import CertificateComponent from "./CertificateComponent";
import BusinessLicense from "./BusinessLicense";

export default function CompanyInfo({ formik }) {
  return (
    <div className=" flex flex-col  w-full h-fit md:w-[50%]  items-center bg-[#f7f7f7] pt-1 px-3 pb-3 rounded-2xl gap-3 ">
      <div className="flex flex-row justify-between   w-full">
        <div className="text-[#242424] text-sm   leading-6 py-1  w-full ">
          اطلاعات شرکت
        </div>
        <div className=" flex flex-row gap-1 p-1 items-center justify-end ">
          <label className="relative inline-flex items-center cursor-pointer w-[48px] h-[24px] my-auto  ">
            <input
              readOnly
              type="checkbox"
              className="sr-only peer"
              checked={formik.values.legal_purchase}
            />
            <div
              onClick={() => {
                formik.setFieldValue(
                  "legal_purchase",
                  !formik.values.legal_purchase
                );
                formik.setFieldValue("certificate_file", []);
              }}
              className="w-[48px] h-[24px] bg-[#C2CFD6] rounded-full peer peer-focus:ring-2 peer-focus:ring-[#AAEEE9]  dark:peer-focus:ring-[#AAEEE9] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[24px]  after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-lightGray  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#13625C] peer-checked:hover:bg-[#1B887F] hover:bg-[#9AB0BC]"
            ></div>
          </label>
          <div className="text-[#242424] text-xs leading-5 min-w-[62px] ">
            خرید حقوقی
          </div>
        </div>
      </div>

      <BusinessLicense formik={formik} />
      {formik.values.legal_purchase && <CertificateComponent formik={formik} />}
    </div>
  );
}
