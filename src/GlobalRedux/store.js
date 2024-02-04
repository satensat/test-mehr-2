
"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/GlobalRedux/Features/counter/counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
},);


// const loadPreLoadState = () => {
//   try {
//     const serializedstate = localStorage.getItem("counter");
//     if (serializedstate) {
//       return JSON.parse(serializedstate);
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     return undefined;
//   }
// };
// const localStorageMiddleware = ({ getState }) => {
//   return next => action => {
//     const result = next(action);
//     localStorage.setItem('counter', JSON.stringify(getState()));
//     return result;
//   };
// };


export const store = configureStore({
  devTools: true,
  // preloadedState: loadPreLoadState(),
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware().concat(localStorageMiddleware),
});



//  const saveCompare = (counter) => {
//   try {
//     const nextCompare = JSON.stringify(counter);
//     localStorage.setItem("counter", nextCompare);
//   } catch (error) {
//     console.log("error");
//   }
// };

// store.subscribe(() => {
//   saveCompare({
//     counter: store.getState()?.counter,
//   });
// });