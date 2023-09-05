import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  filteredData: {
    category: string;
    minPrice: number;
    maxPrice: number;
  };
};

const initialState: FilterState = {
  filteredData: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
  },
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilteredData: (state, action: PayloadAction<any>) => {
      state.filteredData.category = action?.payload?.category;
      state.filteredData.minPrice = action?.payload?.minPrice;
      state.filteredData.maxPrice = action?.payload?.maxPrice;
    },
  },
});

export const { changeFilteredData } = filterReducer.actions;
