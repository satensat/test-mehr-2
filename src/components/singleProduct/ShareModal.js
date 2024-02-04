"use client";
import React, { useState , useEffect } from "react";
import CloseModal from "@/icon/CloseModal";
import CopyIcon from "@/icon/CopyIcon";
import DoneIcon from "@/icon/DoneIcon";
import MailIcon from "@/icon/MailIcon";
import ShareIcon from "@/icon/ShareIcon";
import TelegramIcon from "@/icon/TelegramIcon";
import Image from "next/image";
import ShareIconButton from "@/icon/Share";

export default function Modal({en_name, fa_name }) {
  const [showModal, setShowModal] = useState(false);
  const handleClickOpen = () => {
    setShowModal(true);
  };
  const productName1 = fa_name;
  const productName2 = en_name;
  const [copyText, setCopy] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(false);
useEffect(()=>{
  setCurrentUrl(window.location.href);
 
},[])

  const handleCopy = () => {
    const currentURL = window.location.href;
    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    // alert("آدرس وب‌سایت کپی شد: " + currentURL);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  function firstCharachtersInString(text) {
    return text.slice(0, 13);
  }
  return (
    <>
      <button
        onClick={handleClickOpen}
        className="transition ease-in-out duration-400 group flex flex-row justify-center items-center text-[#13625C] py-1 md:py-2 px-1 border-solid border-[1px] text-sm not-italic font-bold leading-6 border-[#13625C] rounded-xl md:text-sm xl:px-1 hover:text-white  hover:bg-mainGreen1 "
      >
        <div className="px-1 md:pl-0 xl:px-1">اشتراک‌گذاری</div>

        <div className="transition ease-in-out duration-400   group-hover:brightness-0 group-hover:invert ml-1">
          <ShareIconButton className="" />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  outline-none focus:outline-none  bg-opacity-[0.32] fixed inset-0 z-[999] bg-[#000000] ">
            <div className=" w-10/12 my-6 mx-auto  max-w-[310px]  bg-[#FDFDFD] rounded-3xl shadow-lg md:w-6/12 xl:w-3/12 ">
              <div className="  flex flex-col w-full   p-3 ">
                <div className="w-full flex flex-row  border-border-[#E6E6E6] border-b justify-between items-center ">
                  <div className=" text-base not-italic font-bold py-3 leading-6 text-[#3B3B3B]">
                    اشتراک گذاری محصول
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="cursor-pointer transition ease-in-out duration-400  hover:brightness-150 hover:invert  hover:bg-red "
                  >
                    <CloseModal
                    // color={"#e60012"}
                    />
                  </button>
                </div>
                <div className="w-full  px-3 py-3 rounded-b-2xl bg-lightGray leading-6 text-sm">
                  <div className="font-bold text-[#3B3B3B] cursor-pointer font-costumFaNum">
                    {productName1}
                  </div>
                  <div className=" text-[#525252] cursor-pointer">
                    {productName2}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4  px-3 py-3 rounded-2xl bg-lightGray my-4 leading-6 text-sm">
                  <div
                    className="w-full flex flex-row pr-3 py-1  bg-[#FDFDFD] cursor-pointer rounded-xl justify-start items-center transition ease-in-out duration-300 hover:scale-105 "
                    onClick={handleCopy}
                  >
                    <div className="ml-2">
                      <ShareIcon />
                    </div>
                    <div className="flex flex-col w-6/12 ">
                      <div className="text-[#808080] text-xs not-italic font-bold leading-6">
                        لینک کوتاه
                      </div>
                      <div className="text-base not-italic font-normal leading-8 text-[#242424] text-left ">
                        {`...${firstCharachtersInString(currentUrl)}`}
                      </div>
                    </div>
                    {!copyText && (
                      <button
                        className="flex flex-row justify-evenly items-center py-2 w-3/12  cursor-pointer mx-auto "
                        onClick={handleCopy}
                      >
                        <div className="text-[#13625C] text-sm not-italic font-bold leading-6">
                          کپی
                        </div>
                        <div className="text-[#13625C] text-sm not-italic font-bold leading-6 p-1">
                          <CopyIcon />
                        </div>
                      </button>
                    )}
                    {copyText && (
                      <button className="flex flex-row  justify-start  items-center py-1  cursor-pointer mr-auto  ml-1">
                        <div className="text-[#13625C] text-sm not-italic font-bold leading-6">
                          کپی شد!
                        </div>
                        <div className="text-[#13625C] text-sm not-italic font-bold leading-6 pr-1">
                          <DoneIcon />
                        </div>
                      </button>
                    )}
                  </div>
                  <a
                    href={`tg://msg_url?url=${window.location.href}&text=${productName1} مهرسرمستان`}
                    target="_blank"
                    className="w-full flex flex-row px-3 py-1  bg-[#FDFDFD] cursor-pointer rounded-xl justify-start items-center transition ease-in-out duration-300 hover:scale-105"
                  >
                    <div className="ml-2">
                      <TelegramIcon />
                    </div>
                    <div className="text-base not-italic font-normal leading-8 text-[#242424]">
                      از طریق تلگرام
                    </div>
                  </a>
                  <a
                    // href={`whatsapp://send?text=Check this out:http://${
                    //   window.location.hostname + window.location.pathname
                    // }`}
                    href={`https://api.whatsapp.com/send?text=${currentUrl}`}
                    className="w-full flex flex-row px-3 py-1  bg-[#FDFDFD] cursor-pointer rounded-xl justify-start items-center transition ease-in-out duration-300 hover:scale-105"
                  >
                    <div className="ml-2">
                      <Image
                        src={"/single-product/whatsapp-icon.webp"}
                        width={24}
                        height={24}
                        alt={"logo Lenovo"}
                      />
                    </div>
                    <div className="text-base not-italic font-normal leading-8 text-[#242424]">
                      از طریق واتساپ
                    </div>
                  </a>
                  <a
                    href={`mailto:?subject=${productName1} مهرسرمستان&body=${currentUrl}`}
                    target="_blank"
                    className="w-full flex flex-row px-3 py-1  bg-[#FDFDFD] cursor-pointer rounded-xl justify-start items-center transition ease-in-out duration-300 hover:scale-105"
                    // onClick={handleClickMail}
                  >
                    <div className="ml-2">
                      <MailIcon />
                    </div>
                    <div className="text-base not-italic font-normal leading-8 text-[#242424]">
                      از طریق ایمیل
                    </div>
                  </a>
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full transition ease-in-out duration-300 p-3 text-mainGreen1 text-center text-sm not-italic font-bold leading-6 rounded-2xl hover:bg-mainGreen1 hover:text-white"
                  >
                    خروج
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
}

// onClick={() => setShowModal(false)}
{
  /* whatsapp://send?text=Check this out: " + 'http://' + window.location.hostname + window.location.pathname */
}
//https://t.me/share/url?url={url}&text={text}
// https://telegram.me/share/url?url={url}&text={text}
// tg://msg_url?url={url}&text={text}
