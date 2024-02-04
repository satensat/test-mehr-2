
"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloseIcon from "@/icon/close";
import Comment from "@/icon/comment";
import MessageAdd from "@/icon/message-add";
import ProductCommentFormRate from "./comment-form-rate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export  default  function ProductCommentForm({slug ,type ,id}) {
  const [rateValue, setRateValue] = useState();
  function getDataRate(val) {
    setRateValue(val);
  }
  

  const [status, setStatus] = useState(false);
  // +++++++
 

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: (values) => {
    
      
      try {
        const res =  fetch(`http://192.168.10.195:8090/v1/api/products/comments/${type=="main"?slug:id}/`,{
          method: 'PATCH',
          body: JSON.stringify({
            "text":values.message,
            "name": values.name,
            "email": values.email,
            "score": rateValue
          }),
          headers: {
            'content-type': 'application/json'
          }
        }).then(response =>  response.json().then(data => ({status: response.status, body: data})))
        .then(detail => {
        
          if(detail.status == "400"){
       
            const featureEntries = Object.entries(detail.body);
            console.log(featureEntries)
            {featureEntries.map(item => (      
         
           toast.warn(item[1][0], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        
            })
               ))}
           
          }
          if(detail.status == "201" || detail.status == "200"){
            toast.success('پیام شما با موفقیت ثبت شد، در صورت نیاز همکاران با شما ارتباط میگیرند.', {
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
      name: yup.string().trim().required('نام را وارد کنید'),
      email: yup
        .string()
        .email('ایمیل نامعتبر است')
        .required('ایمیل را وارد کنید'),
      message: yup.string().trim().required('پیام را وارد نمایید'),
    }),
  });
 

  return (
 <>
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{ type=="main" ?  <button onClick={()=> setStatus(true)} className="bg-mainGreen1 text-white rounded-xl min-w-40 px-2 h-11 flex items-center justify-center">
        افزودن نظر
       <span className="mr-2">
       <Comment/>
       </span>
        </button> :   <button onClick={()=> setStatus(true)}  className="flex justify-center items-center mt-3 bg-white h-8 min-w-24 rounded-xl  m-auto font-bold border-mainGreen1 border text-mainGreen1 ">
           پاسخ
           <span className="mr-1">
           <MessageAdd/>
           </span>
       </button>}

 <div className={!status ? "hidden " : "fixed " + " inset-x-0 inset-y-0 bg-slate-900/30 z-[100] p-3" }>
  <div className="bg-lightWhiteSmoke  max-w-sm m-auto rounded-3xl p-3 my-4">
  <div className="border-gray-300 border-b mb-6 pb-4 pt-1 text-base flex justify-between items-center">
    <span className="font-bold text-neutral-700 ">
    ثبت پاسخ
    </span>
    <span onClick={()=> setStatus(false)}>
      <CloseIcon/>
    </span>
  </div>
 

  
  <form className="flex-col flex" onSubmit={formik.handleSubmit}
  
  >
    { type=="main" ?   <ProductCommentFormRate sendDataRate={getDataRate}/> : ""}
   
    <div className="mb-8">
    <input 
    name="name"
    type="text"
     className=" w-full p-4 placeholder-gray  h-11 resize-none  border border-gray-300 rounded-2xl bg-white"
     value={formik.values.name}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
    placeholder="نام" />
    {formik.errors.name && (
      <div className="text-mainRed text-xs pt-1 ">{formik.errors.name}</div>
    )}
    </div>
  
   
<div className="mb-8">
<input 
name="email"
    type="email"
     className=" w-full p-4 placeholder-gray  h-11 resize-none  border border-gray-300 rounded-2xl bg-white"
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
    placeholder="ایمیل" />
    {formik.errors.email && (
      <div className="text-mainRed text-xs pt-1">{formik.errors.email}</div>
    )}
</div>
 <div className="mb-6">
 <textarea
      name="message"
      className=" w-full p-4 placeholder-gray  h-28 resize-none  border border-gray-300 rounded-2xl bg-white"
      placeholder="متن نظر را اینجا بنویسید..."
      value={formik.values.message}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.errors.message && (
      <div className="text-mainRed text-xs pt-1">{formik.errors.message}</div>
    )}
 </div>
 
        <div className="flex justify-center mb-4" >
    <button className="bg-white mx-3 min-w-28 h-8 rounded-xl text-mainGreen1" onClick={()=> setStatus(false)}>
      بستن
    </button>
    <button  type="submit" className="bg-mainGreen1 mx-3 text-white min-w-28 h-8 rounded-xl">
    ثبت رای
    </button>
  </div>
  </form> 
 
  </div>
  
 </div>


 
 </>
    
  );
}
