import React from "react";
import Points from "./Points";
import MainForm from "./MainForm";
import Image from "next/image";

export default function FormContent() {
  return (
    <div className="py-3 flex flex-col md:flex-row gap-4">
      <MainForm />

      <div className=" md:w-[55%] hidden md:block ">
        <Image
          alt="Mehr cooperation"
          className="w-full rounded-3xl  object-cover"
          src={"/agency/guarantee/cooperation.webp"}
          width={590}
          height={735}
        />
      </div>
    </div>
  );
}
