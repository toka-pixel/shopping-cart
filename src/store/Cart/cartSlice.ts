import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  status:boolean,
};

const initialState: CartState = {
  status: false,
};

export const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers:{
        changeStatus: (state, action: PayloadAction<boolean>) => {
           state.status=action.payload;
          },
    }
  
})

export const {changeStatus}=cartReducer.actions