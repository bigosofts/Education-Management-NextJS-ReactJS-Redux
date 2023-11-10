"use client";

import {createSlice} from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:5
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },

        incrementAmount: (state, action)=>{
            state.value=state.value+ action.payload;
        }
    }
})
export  const {increment, decrement,incrementAmount}=counterSlice.actions;
export default  counterSlice.reducer;
