import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/Product";
import { Product } from "../../types/Product";


// type FetchProductsError = {
//   message: string;
// };


export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async () => {
    const res = await getProducts();
    console.log(res.data)
    return res.data;
  }
);


// export const getAllProducts = createAsyncThunk<
//   Product[],
//   void,
//   { rejectValue: FetchProductsError }
// >(
  
//   "getAllProducts", 
//   async ( thunkApi) => {

//   let data: Product[] = [];

//   getProducts()
//     .then((res) => {
//      return  res.data;
//     })
//     .catch((e) => {
//       // return thunkApi.rejectWithValue({
//       //   message: "Failed to fetch products.",
//       // });
//     });

//   return data;
// });
