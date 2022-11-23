import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { getAllProducts } from "./fetchProducts";

type TodosState = {
  status: "loading" | "idle" | "failed";
  error: string | null;
  productsList: Product[];
  categories: string[];
  totalPrice:number
};

const initialState: TodosState = {
  productsList: [],
  error: null,
  status: "idle",
  categories: [],
  totalPrice:0
};

export const productReducer = createSlice({
  name: "product",
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;

      const index = state.productsList.findIndex(
        (item: Product) => item.id === id
      );
      if (index >= 0) {
        state.productsList[index].quantity++;
      } else {
        state.productsList.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action: PayloadAction<Product>) => {
      const index = state.productsList.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (state.productsList[index].quantity >= 1) {
        state.productsList[index].quantity--;
        return;
      } else if (state.productsList[index].quantity === 1) {
        state.productsList = state.productsList.filter(
          (product: Product) => product.id !== action.payload.id
        );
      }
    },

    clearCart:(state)=>{
      state.productsList=[];
      state.totalPrice=0
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.productsList.push(...payload);
      state.status = "idle";
      payload.map((product: Product) => {
        if (!state.categories.includes(product.category))
          state.categories.push(product.category);
      });
    });

    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      // if (payload) state.error = payload.message;
      console.log('fail')
      state.status = "failed";
    });
  },
});
