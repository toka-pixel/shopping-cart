import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Product/productSlice";
import { drawerMenuReducer } from "./DrawerMenu/DrawerMenu";
import { favoriteReducer } from "./Favorite/favoriteSlice";
import { themeReducer } from "./Theme/themeSlice";
import { filterReducer } from "./Filter/filterSlice";

const store = configureStore({
  reducer: {
    product: productReducer.reducer,
    drawerMenu: drawerMenuReducer.reducer,
    favorite: favoriteReducer.reducer,
    theme: themeReducer.reducer,
    filter:filterReducer.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
