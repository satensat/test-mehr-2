
"use client";
import React, { useState } from "react";
export default function ProductCommentFormRate({sendDataRate}) {
  const [data, setData] = useState({
    buyRange: "0",
  });
  const [index2, setIndex2] = useState(0);
  const Rnageindex2 = (e) => {
    setIndex2(e.target.attributes["dataindex2"].value);
  };
  const changeHandler = (event) => {
    
    if (event.target.name == "quantity_buy") {
      setIndex2("0");
    }
    setData({ ...data, [event.target.name]: event.target.value });
    sendDataRate(event.target.value)
  };
  return (
 
    <div>
       <span className="text-slate-400 font-bold text-xs mb-2 block">امتیاز شما:</span>
     
      {data.buyRange > 0 ? <div className="text-base mb-5">{data.buyRange}  از 5</div> :  <p className="text-dangerRed text-base mb-5"> هنوز امتیازی نداده‌اید... </p>}
          <div className="slidecontainer pb-7">
            <input
              type="range"
              value={data.buyRange}
              onChange={changeHandler}
    
              min="0"
              max="5"
              step="1"
              className="sliderRange "
              name="buyRange"
              id="buyRange"
            />

            

            <div className={"transactionRangeBox  " }>
              <div
                className="transactionRangeLine"
                style={{ width: index2 }}
              ></div>
              <span
                className={
                  "transactionRangeItem " + (index2 == "0" ? " active" : "")
                }
                dataindex2="0"
                onClick={Rnageindex2}
              ></span>
              <span
                className={
                  "transactionRangeItem" + (index2 == "20%" ? " active" : "")
                }
                dataindex2="20%"
                onClick={Rnageindex2}
              ></span>
              <span
                className={
                  "transactionRangeItem" + (index2 == "40%" ? " active" : "")
                }
                dataindex2="40%"
                onClick={Rnageindex2}
              ></span>
              <span
                className={
                  "transactionRangeItem" + (index2 == "60%" ? " active" : "")
                }
                dataindex2="60%"
                onClick={Rnageindex2}
              ></span>
              <span
                className={
                  "transactionRangeItem" + (index2 == "80%" ? " active" : "")
                }
                dataindex2="80%"
                onClick={Rnageindex2}
              ></span>
               <span
                className={
                  "transactionRangeItem" + (index2 == "100%" ? " active" : "")
                }
                dataindex2="100%"
                onClick={Rnageindex2}
              ></span>
            </div>
          </div>

    </div>
  );
}
