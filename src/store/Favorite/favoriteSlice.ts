import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

type FavoriteState = {
  favoriteList: Product[];
};

const initialState: FavoriteState = {
  favoriteList: [],
};

export const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    favoriteItem: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;

      const index = state.favoriteList.findIndex(
        (item: Product) => item.id === id
      );

      if (index >= 0) {
        state.favoriteList.splice(index, 1);
      } else {
        state.favoriteList.push({ ...action.payload });
      }
    },
  },
});

export const { favoriteItem } = favoriteReducer.actions;
