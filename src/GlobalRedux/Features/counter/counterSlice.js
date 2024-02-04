
"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   count:0,
//   value:  [],
// };
const initialState = localStorage.getItem("counter")
  ? JSON.parse(localStorage.getItem("counter")).counter
  : {
    count:0,
    value:  [],
  };
  console.log(initialState)
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,action) => {
      state.count = state.count + 1
      if(state.value.indexOf(action.payload)== -1){
        state.value= [...state.value , action.payload]
        localStorage.setItem("counter", JSON.stringify(state));
      }else{
        state.value =  state.value.splice(state.value.indexOf(action.payload) ,state.value.indexOf(action.payload)+1);
        localStorage.setItem("counter", JSON.stringify(state));
      }
      
    },
    decrement: (state,action) => {
   
      
 
      if(state.value.indexOf(action.payload) > 0 ){
        state.count = state.count - 1
        state.value =  state.value.splice(state.value.indexOf(action.payload) ,state.value.indexOf(action.payload)+1);
        localStorage.setItem("counter", JSON.stringify(state));
      }
      if(state.value.indexOf(action.payload) == 0 ){
        state.count = state.count - 1








        
        state.value =  []
        localStorage.setItem("counter", JSON.stringify(state));
      }
      // localStorage.setItem("counter", JSON.stringify(state));
    }
  },
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;