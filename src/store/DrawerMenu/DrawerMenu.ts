import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DrawerMenuState = {
  cartStatus:boolean,
  favoriteStatus:boolean;
};

const initialState: DrawerMenuState = {
  cartStatus: false,
  favoriteStatus:false
};

export const drawerMenuReducer = createSlice({
    name: "drawerMenu",
    initialState,
    reducers:{
        changeCartStatus: (state, action: PayloadAction<boolean>) => {
           state.cartStatus=action.payload;
          },
          changeFavoriteStatus: (state, action: PayloadAction<boolean>) => {
            state.favoriteStatus=action.payload;
           },
    }
  
})

export const {changeCartStatus , changeFavoriteStatus}=drawerMenuReducer.actions