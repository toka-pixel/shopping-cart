import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/Product";
import { Product } from "../../types/Product";

type FetchProductsError = {
  message: string;
};

export const getAllProducts = createAsyncThunk<
  Product[],
  number,
  { rejectValue: FetchProductsError }
>(
  
  "getAllProducts", 
  async (limit: number, thunkApi) => {

  let data: Product[] = [];

  getProducts()
    .then((res) => {
      data = res.data;
    })
    .catch((e) => {
      return thunkApi.rejectWithValue({
        message: "Failed to fetch products.",
      });
    });

  return data;
});
