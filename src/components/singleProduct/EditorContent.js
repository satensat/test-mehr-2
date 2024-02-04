import React from "react";
import styles from "./editorContent.module.css";
import ArrowDownIcon from "@/icon/arrow-down";

export default function EditorContent({ description }) {
  return (
    <div
      // id="expertcheck"
      className={
        "w-full flex flex-col rounded-3xl bg-[#FDFDFD] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-3  " +
        styles.custom_checkbox
      }
    >
      <span
        id="expertcheck"
        className="translate-y-[-70px] md:translate-y-[-120px]"
      ></span>
      <input type="checkbox" id="readMoreCheckbox"  />
      <div
        className={
          // `transition ease-in-out duration-500  ` +
          styles.editor_height_container
        }
      >
        <div className="w-full flex flex-col pb-3 px-3 ">
          <div className="pb-2 w-full flex flex-row justify-between border-b border-[#E6E6E6]  text-[#3B3B3B] text-lg  font-bold leading-8">
            بررسی تخصصی
          </div>
        </div>
        {description ? (
          <div
            className={styles.editor_content}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          ""
        )}
      </div>

      {description.length > 500 && (
        <label
          htmlFor="readMoreCheckbox"
          className={
            styles.custom_checkbox_button +
            " " +
            "group  m-auto  flex flex-row justify-evenly items-center rounded-2xl bg-[#f5a800]  text-black transition ease-in-out duration-500 px-7 py-2  hover:filter hover:invert-1 hover:bg-[#13625c] hover:text-white  text-sm  md:text-base not-italic font-bold leading-6"
          }
        >
          <span className={styles.custom_checkbox_text_close}>
          خواندن کامل مطلب
          </span>
          <span className={styles.custom_checkbox_text_open}>بستن مطلب</span>
          <div
            className={
              styles.custom_checkbox_icon +
              " " +
              " transition ease-in-out duration-400  group-hover:brightness-0 group-hover:invert ml-1 md:ml-0 mr-1 "
            }
          >
            <ArrowDownIcon />
          </div>
        </label>
      )}
    </div>
  );
}
