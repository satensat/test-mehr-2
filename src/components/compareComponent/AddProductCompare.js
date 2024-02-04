import PlusIcon from "@/icon/PlusIcon";

export default function AddProductCompare() {
  return (

      <div className="group transition ease-in-out duration-500  border-dashed border-[3px] border-[#13625C]   min-w-[176px]  w-1/2  md:min-w-[314px] md:w-1/4  rounded-2xl flex flex-row justify-center items-center cursor-pointer hover:scale-105 md:px-3">
       
          <button
            className="mx-auto h-full  flex flex-row  rounded-xl  justify-between items-center    py-2  transition ease-in-out duration-500 
        "
          >
            <div className="text-base not-italic font-normal leading-8 text-mainGreen1 ml-2 ">
              اضافه کردن
            </div>
            <div className="transition ease-in-out duration-500 ">
              <PlusIcon color={"#13625C"} />
            </div>
          </button>

      </div>

  );
}

// red  ---> "#13625C" invert brightness-200
