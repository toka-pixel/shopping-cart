import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Product/productSlice";



const store = configureStore({
  reducer: {
    product: productReducer.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
