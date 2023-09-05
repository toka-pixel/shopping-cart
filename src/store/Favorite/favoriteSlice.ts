import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

type FavoriteState = {
  favoriteList: Product[];
  numOf_Favorites: number;
};

const initialState: FavoriteState = {
  favoriteList: [],
  numOf_Favorites: 0,
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
        state.favoriteList[index].favorite = false;
        console.log(state.favoriteList[index].favorite);
        state.favoriteList.splice(index, 1);
        state.numOf_Favorites--;
      } else {
        state.favoriteList.push({ ...action.payload, favorite: true });

        state.numOf_Favorites++;
      }
    },
  },
});

export const { favoriteItem } = favoriteReducer.actions;
