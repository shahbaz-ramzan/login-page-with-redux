import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlicer";

export const store =configureStore({
    reducer :{
    

       user:loginSlice,
         
    },
})