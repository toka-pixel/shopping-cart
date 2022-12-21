import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Product/productSlice";
import { cartReducer } from "./Cart/cartSlice";
import { favoriteReducer } from "./Favorite/favoriteSlice";

const store = configureStore({
  reducer: {
    product: productReducer.reducer,
    cart:cartReducer.reducer,
    favorite:favoriteReducer.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
