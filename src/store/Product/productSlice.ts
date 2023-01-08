import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { getAllProducts } from "./fetchProducts";


type ProductState = {
  status: "loading" | "idle" | "failed";
  error: string | null;
  productsList: Product[];
  categories: string[];
  totalPrice: number;
  cartProducts: Product[];
  totalQuantity: number;
  filteredData: {
    category: string;
    minPrice: number;
    maxPrice: number;
  };
};

const initialState: ProductState = {
  productsList: [],
  error: null,
  status: "idle",
  categories: [],
  totalPrice: 0,
  cartProducts: [],
  totalQuantity: 0,
  filteredData: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
  },
};

export const productReducer = createSlice({
  name: "product",
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;

      const index = state.cartProducts.findIndex(
        (item: Product) => item.id === id
      );

      state.totalQuantity++;
      state.totalPrice = state.totalPrice + action.payload.price;
      if (index >= 0) {
        state.cartProducts[index].quantity++;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action: PayloadAction<Product>) => {
      const index = state.cartProducts.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (state.cartProducts[index].quantity >= 1) {
        state.totalQuantity--;
        state.totalPrice = state.totalPrice - action.payload.price;
      }
      if (state.cartProducts[index].quantity >= 1) {
        state.cartProducts[index].quantity--;

        return;
      } else if (state.cartProducts[index].quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product: Product) => product.id !== action.payload.id
        );
      }
    },

    clearCart: (state) => {
      state.cartProducts = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

    changeFilteredData: (state, action: PayloadAction<any>) => {
      state.filteredData.category = action?.payload?.category;
      state.filteredData.minPrice = action?.payload?.minPrice;
      state.filteredData.maxPrice = action?.payload?.maxPrice;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      if (state.productsList.length == 0) {
        state.productsList.push(...payload);
      }
      state.status = "idle";
      payload.map((product: Product) => {
        if (!state.categories.includes(product.category))
          state.categories.push(product.category);
        state.filteredData.category = state.categories[0];
      });
    });

    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      // if (payload) state.error = payload.message;
      state.status = "failed";
    });
  },
});

export const { addProduct, removeProduct, clearCart, changeFilteredData } =
  productReducer.actions;
