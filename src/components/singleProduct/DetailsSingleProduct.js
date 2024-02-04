
import OneDetailSingleProduct from "./OneDetailSingleProduct";

export default function DetailsSingleProduct({feature ,amount}) {
  const featureEntries = Object.entries(feature);

  return (
    <div  className="w-full  flex flex-col rounded-3xl bg-lightGray  leading-6 ralative">
      <span id="details" className="translate-y-[-70px] md:translate-y-[-120px]" ></span>
      <div className="w-full flex flex-col px-3 pt-3 pb-3">
        <div  className="w-full flex flex-row justify-between border-b border-[#E6E6E6]  text-[#3B3B3B] text-sm  md:text-lg pb-2 font-bold ">
          جزئیات
        </div>
      </div>
      <div className="w-full flex flex-col px-3 pb-3 gap-4 ">
      {featureEntries.map(item => (
        <OneDetailSingleProduct subject={item}  amount={amount} />
      ))}
       
      </div>
    </div>
  );
}
