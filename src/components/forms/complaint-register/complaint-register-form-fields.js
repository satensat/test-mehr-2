"use client";
import ArrowLeftIcon from "@/icon/arrow-left";
import React, { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import ArrowDownIcon from "@/icon/arrow-down";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ComplaintRegisterFormFields() {

    const formik = useFormik({
      initialValues: {
       
        subjectComplaint :'',
        subject:'',
        national_id : "",
        first_name : '',
        last_name:'',
        section :'',
        last_name  : '',
        description: '',
        phone_number : '',
        reception_code : '',
         imei : '',
         serial_number : '',
      },
      onSubmit: (values) => {
        console.log(values)
        try {
          console.log(values)
          const res =  fetch(`http://192.168.10.195:8090/v1/api/complantes/`,{
            method: 'POST',
            body: JSON.stringify({
                "device_type"  : activeTab,
               
                "reception_code" : values.reception_code,
                 "imei" : values.imei,
                 "serial_number" : values.serial_number,
              "subject":values.subject,
              "section":values.section,
              "first_name": values.first_name,
              "last_name":values.first_name,
              "phone_number": values.phone_number,
              "description": values.description,
              "national_id" : values.national_id,
            }),
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(response =>  response.json().then(data => ({status: response.status, body: data})))
          .then(detail => {
            console.log(detail)
            console.log(detail.status)
            if(detail.status == "400"){
            
              const featureEntries = Object.entries(detail.body);
              console.log(featureEntries[0])
                
              {featureEntries.map(item => {     
           toast.warn(item[1][0]);
            })}
             
            }
            if(detail.status == "201"){
              toast.success('شکایت شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            
                })
            }
          })
          .catch((err)=>console.log(err))
    
        } catch (error) {
            console.log(error)
        }
       
      },
     
      validationSchema: yup.object({
         subject : yup.string().trim().required('موضوع شکایت را انتخاب کنید'),
         section : yup.string().trim().required('بخش مورد شکایت را انتخاب کنید '),
       
         first_name : yup.string().trim().required('نام را وارد کنید'),
         last_name : yup.string().trim().required('نام خانوادگی را وارد کنید'),
         phone_number :  yup.string().trim().required('شماره تماس همراه را وارد کنید'),
         national_id : yup.string().trim().required('  کد ملی را وارد کنید'),
        // reception_code : yup.string().trim().required('کد را وارد کنید'),
        // imei : yup.string().trim().required('کد را وارد کنید'),
        // serial_number :yup.string().trim().required('کد را وارد کنید'),
       
           description: yup.string().trim().required('پیام را وارد کنید'),
      }),
    });
  
    const [statusSubject, setStatusSubject] = useState(false);
    const [statusSection, setStatusSection] = useState(false);
    const [activeTab, setActiveTab] = useState("CODE");
    return (
   <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
<form className="flex flex-wrap justify-between pt-9 " onSubmit={formik.handleSubmit}>

        <div className="  px-3 flex flex-wrap justify-between w-full">
   
    <div className="w-full md:w-[49%] mb-8 relative   ">
       <input 
       type="text "
       name="section"
       value={(formik.values.section == "WARRANTI" ? "واحد خدمات پس از فروش و گارانتی ": "") || (formik.values.section ==  "SALE" ? " واحد فروش": "")|| (formik.values.section ==  "ETC" ? "سایر بخش‌ها یا افراد":"")}
      id="section"
       readOnly
       onClick={() => setStatusSection(!statusSection)}
       onBlur={formik.handleBlur}
       className={(formik.values.section.length > 0 ? " input-label-pos-active " : " ") + " w-full relative z-[7]  px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
    
         <label className=" absolute top-3 origin-center right-4  z-10 pointer-events-none">بخش  مورد شکایت</label>
         <span className={ (statusSection ? "rotate-180 " : "rotate-0 ") + " absolute top-4 z-10 left-4 pointer-events-none "}>
    <ArrowDownIcon/>
    </span>
        {(formik.errors.section  && formik.touched.section) && (
     <div className="text-mainRed text-xs pt-1 ">{formik.errors.section}</div>
   )}
{statusSection ? <div className="flex flex-col bg-[#F7F7F7] absolute z-[5] left-0 right-0 top-[39px] pt-3   rounded-b-3xl input-selected">
      <div className=" px-3 py-2  " >
           <label for="WARRANTI" className="flex items-center relative">  <input type="radio" id="WARRANTI"  name="section"
     onClick={() => setStatusSection(!statusSection)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="WARRANTI" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>واحد خدمات پس از فروش و گارانتی    </label>
    </div> 
     <div className=" px-3 py-2 ">
    <label for="SALE" className="flex items-center relative"><input type="radio" id="SALE"  name="section"
   onClick={() => setStatusSection(!statusSection)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="SALE" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span> واحد فروش      </label>
   </div>
   <div  className=" px-3 py-2 ">
      <label for="ETC" className="flex items-center relative" > <input  name="section"
        onClick={() => setStatusSection(!statusSection)}
       onChange={formik.handleChange }
       onBlur={formik.handleBlur} type="radio" id="ETC"  value="ETC" className="opacity-0 pointer-events-none absolute"/>  <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2 "></span>   سایر بخش‌ها یا افراد  </label>
  </div>
   </div>: ""}
   </div>

   <div className="w-full md:w-[49%] mb-8 relative   ">
       
        
       <input 
       type="text "
       name="subject"
       value={(formik.values.subject == "BROKEN_DEVICE" ? "خرابی دستگاه  ": "") || (formik.values.subject ==  "PRICE" ? "هزینه خدمات": "")||
        (formik.values.subject ==  "QUALITY" ? "کیفیت خدمات ":"") || (formik.values.subject ==  "DELAY" ? "تاخیر در فرایند خدمات ": "") || 
        (formik.values.subject ==  "BEHAVIOR" ? "برخورد کارکنان ": "") || (formik.values.subject ==  "UNRESPONSIVE" ? "عدم پاسخگویی یا همکاری": "") 
       || (formik.values.subject ==  "ENVIRONMENT" ? "محیط نمایندگی یا شعبه ": "") || (formik.values.subject ==  "ETC" ? "سایر موارد": "") }
      id="subject"
       readOnly
       onClick={() => setStatusSubject(!statusSubject)}
       onBlur={formik.handleBlur}
       className={(formik.values.subject.length > 0 ? " input-label-pos-active " : " ") + " w-full relative z-[7]  px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
    
         <label className=" absolute top-3 origin-center right-4  z-10 pointer-events-none">موضوع شکایت</label>
         <span className={ (statusSubject ? "rotate-180 " : "rotate-0 ") + " absolute top-4 z-10 left-4 pointer-events-none "}>
    <ArrowDownIcon/>

    </span>
        {(formik.errors.subject  && formik.touched.subject) && (
     <div className="text-mainRed text-xs pt-1 ">{formik.errors.subject}</div>
   )}
{statusSubject ? <div className="flex flex-col bg-[#F7F7F7] absolute z-[5] left-0 right-0 top-[39px] pt-3   rounded-b-3xl input-selected">
<div className=" px-3 py-2  " >
           <label for="BROKEN_DEVICE" className="flex items-center relative">  <input type="radio" id="BROKEN_DEVICE"  name="subject"
     
           onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="BROKEN_DEVICE" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>  خرابی دستگاه </label>
    </div>
    <div className=" px-3 py-2  " >
           <label for="PRICE" className="flex items-center relative">  <input type="radio" id="PRICE"  name="subject"
     
     onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="PRICE" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>   هزینه خدمات    </label>
    </div>
    <div className=" px-3 py-2  " >
           <label for="QUALITY" className="flex items-center relative">  <input type="radio" id="QUALITY"  name="subject"
     
     onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="QUALITY" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>  کیفیت خدمات     </label>
    </div>
    <div className=" px-3 py-2  " >
           <label for="DELAY" className="flex items-center relative">  <input type="radio" id="DELAY"  name="subject"
     
     onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="DELAY" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>  تاخیر در فرایند خدمات     </label>
    </div>
    <div className=" px-3 py-2  " >
           <label for="BEHAVIOR" className="flex items-center relative">  <input type="radio" id="BEHAVIOR"  name="subject"
     onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="BEHAVIOR" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>  برخورد کارکنان     </label>
    </div>
      <div className=" px-3 py-2  " >
           <label for="UNRESPONSIVE" className="flex items-center relative">  <input type="radio" id="UNRESPONSIVE"  name="subject"
     
     onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="UNRESPONSIVE" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span>عدم پاسخگویی یا همکاری    </label>
    </div> 
     <div className=" px-3 py-2 ">
   
    <label for="ENVIRONMENT" className="flex items-center relative"><input type="radio" id="ENVIRONMENT"  name="subject"
   
   onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} value="ENVIRONMENT" className="opacity-0 pointer-events-none absolute"/> <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2"></span> محیط نمایندگی یا شعبه      </label>
   </div>
   <div  className=" px-3 py-2 ">
      
            <label for="ETC" className="flex items-center relative" > <input  name="subject"
      
      onClick={() => setStatusSubject(!statusSubject)}
       onChange={formik.handleChange }
     
       onBlur={formik.handleBlur} type="radio" id="ETC"  value="ETC" className="opacity-0 pointer-events-none absolute"/>  <span className="checkmark inline-flex w-6 h-6 rounded-3xl ml-2 "></span>  سایر موارد</label>
  </div>
   </div>: ""}
   </div>
  {
formik.values.section == "WARRANTI"
?



<div  className="w-full  bg-[#FDFDFD] rounded-xl shadow-G1  mb-8 p-4">
<p>
سریال دستگاه یا کد پذیرش خود را وارد کنید.
</p>

<div className=" border border-gray-300 flex rounded-full  max-w-fit mx-auto overflow-hidden my-4">
  <span className={"p-3 min-w-28 text-center " + ((activeTab == "CODE") ? "bg-mainGreen1 text-white": null ) } tab_sub="CODE" onClick={()=> setActiveTab("CODE") }>
  کد پذیرش
  </span>
  <span  className={"p-3 min-w-28 text-center border-x  border-gray-300" + ((activeTab == "PHONE") ? "bg-mainGreen1 text-white": null ) } tab_sub="PHONE" onClick={()=> setActiveTab("PHONE") }>
  موبایل یا تبلت
  </span>
  <span  className={"p-3 min-w-28 text-center " + ((activeTab == "LAPTOP") ? "bg-mainGreen1 text-white": null ) } tab_sub="LAPTOP" onClick={()=> setActiveTab("LAPTOP") }>
  لپتاپ
  </span>
</div>
{ (activeTab == "CODE") ? 
<div  className="w-full md:w-[49%] mb-6 relative mx-auto mt-8">


<input 
 name="reception_code"
 value={formik.values.reception_code}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
type="text"
className={(formik.values.reception_code.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
<label className=" absolute top-3 right-4  pointer-events-none">کد یکتای پذیرش</label>
  {formik.errors.reception_code && (
<div className="text-mainRed text-xs pt-1 ">{formik.errors.reception_code}</div>
)}
</div>
: null}

{ (activeTab == "PHONE") ? 
<div  className="w-full md:w-[49%] mb-6 relative mx-auto mt-8">

<input 
 name="imei"
 value={formik.values.imei}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
type="text"
className={(formik.values.imei.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
<label className=" absolute top-3 right-4  pointer-events-none"> شماره IMEI1</label>
  {formik.errors.imei && (
<div className="text-mainRed text-xs pt-1 ">{formik.errors.imei}</div>
)}
</div>
: null}

{ (activeTab == "LAPTOP") ? 
<div  className="w-full md:w-[49%] mb-6 relative mx-auto mt-8">

<input 
 name="serial_number"
 value={formik.values.serial_number}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
type="text"
className={(formik.values.serial_number.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
<label className=" absolute top-3 right-4  pointer-events-none">شماره سریال دستگاه</label>
  {formik.errors.serial_number && (
<div className="text-mainRed text-xs pt-1 ">{formik.errors.serial_number}</div>
)}
</div>
: null}

  </div>



: null

  }
 
 
    <div className="w-full md:w-[49%] mb-8 relative">
    <input 
     name="first_name"
     value={formik.values.first_name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    type="text"
    className={(formik.values.first_name.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
<label className=" absolute top-3 right-4  pointer-events-none">نام</label>
      {(formik.errors.first_name  && formik.touched.first_name)   && (
  <div className="text-mainRed text-xs pt-1 ">{formik.errors.first_name }</div>
)}
</div>
    <div className="w-full md:w-[49%] mb-8 relative">
        <input 
         name="last_name"
         value={formik.values.last_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        className={(formik.values.last_name.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
    <label className=" absolute top-3 right-4  pointer-events-none"> نام خانوادگی</label>
          {(formik.errors.last_name  && formik.touched.last_name)   && (
      <div className="text-mainRed text-xs pt-1 ">{formik.errors.last_name}</div>
    )}
    </div>
    <div className="w-full md:w-[49%] mb-8 relative">
        <input type="text"  name="phone_number"
         value={formik.values.phone_number }
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={(formik.values.phone_number.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
       <label className=" absolute top-3 right-4  pointer-events-none">شماره تماس همراه</label>
        {(formik.errors.phone_number  && formik.touched.phone_number)  && (
      <div className="text-mainRed text-xs pt-1 ">{formik.errors.phone_number }</div>
    )}
    </div>
    <div className="w-full md:w-[49%] mb-8 relative"> 
        <input type="text" 
          name="national_id"
          value={formik.values.national_id }
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         className={(formik.values.national_id.length > 0 ? " input-label-pos-active " : " ") + " w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos"}/>
        <label className=" absolute top-3 right-4  pointer-events-none">کد ملی</label>
         {(formik.errors.national_id  && formik.touched.national_id)  && (
      <div className="text-mainRed text-xs pt-1 ">{formik.errors.national_id }</div>
    )}
    </div>
    <div className="w-full md:w-full relative">
       <textarea  name="description"
          value={formik.values.description}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} 
         className={(formik.values.description.length > 0 ? " input-label-pos-active " : " ") + "  min-h-32 w-full px-4 placeholder-gray  h-12 resize-none  border border-gray-300 rounded-2xl bg-white input-label-pos pt-3"}
        ></textarea>
           <label  className=" absolute top-3 right-4  pointer-events-none">
           متن پیام شکایت را بنویسید...
           </label>
            {(formik.errors.description  && formik.touched.description) && (
      <div className="text-mainRed text-xs pt-1 ">{formik.errors.description}</div>
    )}
    </div>
    <button  type="submit" className="bg-mainYellow rounded-xl  px-6 leading-10 inline-flex mt-8 mx-auto font-bold text-base items-center  hover:bg-[#f7f7f7]  transition  duration-500">ارسال پیام 
    <span className="mr-2">
        <ArrowLeftIcon color="#000"/>
    </span>
    </button>
    </div>
</form>
   </>
    );
  }