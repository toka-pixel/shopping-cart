import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  isDarK: boolean;
  darkColor: string;
  lightColor: string;
};
const getDefaultTheme = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localStorageTheme =
    localStorage.getItem("darktheme") === "true" ? true : false;
  const browserDefault = isBrowserDefaultDark();
  return localStorageTheme || browserDefault;
};
const initialState: ThemeState = {
  isDarK: getDefaultTheme(),
  darkColor: "#2c2b2b",
  lightColor: "#fff",
};

export const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => {
      state.isDarK = action.payload;
    },
  },
});

export const { changeMode } = themeReducer.actions;
