import { createSlice } from "@reduxjs/toolkit";

const initialState =({
   user:null,
})

const loginSlice =createSlice({
    name:"user",
    initialState,

    reducers :{
        login :(state,action) =>{
            state.user = action.payload;
        },
        logOut :(state,action) =>{
            state.user = null;
        },
    },
})

export const {login,logOut} =loginSlice.actions

export const selectUser =(state) => state.user.user

export default loginSlice.reducer