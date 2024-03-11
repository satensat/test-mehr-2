import React from "react";

export default function ButtonCoverLoader() {
  return (
    <div className="w-full flex flex-row items-center justify-center h-full absolute top-0 inset-x-0 bg-slate-50 bg-opacity-70 p-3 rounded-xl">
      <div
        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-gray-400 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
