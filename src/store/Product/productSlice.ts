import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { getAllProducts } from "./fetchProducts";

type categoryObj = Record<string, string[]>;
type productsObj = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

type ProductState = {
  status: "loading" | "idle" | "failed";
  error: string | null;
  productsList: productsObj;
  categories: categoryObj;
  totalPrice: number;
  min_max_price: { min: number; max: number };
  cartProducts: Product[];
  totalQuantity: number;
};

const initialState: ProductState = {
  productsList: {} as productsObj,
  error: null,
  status: "idle",
  categories: {},
  totalPrice: 0,
  min_max_price: { min: 0, max: 0 },
  cartProducts: [],
  totalQuantity: 0,
};

export const productReducer = createSlice({
  name: "product",
  initialState,

  reducers: {
    allProducts: (state, action: PayloadAction<any>) => {
      state.productsList = action.payload;

      action.payload.products.map((product: Product) => {
        if (!state.categories[product?.category]) {
          state.categories[product?.category] = [];
        }
        const element = state.categories[product?.category].includes(
          product.brand
        );
        if (!element) {
          state.categories[product?.category].push(product.brand);
        }
      });
    },

    changeCategories: (state, action: PayloadAction<string[]>) => {
      action.payload.map((item: string) => {
        if (!state.categories[item]) {
          state.categories[item] = [];
        }
      });
    },

    changeMinMaxPrice: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {

      state.min_max_price = action.payload;
    },

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
      if (state.cartProducts[index].quantity > 1) {
        state.cartProducts[index].quantity--;

        return;
      } else if (state.cartProducts[index].quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product: Product) => product.id !== action.payload.id
        );
      }
    },

    clearProduct: (state, action: PayloadAction<Product>) => {
      const index = state.cartProducts.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (state?.totalQuantity > 0 && index >= 0) {
        state.totalQuantity =
          state.totalQuantity - state?.cartProducts[index]?.quantity;

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
  },
});

export const {
  allProducts,
  addProduct,
  removeProduct,
  clearProduct,
  clearCart,
  changeMinMaxPrice,
  changeCategories,
} = productReducer.actions;
