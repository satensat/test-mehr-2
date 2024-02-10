import React from "react";
import Points from "./Points";
import MainForm from "./MainForm";
import Image from "next/image";

export default function FormContent() {
  return (
    <div className="py-3 flex flex-col md:flex-row gap-4 ">
      <MainForm />

      <div className=" md:w-[55%] hidden md:block  relative ">
        <Image
          alt="Mehr cooperation"
          className="w-full rounded-3xl  object-cover  sticky top-0 left-0   "
          src={"/agency/guarantee/cooperation.webp"}
          width={590}
          height={735}
        />
      </div>
    </div>
  );
}
